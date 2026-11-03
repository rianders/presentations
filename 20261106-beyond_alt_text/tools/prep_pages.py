#!/usr/bin/env python3
"""Prepare course pages for an AI transcription tool.

PDFs become one PNG per page, so the tool reads the page as it looks instead of a
broken text layer. Images much taller than a page are split into page-shaped pieces,
cut in the white space between lines of work. Where no clean gap exists, the next piece
repeats a small strip so nothing is lost at the seam.

    python3 prep_pages.py notes.pdf tall-page.png --out prepared/

Needs ImageMagick (`magick`) and, for PDFs, poppler (`pdftoppm`).
"""
import argparse
import pathlib
import re
import subprocess
import sys

PAGE_RATIO = 1.3     # height / width of a letter page, roughly
SPLIT_ABOVE = 1.6    # split only images taller than this ratio
OVERLAP = 0.08       # share of a piece repeated from the piece above
SEARCH = 0.25        # how far either side of a target cut to look for white space
BAND = 12            # rows averaged when judging white space
BLANK = 3            # most ink a row can carry and still count as white space


def run(*cmd):
    return subprocess.run(cmd, check=True, capture_output=True, text=True).stdout


def size(path):
    w, h = run("magick", "identify", "-format", "%w %h", f"{path}[0]").split()
    return int(w), int(h)


def row_ink(path, height):
    """Ink per row, 0 (white) to 255 (black), from a 1-pixel-wide resize."""
    out = run("magick", str(path), "-colorspace", "Gray", "-resize", f"1x{height}!",
              "-depth", "8", "txt:-")
    ink = [0] * height
    for line in out.splitlines()[1:]:
        m = re.match(r"0,(\d+):\s*\((\d+(?:\.\d+)?)", line)
        if m:
            ink[int(m.group(1))] = 255 - float(m.group(2))
    return ink


def cut_points(ink, width, height):
    piece = int(width * PAGE_RATIO)
    cuts, top = [], 0
    while height - top > piece * 1.15:
        target = top + piece
        lo, hi = max(top + piece // 2, target - int(piece * SEARCH)), min(height - BAND, target + int(piece * SEARCH))
        best = min(range(lo, hi), key=lambda y: sum(ink[y:y + BAND]))
        cut = best + BAND // 2
        cuts.append((cut, max(ink[best:best + BAND]) <= BLANK))
        top = cut
    return cuts


def split(path, out_dir):
    w, h = size(path)
    stem = path.stem
    if h / w <= SPLIT_ABOVE:
        dest = out_dir / f"{stem}.png"
        run("magick", str(path), str(dest))
        return [(dest, 0, h)]
    cuts = cut_points(row_ink(path, h), w, h)
    bounds, top, clean = [], 0, True
    for cut, blank in cuts + [(h, True)]:
        # A cut through clean white space needs no overlap; one that had to cross ink
        # repeats a strip in the next piece so the cut line is readable in one of them.
        start = top if clean else max(0, top - int((cut - top) * OVERLAP))
        bounds.append((start, cut))
        top, clean = cut, blank
    pieces = []
    for i, (y0, y1) in enumerate(bounds, 1):
        dest = out_dir / f"{stem}-part{i}of{len(bounds)}.png"
        run("magick", str(path), "-crop", f"{w}x{y1 - y0}+0+{y0}", "+repage", str(dest))
        pieces.append((dest, y0, y1))
    return pieces


def pdf_pages(path, out_dir, dpi):
    prefix = out_dir / f"{path.stem}-page"
    run("pdftoppm", "-r", str(dpi), "-png", str(path), str(prefix))
    return sorted(out_dir.glob(f"{path.stem}-page-*.png"))


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("files", nargs="+", type=pathlib.Path)
    ap.add_argument("--out", type=pathlib.Path, default=pathlib.Path("prepared"))
    ap.add_argument("--dpi", type=int, default=250)
    args = ap.parse_args()
    args.out.mkdir(parents=True, exist_ok=True)

    manifest = []
    for f in args.files:
        sources = pdf_pages(f, args.out, args.dpi) if f.suffix.lower() == ".pdf" else [f]
        for src in sources:
            pieces = split(src, args.out)
            if src.parent == args.out and len(pieces) > 1:
                src.unlink()  # a rendered PDF page that was split; keep only its pieces
            for dest, y0, y1 in pieces:
                manifest.append(f"{dest.name}\tfrom {src.name}\trows {y0}-{y1}")
    (args.out / "manifest.txt").write_text("\n".join(manifest) + "\n")
    print("\n".join(manifest))


if __name__ == "__main__":
    sys.exit(main())

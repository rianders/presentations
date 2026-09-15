#!/usr/bin/env python3
"""Turn Claude Code session transcripts into readable Markdown.

Claude Code already stores every session as JSONL under
~/.claude/projects/<slugified-project-path>/<session-id>.jsonl
This just makes those files readable, and lets you keep the ones worth keeping.

    python3 tools/export-transcripts.py --list
    python3 tools/export-transcripts.py --all -o conversations/
    python3 tools/export-transcripts.py <session-id-prefix> -o conversations/
    python3 tools/export-transcripts.py --all --tools -o conversations/

By default tool calls and results are summarized to one line each and thinking
blocks are dropped, which is what makes the output readable. --tools keeps the
full tool input/output, --thinking keeps reasoning blocks.
"""
import argparse, json, pathlib, re, sys
from datetime import datetime

HOME = pathlib.Path.home()


def project_dir(cwd: pathlib.Path) -> pathlib.Path:
    """Claude Code slugifies the project path: / and . both become -."""
    slug = re.sub(r"[/.]", "-", str(cwd))
    return HOME / ".claude" / "projects" / slug


def load(path):
    for line in path.open(encoding="utf-8", errors="replace"):
        line = line.strip()
        if line:
            try:
                yield json.loads(line)
            except json.JSONDecodeError:
                continue


def session_meta(path):
    title, first, last, msgs = None, None, None, 0
    for rec in load(path):
        if rec.get("type") == "ai-title" and not title:
            title = rec.get("aiTitle")
        if rec.get("type") in ("user", "assistant"):
            msgs += 1
            ts = rec.get("timestamp")
            if ts:
                first = first or ts
                last = ts
    return {"path": path, "id": path.stem, "title": title or "(untitled)",
            "first": first, "last": last, "messages": msgs,
            "size": path.stat().st_size}


def fmt_day(ts):
    if not ts:
        return "unknown"
    try:
        return datetime.fromisoformat(ts.replace("Z", "+00:00")).strftime("%Y-%m-%d")
    except ValueError:
        return ts[:10]


def blocks(content, keep_tools, keep_thinking):
    """Render one message's content list into Markdown chunks."""
    if isinstance(content, str):
        return [content.strip()] if content.strip() else []
    out = []
    for b in content or []:
        kind = b.get("type")
        if kind == "text":
            if b.get("text", "").strip():
                out.append(b["text"].strip())
        elif kind == "thinking" and keep_thinking:
            t = b.get("thinking", "").strip()
            if t:
                out.append("> _thinking_\n>\n" + "\n".join("> " + x for x in t.splitlines()))
        elif kind == "tool_use":
            name = b.get("name", "tool")
            inp = json.dumps(b.get("input", {}), indent=2)
            if keep_tools:
                out.append(f"**[{name}]**\n\n```json\n{inp}\n```")
            else:
                desc = (b.get("input") or {}).get("description") \
                    or (b.get("input") or {}).get("command") \
                    or (b.get("input") or {}).get("file_path") or ""
                desc = str(desc).splitlines()[0][:100] if desc else ""
                out.append(f"`[{name}]` {desc}".rstrip())
        elif kind == "tool_result":
            c = b.get("content")
            if isinstance(c, list):
                c = "\n".join(x.get("text", "") for x in c if isinstance(x, dict))
            c = (c or "").strip() if isinstance(c, str) else str(c)
            if keep_tools:
                out.append(f"```\n{c[:20000]}\n```")
            else:
                n = len(c.splitlines())
                out.append(f"`[result: {n} line{'s' if n != 1 else ''}]`")
        elif kind == "image":
            out.append("`[image]`")
    return out


def to_markdown(path, keep_tools=False, keep_thinking=False):
    meta = session_meta(path)
    lines = [f"# {meta['title']}", ""]
    lines.append(f"Session `{meta['id']}` · {fmt_day(meta['first'])} to "
                 f"{fmt_day(meta['last'])} · {meta['messages']} messages")
    branch = None
    for rec in load(path):
        if rec.get("gitBranch"):
            branch = rec["gitBranch"]
            break
    if branch:
        lines.append(f"Branch `{branch}`")
    lines += ["", "---", ""]

    for rec in load(path):
        if rec.get("type") not in ("user", "assistant"):
            continue
        if rec.get("isSidechain") or rec.get("isMeta"):
            continue
        msg = rec.get("message") or {}
        content = msg.get("content")
        chunks = blocks(content, keep_tools, keep_thinking)
        if not chunks:
            continue
        # Tool results come back as role "user" records. They are not things the
        # user said, so render them as a continuation of Claude's turn rather
        # than under a "You" heading.
        if rec["type"] == "user" and isinstance(content, list) and content \
                and all(b.get("type") == "tool_result" for b in content):
            lines += ["\n\n".join(chunks), ""]
            continue
        who = "## You" if rec["type"] == "user" else "## Claude"
        ts = rec.get("timestamp")
        stamp = ""
        if ts:
            try:
                stamp = "  \n*" + datetime.fromisoformat(
                    ts.replace("Z", "+00:00")).strftime("%Y-%m-%d %H:%M") + "*"
            except ValueError:
                pass
        lines += [who + stamp, ""] + ["\n\n".join(chunks), ""]
    return "\n".join(lines) + "\n"


def slug(s, n=50):
    s = re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")
    return s[:n] or "session"


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("session", nargs="?", help="session id or unique prefix")
    ap.add_argument("--list", action="store_true", help="list sessions and exit")
    ap.add_argument("--all", action="store_true", help="export every session")
    ap.add_argument("-o", "--out", default="conversations", help="output directory")
    ap.add_argument("-p", "--project", default=".", help="project path (default: cwd)")
    ap.add_argument("--tools", action="store_true", help="keep full tool input/output")
    ap.add_argument("--thinking", action="store_true", help="keep reasoning blocks")
    args = ap.parse_args()

    pdir = project_dir(pathlib.Path(args.project).resolve())
    if not pdir.is_dir():
        sys.exit(f"No transcripts found at {pdir}")
    files = sorted(pdir.glob("*.jsonl"), key=lambda p: p.stat().st_mtime, reverse=True)
    if not files:
        sys.exit(f"No .jsonl transcripts in {pdir}")

    if args.list or not (args.all or args.session):
        print(f"{pdir}\n")
        print(f"{'DATE':<12} {'MSGS':>5} {'SIZE':>8}  {'ID':<10} TITLE")
        for f in files:
            m = session_meta(f)
            print(f"{fmt_day(m['last']):<12} {m['messages']:>5} "
                  f"{m['size']/1024:>7.0f}K  {m['id'][:8]:<10} {m['title']}")
        print(f"\n{len(files)} session(s). Export with --all, or pass an id prefix.")
        return

    targets = files if args.all else [f for f in files if f.stem.startswith(args.session)]
    if not targets:
        sys.exit(f"No session matching {args.session!r}")

    out = pathlib.Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    for f in targets:
        m = session_meta(f)
        if not m["messages"]:
            continue
        name = f"{fmt_day(m['last'])}-{slug(m['title'])}-{m['id'][:8]}.md"
        dest = out / name
        dest.write_text(to_markdown(f, args.tools, args.thinking), encoding="utf-8")
        print(f"{dest}  ({m['messages']} messages)")


if __name__ == "__main__":
    main()

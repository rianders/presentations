# Test specimens — notation the Gen AI reader is tested on

Made October 26, 2026 for the slide 7 demo (worklist item 1). Each image has an answer
key; score the model against the key, never against what sounds right.

| Image | What it is | Key |
|---|---|---|
| `treble-melody.png` | 8-bar folk melody, treble clef, G major, 2/4. Obscure on purpose: the model can't recall it. | `treble-melody.key.txt` |
| `piano-page.png` | Mozart K. 545, mvt. 1, mm. 1–12, two staves. Famous on purpose: watch for recall instead of reading. | `piano-page.key.txt` |
| `laban-symbols-unlabeled.png` | The 12 Movement4Brain symbols, labels removed, shuffled and numbered. | `laban.key.txt` |
| `laban-sequence.png` | 8 of those symbols in a column, read bottom to top. Built for testing, not a real dance. | `laban.key.txt` |

The `.musicxml` files are the sources the PNGs were engraved from (Verovio, music21 corpus).
Titles and composer are left off every image.

## Prompt to use (same wording for every model)

> Read this notation aloud the way a musician (or dancer) would say it, from start to
> finish. Then list anything you were unsure of.

## What to score

- **Silent guesses:** a fluent answer that is wrong. This is the slide 8 failure.
- **Recall vs reading** (piano page): does it say "Mozart" and then describe the
  famous piece rather than these 12 measures? Check m9–m10 especially.
- **Reading order** (Laban sequence): bottom to top, or did it read top down?
- **Fill-only differences** (Laban): hatched / solid / dot = high / low / middle.
- **Did it flag uncertainty**, or name something plausible?

Run on a Rutgers NetID account (Gemini or Copilot) for anything shown as a demo;
anything else is a showcase and gets labelled as one.

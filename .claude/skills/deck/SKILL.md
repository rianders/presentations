---
name: deck
description: Build, edit, preview, and ship a presentation deck in this repo. Use for any work on a talk — creating a new dated deck folder, editing slides in a .jsx deck, previewing locally, or publishing to GitHub Pages. Covers the shared component vocabulary, the compile check that prevents blank slides, and the branch/registration steps.
---

# Presentation decks

Decks are React-in-JSX files compiled in the browser by `shell.html`. There is no build
step and no bundler. A syntax error does not fail loudly — it renders a **blank slide**.

## Layout

One deck per dated folder. Never put two decks in one folder.

```
YYYYMMDD-short-name/
  short-name.jsx        the deck
  *.png                 QR codes, screenshots
  *.md                  planning docs (time budget, demo plan, run of show)
```

Viewed at `shell.html?p=YYYYMMDD-short-name/short-name` — folder/file path, **no `.jsx`**.

## Before writing a new deck: port, don't draft

Find the nearest prior deck on a related topic and port its slides and prose. Drafting
fresh produces drift — different card treatments per slide, contradictions with the
event abstract, and stale facts that read fine in isolation. Porting keeps one voice
across the series.

When you port, re-verify every fact: dates, policy numbers, product names, prices,
entitlements. Tools get renamed between sessions.

## Component vocabulary

Audience-facing. **Use these instead of hand-rolling `<div>`s** — inline cards are how
a deck ends up with five different card styles.

| Component | Use |
|---|---|
| `SlideShell` | Every slide. Header chrome, footer, `tag` = segment + time |
| `SectionCard` | Grid cards. `icon` emoji, `accent` for the emphasized one |
| `Bullet` | List items |
| `CodeBlock` | Prompts and code — dark background, monospace |
| `Note` | Amber caution aside |
| `DropIn` | Red italic "here's the insight" aside |
| `PipelineStep` | Numbered sequential steps |
| `Heading` / `Lede` | Slide title and standfirst |

Presenter-only scaffolding, hidden from the audience: `Placeholder` (with `port` /
`todo` / `onDay`), `Demo`, `Poll`, `Interact`, `ContextLayer`.

**An empty `todo` means the slide is done.** Treat a deck with open todos as unfinished
and say so rather than reporting it complete.

`ContextLayer n={…}` is a *sequential progress counter* rendered against a
`CONTEXT_LAYERS` total. Reordering or merging slides requires renumbering every `n` and
updating the constant, or the progress bar lies.

## URL parameters

| Param | Effect |
|---|---|
| `&notes` | Presenter notes on |
| `&clean` | Presenter notes off |
| `&print` | Paginated print view with a Save-as-PDF button |
| `&s=N` | Jump to slide N |

Older decks (pre-2026-04) predate this and support none of them — arrow keys only.

## Preview locally

```bash
python3 -m http.server 8777 --bind 127.0.0.1 --directory "$(git rev-parse --show-toplevel)"
# http://localhost:8777/shell.html?p=YYYYMMDD-short-name/short-name&notes
```

Must be served over HTTP — `shell.html` fetches the JSX, so `file://` fails CORS.

## Verify before every commit

```bash
node .claude/skills/deck/check.js            # all tracked decks
node .claude/skills/deck/check.js path.jsx   # one deck
```

Compiles with the same pinned Babel version and `runtime: 'classic'` preset that
`shell.html` uses. Run it after any edit — reading the file back does not catch a JSX
error.

**`check.js` only checks syntax.** A deck that references a component it no longer
defines compiles clean and renders blank. Catch that with:

```bash
node .claude/skills/deck/render-check.js path/to/deck.jsx
```

It executes the compiled deck against a stub React and walks the whole tree, so an
undefined component surfaces as `RUNTIME FAIL: SlideShell is not defined` instead of as
an empty white card in front of a room. Run **both** before committing — deleting a
component definition is exactly the edit `check.js` waves through.

## Ship

1. Branch first: `git switch -c YYYYMMDD-short-name`. Never commit to `main`.
2. Register the deck in **`index.html`** (link + DRAFT badge while in progress) and in
   the **`README.md`** table.
3. Run the compile check.
4. **GitHub Pages serves from `main`** — a deck on a branch is not live until merged.
   Say so when a talk date is near; ask before merging.

## Gotchas

- `README.md` and `readme.md` were both once tracked with `core.ignorecase=true`. If the
  lowercase entry reappears, staging silently splits them into different blobs and
  GitHub renders the stale one.
- Image `src` paths in a deck resolve against the **repo root**, not the deck folder —
  they must include the folder: `src="YYYYMMDD-short-name/qr.png"`.
- Deck folders for future sessions may exist but be empty and untracked.

## Worklist lives outside the deck

Outstanding content work goes in `worklist.md` inside the deck folder, keyed by slide
number — not in `todo` arrays inside slides. Todo lists embedded in slides let decisions
sit deferred while the deck looks finished.

`Placeholder onDay={[...]}` stays in the deck: those are delivery instructions, read live
under `&notes`, and they never "complete".

Slide numbers in the worklist come from the `// ── N:` markers and shift on reorder —
re-extract rather than renumbering by hand.

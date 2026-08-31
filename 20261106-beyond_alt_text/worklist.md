# Worklist — Beyond Alt Text: Notation, Diagrams & Symbols with AI

**November 6, 2026 · 11:00 am – 12:30 pm · Zoom**
Format: 60 min content · 30 min work session
Folder: `20261106-beyond_alt_text/` — **deck not started.** No `.jsx` yet.

Started **August 28, 2026**, out of the September 18 text-to-speech work. Nothing here
has been built; this is the spec plus everything already known, so the deck can start
from a running position instead of a blank file.

**Content seed: `notation-inventory.md` in this folder.** Failure taxonomy, discipline
inventory, and the A/B/C fix grouping. That file is the raw material; this file is
the plan.

---

## What the abstract already commits you to

The published abstract is the spec, and it is unusually specific. It promises:

- **Cross-disciplinary coverage** — "humanities, social sciences, and natural sciences
  alongside STEM." Named examples: equations, flow charts, syntax trees, structural
  formulas, supply-demand curves, choropleth maps, IPA transcription, music notation.
- **Conversion into screen-reader-renderable notation in Canvas** — not descriptions of
  equations, actual renderable notation. That is a MathML/LaTeX claim.
- **Narrated walkthroughs** of flow charts, process diagrams, decision trees.
- **Audio descriptions** of technical figures.
- **Live screen-reader demonstrations** showing accessible vs inaccessible.
- Work session applying the workflow to the attendee's own content, **from any discipline**.

It also already contains the thesis in Rick's own words: notation "that experts read
differently than they'd ever say aloud." **That sentence is the deck.**

---

## Two promises this session inherits

### The earlier promise
Notation has been advertised on this topic before — named in an abstract, led with in an
agenda, and then shipped as **a blank slide titled "Focusing on notation."** An outline
for the real version (Canvas, MathJax, LaTeX, Ally) exists and was never built.

**Some of this room has now been promised notation twice.** The third time has to deliver.

*Note on this file: it records lessons, not verdicts. Earlier material is discussed
unattributed on purpose — the point is what this session does next.*

### The September 18 promise
September 18's slide 8 carries a notation card whose closing line is
**"That is the whole of November 6."** Whatever that card says on the day is a debt this
deck pays. Re-read it before building — do not let the two drift.

---

## BLOCKING

### 1. Decide the screen-reader demo — hardest logistics in the series.
The abstract's headline differentiator, and nothing like it has been attempted in these
sessions. Unresolved:
- **Which reader, on which OS.** NVDA (Windows, free), JAWS (Windows, licensed), or
  VoiceOver (macOS, built in). Free and installable matters if the room is to try it.
- **Audio routing over Zoom.** Screen-reader speech is system audio, not microphone —
  it requires "share sound" on the screen share, and it is easy to get silently wrong.
  **Test this on a real Zoom call, not in theory.**
- **Live or recorded.** The standing rule and prior practice both point at recorded.
  A screen reader mid-demo is exactly the thing that misbehaves live.
- **Pacing.** Default screen-reader speed is unintelligible to newcomers and slowing it
  down misrepresents how users actually listen. Say which you are doing and why.

### 2. Pick the worked examples — one per discipline cluster, all real.
The abstract promises humanities, social sciences, natural sciences *and* STEM. That is
four artifacts minimum, and the September 18 rule holds: **real material every time,
never fabricated.** Candidate sources: the Accessibility Sandbox Canvas course
(`rutgers.instructure.com/courses/375349`, also `316933`) and attendees' own material.

Strongest candidates from `notation-inventory.md`, chosen to prove the range:
- **Humanities** — Leiden Conventions (brackets are an editorial *claim*) or IPA.
- **Social science** — supply-demand curve, or a choropleth (colour as sole carrier).
- **Natural science** — a structural formula, whose spoken form is a whole other
  naming system.
- **STEM** — an equation image, the canonical case with the most existing machinery.
- **Wildcard for warmth** — chess, knitting charts, or baseball scorekeeping.

### 3. Verify the Canvas notation stack before claiming it.
The abstract promises "screen-reader-renderable notation in Canvas." Confirm, don't assume:
- Canvas equation editor — what does it actually emit, MathML or an image?
- MathJax in Rutgers Canvas — on by default?
- Does Ally do anything at all for math, or does it just score the image?
- What a real screen reader does with each of those, on the demo machine.

**Carry September 18's entitlement discipline over verbatim: the moment you name a tool
you inherit the obligation to be right.** Every claim gets verified with a date.

### 4. Build the deck.
Port the component vocabulary from `20260918-digital_accessibility/digital-accessibility.jsx`
so the series keeps one visual language. Run both checks before shipping —
`.claude/skills/deck/check.js` catches syntax, `render-check.js` catches blank slides.
Branch first; never commit to main.

### 5. Write `demos.md` and `presenter-notes.md` from the start.
September 18 is still missing both and it has become the largest open item on that deck.
Do not repeat it. One view and it is the audience's — every delivery note goes in
`presenter-notes.md` and is never rendered.

---

## IMPORTANT

### 6. Settle the spine before writing slides.
September 18's four beats (Source → AI pass → Verify → Place it) are why that deck holds
together, and the absence of one is why earlier material didn't. This deck needs its
own, and `notation-inventory.md` already suggests it — **the A/B/C grouping by what the
fix actually is:**

| Group | Examples | The fix |
|---|---|---|
| **A · Substitutable** | Basic math, chemical formulas, stats symbols | A standard spoken form exists. MathML/LaTeX. |
| **B · Linearizable with scope markers** | Fractions, matrices, code, IUPAC names | Flattens *if* structure is announced. Where AI genuinely helps. |
| **C · Not linearizable** | Music staves, circuit diagrams, structural formulas, syntax trees | **Audio can't carry it.** A different artifact, not a better tool. |

**Group C is the honest core and should not be softened.** It is this deck's equivalent of
September 18's limits slide — the slide that makes the room trust everything else.

### 7. Lead with the silent-failure argument.
The strongest single idea to come out of the September 18 work: ordinary TTS failures are
*audible* — a mangled name still sounds mangled. **Notation fails silently.** `x²+y²` as
"x two plus y two" is fluent, confident, and false, and the student has no way to know.
That is the opening, not a mid-deck card.

### 8. Make the faculty-ownership argument explicitly.
`(a, b)` is an ordered pair, an open interval, a gcd, or an inner product — **you cannot
pronounce it without knowing the course.** This is the strongest argument in the entire
series for why faculty write their own descriptions rather than a central office doing it,
and it has never been said out loud. Say it here.

### 9. Mine the existing outline rather than re-deriving it.
Canvas, MathJax, LaTeX, Ally — the unbuilt version of this session already exists as an
outline. Two facts in that material must **not** be carried over: the April 24, 2026 deadline
(now **April 26, 2027**) and the "WVAG 2.2" typo (Rutgers is **WCAG 2.1 Level AA**).

### 10. This deck will be inspected harder than September 18's.
Same non-negotiables, higher stakes: real alt text on every image, colour never the sole
carrier, `&print` readable in greyscale, contrast checked at WCAG 2.1 AA. **And a deck
about notation had better not put an image of an equation on a slide with no alt text.**
Walk every slide in `&print` before shipping. The failure modes to hunt for: blank slides,
duplicate slides, and notes-to-self left visible to the audience.

---

## WORTH DOING

### 11. Bring forward what September 18 learned late.
- **Learning objectives as the organizing idea** (present in earlier material; September 18
  nearly lost it). Notation description aligned to what the student is meant to learn.
- **Students as people who act**, not files that get processed. September 18's voice
  drifted here and it needed a deliberate fix.
- **A compare-the-tools moment** in the work session — make the room do the evaluating.
- **POUR** — name the four WCAG principles once.

### 12. Consider a "notation your field bans" beat.
Medicine's Joint Commission / ISMP **"Do Not Use" list** exists because certain notation is
routinely misread by *humans*. A discipline that outlawed its own notation for being
misread is the best stakes argument available, and it takes twenty seconds.

### 13. Decide whether the work session can actually work here.
September 18's work session assumes everyone has a file they can act on in 20 minutes.
Notation is harder and the tooling is heavier. Either scope the activity down (describe
one figure well) or accept that this session's work block is more consultation than
production — and say so on the slide.

---

## Carried over — settled by earlier sessions, don't relitigate

- **One view, and it is the audience's.** Delivery notes never live in the deck.
- **Every segment stands alone** — sessions are recorded and clipped, no "as I said earlier."
- **No relative time.** Always the literal date.
- **Real material every time.** No fabricated numbers, no invented examples.
- **If the room cannot legally use it on Monday, it is a showcase, not a demo** — record
  it, keep it short, label it as such.
- **Verify is a named beat**, not an afterthought. A segment without one isn't finished.
- **Entitlement tiers** (from `20260918-digital_accessibility/tts-decision-matrix.md`):
  T1 institutional / T2 provided / T3 local / T4 outside. T4 is showcase-only.

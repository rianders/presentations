# Clip 10 — tools × history × prompt · November 3, 2026

> **Access tiers (Rick, November 3):** every Rutgers faculty member has **Gemini and
> Copilot**. **ChatGPT Edu** with GPT-6 Astra is an **upgrade** only some have. Read the
> results below as two levels: what everyone can use, and what the upgrade adds. Copilot is
> not tested yet.

Rick's question: does it matter that the assistant has his conversation history?
Same page every run: `test-specimens/algebra-worked-problems-section-13.png`.
Prompts: "Make this accessible." (plain) and the slide 11 prompt, `[your field]` = college algebra.
History: a normal chat on Rick's account (long history of math chats), or a Temporary chat
(Gemini: not saved to recent chats, not used for training).

Checks for every run:
- **Fix:** does it add "x > 0" to the page's `√x² = x`?
- **Warning:** does "DO NOT REWRITE NEGATIVE EXPONENTS!" survive?
- **New errors:** math that isn't on the page.
- **Format:** text a screen reader can read, or an image.

## Gemini, 3.6 Flash, Rutgers Edu account

| Run | History | Prompt | Format | Fix | Warning | New errors |
|---|---|---|---|---|---|---|
| G1 | normal | plain | **image** | no | yes | many: problem 4 answer `x^{-5/2}` (page: `x^{-1/2}`), `√x(x+9)²`, `(2x+9)/√(x+9)`, garbled "@ the ano", a duplicated answer |
| G2 | normal | slide 11 | text | **no, kept as written** | yes | misread lines 14, 15 and 22 (`⁵√x²` for `⁵√x³`); flagged two of them as unsure |
| G3 | temporary | plain | **image** | no | yes | invented step `3x²−5x+3x−5`, "(flip second fraction)", "[ALTERNATE EXAMPLE:]", problem 4 answer `(x+9)^{1/2}` |
| G4 | temporary | slide 11 | — | — | — | **failed 4 times** ("Sorry, something went wrong") |

Earlier the same day, with history, on the same page:
- Take 1 (Pro): plain → image, **added "(x > 0)"**; slide 11 → text, kept as written.
- Take 2 (Flash; Pro "in high demand"): plain → text, **added "(for x > 0)"**, "Weber State
  University"; slide 11 → text, kept as written.

## What this says so far

- **The plain prompt is unreliable in a new way each time.** Over four runs it added
  "x > 0" twice, and twice instead introduced new errors into the math. Three of the four
  answers were images.
- **The slide 11 prompt gave text every time it ran, and never added "x > 0".** It still
  misreads some lines; it flags some of those, not all.
- **History made no visible difference to the plain prompt.** G1 and G3 fail in the same
  way. The slide 11 prompt couldn't be tested without history: Gemini's temporary chat
  failed on it 4 times running, while the plain prompt worked there. That could be an
  outage that afternoon or something about temporary chats; re-run before quoting it.
- One page, a few runs each. This is a demonstration, not a measurement: say so on the slide.

## ChatGPT Edu, Chat mode, 5.6 Instant (default)

No-history runs use Temporary chat set to **Unpersonalized**. ChatGPT's temporary chat is
*Personalized* by default: it can still use memory, plugins and custom instructions.

| Run | History | Prompt | Format | Fix | Warning | New errors |
|---|---|---|---|---|---|---|
| C1 | normal | plain | text | **yes: `|x|`**, and says "The notes point out that √x² requires care", which they don't | **reworded:** "Do not rewrite negative exponents *too early*", plus a reason | opens with "correcting notation where needed" |
| C2 | normal | slide 11 | text | **no, kept as written** | yes, word for word | says the last line is cut off (it isn't); marks 3 uncertain spots |
| C3 | temporary, unpersonalized | plain | text | **yes: `|x|`**, "If the course assumes x > 0…" | **reworded** ("too early") and **broken**: adds "Using positive exponents: (x+1)²/x^{5/2}" | solves every step |
| C4 | temporary, unpersonalized | slide 11 | text | **no, kept as written** | yes, word for word | spot-checked these two lines only |

**History is not the cause.** C3, with no memory or history, corrects the page just as C1 does,
and goes further: it does exactly what the page's warning says not to do.

## ChatGPT Edu, Work mode — models available

Work mode lists GPT-6.1 Sol, **GPT-6 Astra**, GPT-6 Sol, GPT-6 Luna, GPT-5.6 Sol,
GPT-5.6 Terra and GPT-5.6 Luna (default, Medium effort). Chat mode lists only GPT-6 and
GPT-5.6 Sol. Astra is Work-only.

## ChatGPT Edu, Work mode, normal chats

| Run | Model | Prompt | Format | Fix | Warning | Notes |
|---|---|---|---|---|---|---|
| W1 | GPT-5.6 Luna, Medium (default) | plain | text | **kept, but annotated:** "This equality assumes x ≥ 0, because in general √x² = \|x\|" | yes | adds teaching headings ("Simplifying a square root") |
| W2 | GPT-5.6 Luna, Medium | slide 11 | text | **no, kept as written** | yes, word for word | spot-checked |
| A1 | **GPT-6 Astra**, Medium | plain | text | **yes, openly:** "Two apparent errors are corrected below" … "Correction: … the correct simplification is (2x+9)/\|x\|" | yes | shows the page's line before correcting it; a second correction on the fifth-root example |
| A2 | **GPT-6 Astra**, Medium | slide 11 | text, LaTeX + read-aloud table | **no, kept as written** | yes, as a quotation | the strongest spatial description: "is red and positioned at the lower left", arrows, ovals, wavy underlines |
| A3 | **GPT-6 Astra**, Medium | Rick's working prompt (below) | **HTML file**, `algebra-accessible.html` | "Apparent source errors are preserved with separate notes" | not yet checked | worked 2m 39s, searched the web; "all 30 equations"; says WCAG 2.2 AA, "full assistive-technology testing remains unverified". **File not yet downloaded or checked.** |

### A3 output, checked (November 3)

File: `outputs/astra-A3-algebra-accessible.html` (20 KB, one file, no scripts, no external
loads). Checked line by line against the source page.

**Transcription: the best of any run.**
- All six examples, every line in order; the working lines in problem 4 (`x^{2/2}`,
  `(x+9)^{2/2} + x(1)`) match the page, which Gemini got wrong.
- `√x² = x` is kept as written. A boxed "Transcriber's note (not handwritten)" says the
  equality assumes x > 0. The warning is kept verbatim, also with a labelled note.
- It caught a real oddity on the page: the extra `(2x+9)` in the fifth-root multiplier.
  It keeps it, and says so "rather than silently correcting it".
- Colours, ovals, boxes, strike-through cancellations and arrows are drawn *and* described
  in "Position and marks" paragraphs, e.g. "A red single-radical fraction sits farther left,
  slightly lower."
- Its own footer: "not a certification of conformance or a completed assistive-technology audit."

**Accessibility: two real problems.**
1. **A screen reader skips the math by default.** All 30 equations are `aria-hidden="true"`.
   The only spoken form is inside 30 collapsed `<details>` "Equation in words" controls. A
   screen-reader user hears the position notes, then has to open each equation one at a
   time. It's keyboard-operable, so arguably passes, but it isn't how anyone wants to read.
2. **No MathML, and its look depends on a `<style>` block.** Fractions, ovals and colours are
   CSS. Canvas's editor strips `<style>` (verify on the sandbox), so pasted into a page it would
   likely collapse to plain linear text. Without MathML, MathCAT has nothing to read, so this
   isn't the "screen-reader-renderable notation in Canvas" the abstract promises.

**For the deck:** a strong showcase of reading and spatial description (the "said the way
people say it" and diagram slides), and a good worked example of the verify step: the output
claims WCAG 2.2 AA design and still hides every equation from a screen reader. Ask Astra
for MathML in place of the CSS fractions and readings that aren't collapsed, then test in the
sandbox with NVDA.

### A3b: Astra's revision, asked for MathML (November 3)

Follow-up in the same chat: MathML with LaTeX annotations, nothing hidden, readings visible,
no `<style>` or classes (for Canvas), keep the transcription and don't correct anything.
Astra worked 2m 20s; it says "NVDA/MathCAT and Canvas rendering were not tested."
File: `outputs/astra-A3b-mathml-revision.html` (60 KB).

Checked:
- **30 `<math display="block">`, 30 LaTeX annotations, 0 `aria-hidden`, 0 `<details>`,
  0 `<style>`, 0 `class=`, 0 scripts;** tags balance. The readings are visible paragraphs.
- **All 30 LaTeX annotations match the page as written,** including `x^{2/2}`,
  `(x+9)^{2/2} + x(1)`, the extra `(2x+9)` and `√x² = x`. Transcriber's notes kept.
- Ovals, boxes and cancellations are now `menclose` (circle, box, updiagonalstrike), so a
  screen reader can announce "circled" or "crossed out". **Chrome doesn't draw `menclose`**
  (not in MathML Core), so on screen the circles and boxes disappear; the position notes
  still describe them.
- Colour is inline `style` on MathML tokens; whether Canvas keeps `style` inside `<math>`
  is untested.
- The ✳ marks are `\text{✳}`; a screen reader may say the character's full name.

**Canvas, tested November 3.** Pasted into the Rich Content Editor's raw HTML view on a new
unpublished sandbox page, "TEST: Astra MathML revision, algebra p.13 (Nov 3, unpublished)".
Canvas kept **all 30 `<math>`, all 30 LaTeX annotations, all 11 `menclose`, and all 15
colour styles inside the math** (rewritten as `rgb()`), plus the visible readings. Canvas
also draws the circles and boxes, which plain Chrome doesn't. MathJax is loaded on the page
but leaves the native MathML in place, so NVDA + MathCAT should read it directly.
(Paste gotcha: copy as UTF-8, or `’` and `−` arrive garbled.)

Still to do: listen with NVDA + MathCAT on Windows. That's clip 3's ending.

The transcriber's notes would give away a "find the mistake" worksheet. That's the line
the slide 11 prompt draws: for a test, the instructor decides whether the note stays.

A3's prompt, reconstructed from Rick's description (not copied from his original):
> Make this accessible, compatible with WCAG standards. Put the transcription in HTML, not
> Markdown. Keep the spatial information: where each piece of work sits on the page, and
> what the arrows, boxes, circles and colours connect.

## Across all runs

- Plain prompt: 8 runs, every tool, every mode. The `√x²` line was corrected or
  annotated in 6 (Gemini ×2, ChatGPT Chat ×2, Work Luna as a note, Astra openly). The other 2
  (Gemini, as images) left it alone but broke other math.
- Slide 11 prompt: kept the line as written in every run that completed (Gemini ×3, ChatGPT ×4).
- Astra reads the most and says the most about the page's layout. With the plain prompt it
  still corrects, but **it says so**, which is the difference between a silent and a visible
  failure.
- History: no visible effect anywhere it could be tested.

Recording: `clip10-chatgpt-matrix.gif` (50 frames, so it stops before the last runs).

## Rick's working prompt (from practice, November 3)

What it took in practice to get good results: ask for accessibility **compatible with WCAG**,
put the transcription in **HTML** (Markdown lost the page's spatial layout), and tell it to
**keep the spatial information** or it drops it. The September 8 "Convert PDF Activity" chat
in the assignmentconversion project uses the same WCAG 2.1 / semantic-HTML wording.

The Gursoy "near 100%, including the spatial" Astra session wasn't found by chat search
("Gursoy", "Markov", "MathML", "lecture notes", "spatial", "handwritten") in the Edu workspace.

Recording: `clip10-gemini-history-matrix.gif` (50 frames, the GIF tool's limit, so it may
stop before the last run).

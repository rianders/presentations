# Demos — Beyond Alt Text · November 6, 2026

Shot list for the recordings, written November 2, 2026 against the published abstract.
Slide numbers follow the November 2 reorder: the room's challenge first (slides 2–3), the
math pathway as the worked example (4–9), diagrams (10), work session (11).
Every clip exists because the abstract promises it; the promise is named on each one.

## Rules for every clip

- **Real material only.** Rutgers sandbox course (`rutgers.instructure.com/courses/375349`)
  or the specimens in `test-specimens/`. Nothing fabricated, no student data.
- **Rutgers tools.** Gemini or Copilot on a NetID for every AI step. Anything else is
  labelled a showcase on the slide.
- **One reader, stated.** NVDA (free, Windows), MathCAT built in from 2026.1. Note the NVDA
  version and speech rate on screen or in the transcript.
- **Speed.** Record slower than a fluent user listens, and say so out loud: "slowed down
  so you can follow; real users run this two or three times faster."
- **System audio.** Capture the screen reader's speech, not the microphone. Check one clip
  plays over a real Zoom share with "Share sound" on before recording the rest.
- **Short.** 30–90 seconds each. Trim dead air.
- **Transcript under every clip.** This is an accessibility session: the clip must work
  with the sound off.
- **Same example across a before/after pair.** The comparison is the point.
- **Rick is the verifier, so use Rick's fields** (decided November 2, 2026): music,
  propositional logic, math from tensors to stochastic calculus, simple electronic
  schematics, code. The deck's argument is that only someone who reads the notation can
  check the output, so every clip uses notation Rick can check himself. Say so out loud:
  "I picked these because I can catch the mistakes. For your course, you're that person."
  The two exceptions are in clip 7.

## Must have (the abstract promises these)

| # | Slide | Clip | Abstract promise |
|---|---|---|---|
| 1 | 5 | **Inaccessible vs accessible, same equation.** A stochastic or tensor equation, e.g. the Itô SDE `dXₜ = μ dt + σ dWₜ` or `Tᵘᵥ`, as an image in a Canvas page: NVDA says "graphic" or reads weak alt text. Then the same equation as MathML in Canvas: NVDA + MathCAT reads it properly. Listen for whether the upper vs lower index survives. | "show the difference between an accessible figure and an inaccessible one" |
| 2 | 6 | **Two correct readings.** The same MathML in MathSpeak, then ClearSpeak. 15 seconds each. Optionally, 15 seconds of structural navigation, stepping into a fraction and back out. | The baseline the math faculty trust |
| 3 | 7 | **The conversion, end to end in Canvas.** Screenshot of the clip 1 equation → Gemini on a NetID → LaTeX → into a Canvas page (equation editor or HTML) → NVDA reads it. Shows the real workflow, including what you click. | "converting equation images … into accessible, screen-reader-renderable notation in Canvas" |
| 4 | 8 | **Said the way people say it.** Music first, Rick's strongest: the Gen AI reader on `treble-melody.png`, scored against its key. Then a handwritten source from logic or math. | The thesis: read "differently than they'd ever say aloud" |
| 5 | 9 | **The silent failure.** The AI reading something fluently and wrongly. First choice is the P ⟺ Q truth table read as "implies". Backups: `piano-page.png`, where it names Mozart and describes the famous piece instead of these 12 measures; or tensor index placement silently dropped (`Tᵘᵥ` read as "T mu nu"), or Itô vs Stratonovich (`∘ dWₜ`) flattened into the same words. Prefer a specialized example: the point is that it guesses worst where notation is rarest. | Why verify is the step everyone skips |
| 6 | 10 | **Narrated walkthrough of a flow chart or a simple schematic.** A real process diagram (an advising or lab-safety flow chart), or a simple circuit schematic described as its signal path → AI writes a step-by-step walkthrough → placed in Canvas as a nested list → NVDA reads it with list levels announced. | "generating narrated walkthroughs of flow charts, process diagrams, and decision trees" |
| 7 | 10 | **Audio description of a disciplinary figure.** A supply-demand graph → AI description → checked against the graph → played as audio. If time allows, a choropleth map, where colour is the only carrier, turned into a sorted table. **Outside Rick's fields:** keep the graph simple enough to check mechanically (slopes, where the curves cross), check the map's table against its source data, or ask an economics or geography colleague to review the output. | "producing audio descriptions of technical and disciplinary figures" — and the social sciences |

## Should have

| # | Slide | Clip | Why |
|---|---|---|---|
| 8 | 2 | **A schematic as a netlist.** A simple circuit schematic → AI writes the netlist (each component and the nodes it connects) → Rick checks every connection → NVDA reads it. The syntax tree as bracket notation is the backup. | The abstract names both as conversions. Slide 10 now says they need "a different form"; this clip shows that form. |
| 9 | 11 | **Work-session walkthrough, 60 seconds.** The exact prompt, the exact account, the result pasted into Canvas. Played once before people start. Optionally, a short code sample read by NVDA: the structure-announced level, in a notation half the room uses. | Makes the 30 minutes start on minute one |

## Should have, added November 2, 2026

| # | Slide | Clip | Why |
|---|---|---|---|
| 10 | 11 | **It answers instead.** A worksheet with a deliberate error (a "find the mistake" exercise) → a plain "make this accessible" prompt → the AI solves it and quietly fixes the error. Then the slide 11 prompt on the same page → transcribed as written, error kept. | Rick's most common failure in practice. It turns a worksheet into an answer key, and the first line of the prompt is the fix. |

Clips 3 and 9 use the slide 11 prompt word for word, so the room sees the prompt they'll use.
Clip 9 can end by pasting `notation-access/SKILL.md` into a Gemini skill, so the room
sees the take-away working too.

## Ready-made sources in the sandbox course — November 3, 2026

The Canvas sandbox's module 6 already holds pages for several clips. Record from these
before building anything new. `worklist.md` has the details.

> **Live Canvas uses different addresses, checked November 3, 2026.** The page names below
> are the local export's. Rick imported it on November 3 (`accessibility-sandbox-2026-11-03.imscc`,
> completed, no issues). Canvas updated the existing pages in place and kept their old URLs,
> so in the live course the titles match but the addresses don't:
>
> | Title | Live URL (`/courses/375349/pages/…`) |
> |---|---|
> | Limits 2.1: Markdown LaTeX Paste (Does Not Render) | `test1-2` |
> | Limits 2.1: Bracket LaTeX Paste (Does Not Render) | `math-notation-test-2` |
> | Limits 2.1: OCR to Inline LaTeX | `math-ocr-test-2` (has `7.1^2`) |
> | Limits 2.1: MathML Conversion | `test2-3` (68 MathML equations) |
> | Limits 2.1: MathML With Described Car Diagram | `test-import-2` |
> | Markov Chains: GLM OCR to MathML | `glm-ocr-test-2` |
> | Markov Chains: MathML Conversion | `test2-2-2` |
> | Markov Chains: MathML Conversion (Second Pass) | `test-page3-2` |
>
> All are in module 6 and unpublished. Navigate from the module, not by URL.

| Clip | Page in the sandbox | What it gives you |
|---|---|---|
| 3 | `limits-2-1-markdown-latex-paste-…` → `limits-2-1-mathml-conversion` | Raw `$…$` showing in Canvas, then the same notes as MathML. The pipeline's before and after, already built. |
| 5 | `limits-2-1-ocr-to-inline-latex`, page 1 | Source `7·1²` read as `7.1^2`, "seven point one squared". A verified, fluent, wrong reading. Play NVDA on both pages. |
| 5 (backup) | `markov-chains-glm-ocr-to-mathml` vs `gursoy-class-notes` | `P_ij(n)` vs `P_ij`, and `/` in place of `\|`. Confirm against Gursoy's original before recording. |
| 6 | `gursoy-class-notes` | The repairable-machine state diagram, already described in text. |
| 10 | `after-logic-and-proofs-textbook-pdf`, `after-handwritten-algebra-…` | Empty after templates: real pages to run both prompts on. |

## Before recording, verify (worklist item 3, still open)

- Does the Canvas equation editor produce MathML or an image? Clip 3 depends on it.
- Is MathJax on in Rutgers Canvas by default?
- Does Ally do anything for math, or only score the image?

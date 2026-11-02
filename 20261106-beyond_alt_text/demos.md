# Demos — Beyond Alt Text · November 6, 2026

Shot list for the recordings, written November 2, 2026 against the published abstract.
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

## Must have (the abstract promises these)

| # | Slide | Clip | Abstract promise |
|---|---|---|---|
| 1 | 4 | **Inaccessible vs accessible, same equation.** An equation as an image in a Canvas page: NVDA says "graphic" or reads weak alt text. Then the same equation as MathML in Canvas: NVDA + MathCAT reads it properly. | "show the difference between an accessible figure and an inaccessible one" |
| 2 | 5 | **Two correct readings.** The same MathML in MathSpeak, then ClearSpeak. 15 seconds each. Optionally, 15 seconds of structural navigation, stepping into a fraction and back out. | The baseline the math faculty trust |
| 3 | 6 | **The conversion, end to end in Canvas.** Screenshot of an equation → Gemini on a NetID → LaTeX → into a Canvas page (equation editor or HTML) → NVDA reads it. Shows the real workflow, including what you click. | "converting equation images … into accessible, screen-reader-renderable notation in Canvas" |
| 4 | 7 | **Said the way people say it.** The Gen AI reader on `treble-melody.png` and the IPA or chemistry sample. Then a handwritten source. | The thesis: read "differently than they'd ever say aloud" |
| 5 | 8 | **The silent failure.** The AI reading something fluently and wrongly. First choice is the P ⟺ Q truth table read as "implies". Backup: `piano-page.png`, where it names Mozart and describes the famous piece instead of these 12 measures. | Why verify is the step everyone skips |
| 6 | 9 | **Narrated walkthrough of a flow chart or decision tree.** A real process diagram (an advising or lab-safety flow chart) → AI writes a step-by-step walkthrough → placed in Canvas as a nested list → NVDA reads it with list levels announced. | "generating narrated walkthroughs of flow charts, process diagrams, and decision trees" |
| 7 | 9 | **Audio description of a disciplinary figure.** A supply-demand graph → AI description → checked against the graph → played as audio. If time allows, a choropleth map, where colour is the only carrier, turned into a sorted table. | "producing audio descriptions of technical and disciplinary figures" — and the social sciences |

## Should have

| # | Slide | Clip | Why |
|---|---|---|---|
| 8 | 10 | **A syntax tree or structural formula, restructured.** The tree as labelled bracket notation or a nested list; the molecule as its name plus a part-by-part description. NVDA reads the result. | The abstract names both as conversions. Slide 10 now says they need "a different form"; this clip shows that form. |
| 9 | 11 | **Work-session walkthrough, 60 seconds.** The exact prompt, the exact account, the result pasted into Canvas. Played once before people start. | Makes the 30 minutes start on minute one |

## Before recording, verify (worklist item 3, still open)

- Does the Canvas equation editor produce MathML or an image? Clip 3 depends on it.
- Is MathJax on in Rutgers Canvas by default?
- Does Ally do anything for math, or only score the image?

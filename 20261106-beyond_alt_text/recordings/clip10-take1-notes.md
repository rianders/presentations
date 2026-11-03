# Clip 10, take 1 — It answers instead · November 3, 2026

Source: `test-specimens/algebra-worked-problems-section-13.png`, copied from the sandbox
course (`handwritten-math/`, page 1 of Before: Handwritten Algebra Worked Problems).
Tool: Gemini, Pro model, Rutgers Edu account, two fresh chats, no skill.
Recording: `clip10-take1-it-answers-instead.gif`, 41 frames, silent. A rough take: trim before use.

## Run 1: "Make this accessible."

Gemini returned **an image**: a re-typeset worksheet. Checked against the source:

- Nothing in it is text, so a screen reader gets nothing.
- **It fixed the error.** Source: `(2x+9)/√x² = (2x+9)/x`. Gemini: the same, plus "(x > 0)".
- It teaches: added "Step 1: Invert the divisor fraction…", "Final Answer", problem titles
  and a "Factoring Sub-Steps (Detailed)" box, none of them on the page.
- It invents a reason: "This form is often required for further calculus operations."
- Its Step 4a has no counterpart on the page and doesn't make sense.

## Run 2: the slide 11 prompt, `[your field]` = college algebra

Text output, LaTeX plus a spoken form per line.

- **Error kept:** `\frac{(2x+9)}{\sqrt{x^2}} = \frac{(2x+9)}{x}`, read as written.
- "DO NOT REWRITE NEGATIVE EXPONENTS!" kept as text; colours named (green, red).
- Marked uncertainty at the symbol: the faint `(12)(−6)` and the `2/2` exponent.
- For Rick to check: the figure line for problem 1 says "ac-method", which names the
  technique rather than describing the marks. Small, but it is a step toward concluding.

## Take 2 (same day): Flash, same two prompts

Pro was "in high demand", so Gemini answered both with **Flash**. Same account, new chats.

- Plain prompt: text this time, not an image. **Added "(for x > 0)" again.** Turned
  "Webassign" into "Weber State University". Teaches: "When you factor out a GCF, you are
  dividing each term by that factor…".
- Slide 11 prompt: **kept `√x² = x` as written**, kept the warning and the colours, and
  listed its uncertainties. Still drifts: it calls the quadratic a "denominator", invents
  `(x+9)^{0/2}`, labels "Problem 5", and its uncertainty notes explain the AC method.
- So the correction repeats across two models. The prompt stops the correction both
  times, but doesn't stop every interpretation.

Recording: the screen-capture video failed (it records the front window, and Chrome's
automated tab runs in the background). Use the GIF frames, or record with nothing
else in front.

## Transcript (draft, for under the clip)

> A page of handwritten algebra. Near the bottom it writes the square root of x squared
> as x, which is only true when x isn't negative. First prompt: "Make this accessible."
> Gemini returns a picture, adds steps the page doesn't have, and quietly adds "x greater
> than zero". The page has been corrected. Second prompt, the one on this slide, starting
> "Do not solve, simplify, correct or finish anything." Now it returns text: LaTeX and how
> each line is said aloud. The line stays as written, and it flags the two places it
> wasn't sure.

Open: `demos.md` asks for a deliberate error. Whether `√x² = x` is a slip or assumes
x > 0 in context is Rick's call; if it matters, say "as written" rather than "error".

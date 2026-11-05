# Clip 1: one equation, the options in Canvas · November 5, 2026

Rick's direction: one focused example, using what's possible in Canvas, recorded for each option.

**Equation:** sample standard deviation, s = √( Σᵢ₌₁ⁿ (xᵢ − x̄)² / (n − 1) ), rendered for this test
(`../test-specimens/std-dev-equation.png`). Rick asked for one that fits the deck's examples: statistics,
and it has nesting to lose (root, fraction, sum, bar, subscript, exponent). The first version used the Itô
equation; its files are still in the sandbox.
**Page:** [TEST: Clip 1, one equation in Canvas](https://rutgers.instructure.com/courses/375349/pages/test-clip-1-one-equation-in-canvas-nov-5-unpublished), unpublished, sandbox.
**Files:** folder `clip1-std-dev`, one file per image option (see below for why).

| Option | How it's made in Canvas | What's stored | What Canvas renders | Immersive Reader, on screen |
|---|---|---|---|---|
| 1. Image, no description | Insert an image | `img`, no alt | `img`, no alt | Nothing: a blank line |
| 2. Image, Ally's description | Ally's Auto-generate | `img`, alt is Ally's sentence | Same | Shows the sentence in brackets |
| 3. Canvas equation editor | √x button, LaTeX | `img`, alt "LaTeX: …" with the LaTeX | MathJax picture plus `<math>` | See below |
| 4. MathML | HTML editor | `<math>` with a LaTeX annotation | MathJax picture plus `<math>` | See below |
| 5. In context | Words, MathML, code block | Paragraph, `<math>`, `<pre><code>` | Same, code kept exactly | See below |

## What it said: Rick's recording, November 5

`~/Movies/2026-11-05 13-43-26.mov`, cut to `../slide5-one-equation-in-canvas.mp4` with captions in the `.vtt`.
Transcribed locally with Whisper (small.en and large-v3-turbo). Rick to check the captions; the code lines especially.

| Option | Immersive Reader said |
|---|---|
| 1 | The heading, then nothing |
| 2 | "Formula for sample standard deviation, South equals the square root of the sum of squared deviations from the mean divided by n minus 1." |
| 3 | "South equals square root of, sum from i equals 1 to n of, open paren x sub i, minus over bar x close paren squared, over n minus 1." |
| 4 | The same as option 3 |
| 5 | The two sentences, the same math, then, run straight on: "import numpy as np. x equals np.array, 2, 4, 4, 4, 5, 5, 7, 9. np.std, x, doff equals 1, hashtag 2.138, divides by n 1. np.std, x, hashtag 2.0, the default divides by n." |

**"South".** Rick heard it. Both models wrote it on full passes or on clips isolated around each "s", though one full
turbo pass wrote "S" for the math. It occurs in plain alt text and in MathML, so it isn't a MathML problem. Other letters
(n, i, x) were fine. Likely the voice expanding "S" as a compass abbreviation, but that's my inference: I found no
documentation. NVDA, JAWS and VoiceOver use their own voices, so they may differ. Not tested.

**Code.** The page has `<pre><code>`, a separate block. Immersive Reader still ran it on from the equation, on the same
line on screen and with no pause or signal. "#" became "hashtag", and "n - 1" sounded like "n 1".

**Option 6, the fix: Rick's second recording** (`~/Movies/2026-11-05 14-34-09.mov`, now the clip on slide 5). A lead-in
sentence, a "Python code" heading, the same code without comments, then a "What the code does" heading with the
results in words. Immersive Reader said:

"Option 6, the code, with a signal. The next section is Python code. It finds the standard deviation of 8 values, 2 ways.
Python code. import numpy as np. x equals np.array, 2, 4, 4, 4, 5, 5, 7, 9. np.std, x, doff equals 1. np.std, x. What the
code does. The first calculation divides by n minus 1, which matches the formula. The result is about 2.138. The second
uses the default, which divides by n. The result is 2.0."

| | Option 5 | Option 6 |
|---|---|---|
| Signal before the code | None; runs on from the equation | Lead-in and heading both read |
| "#" | "hashtag" | Gone, because the comments moved into sentences |
| "n - 1" | Sounded like "n 1" | "n minus 1" in the sentence |
| `ddof` | "doff" | Still "doff", as expected |

**So: yes, it's something you add in Canvas, as content.** The headings and sentences changed what was heard. The
`<pre><code>` block didn't. One recording, Immersive Reader only. Screen readers weren't tested.

## The checkers on this page

- **Ally: 92%.** One issue: "This item contains images without description" (option 1).
- **Canvas Accessibility Checker: 2 issues.** Option 1 has no alt text. Option 2's alt text is over 120 characters;
  **that's Ally's own sentence, at 132 characters.**
- Neither said anything about "South", the code, or that option 2 paraphrases the formula.

Ally's sentence: "Formula for sample standard deviation: s equals the square root of the sum of squared deviations
from the mean divided by n minus 1." True, but it's a paraphrase, not the formula: no x sub i, no x-bar, no limits.
Heard aloud, it doesn't say whether the root covers the n minus 1, and that's the point of the demo.

(On the Itô equation, it gave a close reading of the symbols, and named the equation type.)

## Rick's note on this experiment

An equation on its own, without context, isn't how anyone meets it. In a lecture it would be spoken. A Python
coder would use NumPy, with the correct function, on a set of example data. So the four options test the
notation in isolation, and the clip should say so.

Added as option 5 on the page, November 5, at Rick's request: the words below, the MathML, then the code. Output checked with NumPy 2.5.4. The wording is mine, for Rick to check:

> The sample standard deviation measures how far values spread from their mean. Subtract the mean from each
> value, square the results, add them up, divide by n minus one, and take the square root of all of that.
>
> ```python
> import numpy as np
> x = np.array([2, 4, 4, 4, 5, 5, 7, 9])
> np.std(x, ddof=1)  # 2.138..., divides by n - 1
> np.std(x)          # 2.0, the default divides by n
> ```

## Found while building it

- **One description can spread (seen on the Itô version) to the same file elsewhere.** With one file used for options 1 and 2, the
  rendered option 1 showed option 2's description, though the stored page had no alt and I never pressed Add. A
  separate file (bytes changed, same picture) fixed it. The file's Ally score also went from 25% to green. I
  don't know which part of Canvas or Ally does this. Tested once, on this page.
- **Option 3 is built, not typed, on this version.** On the Itô version I used the real editor (√x button, LaTeX), and
  it dropped the equation beside option 2, perhaps from how I drove it. For this equation I wrote the same markup
  the editor had produced. Canvas renders it the same way, and the real editor can be shown live.
- **Correction to clip10-history-matrix.md:** that note says MathJax leaves native MathML in place. On this page,
  it draws a picture and keeps a `<math>` element alongside.

## Record it

1. Open the page, click **Immersive Reader** at the top right, then press play.
2. Record with the same OBS setup as November 5, with audio on, through all six options.
3. Optional, for a real screen reader: VoiceOver (Cmd+F5) on the same page, in Safari.

I then cut the clip, write a transcript from what's actually said, and fill in the table.

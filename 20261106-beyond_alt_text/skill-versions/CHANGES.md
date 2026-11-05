# notation-access skill: before and after

- **Before:** [`SKILL-v1-2026-11-02.md`](SKILL-v1-2026-11-02.md), written November 2 from the
  slide 11 prompt. 3,866 characters.
- **After:** [`SKILL-v2-2026-11-03.md`](SKILL-v2-2026-11-03.md), the version now in
  `notation-access/SKILL.md` and `notation-access.zip`. 6,089 characters.

The evidence is the November 3 test on one real page, the sandbox's handwritten algebra
page 13: 18 runs across Gemini and ChatGPT Edu (Chat, Work, GPT-6 Astra), with and
without history, plus Astra's HTML checked in Canvas. Results are in
[`../recordings/clip10-history-matrix.md`](../recordings/clip10-history-matrix.md).
That's one page and a few runs each: a demonstration, not a measurement.

## What the test showed works best

1. **"Do not solve, simplify, correct or finish anything."** The plain prompt corrected or
   annotated `√x² = x` in 6 of 8 runs and broke the math in the other 2. With this line,
   every completed run (7 of 7) kept the page as written. v1 already had this; v2 closes
   the gaps the tools still found.
2. **Asking for LaTeX plus a spoken reading.** It forces text; the plain prompt got images.
3. **Naming specific failures in a follow-up.** "Every equation is aria-hidden, there is no
   MathML" was fixed in one pass, and Canvas kept the result.
4. **Model** helps reading and layout (Astra best) but doesn't stop correcting on its own.
5. **History** made no visible difference.

## Changes, and the run that prompted each

| # | Change in v2 | Why: what happened on November 3 |
|---|---|---|
| 1 | Rule 1: no qualifiers ("for x > 0", `\|x\|`, "assuming…"); possible errors go only in **Check these**, never in the output. v1 allowed mentioning an error "once, separately, after the output". | Gemini added "(x > 0)"; ChatGPT replaced the line with `\|x\|`; Astra added a labelled "Transcriber's note". On a find-the-mistake worksheet each one gives the answer away. |
| 2 | Rule 2: quote the page's instructions, warnings and labels exactly. | "DO NOT REWRITE NEGATIVE EXPONENTS!" became "Do not rewrite negative exponents *too early*" (ChatGPT, twice), and one run then rewrote them as positive exponents. |
| 3 | New rule 3: add nothing that isn't on the page; label added headings. | Plain-prompt runs added "Step 1: Invert the divisor…", "Final Answer", problem titles, "Weber State University" (from "Webassign") and method explanations. |
| 4 | New rule 6: always answer in text, never an image. | Gemini answered the plain prompt with an image 3 times out of 4. |
| 5 | New section: handwritten or annotated pages: position, colour and marks in words; HTML when layout matters. | Rick's practice: Markdown lost the page's spatial layout. Astra's "Position and marks" paragraphs were the best layout description of any run. |
| 6 | New section: Canvas or HTML: MathML with LaTeX annotation, nothing `aria-hidden`, readings visible, inline styles only, `menclose` for marks. Replaces v1's "Add MathML if asked". | Astra's first HTML claimed WCAG 2.2 AA and hid all 30 equations from screen readers, with no MathML. The revision built to these rules was pasted into Canvas, which kept all 30 equations, their LaTeX, the `menclose` marks and the colours. |
| 7 | **Check these** also lists possible errors and what wasn't tested. | Astra's honest "full assistive-technology testing remains unverified" is the pattern to keep. |
| 8 | New section: long pages in pieces, and PDFs. Transcribe pieces as one page, organized by the page's problems; read a PDF's page image, not its text layer; ask for a closer image rather than guess. | Split test ([`../recordings/split-vs-whole.md`](../recordings/split-vs-whole.md)): 4 pieces removed the whole page's errors, but Gemini then organized its answer by piece. Rick: PDF text layers break layout and symbols. |
| 9 | Rule 3: a spoken reading says what is written, not what is being done. | The pieces run's readings said "Factor out a 2" and "Final answer". |

Pages are prepared before upload with [`../tools/prep_pages.py`](../tools/prep_pages.py):
a skill can't cut images up in Gemini or Copilot.

## Still to test with v2

- Run v2 itself, as a skill or pasted, on the same page in Gemini and ChatGPT, and confirm
  it matches what the slide 11 prompt plus the follow-up achieved, in one step.
- Listen to the Canvas test page with NVDA + MathCAT.
- Re-run Gemini's temporary chat, which failed 4 times on the long prompt.

## v3, November 5, 2026

| What changed | Why |
|---|---|
| A visible spoken reading on a Canvas page is now the instructor's decision. It stays by default, and **Check these** says it can be removed. | Immersive Reader reads the equation, then the written reading, so the listener hears both. Slide 7 presents that as a decision, and the skill made it for them. |

The answer in chat still gives the spoken reading, because the instructor needs it to check the work.
Not re-run after this change.

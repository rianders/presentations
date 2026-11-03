# Tall pages: whole vs split · November 3, 2026

**Question (Rick):** long handwritten notes come as tall images, or as PDFs whose text layer
and layout break. Does preparing the page first improve the transcription?

**Tool:** `../tools/prep_pages.py`. PDFs → one PNG per page at 250 dpi. Images taller than
1.6 × their width → page-shaped pieces (about 1.3 × width), cut at the whitest band near
each target line, with an overlap only where no clean gap exists.

**Page:** sandbox algebra page 13, 692 × 3072 (4.4 times taller than wide). The script cut it
into 4 pieces, every cut in white space between problems (checked by eye):
`../test-specimens/prepared/`. The 7-page limits PDF became 7 page-shaped PNGs, none split.

**Run:** Gemini 3.6 Flash, normal chat, slide 11 prompt, back to back. The pieces run adds
one sentence: "These four images are one handwritten page, cut into pieces in order from
top to bottom."

| | Whole page (G2, earlier) | Whole page (fresh) | 4 pieces |
|---|---|---|---|
| Problem 4 working lines (`x^{2/2}`, `x(x+9)^{-1/2}`, …) | 2 misread | correct | correct |
| Fifth-root line, with the page's extra `(2x+9)` | misread `⁵√x³` as `⁵√x²` | **dropped the extra `(2x+9)`**: a silent correction | **kept as written** |
| Spoken readings | complete | **lines 2–5 of problem 4 missing** | complete |
| Output | clean | **restarted itself halfway** | clean |
| `√x² = x`, warning | kept | kept | kept |
| Structure | by problem | by problem | **by piece**: "Part 2" merges two problems |
| Method narration | some | some | "Factor out a 2", "Final answer" in readings |

**Reading:** on this page, splitting removed the transcription errors the whole page
produced in both whole-page runs. It brought two side effects: the answer followed the
pieces instead of the problems, and the readings narrated method. Both are now rules in the
skill. One page, three runs: a demonstration, not a measurement.

**Not yet tested:** ChatGPT and Astra on the pieces; a PDF sent as a PDF vs as page images.

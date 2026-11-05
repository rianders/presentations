# Example errors from our tests · November 2026

All real output, from the runs recorded in this folder. Each has a source file. Rick has ruled only on
the `P_ij(n)` line; the others were checked against answer keys or the page by me.

## It solved or corrected the page

| Page said | Tool wrote | Model and prompt | Source |
|---|---|---|---|
| 2x = 20, x = 10, f(2) = blank | 2x = 8, x = 4, f(2) = 5, as an image | Gemini Thinking, "Make this accessible." | answers-instead-tests.md |
| 2x = 20, x = 10 | x = 4, no note that it changed anything | GPT-6 Astra, "accessible and accurate" | answers-instead-tests.md |
| √x² = x | \|x\|, and "the notes point out" a caution they don't | GPT-5.6 Instant, plain | clip10-history-matrix.md |
| "DO NOT REWRITE NEGATIVE EXPONENTS!" | Rewrote them as positive exponents | GPT-5.6 Instant, plain, temporary chat | clip10-history-matrix.md |

## It changed the notation

| Page said | Tool wrote | Model and prompt | Source |
|---|---|---|---|
| P_ij(n) | P_ij^(n) | Astra and Gemini Thinking, work-session (Rick ruled) | gursoy-lecture-comparison.md |
| ÷ | · | GPT-5.6 Luna, work-session | tier-comparison.md |
| 9(2x−3) | 9^(2x−3) | Gemini 3.6 Flash, work-session | tier-comparison.md |
| ^{2/2} | ^{1/2} | GPT-5.6 Luna, work-session | tier-comparison.md |
| ⁵√x³ | ⁵√x² | Gemini 3.6 Flash, work-session | clip10-history-matrix.md |

## It invented something

| What appeared | Model and prompt | Source |
|---|---|---|
| `COURSE(student_id is not PK, …)`, a field not in COURSE | Gemini Thinking, work-session | diagram-tests.md |
| A step `3x²−5x+3x−5`, "[ALTERNATE EXAMPLE:]" | Gemini 3.6 Flash, plain | clip10-history-matrix.md |
| "Weber State University" | Gemini 3.6 Flash, plain | clip10-history-matrix.md |
| A generated image with x⁶ as the "Answer", right beside the correct rule | Copilot Think deeper, "accessible and accurate" | answers-instead-tests.md |

## It dropped something

| What went missing | Model and prompt | Source |
|---|---|---|
| The extra (2x+9), **while saying "Nothing has been corrected"** | GPT-6 Chat, work-session | tier-comparison.md |
| Lines 21 and 24, and ^{2/2} | Copilot Auto, work-session | tier-comparison.md |
| Lines 2–5 of problem 4's readings | Gemini 3.6 Flash, whole page | split-vs-whole.md |

## It looked accessible and wasn't

| What happened | Model and prompt | Source |
|---|---|---|
| Claimed WCAG 2.2 AA design; all 30 equations were hidden from screen readers | GPT-6 Astra, Rick's working prompt | clip10-history-matrix.md |
| Returned an image of the quiz, or of the notes, when asked for access | Copilot, Gemini, "Make this accessible." | answers-instead-tests.md |
| Rewrote a quiz's instructions, added a hint | GPT-6 Astra, "Make this accessible." | answers-instead-tests.md |

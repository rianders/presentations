# What makes a tool answer instead of transcribe · November 5, 2026

Rick's question: "Asking for accuracy and you get solutions... What caused answers when we
wanted accuracy?" The November 3 algebra page was too subtle to show this at a glance, so these
are two short printed specimens with keys written first (`../test-specimens/`). Models: GPT-6
Astra (Work, Medium), Gemini 3.6 Thinking, Copilot Think deeper. Normal chats, a fresh chat
each. One scored run per cell. Rick to confirm the scoring.

## Worked notes with deliberate mistakes (`worked-notes-errors`)

Five spots to keep: 2x = 20, x = 10, x⁶, 3x + 2, and the blank f(2).

| Prompt | GPT-6 Astra | Gemini Thinking | Copilot Think deeper |
|---|---|---|---|
| Transcribe this accurately. | Kept 5 of 5 | Kept 5 of 5 | Kept 5 of 5 |
| Make this accessible. | Kept 5, plus an editorial note and a separate section of corrections and the answer | Fixed all: returned an **image** with rules added, f(2) = 5 | Fixed all, explained each step, says so |
| Make this accessible and accurate. | Fixed all, **no note** that the page differed | Fixed all, "Corrected Class Notes", names each "Error in Image" | Fixed: returned an **image**, which **drew x⁶ as the answer**, then said so |
| Work-session prompt (field: algebra) | Kept 5 of 5, nothing flagged | Kept 5 of 5, nothing flagged | Kept 5 of 5, nothing flagged |

Captures: `outputs/worked-notes-gemini-accessible.png`, `outputs/worked-notes-copilot-accessible-accurate.png`.

## An unfinished quiz (`blank-worksheet`), "Make this accessible." only

| Model | Answers leaked | What it did |
|---|---|---|
| GPT-6 Astra | None in the part I read (questions 1 and 2); it says all remain unanswered | Built an HTML form; **rewrote the instructions** ("identify the mistake in words instead of circling it"); added a caret hint |
| Copilot Think deeper | None | Returned an **image** of the quiz (`outputs/blank-quiz-copilot-accessible.png`); blank became True and False circles |
| Gemini Thinking | No result | Errored both tries; I stopped there |

## What it says

- **The wording did it.** The same page and model went from kept to solved by changing the prompt.
  "Accurately" about the copying was safe in all 3 runs. "Accurate" about the page was solved in all 3.
- **"Accessible" alone is enough.** It read as "improve this" in all 3 runs on the worked notes,
  matching November 3 (the plain prompt changed or annotated the line in 6 of 8 runs).
- **Not the model.** Astra is the top of our leaderboard, and it gave the quietest fix of all.
- **Not history.** See `clip10-history-matrix.md`.
- **The page matters too.** A page with visible wrong work drew corrections. A blank quiz, with "quiz"
  and "mistake" on it, drew no answers from the 2 models that finished. It did change the assessment.
- **"Transcribe this accurately" isn't the fix on its own.** It keeps the page but gives plain text:
  no LaTeX, reading or description. The work-session prompt kept the page and gave those.
- **"Accessible" can get you a picture.** Gemini and Copilot each returned an image in these runs.

## Limits

One printed page and one quiz, one scored run per cell, obvious mistakes: a demonstration. Gemini
errored a lot: twice on the quiz (no result), and twice on "accessible and accurate" before its third
try worked. Default models weren't run on these specimens. Nothing here was listened to.

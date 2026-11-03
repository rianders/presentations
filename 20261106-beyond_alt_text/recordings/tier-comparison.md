# What everyone has vs the ChatGPT Edu upgrade · November 3, 2026

**Same input and prompt every run:** sandbox algebra page 13 as 4 page-shaped pieces
(`../test-specimens/prepared/`), the slide 11 prompt, plus one line saying the pieces are one
page in order. Each run in a fresh, normal chat on Rick's Rutgers accounts.
**Scored** against `../test-specimens/algebra-worked-problems-section-13.key.txt`: lines as
written out of 30, and the 5 traps tools tend to "fix". `../tools/score13.js` does a first
pass; every miss was then checked by eye, and scorer false misses are not counted.

| Level | Tool and model | Lines | Traps | What it got wrong | Added method talk |
|---|---|---|---|---|---|
| Everyone | Gemini 3.6 Flash (default) | 29/30 | 5/5 | L8 `9(2x-3)` as `9^{(2x-3)}` | yes: "final answer", "factor out a", "cancel out" |
| Everyone | Gemini 3.6 Thinking | **30/30** | **5/5** | none (first try errored, "Sorry, something went wrong"; second try worked) | yes: "final answer", "simplifies to" |
| Everyone | Gemini 3.1 Pro | 29/30 | 4/5 | **dropped the extra `(2x+9)`** | no |
| Everyone | Copilot Chat (Basic), Auto | 23/30 | 4/5 | dropped `^{2/2}` in L20, skipped L21 and L24, squared L8's denominator, dropped the extra `(2x+9)` | "we get" |
| Everyone | Copilot Chat (Basic), Think deeper | 29/30 | **5/5** | skipped L19 | no |
| Upgrade | ChatGPT Edu Chat, 5.6 Instant (default) | 27/30 | 4/5 | skipped L18 (a trap) and L24; L9 incomplete | no |
| Upgrade | ChatGPT Edu Chat, GPT-6 | 27/30 | 4/5 | **dropped the extra `(2x+9)` while saying "Nothing has been corrected"**; skipped L19, L24 | no |
| Upgrade | ChatGPT Edu Work, GPT-5.6 Luna (default) | 24/30 | 4/5 | **L1 `÷` became `·`**; L20 `^{2/2}` became `^{1/2}`; skipped L3, L18, L24; L8 dropped a factor | no |
| Upgrade | ChatGPT Edu Work, GPT-6 Sol | 29/30 | 4/5 | dropped the extra `(2x+9)` | no |
| Upgrade | **ChatGPT Edu Work, GPT-6 Astra** | **30/30** | **5/5** | none | **no**; 16 s; tables of LaTeX + reading, positions ("Upper right, green") |

**Copilot Chat (Basic) accepts at most 2 images per message.** Its runs used the same page
as 2 pieces (`../test-specimens/prepared/two/`): pieces 1+2 and 3+4, joined at the same cut.

## What it says

- **The default model is never the best one.** Every tool's default lost lines or traps.
  The step up inside the same tool (Gemini Thinking, Copilot Think deeper, ChatGPT Astra)
  made the biggest difference, and two of the three are in the tools everyone has.
- **Everyone's best:** Gemini 3.6 Thinking (30/30) and Copilot Think deeper (29/30, 5/5).
  Both still need checking: Gemini narrates method, and errored once.
- **The upgrade's best:** GPT-6 Astra: the only perfect run that also added nothing.
  The upgrade's other models were no better than Gemini Thinking.
- **The extra `(2x+9)` is the hardest trap.** Four models "fixed" it; one said it had
  corrected nothing while doing it. This is the slide 9 point in one line.
- One page, one run each: a demonstration, not a ranking. Model names and limits are as of
  November 3, 2026.

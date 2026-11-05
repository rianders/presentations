# Diagrams: a schematic and an entity diagram · November 5, 2026

Rick's questions: do the tools read an electronics schematic, and does anything built into
Canvas at Rutgers describe a diagram, or does it take an AI prompt?

**Specimens** drawn for this test, with keys written before any model ran (`../test-specimens/`):
- `schematic-led-pot-switch`: 9 V battery, open switch, 10 kΩ potentiometer wired as a
  rheostat, 330 Ω resistor, LED, in one series loop.
- `er-diagram-enrollment`: STUDENT, ENROLLMENT, COURSE, INSTRUCTOR in crow's-foot notation.
  One relationship differs on purpose: Instructor–Course is zero-or-many, the others one-or-many.

**Prompt:** the work-session prompt, with `[your field]` as "electronics" or "databases".
One run each, normal chat. Rick to confirm the keys and these scores.

| Model | Access | Schematic, of 7 | ER diagram, of 7 | What it got wrong |
|---|---|---|---|---|
| GPT-6 Astra (Work) | Upgrade | 7 | 7 | Nothing |
| Gemini 3.6 Thinking | Everyone | 7 | 6 | Invented `COURSE(student_id is not PK, …)`; `student_id` isn't in COURSE |
| Copilot, Think deeper | Everyone | 6 | 7* | Schematic: didn't state the LED's direction, and said so |

*Copilot's ER answer: I read the relationships and most of the rest; the tail of the answer
was blocked from my tools. It also calls ENROLLMENT an "associative entity", which is the right
term but isn't on the diagram.

## What it says

- **Yes, they read a simple clean schematic.** All three got the parts, values, connections and
  the open switch. None said the LED was lit or calculated anything.
- **These are easy cases.** Clean, printed, computer-drawn diagrams, with labels. Expect worse
  on a scan, handwriting or a crowded circuit. Nothing here predicts those.
- **Nobody produced a netlist,** because this prompt doesn't ask for one. The notation-access
  skill does, for circuits. Not tested here.
- **The errors are the fluent kind.** Gemini's invented line sits in tidy notation.

## Built into Canvas at Rutgers

From the sandbox's Tools and Resources page (links checked September 2, 2026). Not re-checked
with each vendor, and these products add features often:

| Tool | What it does with a diagram |
|---|---|
| Ally | Flags an image with no description and gives a score. It doesn't write the walkthrough. |
| ReadSpeaker, Immersive Reader | Read the text on the page. An image with no text gives them nothing to read. |
| DesignPLUS | Its checker covers alt text being present, not whether it's right. |
| SensusAccess | Converts files to audio, EPUB or braille. |
| Libraries remediation | People: a request answered within two business days. |

So **none of those listed writes a description of a diagram. That takes an AI prompt, or a
person.** Canvas tools can flag the gap and read the result. Check with Rutgers whether any of
them has added an AI alt-text feature; I did not check inside each product.

## Screen-reader options for a diagram in Canvas

Worked out from the above. **Not yet listened to with a screen reader.**

| Form | What a listener gets | Fit |
|---|---|---|
| Image with short alt text | One sentence, and no way to explore | A label, not enough on its own |
| Walkthrough as a nested list | Each step or branch, with levels announced | Flow charts; a circuit as its signal path |
| Netlist or a table | Each part and what it connects to, checkable line by line | Schematics; ER diagrams as a table of tables and relationships |
| Keep the image too | Sighted readers still see it | Always, alongside the text |

## The flow chart: W3C's alt decision tree

A screenshot of https://www.w3.org/WAI/tutorials/images/decision-tree/ (5 decisions, 10 outcomes),
keyed against W3C's own page text. Work-session prompt, plus: "Write the flow as a nested list,
in reading order, with each decision and where each branch leads."

| Model | Decisions, of 5 | Outcomes, of 10 | Added |
|---|---|---|---|
| GPT-6 Astra (Work) | 5 | 10, word for word | "Continue to decision 2", correct; described the pink and blue branches |
| Gemini 3.6 Thinking | 5 | 10, word for word | "Decision 1:" and "Action:" labels |

Both noted that the last question has no Yes or No branches. Copilot not run on this one. An
easy case: a flow chart that's almost all text. The screenshot isn't kept in the repo; it's W3C's.

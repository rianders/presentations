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
| Ally | Flags an image with no description and gives a score. **Has an "Auto-generate description" button at Rutgers** (seen November 5, below). |
| ReadSpeaker, Immersive Reader | Read the text on the page. An image with no text gives them nothing to read. |
| DesignPLUS | Its checker covers alt text being present, not whether it's right. |
| SensusAccess | Converts files to audio, EPUB or braille. |
| Libraries remediation | People: a request answered within two business days. |

**Corrected November 5.** I first said none of these writes a description. Ally can draft one:
in the sandbox's Files page, the dial on `complex-images/udl-vs-di-venn-diagram.jpg` opens a panel with
an **"Auto-generate description"** button, next to "Edit image description" and Save. So it's on for
this course. I only looked here.

**Tested November 5, nothing saved.** See "Ally's Auto-generate" at the end of this file. Canvas's own
"IgniteAI Accessibility Remediation" option wasn't checked.

**Ally checks that a description exists.** That Venn diagram, full of text, scores 82% with "This image
has a description", and its description is only "Venn diagram comparing UDL and DI". One image.

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

## Supply and demand, and a choropleth

Rick's choice, November 5: test both, so slide 10's last two rows stop saying "Not tested".
Specimens drawn for this test, keys written before any model ran (`../test-specimens/`). The
numbers and regions are invented, and the map says "illustrative data" in its title.

- `supply-demand-shift`: S, D1, dashed D2 parallel to D1, crossings E1 and E2, an arrow at
  price 7 pointing right. Nothing on it says "supply", "demand", "equilibrium" or "shift".
- `choropleth-broadband`: eight regions A–H in four shades of one blue, with no numbers on
  the regions, so colour alone carries the values.

**Prompt:** the work-session prompt, with `[your field]` as "economics" or "geography". One
scored run each, normal chat. **Rick confirmed these scores, including Copilot's 6 and Gemini's 7, November 5.**

| Model | Access | Graph, of 7 | Map, of 10 | Notes |
|---|---|---|---|---|
| GPT-6 Astra (Work) | Upgrade | 7 | 10 | Flagged supply, demand and equilibrium as its own expansions |
| Gemini 3.6 Thinking | Everyone | 7 | 10 | Graph: added `E1 = (Q1, P1)` and "initial", "shifted", "new", none on the figure |
| Copilot, Think deeper | Everyone | 6 | 10 | Graph: gave D2's endpoints but never said it sits right of D1 |

Calls for Rick to check:

- **Copilot's 6.** It gave D2's coordinates, so the position can be worked out. I scored it as a
  miss because check 3 asks for it stated, the same way I scored the LED's direction. It also says
  the arrow is between the curves "for part of its length"; the arrow is between them for all of it.
- **Gemini's 7.** Its "shifted" and "new" pass check 7, which is about causes and predictions, but
  they do read a story into the figure. Copilot was the strictest here: "the arrow's intended
  meaning is not stated".

**Gemini errored on the first try at both,** with a generic error and no answer. A fresh chat with the
same image and prompt worked each time; the scores are from those runs. I don't know the cause.

**These are easy cases, the map especially.** Letters on the regions, four clearly different shades
of one colour. Not tested: a real map with place names, a rainbow or diverging scale, a continuous
scale, a heat map with many cells. Nothing here predicts those. The graph's description wasn't
listened to or played as audio, and neither answer was reviewed by an economist or a geographer.

## Ally's Auto-generate

Rick's choice, November 5: test it. Sandbox, signed in as Rick. Diagrams uploaded to a new folder,
`ally-test-2026-11-05`; the button fills the box and adds "This is an auto-generated description and
needs to be checked for accuracy". **I never pressed Add or Save.** I reopened the algebra page to check
its description hadn't changed. One run each.

| Image | What Ally wrote | Score | What's missing |
|---|---|---|---|
| Schematic | Circuit diagram with 9V battery, switch S1, 10kΩ potentiometer RV1, 330Ω resistor R1, and an LED D1 connected in series. | 3 of 7 | Open switch, wiper tie, both polarities |
| ER diagram | Entity-relationship diagram showing Student, Enrollment, Course, and Instructor tables with keys and connecting relationships. | 1 of 7 | Every field and relationship |
| Supply and demand | Supply and demand graph showing demand curve shifting right from D1 to D2, moving equilibrium from E1 (40,$4) to E2 (60,$6). | 4 of 7 | Axes, slopes, dashed line. Both crossings right |
| Choropleth | Map chart titled "Households with broadband, by region" showing eight labeled regions (A–H) shaded in four colors representing broadband adoption ranges. | 1 of 10 | All 8 regions' values; drops "illustrative data" from the title |
| Worked notes | Class notes titled "Algebra Review" with four examples: solving for x, simplifying exponents, expanding an expression, and evaluating a function. | Not scored | All the math. It didn't correct anything, because it transcribed nothing |
| Handwritten algebra page | Handwritten math notes with algebraic expressions, fractions, and equations, including some crossed-out work and circled answers in blue, red, and black ink. | Not scored | All 30 equations. I didn't check "circled answers" or the ink colors against the page |
| UDL vs DI Venn diagram | Venn diagram comparing UDL and DI educational approaches, showing distinct features and shared characteristics like flexibility and scaffolding. | Not scored | Nearly all the text in the circles |

**What it says.** What it wrote was mostly true, but it's a one-sentence label, not a walkthrough. That's a
fair use of alt text, and it also means the keys ask for more than it's built to give. It isn't a fair
contest with a prompted AI answer, so read the column as "what the button gives you", not a ranking.
For a diagram, a label leaves out what the diagram says.

**Ally's score doesn't see this.** The algebra page already has a description with no math in it, from a
source I didn't trace, and Ally scores it **100%**.

The folder and its 5 files are still in the sandbox; nothing links to them.

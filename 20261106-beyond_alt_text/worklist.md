# Worklist — Beyond Alt Text: Notation, Diagrams & Symbols with AI

**November 6, 2026 · 11:00 am – 12:30 pm · Zoom**
Format: 60 min content · 30 min work session
Folder: `20261106-beyond_alt_text/` — **first draft built October 15, 2026** (`beyond-alt-text.jsx`).

Started **August 28, 2026**, out of the September 18 text-to-speech work. Nothing here
has been built; this is the spec plus everything already known, so the deck can start
from a running position instead of a blank file.

**Content seed: `notation-inventory.md` in this folder.** Failure taxonomy, discipline
inventory, and the A/B/C fix grouping. That file is the raw material; this file is
the plan.

---

## Working list: before November 6 — started November 5, 2026

We step through these in order. Status: **open**, **now**, **done**.

| # | Item | Who | Status |
|---|---|---|---|
| 1 | Verify Ally's scores on slide 10: `recordings/ally-score-check.md` | Rick | **done** November 5: scores kept |
| 2 | Confirm the other new scores: `recordings/answers-instead-tests.md`, the graph and map in `recordings/diagram-tests.md` | Rick | **done** November 5: confirmed |
| 3 | Set up pre-poll and post-poll in Zoom, and paste the description: `zoom-kit.md` | Rick | Polls **cut** November 6: questions in chat instead. Description still to paste |
| 4 | Slides 5–6: one equation in Canvas, then the questions: `recordings/clip1-canvas-options.md`. Merged November 5, PR 21; Rick to play it through | Rick + Claude | **done** |
| 5 | Slide 7: Best practices placeholder | Rick + Claude | **done** November 5: cut |
| 6 | Slides 8, 9, 16: clear the Review notes that show on screen | Rick + Claude | **done** November 5 |
| 7 | Confirm the schematic and entity diagram keys and scores: `recordings/diagram-tests.md` | Rick | **done** November 5: confirmed |
| 8 | Public report: add the accuracy test, Ally and diagram scores; fix old slide numbers | Claude | **done** November 5 |
| 9 | Canvas copy of the report: update it, publish it, add it to the module | Rick + Claude | **done** November 5: module published with only the report page in it; its 6 subheaders also show |
| 10 | Tell Melike her notes appear on slide 10 | Rick | **now** |
| 11 | Skill: it always adds a spoken reading, but slide 7 calls that a decision. Reconcile them | Claude | **done** November 5: v3, not re-run |
| 12 | **Last:** send the request for examples, Rick drafting: `zoom-kit.md` | Rick | open |
| 13 | After the talk: delete the sandbox's `ally-test-2026-11-05`, `clip1-one-equation`, `clip1-option1` and `clip1-std-dev` folders and the TEST pages | Rick + Claude | open |

Added November 6, morning of the talk. Slide numbers are the 18-slide deck. Items 1–13 keep the numbers they had when written.

| # | Item | Who | Status |
|---|---|---|---|
| 14 | Slide 2: UOES / TIIP card, "Brought to You By", links, bio | Rick + Claude | **done** |
| 15 | Old Your Field slide cut; its chat prompt moved to slide 3 | Rick + Claude | **done** |
| 16 | Time moved to the red footer bar; "teacher" changed to "instructor" | Claude | **done** |
| 17 | Slide 4: real content on why notation must be formatted. Rick to check "graphic, or nothing" and "symbol by symbol" against NVDA and JAWS | Rick + Claude | built, **Rick to check** |
| 18 | Slide 7: rewritten as "Ask AI for MathML and LaTeX" | Rick + Claude | **done** |
| 19 | Slide 14: the skill as lessons learned | Rick + Claude | built, **Rick to read** |
| 20 | Commit today's edits and merge to `main`. The audience link serves `main`. Leave `recordings/outputs/gursoy-private/` out | Rick + Claude | **open, before 11:00** |
| 21 | Finish slide titles: 6, 9, 10, 12, 16 | Rick | open |
| 22 | Links: the report link is only on Resources (17). Add it where results are cited (5, 13, 15)? | Rick + Claude | open |
| 23 | Slide 6: trim, or cut? | Rick | open |
| 24 | Slide 16 repeats the skill sentence now that slide 14 exists: keep or drop | Rick | open |
| 25 | Slide 7: MathCAT in NVDA and JAWS was last verified September 2 | Rick | open |
| 26 | Play through in present mode. Slide 5 looked tight in a small window; video and table may need checking at full screen | Rick | open |

---

## Source deck — decided October 15, 2026
**This session is the "Transcribing Scientific Notation" project**:
`20260225-EmergingTechCommunity/scientific-notation-presentation.jsx` (February 25, 2026,
5 slides). Port its *content*; take the *visual vocabulary* (SlideShell, notes,
`&print`) from the September 18 deck. The February deck predates both.

What it brings: four projects bundled into one workflow, with **Carmela** credited as
collaborator; multilingual voice/ASR tuned for STEM; inputs (handwriting, legacy PDFs,
image captures); a parse → detect symbols → spatial processing pipeline; output formats
(LaTeX, MathML, accessible text); limits (0 vs θ, multi-line arrays, discipline variants).

Re-verify before porting:
- **The accuracy bars** (printed 88%, handwriting 58%). Are those measured, and on what?
  If not, they don't go in under the "no fabricated numbers" rule.
- **The four projects are never named** in the February deck. Name them.
- February framed this for an emerging-tech audience; November is faculty who teach,
  including mathematicians.

---

## What the abstract already commits you to

The published abstract is the spec, and it is unusually specific. It promises:

- **Cross-disciplinary coverage** — "humanities, social sciences, and natural sciences
  alongside STEM." Named examples: equations, flow charts, syntax trees, structural
  formulas, supply-demand curves, choropleth maps, IPA transcription, music notation.
- **Conversion into screen-reader-renderable notation in Canvas** — not descriptions of
  equations, actual renderable notation. That is a MathML/LaTeX claim.
- **Narrated walkthroughs** of flow charts, process diagrams, decision trees.
- **Audio descriptions** of technical figures.
- **Live screen-reader demonstrations** showing accessible vs inaccessible.
- Work session applying the workflow to the attendee's own content, **from any discipline**.

It also already contains the thesis in Rick's own words: notation "that experts read
differently than they'd ever say aloud." **That sentence is the deck.**

---

## Review against the published brief — November 2, 2026

Checked against the event listing. Shot list for every recording is in `demos.md`.

| The brief promises | In the deck now | Status |
|---|---|---|
| Humanities, social sciences, natural sciences *and* STEM | Slide 9 grid: math, chemistry, linguistics, music, medicine, law, dance | **Social sciences missing.** No supply-demand curve, no choropleth |
| Converting equation images into screen-reader-renderable notation **in Canvas** | Slide 6 pipeline, generic; slide 10 says "put it in Canvas" | **Partial.** Canvas is never shown. Clip 3 |
| Converting structural formulas and syntax trees | Slide 9 lists both under "can't be spoken at all" | **Contradicts the brief.** Show what can be done. Clip 8 |
| Narrated walkthroughs of flow charts, process diagrams, decision trees | Nothing | **Missing.** Clip 6 |
| Audio descriptions of technical and disciplinary figures | Nothing | **Missing.** Clip 7 |
| *Live* screen-reader demonstrations, accessible vs inaccessible | Slide 4: recordings (decided October 15) | **Recorded, not live.** Say why on slide 4. Make it a before/after of one figure. Clip 1 |
| April 2027 deadline | Slide 3 | **Done.** Date confirmed November 2, 2026 |
| Work session on your own content, any discipline | Slide 10, equation-only steps | **Partial.** Needs a path for a figure or diagram, since the brief invites people to bring one |
| Competencies 1, 3 and 4 | Not checkable: the competency definitions aren't in this repo | **Open.** Need the Pathways Program text |
| Title says Notation, *Diagrams* and Symbols | Diagrams appear only in the Labanotation card | Same gap as the walkthrough and figure rows |

**What it means for the deck:** the brief is built around three outputs: renderable notation,
narrated walkthroughs and audio descriptions. The deck covers the first. One new slide
covering diagrams (walkthrough plus figure description, clips 6 and 7) closes most of the
gap. It fits in the 6 minutes of slack if slide 9 trims too.

**Done November 2, 2026** (Rick: "add them"):
- New slide 9, **Diagrams**: flow chart walkthrough, supply-demand description, choropleth
  as a table. Covers walkthroughs, audio descriptions and the social sciences.
- Slide 4 is now one equation before and after, inaccessible as an image and accessible as MathML.
- Slide 3 carries the April 2027 line, worded as in the brief.
- Slide 10 (Your Field): the third level is now "Needs a different form" and names the fix.
  The layout is tightened, and the time goes 7 → 4.
- Slide 11 (work session) takes a figure or diagram as well as notation.
- Limits 7 → 6. The total is now 57 of 60.

Still open from this review:
- [x] **April 2027 date: confirmed by Rick, November 2, 2026.** Slide 3 stands as written.
- [ ] Competencies 1, 3 and 4: get the Pathways Program text and check the deck against it.
- [ ] Record clips 1, 3, 6 and 7. Those are the brief's promises; the slides hold placeholders until then.

## Screen readers at Rutgers — checked November 2, 2026

- **NVDA**: free, Windows 10+ 64-bit; **MathCAT built in since NVDA 2026.1**. Download
  from nvaccess.org only.
- **JAWS**: Rutgers has an institutional licence for Fusion (JAWS + ZoomText), on the
  Rutgers software download page. JAWS has supported MathCAT since December 2024. Windows only.
- **Mac**: VoiceOver is built in. NVDA and JAWS aren't available.
- **Training**: RADR's Screen Reader Training covers JAWS, NVDA, VoiceOver and Narrator.
- On Rutgers-managed Windows machines, installing NVDA may need departmental IT.

The closing slide now links NVDA, the Rutgers JAWS page and the training. Only the Gen AI
reader's tool is still a placeholder there.

## The order: the room's challenge first — November 2, 2026

**Rick: "The presentation is almost backwards."** The challenge is something everyone in the
workshop is living with; the math pathway is a good example of working through it. So the
thread is the attendees' problem, and the deck now runs:

| New | Slide | Was |
|---|---|---|
| 1 | Title | 1 |
| 2 | **Your Field Has Its Own Notation**: the challenge, with the chat prompt as the opener | 10 |
| 3 | It Sounds Right, and It Isn't: why it's hard, plus the April 2027 deadline | 3 |
| 4 | Where This Comes From: the math project and thanks, now "today's worked example" | 2 |
| 5–9 | The math pathway: screen readers today, MathML baseline, the pipeline, the Gen AI reader, where it fails | 4–8 |
| 10 | Diagrams: the same moves outside math | 9 |
| 11 | Work session: their own material | 11 |
| 12 | Closing | 12 |

Slide numbers in the sections below this one are from before the reorder. `demos.md` uses
the new numbers.

## The argument, in Rick's words — November 2, 2026

1. Notation is specific on purpose, and we don't speak it the way we read it.
2. Automated readers are literal: they read the symbols, not the meaning an expert would put into words.
3. Seeing, hearing and spatial sense loop together. A capture that is too complete, too
   real, in image or audio, buries the important part.
4. AI reads a page accurately now, and can work out what is meant, but it guesses. It
   guesses common ideas well and specialized ones badly, so **a strong model fails at
   the edges**, where the notation is rarest and the information thinnest.
5. Accessible includes being *able to read* the notation, not only being unable to see or
   hear. Senses beyond sight and hearing: touch (braille, tactile graphics, models),
   movement (dance), sign, sonification, colour.

Where it lands: 1–2 on slides 3–7, 3 on slide 9, 4 on slide 8, and 5 on slides 10 and 12.

**Demos use Rick's own fields**, because he is the verifier: music, propositional logic,
math from tensors to stochastic calculus, simple electronic schematics, code. Slide 10's
grid swaps Law for Electronics. See `demos.md`.

**Said out loud, not on a slide:** in a test, a full description can give the answer away.
How much to describe has to match what the question tests, and only the instructor knows
that. Bring it up in the work session.

## The prompt, and saving it — November 2, 2026

**Rick: asked to make a math problem accessible, AI tends to answer it instead.** That
destroys a worksheet, and a "find the error" exercise worst of all, because it fixes the
error. Slide 11 now carries the work-session prompt, and its first line forbids solving,
simplifying, correcting or finishing anything. The figure line says "without saying what it
proves", for the same reason in tests.

**Saving the prompt so the rules travel with it** (Rick's "AI skills" idea): slide 11 says
"Save it as a skill in Gemini, or an agent in Copilot."

**Gems and GPTs are being retired, checked November 2, 2026:**
- **Gemini: Gems → skills.** No new or edited Gems from October 13, 2026; automatic
  migration to skills from November 17; Gems removed from the Gemini app December 17.
  Google's Workspace post says Gems on education accounts last until at least June 1,
  2027. Skills started rolling out in Workspace on October 5.
- **ChatGPT: custom GPTs → plugins.** No new GPTs from October 26, 2026; GPTs stop
  working December 11. A migrated GPT's instructions become a skill inside the plugin.
  Not the 2023 plugins: a different product with the old name.
- **Copilot: still "agents".** No rename found.
- [ ] **Verify on a NetID** that a Rutgers account can create a Gemini skill, and a Copilot
      agent. If either can't, drop it from the line.
- [ ] Earlier decks in the series say "Gem" (August 21's Gem share link). They're past
      talks; leave them. The January 29 Prompting Cookbook should say skills and plugins.
- [ ] Record clip 10 (it answers instead, then the prompt fixes it). See `demos.md`.

**The rules live in a skill — built November 2, 2026** (Rick: "shouldn't this kind of advice
live in a skill anyway?"). `notation-access/SKILL.md` is the full rule set: never solve or
correct, keep local conventions, mark uncertainty at the symbol, describe without concluding,
what to produce for notation, diagrams, figures and notation with no spoken form, and a
closing "Check these" list. It's plain Markdown with a name and description at the top, so it
works as an Agent Skill as-is and pastes into a Gemini skill or Copilot agent. Slide 11 keeps
a short form of the prompt and links the skill; the closing slide lists it.
- [ ] Paste it into a Gemini skill on a NetID and run it on two specimens before Friday.
      Check it transcribes and doesn't solve.

## The Accessibility Sandbox course — mapped November 3, 2026

The Canvas sandbox (`RUCanvasCourses/accessibility-sandbox-2026-09-18.imscc`) already has
a module **6. Beyond Alt Text (November 6)**, and it holds this deck's real material. Use
it before making anything new. Pages are in `wiki_content/`, and files in `web_resources/`.

**The limits notes: one chain, five tries.** These are the Section 2.1 handwritten notes
(`handwritten-math/limits-2-1-notes.pdf`, 7 pages, plus a whiteboard photo and a car
sketch). The module keeps every conversion attempt, which together make up the pipeline
slide (slide 7) and clip 3:
- `limits-2-1-markdown-latex-paste-…` and `…-bracket-latex-paste-…`: LaTeX pasted into
  Canvas shows as raw `$…$` and `\(…\)`. This is the "Canvas doesn't render it" beat.
- `limits-2-1-ocr-to-inline-latex`: OCR to LaTeX.
- `html-mathml-…-with-gemini`, `limits-2-1-mathml-conversion` (68 equations), and
  `…-with-described-car-diagram`: the MathML results.
- `section-2-1-introduction-to-limits-worksheet`: LaTeX with a spoken form written under
  each item ("f of x equals 2 times the natural log of…"). This is the house pattern, and
  it is the same output the skill asks for.

**A verified OCR error, for slide 9 and clip 5.** On page 1 of the notes, the source says
`7·1²` (a raised dot: seven times one squared). The OCR page has `7.1^2`, which a screen
reader speaks as "seven point one squared". It sounds right and gives 50.41 where the
source means 7. The same page also invents fractions: the source's boxed `14.7` comes out
as `\frac{14.7}{1}`. The MathML conversion reads `7·1²` correctly, so the two conversions
of one page can be compared side by side. This is common material that still failed: it
supports the argument without a specialist example.

**Markov chains (Gursoy), for slide 9 and Rick's stochastic area.** Two conversions of the
same handwritten notes disagree. The handwritten source is not in the course, so before
quoting either one, Melike Gursoy or Rick has to confirm which is right.
- `gursoy-class-notes`: `P{X_{n+1}=j | X_n=i} = P_ij`, with "past" and "present state"
  underbraces.
- `markov-chains-glm-ocr-to-mathml`:
  - `P_ij(n)`. The added `(n)` makes the chain depend on time, which changes the meaning.
  - A `/` in place of the conditioning bar `|`, with unbalanced braces.
  - `S′` where the other version has `S`.
  - A stray `α ∩ β`.
  - The state labels 0 and 1 pulled into the matrix entries.
- Each one reads aloud fluently. This is the specialized case the argument predicts, and
  it is Rick's own field, so he can verify it on camera.

**Resolved November 3, 2026, against the original** (`Class Notes-Jan27-2021.pdf`, page 2).
The page does write `P_ij(n)` and uses `/` as the conditioning bar, so the GLM OCR's `(n)`
and `/` are faithful readings, not errors; that backup is dropped. The real error is the
other way: GPT-6 Astra and Gemini 3.6 Thinking both wrote `P_ij^{(n)}` (n-step) for the
page's `P_ij(n)` (Rick's ruling: on the line). It is now on slide 9.
See `recordings/gursoy-lecture-comparison.md`.

**Diagrams, for slide 10.** Two sources:
- In `gursoy-class-notes`, the repairable-machine state diagram is already described as
  text (two states, self-loops α and β), and so is a hand-drawn sample-path graph.
- In `before-limits-2-1-handwritten-notes`, the car-on-a-line sketch is described in
  `…-with-described-car-diagram`.

**Colour carries meaning.** On page 2 of the notes, blue and green highlights pair each `h`
with its `av(h)`, and a red margin note says "cannot take h = 0 in this expression: simplify
algebraically first". The conversions drop the colour. The Gemini full-prompt version
rewrites the note as its own heading ("Algebraic Confirmation… assuming h ≠ 0"). That is
the line between describing the page and teaching it, which the skill's "describe, don't
conclude" rule covers. The after-algebra page already asks: "Is every warning or correction
shown in color also stated in text?"

**Still empty in the course.** The after pages for `logic-and-proofs` (P⟹Q, Rick's
propositional-logic area) and `handwritten-algebra` are templates with "[to fill in]". Each
one is a ready work-session target, or a recording for clip 10 (it answers instead).

**Resources.** `tools-and-resources` already lists Ally, ReadSpeaker, SensusAccess, CidiLabs,
the Libraries remediation request and the AI Hub. This deck's Resources slide could link the
sandbox course itself. The course is not public, so link it only if attendees are enrolled.

## Two promises this session inherits

### The earlier promise
Notation has been advertised on this topic before — named in an abstract, led with in an
agenda, and then shipped as **a blank slide titled "Focusing on notation."** An outline
for the real version (Canvas, MathJax, LaTeX, Ally) exists and was never built.

**Some of this room has now been promised notation twice.** The third time has to deliver.

*Note on this file: it records lessons, not verdicts. Earlier material is discussed
unattributed on purpose — the point is what this session does next.*

### The September 18 promise
September 18's slide 8 carries a notation card whose closing line is
**"That is the whole of November 6."** Whatever that card says on the day is a debt this
deck pays. Re-read it before building — do not let the two drift.

---

## BLOCKING

### 1. Decide the screen-reader demo — hardest logistics in the series. — DECIDED October 15, 2026
**Rick is prepping this demo himself.** Two halves:
- **Existing screen readers — recorded.** Rick has recordings of current screen-reader
  tech reading notation element by element. Settles "live or recorded" for this half.
- **A Gen AI–style reader.** Recognizes the notation and reads it *the way people say
  it*, not symbol by symbol. This is the thesis ("read differently than they'd ever say
  aloud") as a working demo.

Open questions the deck has to answer around it:
- **The room knows MathCAT (Rick, October 15, 2026).** Mathematicians who teach will be
  in the audience and are familiar with it. Don't present MathCAT or MathSpeak/ClearSpeak
  as a discovery. Treat it as the baseline they already trust. Rick has researched it and
  adopted its best practices. **TODO: get the list from Rick and put it in the deck
  rather than re-deriving it.**
- **Why not ClearSpeak?** MathCAT's ClearSpeak already does natural phrasing for MathML
  (see 5b). The Gen AI demo needs to show what ClearSpeak can't: notation that arrives
  as an image or handwriting, notation outside math (IPA, chemistry, logic, Leiden), and
  reading that follows the course's conventions.
- **Its silent failure.** Reading "how we say it" means inferring, and the 5b handwriting
  note warns that's where AI starts concluding. The P ⟹ Q / P ⟺ Q specimen is the
  obvious test: does the Gen AI reader fluently say "implies"? Show the failure as well
  as the win.
- **Rutgers-accessible is the requirement (Rick, October 15, 2026).** Most options must
  be things the room can use with Rutgers accounts. Build the Gen AI reader in Gemini or
  Copilot on a NetID: September's "bring your own" lane. If it needs a saved assistant,
  that's now a Gemini skill, not a Gem (see the November 2 note below on Gems → skills). If it only
  works on a paid or personal account, it's a showcase: say so on the slide.
- Audio routing and pacing below still apply to whatever plays over Zoom.

Original notes:
- **Which reader, on which OS.** NVDA (Windows, free), JAWS (Windows, licensed), or
  VoiceOver (macOS, built in). Free and installable matters if the room is to try it.
- **Audio routing over Zoom.** Screen-reader speech is system audio, not microphone —
  it requires "share sound" on the screen share, and it is easy to get silently wrong.
  **Test this on a real Zoom call, not in theory.**
- **Live or recorded.** The standing rule and prior practice both point at recorded.
  A screen reader mid-demo is exactly the thing that misbehaves live.
- **Pacing.** Default screen-reader speed is unintelligible to newcomers and slowing it
  down misrepresents how users actually listen. Say which you are doing and why.

### 2. Pick the worked examples — one per discipline cluster, all real.
The abstract promises humanities, social sciences, natural sciences *and* STEM. That is
four artifacts minimum, and the September 18 rule holds: **real material every time,
never fabricated.** Candidate sources: the Accessibility Sandbox Canvas course
(`rutgers.instructure.com/courses/375349`, also `316933`) and attendees' own material.

Strongest candidates from `notation-inventory.md`, chosen to prove the range:
- **Humanities** — Leiden Conventions (brackets are an editorial *claim*) or IPA.
- **Social science** — supply-demand curve, or a choropleth (colour as sole carrier).
- **Natural science** — a structural formula, whose spoken form is a whole other
  naming system.
- **STEM** — an equation image, the canonical case with the most existing machinery.
- **Wildcard for warmth** — chess, knitting charts, or baseball scorekeeping.

### 3. Verify the Canvas notation stack before claiming it. — PARTLY ANSWERED
**Answered September 2, 2026 (see `notation-inventory.md` for detail):**
- **MathML is the deliverable.** NVDA, JAWS and VoiceOver all read it. **LaTeX is not read
  natively** — MathJax renders it and supplies the accessibility layer. So the abstract's
  promise of "screen-reader-renderable notation" means MathML, however it is authored.
- **MathCAT is built into NVDA as of 2026.1**, no download; JAWS has supported it since
  December 2024. It does speech, braille, and structural navigation of an expression.

**Still to verify, on a real Rutgers course:**
- Canvas equation editor — does it emit MathML or an image?
- MathJax in Rutgers Canvas — on by default?
- Does Ally do anything for math, or only score the image?
- What a real screen reader does with each, on the demo machine.

**Carry September 18's entitlement discipline over verbatim: the moment you name a tool
you inherit the obligation to be right.** Every claim gets verified with a date.

### 4. Build the deck. — FIRST DRAFT October 15, 2026
`beyond-alt-text.jsx`, draft chrome on. Open items are dashed amber `<Placeholder>`
boxes on the slides themselves: `grep -n "<Placeholder" beyond-alt-text.jsx`.

**Less is more (Rick, October 15, 2026).** Cut from 16 slides to 11, one idea each.
Removed: Scope, Voice In (multilingual dictation), separate Resources. Merged: sources,
pipeline and outputs into one slide. Time tags now total 54 of 60, which leaves 6 minutes
of slack for the demos. The cut material lives in git history and `notation-inventory.md`.
Say it out loud; don't put it back on a slide.

Original note:
Port the component vocabulary from `20260918-digital_accessibility/digital-accessibility.jsx`
so the series keeps one visual language. Run both checks before shipping —
`.claude/skills/deck/check.js` catches syntax, `render-check.js` catches blank slides.
Branch first; never commit to main.

### 5. Write `demos.md` and `presenter-notes.md` from the start.
September 18 is still missing both and it has become the largest open item on that deck.
Do not repeat it. One view and it is the audience's — every delivery note goes in
`presenter-notes.md` and is never rendered.

---

## IMPORTANT

### 5b. Material moved here from the September session, September 2, 2026
September 18 is the beginner/everyday session; these are the specialist findings that came
out of that work and belong here instead. Detail is in `notation-inventory.md`.

**The thesis now has a name and a switch — lead with this.**
MathCAT offers two speech *styles* for the same expression: **MathSpeak** (precise,
structural, verbose) and **ClearSpeak** (natural phrasing, closer to how a teacher says it).
The listener chooses. **One expression, two correct spoken forms** — which means *"the"*
spoken form of a notation does not exist. That is this session's whole argument, already
shipped as a configuration option, and it is far stronger than asserting it.

**Braille is more mature than speech here.** MathCAT emits Nemeth, UEB Technical, CMU and
others, all standardized. Useful counterweight to the room's assumption that audio is what
accessibility means.

**Chemistry is partial, music is a different world.** MathCAT has chemistry heuristics and
speaks detected formulas *as chemistry*. Screen readers do not read music at all —
MuseScore 4 has its own support, MusicXML converts via projects like Talking Score, and
braille music is its own code. Both confirm the group C argument.

**PDF/UA-2 (ISO 14289-2)** — the accessibility standard aligned with PDF 2.0. Figure tags
can now carry sub-structures, so a complex diagram can be described in parts. Almost nobody
has adopted it, and Rutgers' standard is WCAG 2.1 AA. A "coming, not here" note.

**The handwriting failure, stated precisely.** With bad enough handwriting, AI stops reading
and starts concluding. It infers what was probably meant — sometimes correctly, which is
what makes it dangerous, because a plausible completion is indistinguishable from a correct
reading. And the conclusion comes from general training, not from *this* course, *this*
convention, *this* instructor's meaning. Local notation gets silently normalized.

**A live specimen, if it holds up.** In the September 2 test, page 8 of a Rutgers logic
textbook came back with a biconditional truth table headed **P ⟹ Q** where the source has
**P ⟺ Q** — with biconditional values underneath. Internally inconsistent, unflagged.
**Confirm by eye before using it.** Note the source is copyrighted, so reproduce the
specimen rather than screenshotting the page.

**A real test artifact exists.** `~/Downloads/scanned-logic-20p.pdf` — 20 image-only pages
of notation-dense Rutgers material, plus a replication prompt and scoring sheet at
`20260918-digital_accessibility/pdf-conversion-test.md`. Both were built for the September
session and are more useful here.

**Also: the sandbox already has a math-accessibility module.** The Canvas export's course is
*"Accessibility and Math"* with a module *"Mathematics PDF Accessibility"* containing
`logic.pdf`, `2.1 Notes.pdf` and `2.1ws.pdf`. Open it before building anything new.

### 6. Settle the spine before writing slides.
September 18's four beats (Source → AI pass → Verify → Place it) are why that deck holds
together, and the absence of one is why earlier material didn't. This deck needs its
own, and `notation-inventory.md` already suggests it — **the A/B/C grouping by what the
fix actually is:**

| Group | Examples | The fix |
|---|---|---|
| **A · Substitutable** | Basic math, chemical formulas, stats symbols | A standard spoken form exists. MathML/LaTeX. |
| **B · Linearizable with scope markers** | Fractions, matrices, code, IUPAC names | Flattens *if* structure is announced. Where AI genuinely helps. |
| **C · Not linearizable** | Music staves, circuit diagrams, structural formulas, syntax trees | **Audio can't carry it.** A different artifact, not a better tool. |

**Group C is the honest core and should not be softened.** It is this deck's equivalent of
September 18's limits slide — the slide that makes the room trust everything else.

### 7. Lead with the silent-failure argument.
The strongest single idea to come out of the September 18 work: ordinary TTS failures are
*audible* — a mangled name still sounds mangled. **Notation fails silently.** `x²+y²` as
"x two plus y two" is fluent, confident, and false, and the student has no way to know.
That is the opening, not a mid-deck card.

### 8. Make the faculty-ownership argument explicitly.
`(a, b)` is an ordered pair, an open interval, a gcd, or an inner product — **you cannot
pronounce it without knowing the course.** This is the strongest argument in the entire
series for why faculty write their own descriptions rather than a central office doing it,
and it has never been said out loud. Say it here.

### 9. Mine the existing outline rather than re-deriving it.
Canvas, MathJax, LaTeX, Ally — the unbuilt version of this session already exists as an
outline. Two facts in that material must **not** be carried over: the April 24, 2026 deadline
(now **April 26, 2027**) and the "WVAG 2.2" typo (Rutgers is **WCAG 2.1 Level AA**).

### 10. This deck will be inspected harder than September 18's.
Same non-negotiables, higher stakes: real alt text on every image, colour never the sole
carrier, `&print` readable in greyscale, contrast checked at WCAG 2.1 AA. **And a deck
about notation had better not put an image of an equation on a slide with no alt text.**
Walk every slide in `&print` before shipping. The failure modes to hunt for: blank slides,
duplicate slides, and notes-to-self left visible to the audience.

---

## WORTH DOING

### 11. Bring forward what September 18 learned late.
- **Learning objectives as the organizing idea** (present in earlier material; September 18
  nearly lost it). Notation description aligned to what the student is meant to learn.
- **Students as people who act**, not files that get processed. September 18's voice
  drifted here and it needed a deliberate fix.
- **A compare-the-tools moment** in the work session — make the room do the evaluating.
- **POUR** — name the four WCAG principles once.

### 11b. Dance is the horizon-widening example — DECIDED October 26, 2026
**Rick: the dance example is really important to help people expand their horizons of
notation.** Slide 9 features Labanotation in its own card, not as one field among many.
Keep it featured through every cut. **Image added October 26, 2026:**
`labanotation-symbols.png`, the 12-symbol hand-drawn sheet from the Movement4Brain Game
Design Document, section 5.2. It is a key, not a score, so the slide says "symbols", not
"staff". The high/low/middle symbols differ only by fill, which is failure type 4 (meaning
carried by things with no sound) shown in one picture.
- **Credit:** who drew the sheet? Name them on the slide if they want credit.
- **The game doesn't show these symbols yet.** The vertical slice uses stars and light
  trails. Don't say on the slide that players see Labanotation in the game.

### 11c. Thank the faculty on slide 2 — DECIDED October 28, 2026
**Rick: thank Carmela Scala and Melike Gursoy**, the faculty who helped with the project.
Slide 2 now carries a "With thanks" card with both names. Names only for now.
- [ ] Confirm the role and department each wants shown under their name.
- [ ] Ask whether either wants to say a word live, or be named in the chat.

### 11d. First deck on the UOES theme — DECIDED October 28, 2026
Rick: adopt the office PowerPoint template (`UOES_ppt_template_RED.pptx`, official UOES
use) as the look for this deck and every one after it. The deck now loads
`themes/uoes/theme.jsx` and defines no components of its own. Segment times moved from
the coloured pills into the scarlet subhead under each title. Slide 2's thanks uses the
template's speakers layout; slide 11 is its closing slide.
- [x] Slide 9 (now 10, Your Field) scrolled inside the frame. Tightened November 2, 2026.
- [ ] Going live: set `draft` to null in `UOES.configure` at the top of the deck.

### 12. Consider a "notation your field bans" beat.
Medicine's Joint Commission / ISMP **"Do Not Use" list** exists because certain notation is
routinely misread by *humans*. A discipline that outlawed its own notation for being
misread is the best stakes argument available, and it takes twenty seconds.

### 13. Decide whether the work session can actually work here.
September 18's work session assumes everyone has a file they can act on in 20 minutes.
Notation is harder and the tooling is heavier. Either scope the activity down (describe
one figure well) or accept that this session's work block is more consultation than
production — and say so on the slide.

---

## Carried over — settled by earlier sessions, don't relitigate

- **One view, and it is the audience's.** Delivery notes never live in the deck.
- **Every segment stands alone** — sessions are recorded and clipped, no "as I said earlier."
- **No relative time.** Always the literal date.
- **Real material every time.** No fabricated numbers, no invented examples.
- **If the room cannot legally use it on Monday, it is a showcase, not a demo** — record
  it, keep it short, label it as such.
- **Verify is a named beat**, not an afterthought. A segment without one isn't finished.
- **Entitlement tiers** (from `20260918-digital_accessibility/tts-decision-matrix.md`):
  T1 institutional / T2 provided / T3 local / T4 outside. T4 is showcase-only.

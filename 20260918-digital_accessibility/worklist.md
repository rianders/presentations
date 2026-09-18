# Worklist — AI-Assisted Digital Accessibility Workflows

**September 18, 2026 · 11:00 am – 12:30 pm · Zoom**
Deck: `20260918-digital_accessibility/digital-accessibility.jsx` — 18 slides
Preview: `shell.html?p=20260918-digital_accessibility/digital-accessibility`

Status as of **August 28, 2026**: structural draft complete and compiling. The spine,
the scope boundary, and the segment shape are settled. Deadline facts verified (item 3,
closed). OIT tool list read (item 2, partial).

**New as of August 28:** reviewed prior material already in hand on this topic — a slide
set, extracted screenshots, and a Canvas sandbox course. It carries assets and moves this
deck had dropped, and it changes the plan in five places. See **"What the review changes"**
below and items 15–23.

*Note on this file: it records lessons, not verdicts. Where earlier material is discussed
it is unattributed on purpose — the point is what this deck does next, not who did what
before.*

**Also August 28 (second pass):** the tool-entitlement question is now largely answered.
**Ally's Rutgers enterprise license is confirmed** (item 15 — the deck's one tool claim is
safe), **SensusAccess** surfaced as a Rutgers-provided MP3/DAISY conversion service for
faculty, staff, students, and alumni (items 1, 2), and **Segment 1 resolved into two
lanes** — the reading as audio (Ally, SensusAccess) and a faculty-authored companion
(Gemini Notebook Audio Overview), which are verified differently and must not be
substituted for each other (item 1). Slide 7's multilingual sentence is now the open
risk (item 26).

Slide numbers come from the `// ── N:` markers and shift on reorder. Re-extract with:
`grep -n "// ── " 20260918-digital_accessibility/digital-accessibility.jsx`

---

## THE SEGMENT 1 MERGE — September 16, 2026

**Old slides 7 and 8 are now one slide.** The standing first cut named in the deck
header was taken. Segment 1 goes **11 minutes to 7**, which is the 4 minutes the time
budget needed. The deck is now **18 slides**, not 19.

**Slide numbers below this section predate the merge.** Everything from old 9 onward
shifted down by one — old 9 (AI Vision) is now 8, old 16 (Work Session) is now 15,
old 19 (Contact) is now 18. Re-extract before trusting any number in this file:

```
grep -n "// ── " 20260918-digital_accessibility/digital-accessibility.jsx
```

### What survived, and why

- **The verification list stayed a list.** This was the whole point of the merge
  question. The four audible failures — names and terms, acronyms and numbers,
  structure it can't see, language switches — are the thing faculty write down and
  carry out of the room. The first draft of this merge dissolved them into VerifyBeat
  prose to save space. That was the wrong economy: prose is for reading once, a
  numbered list is for working through. They are now a numbered block above the
  verify beat, with the reusable-pronunciation tip folded in as its closing line.
- **The notation card stayed whole and stayed accent.** Slide 4 promises November 6
  "equations, structural formulas, syntax trees." Cutting the handoff would make that
  boundary a lie, and the card is the segment's best moment: four failures announce
  themselves, the fifth doesn't.
- **The Gemini Notebook card lost its `accent`.** Two accent treatments on one slide
  dilute each other, and notation needs it more.

### What came off, and where it went

The **"a companion is not a substitute"** DropIn lost a fight for vertical space with
the notation card. It is the other strongest moment in this segment, so it is not
dead — a compressed version is now a clause on the third lane card ("Offer it
*alongside* the reading, never instead of it"), and **the full text is preserved here
to be said out loud**:

> A companion is not a substitute for the reading. If the student who needs audio gets
> a generated discussion *about* the article while everyone else gets the article, that
> is not equal access. Offer both. Don't swap one for the other.

This is the same failure as the auto-generate trap on the Ally slide and the middle
tier on the alt-text slide: it sounds accessible and isn't. **Say it. It does not need
a card to land.**

### A trap found while doing this

`Bullet` is `text-gray-700`. `VerifyBeat` is `bg-gray-900`. A bullet list inside a
verify beat is **1.7:1** — a flat WCAG failure, on the accessibility deck. The list
lives in its own light block for that reason. A `// DO NOT` comment now sits on the
slide. This is a live example of open item 6 and an argument for doing that pass.

---

## THE SANDBOX, READ PROPERLY — September 17, 2026

Read from the local export (`edu.coursebackup.manager/workspaces/accessibility-sandbox-export-1-…`),
course **375349 · "Accessibility Sandbox"** on rutgers.instructure.com. **It is far more
built out than this worklist assumed** — 48 steps across seven modules, 50 pages, 28 files.

### It already mirrors the deck, module for module

| Sandbox module | Deck |
|---|---|
| 1. Start With Ally (Triage) | slide 6 |
| 2. Text-to-Speech | Segment 1 |
| 3. Alt Text (AI Vision) — 17 items | Segment 2 |
| 4. Scanned Pages to Canvas Page | Segment 3 |
| 5. Limits (video captions) | the limits slide |
| 6. Beyond Alt Text (November 6) — 28 items | held for November 6, correctly |

Its four tracks are the deck's four work-session tracks, and the **"Done when" lines are
verbatim identical** to slide 15. Its home page re-states the spine, the deadline, the
scope boundary and the two cautions in the deck's own voice. Its Tools and Resources page
mirrors slide 16 and adds one thing slide 16 does not have: **the Libraries content
remediation request, answered within two business days.**

### The gap: the link only goes one way

The sandbox links the deck ("Workshop slides: AI-Assisted Accessibility Workflows"). **The
deck mentions the sandbox zero times.** Slide 15 tells the room to run a track on *"the
document you brought"* — and anyone who brought nothing has nowhere to go, while a course
built precisely for that sits unmentioned. This is the same species of gap the shared doc
had, and it is bigger.

**BLOCKED ON ONE FACT:** the course is `is_public: false`, `license: private`. A bare link
fails for anyone not enrolled. **How do 30 faculty get in tomorrow — self-enrol link,
added in advance, or a published copy?** Answer that and the link goes in slide 15 in a
minute. Do not put an unresolvable link on a slide.

### Small things worth knowing

- The sandbox home says **"Rutgers Office of University Online Education Services"** — the
  same "Office of" wording corrected on slide 2 today. Sandbox-side, cosmetic, not urgent.
- Contact email matches the deck (`rick.anderson@uoes.rutgers.edu`). Verified, not assumed.
- Module 3 carries a placeholder: **"Still to add: a bar chart for The Same Chart, Three
  Ways."** That is slide 9, and `enrollment-chart.png` now fills it.
- Other "Still to add" placeholders: an announcement to turn into audio (module 2), an alt
  text prompt template (module 3), a round-trip checklist (module 4), a What This Does Not
  Solve page (module 5). The deck has finished text for most of these already.
- Module 3 holds the real alt-text specimens — the keynote photo, the microcontroller
  board, the two dogs, the counting sketch, the UDL/DI Venn, the state fair parking map,
  each as a before/after pair. **This is the demo material item 18 kept pointing at.**

---

## What the review changes about this plan

Short version, so the item list below makes sense:

1. **Ally is the missing anchor.** The prior workflow was built entirely on it:
   Ally → Canvas → GenAI → refine → back to Canvas. Ally is already inside Canvas,
   every instructor is entitled to it, it needs no OIT approval conversation, and it
   is the step that tells you *what is broken* — which has to happen before any of
   the three workflows in this deck can start. This deck mentions Ally **zero times**.
   It also mostly answers the tool-selection blocker for Segment 2.
2. **There is a real demo environment already built.** A Canvas course called
   **Accessibility Sandbox** (courses `375349` and `316933`), with real material in it,
   and five demos already recorded to Kaltura. This deck's demo plan does not have to
   start from nothing.
3. **The prompt framework had a name and five parts.** Role / Task / Context /
   Objective / Format. Here it survives as one prose code block on slide 10.
4. **Learning objectives were the organizing idea in that material** and are nearly gone here.
5. **That material talked about students as people who act.** This deck talks about files.
   Students appear 14 times and never once with agency.

Two facts in that material that must NOT be carried over: a deadline of
**April 24, 2026** (the pre-extension date — now April 26, 2027), and a Gem summary that
says **"WVAG 2.2"** (both the typo and the version are wrong for us; Rutgers is
WCAG 2.1 Level AA).

---

## THE TOOLKIT IS NOW SETTLED — verified August 31, 2026

Checking Rick's DesignPLUS note against **canvas.rutgers.edu/external-apps** turned up the
full list of Canvas LTI tools Rutgers licenses, and it answers Segment 1 and the contrast
problem at the same time. Two of these were missed on every earlier pass.

### ReadSpeaker — the tool this deck should have led with
**"Text-to-speech technology by ReadSpeaker has been made available to all Canvas Users."**
**"Rutgers has an enterprise license for ReadSpeaker."** It reads HTML content aloud to
students, needs no download, works on any internet-connected device, and Rutgers' own page
frames it as ideal for *"those with reading disabilities, dyslexia, visual impairment, and
… non-native English users."*

This is a tier-1, enterprise-licensed, already-in-Canvas text-to-speech tool. Verify
whether instructors must switch it on per course.

**CORRECTION, same day: ReadSpeaker does not replace SensusAccess.** That call was wrong.
They do different jobs and Rutgers has both:

| | ReadSpeaker | SensusAccess |
|---|---|---|
| What it is | An **in-place reader** | A **file converter** |
| Where | Inside Canvas | A web form, outside Canvas |
| Input | Canvas HTML content | Any file — image-only PDF, JPG, PowerPoint |
| Output | Speech, in the browser, now | A file emailed back: MP3, DAISY, EPUB, Mobi, braille |
| Who acts | Nobody — the student just presses play | Someone submits the file |

**ReadSpeaker leads** because it requires zero action from anyone and is already running.
**SensusAccess is the answer when a student needs a file to keep** — an audiobook for the
commute, an EPUB, braille — or when the source is something ReadSpeaker cannot read at all,
which is most of what this session is about.

### SensusAccess — the front door exists, it is just not on IT's pages
**Found August 31, 2026.** The IT pages describe SensusAccess and never link the form. The
**Rutgers University Libraries** page is the one with the working route:

> "Rutgers subscribes to SensusAccess, a document conversion utility that helps you create
> accessible documents. You can **access the tool directly** (you'll need a Rutgers email
> address to sign in), watch a video to learn more, or visit OIT's tutorial for more help."

- Libraries accessibility services page — carries the direct link
- Canvas tutorial: `rutgers.instructure.com/courses/10014/pages/what-is-sensusaccess`
- Sign-in: a **Rutgers email address**

**So SensusAccess stays on slide 7 — but link it from the Libraries page, not IT's.**
Rick's confusion here was the correct instinct: IT documents the service without telling
you how to use it.

### And this closes the last open piece of blocking item 1
**"Rutgers Libraries can supply remediated, accessible versions of digital or electronic
collections for library users"** via a content remediation request, with a response inside
**two business days**. That is the library accessible-copy service this worklist has been
asking about since the first pass. For library material, the answer is not a tool at all —
it is a request form and a person.

**And it sharpens Rick's authoring point:** ReadSpeaker reads **HTML**. A page authored
properly in Canvas gets read aloud. An image of text, or a PDF, does not. That is exactly
why authoring matters, said concretely, with a tool the room already has.

### CidiLabs DesignPLUS — confirmed, with a catch
**"Rutgers has an enterprise license."** DesignPLUS carries an accessibility checker
covering **heading structure, image/alt text, links, and colour contrast**.

**The catch: the instructor must switch it on** — "enabling it in the course navigation."
Unlike Ally, it is not already running. That is a real difference and it belongs on the
slide, because "already on" versus "you turn it on" is the distinction faculty need.

**CidiLabs TidyUp is also licensed** (content cleanup, already documented at Rutgers).
UDOIT is **not** in the Rutgers list — do not mention it.

### The resulting toolkit — matches Rick's own two-column framing
| | Tool | State |
|---|---|---|
| **Built-in, already running** | Ally (scores, alternative formats, MP3, PDF auto-tag) · ReadSpeaker (reads pages aloud) | Nothing to do |
| **Built-in, you turn it on** | DesignPLUS (accessibility checker, contrast) · TidyUp | One-time enable |
| **Bring your own** | Gemini · Copilot · Gemini Notebook | Yours to drive |

### 35. The screenshot move — Rick's core workflow, and it is not in the deck
**"Have Ally do the analysis of the page and images. If the image doesn't have good alt
text, take a screenshot of the page and give it to Gemini or Copilot."**

The screenshot is **of the page, not the image** — that is the whole point. The built-in
tools describe an image in isolation; handing over the whole page gives the model the
surrounding text, so it can propose alt text that fits the context. That is the concrete
reason to leave the built-in tool, and it is the bridge between the two columns above.
Gemini Notebook can take the same input (it now OCRs images and separates handwritten from
printed regions).

This is also the student move (item 30): a student screenshots the page into their own
chatbot and asks *"How might this image relate to my class?"* **Same gesture, both
directions.** Faculty use it to author; students use it to understand.

### 36. Contrast — two different problems with two different answers
- **Contrast in a Canvas page** → DesignPLUS's contrast checker. Fix it in place.
- **Contrast in a PDF** → Ally will *find* it, but finding is all it does. Fixing means
  converting the document, which is where AI comes in — and it lands Segment 3 back on
  Ally's new PDF auto-tag (note 7b).

Worth saying plainly: **Ally is a detector, not a repair shop.** It tells you what is wrong
and hands the fixing to you. That is the honest version of "start with Ally," and it sets
up every segment that follows.

**This also closes item 6 (contrast-check the deck itself)** with a better answer than a
manual pass: run this deck's own colours through the same reasoning, and say from the
podium that you did.

---

## SOURCE REVIEW — the two added decks, August 31, 2026

Two more source decks were added to this folder: **Part 1 (picking the right AI tool &
identifying possible biases)** and **Part 3 (AI tools to support accessible images)**.
Reviewed August 31, 2026. Part 3 is the direct ancestor of Segment 2; Part 1 carries more
accessibility material than its title suggests.

**Do not commit the .pptx files.** They are co-authored source material, they contain
personal email addresses, and this is a public repo. Extract what is needed and leave the
originals untracked. Same reasoning as the naming scrub.

### Confirmed for the third time — the toolkit split
Both decks organize tools the same way: **Multimodal Chatbots** (Gemini, ChatGPT, CoPilot)
versus **Built-in Tools** (PowerPoint's Alt-Text Generator, ALLY in Canvas). That is the
framing for a slide. The T1–T4 entitlement tiers stay in `tts-decision-matrix.md` where
they belong.

### FLAGGED FOR THIS DECK — beginner/intro items that are missing

**27. The tool taxonomy.** Chatbots (Gemini, CoPilot) / Services (Grammarly) /
Applications (Canva). Beginners do not know these are different kinds of thing, and the
distinction governs where course material is allowed to go. One card.

**28. VPAT.** Voluntary Product Accessibility Template — how you check whether a *tool
itself* is accessible before you ask students to use it. This is squarely an accessibility
session's business and it is absent here. One line, with the point that a vendor without
one has told you something.

**29. The bias-to-accessibility bridge.** From Part 1: *"Bias can become accessibility and
inclusive issues in course materials. Students would read the material and think you are
as biased as the LLM."* That second sentence is the most beginner-legible argument in any
of the source material. It belongs near the limits slide (14).

**30. The student prompt — closes item 17.** Part 3 asks *"How might a student use these
tools?"* and gives the actual prompt: **"How might this image relate to my class?"**
That is the student-agency moment this deck has been missing, and it arrives with a
concrete thing a student types. Pair it with Rick's own note 9: a student can screenshot
the page into their own chatbot and have it explained in context.

**31. FERPA and student data in prompts.** Part 1: *"No student PII in prompts."* A
beginner session that names cloud tools has to say this once. Absent here.

**32. "Each of us are evaluators of the technology."** Part 1's framing line. It is the
right stance for an intro session and it is the one this deck implies but never states.

**33. The five-step activity — better scaffolded than the current work session.**
Part 3: pick an image → **define a context and learning objective** → write the prompt →
generate → **refine the prompt to align with the objective**. Steps 2 and 5 are the
learning-objectives thread (item 21) built directly into the activity. Consider replacing
the four tracks on slide 16 with this, or adding it as the structure inside a track.

**34. The image-bias demo.** Part 1 asks *"What does a Rutgers student look like? What
does a Rutgers class look like?"* — generate and examine. This is the same argument as
Rick's New Brunswick artists example (review note 11) and gives it a demo that takes
thirty seconds.

### DO NOT CARRY OVER — stale facts in the source material
- **April 24, 2026 deadline** (Part 3, slide 11). Now **April 26, 2027**.
- **"Spring 2025" OIT tool list** (Part 1, slides 11–12) — superseded by the it.rutgers.edu
  list verified August 28, 2026. The claim that Gemini "does not include Gemini Advanced"
  is stale.
- **Model names** (Part 1, slide 23): GPT-4o-mini, Claude 3.5 Sonnet, Gemini 2.0 Pro,
  o1/o3-mini, DeepSeek r1. All superseded. Naming specific models dates a deck faster than
  anything else — this deck names none, and should keep it that way.

### TONE — what those decks do that this one doesn't
They are **question-led**. "How might we identify what's in our AI tools?" "What would we
like that process to be?" "How did that go?" "What ideas could we work on for next time?"
The room is asked to evaluate, repeatedly, and the chat is opened early ("What AI tools
have you worked with — let's make a list").

This deck is **declarative**. It tells the room what is true and what to do. That is not
wrong — it is a single-presenter deck and the confidence is earned — but for an intro
audience it is colder, and the participation gap (item 20, ~54 minutes before the room
does anything) is the symptom. **The cheapest fix is to convert three or four existing
statements into the questions they are already answers to.**

---

## TEST RESULT — the twenty-page question, September 2, 2026

**Test artifact.** The Accessibility Sandbox export was checked first, and **none of its
PDFs are scanned** — the Barthes files and the math files all carry text layers. The
worklist had assumed Barthes was the scanned-text demo. It isn't. So a real artifact was
built: **20 pages of `math/logic.pdf` rasterized at 150dpi and rebuilt as an image-only
PDF** — 4.8MB, **zero extractable text**, verified with `pdftotext`.

The source is *Introduction to Mathematical Reasoning* by **Chris Woodward, Rutgers
University, New Brunswick** — real Rutgers course material, densely notated. Strong demo
candidate on its own.

### Result 1 — twenty pages is not the problem
All 20 pages were read end to end with **no drift and no truncation.** Page 20 came back as
accurate as page 1. The strongest evidence: page 20 contains deliberate typos in the
original — *"the auhtor makes mitsakes"* — and they were **preserved exactly.** A model
losing fidelity or paraphrasing would have silently corrected them.

### Result 2 — the finding worth putting on a slide
**On notation, reading the image beat extracting the text layer.**

| | `pdftotext` on the original | Reading the scanned image |
|---|---|---|
| k-th root | `ak = b` | `a^k = b` ✓ |
| square root problem | `x2 = 4`, `y 2 = 4` | `x² = 4`, `y² = 4` ✓ |

Text extraction **flattens superscripts to baseline characters.** The digital, "accessible"
text layer silently destroyed the mathematics; the picture of the page did not. That
inverts the intuition everyone brings to this — and it is a real, reproducible result from
Rutgers course material.

### Result 3 — and it produced a live specimen of the deck's own claim
On page 8 the biconditional truth table came back headed **`P ⟹ Q`** where the source has
**`P ⟺ Q`**. The truth values transcribed underneath (T, F, F, T) are the *biconditional's*
values, so the table is internally inconsistent — but nothing in the output flags it.

**That is exactly the silent-notation failure slide 8 describes**, caught in the wild, on
the first try, in real course material. One glyph, meaning inverted, output still fluent.
**Confirm by eye against page 8 before using it** — but if it holds, this is the single
best example the session has.

### What this does NOT settle
- **Reading is not converting.** This tested whether a multimodal model can *read* twenty
  scanned pages faithfully. It did not test producing twenty pages of accessible Canvas
  output, which is where output-length limits and drift actually bite.
- **This was not Gemini, Copilot, or ChatGPT.** It is the same category of system, but the
  specific products in the deck remain untested. Running the same PDF through Gemini in a
  browser is the next step and takes ten minutes.
- **The code path is still the recommendation** for producing output at length, and is
  still untested.

**So slide 13 can now say:** reading twenty scanned pages is not the constraint, producing
twenty pages of output is — and verification is where the time goes. It cannot yet name a
product.

---

## TEST IN PROGRESS — auditing Gemini Notebook on an image, September 11, 2026

Gemini Notebook was given **an image and nothing else.** It OCR'd it, produced close
readings, and generated material from it. The output is usable. **Whether the recognition
underneath was any good is not knowable from the output.**

### The audit problem, stated plainly
These systems do not hand you raw recognition. They filter readings that look implausible
and snap ambiguous ones to something they already know. So a wrong character that happens
to sit in a familiar phrase gets quietly corrected, and a right character that sits in an
unfamiliar one can get quietly "corrected" too. **The output is fluent either way, and it
carries no record of which words came off the page and which came from the model's
priors.** That is why a true audit of Gemini Notebook is hard: you are grading a
reconstruction and calling it a transcription.

This is the verify beat in its hardest form. The page 8 truth-table error (Result 3 above)
was catchable because the source was in hand *and* the output contradicted itself. The
failure mode here is the opposite and worse — **a plausible reading that is simply wrong,
with nothing in the output to flag it.**

### The instrument that does work — unguessable content
Page 20's deliberate typos — *"the auhtor makes mitsakes"* — worked as a test precisely
because **no prior predicts a typo.** A model reconstructing from priors smooths them; a
model reading the page keeps them. Generalize that into the audit:

to measure recognition, put content in the image that priors cannot supply —
- typos and misspellings the tool is expected to preserve
- non-words and random strings (no dictionary to fall back on)
- a formula that is well-formed but **wrong**, off by one glyph
- numbers with no pattern, and a label that is deliberately mismatched to its figure

**Fidelity is measured by what the tool refuses to improve.** Anything it smooths, it was
guessing at.

### What is being tried next
The same single image through Notebook's **other output types** — Audio Overview, study
guide, briefing doc, mind map, FAQ — to see how far each one transforms the source. Each
transform is another place provenance is lost: the further the output is from a
transcription, the less it can be checked against the page at all. Audio Overview is the
extreme case and **is verified differently from the document outputs** (see item 25) —
these must not be collapsed into one claim.

### What this does NOT settle
- **Whether it read the image correctly.** Nothing here is a measurement yet; it is a
  statement of why the obvious measurement does not work.
- **One image is not the twenty-page test.** Different question, different failure modes.
- **Which product.** This is Gemini Notebook specifically. The deck's other named tools
  remain untested on this path.

---

## POSITIONING — Gemini Notebook vs. Gemini Gems, September 11, 2026

**The problem as stated:** Gemini Notebook is hard to fit into the accessibility workflow.

**The answer: it does not go in the workflow. It goes on a second axis.** Trying to seat it
in the spine is what makes it feel wrong, and the instinct that it doesn't fit is correct.

### Two jobs, and only one of them is the spine
| | **Remediation** | **UDL** |
|---|---|---|
| What it's for | Meeting WCAG 2.1 Level AA | More ways into the same material |
| Driven by | The April 26, 2027 deadline | Teaching judgment |
| Output must be | Checkable against the source | Useful, and honest about not being the source |
| Scored by | Ally | Nothing; it's an addition |
| The tool | **Gems** | **Gemini Notebook** |

**Notebook is disqualified from remediation for exactly one reason, and it's decisive: it
has no transcription mode and no visibility into its own process.** You cannot tell whether
a sentence came off the page or came from the model's *understanding* of the page — direct
from transcription, or AI-assisted reading of the transcription. Remediation output has to
be checkable against the source, so a tool that won't show you the seam can't do the job.

**But that flaw is irrelevant to the job Notebook is actually good at.** A study companion
never claimed to be the source. Notebook's weakness as a transcription tool does not touch
its strength as an engagement tool. **That is the line for the slide** — and it is a better
answer than either "use Notebook for accessibility" or leaving it out.

### Where it attaches in the spine — after beat 5, not inside beat 3
Notebook hangs off the **end** of the pipeline, not the middle. Fix the source, put it back
in Canvas, re-run Ally — *then* a companion is an addition. Run in the other order and it
is the trap slide 7's DropIn already names: the student who needs audio gets a generated
discussion *about* the article while everyone else gets the article. **A UDL addition does
not discharge the WCAG obligation.** Ordering is the whole safeguard, and it is one sentence.

### Multilingual — real strength, but it is a different kind of claim
Notebook's multilingual support is good, and it may be the **only verified multilingual path
in this deck** — slide 7 currently carries an explicit prohibition on multilingual *audio*
claims, because Ally's "translated version" is text and translate-then-speak is untested
(item 26). Two cautions before this goes on a slide:
1. **It is untested here.** Entitlement discipline applies: verify on a Rutgers NetID first.
2. **Language access is not disability access.** Useful, and squarely UDL — but it is not a
   WCAG 2.1 AA obligation and must not be presented as one. (The exception is 3.1.2,
   Language of Parts, which is about markup, not translation.)

---

## THE GEM — task-oriented WCAG 2.1 AA evaluation

This is the stronger of the two examples, and it is strong for the precise reason Notebook
is weak: **a Gem's process is inspectable.** You can read its instructions. You wrote them.

### Why a Gem and not just a prompt
- **Repeatability.** Same criteria, same output shape, every file. Evaluation that changes
  its mind between documents isn't evaluation.
- **Criterion-referenced.** Put the actual 2.1 AA success criteria in the instructions and
  the output cites a criterion instead of offering an impression.
- **Bounded verification.** A finding with a pointer — *this image, 1.1.1, here's why* —
  takes seconds to confirm by eye. That is the deck's verify beat, satisfied by design.
- **It survives the session.** Faculty leave with a saved tool, not a prompt they retype.

### The hard limit, and it goes on the slide
**A Gem triages; it cannot determine conformance.** Several 2.1 AA criteria are not
machine-decidable — 1.1.1 (is this alt text *meaningful*), 1.3.1 (are those the *correct*
semantic relationships), 2.4.6 (is that heading *descriptive*), 3.1.2 (language of parts).
The Gem produces **candidate findings** a human confirms. **Ally stays the detector of
record; DesignPLUS stays the in-place checker.** The Gem is "bring your own," and if it is
presented as a compliance tool faculty will read its output as a pass.

### Open before it can be demoed
- **Entitlement.** Can a Rutgers NetID Gemini account create and save Gems, or is that a
  paid tier? `gemini-gem-manager.png` shows a **PRO** account and **2.5 Pro** — so the
  existing screenshot does not answer this. Verify, do not assume.
- **Version hygiene.** That same screenshot contains the typo **"WVAG 2.2"**. This deck's
  standard is **WCAG 2.1 Level AA** (DOJ April 2024 rule, April 26, 2027). The Gem's name
  and instructions must say 2.1 AA. Re-shoot the screenshot; do not reuse it (item 709).

### Drafted — `wcag-review-instructions.txt`
Paste-ready instructions written September 11, 2026, plus setup notes, optional knowledge
files, and a five-probe test document with known answers to run **before** recording.

**The design decision that makes it worth having:** the Gem deliberately **does not report
what Ally already reports.** Missing alt text, missing headings, contrast, missing document
language — Ally finds all of it automatically, for free, unprompted. A Gem that repeats those
has no reason to exist. So the instructions scope it to the criteria that need judgment:
**1.1.1** (is the alt text *meaningful*, not merely present), **1.3.1**, **1.4.5**, **2.4.4**,
**2.4.6**, **3.1.2**, **1.2.x**. That is the half Ally cannot do, and it is why the Gem earns
its place in "bring your own" instead of competing with the built-in column.

Three rules in it carry the deck's own arguments: **never claim conformance** (candidate
findings only), **do not guess and do not smooth** (straight from the September 11 audit
finding — a Gem that silently corrects a typo is reconstructing, not reading), and **ask for
the page, not the image** (item 35's screenshot move, built into the tool).

**The core test probe** is an image whose alt text is accurate but useless — *"a bar chart
showing data."* A checker passes it because text is present. If the Gem does not catch that
one, it has no reason to exist and should not be shown.

### Why this is the video, not the live demo
Building a Gem is a five-minute multi-step UI task with persistent state — the worst
possible live demo in a session already under time pressure (item 10), and the one thing
that is genuinely better watched than performed. Contrast the screenshot-to-chatbot move
(item 35), which is ten seconds and should stay live.

**Outline drafted — `video-outline.md`.** **SUPERSEDED September 14 — rewritten shorter and
container-neutral; see "THE CONTAINER IS NOT THE SKILL" below for the decision and the current
shape.** The paragraph below is kept because its argument survived the rewrite intact.

**The chapter that matters is the one where the tool is wrong on camera.** A tutorial in which
it is right about everything teaches faculty to paste output. Showing it flag a decorative
divider, and saying out loud *the tool does not know what the image is for — you do*, is the
deck's entire argument delivered in forty seconds. Not optional — and in the rewrite it grew a
third move, naming something the tool missed entirely.

**So: record the Gem build as a full tutorial, link it from the Tools slide, and spend
session time on the Gem's *output* instead — one file, one set of findings, one confirmed
by eye from the podium.** The Hands-On slide gains a fifth track: *run the Gem on the
document you brought.* Done when you have confirmed one finding and rejected one.

---

## SETTLED — which WCAG version the deck cites, September 11, 2026

Verified against primary sources this date. **Do not relitigate; do not "update" 2.1 to 2.2.**

### Three versions are in play at once, and all three numbers are correct
| Source | Version | What it governs |
|---|---|---|
| **DOJ Title II rule** — the law for Rutgers | **2.1 Level AA** | The obligation. The April 26, 2027 deadline. |
| **Section 508** — federal procurement and funding | **2.0 Level AA** | Unrevised since the 2017 refresh |
| **Ally** — the tool scoring your course | **2.2 Level AA** | What the score in the panel actually measures |

That last row is new information and it matters: **Anthology's own documentation now says "Ally's
accessibility checklist is based on WCAG 2.2 AA."** A faculty member who follows the Ally link
from the Tools slide will read 2.2 while slide 3 says 2.1, and will ask. Have the answer ready.

### The decision: cite 2.1 AA, build to 2.2, never argue about it from the podium
1. **2.1 AA is the regulation.** It is what a complaint or an audit measures against. Saying
   2.2 where the law says 2.1 sounds authoritative and is wrong about the requirement.
2. **2.2 is backward compatible.** W3C: "The 2.0 and 2.1 success criteria are essentially the
   same in 2.2, with one exception." Meeting 2.2 means you have met 2.1. **You cannot lose by
   working to the newer one.** (The exception is 4.1.1 Parsing, removed from 2.2 as obsolete —
   a markup-validity criterion with no bearing on course content.)
3. **The rule permits equivalent facilitation** — alternative approaches achieving equivalent
   or greater accessibility. 2.2 is "greater." There is no exposure in exceeding the floor.
4. **For this room the delta is empty.** All nine new 2.2 criteria are interactive-UI criteria:
   focus not obscured, focus appearance, dragging movements, target size, consistent help,
   redundant entry, accessible authentication. **Not one applies to writing alt text, fixing
   headings, or converting a scanned PDF.** They belong to the LMS vendor and the web
   developer. **The version question is a developer's question, not a faculty question.**

**Consequences:** slide 3 stays at "WCAG 2.1 Level AA." **The Gem cites 2.1 AA criterion
numbers** — that keeps its findings legible against what the deck teaches. Do not chase
**WCAG 3.0**: still a working draft with a different conformance model, not a compliance
target, and nobody's remediation work is made obsolete by it. Regulations name a frozen
version deliberately — a moving target is unenforceable — so expect 2.1 to remain the cited
number for years. Moving to 2.2 would require new rulemaking.

**Deadline confirmed correct.** April 26, 2027 for public entities of 50,000+ population,
extended once by the DOJ interim final rule of April 20, 2026 (from the original April 24,
2026). Slide 3's "already extended once" badge is accurate.

---

## MULTILINGUAL — item 26 CLOSED, verified September 11, 2026

**Ally does handle multilingual content, in three distinct ways.** Item 26 was resolved in
August *by removal* on the grounds that the chain was unverified. It is now verified, and the
answer is more useful than the removal assumed. Sources are Anthology's own help pages.

### 1. Ally's audio is multilingual by detection — and this is the finding
> **"Ally detects the language of the original content and selects a matching language for
> the audio format file."**

A Spanish document gets Spanish audio. Automatically, in every Canvas course, with no setup
and no instructor action. **This belongs in the "already running" column** and the deck
currently says nothing about it.

### 2. But translate-then-speak does not chain — item 26's suspicion, confirmed
> **"If you want the original content in a different language, try the Translated Version
> format."**

Audio follows the **original** language, not the translated one. So an English document
**cannot** yield Spanish audio through Ally. Translation and audio remain two separate
alternative formats and they do not compose. **The August instinct was right; the reason is
now documented rather than guessed.**

### 3. RESOLVED at Rutgers — Translated Version is NOT enabled; Immersive Reader IS
**Settled September 11, 2026 by opening the actual dialog** in a live Rutgers Canvas course
(`rutgers.instructure.com`, Files → a PDF → Download alternative formats). This is the
authoritative answer documentation could not give.

**The Rutgers list, observed, for a born-digital PDF:**
> HTML · ePub · Electronic braille · **Audio (MP3)** · BeeLine Reader · **Immersive Reader**

**No Translated Version.** And this is conclusive, not a file-type artifact: Anthology lists
**PDF** among the file types Translated Version supports, so if it were enabled it would
appear here. **It is off at Rutgers** — consistent with Anthology's "disabled by default;
administrators can submit a support case."

**The Rutgers page's caption was a stock screenshot after all.** It listed "translated
version"; the live tenant does not have it. Good call not to cite it (3b) — that near-miss
would have put a false claim on a slide in front of the room most likely to test it.

### 3a. The better finding — the multilingual path exists, under a different name
**Immersive Reader is in the list, and it does both jobs.** From Anthology's own page:
> **"Translate content in real-time"** into **over 100 languages**, and
> **"Convert text-to-speech (both male and female voices)."**

With the caveat, also theirs: *"the languages available for the Immersive Reader differ from
the ones available for Ally translated versions."*

**So the answer to "can Rutgers students get this reading in another language?" is yes — via
Immersive Reader, not via Translated Version.** That is a correction to the deck's mental
model, and it is a *better* story: it is already on, it needs no support case, and it sits in
the "already running" column with Ally and ReadSpeaker.

**How it differs from the MP3, and this matters for how it gets taught:**
- **Real-time and in-browser**, not a downloadable artifact. The dialog itself says
  *"Internet required."* You cannot hand it to a student as a file.
- **Student-driven.** Faculty do nothing; the student opens it and sets their own language.
- **It may close the chain the MP3 cannot.** Ally's audio follows the source language only.
  Immersive Reader has translate *and* text-to-speech in one surface, so read-aloud in a
  translated language may be reachable there. **UNVERIFIED — Microsoft's documentation does
  not state whether Read Aloud speaks the translated text.** Test by hand before claiming it.
  If it holds, it is the only end-to-end multilingual audio path in the deck.

### 3b. Open problem the same screenshot created — slide 7's "tagged PDF"
**Tagged PDF and OCR'd PDF were both absent from the dialog.** Slide 7 currently says Ally
"offers an audio version of your files alongside **ePub, tagged PDF** and braille," and the
toolkit table says "Ally (scores, alternative formats, MP3, **PDF auto-tag**)."

**A faculty member who follows that sentence and opens this dialog will not find tagged PDF.**
The likely explanation is conditional offering — OCR'd PDF only for *scanned* PDFs, tagged PDF
for *non-PDF* sources — but that is inference, not verification.

**Check before delivery, two files, five minutes:** open the alternative-formats dialog on
(a) a **Word or PowerPoint** file and (b) a **scanned, image-only PDF**, and record what each
offers. Then either qualify slide 7's sentence or cut the formats that do not reliably appear.
**Promising a format the room cannot find is the fastest way to lose them.**

### 4. Ally already flags the 3.1.1 failure — and it is the cheapest win in the deck
Ally's checklist (now stated as **WCAG 2.2 AA**) includes, all rated **Minor**:
- *"The PDF does not have a language set"* / *"does not have the correct language set"*
- the same pair for **Word** documents and for **PowerPoint** presentations
- HTML: *"`<html>` element must have a lang attribute"* / *"must have a valid value"*
- and one 3.1.2-adjacent check: *"lang attribute must have a valid value"*

**Because they are Minor, they sit at the bottom of everyone's Ally list, unread.** But the
language setting is what Ally's own audio detection reads. So:

> **Set the document language → Ally's MP3 picks the right voice → every student's audio
> improves.** One setting, two clicks, and it propagates downstream through a tool that is
> already running.

**The cheapest multilingual fix is not a translation. It is one language setting.** That is a
slide line, it is free, and it threads the language topic onto the spine instead of bolting
it on.

### Where Notebook actually sits now
Notebook is **not** the missing link in the Ally chain — Ally's multilingual audio already
works for source-language content. Notebook does something different: it **generates a
discussion in the target language** from your sources.

**And its verify beat fails.** For English audio the instruction is "listen to the first thirty
seconds and fix one pronunciation." For a Spanish Audio Overview, **an instructor who does not
speak Spanish has no verification move at all.** Fidelity failure and translation failure
compound: you cannot hear a fabrication in a language you do not read. Disqualifying for
anything offered *as* the accessible version of a reading — *offer it, don't substitute it,
and don't claim you checked it.*

### Language access is not disability access — the distinction stays sharp
- WCAG 2.1 AA's language criteria are **3.1.1 Language of Page** and **3.1.2 Language of
  Parts.** Both are about **markup declaring the language** so assistive tech picks the right
  voice and phonetics. **Neither requires providing a translation of anything.**
- Providing content in another language is **language access** — a civil rights obligation, but
  **Title VI (national origin)**, not ADA Title II or Section 504. Different statute, different
  office on campus.
- **The risk for this room** is a faculty member concluding "I added a Spanish version, so I've
  done accessibility." They have not touched a single WCAG criterion.
- **The one real intersection is 3.1.2**, and slide 7 already names it: a quoted phrase in
  another language, unmarked, gets read with the wrong phonetics. *That* is the AA failure.

**So the compliance move is one attribute; the translation is pedagogy** — and the attribute
is the one Ally is already flagging and nobody is fixing.

---

## STANDING RULE — the tenant is the source of truth, not the vendor, September 11, 2026

**Rutgers has almost certainly not enabled everything Anthology ships.** Translated Version
proved it: documented, supported for PDF, and simply absent from the live dialog. Treat that
as the general case, not the exception.

> **Vendor documentation states the product's ceiling. The tenant states your floor.
> Only the floor is true for the room on September 18.**

This extends the entitlement discipline already governing the deck. That rule asked *does
Rutgers license this tool.* The new rule asks the harder question: **of the features inside a
tool Rutgers does license, which ones are switched on here?** Ally is configured per
institution — alternative formats can be toggled individually, and some ship off by default.

**The error runs in both directions, which is the part worth remembering:**
- **Absent though documented** — Translated Version. Would have been a false promise.
- **Present though barely documented** — **Immersive Reader and BeeLine Reader are both in
  the Rutgers dialog and neither appears anywhere in the deck.** The audit found a *missing
  capability*, not just a bad claim. Immersive Reader is the better multilingual answer.

### Audit of the deck's Ally claims against what is actually verified

**Verified on the live tenant** (screenshot, September 11, a born-digital PDF) — safe to say:
HTML · ePub · Electronic braille · **Audio (MP3)** · BeeLine Reader · **Immersive Reader**,
all student-downloadable with no instructor action.

**Safe — core engine, not per-tenant configurable:** accessibility scores and the score panel,
the instructor feedback tool, the course accessibility report, the checklist items (including
the language checks in section 4 above), and audio's source-language detection.

**UNVERIFIED — every one of these is a deck claim with no tenant evidence:**

| Claim | Where | Status |
|---|---|---|
| Ally offers **tagged PDF** | Slide 7 · toolkit table | **Absent from the dialog.** Check a Word/PowerPoint source. |
| Ally does **PDF auto-tag / OCR'd PDF** | Toolkit table · Segment 3 | **Two separate things — see the DETECT vs. REPAIR section below.** The *alternative format* was absent from the dialog; the *quick-fix* that rewrites the file is admin-gated and lives in the feedback panel. Check both. |
| Ally's **"Auto-generate description"** for images | Slide 6 image + Segment 2 step 3 | **Check whether `ally-score-panel.png` was shot in a Rutgers course or is stock.** Ally's AI alt-text generation is an admin-configurable feature — the exact shape of trap Translated Version just sprang. This one is load-bearing: Segment 2 tells the room to try it *first*. |

**Do not resolve these from help.anthology.com.** Open the dialogs. Three files — a Word
document, a scanned image-only PDF, and a Canvas page with an unlabeled image — answer all
three rows in under ten minutes.

**And add the two found formats to the deck** once checked: Immersive Reader belongs in
Segment 1 alongside the MP3 (it is the real multilingual answer, and it is already on), and
both belong in the "already running" column of the toolkit table.

---
## DETECT vs. REPAIR — the distinction faculty get wrong, September 11, 2026

Sharpens item 36's "Ally is a detector, not a repair shop." That is right in spirit and now
slightly too blunt. **Two different things both look like "Ally fixed it," and only one is.**

### 1. Alternative formats do NOT fix your file
The MP3, the ePub, the OCR'd PDF, the tagged PDF — these are **derivative copies generated for
students.** They do not touch the file in your course. **Your PDF stays broken, your Ally score
does not move, and the default every future student gets is still the broken original.**

Rutgers' own RADR page says this out loud: instructors should *"replace the original scanned
file with the OCRed version for a permanent fix."* **The OCR'd alternative format is not the
fix. Manually swapping it in is the fix.**

**This is the single most confusable thing about Ally** and the deck does not currently say
it. A faculty member who sees "OCR'd PDF" in the student download menu will reasonably
conclude the problem is handled. It is not.

### 2. PDF quick fixes DO change the file — four of them, and only four
From Anthology's PDF Remediation Options page. These write back:
> *"After making these fixes, Ally will save and upload a new version of the PDF into the
> course and **overwrite the old file** in the process."*

| Fix | How |
|---|---|
| **Auto-tag** an untagged PDF | Ally proposes a tag structure; you *"review the suggested tags from the side panel against the content in the PDF"* and **"select Approve all."** |
| **Missing title** | You type it |
| **Missing language** | You pick from a dropdown |
| **Scanned PDF OCR** | You preview, then apply |

**Two gates on all of it:** it is **PDF-only**, and *"when enabled by the Administrator,
instructors will see a new Generate Tags workflow."* **Admin enablement required** — so this
lands on the same verification list as Translated Version, and the empty dialog gives no
information either way (quick fixes live in the instructor feedback panel, not the student
download menu).

### 3. Everything else — you do the work
Alt text, headings, contrast, table headers, list formatting, link text, font size, captions.
**Ally tells you what is wrong and why it matters. You fix it.** That is the honest shape.

**So the refined line for the slide:** *Ally is a detector with exactly four repairs — all
PDF-only, all needing your approval, and only if your admin switched them on. Everything else
it finds, you fix.* More accurate than "not a repair shop," and it sets the expectation
correctly before the room goes looking for a button that is not there.

### The payoff — "Missing language" is one of the four, and that closes a loop
Section 4 of the multilingual note argued the cheapest win in the deck is setting the document
language. **It turns out Ally both flags it *and* offers a one-click dropdown to fix it in
place, on PDFs.** So the whole chain is demonstrable end to end:

> **Ally flags it (Minor, ignored at the bottom of the list) → fix it from the dropdown, in
> Ally, in seconds → the file in the course is genuinely updated → Ally's audio now detects
> the right language and picks the right voice → every student's MP3 improves.**

**This is the best live demo candidate in the deck.** It is fast, it is visible, it produces a
real file change rather than a derivative, it pays off the spine's "back to Ally" beat, and it
ties the language thread to the audio segment instead of leaving it an aside. **Verify the
quick-fix panel is enabled at Rutgers first** — if it is off, this demo does not exist.

---
## THE CONTAINER IS NOT THE SKILL — September 14, 2026

**Position for the deck: teach what you can do inside the chatbot. Treat every saved-automation
container as temporary.** Rick's call, and it is the right one.

### What is actually reported, and how much to trust it
Searched September 14, 2026. **All of this is secondary — vendor blogs, SEO posts, one
migration sales page. NONE of it is a primary announcement, and no date below belongs on a
slide without confirming it at the source.** Recording it here for direction only:
- **Custom GPT *creation*** reportedly restricted to Business/Enterprise/Edu workspaces as of
  September 2026.
- **OpenAI Workspace Agents** announced April 2026 as the successor; the visual **Agent
  Builder** reportedly deprecated June 2026 with shutdown scheduled November 30, 2026.
- **Gemini Gems** reportedly still free to all users — the more stable of the two.
- **`SKILL.md` "Agent Skills"** published by Anthropic as an open format, claimed supported
  across 30+ tools. The portable-instructions direction, whatever wins.

**The pattern is clear even though the particulars are not: the containers churn every few
months and the instructions inside them do not.**

### Why this barely costs us anything
**`wcag-review-instructions.txt` was already written as portable text.** It works pasted at the top of
an ordinary chat — the video outline already carried that as the fallback. **So the fallback
becomes the main path and the Gem becomes an optional convenience.** That is a reframe, not a
rewrite. The artifact survives its container, which is exactly the argument.

### And it is the stronger teaching position anyway
It matches the voice check — *"I don't tell faculty what to do. I want them to add to their
toolbox and to their experiences."*

- A faculty member who learns **to write and paste an instruction block** can carry it to any
  tool, including ones that do not exist yet.
- A faculty member who learns **the Gem Manager UI** has learned nothing transferable, and
  gets stranded when the button moves.
- **The deadline is April 26, 2027 — roughly three semesters out.** Faculty will be doing this
  work across all of them. A container deprecated mid-remediation is a real cost to someone
  who built a routine on it, and this room is being asked to build routines.

This adds a **temporal axis** to the discipline the deck already runs on. Entitlement
discipline asked *does Rutgers license it.* The tenant rule asked *is it switched on here.*
This asks **will it still exist when they act on it.**

### What to say, and what not to say
**Do not predict any product's death from the podium.** It is unverifiable, it dates the talk,
and being wrong about it costs more than staying quiet. Say the durable version:

> *These saved-assistant features come and go — the one I built this in may be renamed or
> replaced by the time you try it. So what I am actually showing you is the instructions. Those
> you can paste into whatever you are using.*

True regardless of what happens, ages well either way, and it teaches the transferable thing.

### OPEN DECISION — does the video still exist?
**The video's whole justification was that building a Gem is five minutes of stateful
clicking.** If the main path is "paste this text at the top of a chat," **that is a ten-second
live demo and needs no video.**

What survives and is still worth recording is **chapter 4 — running the instructions and
rejecting a finding on camera.** That beat is tool-agnostic, it is the deck's argument, and
nothing about the container churn touches it.

**DECIDED September 14 — re-cut, not cancelled.** `video-outline.md` rewritten as
**"Checking What an AI Tells You About Your Course."** Six minutes. Pasting the block is a
thirty-second step; the build-a-Gem walkthrough is now a clearly-skippable appendix that gets
cut outright if a NetID cannot save a Gem.

**The middle chapter grew a third move and it is the best thing in the rewrite:** confirm a
finding, reject a finding, **then name one it missed.** You built the probe document, so you
know the answers. Confirming alone teaches trust; confirming and rejecting teaches judgment;
adding the miss teaches what the session is actually about — **fluent output tells you nothing
about coverage, and silence is the failure nobody notices on their own.** Same argument as the
silent-notation slide, turned on the review tool itself.

### Housekeeping — DONE September 14
Both artifacts renamed away from the product now that the decision is settled:
`gem-instructions.txt` -> **`wcag-review-instructions.txt`**, and
`gem-video-outline.md` -> **`video-outline.md`**. Neither name now bets on a container.

---
## REVIEW NOTES — second pass, September 2, 2026

### SensusAccess — answered properly this time
**What it is, in one sentence:** a web form you upload a file to, which converts it and
emails the result back — audiobook (MP3/DAISY), EPUB, Mobi, or digital braille. It eats
the things nothing else will read: image-only PDFs, JPGs, PowerPoints.

**How it integrates with Canvas at Rutgers: it doesn't.** And that is the useful finding.

- SensusAccess **does** ship a Canvas LTI. Their own documentation describes *"SensusAccess
  Inside Canvas,"* configurable from within Canvas, appearing as a course-nav menu item,
  enabled or disabled per course by the instructor.
- **It is not on Rutgers' Canvas external-apps list.** Ally, ReadSpeaker, DesignPLUS,
  TidyUp and about seventy others are. SensusAccess is not.
- So Rutgers licenses the service but reaches it through **a web form on the Libraries
  site** — sign in with a Rutgers email — not through Canvas.

**Two consequences.** On the slide, say plainly that this one lives outside Canvas; that
contrast with ReadSpeaker is informative rather than confusing. And separately: **Rutgers
could turn the Canvas LTI on.** That is a concrete, cheap, high-value ask, and it is
exactly the kind of thing to carry to the AI Academic Working Group. **(That group is
not active as of September 17, 2026 — the slide 2 line promising to carry things there was
removed. Route is currently unclear; do not promise one from the podium.)**

### 12 · Handwriting, and the PDF standard question — verified
**Handwriting:** the honest line is that it produces a best-effort reading, and context
improves it. Do not promise accuracy on handwriting in this session.

**The new PDF standard is real: PDF/UA-2 (ISO 14289-2).** It is the accessibility standard
aligned with **PDF 2.0**, replacing PDF/UA-1 — which dates from 2012, was last revised in
2014, and is built on PDF 1.7. The relevant improvement for this deck: **Figure tags can
now contain sub-structures**, so a complex image or diagram can be described in parts
rather than as one undifferentiated blob.

**Rick's instinct was right: almost nobody has switched.** As of 2026 it is still being
promoted for adoption rather than widely implemented. And Rutgers' standard is
**WCAG 2.1 Level AA**, not PDF/UA — so this is a "coming, worth knowing about, do not plan
around it" note, not a workflow. One line at most, probably on slide 12.

### 13 · Can a chatbot convert a twenty-page PDF? — needs a real test
Rick's question, and his instinct about code is the right one. What can be said now:
- **Reading** twenty pages is not the constraint. Context windows are far past that.
- **Producing** a faithful twenty-page accessible conversion in one response is where it
  breaks — output length limits and drift partway through.
- **The reliable path is the one Rick named:** have the tool write and run code to do the
  conversion, rather than doing it in prose. Prior material in this series already makes
  this point about Copilot extracting figures from documents by writing the code itself.

**Do not put a claim on the slide until it has been tested on a real twenty-page scanned
chapter.** This is blocking item 1's last open question and it decides whether slide 13 is
a live demo, a recorded one, or a described workflow.

### General · Ally closes the loop as well as opening it
**"You can use Ally to see if you still have problems after a fix."** Ally is not only the
triage step — it is the check that the fix worked. That makes it bookend the spine rather
than sit in front of it, and it is a better answer to "how do I know I'm done?" than
anything currently in the deck. **Applied to slide 6.** Consider echoing it on 13 and 16.

---

## REVIEW NOTES — page-by-page pass, August 31, 2026

Rick's own notes from walking the deck, with what turned up against each. He flagged this
as **"a taste of the various issues"** — more coming, so leave this section open.

### 1 · Title — subhead doesn't match what was advertised
The registered title is **"AI-Assisted Digital Accessibility Workflows"**; the slide says
"AI-Assisted Accessibility Workflows." The word **Digital** is missing, and the subhead
should track the advertised one. Cheap fix, but it is the first thing a registrant checks.

### 2 · Who I Am — role is wrong; look at the other bios
The *title* matches the other decks ("Director of Emerging Technology, UOES"). What differs
is the **bio itself**. The prior treatment is a three-card history — *Early 1990s* (first
University websites; Center for Electronic Texts in the Humanities), *Decades Since*
(infrastructure, virtual worlds), *Today* (that early text work informs how I understand
AI's impact on knowledge and research) — closing on "a unique perspective on technology
adoption." This deck replaced all of that with Role / This series / The bias I'll admit to.
**Open question for Rick: port the three-card history, or fix the Role card's wording?**

### 3 · The Deadline — this is the non-negotiable part of accessibility
Say that plainly. The prior version of this slide was titled **"Accessibility Is Not
Optional"** and this deck softened it into arithmetic. Restore the stance; keep the numbers.

### 5 · The Shape — is this the same loop?
Rick's own loop: **ALLY identify → Canvas check the existing description and try
auto-generate → GenAI with the prompt framework → refine → back into Canvas.**
The deck's spine is Source → AI pass → Verify → Place it, which is compatible but
**does not make Ally the entry point.** Ally is built into Canvas, it is the go-to tool,
and it is where you go first — that belongs *inside* the loop, not on a slide before it.

### 6 · Ally — the delivery shape is two demos, not one
"I do a walk through of the tool where it works well, and then an example where it has a
challenge." The rewritten slide 6 supports the first half. It needs the second: one real
case where Ally struggles. Pick it when the sandbox course is confirmed (item 19).

### 7 · SensusAccess — needs a link, and there isn't one
**Checked August 31, 2026: the Rutgers KB page describes SensusAccess but publishes no
link to a conversion form and no instructions for starting one.** Its only outbound links
are the policy article and the accessibility purchasing form. So there is currently no way
for the room to act on it.

**Recommendation: pull SensusAccess from slide 7 unless Rick tests it and finds the route.**
Naming a tool nobody can reach is worse than not naming it. Ask IT Accessibility directly.

### 7b · New for this fall — Ally can now auto-tag PDFs
**Found August 31, 2026 in Ally's 2026 release notes.** Instructors can **Auto-tag untagged
PDFs** from inside Instructor Feedback — a *Generate Tags* workflow that produces a tag
structure the instructor **reviews and approves before it is applied.**

Two reasons this matters a lot:
1. **It may be the missing Segment 3 tool** (see note 13). Segment 3 currently describes a
   conversion workflow with no product attached.
2. **It is the deck's register, shipped as a feature** — a generous starting point plus a
   mandatory human review step. That is the whole argument of this session, built into a
   tool the University already licenses.

**Verify first: it is administrator-enabled.** Confirm Rutgers has it switched on before
demoing it. Also confirms the fall Canvas fixes to keyboard navigation on the Alternative
Formats menu.

### 9 · AI Vision — this is where LLMs actually shine
Two additions, both Rick's:
- **They see the image *and* the page.** Ally and PowerPoint describe an image in isolation;
  Gemini or Copilot can read the surrounding page and propose alt text that fits the
  context. That is the concrete reason to leave the built-in tool and go to an LLM, and the
  deck does not currently say it.
- **Students can do this themselves.** A student can screenshot the page into their own
  chatbot and have it explained in context. **This is the student-agency moment item 17 has
  been missing** — and it reframes accessibility as something students do for themselves.

### 10 · Alt text worked example — the chart slide needs an actual chart
"The same chart three ways" describes a chart in prose. It needs to *show* one. Combine
with item 7's fix: use real material, not the invented enrollment numbers.

### 11 · Vision failures — tie to our examples, and add the harder problem
- Tie the failure cases to the deck's own examples rather than generic ones.
- **Ask the room** whether they have vision failures to share.
- **New and stronger — generated images that look real.** Tools like Gemini Notebook can
  produce realistic images that are hallucinated but look like they belong. Rick's example:
  **art generated for a slide, based on the work of real artists in New Brunswick, NJ.**
  It looks right and it is an insult to those artists — because it uses their style without
  using, crediting, or paying for their work.

  This is a different failure from "the AI misread the chart." It is not an accuracy
  problem, it is an **integrity** problem, and it is the strongest ethical beat available
  in the deck. It also pairs with the alt-text argument: a description that sounds
  plausible and a picture that looks plausible fail the same way.

### 13 · The round trip — the workflow has no tool
"Not sure what tool would make that pattern work. It's the workflow without the example
tool." Correct, and it is blocking item 1's last open segment. **Ally's new PDF auto-tag
(note 7b) is the leading candidate.**

---

## BLOCKING — the deck cannot be delivered without these

### 1. Pick the tools. (Slides 7, 9, 12 — all three segments)
Each segment describes a workflow with no product attached.

- **Text-to-speech** — **no longer the empty segment.** Full decision matrix, organized
  by faculty need / effort / entitlement tier, is in **`tts-decision-matrix.md`**. Summary:

  **Lane A — the reading itself, as audio.** Faithful, verbatim, accommodation-grade.
  1. **Ally → Alternative Formats → Audio (MP3).** Already generated for every file in
     every Canvas course, student-initiated, zero faculty labor, entitlement settled
     (item 15). Also ePub, tagged PDF, electronic braille, BeeLine Reader, translated version.
  2. **SensusAccess** — Rutgers-provided, all faculty/staff/students/alumni, converts
     inaccessible source files to MP3/DAISY. Covers Segment 3 as well. See item 2.
  3. **Device-level read-aloud** — Edge Read Aloud, macOS/iOS Spoken Content, Word's
     Immersive Reader. No entitlement question at all; it runs on the student's machine.
  4. **The browser TTS demo already in hand** — `rianders.github.io/kittenttsinweb/`,
     already built and demonstrated in this series. No account, no upload,
     nothing leaves the laptop. Best available fallback if a live demo dies.

  **Lane B — a companion built from the reading. Gemini Notebook's Audio Overview.**
  This is the faculty-facing audio tool and it is a genuinely good one: free to everyone
  at Rutgers, 80+ languages, a short format as well as the long one, and **steerable** —
  you can tell it what to emphasize, which is the hook for learning objectives (item 21).
  It produces something students will actually listen to, which a verbatim synthetic
  reading of a forty-minute article is not.

  **What it is not** is a read-aloud of the source. It generates a two-host discussion
  *about* the material, so its failure mode is unfaithful summary, not mispronunciation.
  That difference is the teaching point, not a reason to drop it:

  | | Lane A · the reading | Lane B · the companion |
  |---|---|---|
  | Tool | Ally MP3, SensusAccess | Gemini Notebook Audio Overview |
  | Who starts it | the student | you |
  | What you verify | proper nouns, acronyms, numbers, hyphens | fidelity — did it get my material right, did it flatten the argument |

  **The trap, and it belongs on a slide.** Lane B must never be what a student gets
  *instead of* Lane A. Handing a disabled student a chatty summary while everyone else
  gets the source is not equivalent access — it is the same failure as slide 6's
  auto-generate trap and slide 10's middle tier: it sounds accessible and isn't. Said
  out loud, this is one of the strongest moments available in the session.

  **Skip** ElevenLabs, Speechify, Murf, NaturalReader-as-product: no entitlement, data
  classification exposure, and naming them makes the deck sound like it is selling something.
  **Also note:** Kurzweil 3000 and Read&Write are real at Rutgers but RADR routes them
  through accommodations. Worth one line — "some of your students already have this" —
  not a workflow.
  **Slides 7 and 8 were redrafted on this structure August 28, 2026.** Slide 7 is now
  "The Audio Is Already Being Made" — the three lanes, the lane-2 trap as a DropIn, and a
  verify beat that splits by lane (pronunciation vs fidelity). Slide 8 keeps the four
  audible failures and adds **notation as an accent card**, whose argument is that the
  other four announce themselves and this one doesn't. Both checks pass.
- **AI vision / alt text** — **largely resolved by item 15.** Ally (in Canvas, universal
  entitlement) plus PowerPoint's built-in alt-text generator plus one GenAI tool for the
  context-aware pass. That toolkit holds up.
- **PDF conversion** — check whether the library's accessible-copy service covers the
  common cases before building a workflow around a tool. Still open.

**Test each one on a real scanned Rutgers course document before committing.** The
standing rule applies: if the room cannot legally use it on Monday, it is a showcase,
not a demo. Use the Accessibility Sandbox (item 19) as the test bed.

### 2. Verify what faculty are actually entitled to. (Slides 7, 9, 12, 17)
Nothing in this deck currently claims an entitlement, which is why it is safe as
drafted. The moment you name a tool you inherit the obligation to be right.

**Partially resolved — it.rutgers.edu/ai read August 28, 2026.**

*Free to students, faculty, and staff:*
- **Gemini Notebook** (page confirms the NotebookLM rename) — upload documents and
  webpages to a personalized notebook
- **Google Gemini** — writing, research, planning
- **Microsoft Copilot Chat** — summarizing, text generation, Q&A

*Paid subscription:*
- **ChatGPT Edu** — from $10/month; custom GPTs; complies with university data
  protection standards
- **Google AI Pro** — $20/month, works with the ScarletApps account
- **Microsoft 365 Copilot (Apps)** — $20/month, faculty/staff with Rutgers Connect

*Bundled:* Zoom AI Companion, Adobe Express AI, LinkedIn Learning coaching, Grammarly
for Education. Every entry points at the data classification chart.

**Consequences for tool selection:**
- **Claude is not on the page.** Do not name it as faculty-available.
- **No TTS, audio, or PDF-conversion tool is named at all.**
- **Ally is not on that page either** — because it is a Canvas feature, not an AI tool.
  **Confirmed elsewhere, August 28, 2026:** Rutgers enterprise license, integrated by
  Rutgers IT Accessibility, present in all Rutgers courses. Cite Canvas/IT Accessibility,
  not the AI hub. See item 15.
- **SensusAccess is Rutgers-provided and was missed on the first pass.** Listed on
  it.rutgers.edu/digital-accessibility, available to **students, faculty, staff, and
  alumni** — self-service conversion of image-only PDFs, JPGs, and PowerPoints into
  **MP3 and DAISY audiobooks**, EPUB, and digital braille. Tier-1 entitlement covering
  Segments 1 and 3 at once, and plausibly the "library accessible-copy service" this
  worklist keeps referring to. Access route and turnaround time still unverified.

**Still open:** whether the page has login-gated detail; direct confirmation from OIT;
whether the library's accessible-copy service covers the PDF cases.

### 3. ~~Confirm the April 26, 2027 deadline and WCAG 2.1 wording.~~ (Slide 3) — DONE
**Verified August 28, 2026** against academicaffairs.rutgers.edu/digital-accessibility.
**April 26, 2027**, standard **WCAG 2.1 Level AA**, under the DOJ's April 2024 update to
ADA Title II. Confirms the "already extended once" line — original date April 24, 2026,
moved by a DOJ Interim Final Rule.

**Fix applied:** slide 3 now reads "WCAG 2.1 Level AA" rather than bare "WCAG 2.1".

### 4. Write `demos.md`. (whole deck) — STARTED September 16, 2026
**`demos.md` now exists and Demo 1 is fully specified**: three passes in Segment 1 —
Qwen3-TTS succeeding, the same voice failing on notation, then the browser model failing
in the same place. Pastes are in `prompts-to-paste.txt`, staging and fallback in
`demos.md`. **Demos 2 and 3 are still unwritten**, and the recorded fallback for Demo 1
has not been made yet. Original note follows.

### 4. Write `demos.md`. (whole deck)
Minimum: one demo per segment, each with a fallback, plus the decision on which are
recorded. **No longer starting from zero — see item 19.** Five recorded
Kaltura demos already exist rather than live ones, which is the safer pattern and already
has infrastructure behind it (My Kaltura Media is in the Canvas sandbox nav).

Depends on items 1 and 19.

### 5. Build the Zoom polls in the web portal. (Slides 2, and wherever polls land)
Polls must exist in the portal before the meeting starts. The deck has **zero** `<Poll>`
blocks; the component is defined but unused, and slide 2 uses a chat prompt instead.

**The review reframes this.** The interactivity that worked was not polls — it was
*structured comparison* (item 20). Decide whether this session wants polls at all, or whether the
participation gap is better closed by making the room evaluate output. A natural poll if
you do want one: opening multi-select, "what have you already tried to make accessible?"

---

## IMPORTANT — do before the run-through

### 6. Contrast-check the deck itself. (whole deck) — DONE September 16, 2026
**Computed, not eyeballed** — every treatment is a Tailwind value in the source, so the
ratios are exact. **The worry in the original note was misdirected.** The amber `Note`
(6.84:1) and teal `Interact` (9.88:1) both pass comfortably; so do all eight tag pills
(4.83–14.68:1), the CodeBlock (10.18:1), Link (5.17:1), Lede (7.56:1) and the title
slide's draft badge (5.43:1).

**Four real failures, all fixed. Every one was in an emphasis treatment** — the deck was
weakest exactly where it was shouting:

| What | Was | Now | Fix |
|---|---|---|---|
| `SectionCard` accent body | 4.41:1 | **5.91:1** | `bg-red-600` → `bg-red-700` |
| `SectionCard` accent title | 3.95:1 | **5.30:1** | same |
| Red panel eyebrow labels (slides 3, 14) | 3.34:1 | **5.30:1** | `text-red-200` → `text-red-100` |
| `DraftChip` (10px, every slide) | 3.74:1 | **5.47:1** | `bg-teal-600` → `bg-teal-700` |
| `Bullet` glyph | 3.76:1 | **4.83:1** | `text-red-500` → `text-red-600` |

The accent card is the notation card — the segment's punchline — so it mattered.

**Still not done: the greyscale `&print` check.** Ratios are luminance maths and catch
everything luminance can catch; they say nothing about two colours of equal brightness
being indistinguishable, which is exactly the enrollment chart's problem below. Walk
`&print` before the run-through.

### Original note, kept:

This is the accessibility session; the deck will be inspected. The amber-on-amber `Note`
and teal-on-teal `Interact` treatments ported from August have never been checked at
WCAG 2.1 AA. Confirm the `&print` view is readable in greyscale. Being caught with an
inaccessible accessibility deck is the worst available outcome.

### 7. Replace the invented chart numbers. (now slide 9) — CHART SUPPLIED September 16, 2026
`enrollment-chart.png` is in the folder and on the slide. **Three things about it:**

**1. It fixed a bug that would have been ruinous in this room.** The slide's fourth alt
text read *"400, 395, 405, 240, 290, 340, 380"* — seven values for an eight-year range,
four of them not matching anything. Nobody could see it while the figure was imaginary.
Now corrected to the figure's real values: **400, 400, 400, 240, 275, 310, 345, 380.**
The third card's prose version was already accurate and is unchanged. **If the PNG is
regenerated, the fourth card and the `img` alt text both have to move with it.**

**2. The numbers are still invented, and that is now a decision rather than an oversight.**
The original objection stands on its own terms — real material every time, and fabricated
numbers are off-voice here. But an alt-text *exercise* is the one place the objection is
weakest: you need a figure whose content you control completely so the good/bad/better
versions can be exact, and a real Rutgers enrollment chart would drag a data question
into a session that has enough of those. Worth one sentence from the podium if it comes
up — "these numbers are made up, the alt text is the point" — rather than a fix.

**3. The chart encodes meaning in colour alone, and it is the accessibility deck.**
2022 is red because it is the low point, 2026 is green because it is the recovery, and
nothing but hue says so. That is WCAG 1.4.1. It is mitigated — every bar is labelled with
its value, so the *data* survives colour blindness — but the emphasis does not. The `img`
alt text names the colours out loud, which is why it is acceptable as it stands.

It is also a genuine specimen of a real problem sitting in the middle of a slide about
figures, and there is an argument for naming it from the podium: *"and notice what I did
here — I made the point with colour and nothing else."* **Slide 9 has no room for it** —
it is already a figure, four cards, a CodeBlock and a Note at 5 minutes. Options: one
spoken line with no slide change, or move it to the vision-failures slide. **DONE September 16, 2026 — it is on the slide**, as an amber aside in the left column
under the figure, where that column was empty and it costs no height.

The measured numbers, because the lesson is better than "check your contrast":
`#2b5c8f` / `#d9534f` / `#4682b4` / `#2e8b57`. **Every bar clears 1.4.11 against white
(3.96–6.93:1)** — so this is *not* a contrast failure in the ordinary sense, and saying
that out loud is half the point. The failure is bar-against-bar: **red vs green is
1.07:1**, the same luminance in two different hues. Simulated deuteranopia puts them at
`#978b4b` and `#7f775a`, 1.30:1 apart. The two blues are 1.69:1 and encode "before" vs
"recovery" — the same mistake a second time.

So: remove hue — greyscale print, the `&print` view, a tired projector, red-green colour
blindness — and **every bar stays visible while the point disappears.** The value labels
save the data; nothing saves the emphasis. The line on the slide is *label what matters,
don't just colour it.*

### Original note, kept:
The good/bad/better example uses a fabricated enrollment chart (400 → 240 in 2022 → 380
by 2026). **The instinct worth keeping is real material every time** — a real reading, a real
Canvas page, a real figure. Fabricated numbers are off-voice here.

**Now solvable:** use something from the Accessibility Sandbox (item 19), or use
`ppt-alt-text-pane.png` from the assets in hand (item 18), which carries a genuine
human-written alt text — *"An AI Image of a chicken dog and a 3 legged dog in a field"* —
that is a perfect real specimen of the middle tier: populated, passes a checker, tells a
student almost nothing.

### 26. ~~Fix the multilingual claim on slide 7.~~ — DONE
**Resolved August 28, 2026 by removal.** The slide 7 redraft drops the sentence entirely
rather than softening it; the new slide makes no audio-language claim at all. Original
problem, kept for the record — it said *"the same routine that produces an English track
produces the other languages your students read in,"* and **nothing verified supports that.** In Ally,
**translated version** and **audio** are two separate alternative formats — translated
text, and audio generated from the source. Whether you can get *audio in the translated
language* is unconfirmed, and SensusAccess may be the real multilingual-audio answer.

This is the same species of error as the accessibility overclaim already fixed in
`aa2d0f7`. Either verify the chain (translate → then audio) or soften the sentence before
this ships. The room for this session is the room most likely to test the claim.

### 8. Add the QR code. (Slide 1)
Slide 1 has the layout but no image. The pattern that works here is a
**go.rutgers.edu shortlink plus a QR**, captioned as the link to the deck. Mint a shortlink, generate `qr-digital-accessibility-20260918.png` in this folder.
Image `src` paths resolve against the **repo root**:
`src="20260918-digital_accessibility/qr-...png"`. Give it real alt text — the shortlink
URL itself, not "QR code".

### 9. Set up the shared questions doc. (Slide 16)
Slide 16 references "the shared doc" and links nothing. Create it and add the link.

### 10. Reconcile the time budget. (whole deck) — PARTIALLY ADDRESSED September 16, 2026
**The merge is done** — old slides 7 and 8 are one slide, Segment 1 is 7 minutes, and the
content block is now **56 of 60**. That is the entire slack and the demos are still
unplanned, so it is already spoken for. `time-budget.md` has **not** been re-derived
against the merged deck and still describes 19 slides — do that before the run-through.
The next cut, if one is needed, is Segment 2 at 14 minutes. Items 16, 17, and 20 all still add time on top.
The older text below still applies:

`time-budget.md` is a first pass. Segment tags total 56 of 60 minutes and the August
demos each ran long. Re-derive once the running order and demos are final. **Note that
items 15, 16, 17, and 20 all add time** — this deck is more likely to need cuts than
padding after this round.

### 11. Pre-flight the deck for unfinished slides.
The failure modes to hunt for, all of them easy to ship by accident: a bare title slide
with no body, byte-identical duplicate slides, an empty slide, a notes-to-self slide left
visible to the audience, and a slide promising an example that has no example.
**One view, and it is the audience's** — every one of these is available here. Walk every slide in `&print` before
shipping and confirm nothing is a placeholder.

---

## FROM THE REVIEW

### 15. ~~Put Ally first.~~ (Slide 6 · plus slides 4 and 16) — DONE
**Built August 28, 2026.** New **slide 6, "Start With Ally"** sits between the spine (5)
and Segment 1 — beat zero, the triage step that decides which document the four beats
get run on. Compile and render checks pass.

What went in:
- Two-column slide: the Ally score panel screenshot on the left with a full written-out
  alt text, three cards on the right — what the score is for, the *"Auto-generate
  description"* trap, and the decorative option Ally gets right.
- The trap card is the accent card on purpose. It is the **same failure as the middle
  tier on slide 10** ("passes a checker, still useless"). Say that connection out loud;
  it is the moment the room understands why a green score is not the goal.
- Caption uses the real filename in the screenshot — `unnamed (3).png` — because the
  images that score worst are the ones nobody named. Free, true, and it lands.
- Closing DropIn: *"The most common mistake in this work is not doing it badly. It is
  doing it thoroughly, to the file nobody opens."*
- **Slide 4** now leads its "Today covers" column with finding what's broken via Ally.
- **Slide 16's** fourth work-session track is renamed **"Audit First · Ally"** and now
  says to open Ally rather than vaguely "list what's inaccessible".

**Cost: 4 minutes, and it consumed all the slack.** The content block is now 60 of 60.
See item 10 and `time-budget.md` — the TTS merge is no longer a contingency.

~~**Still open on this item:** slide 6 asserts Ally is in every Canvas course.~~
**CONFIRMED August 28, 2026.** Ally runs on a **Rutgers enterprise license**, integrated
into Canvas by Rutgers IT Accessibility, and was added to Canvas "to provide the same set
of services and support in **all Rutgers courses**" (canvas.rutgers.edu/external-apps/ally).
Instructors do nothing to enable it; the alternative formats are generated for them.

This is why Ally is the safe anchor: it is not an AI tool faculty have to *adopt*, it is a
Canvas feature the University already licensed and switched on. No adoption step, no data
classification conversation, no question about which kind of account you have. It is the
one tool in this deck that can be named from the podium with no caveat attached.

### 16. Restore the named prompt framework. (Slide 10)
The framework worth restoring: **Role / Task / Context / Objective / Format** — five
named parts a faculty member can write on a sticky note. Here it is one unnamed prose block. Name the parts
and keep the worked example underneath. Naming things is the house style — the four
beats on slide 5 work for exactly this reason.

### 17. Add the student-perspective moment. (Near slide 14 or 15)
The warmest, most distinctive moment in the earlier material, and there is no
equivalent here. It asked
what advice you would give a student who wants to prompt *"Make this image or document
accessible to me"* — and what makes that output trustworthy or not. It reframes
accessibility from a compliance chore into something students do for themselves.

This is also the fix for the voice drift: **this deck currently talks to faculty about
their files rather than about their students.** Every workflow here
ends at "place it in Canvas," which is a destination, not a person.

### 18. Bring the graphics over. (Slides 6, 10, and 16)
**Partly done — slide 6 carries the first image this deck has ever had.** Slide 10's
centrepiece still describes a chart in prose. Assets extracted from the source `.pptx`:

| Asset | What it shows | Use |
|---|---|---|
| `ally-score-panel.png` | Ally: 19% score, "This image is missing a description", *Auto-generate description*, *Indicate image is decorative* | **DONE — in slide 6.** |
| `ppt-alt-text-pane.png` | PowerPoint Alt Text pane with real alt text in it, *Generate alt text for me*, *Mark as decorative* toggle | **Take — next.** Slide 10 (item 7) and the decorative-alt Note. |
| `gemini-gem-manager.png` | Gem manager with a saved "Inclusive AI for Accessibility of Images" Gem | **Maybe.** Supports item 16, but shows a PRO account, "2.5 Pro", and the "WVAG 2.2" typo. Re-shoot rather than reuse. |
| Canvas sandbox screenshots | Barthes reading page; Modules view | **Maybe** — better re-shot current, see item 19. |
| `gemini-empty-chat.png` | Empty Gemini prompt box, 2.5 Pro | **Skip.** Stale and carries no information. |
| TIIP promo banners ×5 | "Upcoming GenAI sessions", dated to August | **Skip.** |
| Rutgers wordmark | Official logo | **Skip** — the CSS `RutgersLogo` component is fine. |
| Existing QR | Points at older material | **Skip** — mint a new one, item 8. |

**Two constraints when they land in the deck:**
- Every `<img>` needs real alt text. On this deck the screenshots are an *opportunity* —
  model good alt text on your own UI screenshots and say that you did.
- `src` resolves against the **repo root**, not this folder.

### 19. Reuse the Accessibility Sandbox course. (Demos, and item 7)
The existing demos were all shot in a Canvas course called **Accessibility Sandbox**
(`rutgers.instructure.com/courses/375349`, also `316933`) containing real material —
including a Roland Barthes *Death of the Author* PDF used for the scanned-text demo.

Confirm the course still exists and you still have access. If it does, it solves the
demo environment, the real-material problem on slide 10, and gives Segment 3 a genuine
scanned PDF to convert on camera. Five demos are already recorded to Kaltura
(entry IDs `1_pwxj9ozt`, `1_guvw8uyl`, `1_43ws9hvr`, `1_avx3g1bp`, `1_fcdwnrev`) —
check whether any are still accurate enough to reuse rather than re-record.

### 20. Add a compare-the-tools moment. (Work session, slide 16)
The debrief that worked made the room do the evaluating: *how did the output differ across
Ally, PowerPoint, and the GenAI you chose? Did you try more than one?* That is more
participatory than anything currently in this deck, and it is the natural close for the
"Show one thing" beat of the work session.

Right now the room hears one voice for ~54 minutes before it does anything.

### 21. Make learning objectives visible again. (Slides 9, 10, 16)
The organizing idea worth restoring — "align image descriptions with your course and
specific objectives" — carried the agenda, had its own demo, and was step 2 of the
hands-on activity. Here it survives as one bracketed line inside a code block and one verify
question. It is the move that makes this a *teaching* workshop rather than a tools
workshop. Promote it.

### 22. Reconcile the notation promise. (Slide 4) — PARTLY DONE
**August 28, 2026:** slide 8's notation card now names November 6 explicitly and in the
deck's own voice, which is the acknowledgment this item asked for. What remains is
whether **slide 4** should also say it, and the harder half — November 6 actually
delivering. `20261106-beyond_alt_text/` is no longer empty: it now holds
`notation-inventory.md` (the content seed) and `worklist.md` (the plan).

**Notation has been promised on this topic before and not delivered** — advertised in an
abstract, led with in an agenda, and left as a blank slide. An outline for it exists
(Canvas, MathJax, LaTeX, Ally) and was never built.

Some of the September 18 room may already have heard that promise. Telling them
"come back November 6 for notation" would be the second time. Either acknowledge it
directly on slide 4 — which is more in your voice anyway — or be certain November 6
delivers. `20261106-beyond_alt_text/` is currently empty.

### 23. Reconcile the Gems timeline. (Item 16, and anywhere Gems are mentioned)
An existing demo saves a prompt as a Gem, but this worklist records Gems arriving for
**ScarletApps on August 17, 2026**, and the screenshot in hand shows a **PRO** account.
If that demo ran on a personal or paid account, then September 18 is the first time
you can say *"in your Rutgers account"* — which is a stronger claim and worth making
explicitly. Confirm before saying it.

---

## WORTH DOING

### 12. Decide the slide 2 chat moment. (Slide 2)
"What material have you been avoiding?" is a good opener but it competes with an opening
poll if you add one. Pick one.

### 13. Consider a screen-reader moment. (Slide 10 or 11)
November 6 owns live screen-reader demonstrations and this deck deliberately does not do
them. But thirty seconds of hearing a screen reader hit `chart.png` would make slide 10
land much harder, and it doesn't trespass on November 6's territory.

### 14. Write `presenter-notes.md`.
One view and it is public, so all delivery notes — run of show, demo steps, fallbacks,
poll scripts — belong in a `presenter-notes.md` that is never rendered. Not started.

### 24. Consider teaching POUR. (Framing, near slide 3)
Worth restoring: define the standard before applying it — WCAG's **P**erceivable, **O**perable,
**U**nderstandable, **R**obust, plus the Rutgers policy KB article. This deck asserts
"WCAG 2.1 Level AA" on slide 3 and never says what it means.

Cheap version: one line on slide 3. Expensive version: a slide. Given the time pressure
in item 10, probably the line — but the room being able to name the four principles is
worth something on the session about the standard.

### 25. Consider the dropped alt-text rules. (Slide 9 or 10)
Five rules worth listing: meaningful alt text, null alt for decorative, complex images,
**descriptive image links** (alt describes the destination, not the image), and
**logical placement** (images near the relevant text). The last two are absent here and
both are common, cheap, everyday-case wins — squarely in this session's scope.

---

## Settled — don't relitigate

- **Scope boundary** (slide 4): everyday cases today, specialist notation November 6.
  This is what keeps the two sessions from collapsing into each other. See item 22 for
  the one complication.
- **The spine** (slide 5): Source → AI pass → Verify → Place it. Re-run in each segment
  and paid off on slide 14. **Prior material on this topic had no through-line at
  all and did not reach its workflow slide until two-thirds of the way in** — the spine is
  this deck's biggest structural advantage and it stays.
- **The verify beat.** The earlier material has no verification step anywhere; it teaches
  prompting and tool choice and never says what to check. That absence is the single strongest
  argument for this deck's structure.
- **The limits slide** (14) stays even under time pressure. Cut a segment example
  instead — that slide is why the room trusts the rest.
- **Slide 3 is the long form** of a point this series has made briefly before. Keep the
  through-line visible.
- **Single-presenter voice.** Co-presented material tends to read institutional — "Our
  Objectives for Today", "Defining our Standards for Evaluation" — because slides get
  assigned rather than written in one voice. This deck's voice is single-presenter and is
  the right one. Items 17, 20, and 21 restore substance that was missing; they should not
  restore that register.

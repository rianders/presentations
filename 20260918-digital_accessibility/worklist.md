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
exactly the kind of thing to carry to the AI Academic Working Group.

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

### 6. Contrast-check the deck itself. (whole deck)
This is the accessibility session; the deck will be inspected. The amber-on-amber `Note`
and teal-on-teal `Interact` treatments ported from August have never been checked at
WCAG 2.1 AA. Confirm the `&print` view is readable in greyscale. Being caught with an
inaccessible accessibility deck is the worst available outcome.

### 7. Replace the invented chart numbers. (Slide 10)
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

### 10. Reconcile the time budget. (whole deck) — URGENT AFTER ITEM 15
`time-budget.md` was re-derived August 28, 2026 and the content block is now **60 of 60
with zero slack.** Merging slides 7 and 8 (text-to-speech) returns 4 minutes and should
be decided in advance rather than live. Items 16, 17, and 20 all still add time on top.
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

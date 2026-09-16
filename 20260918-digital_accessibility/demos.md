# Demos — AI-Assisted Digital Accessibility Workflows

**September 18, 2026 · 11:00 am – 12:30 pm · Zoom**

The rule this series runs on: **if the room cannot legally use it on Monday, it is a
showcase, not a demo.** A showcase gets recorded, kept short, and labelled out loud.
Every entry below needs a prep checklist and a fallback that can be reached in about
ten seconds, because the August session's demos each ran long and one died.

Started September 16, 2026. **Demo 1 is specified. Demos 2 and 3 are not.**

---

## Demo 1 · Three passes — Qwen3-TTS, then your own browser model

**Segment 1 · Text-to-Speech · after the verification list, before the notation card**
**Budget: 2.5–3 minutes.** Segment 1 goes 7 → 10, and the content block 56 → 59 of 60.
That is three of the four minutes the slide merge just bought. Spend it knowingly —
and see "the economy" below if you want it back under 2.

- Beat 1 and 2: `huggingface.co/spaces/Qwen/Qwen3-TTS` (T4 · showcase only)
- Beat 3: `rianders.github.io/kittenttsinweb/` (T3 · local, ours, row 7)

### What it is for

The slide asserts four audible failures and a silent fifth. Right now the room takes
all five on faith. This demo makes them hear the fifth — twice, in two tools that have
nothing in common except the thing that breaks.

1. **Paragraph one sounds excellent.** State of the art, and it really is good. That is
   the "where this technology is going" beat. Let it land. Do not talk over it.
2. **Paragraph two sounds exactly as excellent** — same voice, same confidence, same
   fluency — **and it is wrong.** It mangles a name, flattens a date range, and reads
   `x² + y²` as "x two plus y two" without a flicker of hesitation.
3. **The same notation, in the browser model.** Rougher voice, obviously a smaller
   model, runs on the laptop with no account and nothing leaving the machine — **and it
   fails in precisely the same place.**

### Why beat 3 is the one that closes the argument

Without it, the room has an easy out: *that was one tool having a bad day, a better one
will fix it.* Beat 3 removes the out. A polished cloud model and a small local model,
built by different people for different purposes, break identically on notation —
**so notation is not a quality tier you can buy your way out of. It is structural.**

That is the justification for November 6 being a separate session rather than a longer
card, and this demo is the only place in the deck where the room gets *evidence* for it
instead of an assertion.

**The line to say after beat 3:** *the failure doesn't sound like failure — and paying
more doesn't fix it.*

### It also fixes the entitlement problem

Beat 3 means the segment does not end on a tool nobody can use. You show the T4
showcase, then immediately put a T3 thing in their hands that is free, private, needs no
account, and is already yours. **The room leaves holding the usable one.** Order matters
here — do not run the browser model first.

### Paste one — the success pass

> Every student in this course receives the same reading, in the same week, in a format
> they can actually use. Some read it on a screen, some listen to it on the walk in, and
> some do both. None of that requires a separate version, a special request, or a
> conversation with anyone about why they need it.

Ordinary prose, no traps. It should sound very good. That is the entire job.

### Paste two — the failure pass

> Following the DOJ's April 2024 update to ADA Title II, Rutgers must meet WCAG 2.1
> Level AA by April 26, 2027. See Csikszentmihalyi, pp. 114–17, and the 2024–25 pilot.
> The identity x² + y² = r² appears throughout, as does H₂SO₄. As Bourdieu put it, it
> is a question of *la distinction*.

One paste, one generation, and it hits every failure on the list:

| What to listen for | What is in the text |
|---|---|
| Names and terms | Csikszentmihalyi, Bourdieu |
| Acronyms and numbers | DOJ, ADA Title II, WCAG 2.1 Level AA |
| Dates, ranges, hyphenation | April 26, 2027 · pp. 114–17 · 2024–25 |
| Language switches | *la distinction* |
| **Notation — the silent one** | **x² + y² = r² · H₂SO₄** |

**Every word of this is deck content.** No course material, no student work, no licensed
reading goes into a third-party Space — the Limits slide says "check where your content
is going" out loud, and this demo must not contradict a bullet the room is about to see.

### Paste three — the same notation, locally

At `rianders.github.io/kittenttsinweb/`, paste **only the notation sentence**:

> The identity x² + y² = r² appears throughout, as does H₂SO₄.

One sentence, not the whole paragraph. The comparison is about *where it breaks*, not
about voice quality, and fifteen seconds is enough to make the point. Resist the urge to
run the full paragraph — that is how this demo turns into four minutes.

Say what it is while it loads: runs in the browser, no account, nothing leaves the
laptop, and it is the fallback in this deck's own matrix for material that cannot go to
a cloud tool at all.

### The economy, if you need the time back

The three beats are 2.5–3 minutes. To get under 2: **cut paste one.** Open on the
failure paragraph in Qwen3, then go straight to the browser model. You lose the "listen
to how good this has got" beat and keep the entire structural argument.

Only do that if the time is genuinely gone — beat 1 is the one Rick asked for, and a
room that has not heard the tool succeed is less impressed that it failed.

### Framing — non-negotiable, say it before you paste

This is **T4 · Outside** in `tts-decision-matrix.md`: not on `it.rutgers.edu/ai`, no
Rutgers entitlement, no data agreement. Say so plainly, in one sentence, *before* the
first paste:

> *This isn't a tool I'm telling you to use — it isn't ours and your course material
> shouldn't go in it. It's the clearest way I know to show you what to listen for.*

Without that sentence the room writes the name down as a recommendation, and the deck
has spent fourteen slides earning the right not to do that.

### Prep checklist

- [ ] **Warm both tabs before the session starts.** ZeroGPU Spaces sleep, and the browser
      model has a first-load download. Run one throwaway generation in each at 10:45 so
      the room never watches a cold start.
- [ ] Two tabs open and arranged in advance. Switching tabs mid-demo is the fumble.
- [ ] All three pastes in `prompts-to-paste.txt` — do not type live.
- [ ] **Same voice for beats 1 and 2.** Changing voice between them destroys the whole
      comparison.
- [ ] Zoom audio shared correctly — **share sound**, not just screen. Test it.
- [ ] Volume check on the actual laptop that will present, and check the browser model is
      not quieter than the cloud one. Fumbling the volume between beats 2 and 3 costs the
      comparison.
- [ ] Confirm the voice/language picker and licence terms on the Space itself. **None of
      this was verified as of September 16, 2026** — see the row 11 note in the matrix.

### Fallback · ten seconds

**Record all three beats in advance and have the clip open in a third tab.** This is not
optional. The Space queues, sleeps, and can be down; the session is on Zoom, where a dead
demo costs more than the demo was worth.

If a live beat stalls: stop, say *"it's queuing — here's the one I recorded,"* and play
the clip. Do not wait, do not reload, do not narrate the spinner.

**Second cloud voice, if Qwen3 is the thing that is down:** Supertonic-3
(`huggingface.co/spaces/Supertone/supertonic-3`, row 12, also T4, also a showcase). The
argument survives the substitution intact, because the argument is that the notation
fails *either way* — and a second cloud tool failing identically makes it stronger.
**Verify it fails on `x² + y² = r²` the same way before relying on it**, and do not
describe it as multilingual: nothing about its language support has been confirmed.

**The beats degrade independently, which is the good news.** If Qwen3 is down, beat 3
still runs locally and still demonstrates the notation failure — you lose the "paying
more doesn't fix it" comparison but keep the point. If the network is gone entirely, the
browser model is the only thing in this deck that still works. Say that out loud if it
happens; it is an argument for the tool.

---

## Demo 2 · Segment 2 · Vision / Alt Text — NOT PLANNED

Needs: one image, one prompt, one visibly bad first pass, one good second pass.

`ppt-alt-text-pane.png` is already in this folder and carries a real human-written alt
text — *"An AI Image of a chicken dog and a 3 legged dog in a field"* — which is a
genuine specimen of the middle tier: populated, passes a checker, tells a student almost
nothing. That is a demo, not a slide, and it is sitting right here unused.

Open question: live tool or recorded. Depends on which tool, which is a T1/T2 decision.

## Demo 3 · Segment 3 · Scanned PDF conversion — NOT PLANNED

The Accessibility Sandbox Canvas course (`375349`, `316933`) has real material and five
demos already recorded to Kaltura. **Start there rather than from nothing.**

Ally OCR on a genuinely bad scan is the obvious candidate — it closes the loop the spine
promises, Ally → source → pass → verify → Canvas → back to Ally, and Ally itself calls
OCR "not a permanent fix," which is an honest note to end a segment on.

---

## Still open across all three

- Which demos are live and which are recorded. The August session argues for recorded.
- Total demo time against a 58-of-60 content block. There is not room for three live demos.
- Where the recordings live, and whether they are shared with the deck afterwards.

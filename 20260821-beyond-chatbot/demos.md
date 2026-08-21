# Demo Plan — Beyond the Chatbot, Aug 21 2026

Nine demos are currently implied by the deck. That is too many for 60 minutes with one
person hosting, and every live demo on Zoom is a risk you are taking in front of a
recording that gets clipped afterward.

This ranks them, says which must be live, and says which should be pre-recorded.

**The rule that decides most of these:** if a demo uses a tool the room cannot legally
use on Monday, it is a *showcase*, not a *demo* — and showcases should be recorded, short,
and clearly labeled as "here is where this goes."

---

## The nine

| # | Slide | Demo | Verdict |
|---|---|---|---|
| 1 | 7 · Free vs. Paid | The Software Portal wall | **Live · 30 s** |
| 2 | 9 · Canvas Round Trip | Export → unzip → work → re-zip → import | **THE demo** |
| 3 | 10 · One Folder | Same folder, swap the engine | Recorded · 60 s |
| 4 | 11 · Gemini Notebook | Live notebook + citation trace | **Live** |
| 5 | 12 · Gems vs. Notebook | Same syllabus, both tools, side by side | **Live** |
| 6 | 13 · Agents | Codex on the course folder — same session as #2 | Recorded |
| 7 | 14 · Vibe Coding | Canvas page → interactive activity | **Live** |
| 8 | 14 · Vibe Coding | Path 2 across a whole course folder | Fold into #2 |
| 9 | 15 · Local AI | Handy speech-to-text + browser TTS | **Live · 90 s** |

---

## Must be live (4)

### 1 · The Software Portal wall — 30 seconds
Load the ChatGPT Edu subscribe page and let the error render. Nothing sells "what a tool
can do and what you're allowed to do are different questions" like the room watching you
get refused. Zero risk: if it fails to load, you have a screenshot.

**Prep:** screenshot as backup.

### 4 · Gemini Notebook + citation trace — 3 min
Build the notebook *before* the session with a real syllabus and two readings. Live, ask
three questions a student would ask and **click a citation through to the source passage**.
The citation trace is the demo — not the answer, the traceability.

**Prep:** notebook pre-built and tested. Never build one live.

### 5 · Gems vs. Notebook — 3 min
Same syllabus, both tools, side by side. Ask the Gem something outside its sources and let
it decline. That refusal is the most persuasive thing you can show about grounding.

**Prep:** both built ahead. Rehearse the out-of-scope question — if it *answers* instead of
declining, you need a different question.

### 9 · Local AI — 90 seconds
Handy dictating a paragraph, browser TTS reading a passage. Both ran well on Mar 6. Fast,
tactile, and it lands the "nothing left the room" point better than any slide.

**Prep:** test on the presenting machine. Check microphone permissions in the OS *before*
Zoom grabs the mic — this is the usual failure.

---

## Should be recorded (2)

### 3 · The engine swap — 60 seconds
Same folder, same prompt, local model then licensed one. Compelling, but it is slow in
real time and the payoff is a comparison, which edits far better than it performs.

### 6 · Agents — 2 min recorded, then discuss live

**Codex in the ChatGPT app, working across the course folder.** This is the same session as
demo #2 — record it once and use it on both slides. Slide 9 shows *what it produced*;
slide 13 shows *what it was doing and where it went wrong*.

An agent doing real multi-step work is minutes of watching a spinner, so play it at speed
and spend the live time on **how you caught the mistake** — takeaway #06, and the more
valuable half anyway.

**Include a failure.** An invented citation that you catch is worth more than three clean
runs.

> **The honest problem with this demo.** Codex needs ChatGPT Edu, which most of the room
> cannot buy. By the rule above that makes it a showcase rather than a demo — which is fine,
> as long as you say so and pair it with what they *can* use. **Open todo: confirm what
> agent-style capability ScarletApps Gemini offers today and show that too.** Without it,
> this segment is a tour of a tool nobody in the room can touch, immediately after a slide
> explaining they cannot buy it.

---

## The one that matters most

### 2 · The Canvas round trip — 8 min, live, with recorded inserts

This is the demo people came for and the one they will screenshot. It is also the only one
where a mistake damages **someone else's live course**, so it gets the most preparation.

**Structure it as live-recorded-live:**

| Part | How | Why |
|---|---|---|
| Export → download → unzip | **Live** | Fast, visual, and the step nobody has taken |
| Work on the folder | **Recorded** | The actual processing is slow and boring in real time |
| Re-zip → import to sandbox → verify | **Live** | This is the part they most need to see done correctly |

**Do step 3 in Gemini, not only Codex.** Most of the room cannot use Codex on Monday. If
you show both, show Gemini *first* and Codex second as the upgrade — otherwise the takeaway
is "I need a subscription I can't get."

**Non-negotiables:**
- Work on a **copy** of a real course. Say out loud that it is a copy.
- Import into a **sandbox**, never a live course, and say why while you do it.
- Have the exported `.imscc` already downloaded as a fallback if the export is slow.
- Run the entire loop yourself at least once before Friday. End to end. No exceptions.

---

## Prep checklist

- [ ] Pre-export a real course; keep both the original `.imscc` and an unzipped working copy
- [ ] Sandbox course created and confirmed you can import into it
- [ ] Gemini Notebook pre-built from a real syllabus + 2 readings
- [ ] Gem pre-built, with a tested out-of-scope question that reliably declines
- [ ] Rubric prompt written for round-trip step 3 — **this is the artifact people will ask for**
- [ ] Record ONE Codex session on the course folder — it serves demo #2 and demo #6. Include a failure
- [ ] Record: engine swap (60 s)
- [ ] Confirm and rehearse the ScarletApps-licensed agent equivalent, so slide 13 has a path for the room
- [ ] Screenshot backups for every live demo
- [ ] Test Handy + browser TTS on the presenting machine, with Zoom running
- [ ] Decide screen-share layout: deck in `?notes` on one screen, demo on the shared one

## Failure plan

Every live demo needs a fallback that takes under 10 seconds to reach. A screenshot in a
folder on the desktop counts. Announce the fallback rather than troubleshooting on air —
"that's not loading, here's what it looks like" costs you nothing; two minutes of silent
clicking costs you the room.

# Video Tutorial — Building and Using the WCAG Review Gem

Outline drafted September 11, 2026. Companion to `gem-instructions.txt`.
Target length **8–9 minutes**, chaptered. Linked from the Tools slide; not played in session.

**Why this is a video and not a live demo:** building a Gem is five minutes of stateful
clicking in a UI that may have moved since rehearsal — the worst possible live demo in a
session with zero schedule slack. Recorded, it costs the session nothing and faculty can
pause it. Session time goes to the Gem's *output* instead.

---

## Do these before you hit record

1. **Confirm a NetID account can save a Gem.** If it turns out to be a paid tier, the whole
   video changes shape — see the fallback at the end. Do not discover this on camera.
2. **Build and test the Gem against all five probes** in `gem-instructions.txt`. Record a
   tool you have already watched fail, not one you are meeting for the first time.
3. **Build the demo document.** Use the five-probe test document — it is already designed
   with known answers, so every finding in the video is one you can verify on screen.
   **Do not use real course material**, and do not use the Woodward scan (copyrighted,
   local testing only).
4. **Clean the browser.** New profile or a fresh window. No bookmarks bar, no other tabs,
   no student names, no email in the corner. You are publishing this.
5. **Set a legible zoom.** Browser at 125–150%. What is readable on your monitor is not
   readable in a video thumbnail on someone's laptop.

---

## Chapters

### 0 · Cold open — the problem (0:00–0:35)
**On screen:** the demo document's bar chart. Alt text reads *"a bar chart showing data."*
Then an automated checker passing it — green, no flag.
**Say:** the alt text is there, so the checker is satisfied. A student who cannot see the
chart still has no idea what it shows. **This is the gap.** Present and useless passes every
automatic test there is.
**Don't:** open with "hi, in this video I'm going to show you how to." Start on the problem.

### 1 · What this is, and what it is not (0:35–1:20)
**On screen:** Ally's panel on one side, the Gem on the other.
**Say:** Ally already finds what a machine can decide — missing alt text, missing headings,
contrast, missing document language. It does that automatically, in every Canvas course,
without being asked, and **it is still the place to start.** This Gem does not repeat any of
that. It looks at the part that needs judgment: whether the alt text that *is* there actually
does its job.
**Say plainly:** this does not replace Ally, and it cannot tell you whether you are compliant.

### 2 · Build it (1:20–4:20) — the actual tutorial
**On screen:** the whole path, narrated as you go.
- Where Gems live in the Gemini interface, and how to get to **New Gem**
- **Name it:** `WCAG 2.1 AA Course Material Review`. Say why 2.1 and not 2.2 in one sentence
  — 2.1 Level AA is the standard the federal rule adopts and the 2027 deadline measures
  against. One sentence. Do not teach the whole version question here.
- **Paste the instructions.** Show the block going in. Do not read it aloud — say what the
  three rules do: never claims you passed, never guesses, always asks for the page rather
  than the image.
- **Attach the knowledge file** — your own labelled good and bad alt text. Say why: it teaches
  the Gem what "meaningful" looks like in *your* discipline, which generic instructions
  cannot do.
- **Save, and show where it lives afterward** so they can find it again Monday.

**Narrate positions, not gestures.** "In the left sidebar, Gems, then New Gem" — not "click
here." Someone is listening to this without watching it.

### 3 · Run it (4:20–6:00)
**On screen:** the demo document going in, findings coming back.
**Say:** read the first finding aloud in full — where, criterion, why, what to check. Point out
that every finding names a location you can go look at. Note it stopped at ten.
**Show the bar chart finding land.** That is the cold open paying off.

### 4 · Reject one — the most important minute in the video (6:00–7:00)
**On screen:** a finding you disagree with. Say why. Dismiss it.
**Say:** it flagged the decorative divider as missing a description. It is decorative; the
right answer is to mark it decorative, not describe it. **The tool does not know what the
image is for. You do.**
**This chapter is not optional.** A tutorial in which the tool is right about everything
teaches faculty to paste output. Show it being wrong, on camera, and reject it out loud —
that is the habit worth transmitting, and it is the deck's whole argument in forty seconds.

### 5 · When not to use it (7:00–7:45)
- **Notation.** Equations, chemical structures, music. It will answer fluently and may be
  subtly wrong, and nothing in the output gives that away. Separate problem, separate session.
- **Conformance.** It cannot tell you that you meet AA, and it is instructed never to say so.
  If anything ever tells you your course is compliant, that is the finding.
- **A clean document.** If it returns ten problems on a document you know is fine, it is
  manufacturing findings. Trust that signal.

### 6 · Close (7:45–8:15)
**On screen:** the Tools slide link and where the instruction text lives.
**Say:** the instructions are a text file you can paste, change, and make your own. Nothing
here is fixed — if it flags things you do not care about, edit the instructions.
**Close in his own register:** this is one more thing in the toolbox, not a requirement.

---

## The video must be accessible, and this one is watched for it

A tutorial about accessibility that is not accessible is a self-inflicted wound in front of
the one audience guaranteed to notice.

- **Real captions**, reviewed by hand. Auto-captions on "WCAG," "Ally," "alt text" and
  "Anthology" will be wrong, and wrong captions in this video are the story.
- **A transcript posted alongside it**, not only captions.
- **Narrate every screen action** — the outline above builds this in. Anyone should be able
  to follow with the video minimized.
- **No information conveyed by color alone** when pointing at findings.
- **Post it somewhere with a real player**, not an autoplaying embed.

---

## Fallback if Gems are not available on a NetID account

Do not scrap it. Re-cut chapters 2 and 6:
- **Chapter 2 becomes "paste it as a prompt."** The same instruction text works pasted at the
  top of an ordinary chat. Say the honest difference: it works, but it does not persist, so
  you paste it every time and it is easy to drift.
- **Chapter 6 adds the caveat** about which accounts have Gems.

Everything else in the video — the gap, the findings, the rejection — holds either way,
because none of it depends on where the instructions are stored.

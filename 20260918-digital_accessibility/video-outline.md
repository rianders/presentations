# Video Outline — Checking What an AI Tells You About Your Course

Rewritten September 14, 2026 on the container-neutral shape. Companion to
`wcag-review-instructions.txt`.

**Core video: about 6 minutes.** Plus a clearly-skippable closing chapter for anyone who
wants to save the instructions rather than paste them.

**What changed and why.** The first version was a build-a-Gem tutorial, justified by the fact
that building a Gem is five minutes of stateful clicking. That justification is gone: the main
path is now pasting a block of text, which is a ten-second step, not a film.

**So the subject changed.** This is no longer a video about a product. It is a video about
**checking output you did not write** — which is the deck's actual argument, is true in any
tool, and does not go stale when a menu moves. The product walkthrough became an appendix.

**Title it away from the product.** Nothing in the title, filename, or thumbnail should name a
tool. It will outlive the tool.

---

## Do these before you hit record

1. **Test the instructions against all five probes** in `wcag-review-instructions.txt`, and
   **write down what it found and what it missed.** Chapter 3 depends on knowing the answers
   before the camera is on.
2. **Build the demo document** from the probe list. Known answers, no real course material,
   not the Woodward scan.
3. **Clean the browser.** Fresh window or profile. No bookmarks bar, no other tabs, no student
   names, no email in the corner.
4. **Zoom to 125–150%.** What reads on your monitor does not read on a laptop.
5. **Decide the appendix before recording, not after.** If a NetID account cannot save a Gem,
   cut chapter 6 entirely rather than showing something the room cannot do.

---

## Chapters

### 0 · The problem (0:00–0:35)
**On screen:** the demo document's bar chart, alt text reading *"a bar chart showing data."*
Then an automated checker passing it — green, no flag.
**Say:** the alt text is there, so the checker is satisfied. A student who cannot see the chart
still has no idea what it shows. **Present and useless passes every automatic test there is.**
**Don't:** open with "hi, in this video." Start on the problem.

### 1 · What this is, and what it is not (0:35–1:20)
**On screen:** Ally's panel beside the chat window.
**Say:** Ally already finds what a machine can decide — missing alt text, missing headings,
contrast, missing document language — automatically, in every Canvas course, and **it is still
where you start.** This does not repeat any of that. It looks at the part needing judgment:
whether the alt text that *is* there does its job.
**Say plainly:** this does not replace Ally, and it cannot tell you whether you are compliant.

### 2 · Paste the block (1:20–1:50)
**On screen:** open a chat, paste the instruction text, attach the document. That is the whole
setup.
**Say:** this is a text file. Paste it at the top of a conversation in whatever you are using.
**And say the durable thing here, once:** these saved-assistant features come and go — the one
I built this in may be renamed or replaced by the time you try it. **What I am actually showing
you is the instructions. Those you can paste anywhere.**
**Don't** predict any product's death, name a deprecation date, or explain the format wars.
One sentence, then move.

### 3 · Confirm, reject, and notice what is missing (1:50–4:30) — the film
This is the video. Everything before it is setup; everything after is optional. **Three moves,
in this order, because the order is the lesson.**

**a. Confirm one (≈40s).** Read one finding in full — where, criterion, why, what to check. Go
to the spot. Agree with it out loud. Establish that the thing works.

**b. Reject one (≈50s).** A finding you disagree with — it flagged the decorative divider as
missing a description. Say why it is wrong: it is decorative, and the right answer is to mark
it decorative, not describe it. **The tool does not know what the image is for. You do.**

**c. Name what it missed (≈50s).** You built the document, so you know the answers. Show a
probe it did not catch — the unmarked phrase in another language is the likeliest.
**Say:** it found nine things and was right about most of them, and it said nothing at all
about this one. **A tool that is right about what it says can still be silent about what
matters, and silence is the failure you will never notice on your own.** That is why the
document you check against is one you already understand.

**Why all three:** confirming alone teaches trust. Confirming and rejecting teaches judgment.
Adding the miss teaches the thing this whole session is about — **fluent output tells you
nothing about coverage.** Forty seconds of extra footage, and it is the difference between a
tool demo and a method.

### 4 · When not to use it (4:30–5:15)
- **Notation.** Equations, chemical structures, music. It will answer fluently and may be
  subtly wrong, with nothing in the output to give it away. Separate problem, separate session.
- **Conformance.** It cannot tell you that you meet AA, and it is instructed never to say so.
  **If anything ever tells you your course is compliant, that is the finding.**
- **A clean document.** Ten problems in a document you know is fine means it is manufacturing
  findings. Trust that signal.

### 5 · Close (5:15–5:45)
**On screen:** where the instruction text lives.
**Say:** the instructions are a text file — paste it, change it, make it yours. If it flags
things you do not care about, edit the instructions. Nothing here is fixed.
**Close in his own register:** one more thing in the toolbox, not a requirement.

### 6 · APPENDIX, skippable — saving it so you stop retyping (5:45–6:45)
**Mark it clearly as optional, on screen and in the chapter title.** Anyone who stops at
chapter 5 has the whole method.
**On screen:** creating a Gem, naming it `WCAG 2.1 AA Course Material Review`, pasting the same
block, attaching your own good-and-bad alt text as a knowledge file, saving, and showing where
it lives afterward.
**Say:** same text, stored instead of pasted. Convenience only.
**Say once, without alarm:** if this feature has changed or is not in your account, chapter 2
still works. **Cut this chapter entirely if a NetID account cannot do it.**

---

## The video must be accessible, and this one gets watched for it

A tutorial about accessibility that is not accessible is a self-inflicted wound in front of the
one audience guaranteed to notice.

- **Hand-reviewed captions.** Auto-captions will mangle "WCAG," "Ally," "alt text," and
  "Anthology" — and wrong captions in *this* video become the story.
- **A posted transcript**, not only captions.
- **Narrate by position, not gesture** — "in the left sidebar" rather than "click here."
  Someone should be able to follow it with the video minimized.
- **No finding pointed at by color alone.**
- **A real player**, not an autoplaying embed.

---

## What this outline is no longer betting on

Nothing in chapters 0 through 5 names a product, depends on a saved assistant existing, or
breaks when an interface is redesigned. **If every container in this space is replaced next
year, the only chapter that needs re-shooting is the appendix** — and the deck's argument,
which is the part worth filming, is untouched.

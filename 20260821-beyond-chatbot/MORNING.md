# Morning pass — Aug 21, present at 11:00

`worklist.md` has everything. This is only what changes the session.

## 1 · Verify (30 min) — these are the ones that fail in public

- [ ] **Gem share link** — open from a second account / logged-out profile
- [ ] **Notebook share link** — same. Sharing is the difficult path here; if it
      does not open, say so live and use it as the example
- [ ] **Questions doc** — sharing set to Rutgers → **Editor**, not private-to-you
- [ ] **The round trip, end to end** — export → unzip → Codex → re-zip → import to a
      NEW course. If this has not been run, slide 11 promises something untested
- [ ] **Can faculty create a new Canvas course themselves?** If it is a request with
      lead time, the slide 11 finale needs a different ending
- [ ] **Gem out-of-scope refusal** — if it answers instead of declining, pick a
      different question. That refusal is the most persuasive moment in the deck

## 2 · The through-line (this is the real work)

Landed on: **your materials, and the context you put around them.**

Slide 3 states it. What still needs doing is *saying it again* at each place it is
already true, so it reads as one idea rather than a phrase on one slide:

- [ ] **8 · Materials as Context** — the constrained prompt IS the context. Name it
- [ ] **9 · Notebook** — your syllabus is the materials; grounding is the context
- [ ] **10 · Gems** — the Gem carries the context so you don't retype it
- [ ] **11 · Canvas** — ASU is what happens when someone else sets your context
- [ ] **12 · Your Machine** — your materials, portable, so the context stays yours
- [ ] **15 · Your Rubric** — your criteria are context. This is the sharpest instance
- [ ] **18 · Takeaways** — close on it

One sentence per slide, in your own words. Do not add boxes.

## 3 · Last edits before you present

- [ ] Fix "Director of Emerging Technolog**ies**" vs "Technolog**y**" — 3 slides, pick one
- [ ] Strip DRAFT chrome — 5 places: SlideShell chip, title badge, print header, nav
      footer, index.html badge (`grep -n "Draft\|DRAFT"`)
- [ ] `node .claude/skills/deck/check.js` — must pass
- [ ] Merge branch to `main` and push. **Pages serves from main; the deck is not live
      until then**

## Known gotchas

- Segment tags in `SlideShell` still show the OLD numbering (Segment 2 appears twice,
  3b/3c out of order). Audience-visible. Renumber or drop the numbers entirely.
- Header time budget in the .jsx is stale — order changed, Local AI now 2 min.
- 16 slides still hand-roll card grids instead of using `SectionCard`. Cosmetic.
- Deck runs long: content ~70+ min against a 60 min block. You chose to go long;
  decide live what gets compressed.

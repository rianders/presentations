# Canvas's own reading tools on a MathML page · November 3, 2026

**Page:** the unpublished sandbox test page "TEST: Astra MathML revision, algebra p.13"
(30 MathML equations with LaTeX annotations, `menclose` circles, boxes and strikes, colour
as inline styles, a visible "Equation in words" under each equation).

## Immersive Reader (the button at the top right of every Canvas page)

Checked by looking, in Chrome, signed in as Rick:

- **The math displays as math.** Fractions, exponents and the boxed factor render properly,
  and the plain-language readings sit under them.
- **Each equation is one unit.** Clicking a fraction selects the whole equation (dotted
  box), not single symbols, so the reader treats it as a piece of math.
- **Circles are clipped.** `menclose notation="circle"` around `2x + 3` and `x + 1` shows
  only the left and top of the oval; the right and bottom are cut off. **Correction,
  November 5:** I first reported these as strike-throughs, from a view at the smallest text
  size. Rick's recording at normal size shows clipped ovals. They look unfinished, not
  cancelled. Plain Canvas draws the same ovals whole.

Checked from Rick's OBS recording, November 5 (`~/Movies/2026-11-05 09-55-41.mov`, not in
the repo), by comparing the reader's highlight with the audio, plus Rick's listen:

- **It speaks the math, correctly.** Rick listened, November 5: "It was read correctly."
  The first fraction is lit for about 10 seconds of continuous speech (138–149 s), and
  `(3x−5)(x+1)` for about 5.5 seconds (163.5–169 s). Neither is skipped. Only these two
  equations were checked, and the exact words weren't transcribed.
- **Each equation is heard twice.** After each lit equation, the reader goes straight on to
  "Equation in words", which says the same thing in Astra's words.
- **The layout notes take time.** From the title it takes over 2 minutes to reach the first
  equation, because "Position and marks" is read aloud too.

The text-size and spacing changes made to fit more on screen are Immersive Reader
preferences in this browser only; they don't affect the page.

## Still to check

- ReadSpeaker, listed on the sandbox's Tools and Resources page: whether it reads MathML.
- NVDA + MathCAT on the same page (clip 3's ending), including whether every equation is
  heard twice: once from the MathML, once from the "Equation in words" line.

## For the skill

If Immersive Reader matters to a course, `menclose` circles draw incompletely. Describing the
circle in the "Position and marks" text (which the skill already asks for) keeps the
meaning. Worth deciding whether the skill should prefer a `box` notation, which drew whole
here, and whether the visible reading should stay, since the equation is heard twice.

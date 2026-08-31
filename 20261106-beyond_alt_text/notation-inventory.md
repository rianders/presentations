# Notation That Is Read Differently Than It Is Spoken

**Seed material for November 6, 2026 — *Beyond Alt Text*.**
Started August 28, 2026, out of the September 18 text-to-speech work.

The session abstract already states the thesis: notation "that experts read differently
than they'd ever say aloud." This file is the inventory behind that sentence, organized
by **why** it breaks, because the failure type determines the fix.

---

## Why this is categorically worse than the other TTS failures

Ordinary synthetic-speech errors are **audibly wrong**. A mispronounced author name still
sounds like a name being mangled; the listener knows something went by.

Notation fails **silently**. `x²+y²` read as *"x two plus y two"* is fluent, confident,
and false. Nothing signals an error. The student who cannot see the page has no way to
know they just received different mathematics than everyone else.

**That is the line for this session.** Not "AI gets notation wrong" — AI gets notation
wrong *in a way that sounds right*.

---

## The four failure types

### 1 · One glyph becomes many words — and which words depends on context
`∫` is "the integral of," but `∫ₐᵇ` is "the integral from a to b of." `f'(x)` is "f prime
of x." `≜` is "is defined to be." The expansion is not lookup; it is parsing.

### 2 · Two dimensions flattened into one
Notation laid out in space has to be linearized, and linearization is **ambiguous without
scope markers**. "a over b plus c" is two different fractions. Correct speech needs
*"begin fraction … end fraction"* — which no faculty member writes and no naive TTS adds.
Reading order often isn't left-to-right at all: summation bounds, matrix entries,
knitting charts (which alternate direction row by row), Labanotation (bottom to top).

### 3 · The same glyph means different things in different fields
`(a, b)` is an ordered pair, an open interval, a gcd, or an inner product. `|x|` is
absolute value, cardinality, determinant, or norm. **You cannot pronounce it correctly
without knowing the discipline and often the specific course.**

This is the strongest argument in the series for why faculty write their own descriptions
rather than a central office doing it. Only the instructor knows which one it is.

### 4 · Meaning carried by things that have no sound
Italic vs roman (gene vs protein). Small caps (Leipzig glossing). Subscript vs baseline.
Whitespace (Python). Brackets as an editorial *claim* (Leiden). Parentheses as negation
(accounting). Color (choropleths, syntax highlighting). A screen reader says "open paren"
where the discipline says "negative."

---

## The inventory

### Mathematics
Fractions, radicals, integrals, limits, sub/superscripts, matrices, piecewise functions.
The canonical case, and the one with the most existing machinery (MathML, MathJax, LaTeX,
the Canvas equation editor).

### Music
Staff notation is a 2D pitch × time grid with **no spoken form at all.** Also: figured
bass, chord symbols, guitar tablature, dynamics (`ff` = "fortissimo"), and Roman-numeral
analysis — `V7/V` is *"five-seven of five"* or *"the dominant of the dominant,"* depending
on whose classroom you are in.

### Logic & Philosophy
`∀x∃y`, `⊨` ("models") vs `⊢` ("proves" / "turnstile"), modal `□` and `◇` ("necessarily,"
"possibly"), λ-abstraction, sequent calculus. A field where the notation is routinely read
aloud as English sentences in class — so the spoken form genuinely exists and is simply
absent from the file.

### Chemistry
`H₂SO₄` is *either* "sulfuric acid" or "H two S O four" depending on pedagogical intent.
**Structural formulas are 2D graphs with no linear reading** — the spoken equivalent is
the IUPAC name, which is a completely separate encoding system. Also `→` ("yields"),
`⇌` ("in equilibrium with"), wedge/dash stereochemistry, `¹⁴C` ("carbon fourteen"), SMILES.

### Physics
Bra-ket `⟨ψ|φ⟩`, `ℏ` ("h-bar"), vector bold vs arrow, units (`m·s⁻²`), and **Einstein
summation — where a repeated index means "sum over this" and the summation sign is not
written at all.** Meaning carried by absence.

### Statistics
`x̄` ("x bar"), `p̂` ("p hat"), `σ` vs `s`, and `~` meaning "is distributed as" —
`X ~ N(μ, σ²)` is *"X is distributed normally with mean mu and variance sigma squared."*

### Computer science
`!=`, `->`, `=>`, `::`, `&&`, `i++`, sigils, Big-O. **Regular expressions are close to
unspeakable.** In Python, indentation *is* syntax — pure layout, zero sound.

### Linguistics
IPA (you must say the symbol's *name* — `ʃ` is "esh"), phonological rules
(`A → B / C __ D` = "A becomes B in the environment between C and D"), syntax trees,
Leipzig glossing in small caps, and the **asterisk that marks ungrammaticality** — `*sentence`
is not "star sentence," it is a judgment.

### Genetics & molecular biology
Sequence data, `47,XY,+21` (trisomy 21), HGVS variants (`c.76A>T`, `p.Arg97Gly`), and the
**italic/roman distinction that separates a gene from its protein** — invisible to every
screen reader.

### Medicine & pharmacy
Dosage notation, sig codes, `mg/kg`. **And the discipline that proves the stakes:** the
Joint Commission and ISMP maintain a formal *"Do Not Use"* list because certain notation
is misread — `U` read as zero, trailing zeros read as tenfold doses, `MS` ambiguous
between morphine and magnesium sulfate. A field that banned its own notation for being
misread is the single best argument this session has.

### Law
Bluebook citation (`410 U.S. 113`), `§`, `¶`, pincites, `id.`, `supra`. Dense, positional,
and abbreviation-heavy in ways TTS mangles completely.

### Classics, paleography & textual scholarship
The **Leiden Conventions** — square brackets mean text restored by an editor, an underdot
means an uncertain reading. The brackets are the scholarly argument. "Open bracket" is not
a translation of that; it is the destruction of it.

### Accounting & finance
`(1,234)` is **negative** 1,234. Read as "open paren" it is not just unclear, it is sign-flipped.

### Economics
`E[·]`, `Δ`, hats for estimators, time subscripts, elasticity notation.

### Engineering
Circuit schematics (2D, unspeakable), phasors (`∠30°`), tolerances (`±`), transform notation.

### Astronomy
`G2V` spectral classes, RA/Dec coordinates (`12h 30m 49s`), magnitudes.

### Dance
**Labanotation and Benesh** — vertical staves read bottom to top, encoding movement in
space and time. There is no spoken form, because the thing being notated was never speech.

### And the informal ones worth naming for warmth
Chess (`Nf3`, `O-O`, `!?`), knitting charts (`k2tog`, boustrophedon reading order),
baseball scorekeeping (`6-4-3`), sheet-music tab, recipe notation, sports diagrams.
Cheap, funny, and they make the point land in a room with no equations in it.

---

## What the fix is, by group

| Group | Examples | The fix |
|---|---|---|
| **A · Substitutable** | Basic math, chemical formulas, stats symbols | A standard spoken form exists. MathML/LaTeX, or a pronunciation dictionary. Machinery already in Canvas. |
| **B · Linearizable with scope markers** | Fractions, matrices, code, IUPAC names | Can be flattened *if* structure is announced. This is where AI genuinely helps. |
| **C · Not linearizable** | Music staves, circuit diagrams, structural formulas, syntax trees, Labanotation | **Audio cannot carry it.** The answer is a different artifact — a described walkthrough, a data table, a tactile version. Not better TTS. |

Group C is the honest core of this session. *The answer to some of these is not a better
tool; it is a different deliverable.*

---

## What September 18 should do with this — small

September 18's scope boundary is settled: everyday cases now, specialist notation
November 6. Do **not** import this. Two cheap moves only:

1. **Slide 8 gains a fifth failure mode: notation.** One card. The line is that the other
   four fail audibly and this one fails silently. Costs ~20 seconds.
2. It doubles as the honest handoff for **worklist item 22** — notation has been promised
   on this topic before and left as a blank slide. Naming it on September 18 as *"this is
   real, it is hard, and it is the whole of November 6"* is better than promising it a
   second time, and better than pretending the earlier promise was never made.

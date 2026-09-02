# PDF Conversion — Replication Prompt & Test Protocol

**Purpose:** run the same twenty-page test through ChatGPT, Copilot, and Gemini and compare.
Written September 2, 2026.

**Honesty note on provenance:** the September 2 result in `worklist.md` was produced by
reading the PDF through a built-in document-extraction path, **not** by typing a prompt into
a chatbot. There is no original prompt to reuse. The prompt below is written fresh for the
replication, and is designed to surface the three things that test found: whether all pages
get done, whether notation survives, and whether the tool guesses when it shouldn't.

**Test file:** `~/Downloads/scanned-logic-20p.pdf` — 20 pages, image-only, no text layer.
Built from pages 1–20 of *Introduction to Mathematical Reasoning* (Chris Woodward, Rutgers
New Brunswick, © 2009). **Copyrighted material — local testing only, do not publish pages
of it.**

---

## The prompt

> I'm attaching a 20-page scanned PDF with no text layer. It is a mathematics text, so it
> is dense with logical and mathematical notation.
>
> Transcribe it to accessible HTML, working **five pages at a time** and stopping after each
> batch so I can check it. Do not summarize, condense, or improve anything — I need a
> faithful transcription, including any typographical errors in the original.
>
> Rules:
> 1. **Notation must survive exactly.** Superscripts stay superscripts, subscripts stay
>    subscripts. Preserve ∀ ∃ ∧ ∨ ¬ ⟹ ⟺ ⊢ ⊨ and every other symbol as itself. Do not
>    normalize, simplify, or substitute a similar-looking symbol.
> 2. **Mark every equation up as MathML**, so a screen reader can read it. If you can't
>    produce MathML, give me LaTeX and say so.
> 3. **Where you are not certain what a character or symbol is, do not guess.** Mark it
>    `[UNCERTAIN: your best reading]` and keep going. I would rather have twenty flags than
>    one confident error.
> 4. Use real headings, real lists, and real table markup — not visual formatting.
> 5. Give every figure or image a placeholder `[FIGURE: what it shows]` rather than
>    inventing a description.
>
> After each batch of five pages, tell me: which pages you did, how many `[UNCERTAIN]`
> flags you raised, and anything you could not read at all.

**Follow-up prompt, once it has finished:**

> Now write and run code to do the same conversion on the whole file, so the output doesn't
> depend on you transcribing by hand. Tell me what the code does and where it would fail.

---

## What to record for each tool

| | ChatGPT | Copilot | Gemini |
|---|---|---|---|
| Did it accept a 20-page image-only PDF? | | | |
| How many pages before it stopped or drifted? | | | |
| Did it work in batches when asked? | | | |
| MathML, LaTeX, or neither? | | | |
| Did it flag uncertainty, or silently guess? | | | |
| Superscripts preserved? (check `a^k`, `x²`) | | | |
| Symbol errors found (e.g. ⟹ where ⟺ belongs) | | | |
| Offered to write code when asked? | | | |

### The specific checks
Three known-answer probes from the test already run:

1. **Page 12, k-th root.** Correct is **a^k = b**. Text extraction of the original PDF
   flattens this to `ak = b`. Does the tool get the superscript?
2. **Page 12, unique square root.** Correct is **x² = 4** and **y² = 4**. Extraction gives
   `x2 = 4`, `y 2 = 4`.
3. **Page 8, biconditional truth table.** The header should be **P ⟺ Q**, and the values
   should be T, F, F, T. A previous run returned the header as **P ⟹ Q** with biconditional
   values underneath — internally inconsistent, and unflagged. Watch for this.
4. **Page 20 typos.** The original deliberately reads *"the auhtor makes mitsakes."*
   A tool that "corrects" these is smoothing the source, which is a fidelity failure.

---

## Why this doubles as the compare-the-tools activity

This protocol is the participation moment the work session has been missing. It hands the
room a single artifact, one prompt, and a scoring sheet, and asks them to judge the output
rather than watch someone else judge it. Same gesture as comparing Ally, PowerPoint, and a
chatbot on one image — one level harder.

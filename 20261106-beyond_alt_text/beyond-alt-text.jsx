// @theme uoes

/* VIEW MODES ─────────────────────────────────────────────────────────────
   One view, and it is the audience's. Every word in this file is public.
   Delivery notes — run of show, demo steps, fallbacks — live in
   presenter-notes.md in this folder and are never rendered.

   SLIDE DEEP-LINK: ?s=8 opens on slide 8, and the URL tracks as you
   navigate, so reloading after an edit puts you back where you were.
   ───────────────────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════════
   BEYOND ALT TEXT: NOTATION, DIAGRAMS & SYMBOLS WITH AI
   UOES / TIIP Faculty Workshop · November 6, 2026 · 11:00–12:30 · Zoom
   Format: 60 min content · 30 min work session

   FIRST DRAFT — October 15, 2026. Content PORTED from the February 25,
   2026 "Transcribing Scientific Notation" deck
   (20260225-EmergingTechCommunity/scientific-notation-presentation.jsx).

   ── THEME ───────────────────────────────────────────────────
   The first deck on the shared UOES theme (October 28, 2026), from the
   office's PowerPoint template. Components, navigation, deep links and
   the print view all come from themes/uoes/theme.jsx: define none of
   them here. Every component, one slide each:
   shell.html?p=themes/uoes/specimen

   ── PLACEHOLDERS ────────────────────────────────────────────
   <Placeholder> renders a dashed amber box ON THE SLIDE. It is a draft
   marker, not presenter scaffolding: every one must be gone before this
   deck leaves draft. Find them with:  grep -n "<Placeholder" this file.

   ── AUDIENCE ────────────────────────────────────────────────
   Faculty from every discipline, INCLUDING mathematicians who teach and
   already know MathCAT. MathCAT is the baseline they trust, not a reveal
   (slide 5). The new ground is notation that has no markup behind it.

   ── LESS IS MORE (Rick, October 15, 2026) ──────────────────
   One idea per slide. If a slide needs a second idea, it is two
   slides or the idea goes to presenter-notes.md. Say it, don't print it.

   ── THE THESIS ──────────────────────────────────────────────
   Notation "that experts read differently than they'd ever say aloud."
   And it fails SILENTLY: "x two plus y two" is fluent and false.

   ── THE SPINE — from the February deck ──────────────────────
       SOURCE → AI READS IT → OUTPUT (LaTeX · MathML · spoken) → VERIFY
   The verify beat is where the room's expertise is the tool. Name it.

   ── DEMOS — Rick is prepping both ───────────────────────────
   Slide 4: recordings of existing screen readers.
   Slide 7: the Gen AI reader that says notation the way people say it.
   Rule carried over: if the room cannot use it on Monday with a Rutgers
   account, it is a showcase. Label it.

   ── SEPTEMBER 18 PROMISED, IN WRITING ───────────────────────
   Slide 4 of that deck lists "Live screen-reader demonstrations" for
   today, and its notation card says this is "the whole of November 6."
   Recordings are the right call; say why out loud on slide 4.

   ── TIME BUDGET — PROVISIONAL, not reconciled ───────────────
   Heading subs sum to 54 of 60. Six minutes of slack; the demos will want it. Work session 30. Write time-budget.md.

   ── SHARED, RECORDED, AND CLIPPED ───────────────────────────
   1. ONE VIEW, PUBLIC.  2. EVERY SEGMENT STANDS ALONE.
   3. NO RELATIVE TIME. Always the literal date — which is why the
      footer band carries it on every slide.

   ── AN ACCESSIBILITY DECK MUST BE ACCESSIBLE ────────────────
   Real alt text on every <img>; colour never the only carrier;
   &print readable in greyscale. Notation on slides is real Unicode
   text, never an image of an equation — this deck of all decks.
   ═══════════════════════════════════════════════════════════ */

/* DRAFT CHROME — ON. To go live: set draft to null below (that clears the
   banner, the footer chip, the title-slide badge and the print header),
   remove every <Placeholder>, drop the badge in index.html, and flip
   README status to Live in the same commit. */
UOES.configure({
  draft: 'Draft · November 6, 2026',
  footer: 'UOES · November 6, 2026',
});

// ── SLIDES ─────────────────────────────────────────────────

const slides = [

  // ── 1: TITLE ──
  {
    label: "Title",
    content: (
      <TitleSlide
        kicker="Rutgers UOES · TIIP Partnership"
        title={<>Beyond Alt Text<br />Notation, Diagrams &amp; Symbols</>}
        subtitle="What experts read differently than they'd ever say aloud"
        presenter="Rick Anderson"
        role="Director of Emerging Technology · Rutgers UOES"
        date="November 6, 2026 · 11:00 am – 12:30 pm · Zoom"
      />
    ),
  },

  // ── 2: THE PROJECT ──
  // PORTED from February slides 1 and 5.
  {
    label: "The Project",
    content: (
      <SlideShell>
        <Heading sub="Opening · 3 min">Where This Comes From</Heading>
        <Lede>
          A UOES project on transcribing scientific notation, built with faculty.
        </Lede>

        {/* Thanks named by Rick, October 28, 2026. Names only until each confirms the
            role and department they want shown; don't guess titles. */}
        <People
          label="With thanks"
          people={[{ name: "Carmela Scala" }, { name: "Melike Gursoy" }]}
          note="The faculty who helped build this project."
        />

        <Placeholder title="The four projects and the roles">
          Name the four projects (February never lists them). Confirm the role and department
          Carmela and Melike each want shown under their names.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 3: THE SILENT FAILURE ──
  // The opening argument (worklist item 7). Pays September 18's notation card.
  {
    label: "Silent Failure",
    content: (
      <SlideShell>
        <Heading sub="Framing · 5 min">It Sounds Right, and It Isn't</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-mist rounded-xl p-6">
            <p className="text-xs font-black uppercase tracking-widest text-slate mb-2">On the page</p>
            <p className="text-4xl font-serif text-ink">x² + y²</p>
          </div>
          <div className="bg-blush rounded-xl p-6">
            <p className="uoes-sub mb-2">Read aloud · Wrong</p>
            <p className="text-2xl text-ink italic">“x two plus y two”</p>
          </div>
        </div>

        <Lede>
          A mangled name still sounds mangled. Notation read wrong sounds fluent, so the
          student has no way to know.
        </Lede>
      </SlideShell>
    ),
  },

  // ── 4: DEMO 1 · WHAT SCREEN READERS SAY TODAY ──
  // Rick's recordings. September 18 promised LIVE demonstrations; recorded is the
  // right call (system audio over Zoom, live screen readers misbehave).
  {
    label: "Hear It: Today",
    content: (
      <SlideShell>
        <Heading sub="Demo · 8 min">What a Screen Reader Says Today</Heading>
        <Placeholder title="Recordings">
          Rick's recordings. For each: which reader, which OS, what speed, and the source
          (MathML, LaTeX, or an image). A transcript under each clip so it works without audio.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 5: THE BASELINE · MATHML + MATHCAT ──
  // The math faculty already know this: common ground, not a reveal.
  // Facts from notation-inventory.md, verified September 2, 2026. Re-verify before delivery.
  {
    label: "The Baseline",
    content: (
      <SlideShell>
        <Heading sub="Baseline · 6 min">When It's MathML, This Already Works</Heading>
        <Lede>
          MathCAT reads it in NVDA and JAWS, two ways: <strong>MathSpeak</strong> (precise)
          or <strong>ClearSpeak</strong> (the way a teacher says it). The listener chooses.
        </Lede>
        <Placeholder title="Best practices">
          Rick's adopted MathCAT / MathML best practices.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 6: THE PIPELINE ──
  // PORTED from February slides 3 and 4: inputs, analysis, outputs, in one line.
  // The 88% / 58% accuracy bars are NOT carried over until confirmed as measured.
  {
    label: "The Pipeline",
    content: (
      <SlideShell>
        <Heading sub="Workflow · 8 min">Most Notation Isn't MathML</Heading>
        <Lede>
          It's handwriting, scanned PDFs, and photos of whiteboards. AI can turn those into
          something a screen reader can use.
        </Lede>

        <div className="space-y-4">
          <PipelineStep num="1" title="Source">
            Handwriting · scanned PDF · photo
          </PipelineStep>
          <PipelineStep num="2" title="AI reads it">
            Layout, symbols, structure
          </PipelineStep>
          <PipelineStep num="3" title="Output">
            LaTeX · MathML · the words a person would say
          </PipelineStep>
        </div>

        <VerifyBeat>
          Someone who reads the notation checks it against the source.
        </VerifyBeat>

        <Placeholder title="Accuracy">
          February showed 88% printed / 58% handwriting. Measured? If so, source and date. If
          not, it stays out.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 7: DEMO 2 · THE GEN AI READER ──
  // Must answer "why not ClearSpeak?": image/handwriting sources, notation outside
  // math, course conventions. Must run on a Rutgers account or be labelled a showcase.
  {
    label: "Hear It: Gen AI",
    content: (
      <SlideShell>
        <Heading sub="Demo · 10 min">Said the Way People Say It</Heading>
        <Placeholder title="Demo">
          Rick's Gen AI reader: the same examples as slide 4, then a handwritten source and
          notation outside math. Which Rutgers tool it runs on, or label it a showcase.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 8: WHERE IT FAILS ──
  // February's limits, reduced to the one that matters, plus the handwriting finding.
  {
    label: "Where It Fails",
    content: (
      <SlideShell>
        <Heading sub="Limits · 7 min">When Reading Becomes Guessing</Heading>
        <Lede>
          When the source is unclear, the AI writes what was <em>probably</em> meant. A good
          guess sounds exactly like a correct reading.
        </Lede>
        <Placeholder title="Specimen">
          The logic truth table headed P ⟹ Q where the source says P ⟺ Q. Confirm by eye;
          recreate it rather than screenshot it (copyrighted source).
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 9: BEYOND MATH ──
  // The A/B/C grouping from notation-inventory.md. Group C is the honest core.
  {
    label: "Your Field",
    content: (
      <SlideShell>
        <Heading sub="Every Discipline · 7 min">Your Field Has This Too</Heading>

        {/* Every professional field writes in a notation its experts read and outsiders can't.
            Samples are real conventions from notation-inventory.md. Dance is featured on
            purpose (Rick, October 26, 2026): it is the example that widens what the room
            counts as notation. Don't fold it back into the grid. */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
          {[
            ["Mathematics", "∫ₐᵇ f(x) dx"],
            ["Chemistry", "H₂SO₄"],
            ["Linguistics", "/ˈfoʊ.nə.tɪk/"],
            ["Music", "♩ = 120 · F♯"],
            ["Medicine", "1 tab PO b.i.d."],
            ["Law", "42 U.S.C. § 1983"],
          ].map(([field, sample]) => (
            <div key={field} className="bg-white border border-line rounded-lg p-3">
              <p className="text-xs font-black uppercase tracking-widest text-slate">{field}</p>
              <p className="text-sm text-ink font-serif mt-1">{sample}</p>
            </div>
          ))}
        </div>

        {/* Symbol sheet from the Movement4Brain Game Design Document, section 5.2 (Rick's
            project). It is a key, not a score, so the copy says "symbols", not "staff". */}
        <div className="bg-blush rounded-xl p-4 my-4 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 items-center">
          <img
            src="20261106-beyond_alt_text/labanotation-symbols.png"
            alt="Twelve hand-drawn Labanotation symbols, each labelled with the movement it means: any action, stillness, rotation, flexion, extension, jump, balance, move forward, move away, up or high, down or low, and middle or horizontal. The last three are the same upright rectangle, told apart only by its fill: diagonal hatching means high, solid black means low, and a single dot means middle."
            className="rounded-lg border border-line bg-white w-full max-w-[220px] mx-auto"
            width="220"
          />
          <div>
            <p className="uoes-sub mb-1">Dance · Labanotation</p>
            <p className="text-base text-ink">
              Movement has a notation too. It has no spoken form, because what it records was
              never speech.
            </p>
            <p className="text-sm text-slate mt-2">
              High, low and middle are one shape. Only the fill changes: hatched, solid, a dot.
            </p>
            <p className="text-xs text-slate italic mt-2">
              The symbol set from Movement4Brain, a movement game built on BrainDance.
            </p>
          </div>
        </div>

        {/* Three levels, darkening as the notation gets harder to speak. The label
            carries the meaning; the shade only reinforces it. */}
        <div className="space-y-3 my-4">
          <div className="bg-white border border-line rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-slate mb-1">Has a spoken form</p>
            <p className="text-sm text-ink">H₂SO₄ · x̄ · basic math</p>
          </div>
          <div className="bg-mist rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-slate mb-1">Needs its structure announced</p>
            <p className="text-sm text-ink">Fractions · ∀x∃y · IPA</p>
          </div>
          <div className="bg-ink rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-silver mb-1">Can't be spoken at all</p>
            <p className="text-sm text-white">Music staves · Labanotation · syntax trees · structural formulas</p>
          </div>
        </div>

        <Interact prompt="In chat: one piece of notation from your field a screen reader would get wrong." />
      </SlideShell>
    ),
  },

  // ── 10: WORK SESSION ──
  {
    label: "Work Session",
    content: (
      <SlideShell>
        <Heading sub="Hands-On · 30 min">Your Turn</Heading>
        <Lede>One page of notation from your own course.</Lede>

        <div className="space-y-4">
          <PipelineStep num="1" title="Run the AI pass">Ask for LaTeX, and for how someone in your field would say it.</PipelineStep>
          <PipelineStep num="2" title="Verify">Where did it guess?</PipelineStep>
          <PipelineStep num="3" title="Listen">Put it in Canvas and hear it.</PipelineStep>
        </div>

        <Placeholder title="Work session">
          The prompt, the tool and account, and a fallback page for anyone who brought nothing.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 11: RESOURCES + CONTACT ──
  // The template's closing slide.
  {
    label: "Questions",
    content: (
      <ClosingSlide title="Questions?">
        <p><Link onDark href="https://rianders.github.io/presentations">rianders.github.io/presentations</Link> — every deck in this series</p>
        <p><Link onDark href="https://it.rutgers.edu/ai">it.rutgers.edu/ai</Link> — the AI tools your Rutgers account includes</p>
        <Placeholder title="Notation tools">
          MathCAT, NVDA, and whatever the Gen AI reader runs on. Each link verified with a date.
        </Placeholder>
        <div className="pt-4">
          <p className="font-bold">Rick Anderson</p>
          <p><Link onDark href="mailto:rick.anderson@uoes.rutgers.edu">rick.anderson@uoes.rutgers.edu</Link></p>
        </div>
      </ClosingSlide>
    ),
  },

];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Deck slides={slides} meta="60 min content + 30 min work session" />);

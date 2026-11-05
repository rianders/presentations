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
   (slide 6). The new ground is notation that has no markup behind it.

   ── LESS IS MORE (Rick, October 15, 2026) ──────────────────
   One idea per slide. If a slide needs a second idea, it is two
   slides or the idea goes to presenter-notes.md. Say it, don't print it.

   ── THE THESIS ──────────────────────────────────────────────
   Notation "that experts read differently than they'd ever say aloud."
   And it fails SILENTLY: "x two plus y two" is fluent and false.

   ── THE ORDER (Rick, November 2, 2026) ──────────────────────
   The room's own problem first: every field has notation, and it fails
   silently (slides 2–3). Then ONE worked example, the math pathway
   (slides 4–9), then the same moves on diagrams (10), then their own
   material (11). The thread is the attendees' challenge, not our project.

   ── THE SPINE — from the February deck ──────────────────────
       SOURCE → AI READS IT → OUTPUT (LaTeX · MathML · spoken) → VERIFY
   The verify beat is where the room's expertise is the tool. Name it.

   ── DEMOS — Rick is prepping both ───────────────────────────
   Slide 5: recordings of existing screen readers.
   Slide 8: the Gen AI reader that says notation the way people say it.
   Rule carried over: if the room cannot use it on Monday with a Rutgers
   account, it is a showcase. Label it.

   ── SEPTEMBER 18 PROMISED, IN WRITING ───────────────────────
   Slide 4 of that deck lists "Live screen-reader demonstrations" for
   today, and its notation card says this is "the whole of November 6."
   Recordings are the right call; say why out loud on slide 5.

   ── TIME BUDGET — PROVISIONAL, not reconciled ───────────────
   Heading subs sum to 57 of 60 (November 2, 2026: the diagrams slide added 7,
   Your Field went 7 → 4 and Limits 7 → 6). Three minutes of slack. Work session 30.

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

  // ── 2: THE CHALLENGE ──
  // Rick, November 2, 2026: open with the problem everyone in the room shares, then use
  // math as the worked example. The A/B/C grouping from notation-inventory.md; group C
  // is the honest core. The chat prompt is the opener.
  {
    label: "Your Field",
    content: (
      <SlideShell>
        <Heading sub="The Challenge · 4 min">Your Field Has Its Own Notation</Heading>

        {/* Every professional field writes in a notation its experts read and outsiders can't.
            Samples are real conventions from notation-inventory.md. Dance is featured on
            purpose (Rick, October 26, 2026): it is the example that widens what the room
            counts as notation. Don't fold it back into the grid. */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 my-3">
          {[
            ["Mathematics", "∫ₐᵇ f(x) dx"],
            ["Chemistry", "H₂SO₄"],
            ["Linguistics", "/ˈfoʊ.nə.tɪk/"],
            ["Music", "♩ = 120 · F♯"],
            ["Medicine", "1 tab PO b.i.d."],
            ["Electronics", "R1 vin vout 4.7k"],
          ].map(([field, sample]) => (
            <div key={field} className="bg-white border border-line rounded-lg px-3 py-2">
              <p className="text-xs font-black uppercase tracking-widest text-slate">{field}</p>
              <p className="text-sm text-ink font-serif mt-1">{sample}</p>
            </div>
          ))}
        </div>

        {/* Dance card on the left, the three levels stacked on the right: side by side so
            the slide fits a 16:9 frame (November 2, 2026). */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 my-3 items-stretch">

        {/* Symbol sheet from the Movement4Brain Game Design Document, section 5.2 (Rick's
            project). It is a key, not a score, so the copy says "symbols", not "staff". */}
        <div className="bg-blush rounded-xl p-4 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 items-center">
          <img
            src="20261106-beyond_alt_text/labanotation-symbols.png"
            alt="Twelve hand-drawn Labanotation symbols, each labelled with the movement it means: any action, stillness, rotation, flexion, extension, jump, balance, move forward, move away, up or high, down or low, and middle or horizontal. The last three are the same upright rectangle, told apart only by its fill: diagonal hatching means high, solid black means low, and a single dot means middle."
            className="rounded-lg border border-line bg-white w-full max-w-[130px] mx-auto"
            width="130"
          />
          <div>
            <p className="uoes-sub mb-1">Dance · Labanotation</p>
            <p className="text-sm text-ink">
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
            carries the meaning; the shade only reinforces it. The third level names the
            fix, not just the limit (November 2, 2026): the brief promises syntax trees and
            structural formulas converted, and a different form is that conversion. */}
        <div className="flex flex-col gap-2">
          <div className="bg-white border border-line rounded-xl px-4 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-slate">Has a spoken form</p>
            <p className="text-sm text-ink">H₂SO₄ · x̄ · basic math</p>
          </div>
          <div className="bg-mist rounded-xl px-4 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-slate">Needs its structure announced</p>
            <p className="text-sm text-ink">Fractions · ∀x∃y · IPA</p>
          </div>
          <div className="bg-ink rounded-xl px-4 py-2 flex-1">
            <p className="text-xs font-black uppercase tracking-widest text-silver">Needs a different form</p>
            <p className="text-sm text-white">Music staves · Labanotation · syntax trees · structural formulas</p>
            <p className="text-xs text-silver mt-1">A circuit as a netlist. A tree in brackets. A molecule by name, or by touch.</p>
          </div>
        </div>

        </div>

        <Interact prompt="In chat: one piece of notation from your field a screen reader would get wrong." />
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

        {/* Deadline wording is the published brief's. April 2027 confirmed by Rick,
            November 2, 2026. */}
        <p className="uoes-sub">
          The slowest material to make accessible, and the last the April 2027 deadline will reach
        </p>
      </SlideShell>
    ),
  },

  // ── 4: THE MATH PATHWAY ──
  // PORTED from February slides 1 and 5. Now the start of the worked example: slides 4–9
  // walk one pathway through math, then slide 10 takes it back out to diagrams.
  {
    label: "Math Pathway",
    content: (
      <SlideShell>
        <Heading sub="The Math Pathway · 3 min">Where This Comes From</Heading>
        <Lede>
          Today's worked example: a UOES project on transcribing scientific notation, built
          with faculty.
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

  // ── 5: DEMO 1 · WHAT SCREEN READERS SAY TODAY ──
  // Rick's recordings. September 18 promised LIVE demonstrations; recorded is the
  // right call (system audio over Zoom, live screen readers misbehave).
  {
    label: "Hear It: Today",
    content: (
      <SlideShell>
        <Heading sub="Demo · 8 min">What a Screen Reader Says Today</Heading>

        {/* The brief promises "the difference between an accessible figure and an
            inaccessible one", LIVE. Recorded instead (decided October 15, 2026): say why
            out loud, that the room should hear the screen reader rather than Zoom's audio.
            One equation, both ways: clip 1 in demos.md. */}
        <Columns n={2}>
          <Column title="Inaccessible · the equation as an image">
            The screen reader finds a picture. It says “graphic”, or reads whatever alt text
            someone typed.
          </Column>
          <Column title="Accessible · the same equation as MathML">
            The screen reader reads the mathematics, and the student can step through it.
          </Column>
        </Columns>

        <Placeholder title="Recordings">
          Clip 1: one equation, both ways, in a Canvas page. NVDA version and speech rate, and a
          transcript under each clip so it works without audio.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 6: THE BASELINE · MATHML + MATHCAT ──
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
        {/* Rick, November 5, 2026: leave the math as it is, or add a spoken version? Heard in
            Immersive Reader on two equations (recordings/canvas-reading-tools.md): it reads the
            equation, then the written reading. You hear it twice, but you get both. NVDA not
            yet listened to. An instructor's decision, not a right answer. */}
        <p className="uoes-sub mt-4">Your decision: add a spoken version?</p>
        <Columns n={2}>
          <Column title="Math only">
            Shorter, and each listener's tool decides how to say it.
          </Column>
          <Column title="Math plus a written reading">
            Read twice in Immersive Reader, but you get both: the literal and the spoken.
          </Column>
        </Columns>
        <Placeholder title="Best practices">
          Rick's adopted MathCAT / MathML best practices.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 7: THE PIPELINE ──
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
          {/* November 3, 2026: PDFs read better as page images (the text layer breaks
              symbols and layout), and a tall page read whole lost lines that the same
              page in pieces kept. tools/prep_pages.py; recordings/split-vs-whole.md. */}
          <PipelineStep num="1" title="Source">
            Handwriting · scanned PDF · photo, sent one page at a time as images
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

        {/* November 3, 2026: replaces February's 88% / 58%, which were never sourced.
            Ten models, one handwritten page (sandbox algebra p.13), 30 lines, one run each:
            recordings/tier-comparison.md. Gemini Flash 29, Copilot Auto 23, ChatGPT 5.6
            Instant 27, Luna 24; Gemini Thinking 30, Copilot Think deeper 29, Astra 30. */}
        <Note>
          One handwritten page, 30 lines: each tool's default model missed some (23 to 29
          right). Its strongest model got 29 or 30. Pick the model; don't take the default.
        </Note>
        <Placeholder title="Review">
          Counts are one page, one run each (November 3, 2026). Say so out loud. February's
          88% / 58% are dropped.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 8: DEMO 2 · THE GEN AI READER ──
  // Must answer "why not ClearSpeak?": image/handwriting sources, notation outside
  // math, course conventions. Must run on a Rutgers account or be labelled a showcase.
  {
    label: "Hear It: Gen AI",
    content: (
      <SlideShell>
        <Heading sub="Demo · 8 min">Said the Way People Say It</Heading>
        {/* November 3, 2026, both on Rick's NetID, so neither is a showcase. Every Rutgers
            faculty member has Gemini and Copilot; ChatGPT Edu with GPT-6 Astra is an
            upgrade (Rick). Page 13: Gemini 3.6 Thinking 30/30 but adds "final answer";
            Astra 30/30, nothing added, positions described. Astra's line below is quoted
            from its answer. recordings/tier-comparison.md. */}
        <Lede>
          It reads handwriting, says each line the way a teacher would, and describes where
          things sit on the page.
        </Lede>
        <Columns n={2}>
          <Column title="Everyone · Gemini, Thinking model">
            Every line of a handwritten page right. It still adds steps the page doesn't
            have (“final answer”), so check it.
          </Column>
          <Column title="ChatGPT Edu upgrade · GPT-6 Astra">
            Every line right, nothing added, and the layout kept:
            <br /><span className="italic">“Upper right, green: two x plus nine over…”</span>
          </Column>
        </Columns>
        {/* November 3, 2026 demo: three lines of sandbox page 13 with GPT-6 Astra's exact
            readings from that day's run (recordings/tier-comparison.md), spoken by the macOS
            voice Samantha, so it's Astra's words, not a screen reader. 44 s, captions in
            the .vtt. */}
        <video
          controls
          preload="metadata"
          className="rounded-lg border border-line w-full max-w-xl mx-auto mt-4"
          width="1280"
          height="720"
          aria-label="Demo, 44 seconds: GPT-6 Astra's readings of three handwritten algebra lines, spoken aloud, with captions"
        >
          <source src="20261106-beyond_alt_text/slide8-said-the-way-people-say-it.mp4" type="video/mp4" />
          <track kind="captions" src="20261106-beyond_alt_text/slide8-said-the-way-people-say-it.vtt" srcLang="en" label="English" default />
        </video>
        <Placeholder title="Review">
          The demo is Astra's words in a macOS voice. Say that out loud, and that Astra needs the
          upgrade.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 9: WHERE IT FAILS ──
  // February's limits, reduced to the one that matters, plus the handwriting finding.
  {
    label: "Where It Fails",
    content: (
      <SlideShell>
        <Heading sub="Limits · 6 min">When Reading Becomes Guessing</Heading>
        <Lede>
          When the source is unclear, the AI writes what was <em>probably</em> meant. A good
          guess sounds exactly like a correct reading.
        </Lede>
        {/* Rick, November 2, 2026: common ideas are guessed well, specialized ones badly,
            so a strong model fails at the edges. Prefer a specialized specimen to prove it. */}
        <Lede>
          It guesses best on what's common and worst on what's specialized: the material your
          course depends on, and the fewest people can check.
        </Lede>
        {/* November 3, 2026: checked against page 1 of the Section 2.1 notes in the
            Accessibility Sandbox (limits-2-1-notes.pdf) and the OCR page
            limits-2-1-ocr-to-inline-latex. Clip 5. Backup, still unconfirmed: P ⟹ Q for
            P ⟺ Q in the logic text. (The GLM OCR's P_ij(n) and "/" in the Markov notes
            turned out to be faithful to the handwriting, so that backup is gone.) */}
        <Columns n={2}>
          <Column title="The notes · Section 2.1, page 1">
            <span className="uoes-serif text-2xl text-ink">7·1²</span>
            <br />“seven times one squared”, which is 7.
          </Column>
          <Column title="The OCR · read aloud">
            <span className="uoes-serif text-2xl text-scarlet">7.1^2</span>
            <br />“seven point one squared”, which is 50.41. Nothing sounds wrong.
          </Column>
        </Columns>

        {/* November 3, 2026: Melike Gursoy's Markov chains lecture (Jan 27, 2021), pages 2
            and 3, run through the notation-access skill. GPT-6 Astra (ChatGPT Edu Work) and
            Gemini 3.6 Thinking both wrote P_ij^(n), neither marked it uncertain. Rick ruled
            from the page: P subscript ij, then (n) on the line. Evidence in
            recordings/gursoy-lecture-comparison.md. The specialized case the Lede predicts. */}
        <Columns n={2}>
          <Column title="The notes · Markov chains">
            <span className="uoes-serif text-2xl text-ink">P<sub>ij</sub>(n)</span>
            <br />The chance of going from i to j at time n.
          </Column>
          <Column title="The best models · transcribed">
            <span className="uoes-serif text-2xl text-scarlet">P<sub>ij</sub><sup>(n)</sup></span>
            <br />The chance of getting there in n steps: a different idea. Neither flagged it.
          </Column>
        </Columns>
      </SlideShell>
    ),
  },

  // ── 10: DIAGRAMS ──
  // Added November 2, 2026: the brief promises narrated walkthroughs of flow charts and
  // decision trees, and audio descriptions of disciplinary figures. Both social-science
  // examples it names (supply-demand, choropleth) live here. Clips 6 and 7 in demos.md.
  {
    label: "Diagrams",
    content: (
      <SlideShell>
        <Heading sub="Diagrams · 7 min">Describe the Path, Not the Picture</Heading>
        <Lede>
          A diagram makes an argument with arrows and position. The accessible version says
          the argument.
        </Lede>

        <Columns n={3}>
          <Column title="Flow chart · decision tree">
            AI writes the walkthrough: the start, each decision, each branch. In Canvas it
            becomes a nested list, so a screen reader announces every level.
          </Column>
          <Column title="Supply and demand · Economics">
            AI describes what the graph shows and what it means: the two curves, where they
            cross, what a shift does. You check it against the graph.
          </Column>
          <Column title="Choropleth map · Geography">
            Colour carries all of the data, so no description is enough. The accessible
            version is the table behind the map.
          </Column>
        </Columns>

        <Placeholder title="Recordings">
          Clip 6, a real flow chart as a narrated walkthrough in Canvas, and clip 7, the
          supply-demand figure as an audio description. See demos.md.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 11: IT ANSWERS INSTEAD ──
  // Added November 3, 2026 (Rick: "New slide before 11"). Clip 10: the GIF is cut from the
  // November 3 Gemini run (recordings/clip10-take1-it-answers-instead.gif), three captioned
  // frames slow enough to read. Sets up the first line of the work-session prompt.
  {
    label: "Answers Instead",
    content: (
      <SlideShell>
        <Heading sub="The Prompt · 2 min">Ask for Access, Get an Answer Key</Heading>
        <Lede>
          Ask a tool to make a worksheet accessible and it tends to fix it. On a “find the
          mistake” page, the fix is the answer.
        </Lede>
        <img
          src="20261106-beyond_alt_text/clip10-it-answers-instead.gif"
          alt="Three frames, looping. First, the handwritten page: two x plus nine over the square root of x squared equals two x plus nine over x. Second, Gemini's answer to “Make this accessible”: the same line with “x greater than zero” added. Third, the answer to the work-session prompt: the line kept exactly as written."
          className="rounded-lg border border-line w-full max-w-3xl mx-auto my-4"
          width="900"
          height="260"
        />
        <p className="uoes-sub">
          The first line of the prompt is the fix: do not solve, simplify, correct or finish anything
        </p>
      </SlideShell>
    ),
  },

  // ── 12: WHICH MODEL ──
  // Added November 5, 2026 (Rick: a matrix or leaderboard of models and topics, then what to
  // recommend). Page 13 scores from recordings/tier-comparison.md, every miss checked by eye.
  // Copilot's runs used 2 pieces, its limit; the others 4. Lecture from
  // recordings/gursoy-lecture-comparison.md: only Astra and Gemini Thinking ran it, and both
  // made the same P_ij(n) error (slide 9). A one-line gap in one run is not a real ranking,
  // so say so out loud. "Adds steps": wrote things like "final answer" or "we get".
  {
    label: "Which Model",
    content: (
      <SlideShell>
        <Heading sub="Recommendations · 3 min">Which Model Should You Use?</Heading>
        <table className="w-full text-xs text-ink border-collapse my-2">
          <caption className="sr-only">
            Ten models ranked by a handwritten algebra page, with results on a 14-page lecture where tested.
          </caption>
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th scope="col" className="py-1 pr-2">Access</th>
              <th scope="col" className="py-1 pr-2">Model</th>
              <th scope="col" className="py-1 pr-2 text-right">Algebra lines, of 30</th>
              <th scope="col" className="py-1 pr-2 text-right">Details kept, of 5</th>
              <th scope="col" className="py-1 pr-2">Adds steps?</th>
              <th scope="col" className="py-1">Hard lecture, 14 pages</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Upgrade", "GPT-6 Astra (Work)", 30, 5, "No", "All 14; 15 doubts marked", true],
              ["Everyone", "Gemini 3.6 Thinking", 30, 5, "Yes", "Only 9; no doubts marked", true],
              ["Everyone", "Copilot, Think deeper", 29, 5, "No", "Not tested", true],
              ["Everyone", "Gemini 3.6 Flash (default)", 29, 5, "Yes", "Not tested", false],
              ["Everyone", "Gemini 3.1 Pro", 29, 4, "No", "Not tested", false],
              ["Upgrade", "GPT-6 Sol (Work)", 29, 4, "No", "Not tested", false],
              ["Upgrade", "GPT-5.6 Instant (Chat default)", 27, 4, "No", "Not tested", false],
              ["Upgrade", "GPT-6 (Chat)", 27, 4, "No", "Not tested", false],
              ["Upgrade", "GPT-5.6 Luna (Work default)", 24, 4, "No", "Not tested", false],
              ["Everyone", "Copilot, Auto (default)", 23, 4, "Yes", "Not tested", false],
            ].map(([access, model, lines, traps, adds, lecture, best]) => (
              <tr key={model} className={`border-b border-line ${best ? "bg-blush font-bold" : ""}`}>
                <td className="py-1 pr-2">{access}</td>
                <th scope="row" className={`py-1 pr-2 text-left ${best ? "font-bold" : "font-normal"}`}>{model}</th>
                <td className="py-1 pr-2 text-right">{lines}</td>
                <td className="py-1 pr-2 text-right">{traps}</td>
                <td className="py-1 pr-2">{adds}</td>
                <td className={`py-1 ${lecture === "Not tested" ? "text-slate" : ""}`}>{lecture}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate mb-2">One page, one run each, with the work-session prompt, November 2026. Bold: our picks.</p>
        <Columns n={2}>
          <Column title="Everyone">
            Gemini <strong>Thinking</strong> or Copilot <strong>Think deeper</strong>. Up to 9 pages at a time in Gemini, 2 images in Copilot.
          </Column>
          <Column title="With the ChatGPT Edu upgrade">
            <strong>GPT-6 Astra</strong> for long or hard notes. It still got specialized notation wrong: check it.
          </Column>
        </Columns>
      </SlideShell>
    ),
  },

  // ── 13: WORK SESSION ──
  {
    label: "Work Session",
    content: (
      <SlideShell>
        <Heading sub="Hands-On · 30 min">Your Turn</Heading>
        <Lede>One equation set, unit or figure from your own course.</Lede>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 items-start">
          <div className="space-y-4">
            <PipelineStep num="1" title="Run the prompt">On one page, not the whole unit.</PipelineStep>
            <PipelineStep num="2" title="Verify">Where did it guess? Did it change anything?</PipelineStep>
            <PipelineStep num="3" title="Listen">Put it in Canvas and hear it.</PipelineStep>
          </div>

          {/* Rick, November 2, 2026: asked to make a problem accessible, AI tends to SOLVE
              it. That destroys a worksheet, and "find the error" exercises worst of all,
              because it fixes the error. The first line of the prompt forbids it. This is
              the short form; the full rules are the notation-access skill linked below. */}
          {/* November 3, 2026, page 13: the plain "Make this accessible" changed the page in
              6 of 8 runs (added x > 0, |x|, or images); this prompt kept it as written in
              all 7 runs that finished. recordings/clip10-history-matrix.md. */}
          <div>
            <CodeBlock>{`Make this accessible. Do not solve, simplify,
correct or finish anything.

Notation: the LaTeX, and how someone in
[your field] would read it aloud.
Figure: what it shows, not what it proves.

Mark anything you were unsure of.`}</CodeBlock>
            <p className="text-xs text-slate -mt-2">
              On one page: “make this accessible” changed it 6 times in 8. This prompt: 0 in 7.
            </p>
          </div>
        </div>

        {/* Gems are being replaced by skills (Google, September 2026: no new Gems from
            October 13, migration from November 17) and custom GPTs by plugins (OpenAI:
            new GPTs end October 26, shutdown December 11). Checked November 2, 2026.
            The link is the skill's GitHub folder, not GitHub Pages: Pages turns a .md with
            front matter into HTML, so SKILL.md 404s there. GitHub shows the folder's
            README.md, the how-to for all four tools, under the files. Gemini skills aren't
            on work or school accounts yet (November 2, 2026), so the slide doesn't promise
            Gemini on a NetID. */}
        <p className="text-sm text-slate">
          The full rules are a skill you can take, with how to add it to Gemini, Copilot,
          ChatGPT or Claude:{' '}
          <Link href="https://github.com/rianders/presentations/tree/main/20261106-beyond_alt_text/notation-access">notation-access skill</Link>.
        </p>

        {/* Confirmed on Rick's NetID November 3, 2026: Gemini (Edu), Copilot Chat (Basic),
            ChatGPT Edu. Limits seen that day: Gemini took 10 files a message and dropped
            the rest silently; Copilot Chat (Basic) took 2 images. Fallback page: the
            sandbox's "After: Handwritten Algebra Worked Problems". */}
        <Note>
          Use Gemini or Copilot on your NetID, and switch to <strong>Thinking</strong> or{' '}
          <strong>Think deeper</strong>. Send a page at a time: Gemini takes up to 9 pages,
          Copilot 2 images. No page with you? Use the sandbox's handwritten algebra.
        </Note>
        <Placeholder title="Review">
          Are attendees enrolled in the Accessibility Sandbox? Its pages are unpublished. If
          not, share the algebra page another way.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 14: RESOURCES ──
  // Rick, November 2, 2026: every deck ends with standard useful resources. The theme's
  // ResourcesSlide puts this session's links beside the standard Rutgers set.
  // Verified November 2, 2026: NVDA is free with MathCAT built in since 2026.1; Rutgers
  // licenses Fusion (JAWS + ZoomText), and JAWS has read MathCAT since December 2024.
  // The skill links to its GitHub folder, where README.md is the how-to for Gemini,
  // Copilot, ChatGPT and Claude. (Pages turns SKILL.md into HTML; GitHub shows it as is.)
  {
    label: "Resources",
    content: (
      <ResourcesSlide
        items={[
          { label: "What we learned testing AI", href: "https://rianders.github.io/presentations/20261106-beyond_alt_text/report.html", note: "The prompt, the models, page prep and Canvas, from the November 2026 tests" },
          { label: "The notation-access skill", href: "https://github.com/rianders/presentations/tree/main/20261106-beyond_alt_text/notation-access", note: "Today's rules, and how to add them to Gemini, Copilot, ChatGPT or Claude" },
          { label: "NVDA", href: "https://www.nvaccess.org/", note: "Free screen reader for Windows, with MathCAT built in" },
          { label: "MathCAT", href: "https://daisy.github.io/MathCAT", note: "Speech styles, braille and navigation for MathML" },
          { label: "Gemini", href: "https://gemini.google.com", note: "On your NetID. Choose the Thinking model" },
          { label: "ChatGPT Edu", href: "https://chatgpt.com", note: "With the upgrade: Work mode, GPT-6 Astra" },
        ]}
        checked="November 3, 2026"
      >
        <Placeholder title="Review">
          Is there a Rutgers page for getting Gemini, Copilot and the ChatGPT Edu upgrade? If
          so, link that instead of the tools themselves.
        </Placeholder>
      </ResourcesSlide>
    ),
  },

  // ── 15: CLOSING ──
  // The template's closing slide. Links live on slide 14 now; this one is the line
  // to leave the room with, and how to reach Rick.
  {
    label: "Questions",
    content: (
      <ClosingSlide title="Questions?">
        {/* Rick, November 2, 2026: accessible also means able to read the notation, and
            students have to write it too. Any sense: sight, hearing, touch, movement. */}
        <p className="text-lg mb-4">Accessible means a student can read it and write it, with whatever senses they use.</p>
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

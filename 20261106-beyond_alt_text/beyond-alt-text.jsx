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
  draft: null,
  footer: 'UOES · November 6, 2026',
});

// The live deck. Same image on the first and last slides; the link is also in zoom-kit.md.
const SlidesQR = ({ className }) => (
  <img
    src="20261106-beyond_alt_text/qr-beyond-alt-text.png"
    alt="QR code that opens these slides: rianders.github.io/presentations, Beyond Alt Text."
    className={`rounded-lg ${className}`}
    width="144"
    height="144"
  />
);

// ── SLIDES ─────────────────────────────────────────────────

const slides = [

  // ── 1: TITLE ──
  {
    label: "Title",
    content: (
      <div className="relative h-full">
      <TitleSlide
        kicker="Rutgers UOES · TIIP Partnership"
        title={<>Beyond Alt Text<br />Notation, Diagrams &amp; Symbols</>}
        presenter="Rick Anderson"
        role="Director of Emerging Technology · Rutgers UOES"
        date="November 6, 2026 · 11:00 am – 12:30 pm · Zoom"
      />
      <SlidesQR className="absolute right-6 bottom-6 w-36" />
      </div>
    ),
  },

  // ── 2: BROUGHT TO YOU BY ──
  // Ported from 20260918-digital_accessibility slide 2 and the August 21 bio slide.
  // Rick, Nov 6, 2026: add the TIIP GenAI Pathways card + link, link UOES to its site,
  // mention the AI Literacies Project; the old "Me" card was weak, so it now carries
  // the career line from August 21. Reporting line stays off (settled Sept 17).
  // AI Literacies card: no link on purpose. Rick, Nov 6: "People can contact me."
  {
    label: "Brought to You By",
    content: (
      <SlideShell time="1 min">
        <Heading sub="Opening">Brought to You By</Heading>
        <CardGrid cols={2}>
          <SectionCard title="UOES · University Online Education Services" icon="🏛️" accent={true}>
            <p className="text-sm">
              Instructional designers, media specialists and educational technologists in University
              Academic Affairs, partnering with academic units on their online programs.
            </p>
            <p className="text-sm mt-2"><Link onDark href="https://uoes.rutgers.edu">uoes.rutgers.edu</Link></p>
          </SectionCard>
          <SectionCard title="TIIP · Teaching and Generative AI Pathway" icon="🧭">
            <p className="text-sm">
              Our partner for this series, Teaching with GenAI. Today is one session on that pathway.
            </p>
            <p className="text-sm mt-2"><Link href="https://teaching.rutgers.edu/teaching-and-generative-ai-pathway/">teaching.rutgers.edu/teaching-and-generative-ai-pathway</Link></p>
          </SectionCard>
          <SectionCard title="AI Literacies Project" icon="📚">
            <p className="text-sm">
              For faculty: the many AI literacies, and the resources across Rutgers. A partnership
              with the University Libraries to create a central inventory and resource awareness.
              Contact me for more.
            </p>
          </SectionCard>
          <SectionCard title="Rick Anderson" icon="🔭">
            <p className="text-sm">
              Director of Emerging Technology, UOES. Built some of Rutgers' first websites in the 1990s,
              and worked on text markup at the Center for Electronic Texts in the Humanities. I research
              and experiment with new technologies, from AI to 3D immersive spaces, and share them
              with faculty to incorporate in their own work.
            </p>
          </SectionCard>
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── 3: THE SILENT FAILURE ──
  // The opening argument (worklist item 7). Pays September 18's notation card.
  {
    label: "Silent Failure",
    content: (
      <SlideShell time="5 min">
        <Heading sub="Framing">Looks and Sounds Right, but Is Wrong</Heading>

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
        {/* Moved here November 6, 2026, when the Your Field slide was cut: it was the opener. */}
        <Interact prompt="In chat: one piece of notation from your field a screen reader would get wrong." />
      </SlideShell>
    ),
  },

  // ── 4: THE MATH PATHWAY ──
  // PORTED from February slides 1 and 5. Now the start of the worked example: slides 4–9
  // walk one pathway through math, then slide 10 takes it back out to diagrams.
  {
    label: "Math Pathway",
    content: (
      <SlideShell time="3 min">
        <Heading sub="The Math Pathway">Notation Must Be Formatted for Screen Readers</Heading>
        <Lede>
          A screen reader can only say what the page gives it. The same equation arrives three ways.
        </Lede>
        <Columns n={3}>
          <Column title="A picture">
            An image of the equation, with no text behind it. The listener hears “graphic,” or nothing.
          </Column>
          <Column title="Plain typed text">
            x^2 + y^2 typed as characters. It is read symbol by symbol, and the structure is lost.
          </Column>
          <Column title="Structured math (MathML)">
            The page says what is a power, a fraction, a root. MathCAT turns it into speech, and the listener can step through it.
          </Column>
        </Columns>

        {/* Thanks named by Rick, October 28, 2026. Names only (Rick, November 5: just a
            thank-you). Kept here as one line when the slide became real content, Nov 6. */}
        <p className="text-sm text-slate mt-5">
          Today's worked example is a UOES project on transcribing scientific notation, built with
          faculty. With thanks to <strong>Carmela Scala</strong> and <strong>Melike Gursoy</strong>.
        </p>
      </SlideShell>
    ),
  },

  // ── 5: DEMO 1 · ONE EQUATION IN CANVAS ──
  // Rebuilt November 5, 2026 (Rick: one focused example, what's possible in Canvas, recorded).
  // His OBS recording of Immersive Reader on an unpublished sandbox page, transcribed with Whisper
  // and checked by isolating the "s". recordings/clip1-canvas-options.md. Immersive Reader is
  // not a screen reader: say so. NVDA and JAWS weren't tested. The brief promised LIVE;
  // recorded stays the right call over Zoom.
  {
    label: "Hear It: Canvas",
    content: (
      <SlideShell time="6 min">
        <Heading sub="Demo">Six Different Ways to Express an Equation</Heading>
        <video
          controls
          preload="metadata"
          className="rounded-lg border border-line mx-auto my-2"
          style={{ maxHeight: "32vh" }}
          width="1280"
          height="680"
          aria-label="Demo, 150 seconds: Canvas's Immersive Reader reading the sample standard deviation formula six ways, with captions."
        >
          <source src="20261106-beyond_alt_text/slide5-one-equation-in-canvas.mp4" type="video/mp4" />
          <track kind="captions" src="20261106-beyond_alt_text/slide5-one-equation-in-canvas.vtt" srcLang="en" label="English" default />
        </video>
        <table className="w-full text-xs text-ink border-collapse my-2">
          <caption className="sr-only">What Immersive Reader said for each of six ways to put one equation in Canvas.</caption>
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th scope="col" className="py-1 pr-2">In Canvas</th>
              <th scope="col" className="py-1">What Immersive Reader said</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Image, no description", "Nothing"],
              ["Image, Ally's description", "“South equals the square root of the sum of squared deviations from the mean divided by n minus 1”"],
              ["Canvas equation editor", "“South equals square root of, sum from i equals 1 to n of, open paren x sub i …”"],
              ["MathML", "The same words as the equation editor"],
              ["In context, with code", "What it means, then the math, then “… over n minus 1, import numpy as np”, “hashtag”"],
              ["Code, with a signal", "“The next section is Python code.” “Python code.” Then the code, then “What the code does”"],
            ].map(([option, said]) => (
              <tr key={option} className="border-b border-line">
                <th scope="row" className="py-1 pr-2 text-left font-bold">{option}</th>
                <td className="py-1">{said}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-slate">Immersive Reader, one recording, November 5. It's a read-aloud tool, not a screen reader: NVDA and JAWS not tested here.</p>
      </SlideShell>
    ),
  },

  // ── 6: ONE PAGE, ALL THE QUESTIONS ──
  // Added November 5, 2026 (Rick: this is one page with all the problems, so raise the questions
  // and make them part of the through line). Everything here is from clip 1 and the checkers on that
  // page. The cause of "South" is not documented anywhere I found: don't state one as fact.
  {
    label: "The Questions",
    content: (
      <SlideShell time="2 min">
        <Heading sub="The Through Line">One Page, Every Question</Heading>
        <table className="w-full text-sm text-ink border-collapse my-3">
          <caption className="sr-only">What happened on the one test page, and the question each raises.</caption>
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th scope="col" className="py-2 pr-3">What happened</th>
              <th scope="col" className="py-2">The question</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["“s” was read as “South”, in the description and in the MathML", "Who listens before students do?"],
              ["Ally gave this page 92%. It flagged one image, and nothing about what was said", "What does a score measure?"],
              ["Canvas's checker flagged Ally's own description as too long", "Which tool do you believe?"],
              ["Code ran straight on from the equation, until a lead-in and headings signalled it", "How do you signal that the language changed?"],
              ["Only the version in context said what the formula means", "What would you say in the lecture?"],
            ].map(([happened, question]) => (
              <tr key={question} className="border-b border-line">
                <td className="py-2 pr-3">{happened}</td>
                <th scope="row" className="py-2 text-left font-bold">{question}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="uoes-sub">Hold these questions. The rest of the session comes back to them.</p>
      </SlideShell>
    ),
  },

  // ── 7: THE BASELINE · MATHML + MATHCAT ──
  // The math faculty already know this: common ground, not a reveal.
  // Facts from notation-inventory.md, verified September 2, 2026. Re-verify before delivery.
  {
    label: "The Baseline",
    content: (
      <SlideShell time="6 min">
        <Heading sub="Baseline">Ask AI for MathML and LaTeX</Heading>
        <Lede>
          Ask for MathML with the LaTeX kept inside it, so a screen reader with MathCAT can read
          each equation and step through it.
        </Lede>
        {/* Rick, November 6, 2026: faculty are expected to prompt AI to convert to MathML and
            LaTeX. Canvas facts are from report.html. The written reading: heard in Immersive
            Reader on two equations (recordings/canvas-reading-tools.md); it reads the equation,
            then the written reading. NVDA not yet listened to. An instructor's decision, not a
            right answer. */}
        <Columns n={3}>
          <Column title="Put it in Canvas">
            Paste it through the HTML editor: all 30 equations came through in our test. The
            equation editor gave the same reading.
          </Column>
          <Column title="The listener's tool voices it">
            MathCAT in NVDA and JAWS offers <strong>MathSpeak</strong> (precise) or{' '}
            <strong>ClearSpeak</strong> (the way an instructor says it). The listener chooses.
          </Column>
          <Column title="Your decision">
            Also have the AI write out how you'd say it? You get both, but Immersive Reader
            reads it twice, and you check the wording.
          </Column>
        </Columns>
      </SlideShell>
    ),
  },

  // ── 8: THE PIPELINE ──
  // PORTED from February slides 3 and 4: inputs, analysis, outputs, in one line.
  // The 88% / 58% accuracy bars are NOT carried over until confirmed as measured.
  {
    label: "The Pipeline",
    content: (
      <SlideShell time="8 min">
        <Heading sub="Workflow">Most Notation Isn't MathML</Heading>
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
        {/* February's 88% / 58% are dropped. */}
        <p className="text-xs text-slate mt-2">One page, one run each, November 3, 2026.</p>
      </SlideShell>
    ),
  },

  // ── 9: DEMO 2 · THE GEN AI READER ──
  // Must answer "why not ClearSpeak?": image/handwriting sources, notation outside
  // math, course conventions. Must run on a Rutgers account or be labelled a showcase.
  {
    label: "Hear It: Gen AI",
    content: (
      <SlideShell time="8 min">
        <Heading sub="Demo">Said the Way People Say It</Heading>
        {/* November 3, 2026, both on Rick's NetID, so neither is a showcase. Every Rutgers
            faculty member has Gemini and Copilot; ChatGPT Edu with GPT-6 Astra is an
            upgrade (Rick). Page 13: Gemini 3.6 Thinking 30/30 but adds "final answer";
            Astra 30/30, nothing added, positions described. Astra's line below is quoted
            from its answer. recordings/tier-comparison.md. */}
        <Lede>
          It reads handwriting, says each line the way an instructor would, and describes where
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
        <p className="text-xs text-slate mt-2">Astra's words, spoken by a macOS voice. Astra needs the ChatGPT Edu upgrade.</p>
      </SlideShell>
    ),
  },

  // ── 10: WHERE IT FAILS ──
  // February's limits, reduced to the one that matters, plus the handwriting finding.
  {
    label: "Where It Fails",
    content: (
      <SlideShell time="6 min">
        <Heading sub="Limits">When Reading Becomes Guessing</Heading>
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

  // ── 11: DIAGRAMS ──
  // Added November 2, 2026: the brief promises narrated walkthroughs of flow charts and
  // decision trees, and audio descriptions of disciplinary figures. Both social-science
  // examples it names (supply-demand, choropleth) live here. Clips 6 and 7 in demos.md.
  {
    label: "Diagrams",
    content: (
      <SlideShell time="5 min">
        <Heading sub="Diagrams">Describe the Path, Not the Picture</Heading>
        <Lede>
          A diagram makes an argument with arrows and position. The accessible version says
          the argument.
        </Lede>

        {/* November 5, 2026: specimens drawn with keys written first; the flow chart is a
            screenshot of W3C's alt decision tree, keyed against W3C's own text. Work-session
            prompt, one run each: recordings/diagram-tests.md. Easy cases: clean and labelled.
            Supply-demand and the choropleth: drawn specimens, tested November 5, an easy map.
            Canvas tools: from the sandbox's Tools and Resources page, not checked inside each. */}
        <div className="grid grid-cols-2 gap-3 my-2">
          <img
            src="20261106-beyond_alt_text/test-specimens/schematic-led-pot-switch.png"
            alt="Circuit schematic: one loop from a 9 volt battery through an open switch, a 10 kilohm potentiometer with its wiper tied to one end, a 330 ohm resistor and an LED, back to the battery."
            className="rounded border border-line w-full h-32 object-contain bg-white"
          />
          <img
            src="20261106-beyond_alt_text/test-specimens/er-diagram-enrollment.png"
            alt="Entity diagram: student and course each connect to enrollment, exactly one to one or many. Instructor connects to course, exactly one to zero or many."
            className="rounded border border-line w-full h-32 object-contain bg-white"
          />
        </div>

        <table className="w-full text-xs text-ink border-collapse">
          <caption className="sr-only">Five kinds of diagram, the accessible form for each, and each tool's score against an answer key.</caption>
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th scope="col" className="py-1 pr-2">Diagram</th>
              <th scope="col" className="py-1 pr-2">Accessible form</th>
              <th scope="col" className="py-1 pr-2 text-right">GPT-6 Astra</th>
              <th scope="col" className="py-1 pr-2 text-right">Gemini Thinking</th>
              <th scope="col" className="py-1 pr-2 text-right">Copilot Think deeper</th>
              <th scope="col" className="py-1 text-right">Ally Auto-generate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Flow chart (W3C alt text tree)", "Nested list: each decision, each branch", "15/15", "15/15", "Not run", "Not run"],
              ["Circuit schematic", "Walk the loop, or a netlist", "7/7", "7/7", "6/7", "3/7"],
              ["Database entity diagram", "Tables, then each relationship", "7/7", "6/7", "7/7", "1/7"],
              ["Supply and demand", "The curves, where they cross; you check", "7/7", "7/7", "6/7", "4/7"],
              ["Choropleth map", "The table behind the map", "10/10", "10/10", "10/10", "1/10"],
            ].map(([kind, form, astra, gemini, copilot, ally]) => (
              <tr key={kind} className="border-b border-line">
                <th scope="row" className="py-1 pr-2 text-left font-bold">{kind}</th>
                <td className="py-1 pr-2">{form}</td>
                <td className="py-1 pr-2 text-right">{astra}</td>
                <td className="py-1 pr-2 text-right">{gemini}</td>
                <td className="py-1 pr-2 text-right">{copilot}</td>
                <td className="py-1 text-right">{ally}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Note>
          Ally's Auto-generate writes one sentence. On the map: “eight labeled regions (A–H) shaded in
          four colors”, and no region's value. Its score checks that a description exists: our algebra
          page gets 100% with no math in it. Clean, labelled diagrams, one run each.
        </Note>
      </SlideShell>
    ),
  },

  // ── 12: TWO EXAMPLES ──
  // Added November 5, 2026 (Rick: "a slide of 2 examples following slide 10"). The two misses behind
  // slide 10's grid, one per tool. Gemini's line and Copilot's sentence are from their answers:
  // recordings/diagram-tests.md. Crops of test-specimens/ drawn for the test.
  {
    label: "Two Examples",
    content: (
      <SlideShell time="2 min">
        <Heading sub="Diagrams">The AI Needs an Expert to Check Its Work</Heading>
        <div className="grid grid-cols-2 gap-6 my-3">
          <div>
            <p className="font-bold text-ink mb-2">Gemini Thinking: invented a field</p>
            <img
              src="20261106-beyond_alt_text/test-specimens/crop-er-course.png"
              alt="The COURSE table on the entity diagram. Its fields are course_id, title and instructor_id. There is no student_id."
              className="rounded border border-line w-full h-40 object-contain bg-white"
            />
            <p className="text-sm text-ink mt-2">It wrote <code>COURSE(student_id is not PK, …)</code></p>
            <p className="text-sm text-ink mt-1">COURSE has no <code>student_id</code>. Nothing marks the line as a doubt.</p>
          </div>
          <div>
            <p className="font-bold text-ink mb-2">Copilot Think deeper: left out a detail</p>
            <img
              src="20261106-beyond_alt_text/test-specimens/crop-schematic-led.png"
              alt="The LED on the schematic, drawn with its triangle pointing down, so the anode faces the resistor and the cathode faces the battery's minus side."
              className="rounded border border-line w-full h-40 object-contain bg-white"
            />
            <p className="text-sm text-ink mt-2">It wrote “I have not assigned names such as ‘anode’ or ‘cathode’”</p>
            <p className="text-sm text-ink mt-1">An LED only lights one way round, so the listener needs this. But Copilot marked it unsure.</p>
          </div>
        </div>
        <Note>Only the page or the person who knows the field can catch the first. The second tells you where to look.</Note>
      </SlideShell>
    ),
  },

  // ── 13: ASK FOR ACCURACY ──
  // Rebuilt November 5, 2026 (Rick: "Asking for accuracy and you get solutions", the old GIF
  // was hard to follow). Printed notes with deliberate mistakes, key written first, one scored
  // run per cell: recordings/answers-instead-tests.md. The picture is Gemini's real answer to
  // "Make this accessible." History made no visible difference: clip10-history-matrix.md.
  {
    label: "Ask for Accuracy",
    content: (
      <SlideShell time="2 min">
        <Heading sub="The Prompt">Ask for Accuracy, Get Solutions</Heading>
        <div className="grid grid-cols-2 gap-3 my-2">
          <figure>
            <figcaption className="text-xs font-bold mb-1">The page: mistakes on purpose, one blank</figcaption>
            <img
              src="20261106-beyond_alt_text/test-specimens/worked-notes-errors.png"
              alt="Printed class notes. Example 1 solves 2x + 6 = 14 with 2x = 20 and x = 10. Example 2: x squared times x cubed equals x to the sixth. Example 3: 3 times x + 2 equals 3x + 2. Example 4: f of 2 equals a blank line."
              className="rounded border border-line w-full"
              style={{ maxHeight: "24vh", objectFit: "contain", objectPosition: "left top" }}
            />
          </figure>
          <figure>
            <figcaption className="text-xs font-bold mb-1">Gemini, “Make this accessible.”: a picture of the answer key</figcaption>
            <img
              src="20261106-beyond_alt_text/recordings/outputs/worked-notes-gemini-accessible.png"
              alt="An image, not text. The same notes redrawn with the mistakes replaced: 2x = 8, x = 4, x to the fifth, 3x + 6, added rules, and f of 2 filled in as 5."
              className="rounded border border-line w-full"
              style={{ maxHeight: "24vh", objectFit: "contain", objectPosition: "left top" }}
            />
          </figure>
        </div>
        <table className="w-full text-xs text-ink border-collapse my-2">
          <caption className="sr-only">What three models did with the page under four prompts.</caption>
          <thead>
            <tr className="border-b-2 border-ink text-left">
              <th scope="col" className="py-1 pr-2">Prompt</th>
              <th scope="col" className="py-1 pr-2">GPT-6 Astra</th>
              <th scope="col" className="py-1 pr-2">Gemini Thinking</th>
              <th scope="col" className="py-1">Copilot Think deeper</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Transcribe this accurately.", "Kept all", "Kept all", "Kept all", false],
              ["Make this accessible.", "Kept, added answers", "Solved, as a picture", "Solved", true],
              ["Make this accessible and accurate.", "Solved, no note", "Solved", "Solved, as a picture, new error", true],
              ["The work-session prompt", "Kept all", "Kept all", "Kept all", false],
            ].map(([prompt, astra, gemini, copilot, bad]) => (
              <tr key={prompt} className={`border-b border-line ${bad ? "bg-blush" : ""}`}>
                <th scope="row" className="py-1 pr-2 text-left font-bold">{prompt}</th>
                <td className="py-1 pr-2">{astra}</td>
                <td className="py-1 pr-2">{gemini}</td>
                <td className="py-1">{copilot}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="uoes-sub">
          The cause was the wording, not the model. Accurate about the copy is safe; accurate about the page gets it corrected.
        </p>
      </SlideShell>
    ),
  },

  // ── 13b: THE SKILL ──
  // Rick, Nov 6, 2026: the skill should be interesting in itself, because it writes down
  // the lessons we learned. One rule per lesson from this deck; the full text is SKILL.md.
  // Install how-to for Gemini, Copilot, ChatGPT and Claude: notation-access/README.md.
  {
    label: "The Skill",
    content: (
      <SlideShell time="3 min">
        <Heading sub="Take It With You">What We Learned, Written Down</Heading>
        <Lede>
          The notation-access skill is today's lessons as rules an AI follows on every page you give it.
        </Lede>
        <CardGrid cols={3}>
          <SectionCard title="Transcribe, never solve" icon="✍️" accent>
            Mistakes and blanks stay as they are. A planted error is the exercise.
          </SectionCard>
          <SectionCard title="Keep your conventions" icon="📐">
            Your words, your symbols, your decimal commas. Not the version the model sees most.
          </SectionCard>
          <SectionCard title="Mark what it can't read" icon="❓">
            An [unsure] flag at the symbol, because guessing is worst on specialized material.
          </SectionCard>
          <SectionCard title="Describe, don't conclude" icon="🗺️">
            For a diagram: what is there and how it connects, not what it proves.
          </SectionCard>
          <SectionCard title="Answer in text, say what colour means" icon="🎨">
            Never a picture of a cleaned-up page. Meaning never rests on colour alone.
          </SectionCard>
          <SectionCard title="Built for Canvas" icon="🧩">
            MathML with LaTeX inside, inline styles only, and a Check these list for you.
          </SectionCard>
        </CardGrid>
        <p className="text-sm text-slate mt-4">
          Upload it, or paste it into the chat: it is one text file, about 6,000 characters.
          Steps for Gemini, Copilot, ChatGPT and Claude are on the resources slide.
        </p>
      </SlideShell>
    ),
  },

  // ── 14: WHICH MODEL ──
  // Added November 5, 2026 (Rick: a matrix or leaderboard of models and topics, then what to
  // recommend). Page 13 scores from recordings/tier-comparison.md, every miss checked by eye.
  // Copilot's runs used 2 pieces, its limit; the others 4. Lecture from
  // recordings/gursoy-lecture-comparison.md: only Astra and Gemini Thinking ran it, and both
  // made the same P_ij(n) error (slide 9). A one-line gap in one run is not a real ranking,
  // so say so out loud. "Adds steps": wrote things like "final answer" or "we get".
  {
    label: "Which Model",
    content: (
      <SlideShell time="3 min">
        <Heading sub="Recommendations">Which Model Should You Use?</Heading>
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

  // ── 15: WORK SESSION ──
  {
    label: "Work Session",
    content: (
      <SlideShell time="30 min">
        {/* Rick, November 5, 2026: a group workshop for the last 30 minutes, on examples the room
            brings, not individual work. The request goes out beforehand: zoom-kit.md. */}
        <Heading sub="Workshop">Let's Work Your Examples</Heading>
        <Lede>What you brought and posted in chat: we test it together.</Lede>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 items-start">
          <div className="space-y-4">
            <PipelineStep num="1" title="Run the prompt">On one page from your examples.</PipelineStep>
            <PipelineStep num="2" title="Verify">Whoever reads the notation: where did it guess? Did it change anything?</PipelineStep>
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
            the rest silently; Copilot Chat (Basic) took 2 images. If nobody brings anything,
            Rick runs the sandbox's "After: Handwritten Algebra Worked Problems". */}
        <Note>
          Follow along in Gemini or Copilot on your NetID: switch to <strong>Thinking</strong> or{' '}
          <strong>Think deeper</strong>. Send a page at a time: Gemini takes up to 9 pages,
          Copilot 2 images.
        </Note>
      </SlideShell>
    ),
  },

  // ── 16: RESOURCES ──
  // Rick, November 2, 2026: every deck ends with standard useful resources. The theme's
  // ResourcesSlide puts this session's links beside the standard Rutgers set.
  // Verified November 2, 2026: NVDA is free with MathCAT built in since 2026.1; Rutgers
  // licenses Fusion (JAWS + ZoomText), and JAWS has read MathCAT since December 2024.
  // The skill links to its GitHub folder, where README.md is the how-to for Gemini,
  // Copilot, ChatGPT and Claude. (Pages turns SKILL.md into HTML; GitHub shows it as is.)
  // Gemini and ChatGPT links removed November 5: the standard column's it.rutgers.edu/ai covers
  // getting all three tools, and the Which Model slide says which model to choose.
  {
    label: "Resources",
    content: (
      <ResourcesSlide
        items={[
          { label: "What we learned testing AI", href: "https://rianders.github.io/presentations/20261106-beyond_alt_text/report.html", note: "Handwritten notes, printed notation and diagrams: the prompt, the models, page prep and Canvas" },
          { label: "The notation-access skill", href: "https://github.com/rianders/presentations/tree/main/20261106-beyond_alt_text/notation-access", note: "Today's rules, and how to add them to Gemini, Copilot, ChatGPT or Claude" },
          { label: "NVDA", href: "https://www.nvaccess.org/", note: "Free screen reader for Windows, with MathCAT built in" },
          { label: "MathCAT", href: "https://daisy.github.io/MathCAT", note: "Speech styles, braille and navigation for MathML" },
        ]}
        checked="November 3, 2026"
      />
    ),
  },

  // ── 17: CLOSING ──
  // The template's closing slide. Links live on the Resources slide now; this one is the line
  // to leave the room with, and how to reach Rick.
  {
    label: "Questions",
    content: (
      <ClosingSlide title="Questions?">
        {/* Rick, November 2, 2026: accessible also means able to read the notation, and
            students have to write it too. Any sense: sight, hearing, touch, movement. */}
        <p className="text-lg mb-4">Accessible means a student can read it and write it, with whatever senses they use.</p>
        <div className="text-ink">
          <Interact prompt="Put your questions in the chat." />
        </div>
        <div className="pt-4">
          <p className="font-bold">Rick Anderson</p>
          <p><Link onDark href="mailto:rick.anderson@uoes.rutgers.edu">rick.anderson@uoes.rutgers.edu</Link></p>
        </div>
        <div className="flex items-center gap-3 pt-3">
          <SlidesQR className="w-28" />
          <p className="text-sm">These slides</p>
        </div>
      </ClosingSlide>
    ),
  },

];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Deck slides={slides} meta="60 min content + 30 min work session" />);

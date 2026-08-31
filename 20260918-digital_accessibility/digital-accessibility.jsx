const { useState, useEffect } = React;

/* VIEW MODES ─────────────────────────────────────────────────────────────
   One view, and it is the audience's. Every word in this file is public.
   Delivery notes — run of show, demo steps, poll scripts, fallbacks — live
   in presenter-notes.md in this folder and are never rendered.

   SLIDE DEEP-LINK: ?s=8 opens on slide 8, and the URL tracks as you
   navigate, so reloading after an edit puts you back where you were.
   ───────────────────────────────────────────────────────────────────── */
const _params = new URLSearchParams(window.location.search);

/* ═══════════════════════════════════════════════════════════
   AI-ASSISTED DIGITAL ACCESSIBILITY WORKFLOWS
   Text-to-Speech, Vision, and Content Conversion
   UOES / TIIP Faculty Workshop · September 18, 2026 · 11:00–12:30
   Format: 60 min content · 30 min work session
   Pathway: Teaching and Generative AI — Competencies 1, 3

   Component vocabulary is shared with the other decks in this
   repo so the series keeps one visual language. Keep it in sync.
   Slide 3 (the deadline) is the long form of a point this series
   has made briefly before; this session is where it gets the time
   it needs.

   ── SCOPE — READ THIS BEFORE ADDING A SLIDE ─────────────────
   This session is the EVERYDAY cases: prose, photographs, ordinary
   charts, scanned text — plus the triage step (slide 6) that decides
   which of them to touch first. The HARD cases — equations, structural
   formulas, syntax trees, music notation, IPA, choropleth maps —
   belong to November 6 ("Beyond Alt Text") and must NOT be
   absorbed here. When a topic feels like it needs a specialist to
   verify the output, it is a November 6 topic. Slide 4 states this
   boundary out loud so the room knows what it is not getting today
   and comes back for it.

   ── THE SPINE ───────────────────────────────────────────────
   Every workflow in this deck is the same four beats, introduced
   on slide 5 and then re-run three times:

       SOURCE → AI PASS → VERIFY → PLACE IT IN CANVAS

   The VERIFY beat is the one that makes this a workflow instead of
   a trick, and it is the beat faculty skip. Name it every single
   time. If a segment does not have a verify beat on the slide, the
   segment is not finished.

   ── TIME BUDGET — DRAFT, NOT YET RECONCILED ─────────────────
   Tags below are provisional and have NOT been re-derived against
   a finished time-budget.md. Totals:

     Opening 4      Framing (deadline + scope) 6
     The Shape 4    Start With Ally (triage)   4
     Seg 1  Text-to-Speech     11
     Seg 2  Vision / Alt Text  14
     Seg 3  Conversion         12
     Limits 5                                  = 60

     Takeaways 2  ── drawn from the work session's 0–5 setup beat
     Hands-On work session                      = 30

   ZERO slack against a 60-minute content block, as of the Ally slide
   going in on August 28, 2026. The August session's demos each ran
   long, so this WILL need a cut, not might. The standing first cut is
   merging slides 7 and 8 (text-to-speech), which returns 4 minutes.
   Make that call before September 18, not during. See time-budget.md.

   ── DEMOS — NOT YET PLANNED ─────────────────────────────────
   Demos in this series run off a written demos.md with a prep
   checklist and a 10-second fallback for each. This deck has
   NONE of that yet, and it is the single largest open item. The
   rule carries over: if the room cannot legally use the tool on
   Monday, it is a showcase, not a demo — record it, keep it short,
   label it. See worklist.md.

   ── SHARED, RECORDED, AND CLIPPED ───────────────────────────
   Same three consequences as August:
   1. ONE VIEW, PUBLIC. Anything you would not want a registrant to
      read belongs in presenter-notes.md.
   2. EVERY SEGMENT STANDS ALONE. A clip has no "as I said earlier."
   3. NO RELATIVE TIME. Always the literal date.

   ── AN ACCESSIBILITY DECK MUST BE ACCESSIBLE ────────────────
   This is the one session where the deck itself will be inspected.
   Non-negotiable, and checked before it ships:
     · Every <img> carries real alt text, not "QR code" or "".
     · Colour is never the only carrier of meaning — the good/bad
       alt-text comparison on slide 9 uses labels AND colour.
     · The print view (&print) has to be readable in greyscale.
     · Contrast: the teal-on-teal and amber-on-amber asides ported
       from August have NOT been contrast-checked at WCAG 2.1 AA.
       Do that before September 18. It is in worklist.md.
   ═══════════════════════════════════════════════════════════ */

const RutgersLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
      <span className="text-white font-black text-sm italic">R</span>
    </div>
    <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Rutgers</span>
  </div>
);

const SlideShell = ({ tag, tagColor = "bg-red-600", children }) => (
  <div className="flex flex-col h-full min-h-[520px]">
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <RutgersLogo />
      </div>
      <span className={`text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full ${tagColor}`}>
        {tag}
      </span>
    </div>
    <div className="flex-1 overflow-auto p-6 sm:p-10">
      {children}
    </div>
    <div className="px-6 py-2 border-t border-gray-100 flex justify-between items-center">
      <span className="text-xs text-gray-400">rianders.github.io/presentations</span>
      <span className="flex items-center gap-2 text-xs text-gray-400">
        Rutgers UOES · TIIP · September 18, 2026
      </span>
    </div>
  </div>
);

const Bullet = ({ icon = "▸", children }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">{icon}</span>
    <span>{children}</span>
  </li>
);

const Tag = ({ color = "bg-blue-100 text-blue-700", children }) => (
  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>{children}</span>
);

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer"
     className="text-blue-600 font-bold hover:text-blue-800 hover:underline break-words">
    {children}
  </a>
);

const SectionCard = ({ title, icon, accent, children }) => (
  <div className={`rounded-xl p-5 ${accent ? "bg-red-600 text-white" : "bg-gray-50 border border-gray-200"}`}>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xl">{icon}</span>
      <h3 className={`font-bold text-sm uppercase tracking-wide ${accent ? "text-red-100" : "text-gray-500"}`}>{title}</h3>
    </div>
    <div className={accent ? "text-red-50" : "text-gray-700"}>{children}</div>
  </div>
);

const Note = ({ children }) => (
  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3 mt-4">
    <p className="text-xs text-amber-800">{children}</p>
  </div>
);

const DropIn = ({ label, children }) => (
  <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg px-4 py-3 mt-5">
    <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">{label}</p>
    <p className="text-sm text-red-900 italic leading-relaxed">{children}</p>
  </div>
);

const CodeBlock = ({ children }) => (
  <div className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-xs leading-relaxed overflow-x-auto my-4">
    <pre className="whitespace-pre-wrap">{children}</pre>
  </div>
);

const PipelineStep = ({ num, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-sm flex-shrink-0 mt-0.5">{num}</div>
    <div>
      <p className="font-bold text-gray-800 text-sm">{title}</p>
      <p className="text-xs text-gray-600 mt-1">{children}</p>
    </div>
  </div>
);

/* Zoom poll cue. Polls CANNOT be made on the fly — they must be built in the
   Zoom web portal before the meeting starts. Poll scripts: presenter-notes.md. */
const Poll = ({ question, options = [], questions, anonymous = false }) => {
  const items = questions || [{ question, options }];
  return (
    <div className="border-2 border-blue-400 bg-blue-50 rounded-xl p-4 mb-4">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
          Zoom Poll
        </span>
        {items.length > 1 && (
          <span className="bg-white text-blue-700 border border-blue-300 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
            {items.length} questions · one launch
          </span>
        )}
        {anonymous && (
          <span className="bg-white text-blue-700 border border-blue-300 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
            Anonymous
          </span>
        )}
      </div>
      {items.map((it, qi) => (
        <div key={qi} className={qi > 0 ? "mt-3 pt-3 border-t border-blue-200" : ""}>
          <p className="text-sm font-bold text-gray-900 mb-2">
            {items.length > 1 && <span className="text-blue-600">Q{qi + 1}. </span>}
            {it.question}
          </p>
          <ul className="space-y-1">
            {(it.options || []).map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-500 font-bold flex-shrink-0">○</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

/* Non-poll audience moment — chat waterfall, reactions, unmute. */
const Interact = ({ kind = "Shared doc", prompt }) => (
  <div className="border-2 border-teal-400 bg-teal-50 rounded-xl p-4 mb-4">
    <span className="bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
      {kind}
    </span>
    <p className="text-sm font-bold text-gray-900 mt-2">{prompt}</p>
  </div>
);

const Lede = ({ children }) => (
  <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-5">{children}</p>
);

const Heading = ({ children }) => (
  <>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">{children}</h1>
    <div className="w-16 h-1 bg-red-600 rounded mb-4" />
  </>
);

/* The four beats every workflow in this deck runs through. Rendered on the
   segment slides so the room sees the same shape three times and can name it
   by the third. Audience-facing, not a note. */
const VerifyBeat = ({ children }) => (
  <div className="bg-gray-900 rounded-xl px-5 py-4 mt-4">
    <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">
      Step 3 · Verify — the step everyone skips
    </p>
    <p className="text-sm text-gray-100 leading-relaxed">{children}</p>
  </div>
);

// ── SLIDES ─────────────────────────────────────────────────

const slides = [

  // ── 1: TITLE ──
  {
    label: "Title",
    content: (
      <SlideShell tag="Faculty Workshop 2026–27" tagColor="bg-red-600">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between h-full min-h-[380px]">
          <div className="flex flex-col items-start justify-center flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Rutgers UOES · TIIP Partnership</p>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">AI-Assisted</h1>
            <h1 className="text-4xl sm:text-5xl font-black text-red-600 leading-tight mb-2">Accessibility Workflows</h1>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-4">Text-to-speech, vision, and content conversion</h2>
            <div className="w-20 h-1 bg-red-600 rounded mb-5" />
            <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-5">
              Repeatable routines you can run yourself: multilingual audio for readings and
              announcements, alt text and figure descriptions that actually say something, and
              scanned PDFs turned into Canvas content people can read. Every one of them ends
              with a human check.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Tag color="bg-blue-100 text-blue-700">Text-to-Speech</Tag>
              <Tag color="bg-purple-100 text-purple-700">AI Vision</Tag>
              <Tag color="bg-emerald-100 text-emerald-700">PDF Conversion</Tag>
              <Tag color="bg-amber-100 text-amber-800">Deadline: April 26, 2027</Tag>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
              <p className="text-xs text-gray-500">Director of Emerging Technology · Rutgers UOES</p>
              <p className="text-xs text-gray-400">September 18, 2026 · 11:00 am – 12:30 pm · Zoom</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 2: WHO I AM ──
  // PURPOSE: standing. Keep to ~45 seconds — this is the least important
  // slide in the deck and the deadline slide matters far more.
  {
    label: "Who I Am",
    content: (
      <SlideShell tag="Opening · 2 min" tagColor="bg-red-700">
        <Heading>Why Me, On This</Heading>
        <Lede>
          Short version, because the clock is the point of this session.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="Role" icon="🏛️">
            <p className="text-sm">
              Director of Emerging Technology, Office of University Online Education
              Services. I evaluate these tools for Rutgers and then have to say which
              ones faculty should actually use.
            </p>
          </SectionCard>
          <SectionCard title="This series" icon="📚">
            <p className="text-sm">
              Sixth session of the 2026–27 Teaching with GenAI series. Today and
              November 6 are the two that are entirely about accessibility.
            </p>
          </SectionCard>
          <SectionCard title="The bias I'll admit to" icon="⚖️" accent={true}>
            <p className="text-sm">
              I would rather show you a routine you can repeat next Tuesday than a
              demo that only works when I run it.
            </p>
          </SectionCard>
        </div>

        <Interact kind="Zoom chat" prompt="One word in chat: what's the material in your course you've been avoiding? Scanned readings, figures, slide decks, video?" />
      </SlideShell>
    ),
  },

  // ── 3: THE DEADLINE ──
  // Direct port of Aug 21 slide 5 ("Accessibility Is Not Optional"), expanded.
  // That deck used it as a one-slide guiding principle; here it is the framing
  // for the whole session, so it carries the arithmetic the August one didn't.
  {
    label: "The Deadline",
    content: (
      <SlideShell tag="Framing · 4 min" tagColor="bg-teal-700">
        <Heading>April 26, 2027</Heading>

        <div className="bg-red-600 text-white rounded-xl p-5 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-red-200 mb-1">Deadline — already extended once</p>
          <p className="text-lg font-bold mb-1">Course materials must meet WCAG 2.1 Level AA</p>
          <p className="text-sm text-red-100">
            Federal digital accessibility requirements. Not a recommendation — a compliance
            requirement, and the extension has already been spent.
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-800">
            <strong>From today, that is two semesters.</strong> This fall and next spring.
            And the material that takes longest to fix is the material most courses have
            the most of — scanned readings, figure-heavy slides, PDFs nobody has the source
            file for any more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="The University position" icon="🏛️">
            <p className="text-sm mb-2">
              Rutgers is committed to making all digital content accessible to everyone,
              including people with disabilities.
            </p>
            <p className="text-sm">
              <Link href="https://academicaffairs.rutgers.edu/digital-accessibility">academicaffairs.rutgers.edu/digital-accessibility ↗</Link>
            </p>
          </SectionCard>
          <SectionCard title="Where AI comes in" icon="🤖" accent={true}>
            <p className="text-sm mb-2">
              For material that is hard or impossible to fix by hand, these tools make it
              <strong> possible to attempt at all</strong>.
            </p>
            <p className="text-sm">
              Not instant. Some of it still takes real time. But "too hard to even start"
              has stopped being the honest answer, and that is the change that matters.
            </p>
          </SectionCard>
        </div>

        <DropIn label="The reframe">
          You are not trying to make your whole course accessible today. You are trying to
          get a routine that works on one document, so the other forty are a scheduling
          problem instead of a research problem.
        </DropIn>
      </SlideShell>
    ),
  },

  // ── 4: WHAT THIS IS AND ISN'T ──
  // PURPOSE: draw the boundary against November 6 out loud. Without this slide
  // the room asks equation questions for twenty minutes and the segments die.
  {
    label: "Scope",
    content: (
      <SlideShell tag="Framing · 2 min" tagColor="bg-teal-700">
        <Heading>What Today Covers — and What It Doesn't</Heading>
        <Lede>
          Accessibility work splits cleanly into the cases a careful non-specialist can
          verify, and the cases that need someone who reads the notation. Today is the
          first kind. That's most of your material.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-3">Today · September 18</p>
            <ul className="space-y-2">
              <Bullet icon="✓">Finding out what’s already broken, using Ally — it’s in your Canvas now</Bullet>
              <Bullet icon="✓">Readings and announcements as audio, including in other languages</Bullet>
              <Bullet icon="✓">Alt text for photographs, screenshots, and ordinary charts</Bullet>
              <Bullet icon="✓">Scanned PDFs and image-heavy slides into real Canvas content</Bullet>
              <Bullet icon="✓">The verification step for each — what to check, and how fast</Bullet>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-3">November 6 · Beyond Alt Text</p>
            <ul className="space-y-2">
              <Bullet icon="→">Equations, structural formulas, syntax trees</Bullet>
              <Bullet icon="→">Music notation, IPA transcription, choropleth maps</Bullet>
              <Bullet icon="→">Flow charts and decision trees as narrated walkthroughs</Bullet>
              <Bullet icon="→">Live screen-reader demonstrations</Bullet>
            </ul>
          </div>
        </div>

        <Note>
          If you brought something from the right-hand column — bring it back on November 6.
          It is a genuinely harder problem and it deserves the session that's built for it.
        </Note>
      </SlideShell>
    ),
  },

  // ── 5: THE SHAPE OF EVERY WORKFLOW ──
  // THE SPINE. Everything after this is this slide, three times.
  {
    label: "The Shape",
    content: (
      <SlideShell tag="Framing · 4 min" tagColor="bg-gray-700">
        <Heading>Every Workflow Today Is the Same Four Beats</Heading>
        <Lede>
          This is the whole session in one slide. Three different problems, one shape.
          By the third time through you should be able to say the beats before I do.
        </Lede>

        <div className="space-y-4 mb-4">
          <PipelineStep num="1" title="Source — get the material into a form the tool can read">
            The step people underestimate. A clean scan beats a clever prompt, and a
            PDF that was born digital is a different problem from one that was photographed.
          </PipelineStep>
          <PipelineStep num="2" title="AI pass — one specific instruction, not 'make this accessible'">
            The quality of what comes back tracks how much context you gave: what the
            material is, who reads it, and what it is doing in your course.
          </PipelineStep>
          <PipelineStep num="3" title="Verify — a human check, scoped so it takes seconds not hours">
            Every segment today names exactly what to look at. You are not re-reading
            the output; you are checking the two or three things this tool gets wrong.
          </PipelineStep>
          <PipelineStep num="4" title="Place it — into Canvas, where it does someone some good">
            An accessible file on your desktop has helped nobody. The last beat is
            always where it lands and how a student reaches it.
          </PipelineStep>
        </div>

        <DropIn label="Why this matters more than any tool I show you">
          Tools get renamed, repriced, and discontinued — three of the ones in the August
          session changed names this year. The shape survives all of that. Learn the shape
          and you can swap the tool.
        </DropIn>
      </SlideShell>
    ),
  },

  // ── 6: START WITH ALLY ──
  // PURPOSE: beat zero. Every slide after this one assumes the document has already
  // been chosen — this is the slide that says how you choose it. Ally is also the
  // only tool named in this deck that needs no entitlement caveat: it is already
  // running in every Canvas course and nobody had to buy it.
  //
  // The "Auto-generate description" button is the SAME failure as the middle tier
  // on the alt-text slide (10). Make that connection out loud — it is the moment
  // the room understands why a green score is not the goal.
  //
  // ACCESSIBILITY OF THIS SLIDE: the screenshot's alt text is written out in full
  // and is worth reading aloud as a specimen. Do not shorten it to "Ally panel".
  {
    label: "Start With Ally",
    content: (
      <SlideShell tag="Before the Four Beats · 4 min" tagColor="bg-gray-700">
        <Heading>First, Find Out What's Actually Broken</Heading>
        <Lede>
          Every slide after this one assumes you have already picked a document. This is
          how you pick. Ally has been running inside your Canvas course the whole time —
          you didn't install it, and most people have never opened it.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-4">
          <div className="flex flex-col items-center">
            <img
              src="20260918-digital_accessibility/ally-score-panel.png"
              alt="Ally's accessibility panel in Canvas, scoring a file named “unnamed (3).png” at 19 percent. It reports “This image is missing a description” and offers a field to add one, a button labelled “Auto-generate description”, and a separate option to indicate the image is decorative."
              className="rounded-lg border border-gray-200 shadow-sm w-full max-w-[250px]"
              width="250"
            />
            <p className="text-xs text-gray-500 italic text-center mt-2 max-w-[250px]">
              Note the filename. The images that score worst are usually the ones nobody
              ever named.
            </p>
          </div>

          <div className="space-y-3">
            <SectionCard title="What the score is for" icon="📊">
              <p className="text-sm">
                A triage number, not a grade. Ally scores every file in your course and
                tells you <em>why</em> each one failed — so what you get is a ranked list
                instead of a feeling.
              </p>
            </SectionCard>
            <SectionCard title="The button that looks like the answer" icon="⚠️" accent={true}>
              <p className="text-sm">
                “Auto-generate description” will fill that field with something, and the
                score will go green. Green means the field is populated. It does not mean
                a student can use what is in it.
              </p>
            </SectionCard>
            <SectionCard title="The one it gets exactly right" icon="✓">
              <p className="text-sm">
                “Indicate image is decorative” is genuinely useful and badly underused.
                Most course pages carry images that should be marked decorative rather
                than described.
              </p>
            </SectionCard>
          </div>
        </div>

        <DropIn label="Why this comes before the workflows">
          The most common mistake in this work is not doing it badly. It is doing it
          thoroughly, to the file nobody opens. Two minutes of triage beats an hour spent
          converting the wrong chapter.
        </DropIn>
      </SlideShell>
    ),
  },

  // ── 7: TEXT-TO-SPEECH ──
  // PURPOSE: reframe the segment. The naive version of this slide is "here is how to
  // make audio." That version is wrong. For the most common need — a student who wants
  // the reading in their ears — Ally is ALREADY generating an MP3, in every Canvas
  // course, whether or not the instructor knows it. So the faculty job is not making
  // audio. It is making the source worth listening to, which is beat one of the spine.
  //
  // Three lanes, ranked by what you can rely on institutionally:
  //   1 INSTITUTIONAL (Ally, SensusAccess) — Rutgers-licensed, supported, no caveat
  //   2 AUTHORED      (Gemini Notebook)    — free to every NetID, you own the output
  //   3 LOCAL         (browser model)      — no account, nothing leaves the laptop
  // The full matrix — faculty effort, entitlement tier, who starts it, what you verify,
  // and the tools this deck deliberately skips — is in tts-decision-matrix.md.
  // Do NOT put that table on a slide. Reason is in that file.
  //
  // ENTITLEMENT DISCIPLINE — every claim here was verified August 28, 2026. Ally is a
  // Rutgers enterprise license present in all Rutgers courses; SensusAccess is
  // Rutgers-provided to faculty, staff, students and alumni. Do NOT add a multilingual
  // AUDIO claim: Ally's "translated version" is text, and the translate-then-speak
  // chain is unverified. See worklist item 26.
  {
    label: "Text-to-Speech",
    content: (
      <SlideShell tag="Segment 1 · Text-to-Speech · 7 min" tagColor="bg-blue-700">
        <Heading>The Audio Is Already Being Made</Heading>
        <Lede>
          Ally has been generating an MP3 of every file in your Canvas course this whole
          time. Nobody turned it on and nobody had to buy it. So the question is not how
          you make audio — it is whether the audio already being made is worth listening to.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="1 · Institutional" icon="🏛️">
            <p className="text-sm">
              Ally hands every student an audio version of your file — alongside ePub,
              tagged PDF and braille — on their own initiative. <strong>SensusAccess</strong> covers
              what isn't in Canvas. Licensed by Rutgers. Your effort: none.
            </p>
          </SectionCard>
          <SectionCard title="2 · Authored" icon="🎙️">
            <p className="text-sm">
              Gemini Notebook builds an audio <em>companion</em> from your sources — and you can
              steer it toward your own learning objectives. Free with your NetID. You make
              this one, so you own what it says.
            </p>
          </SectionCard>
          <SectionCard title="3 · Local" icon="💻" accent={true}>
            <p className="text-sm">
              A speech model small enough to run inside a browser tab. No account, no
              upload, nothing leaves your laptop. This is the lane for material you are
              not allowed to put in a cloud tool.
            </p>
          </SectionCard>
        </div>

        <DropIn label="The trap in lane 2">
          A companion is not a substitute for the reading. Giving the student who needs
          audio a generated discussion <em>about</em> the article, while everyone else gets the
          article, is not equal access. It is the “Auto-generate description” button
          again, wearing a better costume.
        </DropIn>

        <VerifyBeat>
          What you check depends on the lane. <strong>Lanes 1 and 3 fail at pronunciation</strong> —
          don't listen to the whole thing, listen to the first thirty seconds and then skip
          to any proper noun, acronym, or number. <strong>Lane 2 fails at fidelity</strong> — it
          will pronounce every word perfectly and still tell your students something you
          never said.
        </VerifyBeat>
      </SlideShell>
    ),
  },

  // ── 8: TTS — WHAT GOES WRONG ──
  // PURPOSE: the verify beat, expanded. Four audible failures, then the fifth.
  //
  // THE NOTATION CARD IS THE POINT OF THIS SLIDE. The first four failures announce
  // themselves — a mangled name still sounds like a mangled name, and the listener
  // knows something went past. Notation fails SILENTLY: fluent, confident, wrong.
  // That difference is why notation is a separate session and not a longer card.
  //
  // It also does double duty as the honest handoff to November 6. Notation is easy to
  // gesture at and hard to deliver, so name it here as real, hard, and the whole of
  // the next session — a specific promise you intend to keep, made once.
  //
  // SCOPE GUARD: name notation, do not teach it. No MathML, no LaTeX, no equation
  // editor on this slide. The moment this card grows examples it has annexed
  // November 6 and slide 4's boundary is a lie.
  {
    label: "TTS Verification",
    content: (
      <SlideShell tag="Segment 1 · Text-to-Speech · 4 min" tagColor="bg-blue-700">
        <Heading>What Goes Wrong</Heading>
        <Lede>
          Predictable failures, which is good news — predictable means checkable in under a
          minute instead of by listening to forty minutes of audio. Four of these you can
          hear. The fifth one you cannot, and that is what makes it dangerous.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <SectionCard title="Names and terms" icon="🗣️">
            <p className="text-sm">
              Author names, place names, and any term your field pronounces differently than
              it looks. A reading list is almost entirely made of these.
            </p>
          </SectionCard>
          <SectionCard title="Acronyms and numbers" icon="🔢">
            <p className="text-sm">
              Read as words when they should be spelled out, or the reverse. Dates, ranges,
              and anything hyphenated are reliably wrong.
            </p>
          </SectionCard>
          <SectionCard title="Structure it can't see" icon="📄">
            <p className="text-sm">
              Footnotes, captions, and headers get read inline, mid-sentence, unless you
              strip them out first. Fix this in the source, not the audio.
            </p>
          </SectionCard>
          <SectionCard title="Language switches" icon="🌍">
            <p className="text-sm">
              A quoted phrase in another language usually gets read with the wrong phonetics.
              Worth catching in anything comparative or in translation.
            </p>
          </SectionCard>
        </div>

        <SectionCard title="The fifth one · Notation" icon="⚠️" accent={true}>
          <p className="text-sm">
            <strong>x² + y²</strong> read aloud as “x two plus y two” is fluent, confident, and
            false. The other four failures announce themselves — a mangled name still sounds
            mangled, and the listener knows something went by. This one doesn't. A student
            who can't see the page has no way to know they just received different
            mathematics than everyone else. Equations, chemical structures, logic, IPA,
            music — most fields have some. <strong>That is the whole of November 6.</strong>
          </p>
        </SectionCard>

        <Note>
          The first four are cheap to fix and stay fixed: most tools let you correct a
          pronunciation once and reuse it. Doing that for the twenty names in your syllabus
          is a one-time cost every later file inherits.
        </Note>
      </SlideShell>
    ),
  },

  // ── 9: AI VISION / ALT TEXT ──
  {
    label: "AI Vision",
    content: (
      <SlideShell tag="Segment 2 · Vision · 5 min" tagColor="bg-purple-700">
        <Heading>Alt Text That Actually Says Something</Heading>
        <Lede>
          Most alt text in most courses is either missing or useless — "chart.png",
          "image of a graph". AI vision is genuinely good at the first draft here, and
          genuinely bad at knowing what the image is <em>for</em>. That gap is your job.
        </Lede>

        <div className="space-y-4 mb-4">
          <PipelineStep num="1" title="Source">
            The image, plus the paragraph around it. Context is what separates a
            description from a useful description.
          </PipelineStep>
          <PipelineStep num="2" title="AI pass">
            Ask for the description, and tell it what the image is doing in the course —
            see the prompt on the next slide.
          </PipelineStep>
          <PipelineStep num="3" title="Verify">
            One question: could a student who cannot see this image answer the question
            it was put there to help them answer?
          </PipelineStep>
          <PipelineStep num="4" title="Place it">
            Into the alt text field in Canvas — not into the caption, and not into the
            body text where sighted students read it twice.
          </PipelineStep>
        </div>

        <DropIn label="The distinction worth holding onto">
          Alt text is not a description of the image. It is a replacement for it. Those
          produce different sentences, and the difference is the whole skill.
        </DropIn>
      </SlideShell>
    ),
  },

  // ── 10: ALT TEXT — WORKED EXAMPLE ──
  // ACCESSIBILITY OF THIS SLIDE: the good/bad comparison must be labelled in
  // text, not signalled by red/green alone. It is, deliberately. Do not
  // "simplify" it back to colour-only.
  {
    label: "Alt Text Example",
    content: (
      <SlideShell tag="Segment 2 · Vision · 5 min" tagColor="bg-purple-700">
        <Heading>The Same Chart, Three Ways</Heading>

        <div className="space-y-3 mb-4">
          <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-lg px-4 py-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Not acceptable — no information</p>
            <p className="text-sm text-gray-700 font-mono">"chart.png"</p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg px-4 py-3">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-1">Passes a checker — still useless</p>
            <p className="text-sm text-gray-700 font-mono">"A bar chart showing enrollment data over time"</p>
            <p className="text-xs text-amber-800 mt-2">
              An automated accessibility scan marks this green. A student still cannot
              answer a single question about it.
            </p>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg px-4 py-3">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">Actually works — replaces the image</p>
            <p className="text-sm text-gray-700 font-mono">
              "Bar chart, 2019–2026. Enrollment holds near 400 through 2021, drops sharply
              to 240 in 2022, then recovers to 380 by 2026 — ending just below where it started."
            </p>
            <p className="text-xs text-emerald-800 mt-2">
              Names the trend, gives the numbers that carry it, and states the conclusion
              the figure exists to support.
            </p>
          </div>
        </div>

        <CodeBlock>{`Write alt text for this image.

Context: it appears in [course], in a section about [topic].
Students are meant to take away [the specific point].

Replace the image, don't describe it. Give the numbers or
details a student would need to follow the argument. Skip
"image of" and "chart showing". Under 150 characters if the
image is decorative, longer if it carries data.`}</CodeBlock>

        <Note>
          Decorative images are the exception that trips people up: an image that carries
          no information should have <em>empty</em> alt text, so a screen reader skips it
          entirely. Describing your decorative header photo makes the page worse, not better.
        </Note>
      </SlideShell>
    ),
  },

  // ── 11: VISION — WHAT IT GETS WRONG ──
  {
    label: "Vision Verification",
    content: (
      <SlideShell tag="Segment 2 · Vision · 4 min" tagColor="bg-purple-700">
        <Heading>Where AI Vision Fails</Heading>
        <Lede>
          It fails confidently, in fluent prose, which is exactly what makes the verify
          beat non-negotiable here. These are the four to check for.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="It invents plausible numbers" icon="⚠️">
            <p className="text-sm">
              Axis values it can't quite resolve get filled in with something reasonable.
              Always spot-check two or three data points against the figure yourself.
            </p>
          </SectionCard>
          <SectionCard title="It describes, then stops" icon="🔍">
            <p className="text-sm">
              You get what is in the image but not what it means. The disciplinary point —
              why this figure is in this week — has to come from you.
            </p>
          </SectionCard>
          <SectionCard title="It misses the emphasis" icon="🎯">
            <p className="text-sm">
              A figure usually has one thing it wants you to notice. AI weights everything
              evenly and buries the point in the middle of a list.
            </p>
          </SectionCard>
          <SectionCard title="It over-writes" icon="📏">
            <p className="text-sm">
              Three hundred words where forty would do. A screen-reader user cannot skim
              your alt text; length is a real cost to them, not just untidiness.
            </p>
          </SectionCard>
        </div>

        <VerifyBeat>
          Two checks, both fast. <strong>One:</strong> pick two numbers from the description
          and find them in the image. <strong>Two:</strong> read the description alone and
          ask whether it makes the point the figure is there to make. If it doesn't, add
          that sentence yourself — that's the part that was always going to be yours.
        </VerifyBeat>
      </SlideShell>
    ),
  },

  // ── 12: SCANNED PDFs ──
  {
    label: "PDF Conversion",
    content: (
      <SlideShell tag="Segment 3 · Conversion · 6 min" tagColor="bg-emerald-700">
        <Heading>The Scanned PDF Problem</Heading>
        <Lede>
          Every course has them: a photocopied chapter, scanned crooked in 2011, that a
          screen reader sees as one large photograph of nothing. This used to be where
          accessibility work stopped.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="Why it's hard" icon="📕">
            <p className="text-sm mb-2">
              There is no text in the file. Not badly-tagged text — none. Selecting,
              searching, and reading aloud all fail because there is nothing there to find.
            </p>
            <p className="text-sm">
              Older OCR handled clean typewritten pages and fell apart on columns,
              tables, marginalia, and anything skewed.
            </p>
          </SectionCard>
          <SectionCard title="What changed" icon="✨" accent={true}>
            <p className="text-sm mb-2">
              Current vision models read multi-column layouts, keep tables as tables, and
              preserve heading structure — the thing that makes a document navigable
              rather than just readable.
            </p>
            <p className="text-sm">
              They also, unlike OCR, silently "fix" text they find hard to read. Which is
              the whole reason for step 3.
            </p>
          </SectionCard>
        </div>

        <Note>
          Before you convert anything: check whether an accessible version already exists.
          The library may license the same chapter as tagged HTML, and ten minutes of
          searching beats an hour of conversion and verification. Ask your subject librarian.
        </Note>
      </SlideShell>
    ),
  },

  // ── 13: THE CONVERSION ROUND TRIP ──
  {
    label: "The Round Trip",
    content: (
      <SlideShell tag="Segment 3 · Conversion · 6 min" tagColor="bg-emerald-700">
        <Heading>Scan to Canvas Page</Heading>
        <Lede>
          The same four beats. This is the longest of the three workflows and the one
          where the verify step costs the most — budget for that honestly.
        </Lede>

        <div className="space-y-4 mb-4">
          <PipelineStep num="1" title="Source — improve the scan before you convert it">
            Straighten it, drop the black borders, and split double-page spreads into
            single pages. Five minutes here saves more than five minutes later.
          </PipelineStep>
          <PipelineStep num="2" title="AI pass — ask for structure, not just text">
            Request headings as headings, tables as tables, and a note wherever the source
            was unreadable. That last instruction is what makes step 3 possible.
          </PipelineStep>
          <PipelineStep num="3" title="Verify — proper nouns, numbers, and the marked gaps">
            Go straight to anything the model flagged as uncertain, then spot-check names
            and figures. You are not proofreading the whole chapter.
          </PipelineStep>
          <PipelineStep num="4" title="Place it — a Canvas page, with the original alongside">
            Keep the scan available too. Some students want the page images; the accessible
            version is an addition, not a replacement.
          </PipelineStep>
        </div>

        <DropIn label="The honest number">
          A twenty-page scanned chapter is not a five-minute job even now. It is maybe
          forty minutes, most of it verification. What changed is that it used to be four
          hours, or not attempted at all.
        </DropIn>
      </SlideShell>
    ),
  },

  // ── 14: THE LIMITS ──
  // PURPOSE: this slide is why the room trusts the other twelve. Do not cut it
  // for time — cut a segment example instead.
  {
    label: "Limits",
    content: (
      <SlideShell tag="Honest Limits · 5 min" tagColor="bg-gray-800">
        <Heading>What This Does Not Solve</Heading>
        <Lede>
          Said plainly, because a session that oversells this leaves you with inaccessible
          material you believe is fine — which is worse than where you started.
        </Lede>

        <ul className="space-y-3 mb-4">
          <Bullet icon="✕">
            <strong>Automated output is not compliant by default.</strong> A checker that
            reports green means the fields are populated, not that they are useful. Nothing
            here removes the human review.
          </Bullet>
          <Bullet icon="✕">
            <strong>Video captions and audio description are a separate problem.</strong>
            {" "}Auto-captions need editing for names and terminology, and describing visual
            content in video is not covered today.
          </Bullet>
          <Bullet icon="✕">
            <strong>Specialist notation needs a specialist.</strong> If you cannot verify
            the output, you cannot ship it — that's November 6's session, and the reason
            it's a separate one.
          </Bullet>
          <Bullet icon="✕">
            <strong>Check where your content is going.</strong> Course materials, student
            work, and licensed readings each carry different restrictions on what may be
            uploaded to which tool. When in doubt, ask before you upload.
          </Bullet>
        </ul>

        <DropIn label="The standard to hold">
          If you would not put your name on the output, it is not ready to be in front of
          a student. That test has not changed and these tools do not change it.
        </DropIn>
      </SlideShell>
    ),
  },

  // ── 15: TAKEAWAYS ──
  {
    label: "Takeaways",
    content: (
      <SlideShell tag="Takeaways from today" tagColor="bg-red-600">
        <Heading>What You're Taking With You</Heading>
        <Lede>
          Four things, and the first one is the only one you have to remember.
        </Lede>

        <div className="space-y-3 mb-4">
          <div className="bg-red-600 text-white rounded-xl px-5 py-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-200 mb-1">The one thing</p>
            <p className="text-base font-bold">Source → AI pass → Verify → Place it.</p>
            <p className="text-sm text-red-100 mt-1">
              Three different problems today, one shape. It outlives every tool name in
              this deck.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-800">
              <strong>Verification is scoped, not exhaustive.</strong> Each workflow has two
              or three known failure modes. Check those. Do not re-read the output.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-800">
              <strong>Alt text replaces an image, it doesn't describe one.</strong> The
              sentence that says what the figure is <em>for</em> is the one AI won't write
              for you.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
            <p className="text-sm text-gray-800">
              <strong>One document, then schedule the rest.</strong> Getting the routine
              working once turns forty documents from a research problem into a calendar problem.
            </p>
          </div>
        </div>

        <Note>
          Next in the series: <strong>Beyond Alt Text — Notation, Diagrams, and Symbols</strong>,
          November 6, 2026. Bring the material you couldn't use today.
        </Note>
      </SlideShell>
    ),
  },

  // ── 16: WORK SESSION ──
  {
    label: "Work Session",
    content: (
      <SlideShell tag="Hands-On · 30 min" tagColor="bg-red-600">
        <Heading>Your Turn — 30 Minutes</Heading>
        <Lede>
          Pick one track and run it on <strong>the document you brought</strong> — something
          from a course you are actually teaching. Everyone stays in the main room; questions
          go in the shared doc and I'll answer out loud.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-gray-100 rounded-lg px-3 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500">0–5 min</p>
            <p className="text-sm font-bold text-gray-900">Pick &amp; set up</p>
          </div>
          <div className="bg-red-50 rounded-lg px-3 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-red-600">5–25 min</p>
            <p className="text-sm font-bold text-gray-900">Work · chat is open</p>
          </div>
          <div className="bg-gray-100 rounded-lg px-3 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500">25–30 min</p>
            <p className="text-sm font-bold text-gray-900">Show one thing</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {[
            ["Audio", "bg-blue-50 border-blue-500",
             "Turn next week's announcement or a short reading into audio",
             "You've listened to the first 30 seconds and fixed one pronunciation"],
            ["Alt Text", "bg-purple-50 border-purple-500",
             "Write real alt text for every image on one Canvas page",
             "Each one would let a student answer the question the image is there for"],
            ["Scanned PDF", "bg-emerald-50 border-emerald-600",
             "Convert two pages — not twenty — of a scanned reading",
             "Headings are headings, and you've checked the names and numbers"],
            ["Audit First \u00b7 Ally", "bg-amber-50 border-amber-500",
             "Don't convert anything. Open Ally in one course and rank what it flags",
             "You know which three items to fix first and roughly what they'll cost"],
          ].map(([name, cls, task, done], i) => (
            <div key={i} className={`${cls} border-l-4 rounded-lg px-4 py-2 flex flex-col md:flex-row md:items-center gap-1 md:gap-4`}>
              <p className="text-sm font-black text-gray-900 md:w-40 flex-shrink-0">{name}</p>
              <p className="text-xs text-gray-700 flex-1">{task}</p>
              <p className="text-xs text-gray-500 italic md:w-80 flex-shrink-0">Done when: {done}</p>
            </div>
          ))}
        </div>

        <Note>
          The fourth track is the right one for more people than pick it. If you don't yet
          know what's broken in your course, finding out is worth more than converting one
          arbitrary file.
        </Note>
      </SlideShell>
    ),
  },

  // ── 17: RESOURCES ──
  {
    label: "Resources",
    content: (
      <SlideShell tag="Resources" tagColor="bg-gray-700">
        <Heading>Where to Go Next</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="Rutgers" icon="🏛️">
            <ul className="space-y-2">
              <Bullet icon="→">
                <Link href="https://academicaffairs.rutgers.edu/digital-accessibility">academicaffairs.rutgers.edu/digital-accessibility</Link>
                {" "}— University policy and the deadline
              </Bullet>
              <Bullet icon="→">
                <Link href="https://it.rutgers.edu/ai">it.rutgers.edu/ai</Link> — Rutgers AI Hub,
                including which tools are approved for what
              </Bullet>
            </ul>
          </SectionCard>
          <SectionCard title="Standards" icon="📐">
            <ul className="space-y-2">
              <Bullet icon="→">
                <Link href="https://www.w3.org/WAI/WCAG21/quickref/">WCAG 2.1 Quick Reference</Link>
                {" "}— the actual requirements, more readable than it looks
              </Bullet>
              <Bullet icon="→">
                <Link href="https://www.w3.org/WAI/tutorials/images/">W3C alt text decision tree</Link>
                {" "}— settles "does this image need alt text?" in about a minute
              </Bullet>
            </ul>
          </SectionCard>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">This series</p>
          <ul className="space-y-2">
            <Bullet icon="→">
              <Link href="https://rianders.github.io/presentations">rianders.github.io/presentations</Link>
              {" "}— every deck in the 2026–27 series, including today's
            </Bullet>
            <Bullet icon="→">
              <strong>November 6, 2026</strong> — Beyond Alt Text: Notation, Diagrams, and
              Symbols. The hard cases this session deliberately left alone.
            </Bullet>
          </ul>
        </div>
      </SlideShell>
    ),
  },

  // ── 18: CONTACT ──
  {
    label: "Contact",
    content: (
      <SlideShell tag="Questions" tagColor="bg-gray-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Rutgers UOES · TIIP Partnership · September 18, 2026</p>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Questions?</h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <ul className="space-y-2 mb-8">
            <Bullet icon="→"><Link href="https://rianders.github.io/presentations">rianders.github.io/presentations</Link> — all decks in this series</Bullet>
            <Bullet icon="→"><Link href="https://academicaffairs.rutgers.edu/digital-accessibility">academicaffairs.rutgers.edu/digital-accessibility</Link> — policy and deadline</Bullet>
            <Bullet icon="→">Next up: Beyond Alt Text — Notation &amp; Diagrams · November 6, 2026</Bullet>
          </ul>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="bg-red-600 text-white text-sm font-black tracking-widest px-5 py-2 rounded inline-block mb-3">
              RUTGERS UNIVERSITY
            </div>
            <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
            <p className="text-xs text-gray-500">Director of Emerging Technology · UOES</p>
            <p className="text-blue-600 text-sm mt-2 font-semibold">rick.anderson@uoes.rutgers.edu</p>
          </div>
        </div>
      </SlideShell>
    ),
  },

];

/* ── Presentation shell ──────────────────────────────────── */

const printMode = new URLSearchParams(window.location.search).has('print');

function PrintView() {
  return (
    <div style={{ background: 'white' }}>
      <style>{`
        @page { size: 11in 8.5in landscape; margin: 0; }
        @media print {
          body { margin: 0; }
          .print-nav { display: none !important; }
        }
        .slide-page {
          width: 100vw; height: 100vh;
          overflow: hidden;
          page-break-after: always;
          break-after: page;
          box-sizing: border-box;
        }
        .slide-page:last-child { page-break-after: avoid; break-after: avoid; }
      `}</style>
      <div className="print-nav" style={{ padding: '12px 20px', background: '#f3f4f6', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '13px', color: '#6b7280' }}>
          Print view — {slides.length} slides
        </span>
        <button onClick={() => window.print()} style={{ padding: '6px 16px', background: '#dc2626', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>
          Save as PDF
        </button>
        <button onClick={() => window.close()} style={{ padding: '6px 16px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
      {slides.map((slide, i) => (
        <div key={i} className="slide-page">
          <div style={{ height: '100vh', overflow: 'hidden' }}>
            {slide.content}
          </div>
        </div>
      ))}
    </div>
  );
}

function Presentation() {
  const startAt = (() => {
    const n = parseInt(_params.get('s'), 10);
    return Number.isFinite(n) && n >= 1 && n <= slides.length ? n - 1 : 0;
  })();
  const [current, setCurrent] = useState(startAt);

  useEffect(() => {
    const u = new URL(window.location.href);
    u.searchParams.set('s', String(current + 1));
    window.history.replaceState(null, '', u.toString());
  }, [current]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));
  const first = () => setCurrent(0);
  const last = () => setCurrent(slides.length - 1);

  const openPrint = () => {
    const url = window.location.href.replace(/[?&]print/, '') +
      (window.location.search ? '&print' : '?print');
    const w = window.open(url, '_blank');
    if (w) w.addEventListener('load', () => w.print(), { once: true });
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (printMode) return <PrintView />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      <div className="text-center text-xs font-black uppercase tracking-widest py-1.5 bg-gray-800 text-gray-200">
        AI-Assisted Accessibility Workflows · UOES / TIIP · September 18, 2026
      </div>

      <div className="flex-1 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative">
          {slides[current].content}
          <div className="absolute bottom-1.5 text-xs text-gray-400 bg-white/80 px-2 py-0.5 rounded-full border border-gray-200"
               style={{ left: '50%', transform: 'translateX(-50%)' }}>
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center justify-center gap-2 flex-wrap">
        <button onClick={first} className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all">⏮ Begin</button>
        <button onClick={prev} disabled={current === 0} className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed">← Prev</button>

        <div className="flex gap-2 items-center">
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)} title={s.label}
              className={`transition-all rounded-full ${i === current ? "w-6 h-2.5 bg-red-600" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>

        <button onClick={next} disabled={current === slides.length - 1} className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed">Next →</button>
        <button onClick={last} className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all">End ⏭</button>
        <button onClick={openPrint} className="px-5 py-2 bg-gray-700 text-white text-sm font-bold rounded-lg hover:bg-gray-800 active:scale-95 transition-all" title="Export all slides as PDF">PDF</button>
      </div>

      <div className="text-center text-xs text-gray-400 py-2">
        Use ← → arrow keys to navigate · {slides.length} slides · 60 min content + 30 min work session
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

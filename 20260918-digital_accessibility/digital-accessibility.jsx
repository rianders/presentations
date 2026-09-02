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

   ── STANCE — GOVERNS EVERY SLIDE ────────────────────────────
   This deck does NOT tell faculty what to do. The job is to put
   things in their toolbox and let them enhance the context of
   their own courses. They know that context; we don't.

   In practice, when editing:
     · Offer, don't instruct. "Here is a routine that works" beats
       "do this." "Worth trying" beats "you should."
     · Built-in tools get tried and improved, never warned about.
       Auto-generate is a first draft, not a trap.
     · Ask more than you assert. The source material this series
       comes from is question-led — "How might we…", "How did that
       go?" — and that register is warmer for an intro audience.
     · The room decides what fits. Say so out loud.
   The verify beat is the one place rigour is non-negotiable — but
   even there it is "here is what to check," not "you must."

   ── THE SPINE ───────────────────────────────────────────────
   Every workflow in this deck is the same loop, introduced on
   slide 5 and then re-run three times:

       ALLY → SOURCE → AI PASS → VERIFY → CANVAS → back to ALLY

   It is a LOOP, not a line. It starts at Ally because that is what
   tells you what needs work and how much of it there is, and it
   ends at Ally because that is how you find out whether the fix
   actually cleared. Anything that re-runs the shape must show all
   five beats and must close it — see slide 13.

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

/* DRAFT CHROME — remove all five markers when this goes out of draft:
   this component, its use in SlideShell, the title-slide badge, the DRAFT
   in the print header, the audience banner text, and the badge in
   index.html. Flip README status to Live in the same commit. */
const DraftChip = () => (
  <span className="bg-amber-400 text-amber-900 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
    Draft
  </span>
);

const SlideShell = ({ tag, tagColor = "bg-red-600", children }) => (
  <div className="flex flex-col h-full min-h-[520px]">
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <RutgersLogo />
        <DraftChip />
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
      Step 4 · Verify — the step everyone skips
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
            <div className="mb-4">
              <span className="bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
                Draft — not for distribution
              </span>
            </div>
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
              Services. I research emerging technologies and bring back what might be worth
              <strong>adding to your toolbox</strong>. You know your course and its context; I don't.
              I also sit on the Rutgers AI Academic Working Group — put anything the
              University ought to hear in the chat and I will carry it there.
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
              I would rather show you something you can repeat next Tuesday than a demo
              that only works when I run it. Take what fits your course and leave the rest.
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
          You don't have to make your whole course accessible today. Get one routine
          working on one document. After that, the other forty are time on a calendar.
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
          Some of this work you can check yourself. Some of it needs someone who reads the
          notation. Today is the first kind, and that covers most of your material.
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
          Brought something from the right-hand column? Bring it back on November 6. It is
          a harder problem and it gets its own session.
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
        <Heading>Every Workflow Today Is the Same Loop</Heading>
        <Lede>
          Three different problems, one shape. It starts in Canvas and it ends back in
          Canvas, and you will see it three times today.
        </Lede>

        <div className="space-y-3 mb-4">
          <PipelineStep num="1" title="Ally — find out what needs work, and how much">
            Ally is already scoring your course. It tells you how big the job is, which
            parts are quick enough to finish today, and where the harder problems are.
          </PipelineStep>
          <PipelineStep num="2" title="Source — get the material into a form a tool can read">
            The step people underestimate. A clean scan beats a clever prompt, and a PDF
            that was born digital is a different problem from one that was photographed.
          </PipelineStep>
          <PipelineStep num="3" title="AI pass — try what's built in, then take it further">
            Press the built-in button first; a first draft is faster to fix than a blank
            field. Then bring it to a chatbot with the context the built-in tool never had —
            the page around it, and what it is doing in your course.
          </PipelineStep>
          <PipelineStep num="4" title="Verify — a human check, scoped so it takes seconds not hours">
            Every segment today names exactly what to look at. You are not re-reading the
            output; you are checking the two or three things this tool tends to get wrong.
          </PipelineStep>
          <PipelineStep num="5" title="Back into Canvas — then back to Ally">
            An accessible file on your desktop has helped nobody. Put it where a student
            reaches it, then re-run Ally on that item. That is how you find out whether the
            problem is actually gone, and it is what closes the loop.
          </PipelineStep>
        </div>

        <DropIn label="Why this matters more than any tool I show you">
          Tools get renamed, repriced, and discontinued. Three of these changed names this
          year. The shape doesn't change. Learn the shape and you can swap the tool.
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
  // REGISTER — READ THIS BEFORE EDITING. Ally is a BUILT-IN tool, and the stance
  // toward built-in tools in this deck is generous: try them, then improve what they
  // give you. "Auto-generate description" is a first draft, not a trap. It gets you
  // out of a blank field faster than you would get out of it yourself, and the work
  // is the second draft. Say it that way. The point that a green score is not the
  // goal still lands — it just lands as "your job is the second draft" rather than
  // as "this button is lying to you."
  //
  // This connects forward to the middle tier on slide 10, which is the same idea:
  // populated is not the same as useful. Make that connection out loud.
  //
  // ACCESSIBILITY OF THIS SLIDE: the screenshot's alt text is written out in full
  // and is worth reading aloud as a specimen. Do not shorten it to "Ally panel".
  {
    label: "Start With Ally",
    content: (
      <SlideShell tag="Before the Four Beats · 4 min" tagColor="bg-gray-700">
        <Heading>Start Where Ally Points You</Heading>
        <Lede>
          Ally is built into Canvas. You didn't install it and you don't have to turn it
          on. It has been scoring every file in your course the whole time. Running it
          first tells you three things: how big the job actually is, which parts are quick
          enough to finish today, and where the genuinely hard problems are.
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
              Note the filename. The lowest scores are usually on files nobody ever named.
            </p>
          </div>

          <div className="space-y-3">
            <SectionCard title="What the score is for" icon="📊">
              <p className="text-sm">
                A triage number, not a grade. Ally tells you <em>why</em> each file fell
                short, so you can spend your hour on the three that matter rather than on
                whichever one you opened first.
              </p>
            </SectionCard>
            <SectionCard title="Try auto-generate — then write the second draft" icon="✨" accent={true}>
              <p className="text-sm">
                Press it. A first draft is much faster to fix than a blank field, and the
                score goes green immediately. Then read what it wrote the way a student
                would, and write it again yourself. Green means the field is filled in.
                The second draft is where the value is.
              </p>
            </SectionCard>
            <SectionCard title="The fastest win on the page" icon="✓">
              <p className="text-sm">
                “Indicate image is decorative” is genuinely useful and badly underused.
                Plenty of what Ally flags is a divider or a stock photo that should be
                marked decorative rather than described — and that is a real fix, done.
              </p>
            </SectionCard>
          </div>
        </div>

        <DropIn label="Why this comes first">
          Two minutes with Ally tells you which three files to fix first. That beats an
          hour spent carefully converting a chapter nobody opens. Come back to Ally after
          you fix something, too — it will tell you whether the problem is actually gone.
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
          Two tools are already reading your course out loud and you turned on neither of
          them. ReadSpeaker reads your Canvas pages. Ally hands students an audio version
          of your files. The catch is what they can reach — ReadSpeaker reads HTML, so a
          page you built in Canvas gets read aloud and a picture of a page does not.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="Already on in Canvas" icon="🏛️">
            <p className="text-sm">
              <strong>ReadSpeaker</strong> reads any Canvas page aloud, for any student, with no
              setup. <strong>Ally</strong> offers an audio version of your files alongside ePub,
              tagged PDF and braille. Rutgers licenses both. Your effort: none.
            </p>
          </SectionCard>
          <SectionCard title="A form, outside Canvas" icon="📤">
            <p className="text-sm">
              <strong>SensusAccess</strong> takes a file and emails back an audiobook, EPUB or
              braille. It eats what nothing else will read — image-only PDFs, JPGs,
              PowerPoints. Sign in with your Rutgers email; the link lives on the Libraries
              site.
            </p>
          </SectionCard>
          <SectionCard title="Yours to drive" icon="🎙️" accent={true}>
            <p className="text-sm">
              <strong>Gemini Notebook</strong> builds an audio companion from your sources, and you
              can steer it toward your own objectives. For material that can't go to a cloud
              tool at all, a speech model small enough to run in a browser tab.
            </p>
          </SectionCard>
        </div>

        <DropIn label="One thing to watch">
          A companion is not a substitute for the reading. If the student who needs audio
          gets a generated discussion <em>about</em> the article while everyone else gets the
          article, that is not equal access. Offer both. Don't swap one for the other.
        </DropIn>

        <VerifyBeat>
          What you check depends on which one you used. <strong>Anything that reads your words
          fails at pronunciation</strong> — listen to the first thirty seconds, then skip to any
          proper noun, acronym, or number. <strong>A companion fails at fidelity</strong> — it will
          pronounce every word perfectly and still tell your students something you never
          said.
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
          These failures are predictable, so you can check for them in about a minute
          instead of listening to forty. Four of them you can hear. The fifth one you can't.
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
              and anything hyphenated often don't come out right.
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
            <strong>x² + y²</strong> read aloud as “x two plus y two” sounds right and isn't.
            The other four failures give themselves away — a mangled name still sounds
            mangled. This one doesn't. A student who can't see the page has no way to know
            they got different mathematics than everyone else. Equations, chemical
            structures, logic, IPA, music — most fields have some of this.
            <strong>It is the whole of November 6.</strong>
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
          Most alt text in most courses is missing or useless — "chart.png", "image of a
          graph". AI can describe an image well. What it doesn't always get is the whole
          page — why this image is here, in this week, next to this paragraph. You know
          that part.
        </Lede>

        <div className="space-y-4 mb-4">
          <PipelineStep num="1" title="Ally">
            It has already flagged the images with no description, or a bad one. That list
            is where this segment starts.
          </PipelineStep>
          <PipelineStep num="2" title="Source">
            The image, plus the paragraph around it. Context is what separates a
            description from a useful description.
          </PipelineStep>
          <PipelineStep num="3" title="AI pass">
            Try Ally's own auto-generate first. Then bring the image — and the page around
            it — to a chatbot, and say what it is doing in your course.
          </PipelineStep>
          <PipelineStep num="4" title="Verify">
            One question: could a student who cannot see this image answer the question it
            was put there to help them answer?
          </PipelineStep>
          <PipelineStep num="5" title="Back to Canvas, then Ally">
            Into the alt text field — not the caption, and not the body text where sighted
            students read it twice. Then check Ally again and watch the flag clear.
          </PipelineStep>
        </div>

        <DropIn label="The distinction worth holding onto">
          Alt text replaces the image, it doesn't describe it. Write what the student
          needs to know, not what the picture looks like.
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
              Names the trend, gives the numbers that carry it, and states the conclusion —
              which is right when the figure is there to illustrate a point you have already
              made.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg px-4 py-3">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-1">
              And when the figure is the exercise — say less
            </p>
            <p className="text-sm text-gray-700 font-mono">
              "Bar chart, 2019–2026. Values by year: 400, 395, 405, 240, 290, 340, 380."
            </p>
            <p className="text-xs text-blue-800 mt-2">
              If students are meant to read the trend themselves, naming it hands them the
              answer a sighted student still has to work for. Give the data and let them do
              the same reading. <strong>You have to decide which kind of image this is — the
              tool can't know, and it will usually offer you the conclusion.</strong>
            </p>
          </div>
        </div>

        <CodeBlock>{`Write alt text for this image.

Context: it appears in [course], in a section about [topic].
Students are meant to take away [the specific point].

Replace the image, don't describe it. Give the numbers or
details a student would need to follow the argument. Skip
"image of" and "chart showing". Under 150 characters if the
image is decorative, longer if it carries data.

This figure is something students are asked to interpret,
so do not state the conclusion or answer any question the
image is posing. Give what is on the page and stop.`}</CodeBlock>

        <Note>
          Decorative images work the other way. An image that carries no information takes
          <em>empty</em> alt text, so a screen reader skips it. Describing a header photo
          just adds noise to the page.
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
          It fails confidently, and in good prose. That is why this one needs checking.
          Here are the four to look for.
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
              Three hundred words where forty would do. A screen-reader user can't skim alt
              text, so length costs them real time. This one is the easiest to fix: ask for
              a word limit and it will give you one.
            </p>
          </SectionCard>
        </div>

        <Note>
          Most of these are prompting problems, not tool problems. Screenshot the whole
          page — the image plus the text before and after it — and hand that over instead
          of the image alone. The description comes back fitted to where the image actually
          sits on the page. <strong>Your students can do this too</strong>, in the other direction:
          screenshot the page into their own chatbot and ask “how might this image relate to
          my class?”
        </Note>

        <VerifyBeat>
          Two checks, both fast. <strong>One:</strong> pick two numbers from the description
          and find them in the image. <strong>Two:</strong> read the description on its own and
          ask whether a student who can't see the figure can now do <em>the same work</em> as a
          student who can — not more, and not less. If the image is an exercise, an answer in
          the alt text is a failure, not a bonus.
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
          Every course has one: a photocopied chapter, scanned crooked in 2011, that a
          screen reader sees as one large photograph of nothing. This used to be where the
          work stopped.
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

        <div className="mb-4">
          <SectionCard title="The one that surprises people" icon="🔄">
            <p className="text-sm">
              A PDF with a <em>bad</em> text layer can be harder to work with than one with no
              text at all. I tested this on a Rutgers textbook: pulling the existing text
              turned <strong>a<sup>k</sup></strong> into <strong>ak</strong> and <strong>x²</strong> into
              <strong> x2</strong>. Reading the same pages as pictures got them right. If the
              extracted text looks wrong, try handing over the page image instead.
            </p>
          </SectionCard>
        </div>

        <Note>
          Before you convert anything, check whether someone will do it for you. The
          Libraries take a <strong>content remediation request</strong> for library material and
          respond within two business days. They may also already license the same chapter
          as tagged HTML. Ten minutes of asking beats an hour of converting.
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
          The same loop. This is the longest of the three workflows, and verifying costs
          the most here. Budget for it.
        </Lede>

        <div className="space-y-4 mb-4">
          <PipelineStep num="1" title="Ally — confirm this is the chapter worth the hour">
            A twenty-page conversion is the most expensive thing in this session. Check
            Ally first that this is the file students are actually blocked on.
          </PipelineStep>
          <PipelineStep num="2" title="Source — improve the scan before you convert it">
            Straighten it, drop the black borders, and split double-page spreads into
            single pages. Five minutes here saves more than five minutes later.
          </PipelineStep>
          <PipelineStep num="3" title="AI pass — ask for structure, and ask it not to guess">
            Headings as headings, tables as tables. Then the instruction that matters most:
            <em> where you are not sure what something says, mark it uncertain rather than
            guessing.</em> Twenty flags beat one confident error, and it is what makes step 3
            possible at all.
          </PipelineStep>
          <PipelineStep num="4" title="Verify — proper nouns, numbers, and the marked gaps">
            Go straight to anything the model flagged as uncertain, then spot-check names
            and figures. You are not proofreading the whole chapter.
          </PipelineStep>
          <PipelineStep num="5" title="Back into Canvas — then back to Ally">
            Keep the scan available too; some students want the page images, and the
            accessible version is an addition rather than a replacement. Then re-run Ally
            on the new page and watch the score move.
          </PipelineStep>
        </div>

        <DropIn label="The honest number">
          Twenty pages is not too many to read — I tested that, and it read all twenty
          without drifting. Producing twenty good pages is the harder half, and verifying
          them is where the time goes. Call it forty minutes for a scanned chapter, most of
          it checking. It used to be four hours, or nobody tried.
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
          Said plainly. If a session oversells these tools, you walk out with inaccessible
          material you think is fine.
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
          <Bullet icon="✕">
            <strong>My results are not your results — and not because I'm better at this.</strong>
            {" "}These tools remember. Mine have months of my conversations behind them, so
            they already know I want structure, alt text and accessible output, and they
            quietly supply assumptions I never typed. Yours won't, on day one. Anything that
            matters has to be <em>in the prompt</em>, not in the history.
          </Bullet>
        </ul>

        <Note>
          If you want to see what a tool does without your history helping it, start a
          <strong> temporary chat</strong>. ChatGPT and Gemini both have one, and it uses no saved
          memories and creates none. It is also how you check whether a workflow will
          actually travel to a colleague.
        </Note>

        <DropIn label="The standard to hold">
          If you wouldn't put your name on it, it isn't ready for a student. That test
          hasn't changed.
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
          More people should take the fourth track than usually do. If you don't know
          what's broken yet, finding out beats converting one file at random.
        </Note>
      </SlideShell>
    ),
  },

  // ── 17: THE TOOLS AND THEIR DOCUMENTATION ──
  // PURPOSE: a reference page. Nobody reads this from the podium — it exists so the room
  // can find the tool again on Monday, and so the work session has somewhere to point.
  //
  // EVERY LINK VERIFIED September 2, 2026. The canvas.rutgers.edu pages block automated
  // checkers with a 403 but load fine in a browser — do not "fix" them on a bad report.
  // Re-check before delivery: these are third-party products and Rutgers' licensing of
  // them can change.
  //
  // The grouping is deliberate and is the same one used on slide 7: already running /
  // you switch it on / outside Canvas. That is the distinction faculty actually need.
  {
    label: "The Tools",
    content: (
      <SlideShell tag="Resources · Tools" tagColor="bg-gray-700">
        <Heading>The Tools, and Where Their Documentation Lives</Heading>
        <Lede>
          Everything named today, with a link you can find again on Monday. All of it is
          licensed by Rutgers — none of it needs a purchase or a request.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="Already running in Canvas" icon="🏛️">
            <ul className="space-y-2">
              <Bullet icon="→">
                <Link href="https://canvas.rutgers.edu/external-apps/ally/">Ally at Rutgers</Link>
                {" "}— scores, instructor feedback, alternative formats
              </Bullet>
              <Bullet icon="→">
                <Link href="https://help.anthology.com/ally-lms/en/students/alternative-formats.html">Ally alternative formats</Link>
                {" "}— what students can download, from the vendor
              </Bullet>
              <Bullet icon="→">
                <Link href="https://canvas.rutgers.edu/external-apps/readspeaker/">ReadSpeaker at Rutgers</Link>
                {" "}— reads Canvas pages aloud, for every user
              </Bullet>
              <Bullet icon="→">
                <Link href="https://radr.rutgers.edu/resource/optical-character-recognition-ocr-tool-canvas-ally">OCR in Ally</Link>
                {" "}— Access and Disability Resources, on scanned files
              </Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="There, but you switch it on" icon="🔌">
            <ul className="space-y-2">
              <Bullet icon="→">
                <Link href="https://canvas.rutgers.edu/external-apps/cidilabs-designplus/">CidiLabs DesignPLUS</Link>
                {" "}— enable it in course navigation; its checker covers headings, alt text,
                links and <strong>colour contrast</strong>
              </Bullet>
              <Bullet icon="→">
                <Link href="https://canvas.rutgers.edu/external-apps/">Every Canvas app Rutgers licenses</Link>
                {" "}— worth a look; there is more here than most people know
              </Bullet>
            </ul>
          </SectionCard>
        </div>

        <SectionCard title="Outside Canvas — a form or a person" icon="📤">
          <ul className="space-y-2">
            <Bullet icon="→">
              <Link href="https://it.rutgers.edu/accessibility/sensusaccess">SensusAccess</Link>
              {" "}— converts a file to audiobook, EPUB or braille. The page that describes it
              does not link the form; <Link href="https://www.libraries.rutgers.edu/about-rutgers-university-libraries/accessibility/accessibility-services-users">the Libraries page</Link> does.
              Sign in with your Rutgers email.
            </Bullet>
            <Bullet icon="→">
              <Link href="https://libraries.rutgers.edu/accessibility">Rutgers Libraries accessibility</Link>
              {" "}— including the content remediation request, answered in two business days.
              For library material this is often the cheapest route.
            </Bullet>
            <Bullet icon="→">
              <Link href="https://it.rutgers.edu/ai">it.rutgers.edu/ai</Link>
              {" "}— which AI tools you are entitled to, and what data may go in them
            </Bullet>
          </ul>
        </SectionCard>

        <Note>
          These are third-party products and what the University licenses can change. Links
          checked September 2, 2026. If one has moved, the full app list above is the place
          to start.
        </Note>
      </SlideShell>
    ),
  },

  // ── 18: RESOURCES ──
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

  // ── 19: CONTACT ──
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
          Print view — {slides.length} slides · DRAFT
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
      <div className="text-center text-xs font-black uppercase tracking-widest py-1.5 bg-amber-400 text-amber-900">
        Draft · September 18, 2026
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

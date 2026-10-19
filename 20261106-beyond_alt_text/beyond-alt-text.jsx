const { useState, useEffect } = React;

/* VIEW MODES ─────────────────────────────────────────────────────────────
   One view, and it is the audience's. Every word in this file is public.
   Delivery notes — run of show, demo steps, fallbacks — live in
   presenter-notes.md in this folder and are never rendered.

   SLIDE DEEP-LINK: ?s=8 opens on slide 8, and the URL tracks as you
   navigate, so reloading after an edit puts you back where you were.
   ───────────────────────────────────────────────────────────────────── */
const _params = new URLSearchParams(window.location.search);

/* ═══════════════════════════════════════════════════════════
   BEYOND ALT TEXT: NOTATION, DIAGRAMS & SYMBOLS WITH AI
   UOES / TIIP Faculty Workshop · November 6, 2026 · 11:00–12:30 · Zoom
   Format: 60 min content · 30 min work session

   FIRST DRAFT — October 15, 2026. Content PORTED from the February 25,
   2026 "Transcribing Scientific Notation" deck
   (20260225-EmergingTechCommunity/scientific-notation-presentation.jsx);
   component vocabulary, print view and deep-linking PORTED from the
   September 18 deck. Keep the vocabulary in sync with that file.

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
   Tags sum to 54 of 60. Six minutes of slack; the demos will want it. Work session 30. Write time-budget.md.

   ── SHARED, RECORDED, AND CLIPPED ───────────────────────────
   1. ONE VIEW, PUBLIC.  2. EVERY SEGMENT STANDS ALONE.
   3. NO RELATIVE TIME. Always the literal date.

   ── AN ACCESSIBILITY DECK MUST BE ACCESSIBLE ────────────────
   Real alt text on every <img>; colour never the only carrier;
   &print readable in greyscale. Notation on slides is real Unicode
   text, never an image of an equation — this deck of all decks.
   ═══════════════════════════════════════════════════════════ */

const RutgersLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
      <span className="text-white font-black text-sm italic">R</span>
    </div>
    <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Rutgers</span>
  </div>
);

/* DRAFT CHROME — ON. Remove all six markers when this goes out of draft:
   this chip's use in SlideShell, the title-slide badge, the DRAFT in the
   print header, the audience banner above the slide, every <Placeholder>,
   and the badge in index.html. Flip README status to Live in the same commit. */
const DraftChip = () => (
  <span className="bg-amber-400 text-amber-900 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
    Draft
  </span>
);

/* Draft-only. Content Rick has to supply or confirm. */
const Placeholder = ({ title, children }) => (
  <div className="border-2 border-dashed border-amber-400 bg-amber-50 rounded-xl p-4 my-3">
    <p className="text-[10px] font-black uppercase tracking-widest text-amber-800 mb-1">
      To fill · {title}
    </p>
    <div className="text-sm text-amber-900 leading-relaxed">{children}</div>
  </div>
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
        Rutgers UOES · TIIP · November 6, 2026
      </span>
    </div>
  </div>
);

const Bullet = ({ icon = "▸", children }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
    <span className="text-red-600 mt-0.5 flex-shrink-0 font-bold">{icon}</span>
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
  <div className={`rounded-xl p-5 ${accent ? "bg-red-700 text-white" : "bg-gray-50 border border-gray-200"}`}>
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

/* Non-poll audience moment — chat waterfall, reactions, unmute. */
const Interact = ({ kind = "Zoom chat", prompt, children }) => (
  <div className="border-2 border-teal-400 bg-teal-50 rounded-xl p-4 mb-4">
    <span className="bg-teal-700 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
      {kind}
    </span>
    <p className="text-sm font-bold text-gray-900 mt-2">{prompt}</p>
    {children && <p className="text-sm text-gray-700 mt-2 leading-relaxed">{children}</p>}
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

const VerifyBeat = ({ children }) => (
  <div className="bg-gray-900 rounded-xl px-5 py-4 mt-4">
    <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">
      Verify — the step everyone skips
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
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <div className="mb-4">
            <span className="bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
              Draft — not for distribution
            </span>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Rutgers UOES · TIIP Partnership</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">Beyond Alt Text</h1>
          <h1 className="text-4xl sm:text-5xl font-black text-red-600 leading-tight mb-2">Notation, Diagrams &amp; Symbols</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-4">What experts read differently than they'd ever say aloud</h2>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
          <p className="text-xs text-gray-500">Director of Emerging Technology · Rutgers UOES</p>
          <p className="text-xs text-gray-400">November 6, 2026 · 11:00 am – 12:30 pm · Zoom</p>
        </div>
      </SlideShell>
    ),
  },

  // ── 2: THE PROJECT ──
  // PORTED from February slides 1 and 5.
  {
    label: "The Project",
    content: (
      <SlideShell tag="Opening · 3 min" tagColor="bg-red-700">
        <Heading>Where This Comes From</Heading>
        <Lede>
          A UOES project on transcribing scientific notation, built with Carmela.
        </Lede>
        <Placeholder title="The four projects and the credit">
          Name the four projects (February never lists them). Confirm Carmela's full name, role,
          and how she wants to be credited.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 3: THE SILENT FAILURE ──
  // The opening argument (worklist item 7). Pays September 18's notation card.
  {
    label: "Silent Failure",
    content: (
      <SlideShell tag="Framing · 5 min" tagColor="bg-teal-700">
        <Heading>It Sounds Right, and It Isn't</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">On the page</p>
            <p className="text-4xl font-serif text-gray-900">x² + y²</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Read aloud · Wrong</p>
            <p className="text-2xl text-gray-900 italic">“x two plus y two”</p>
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
      <SlideShell tag="Demo · 8 min" tagColor="bg-purple-700">
        <Heading>What a Screen Reader Says Today</Heading>
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
      <SlideShell tag="Baseline · 6 min" tagColor="bg-teal-700">
        <Heading>When It's MathML, This Already Works</Heading>
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
      <SlideShell tag="Workflow · 8 min" tagColor="bg-red-700">
        <Heading>Most Notation Isn't MathML</Heading>
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
      <SlideShell tag="Demo · 10 min" tagColor="bg-purple-700">
        <Heading>Said the Way People Say It</Heading>
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
      <SlideShell tag="Limits · 7 min" tagColor="bg-gray-700">
        <Heading>When Reading Becomes Guessing</Heading>
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
      <SlideShell tag="Every Discipline · 7 min" tagColor="bg-teal-700">
        <Heading>Your Field Has This Too</Heading>

        <div className="space-y-3 my-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-1">Has a spoken form</p>
            <p className="text-sm text-gray-700">H₂SO₄ · x̄ · basic math</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-800 mb-1">Needs its structure announced</p>
            <p className="text-sm text-gray-700">Fractions · ∀x∃y · IPA</p>
          </div>
          <div className="bg-gray-100 border-l-4 border-gray-600 rounded-r-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-800 mb-1">Can't be spoken at all</p>
            <p className="text-sm text-gray-700">Music staves · syntax trees · structural formulas</p>
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
      <SlideShell tag="Hands-On · 30 min" tagColor="bg-red-600">
        <Heading>Your Turn</Heading>
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
  {
    label: "Questions",
    content: (
      <SlideShell tag="Questions" tagColor="bg-gray-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Questions?</h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <ul className="space-y-2 mb-6">
            <Bullet icon="→"><Link href="https://rianders.github.io/presentations">rianders.github.io/presentations</Link> — every deck in this series</Bullet>
            <Bullet icon="→"><Link href="https://it.rutgers.edu/ai">it.rutgers.edu/ai</Link> — the AI tools your Rutgers account includes</Bullet>
          </ul>
          <Placeholder title="Notation tools">
            MathCAT, NVDA, and whatever the Gen AI reader runs on. Each link verified with a date.
          </Placeholder>
          <p className="text-sm font-bold text-gray-800 mt-4">Rick Anderson</p>
          <p className="text-blue-600 text-sm font-semibold">rick.anderson@uoes.rutgers.edu</p>
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
        Draft · November 6, 2026
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

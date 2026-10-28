/* UOES THEME ─────────────────────────────────────────────────────────────
   Ported October 28, 2026 from UOES_ppt_template_RED.pptx, the office's
   PowerPoint template. Official UOES use.

   A deck opts in with this line among its first five:
       // @theme uoes
   shell.html then loads this file before the deck. Both run as classic
   scripts in one global scope, so the deck uses everything below
   directly and must NOT define any of the same names: a duplicate fails
   the whole deck with "Identifier has already been declared". Hooks are
   called as React.useState here so the deck can still destructure
   useState / useEffect for itself.

   WHAT THE TEMPLATE FIXES
     Scarlet #CC0033 dominates: title, section and closing slides are
     full-bleed scarlet, content slides are white with a scarlet footer
     band carrying the white UOES lockup and a page-number circle.
     Titles are PT Serif bold. Body is Source Sans 3. The subhead under a
     title is scarlet, all caps, letter-spaced. No underline bars under
     titles, no colour-coded segment pills: one red.

   DRAFT CHROME stays amber on purpose. Amber is not in the palette, so
   nothing unfinished can pass for finished content.

   Specimen of every component: shell.html?p=themes/uoes/specimen
   ───────────────────────────────────────────────────────────────────── */

const UOES = {
  colors: {
    scarlet: '#CC0033', scarletDark: '#8E0D18', blush: '#FBEAEE',
    ink: '#212121', slate: '#62666A', gray: '#666666',
    silver: '#BBBCBC', line: '#D7D7D7', mist: '#EFEFEF', link: '#027EAB',
  },
  lockup: 'themes/uoes/assets/uoes-lockup-white.png',
  lockupAlt: 'Rutgers University, Office of University Online Education Services',
  // Per deck, via UOES.configure({...}) at the top of the deck:
  //   draft  — banner text while in draft, e.g. 'Draft · November 6, 2026'; null when live
  //   footer — right side of the footer band. Put the date in it: slides get clipped.
  config: { draft: null, footer: 'UOES' },
  configure(c) { Object.assign(UOES.config, c); },
};

(function injectThemeHead() {
  if (document.getElementById('uoes-theme')) return;
  const fonts = document.createElement('link');
  fonts.rel = 'stylesheet';
  fonts.href = 'https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Source+Sans+3:wght@400;600;700;900&display=swap';
  document.head.appendChild(fonts);

  const c = UOES.colors;
  const css = document.createElement('style');
  css.id = 'uoes-theme';
  css.textContent = `
    .uoes { font-family: 'Source Sans 3', 'Source Sans Pro', Calibri, Arial, sans-serif; }
    .uoes-serif { font-family: 'PT Serif', Georgia, 'Times New Roman', serif; }
    .uoes-sub { color: ${c.scarlet}; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 600; font-size: 0.8rem; }
    .bg-scarlet { background-color: ${c.scarlet}; }
    .bg-scarlet-dark { background-color: ${c.scarletDark}; }
    .bg-blush { background-color: ${c.blush}; }
    .bg-ink { background-color: ${c.ink}; }
    .bg-mist { background-color: ${c.mist}; }
    .text-scarlet { color: ${c.scarlet}; }
    .text-scarlet-dark { color: ${c.scarletDark}; }
    .text-ink { color: ${c.ink}; }
    .text-slate { color: ${c.slate}; }
    .text-silver { color: ${c.silver}; }
    .text-link { color: ${c.link}; }
    .border-scarlet { border-color: ${c.scarlet}; }
    .border-line { border-color: ${c.line}; }
    .uoes-divide > * + * { border-color: ${c.scarlet}; }
  `;
  document.head.appendChild(css);
})();

// Which slide is rendering, for the page number in the footer band.
const UOESSlide = React.createContext(null);

/* ── Brand ──────────────────────────────────────────────────────────── */

const Lockup = ({ className = "h-7" }) => (
  <img src={UOES.lockup} alt={UOES.lockupAlt} className={`${className} w-auto`} />
);

/* ── Draft chrome (amber, never on a live deck) ─────────────────────── */

const DraftChip = () => (
  <span className="bg-amber-400 text-amber-900 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
    Draft
  </span>
);

/* Content still to supply or confirm. Every one goes before the deck leaves draft. */
const Placeholder = ({ title, children }) => (
  <div className="border-2 border-dashed border-amber-400 bg-amber-50 rounded-xl p-4 my-3 text-left">
    <p className="text-[10px] font-black uppercase tracking-widest text-amber-800 mb-1">
      To fill · {title}
    </p>
    <div className="text-sm text-amber-900 leading-relaxed">{children}</div>
  </div>
);

/* ── Slide frames ───────────────────────────────────────────────────── */

/* Content slide: white, title top left, scarlet footer band. */
const SlideShell = ({ children }) => {
  const at = React.useContext(UOESSlide);
  return (
    <div className="uoes text-ink flex flex-col h-full min-h-[540px] bg-white">
      <div className="flex-1 overflow-auto px-8 pt-8 pb-6 sm:px-12 sm:pt-10">
        {children}
      </div>
      <div className="bg-scarlet flex items-center justify-between gap-3 px-6 py-2.5">
        <Lockup className="h-7" />
        <div className="flex items-center gap-3">
          {UOES.config.draft && <DraftChip />}
          <span className="text-white text-[11px] font-semibold tracking-wide">{UOES.config.footer}</span>
          {at && (
            <span className="bg-ink text-white text-[11px] font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {at.n}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* Full-bleed scarlet: title, section header and closing slides share it. */
const ScarletSlide = ({ children, lockup = true }) => (
  <div className="uoes bg-scarlet text-white h-full min-h-[540px] flex flex-col items-center justify-center text-center px-8 sm:px-16 py-12">
    {lockup && <Lockup className="h-10 sm:h-12 mb-10" />}
    {children}
  </div>
);

const TitleSlide = ({ kicker, title, subtitle, presenter, role, date }) => (
  <ScarletSlide>
    {UOES.config.draft && (
      <span className="bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded mb-5">
        Draft — not for distribution
      </span>
    )}
    {kicker && <p className="uppercase tracking-[0.14em] text-xs font-semibold mb-4">{kicker}</p>}
    <h1 className="uoes-serif text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>
    {subtitle && <p className="text-lg sm:text-xl mt-5">{subtitle}</p>}
    {(presenter || date) && (
      <div className="mt-10 text-sm">
        {presenter && <p className="font-bold">{presenter}</p>}
        {role && <p>{role}</p>}
        {date && <p className="mt-1">{date}</p>}
      </div>
    )}
  </ScarletSlide>
);

const SectionSlide = ({ title, sub }) => (
  <ScarletSlide lockup={false}>
    <h1 className="uoes-serif text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>
    {sub && <p className="text-lg mt-4">{sub}</p>}
  </ScarletSlide>
);

const ClosingSlide = ({ title = "Thank you!", children }) => (
  <ScarletSlide>
    <h1 className="uoes-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">{title}</h1>
    <div className="text-base space-y-2 max-w-2xl">{children}</div>
  </ScarletSlide>
);

/* ── Text ───────────────────────────────────────────────────────────── */

/* Slide title. `sub` is the scarlet caps line under it: the segment and
   its time on a workshop deck ("Demo · 8 min"). */
const Heading = ({ children, sub }) => (
  <div className="mb-5">
    <h1 className="uoes-serif text-3xl lg:text-4xl font-bold text-ink leading-tight">{children}</h1>
    {sub && <p className="uoes-sub mt-2">{sub}</p>}
  </div>
);

const Lede = ({ children }) => (
  <p className="text-base text-slate leading-relaxed max-w-3xl mb-5">{children}</p>
);

const Bullet = ({ icon = "•", children }) => (
  <li className="flex items-start gap-3 text-ink text-base leading-relaxed">
    <span className="text-scarlet flex-shrink-0 font-bold">{icon}</span>
    <span>{children}</span>
  </li>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-mist text-ink">{children}</span>
);

/* `onDark` on scarlet slides: white, always underlined. */
const Link = ({ href, onDark, children }) => (
  <a href={href} target="_blank" rel="noreferrer"
     className={`font-semibold break-words underline-offset-2 ${onDark ? "text-white underline" : "text-link hover:underline"}`}>
    {children}
  </a>
);

/* ── Blocks ─────────────────────────────────────────────────────────── */

const SectionCard = ({ title, icon, accent, children }) => (
  <div className={`rounded-xl p-5 ${accent ? "bg-scarlet text-white" : "bg-mist"}`}>
    <div className="flex items-center gap-2 mb-3">
      {icon && <span className="text-xl">{icon}</span>}
      <h3 className={`font-bold text-sm uppercase tracking-wide ${accent ? "text-white" : "text-slate"}`}>{title}</h3>
    </div>
    <div className={accent ? "text-white" : "text-ink"}>{children}</div>
  </div>
);

const Note = ({ children }) => (
  <div className="bg-mist rounded-lg px-4 py-3 mt-4">
    <p className="text-sm text-ink">{children}</p>
  </div>
);

const DropIn = ({ label, children }) => (
  <div className="bg-blush rounded-lg px-4 py-3 mt-5">
    <p className="uoes-sub mb-1">{label}</p>
    <p className="text-base text-ink italic leading-relaxed">{children}</p>
  </div>
);

const CodeBlock = ({ children }) => (
  <div className="bg-ink text-gray-100 rounded-xl p-4 font-mono text-xs leading-relaxed overflow-x-auto my-4">
    <pre className="whitespace-pre-wrap">{children}</pre>
  </div>
);

/* The template's Process layout, stacked: numbered scarlet circles. */
const PipelineStep = ({ num, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="w-9 h-9 rounded-full bg-scarlet text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{num}</div>
    <div>
      <p className="font-bold text-ink text-base">{title}</p>
      <p className="text-sm text-slate mt-0.5">{children}</p>
    </div>
  </div>
);

/* Non-poll audience moment — chat waterfall, reactions, unmute. */
const Interact = ({ kind = "Zoom chat", prompt, children }) => (
  <div className="border-2 border-line bg-white rounded-xl p-4 mb-4">
    <span className="bg-ink text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
      {kind}
    </span>
    <p className="text-base font-bold text-ink mt-2">{prompt}</p>
    {children && <p className="text-sm text-slate mt-2 leading-relaxed">{children}</p>}
  </div>
);

const VerifyBeat = ({ children }) => (
  <div className="bg-ink rounded-xl px-5 py-4 mt-4">
    <p className="text-[10px] font-black uppercase tracking-widest text-silver mb-1">
      Verify — the step everyone skips
    </p>
    <p className="text-base text-white leading-relaxed">{children}</p>
  </div>
);

/* ── Template layouts ───────────────────────────────────────────────── */

/* 2, 3 or 4 columns with the template's dotted scarlet dividers. */
const Columns = ({ n = 3, children }) => (
  <div className={`grid grid-cols-1 md:grid-cols-${n} gap-6 my-4 uoes-divide md:divide-x md:divide-dotted`}>
    {children}
  </div>
);
const Column = ({ title, children }) => (
  <div className="md:px-4 md:first:pl-0">
    {title && <p className="font-bold text-ink text-base mb-2">{title}</p>}
    <div className="text-sm text-slate leading-relaxed">{children}</div>
  </div>
);

/* Three Column Stats: big serif figures. Every figure needs a source. */
const Stats = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-center">
    {items.map((s) => (
      <div key={s.value}>
        <p className="uoes-serif text-5xl font-bold text-scarlet">{s.value}</p>
        <p className="font-bold text-ink mt-2">{s.label}</p>
        {s.note && <p className="text-sm text-slate mt-1">{s.note}</p>}
      </div>
    ))}
  </div>
);

/* Speakers / thanks. Initials stand in for a photo until there is one. */
const People = ({ label, people, note }) => (
  <div className="my-5">
    {label && <p className="uoes-sub mb-4">{label}</p>}
    <div className="flex flex-wrap gap-8">
      {people.map((p) => (
        <div key={p.name} className="flex flex-col items-center text-center w-40">
          {p.photo
            ? <img src={p.photo} alt={p.name} className="w-24 h-24 rounded-full object-cover" />
            : <div className="w-24 h-24 rounded-full bg-mist flex items-center justify-center uoes-serif text-2xl font-bold text-scarlet" aria-hidden="true">
                {p.name.split(' ').map((w) => w[0]).join('')}
              </div>}
          <p className="font-bold text-ink mt-3">{p.name}</p>
          {p.role && <p className="text-sm text-slate italic">{p.role}</p>}
        </div>
      ))}
    </div>
    {note && <p className="text-sm text-slate mt-4">{note}</p>}
  </div>
);

const Quote = ({ children, by }) => (
  <figure className="max-w-3xl mx-auto my-6 text-center">
    <span className="uoes-serif text-7xl leading-none text-scarlet" aria-hidden="true">“</span>
    <blockquote className="uoes-serif text-2xl text-ink leading-snug -mt-4">{children}</blockquote>
    {by && <figcaption className="text-sm text-slate italic mt-4">— {by}</figcaption>}
  </figure>
);

const Agenda = ({ items }) => (
  <ol className="space-y-4 my-4">
    {items.map((it, i) => (
      <li key={i} className="flex items-start gap-4">
        <span className="w-8 h-8 rounded-full bg-scarlet text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
        {it.time && <span className="w-20 text-sm text-slate pt-1.5 flex-shrink-0">{it.time}</span>}
        <div className="pt-1">
          <p className="font-bold text-ink">{it.title}</p>
          {it.note && <p className="text-sm text-slate italic">{it.note}</p>}
        </div>
      </li>
    ))}
  </ol>
);

/* ── The deck: navigation, deep links, print view ───────────────────
   <Deck slides={slides} meta="60 min content + 30 min work session" />
   slides = [{ label, content }]. URL: &s=N opens slide N and tracks as
   you move; &print is the paginated view the shared PDF is made from. */

const UOESPrintView = ({ slides }) => (
  <div className="uoes" style={{ background: 'white' }}>
    <style>{`
      @page { size: 11in 8.5in landscape; margin: 0; }
      @media print {
        body { margin: 0; }
        .print-nav { display: none !important; }
        * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      }
      .slide-page {
        width: 100vw; height: 100vh; overflow: hidden;
        page-break-after: always; break-after: page; box-sizing: border-box;
      }
      .slide-page:last-child { page-break-after: avoid; break-after: avoid; }
    `}</style>
    <div className="print-nav flex items-center gap-3 px-5 py-3 bg-gray-100 border-b border-gray-200">
      <span className="text-sm text-slate">
        Print view — {slides.length} slides{UOES.config.draft ? ' · DRAFT' : ''}
      </span>
      <button onClick={() => window.print()} className="px-4 py-1.5 bg-scarlet text-white rounded-md font-bold text-sm">Save as PDF</button>
      <button onClick={() => window.close()} className="px-4 py-1.5 bg-gray-500 text-white rounded-md font-bold text-sm">Close</button>
    </div>
    {slides.map((slide, i) => (
      <div key={i} className="slide-page">
        <div style={{ height: '100vh', overflow: 'hidden' }}>
          <UOESSlide.Provider value={{ n: i + 1, total: slides.length }}>
            {slide.content}
          </UOESSlide.Provider>
        </div>
      </div>
    ))}
  </div>
);

const Deck = ({ slides, meta }) => {
  const params = new URLSearchParams(window.location.search);
  const startAt = (() => {
    const n = parseInt(params.get('s'), 10);
    return Number.isFinite(n) && n >= 1 && n <= slides.length ? n - 1 : 0;
  })();
  const [current, setCurrent] = React.useState(startAt);

  React.useEffect(() => {
    const u = new URL(window.location.href);
    u.searchParams.set('s', String(current + 1));
    window.history.replaceState(null, '', u.toString());
  }, [current]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const openPrint = () => {
    const url = window.location.href.replace(/[?&]print/, '') +
      (window.location.search ? '&print' : '?print');
    const w = window.open(url, '_blank');
    if (w) w.addEventListener('load', () => w.print(), { once: true });
  };

  if (params.has('print')) return <UOESPrintView slides={slides} />;

  const btn = "px-5 py-2 bg-scarlet text-white text-sm font-bold rounded-md hover:bg-scarlet-dark active:scale-95 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed";

  return (
    <div className="uoes min-h-screen bg-gray-200 flex flex-col">
      {UOES.config.draft && (
        <div className="text-center text-xs font-black uppercase tracking-widest py-1.5 bg-amber-400 text-amber-900">
          {UOES.config.draft}
        </div>
      )}
      <div className="flex-1 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-auto">
        <div className="bg-white rounded-md shadow-2xl w-full max-w-5xl overflow-hidden">
          <UOESSlide.Provider value={{ n: current + 1, total: slides.length }}>
            {slides[current].content}
          </UOESSlide.Provider>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center justify-center gap-2 flex-wrap">
        <button onClick={() => setCurrent(0)} className={btn}>⏮ Begin</button>
        <button onClick={prev} disabled={current === 0} className={btn}>← Prev</button>
        <div className="flex gap-2 items-center">
          {slides.map((s, i) => (
            <button key={i} onClick={() => setCurrent(i)} title={s.label} aria-label={`Slide ${i + 1}: ${s.label}`}
              className={`transition-all rounded-full ${i === current ? "w-6 h-2.5 bg-scarlet" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"}`} />
          ))}
        </div>
        <button onClick={next} disabled={current === slides.length - 1} className={btn}>Next →</button>
        <button onClick={() => setCurrent(slides.length - 1)} className={btn}>End ⏭</button>
        <button onClick={openPrint} className="px-5 py-2 bg-ink text-white text-sm font-bold rounded-md active:scale-95 transition-all" title="Export all slides as PDF">PDF</button>
      </div>

      <div className="text-center text-xs text-slate py-2">
        Use ← → arrow keys to navigate · {slides.length} slides{meta ? ` · ${meta}` : ''}
      </div>
    </div>
  );
};

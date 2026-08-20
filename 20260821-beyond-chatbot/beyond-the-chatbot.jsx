const { useState, useEffect } = React;

/* VIEW MODES ─────────────────────────────────────────────────────────────
   Notes are ON by default when you are working locally, OFF by default on
   the published site. So the authoring loop always shows your notes, and a
   shared link never does.

     localhost / 127.0.0.1 / file://  →  notes ON   (authoring)
     rianders.github.io               →  notes OFF  (audience)
     ?notes    force ON      ?clean   force OFF     (either wins)
     Notes button in the nav toggles and REMEMBERS the choice.

   Anything you would not want a registrant to read must live in a
   <Placeholder>, or the `note` prop of <Poll>/<Interact>. Nothing else
   is hidden.

   SLIDE DEEP-LINK: ?s=8 opens on slide 8, and the URL tracks as you
   navigate — so reloading after an edit puts you back where you were
   instead of at slide 1.
   ───────────────────────────────────────────────────────────────────── */
const _params = new URLSearchParams(window.location.search);
const _isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
const presenterMode = (() => {
  if (_params.has('notes')) return true;
  if (_params.has('clean')) return false;
  try {
    const saved = window.localStorage.getItem('btc-notes');
    if (saved !== null) return saved === '1';
  } catch (e) { /* storage blocked — fall through to default */ }
  return _isLocal;
})();

/* ═══════════════════════════════════════════════════════════
   BEYOND THE CHATBOT — DRAFT SKELETON
   UOES / TIIP Faculty Workshop · August 21, 2026 · 11:00–12:30
   Format: 60 min content · 30 min work session
   Pathway: Teaching and Generative AI — Competencies 1, 2, 3

   Every slide below is a PLACEHOLDER. The <Placeholder> blocks
   name the candidate slides to port from:
     20260306/beyond-the-chatbot-workshop.jsx  ("Beyond ChatGPT")
   Remove the DRAFT chips in SlideShell + the title slide, and the
   DRAFT badge in index.html, once content is final.

   ── CONFIRMED SINCE THE MAR 6 DECK ──────────────────────────
   Jul 16, 2026 · Google renamed NotebookLM → GEMINI NOTEBOOK.
     Same product, same notebooks; new logo; existing links and
     shared notebooks redirect automatically. New in the same
     update: a secure cloud computer per notebook that writes and
     runs code (Ultra first, Pro following).
     9to5google.com/2026/07/16/notebooklm-gemini-notebook/
   Aug 17, 2026 · OIT enabled GEMINI GEMS + GEMINI SHARING for
     ScarletApps — four days before this session. Source: Aaron
     Richton (Service Owner, ScarletMail/ScarletApps) announcement.
     That email explicitly asks recipients to share it onward.

   NOTE: the published abstract says "NotebookLM" — that is the
   word registrants signed up on. Keep "(formerly NotebookLM)"
   visible at least once so they can connect the two.

   ── TIME BUDGET — SCENARIO 1-R APPLIED ──────────────────────
   Tags below are live and total exactly 60 min. Each tag INCLUDES
   that slide's own poll/chat time — roughly 10 min of the 60 is
   interaction, not talking.

     Opening 5 (incl. warm-up poll)   Framing 3
     Seg 1  What You Have      6      Seg 1b Free vs. Paid   4*
     Seg 2  Agents             6      Seg 3  Vibe Coding     9
     Seg 3b Your Machine       6      Seg 4  Notebook        8
     Seg 4b Gems vs. Notebook  4*     Seg 5  Local AI        2
     Seg 6  Students           5 (incl. chat)          = 58

   NOTE: totals drift as slides are reordered under the Aug 20
   revision (Gems/Notebook move BEFORE the export; slide 10
   refocused on ChatGPT Desktop + Codex). Re-derive against
   time-budget.md once the running order is final.
     Takeaways  2  ── drawn from the work session's
                    0-5 setup beat, NOT from the 60
     Hands-On work session                              = 30

   * "Folded" = no longer its own segment; shares the parent's
     budget at a reduced allocation. Both slides survive, but their
     CONTENT still has to be cut to fit. Seg 1b holds one merged
     2-question poll plus a chat moment in 4 min — workable, but it
     is still the tightest spot in the deck. See time-budget.md.

   Spine: the folder-and-swappable-models pathway (Seg 3 → 3b) is
   the most important idea here. Thesis is stated on Framing and
   paid off on Seg 3b.

   ── DEMOS ───────────────────────────────────────────────────
   Eight, marked inline on their slides in presenter view (violet).
   Full plan, prep checklist, and failure plan: demos.md.
     LIVE      portal wall · Notebook · Gems · Vibe · Local AI
     RECORDED  engine swap · agents (with a failure in it)
     HYBRID    Canvas round trip — live / recorded / live
   Rule: if the room cannot legally use the tool on Monday, it is a
   showcase, not a demo. Record it, keep it short, label it.
   Every live demo needs a fallback reachable in 10 seconds.

   ── SHARED, RECORDED, AND CLIPPED ───────────────────────────
   This deck gets shared. People follow along live in their own
   browser and keep the link afterward, and the recording will be
   cut into short standalone pieces. Three consequences:

   1. AUDIENCE VIEW IS THE DEFAULT. Backstage notes only live in
      <Placeholder>, or the `note` prop of <Poll>/<Interact>.
      Anything written anywhere else is public. Present from
      ?notes on your own screen; share the plain URL.

   2. EVERY SEGMENT MUST STAND ALONE. A clip has no "as I said
      earlier." Restate the premise at the top of each segment,
      name the segment out loud so the editor has a cut point,
      and never point at a poll result a clip won't contain.

   3. NO RELATIVE TIME. "Monday" and "four days ago" are wrong the
      moment the clip is posted. Always the literal date.
      Footer carries the deck URL on every slide so any frame
      grabbed from the video still shows where to get it.

   ── INTERACTION — ZOOM CHAT IS NOT THE CHANNEL ──────────────
   Chat scrolls away, is lost when the call ends, and is unusable
   on playback. Use instead:
     · Polls        structured, fast, and the results are data
     · Shared doc   persists, everyone sees it, becomes a written
                    artifact afterward — set this up before Friday
                    and put the link on the About slide
     · Unmute       for the Students moment specifically; it is
                    worth hearing in someone's voice and it records
                    far better than you reading chat aloud
   Chat still catches "I can't hear you" — just do not build
   content on it.

   ── ZOOM PREP ───────────────────────────────────────────────
   Zoom polls must be BUILT IN THE WEB PORTAL BEFORE the meeting
   starts — they cannot be created on the fly. Build these THREE
   polls on the Aug 21 meeting, in this order:

     1. Slide 2  · "Which of these have you already tried?"
                   1 question · multi-select · warm-up
     2. Slide 5  · "Rutgers paid plans"      ← 2 QUESTIONS, ONE POLL
                   Q1 "Do you have any of the Rutgers paid AI
                      plans?"  multi-select
                   Q2 "How did the approval process go?"  single
                   Mark the POLL anonymous — in Zoom that setting is
                   per-poll, not per-question, so it covers both.
     3. Slide 14 · "Which track are you taking?"
                   1 question · single · launch BEFORE breakouts

   You are hosting, so you can build all three now — they attach to
   the scheduled meeting and are ready whenever you launch them.

   Chat moments (no prep needed): slide 5 and slide 12.

   One host-side note: launching a poll, running a demo, and
   watching chat at once is a lot for one person. Decide in advance
   which polls you will read aloud and which you will just share
   results for, and consider parking chat until the end of a segment.
   ═══════════════════════════════════════════════════════════ */

const RutgersLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
      <span className="text-white font-black text-sm italic">R</span>
    </div>
    <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Rutgers</span>
  </div>
);

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
        Rutgers UOES · TIIP · August 21, 2026
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

/* ── Audience-facing vocabulary, ported from 20260306 so the two decks
     share one visual language. Do not hand-roll cards inline. ── */

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

/* Per-slide presenter aid. Presenter-only.
     port  = slides available to port from 20260306/beyond-the-chatbot-workshop.jsx
     onDay = things to say or do during delivery. These never "complete", so they
             live here rather than in the worklist.

   Outstanding CONTENT WORK lives in worklist.md in this folder, not in the deck.
   Keep it that way — todo lists inside slides made it easy to defer decisions
   indefinitely while the deck looked finished. */
const Placeholder = ({ port = [], todo = [], onDay = [] }) => {
  if (!presenterMode) return null;
  const done = todo.length === 0;
  return (
    <div className={`border-2 border-dashed rounded-xl p-5 ${done ? "border-emerald-400 bg-emerald-50" : "border-amber-400 bg-amber-50"}`}>
      <div className="flex items-center gap-2 mb-3">
        <p className={`text-xs font-black uppercase tracking-widest ${done ? "text-emerald-700" : "text-amber-700"}`}>
          {done ? "Content complete" : `To write — ${todo.length} open`}
        </p>
        {done && <span className="text-emerald-600 font-black">✓</span>}
      </div>

      {!done && (
        <ul className="space-y-1.5 mb-4">
          {todo.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
              <span className="text-amber-600 font-bold flex-shrink-0">☐</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {onDay.length > 0 && (
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">On the day</p>
            <ul className="space-y-1.5">
              {onDay.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-gray-400 font-bold flex-shrink-0">▸</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {port.length > 0 && (
          <div>
            <p className="text-[11px] font-black uppercase tracking-widest text-gray-500 mb-2">Candidate ports · Mar 6 deck</p>
            <ul className="space-y-1.5">
              {port.map((pp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-amber-600 font-bold flex-shrink-0">↳</span>
                  <span><code className="text-xs bg-white border border-gray-200 rounded px-1.5 py-0.5">{pp}</code></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

/* Zoom poll cue. Polls CANNOT be made on the fly — they must be built in the
   Zoom web portal before the meeting starts. Every <Poll> below needs to exist
   there by Friday morning. See the ZOOM PREP list in the header comment. */
const Poll = ({ question, options = [], questions, anonymous = false, note }) => {
  // One Zoom poll can hold several questions and is launched once. Pass `questions`
  // for that; pass `question`/`options` for a single-question poll.
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
      {note && presenterMode && <p className="text-xs text-gray-600 mt-2 italic">{note}</p>}
    </div>
  );
};

/* Non-poll audience moment — chat waterfall, reactions, unmute. */
const Interact = ({ kind = "Shared doc", prompt, note }) => (
  <div className="border-2 border-teal-400 bg-teal-50 rounded-xl p-4 mb-4">
    <span className="bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
      {kind}
    </span>
    <p className="text-sm font-bold text-gray-900 mt-2">{prompt}</p>
    {note && presenterMode && <p className="text-xs text-gray-600 mt-1 italic">{note}</p>}
  </div>
);

/* The through-line. Each segment adds one layer to what "context design"
   means, so the Takeaways slide names something the room has already been
   assembling rather than introducing it cold. Audience-facing, not a note. */
/* Demo marker. Presenter-only. Full plan and prep checklist in demos.md.
   mode: "Live" | "Recorded" | "Hybrid" */
const Demo = ({ mode = "Live", time, what, steps = [], fallback }) => {
  if (!presenterMode) return null;
  const tone = mode === "Recorded"
    ? "bg-slate-600"
    : mode === "Hybrid" ? "bg-fuchsia-700" : "bg-violet-600";
  return (
    <div className="border-2 border-violet-400 bg-violet-50 rounded-xl p-4 mb-4">
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <span className={`${tone} text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded`}>
          Demo · {mode}
        </span>
        {time && (
          <span className="bg-white text-violet-700 border border-violet-300 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
            {time}
          </span>
        )}
      </div>
      <p className="text-sm font-bold text-gray-900 mb-2">{what}</p>
      {steps.length > 0 && (
        <ul className="space-y-1 mb-2">
          {steps.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-violet-500 font-bold flex-shrink-0">{i + 1}.</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
      {fallback && (
        <p className="text-xs text-gray-700 bg-white border border-violet-200 rounded px-2 py-1">
          <strong>If it fails:</strong> {fallback}
        </p>
      )}
    </div>
  );
};

const Lede = ({ children }) => (
  <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-5">{children}</p>
);

const Heading = ({ children }) => (
  <>
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">{children}</h1>
    <div className="w-16 h-1 bg-red-600 rounded mb-4" />
  </>
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
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">Beyond</h1>
          <h1 className="text-4xl sm:text-5xl font-black text-red-600 leading-tight mb-2">the Chatbot</h1>
          <div className="mb-4">
            <span className="bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest px-3 py-1 rounded">
              Draft — not for distribution
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-4">What's actually new this year, and what it changes about teaching</h2>
          <div className="w-20 h-1 bg-red-600 rounded mb-5" />
          <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-5">
            A high-level tour of agents, vibe coding, Gemini Notebook (formerly NotebookLM),
            the Gems that arrived August 17, and local AI tools — what's available through your
            ScarletMail account, and what each of them is actually good for.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag color="bg-red-100 text-red-700">Agents</Tag>
            <Tag color="bg-blue-100 text-blue-700">Vibe Coding</Tag>
            <Tag color="bg-purple-100 text-purple-700">Gemini Notebook</Tag>
            <Tag color="bg-amber-100 text-amber-800">Gems — Aug 17, 2026</Tag>
            <Tag color="bg-emerald-100 text-emerald-700">Local AI</Tag>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
            <p className="text-xs text-gray-500">Director of Emerging Technology · Rutgers UOES</p>
            <p className="text-xs text-gray-400">August 21, 2026 · 11:00 am – 12:30 pm · Zoom</p>
          </div>
        </div>

        <div className="md:w-48 flex-shrink-0 flex flex-col items-center justify-center self-center">
          <img
            src="20260821-beyond-chatbot/qr-beyond-the-chatbot-20260821.png"
            alt="QR code linking to this presentation"
            className="rounded-lg border border-gray-200 shadow-sm w-40 h-40"
            width="160"
            height="160"
          />
          <p className="text-xs font-bold text-gray-700 mt-2 text-center">Scan to follow along</p>
          <p className="text-[10px] text-gray-400 mt-0.5 text-center">yours to keep</p>
        </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 2: WHO I AM ──
  // PURPOSE: standing. Why this person, on this topic, at this university.
  // Ported from 20260306 "About" — same three-card structure and the same
  // closing claim. Keep it to ~60 seconds spoken.
  {
    label: "Who I Am",
    content: (
      <SlideShell tag="Opening · 4 min" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Who I Am
        </h1>
        <p className="text-lg font-bold text-gray-700">Rick Anderson</p>
        <p className="text-sm text-gray-500 mb-2">Director of Emerging Technologies, University Online Education Services</p>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <SectionCard title="Early 1990s" icon="🖥️">
            <p className="text-sm">Built some of the University's first websites — New Brunswick Summer Session, University College, and more. At the <strong>Center for Electronic Texts in the Humanities</strong>, worked with experts worldwide on text markup and analysis at a critical moment for the field.</p>
          </SectionCard>
          <SectionCard title="Decades Since" icon="🔧">
            <p className="text-sm">Built critical infrastructure for the University. Developed virtual worlds. Always working to connect <strong>emerging technologies, research, and instructional design</strong>.</p>
          </SectionCard>
          <SectionCard title="Today" icon="🎯" accent={true}>
            <p className="text-sm">Director of Emerging Technology, UOES. That early work on electronic texts now informs how I understand <strong>AI's impact on knowledge and research</strong>.</p>
          </SectionCard>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
          <p className="text-sm text-gray-700">This history at Rutgers has given me a <strong className="text-red-600">unique perspective on technology adoption</strong> and integration into the knowledge ecosystem of higher education.</p>
        </div>

        <Poll
          question="Which of these have you already tried? (Check all that apply)"
          options={[
            "An AI agent that completes multi-step tasks",
            "Building a page or activity by describing it",
            "NotebookLM / Gemini Notebook",
            "AI running locally on my own machine",
            "None of these yet",
          ]}
          note="Opening warm-up. Tells you which segments to expand and which to compress — decide live."
        />

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">Questions &amp; notes — shared doc</p>
          <p className="text-sm text-gray-700">Ask anything, it stays up after today. <span className="text-red-600 font-bold">[ADD DOC LINK]</span></p>
        </div>

        <Placeholder
          port={["About"]}
          onDay={[
            "Paste both links in chat at minute 1 — chat is fine for delivering links, just not for discussion",
            "~60 seconds. The three cards are there for the recording; do not read them aloud",
            "The internet → social media → AI progression is the point. Land that, skip the rest if you're behind",
            "If the warm-up poll skews experienced, cut What's New to 2 min",
          ]}
        />
      </SlideShell>
    ),
  },


  // ── 3: WHAT'S NEW FOR FALL 2026 ──
  {
    label: "New for Fall 2026",
    content: (
      <SlideShell tag="Framing · 3 min" tagColor="bg-gray-700">
        <Heading>What's New for Fall 2026</Heading>
        <Lede>
          What actually landed over the summer, and why "it's a chatbot" stopped being a
          useful description of any of it.
        </Lede>

        <div className="bg-red-600 rounded-xl p-4 mb-4 flex items-center gap-4">
          <div className="flex-shrink-0 text-center">
            <p className="text-4xl font-black text-white leading-none">11</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-red-200 mt-1">days</p>
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-snug">Classes start September 1.</p>
            <p className="text-sm text-red-100 leading-snug">
              So the test for everything today is simple: can it help you before then? Some of
              this pays off over a year. Some of it pays off this week — and I'll tell you which
              is which.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-2">The through-line for today</p>
          <p className="text-lg font-bold text-white leading-snug mb-2">
            A chatbot makes you bring your work to it, one paste at a time.
          </p>
          <p className="text-lg font-bold text-blue-300 leading-snug">
            Everything past that lets the work stay where it lives.
          </p>
        </div>
        <Placeholder
          port={["The Challenge of Now", "Landscape", "The Competition", "Chatbot vs. Agent"]}
        />
      </SlideShell>
    ),
  },

  // ── 4: AI INITIATIVE (ported from Mar 6 "AI Initiative") ──
  {
    label: "AI Initiative",
    content: (
      <SlideShell tag="Policy · 5 min" tagColor="bg-gray-700">
        <Heading>The AI Initiative at Rutgers</Heading>

        <div className="bg-red-600 text-white rounded-xl p-5 mb-4">
          <p className="text-lg font-bold mb-1">If it involves your students or your course content, it stays in a licensed tool.</p>
          <p className="text-sm text-red-100">
            Three policies govern this: Academic Integrity (10.2.13), Information
            Classification (70.1.2), Acceptable Use (70.1.1).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="Check the hub" icon="🔗">
            <p className="text-sm"><Link href="https://it.rutgers.edu/ai">it.rutgers.edu/ai ↗</Link></p>
          </SectionCard>
          <SectionCard title="Use your ScarletMail account" icon="🔐">
            <p className="text-sm">Signing in with <strong>@scarletmail.rutgers.edu</strong> is what keeps you inside the licensed ecosystem.</p>
          </SectionCard>
          <SectionCard title="Data classification" icon="📊">
            <p className="text-sm">Know what's sensitive — student records, personal data, institutional data — <em>before</em> choosing a tool.</p>
          </SectionCard>
        </div>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-sm font-bold text-amber-300 mb-2">Beyond policy: your ethical choices</p>
          <p className="text-sm text-gray-100 mb-2">
            I'm going to show you a lot of tools today. Policy tells you what's
            <strong> allowed</strong>. It does not tell you what you <strong>should</strong> do.
          </p>
          <p className="text-sm text-gray-100">
            Everything you see today carries questions policy doesn't answer — about labor,
            about data, about who benefits and who doesn't. I want you to know what's
            available. I also want you to apply your own judgment to what you use and how.
            That isn't my decision to make for you.
          </p>
        </div>

        <DropIn label="Your Secrets">
          The concern isn't only student work and FERPA. When AI tools have access to your
          files, email, or cloud storage, it becomes easy to accidentally expose things you
          didn't intend to share — API keys, passwords, personal data, confidential
          communications. A prompt that pulls context from your documents might surface
          something sensitive without you realizing it. The question is not just "is this
          about a student?" It's "what else might this tool be seeing — and where is that
          going?"
        </DropIn>

        <Placeholder
          port={["AI Initiative"]}
          onDay={[
            "The 'Your Secrets' card is on the slide now — read it, don't paraphrase it",
            "This slide earns you the right to demo freely for the next hour. Don't rush it",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 5: ACCESSIBILITY (ported from Mar 6 "Accessibility") ──
  {
    label: "Accessibility",
    content: (
      <SlideShell tag="Guiding Principle · 4 min" tagColor="bg-teal-700">
        <Heading>Accessibility Is Not Optional</Heading>

        <div className="bg-red-600 text-white rounded-xl p-5 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-red-200 mb-1">Deadline — extended</p>
          <p className="text-lg font-bold mb-1">April 26, 2027</p>
          <p className="text-sm text-red-100">
            Federal digital accessibility requirements. Course materials must meet
            <strong> WCAG 2.1</strong>. Not a recommendation — a compliance requirement.
          </p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-800">
            <strong>It moved, and it is still closer than it looks.</strong> That's this fall
            and next spring — two semesters. And the material that takes longest to fix is
            the material most courses have the most of.
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
            <p className="text-sm">
              For material that is hard or impossible to fix by hand — scanned PDFs, figures,
              charts, handwritten documents — these tools do in minutes what used to take hours.
            </p>
          </SectionCard>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-teal-900">
            <strong>This thread runs through the whole session.</strong> Every tool you see
            today has an accessibility dimension — and the next two sessions in this series,
            September 18 and November 6, are entirely about it.
          </p>
        </div>

        <Placeholder
          port={["Accessibility"]}
          onDay={[
            "Some of the room heard the old April 2026 date. Say plainly that it was extended to April 26, 2027 — otherwise half of them think you have it wrong",
            "Don't let the extension read as relief. Two semesters, and notation and diagrams take the longest",
            "Point forward to Sep 18 and Nov 6 — this slide is also how those sessions get their audience",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 6: SCARLETMAIL ──
  {
    label: "New as of Monday",
    content: (
      <SlideShell tag="Segment 1 · 6 min" tagColor="bg-red-600">
        <Heading>What's New as of Monday</Heading>

        <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">New · August 17, 2026</p>
          <p className="text-base font-black text-gray-900 mb-1">Gemini Gems and Gemini sharing turned on for ScarletApps</p>
          <p className="text-sm text-gray-700">
            Available to faculty, faculty emeritus, staff, students, <strong>and guests</strong> with ScarletApps access.
            Announced by OIT (Aaron Richton, Service Owner, ScarletMail/ScarletApps).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-purple-600 mb-2">Gems</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">Customized versions of Gemini, tailored to your teaching style</Bullet>
              <Bullet icon="·">Upload notes, PDFs, images — direct a Gem to rely <strong>only</strong> on those sources</Bullet>
              <Bullet icon="·"><strong>Guided Learning mode</strong> — build study tools or tutors</Bullet>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Gemini Sharing</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">Share chats, generated content, and resources with other users</Bullet>
              <Bullet icon="·">Goes through <strong>Google Drive</strong></Bullet>
              <Bullet icon="·">Direct link sharing is <strong>not</strong> available — plan around this</Bullet>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">The good news</p>
            <p className="text-sm text-gray-700">ScarletMail/ScarletApps input is <strong>not used to train or improve Google's AI models</strong> — and this is the licensed tool every one of you already has.</p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-3">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-1">The limits</p>
            <p className="text-sm text-gray-700">Not intended for university business · never with critical PHI · see OIT's data classification chart for AI tools.</p>
          </div>
        </div>

        <Placeholder
          port={["Your Tools", "AI Initiative", "Accessibility"]}
          onDay={[
            "\"Monday\" works live and breaks in a clip. The on-screen date carries it — but say \"August 17\" out loud at least once so the standalone cut still makes sense",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 7: FREE vs PAID ──
  {
    label: "Free vs. Paid",
    content: (
      <SlideShell tag="Segment 1b · 4 min" tagColor="bg-gray-700">
        <Heading>What's Free, What's Worth Buying</Heading>
        <Lede>
          Most of what we're covering today costs nothing. One paid option is worth knowing about —
          and there's a step between wanting it and having it.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">No cost · you have it now</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">Gemini, Gems, and Gemini sharing via ScarletApps</Bullet>
              <Bullet icon="·">Gemini Notebook</Bullet>
              <Bullet icon="·">OIT's other no-cost AI tools — Connect <em>and</em> ScarletApps</Bullet>
              <Bullet icon="·"><strong>This is the licensed set.</strong> Course content and student work belong here</Bullet>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Paid · via University Software Portal</p>
            <p className="text-sm font-bold text-gray-900 mb-1">ChatGPT Edu — from $10/month</p>
            <p className="text-xs text-gray-600 mb-2">OIT negotiated and approved this price tier.</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">Higher limits and better model access</Bullet>
              <Bullet icon="·">Create and share custom GPTs</Bullet>
              <Bullet icon="·">Rutgers data protected from training</Bullet>
              <Bullet icon="·">Priority support</Bullet>
            </ul>
            <p className="text-xs text-gray-600 mt-2">Also available: Microsoft 365 Copilot · Google AI Pro</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-amber-300 mb-2">You probably cannot buy this today</p>
          <p className="text-sm text-gray-100 mb-2">
            Go to the Software Portal right now and most of you will get this:
          </p>
          <p className="text-xs text-gray-300 italic border-l-2 border-gray-600 pl-3 mb-3">
            "You cannot currently subscribe. There are no PaymentAccounts available to use, and you
            do not have permission to create one. Contact your department's business manager…"
          </p>
          <p className="text-sm text-gray-100">
            It is <strong>departmental procurement</strong>, not a purchase. Someone in your unit has to
            be a Payment Account Owner, and your department has to have a process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-3">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">How you actually get it</p>
            <ul className="space-y-1.5">
              <Bullet icon="1">Talk to your supervisor — that starts it</Bullet>
              <Bullet icon="2">Ask who your Payment Account Owner is</Bullet>
              <Bullet icon="3">If you <em>are</em> a manager, you can set this up for your unit</Bullet>
            </ul>
            <p className="text-xs text-gray-500 mt-2 italic">ithelp.rutgers.edu — KB0017480</p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-3">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-1">So plan around it</p>
            <ul className="space-y-1.5">
              <Bullet icon="·"><strong>Start the conversation today.</strong> Lead time is weeks, not minutes</Bullet>
              <Bullet icon="·"><strong>A free ChatGPT account is not the workaround.</strong> Free consumer tiers are not licensed by the University — course content does not go there</Bullet>
              <Bullet icon="·">Until then, <strong>Gemini through ScarletApps is licensed and you already have it</strong>. That is the fallback</Bullet>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl px-5 py-3 mb-4">
          <p className="text-sm text-gray-700">
            <strong>The pattern worth carrying:</strong> free or paid, what a tool can actually do here
            depends on what our administrators have switched on — agent modes, connectors, and publishing
            are all admin-gated. The feature existing is not the same as you having it.
          </p>
        </div>

        <Poll
          anonymous
          questions={[
            {
              question: "Do you have any of the Rutgers paid AI plans? (Check all that apply)",
              options: [
                "ChatGPT Edu",
                "Microsoft 365 Copilot",
                "Google AI Pro",
                "No paid plan",
                "Not sure what I have",
              ],
            },
            {
              question: "If you got one — how did the approval process go?",
              options: [
                "Straightforward, approved quickly",
                "Took a while, but got there",
                "Still in progress",
                "Tried and gave up",
                "Didn't need approval / N/A",
              ],
            },
          ]}
          note="One poll, two questions, one launch — roughly 90 s instead of 3 min. Anonymity is a per-poll setting in Zoom, so merging makes Q1 anonymous too; that is fine, arguably better."
        />

        <Interact
          kind="Shared doc"
          prompt="If you went through it: who did you have to ask, and how long did it take?"
          note="Zoom chat is bad for this — answers scroll away and are lost after the call. Put it in the shared doc so it persists, and so you can turn it into a written how-to afterward. Read two or three aloud."
        />

        <Demo
          mode="Live"
          time="30 sec"
          what="Load the ChatGPT Edu subscribe page and let the refusal render on screen."
          steps={[
            "Software Portal → ChatGPT Edu → Subscribe",
            "Let the 'no PaymentAccounts available' error sit there for a beat",
            "Say: this is takeaway #04, live",
          ]}
          fallback="Screenshot of the error, already on the desktop."
        />

        <Placeholder
          port={[]}
        />
      </SlideShell>
    ),
  },

  // ── 8: YOUR COURSE MATERIALS AS CONTEXT (ported from Mar 6 "Materials") ──
  // Sets up slide 10. The Mar 6 version already had the thesis in it —
  // "materials in a folder you own belong to you" — before there was a
  // desktop app that made it practical.
  {
    label: "Materials as Context",
    content: (
      <SlideShell tag="Segment 2 · 5 min" tagColor="bg-emerald-700">
        <Heading>Your Course Materials as Context</Heading>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-emerald-900">
            Students learn from <strong>you</strong> — how you organize a course, the
            connections you draw, the sequence you choose. Canvas delivers that structure.
            But it isn't a deep authoring tool. If you want interactivity, you need something
            that can <strong>think with your materials</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Canvas organizes</p>
            <p className="text-sm text-gray-700">Canvas is where your course lives. It isn't where your course thinks. Your syllabus, readings, notes, and rubrics are related — Canvas doesn't treat them that way.</p>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">AI works in context</p>
            <p className="text-sm text-gray-700">Give it your materials and it can build assignments, quizzes, summaries, and discussion prompts grounded in <em>your</em> course — not someone else's.</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-1">Gemini Notebook is the entry point</p>
            <p className="text-sm text-gray-700">Upload notes, readings, or a syllabus. It indexes them and lets you — and your students — treat your course as a knowledge base.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Open source = permission to transform</p>
            <p className="text-sm text-gray-700">A proprietary textbook can't be fed to AI tools or redistributed as derivatives. With open material, <strong>derivatives are the point</strong>.</p>
            <p className="text-xs text-gray-500 mt-2 italic">Cite the source. Note where AI was used. Model the practice you want from students.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">Ownership</p>
            <p className="text-sm text-gray-700">Materials in Canvas belong to the Canvas workflow. Materials in <strong>a folder you own</strong> belong to you.</p>
            <p className="text-xs text-gray-500 mt-2 italic">Hold this thought — the next slide is how you actually do it.</p>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-1">
          The risk with any AI tool is that it wanders — pulling in outside sources, other
          textbooks, generic examples that have nothing to do with your course. The fix is an
          explicit constraint you write once and reuse everywhere:
          <strong> the context is the course.</strong>
        </p>

        <CodeBlock>{`Use ONLY the materials I have provided.
Do NOT draw from outside sources, other textbooks,
or general knowledge.
All examples, explanations, and questions must
come directly from the context I have given you.
If the answer is not in my materials, say so.`}</CodeBlock>

        <DropIn label="The Venn Diagram">
          When you give AI your syllabus, your notes, your readings — and then constrain it to
          stay there — everything it produces lives inside the Venn diagram of your materials.
          The AI doesn't reach outside that circle. The output reflects your course, not the
          internet.
        </DropIn>

        <div className="mt-4">

          <Placeholder
            port={["Materials", "Context Prompt"]}
            onDay={[
              "The ownership card sets up the next two slides. Say it deliberately and let it sit",
              "This is where takeaway #01 gets earned — you are the context designer",
            ]}
          />
        </div>
      </SlideShell>
    ),
  },

  // ── 9: GEMINI NOTEBOOK ──
  {
    label: "Gemini Notebook",
    content: (
      <SlideShell tag="Segment 4 · 8 min" tagColor="bg-purple-600">
        <Heading>Gemini Notebook</Heading>

        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-800">
            <strong>This is NotebookLM.</strong> Google renamed it on July 16, 2026 — new name, new logo,
            same product. Your notebooks, sources, and shared links all still work; old links redirect.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            The session abstract you registered on says "NotebookLM." Same thing.
          </p>
        </div>

        <Lede>
          Keeps the AI grounded in your own syllabus and readings instead of letting it
          wander the open web. The grounding is the whole point — and it did not change in the rename.
        </Lede>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Actually new in the same update</p>
          <ul className="space-y-1.5">
            <Bullet icon="→">A secure <strong>cloud computer</strong> in each notebook that can write and run code</Bullet>
            <Bullet icon="→">Rolling out to Ultra subscribers first, Pro following — <strong>check what your account has</strong></Bullet>
          </ul>
        </div>


        <Demo
          mode="Live"
          time="3 min"
          what="Pre-built notebook from a real syllabus + 2 readings. Ask 3 student questions and trace a citation."
          steps={[
            "Ask a question a student would actually ask",
            "CLICK THE CITATION through to the source passage — this is the demo",
            "Do not build the notebook live, ever",
          ]}
          fallback="Screen recording of the citation trace."
        />

        <Placeholder
          port={["NotebookLM", "Materials"]}
        />
      </SlideShell>
    ),
  },

  // ── 10: GEMS vs NOTEBOOK (new — both ground on your sources) ──
  {
    label: "Gems vs. Notebook",
    content: (
      <SlideShell tag="Segment 4b · 4 min" tagColor="bg-indigo-600">
        <Heading>Two Tools That Both "Use Only My Sources"</Heading>
        <Lede>
          As of Monday you have two Google tools that ground on material you upload.
          They overlap enough to be genuinely confusing, so here's the split.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-purple-600 mb-1">Gemini Notebook</p>
            <p className="text-sm font-bold text-gray-900 mb-2">Reach for it to <em>understand</em> a body of material</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">Many sources held together in one workspace</Bullet>
              <Bullet icon="·">Citations back to the exact passage</Bullet>
              <Bullet icon="·">Built for reading, synthesis, and study artifacts</Bullet>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-1">Gems</p>
            <p className="text-sm font-bold text-gray-900 mb-2">Reach for it to <em>reuse a behavior</em> over and over</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">A persistent persona with your instructions baked in</Bullet>
              <Bullet icon="·">Guided Learning mode → tutors and study tools</Bullet>
              <Bullet icon="·">Shares via Google Drive — no direct links</Bullet>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 rounded-xl px-5 py-3 mb-4">
          <p className="text-sm text-gray-700">
            <strong>Rough rule:</strong> a notebook is a place you go to think with your sources;
            a Gem is a helper you hand to someone else — including students.
          </p>
        </div>


        <Demo
          mode="Live"
          time="3 min"
          what="Same syllabus in both. Then ask the Gem something outside its sources and let it decline."
          steps={[
            "Show the notebook and the Gem side by side",
            "Ask the out-of-scope question",
            "The refusal is the most persuasive moment in the deck",
          ]}
          fallback="Recording of the refusal. Rehearse the question — if it answers instead of declining, pick a different one."
        />

        <Placeholder
          port={["Gems Demo"]}
          onDay={[
            "SHARING — tested: a Gem shares through Drive and works across ScarletMail. Confirmed for faculty and staff. If a STUDENT ScarletMail account has not been verified, say 'faculty and staff, confirmed; students I'd test before relying on it' rather than promising it",
            "This is where 'which do I point students at?' gets answered — sharing is the deciding factor, not features",
            "Ask the Gem something outside its sources and let it decline. That refusal is the most persuasive moment in the deck",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 11: THE CANVAS ROUND TRIP ──
  // Opens on consent/ownership: the ASU example is the motivation for the
  // whole export sequence. SOURCE LINK IS REQUIRED before this is shown.
  // The practical how-to. Highest-value slide in the deck and the riskiest
  // to teach: a bad import damages someone's live course. Import ADDS
  // content, it does not replace. Sandbox first, every time.
  {
    label: "Canvas Round Trip",
    content: (
      <SlideShell tag="Segment 3c · 8 min" tagColor="bg-red-600">
        <Heading>Out of Canvas, Through AI, Back Into Canvas</Heading>
        <Lede>
          Your course materials are going to end up in AI systems. The only real question is
          whether that was your decision.
        </Lede>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-amber-300 mb-2">Why this matters</p>
          <p className="text-sm text-white leading-relaxed mb-2">
            In May, <strong>Arizona State</strong> launched <strong>ASU Atomic</strong> — an AI
            platform that generated short video lessons from faculty lectures and course
            content drawn from ASU Online's library. Faculty reported
            <strong className="text-red-300"> no prior consultation</strong>. One professor
            asked it for a lesson and found his own likeness teaching it:
            <em className="text-gray-300"> "I was pretty surprised to see myself looking back
            at me."</em>
          </p>
          <p className="text-xs text-gray-400 mb-3">
            ASU called the pilot "not … the final project" and did not say whether faculty were
            told beforehand. ·{" "}
            <Link href="https://tucson.com/news/state-regional/article_cbc7ded4-b9f5-4986-a479-a86f0c754388.html">Arizona Republic, May 7, 2026 ↗</Link>
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your materials are an asset. The response isn't refusing these tools — it's being
            an active party rather than a subject. Keep your own copy, and you decide which
            tool sees your course, what it sees, and what comes back.
          </p>
        </div>

        <p className="text-sm text-gray-700 mb-3">
          Here is the whole loop — export, work locally, and put it back.
        </p>

        <div className="space-y-2 mb-4">
          {[
            ["1", "Export", "Course → Settings → Export Course Content → Course → Create Export. Download the .imscc file.", "bg-gray-50 border-gray-300"],
            ["2", "Unzip", "Rename .imscc to .zip and unzip it. That folder is your course — pages, files, and a manifest that maps them.", "bg-gray-50 border-gray-300"],
            ["3", "Work", "Use a licensed tool. ChatGPT Edu with Codex points straight at the folder; Gemini through ScarletApps takes the files uploaded. Run your rubric across every page, check objectives against the schedule, fix heading structure for accessibility.", "bg-red-50 border-red-500"],
            ["4", "Re-zip", "Zip the folder back up. Do NOT rename, add, or delete files — the manifest maps them by name and path.", "bg-gray-50 border-gray-300"],
            ["5", "Import — specific content", "Settings → Import Course Content → Common Cartridge. Choose Select specific content and pick only what you changed. Sandbox first if the course is live.", "bg-amber-50 border-amber-500"],
            ["6", "Verify, then move", "Check it rendered correctly, then copy what you want into the live course.", "bg-emerald-50 border-emerald-500"],
          ].map(([n, title, body, cls], i) => (
            <div key={i} className={`${cls} border-l-4 rounded-lg px-4 py-2.5 flex items-start gap-3`}>
              <span className="text-lg font-black text-gray-400 flex-shrink-0 leading-none mt-0.5">{n}</span>
              <div>
                <p className="text-sm font-black text-gray-900">{title}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">The good news — this is why the loop works</p>
          <p className="text-sm text-gray-800 mb-2">
            Canvas tags every item with a migration ID and keeps it through export. Re-import the
            same course and it <strong>matches on that ID and replaces</strong> — you do not get two
            of everything. Canvas tells you so:
          </p>
          <p className="text-xs text-gray-700 italic border-l-2 border-emerald-300 pl-3">
            "Previously imported content from the same course will be replaced. Manually added
            content will remain."
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-amber-300 mb-2">And that is exactly where the danger is</p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2 text-sm text-gray-100">
              <span className="text-amber-400 font-bold flex-shrink-0">!</span>
              <span><strong>Anything you edited in Canvas after exporting gets overwritten.</strong> The import wins. Those edits are gone, and <strong>it cannot be undone.</strong></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-100">
              <span className="text-amber-400 font-bold flex-shrink-0">!</span>
              <span><strong>Never do this in a live course with student work in it.</strong> Submissions and grades are on the line.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-100">
              <span className="text-amber-400 font-bold flex-shrink-0">!</span>
              <span>Use <strong>Select specific content</strong> on import. Replace the three pages you changed, not the whole course.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-100">
              <span className="text-amber-400 font-bold flex-shrink-0">!</span>
              <span><strong>New Quizzes are the exception</strong> — re-importing reverts to the original. You have to duplicate the assessment to bring changes in.</span>
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">Why this stays inside policy</p>
          <p className="text-sm text-gray-700">
            Your course content goes into a Rutgers-licensed tool and comes back out. That's
            exactly what the AI Initiative asks for. Steps 1, 2, 4, 5 and 6 are identical whichever
            licensed tool does step 3 — <strong>the workflow is yours today, through ScarletApps,
            with no purchase and no approval.</strong> Codex makes step 3 faster; it does not make
            the workflow possible.
          </p>
        </div>


        <Demo
          mode="Hybrid"
          time="8 min · THE demo"
          what="Export → unzip → work → re-zip → import to sandbox. Live, recorded middle, live."
          steps={[
            "LIVE: Settings → Export Course Content → download → unzip",
            "RECORDED: the folder being processed — slow and dull in real time",
            "LIVE: re-zip → Import Course Content → SANDBOX → verify",
            "Show GEMINI first, Codex second as the upgrade",
            "Say out loud: this is a copy, and this is a sandbox",
          ]}
          fallback="Pre-exported .imscc on the desktop; skip straight to the import half."
        />

        <Placeholder
          onDay={[
            "ASU: say it as reported, and include their response. The citation is on the slide — point at it",
            "DO NOT claim ASU ingested Canvas. Not established publicly. Atomizer is described as deploying 'all of ASU's assets', which is broader than Canvas, and the ingestion path (Canvas API vs IMSCC export vs a separate ASU Online repository vs media indexing) is unreported. Instructional designers in this room know Canvas — an overclaim gets caught",
            "If asked 'did it pull from their Canvas?': Canvas is where most ASU Online instructional content lives, so in practice much of it likely originates there — but the mechanism has not been made public. Say that, and stop",
            "Worth noting if it comes up: ASU distinguishes licensed library material (the LRO) from faculty-created lectures and slides. It is the faculty-created side that drove the objection — which is exactly the material this session is about",
            "EXPECT THE PUSHBACK: \"how does having my own export stop my university doing that?\" Honest answer — it doesn't. Owning a copy doesn't veto an institutional platform. What it changes is that you know what you have, you can show what changed, and you are not only finding out afterwards",
            "Demo on a copy. Say that you are demoing on a copy",
            "This is the slide people will screenshot. Slow down",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 12: YOUR MATERIALS, ON YOUR MACHINE ──
  // The ownership argument. The claim is portability -- once the folder is
  // local, any tool can work with it. ChatGPT Desktop + Codex is this
  // session's worked example, not the point itself.
  {
    label: "Your Machine",
    content: (
      <SlideShell tag="Segment 3b · 6 min" tagColor="bg-blue-700">
        <Heading>Your Materials, On Your Machine</Heading>
        <Lede>
          The export isn't a backup chore. It's how your course stops being something you
          edit one page at a time through a browser and becomes a body of material you hold.
        </Lede>

        <div className="bg-gray-900 rounded-xl p-5 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Why this is the important part</p>
          <p className="text-sm text-white leading-relaxed mb-2">
            Once the folder is on your machine, <strong className="text-red-300">any tool can
            work with it</strong> — the one I'm showing you today, a different one next year,
            or one that doesn't exist yet.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            You are not adopting a product. You are keeping a copy of your own work in a form
            that outlives whichever tool is best this semester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="This session's tool" icon="🖥️" accent={true}>
            <p className="text-sm"><strong>ChatGPT Desktop</strong> with the Codex feature. Point it at the unzipped course folder and it reads and edits files in place — no copy-paste, no one-page-at-a-time.</p>
          </SectionCard>
          <SectionCard title="Why AI helps here" icon="🧩">
            <p className="text-sm">It can see <strong>how your course fits together</strong> — schedule against syllabus, objectives against modules, one page against every other page. Questions you could never ask a chatbot one paste at a time.</p>
          </SectionCard>
          <SectionCard title="Start where you already are" icon="🔵">
            <p className="text-sm"><strong>Gemini via ScarletApps</strong> takes the exported files uploaded. More manual than a folder agent, licensed, and available to every person in this room today.</p>
          </SectionCard>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg px-4 py-3 mb-4">
          <p className="text-sm text-red-900">
            <strong>The licensing line doesn't move.</strong> Course content and student work
            belong in Rutgers-licensed tools. A free consumer account is not one, however
            capable it is — and "it runs on my laptop" is not a route around that for course
            content either.
          </p>
        </div>

        <Placeholder
          port={[]}
          onDay={[
            "Don't re-teach the export here — the previous slide did it. This slide is only about what having the folder buys you",
            "Say the portability claim plainly: the folder outlives the tool. That is the argument, the demo is just today's example",
            "Show where Codex opens a folder in the desktop UI — that is the whole trick",
            "Have an answer for \"I don't want an agent touching my files\": work on a copy, read-only first",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 13: AGENTS ──
  {
    label: "Agents",
    content: (
      <SlideShell tag="Segment 2 · 6 min" tagColor="bg-blue-600">
        <Heading>Agents</Heading>
        <Lede>
          An agent browses the web, writes, and completes multi-step tasks on its own.
          You already watched one do it — that was Codex working across the course folder.
          Here is what was actually happening, and where it goes wrong.
        </Lede>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-1">Say this plainly</p>
          <p className="text-sm text-gray-700 mb-2">
            The folder agent you just watched runs in ChatGPT Edu — the plan most of you cannot
            buy yet. It is the deep end of what agents do.
          </p>
          <p className="text-sm text-gray-700">
            <strong>The everyday end is different and you already have it.</strong> Semester
            prep is the obvious one: check your syllabus dates against the Fall 2026 academic
            calendar, confirm the building and room, verify add/drop and withdrawal deadlines.
            Work you do by hand every term, that an agent can do while you read something else.
          </p>
        </div>

        <Demo
          mode="Recorded"
          time="2 min + live discussion"
          what="TWO examples: inside your materials (Codex), and out on the web (semester prep)."
          steps={[
            "A) CODEX across the course folder — internal consistency. Same recording as slide 9",
            "B) WEB: 'Check my syllabus dates against the Fall 2026 academic calendar and tell me what disagrees'",
            "B keeps going: confirm the building and room, check add/drop and withdrawal deadlines",
            "B is licensed, runnable Monday, and every person in the room does it by hand every term",
            "Let it get one thing wrong. Catch it out loud — that is takeaway #06",
          ]}
          fallback="It is already recorded. This is the fallback."
        />

        <Placeholder
          port={["Agents", "Chatbot vs. Agent", "Monday"]}
        />
      </SlideShell>
    ),
  },

  // ── 14: VIBE CODING ──
  // Path 1 is the promise registrants signed up on. Mar 6's loop, honest
  // limitations and "Bounded Is Better" all port straight across.
  {
    label: "Vibe Coding",
    content: (
      <SlideShell tag="Segment 3 · 9 min" tagColor="bg-indigo-600">
        <Heading>Vibe Coding</Heading>
        <Lede>
          Describe a Canvas page, quiz, or interactive activity in plain English and get
          working content back — no coding experience required. You are not learning to code.
          You are learning to <strong>describe, evaluate, and iterate</strong>.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="Path 1 · In the chat window" icon="💬" accent={true}>
            <p className="text-sm mb-2">Gemini via ScarletApps · ChatGPT Edu</p>
            <ul className="space-y-1">
              <Bullet icon="·">Describe it, get it back, paste it into Canvas</Bullet>
              <Bullet icon="·">Nothing to install — start in 30 seconds</Bullet>
              <Bullet icon="·">Works on <strong>one thing at a time</strong></Bullet>
            </ul>
          </SectionCard>
          <SectionCard title="Path 2 · On your own files" icon="📁">
            <p className="text-sm mb-2">ChatGPT Desktop with Codex</p>
            <ul className="space-y-1">
              <Bullet icon="·">Point it at your <strong>exported course folder</strong></Bullet>
              <Bullet icon="·">Reads, edits and creates files in place — no copy-paste</Bullet>
              <Bullet icon="·">Works across <strong>a whole course at once</strong></Bullet>
            </ul>
          </SectionCard>
        </div>

        <CodeBlock>{`DESCRIBE  →  AI generates a single HTML file
EVALUATE  →  Does it do what I meant?
REDIRECT  →  "Change the colors, add a timer, drop question 3"
REFINE    →  Repeat
DEPLOY    →  Canvas → Pages → HTML Editor → Paste`}</CodeBlock>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">The skill that transfers</p>
          <p className="text-sm text-gray-700">
            Knowing what you want and being able to describe it clearly. Faculty already have
            that — about their own courses.
          </p>
        </div>

        <DropIn label="Bounded Is Better">
          The thing we just built is small. One activity. One topic. Ten questions. That is the
          approach working correctly. The moment you ask AI to do something so large you cannot
          review the output, you have left the zone where this is trustworthy.
        </DropIn>

        <Note>
          <strong>Honest limitations:</strong> it breaks — and that is part of the demo, not a
          failure. Not accessible by default; you have to ask for it. Not connected to the
          Canvas gradebook. Content changes mean rebuilding.
        </Note>

        <Demo
          mode="Live"
          time="4 min"
          what="One page of your own → a working interactive activity → pasted into Canvas."
          steps={[
            "Use a real page of your own",
            "Ask for one change in plain English so they see it iterate",
            "PLAN TO SHOW IT BREAK. If Canvas accepts it first time, say what you would have done",
            "Show the paste-into-Canvas step — that is where people get stuck",
          ]}
          fallback="Finished HTML file ready to open."
        />

        <Placeholder
          port={["Vibe Code", "Live Build"]}
          onDay={[
            "The recovery is the most important thing faculty see. Mar 6 proved it — protect that beat",
            "Say which model it is pointed at during the demo — cloud vs local changes the privacy answer",
            "Path 1 is what people registered for. Do not let Path 2 crowd it out",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 15: BUILD IT AGAINST YOUR RUBRIC ──
  // The ingredient that makes vibe coding teaching rather than a party
  // trick, and the payoff for the constrained prompt introduced on slide 8.
  {
    label: "Your Rubric",
    content: (
      <SlideShell tag="Segment 3b · 6 min" tagColor="bg-amber-700">
        <Heading>Build It Against Your Rubric</Heading>
        <Lede>
          A generated quiz is a party trick. The same build, given <em>your</em> criteria,
          becomes something that evaluates rather than answers — and that is the difference
          between a demo and a teaching tool.
        </Lede>

        <div className="bg-red-600 text-white rounded-xl p-5 mb-4">
          <p className="text-sm font-bold mb-1">The AI doesn't know which seat you're in.</p>
          <p className="text-sm text-red-100">
            A student and a professor can type the same prompt and get the same answer. Your
            job is to define the role, the measures, and the limits — so it gives back what you
            designed, not what a chatbot would volunteer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="Rating scale" icon="📊">
            <p className="text-sm">Define every step, 1–5. It scores and states why — and it cannot go further.</p>
          </SectionCard>
          <SectionCard title="Checklist" icon="☑️">
            <p className="text-sm">Yes/no against your exact criteria. No elaboration unless you ask for it.</p>
          </SectionCard>
          <SectionCard title="Close reading" icon="🔍">
            <p className="text-sm">Prompts the student must engage with — not answers, not rewrites. "Quote the sentence where the argument is clearest."</p>
          </SectionCard>
        </div>

        <CodeBlock>{`You are evaluating student work against a rubric.
Do NOT rewrite or improve the student's work.
Do NOT provide answers or solutions.
For each rubric criterion, write ONE sentence:
  — Does the work meet it? Where specifically?
Then give a short bulleted list of concrete
improvements the student could make.`}</CodeBlock>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">What you just wrote, named</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              ["Role", "evaluator, not helper", "border-red-300 bg-red-50 text-red-700"],
              ["Goal", "structured feedback on a rubric", "border-amber-300 bg-amber-50 text-amber-700"],
              ["Constraints", "don't rewrite, don't solve", "border-orange-300 bg-orange-50 text-orange-600"],
              ["Output", "one sentence each, then a list", "border-indigo-300 bg-indigo-50 text-indigo-700"],
            ].map(([term, def, cls]) => (
              <div key={term} className={`border rounded-lg px-3 py-2 ${cls}`}>
                <p className="text-xs font-black uppercase tracking-wide">{term}</p>
                <p className="text-xs mt-0.5 leading-snug">{def}</p>
              </div>
            ))}
          </div>
        </div>

        <DropIn label="This Is Already an Agent">
          It has a role. It has constraints. It has a goal and a defined output format. That is
          the anatomy of an agent — and you built one without writing a line of code. Everything
          on the next slide is this same shape, pointed at a folder instead of a paragraph.
        </DropIn>

        <Placeholder
          port={["Assessment", "The Prompt", "Context Engineering"]}
          onDay={[
            "THE LINE: a chatbot left to its own judgment rewrites the thesis and hands the student a better paragraph. Constrained to your scale it can only score it and say why — the improvement stays the student's work",
            "Use a rubric you actually use. A real one lands; a generic one doesn't",
            "This is the prompt people will ask you for. Have it ready to paste in the shared doc",
            "Same constrained prompt as slide 8, one job further on — say so, so it reads as one artifact not three",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 16: LOCAL AI ──
  {
    label: "Local AI Tools",
    content: (
      <SlideShell tag="Segment 5 · 2 min" tagColor="bg-emerald-600">
        <Heading>Local AI Tools</Heading>
        <Lede>
          Speech-to-text, text-to-speech, and small models running on your own laptop —
          build course materials without anything leaving the room.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-emerald-700 mb-1">Start here · no setup</p>
            <p className="text-sm font-bold text-gray-900 mb-1">Speech &amp; voice</p>
            <p className="text-xs text-gray-600"><Link href="https://handy.computer">Handy</Link> for speech-to-text; <Link href="https://rianders.github.io/kittenttsinweb/">text-to-speech in the browser</Link>. Runs on your machine, works today.</p>
          </div>
          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-teal-700 mb-1">Some setup</p>
            <p className="text-sm font-bold text-gray-900 mb-1">Small models via Ollama</p>
            <p className="text-xs text-gray-600">Pull a model, run it offline. Modest hardware gets you surprisingly far.</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-blue-700 mb-1">For your own research</p>
            <p className="text-sm font-bold text-gray-900 mb-1">LM Studio · OpenCode</p>
            <p className="text-xs text-gray-600">Free, run entirely on your machine, and the fastest way to understand what these models actually do. For your own reading and writing — not course content. Links in Resources.</p>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-700">
            <strong>"Local" is a configuration, not a default.</strong> Open tools connect to 75+ cloud
            providers straight out of the box, and in that mode your material absolutely does leave the
            room — outside anything Rutgers has licensed. It is local <em>only</em> when you deliberately
            point it at a local model. If you explore this, that setting is the whole ballgame.
          </p>
        </div>


        <Placeholder
          port={["Voice", "Making It Accessible", "STEM OCR"]}
        />
      </SlideShell>
    ),
  },

  // ── 17: STUDENTS ──
  {
    label: "What Students Bring",
    content: (
      <SlideShell tag="Segment 6 · 5 min" tagColor="bg-gray-700">
        <Heading>What Students Are Arriving With</Heading>
        <Lede>
          Not a single baseline — a wider spread than we have ever designed for.
        </Lede>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">The ceiling is higher than ours</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">They aren't limited to what the University licenses</Bullet>
              <Bullet icon="·">They can pay for frontier tools we don't have, and use anything they find</Bullet>
              <Bullet icon="·">No procurement, no approval, no admin toggle</Bullet>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">The floor is lower than we assume</p>
            <ul className="space-y-1.5">
              <Bullet icon="·">Many have had <strong>no formal instruction in AI at all</strong></Bullet>
              <Bullet icon="·">Students don't arrive at college equally prepared, and this is one more axis of that</Bullet>
              <Bullet icon="·">Some don't know these tools exist, let alone how to use them well</Bullet>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl px-5 py-3 mb-4">
          <p className="text-sm text-white">
            The gap between the most and least equipped student in your class is
            <strong className="text-red-300"> wider than it has ever been</strong> — and it
            tracks the advantages they showed up with. An assignment written for a single
            baseline now meets two very different rooms at once.
          </p>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">What you still control</p>
          <ul className="space-y-1.5">
            <Bullet icon="→">You can't police access. You <strong>can</strong> say what good use looks like in this course</Bullet>
            <Bullet icon="→"><strong>Be transparent about your own use.</strong> Showing students how you used AI on the course — and where you chose not to — teaches more than a policy paragraph</Bullet>
            <Bullet icon="→">Naming what you don't want is as instructive as naming what you do</Bullet>
          </ul>
        </div>
        <Interact
          kind="Shared doc · or unmute"
          prompt="What have you actually seen from students — at either end? The one who used it brilliantly, or the one who clearly had no idea it existed."
          note="Best interaction in the deck. Asking for BOTH ends surfaces the spread instead of ten variations on the same cheating story. Invite unmuting here — this one is worth hearing in someone's actual voice, and it records well for clips."
        />


        <Placeholder
          port={["Assessment", "Context Engineering", "Context Prompt"]}
        />
      </SlideShell>
    ),
  },

  // ── 18: TAKEAWAYS ──
  // Reframed to what someone can act on before September 1. Each claim
  // names the slide it was earned on, so the deck stays navigable after.
  {
    label: "Takeaways",
    content: (
      <SlideShell tag="The Bridge · 3 min" tagColor="bg-gray-900">
        <Heading>What You're Walking Out With</Heading>
        <Lede>
          Seven things you can act on before classes start — and where each one came from.
        </Lede>

        <div className="space-y-2 mb-4">
          {[
            ["01", "Export your course. That's the first move.",
             "It stopped being a backup chore. The export is what gives you a copy you hold — and questions you could never ask one page at a time become one question across everything.",
             "Canvas Round Trip"],
            ["02", "Write the constraint once, reuse it everywhere.",
             "\u201CUse ONLY the materials I have provided.\u201D That one paragraph is the difference between a tool grounded in your course and a tool wandering the open web. Same wording every time, so it becomes one habit rather than three.",
             "Materials as Context"],
            ["03", "Give it your rubric, not just your topic.",
             "A generated quiz is a party trick. The same build against your criteria evaluates instead of answers — and the improvement stays the student's work. That is what makes this teaching.",
             "Your Rubric"],
            ["04", "What a tool can do and what I'm allowed to do are different questions.",
             "A $10 subscription you cannot buy without a business manager is the plainest example. Agent modes, connectors, publishing — all switched on or off by someone else. Ask what's enabled and who enables it, and start that conversation early.",
             "Free vs. Paid"],
            ["05", "Choosing a model is a privacy and security decision.",
             "It is why the University evaluates vendors at all. Your materials on your own machine, worked on with a licensed tool, is the version where you can answer for what happened to them.",
             "Your Machine"],
            ["06", "I can delegate the work. I can't delegate the judgment.",
             "Guide an agent the way you guide a student — toward work that fits this course, not whatever is generically good. \u201CAcceptable\u201D isn't a standard the model knows. It's yours, and checking against it is the part of the job that doesn't move.",
             "Agents · every demo today"],
            ["07", "I can't control what my students use. I frame what good use looks like here.",
             "Some will pay for tools you don't have; others have never been taught these exist. You can't close that gap by policy. But you set what counts as acceptable in this course — and being transparent about your own use teaches more than a syllabus paragraph.",
             "What Students Bring"],
          ].map(([n, claim, body, src], i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
              <span className="text-lg font-black text-red-600 flex-shrink-0 leading-none mt-0.5">{n}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-900 leading-snug">{claim}</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{body}</p>
              </div>
              <span className="text-[10px] uppercase tracking-wide text-gray-400 flex-shrink-0 hidden md:block">{src}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-xl p-4">
          <p className="text-sm text-white leading-relaxed">
            The through-line: <strong className="text-red-300">your course is yours, and it is
            portable.</strong> Everything today was a way of acting on that rather than waiting
            to be told what happens to it.
          </p>
        </div>

        <Placeholder
          port={["Assessment", "Context Prompt"]}
          onDay={[
            "Open the session with 01 and close with 06 — bookends work better than reading a block of seven",
            "Map to Pathway Competencies 1, 2, 3 — the event listing promises alignment and these are the evidence",
            "Put these on the handout; they are what people keep after Zoom closes",
            "07 is the one that can start an argument. Decide in the moment whether you want it in the room or deferred to the Apr 9 rubric session",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 19: WORK SESSION ──
  {
    label: "Work Session",
    content: (
      <SlideShell tag="Hands-On · 30 min" tagColor="bg-red-600">
        <Heading>Your Turn — 30 Minutes</Heading>
        <Lede>
          Pick one track and run it on <strong>the course you are teaching in eleven days</strong>.
          Not a practice exercise — actual prep you need done. Everyone stays in the main room;
          questions go in the shared doc and I'll answer out loud.
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
            ["Agents", "bg-blue-50 border-blue-500",
             "Check your fall syllabus against the academic calendar, room, and deadlines",
             "You find at least one thing that was wrong"],
            ["Vibe Coding", "bg-indigo-50 border-indigo-500",
             "Build the week-one activity you haven't made yet",
             "Something you could put in Canvas before you log off"],
            ["Your Course as a Folder", "bg-red-50 border-red-600",
             "Export the course you're teaching and ask what's inconsistent across it",
             "A list of fixes you'd never have found page by page"],
            ["Gemini Notebook / Gem", "bg-purple-50 border-purple-500",
             "Build the study tutor for your first unit",
             "It answers from your sources and declines everything else"],
            ["Local AI", "bg-emerald-50 border-emerald-500",
             "Narrate your week-one welcome, or transcribe something you need in text",
             "A file you made with nothing leaving your laptop"],
          ].map(([name, cls, task, done], i) => (
            <div key={i} className={`${cls} border-l-4 rounded-lg px-4 py-2 flex flex-col md:flex-row md:items-center gap-1 md:gap-4`}>
              <p className="text-sm font-black text-gray-900 md:w-52 flex-shrink-0">{name}</p>
              <p className="text-xs text-gray-700 flex-1">{task}</p>
              <p className="text-xs text-gray-500 italic md:w-72 flex-shrink-0">Done when: {done}</p>
            </div>
          ))}
        </div>

        <Poll
          question="Which track are you taking for the next 30 minutes?"
          options={[
            "Agents",
            "Vibe coding",
            "Your course as a folder",
            "Gemini Notebook / Gem",
            "Local AI",
          ]}
          note="Launch BEFORE you turn them loose. Results tell you which recipe to walk through out loud first. Frame it as: which of these do you need done before September 1?"
        />

        <Placeholder
          port={[]}
        />
      </SlideShell>
    ),
  },

  // ── 20: RESOURCES ──
  // Structure ported from the Mar 6 "Resources" slide: a data array rendered
  // into colour-coded categories. Mar 6's personal notebook links and the
  // personal Gemini chat are deliberately NOT carried over.
  {
    label: "Resources",
    content: (
      <SlideShell tag="Take With You" tagColor="bg-gray-700">
        <Heading>Resources</Heading>
        <Lede>
          Everything from today, plus where this series goes next. The deck stays up — this
          slide is the reason to come back to it.
        </Lede>

        {[
          {
            category: "Rutgers & Policy",
            color: "text-red-700",
            links: [
              { label: "Rutgers AI Hub", url: "https://it.rutgers.edu/ai" },
              { label: "Digital Accessibility Guidelines", url: "https://academicaffairs.rutgers.edu/digital-accessibility" },
            ],
          },
          {
            category: "Ground It in Your Sources",
            color: "text-purple-700",
            links: [
              { label: "Gemini Notebook (formerly NotebookLM)", url: "https://notebooklm.google.com" },
              { label: "Gemini", url: "https://gemini.google.com" },
            ],
          },
          {
            category: "Course Design",
            color: "text-emerald-700",
            links: [
              { label: "Context Engineering Prompt Examples", url: "https://docs.google.com/document/d/1TxwRWoNKdXvt_eXY6SfIUYABG8Wb9fCTTTqx_-k3YTE/edit?usp=sharing" },
              { label: "Italian 101 Open Textbook — Dr. Carmela Scala", url: "https://openpub.libraries.rutgers.edu/italian101/" },
            ],
          },
          {
            category: "Local · nothing leaves your laptop",
            color: "text-teal-700",
            links: [
              { label: "Handy — local speech-to-text", url: "https://handy.computer" },
              { label: "Text-to-Speech in the Browser", url: "https://rianders.github.io/kittenttsinweb/" },
              { label: "LM Studio — run small models locally", url: "https://lmstudio.ai" },
            ],
          },
          {
            category: "For Your Own Research — not course content",
            color: "text-indigo-700",
            links: [
              { label: "OpenCode — open source folder agent", url: "https://opencode.ai" },
            ],
          },
        ].map(({ category, color, links }) => (
          <div key={category} className="mb-3">
            <p className={`text-xs font-black uppercase tracking-wide mb-2 ${color}`}>{category}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {links.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-100 hover:border-gray-300"
                >
                  <span className="text-sm text-gray-800 font-semibold">{r.label}</span>
                  <span className="text-xs text-gray-400 flex-shrink-0">↗</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3 mb-4">
          <p className="text-sm text-amber-900">
            <strong>Keep the line clean.</strong> The local and open-source tools are for your
            own reading, writing, and experimentation. Student work and course content stay in
            the licensed tools — that distinction is what makes all of this simple.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Next in this series</p>
          <p className="text-sm text-gray-700">
            <strong>September 18</strong> — AI-Assisted Digital Accessibility Workflows ·{" "}
            <strong>November 6</strong> — Beyond Alt Text: Notation &amp; Diagrams ·{" "}
            <strong>January 29</strong> — The Prompting Cookbook
          </p>
        </div>

        <Placeholder
          port={["Resources"]}
          onDay={[
            "Say the line out loud: personal research yes, course content no. That one sentence keeps this consistent with the AI Initiative slide",
            "QR for this deck is already on the title slide; no second one needed here",
          ]}
        />
      </SlideShell>
    ),
  },

  // ── 21: CONTACT ──
  {
    label: "Contact",
    content: (
      <SlideShell tag="Questions" tagColor="bg-gray-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Rutgers UOES · TIIP Partnership · August 21, 2026</p>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Questions?</h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <ul className="space-y-2 mb-8">
            <Bullet icon="→"><Link href="https://rianders.github.io/presentations">rianders.github.io/presentations</Link> — all decks in this series</Bullet>
            <Bullet icon="→"><Link href="https://it.rutgers.edu/ai">it.rutgers.edu/ai</Link> — Rutgers AI Hub</Bullet>
            <Bullet icon="→">Next up: AI-Assisted Digital Accessibility Workflows · September 18, 2026</Bullet>
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
          Print view — {slides.length} slides · DRAFT{presenterMode ? ' · WITH PRESENTER NOTES' : ' · audience version'}
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

  // Keep ?s= in sync so a reload after editing lands on the same slide.
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
      <div className={`text-center text-xs font-black uppercase tracking-widest py-1.5 ${presenterMode ? "bg-gray-900 text-amber-300" : "bg-amber-400 text-amber-900"}`}>
        {presenterMode
          ? "Presenter view · backstage notes visible · do not screen-share this"
          : "Draft · August 21, 2026"}
      </div>

      <div className="flex-1 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative">
          {slides[current].content}
          <div className="absolute top-3 right-3 text-xs text-gray-400 bg-white/80 px-2 py-0.5 rounded-full border border-gray-200">
            {presenterMode && <span className="text-gray-600 font-semibold">{slides[current].label} · </span>}
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
        <button
          onClick={() => {
            try { window.localStorage.setItem('btc-notes', presenterMode ? '0' : '1'); } catch (e) {}
            const u = new URL(window.location.href);
            u.searchParams.delete('notes');
            u.searchParams.delete('clean');
            u.searchParams.set(presenterMode ? 'clean' : 'notes', '');
            window.location.href = u.toString();
          }}
          className={`px-5 py-2 text-sm font-bold rounded-lg active:scale-95 transition-all ${presenterMode ? "bg-amber-500 text-amber-950 hover:bg-amber-600" : "bg-gray-400 text-white hover:bg-gray-500"}`}
          title={presenterMode ? "Hide backstage notes (audience view)" : "Show backstage notes (presenter view)"}
        >
          {presenterMode ? "Notes ON" : "Notes"}
        </button>
      </div>

      <div className="text-center text-xs text-gray-400 py-2">
        Use ← → arrow keys to navigate · {slides.length} slides · 60 min content + 30 min work session
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

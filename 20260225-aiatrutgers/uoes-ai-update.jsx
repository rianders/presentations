import { useState, useEffect } from "react";

const RULogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-red-700 rounded flex items-center justify-center">
      <span className="text-white font-black text-sm italic">R</span>
    </div>
    <span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">Rutgers</span>
  </div>
);

const SlideShell = ({ tag, tagColor = "bg-red-600", children }) => (
  <div className="flex flex-col h-full min-h-[520px]">
    {/* Header bar */}
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
      <RULogo />
      <span className={`text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full ${tagColor}`}>
        {tag}
      </span>
    </div>
    {/* Body */}
    <div className="flex-1 overflow-auto p-6 sm:p-10">
      {children}
    </div>
    {/* Footer */}
    <div className="px-6 py-2 border-t border-gray-100 flex justify-between items-center">
      <span className="text-xs text-gray-400">Office of University Online Education Services</span>
      <span className="text-xs text-gray-400">UOES EmTech · 2025–2026</span>
    </div>
  </div>
);

const Bullet = ({ icon = "▸", children }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">{icon}</span>
    <span>{children}</span>
  </li>
);

const Note = ({ children }) => (
  <div className="mt-6 flex items-start gap-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3">
    <span className="text-amber-500 text-lg flex-shrink-0">⚠</span>
    <p className="text-xs sm:text-sm text-amber-800 italic">{children}</p>
  </div>
);

const SectionCard = ({ title, icon, children, accent = false }) => (
  <div className={`rounded-xl p-5 ${accent ? "bg-red-600 text-white" : "bg-gray-50 border border-gray-200"}`}>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xl">{icon}</span>
      <h3 className={`font-bold text-sm uppercase tracking-wide ${accent ? "text-red-100" : "text-gray-500"}`}>{title}</h3>
    </div>
    <div className={accent ? "text-red-50" : "text-gray-700"}>
      {children}
    </div>
  </div>
);

const ComingSoonBadge = () => (
  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full border border-green-200">
    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block"></span>
    Coming Soon
  </span>
);

const slides = [
  // SLIDE 1
  {
    label: "Policy",
    content: (
      <SlideShell tag="AI Policy Update" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Rutgers AI Policy Update
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SectionCard title="Official Hub" icon="🔗">
            <p className="text-sm mb-3">
              Always check the official Rutgers AI resource portal for the latest guidelines and approved tools.
            </p>
            <a
              href="https://it.rutgers.edu/ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              it.rutgers.edu/ai ↗
            </a>
          </SectionCard>

          <SectionCard title="Committee Status" icon="📋">
            <ul className="space-y-3">
              <Bullet icon="✓">AI Technology Committee has submitted initial recommendations</Bullet>
              <Bullet icon="✓">AI Faculty Committee has submitted initial recommendations</Bullet>
              <Bullet icon="⏳">Both committees currently <strong>awaiting official feedback</strong> from administration</Bullet>
            </ul>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 2
  {
    label: "Tools",
    content: (
      <SlideShell tag="End-User Tools" tagColor="bg-blue-600">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Available AI Tools for Staff & Faculty
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-8" />

        <ul className="space-y-4 mb-2">
          <li className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">🪟</span>
            <div>
              <p className="font-bold text-gray-800">Microsoft Copilot</p>
              <p className="text-sm text-gray-600">Now integrated with <strong>ChatGPT 5.2</strong> — enhanced reasoning and coding capabilities available through your Microsoft 365 account.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">🔵</span>
            <div>
              <p className="font-bold text-gray-800">Google Gemini</p>
              <p className="text-sm text-gray-600">Gemini availability through Rutgers Google Workspace — confirm current access tier via IT portal.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">📓</span>
            <div>
              <p className="font-bold text-gray-800">NotebookLM <span className="text-xs font-normal text-gray-400 ml-1">Research</span></p>
              <p className="text-sm text-gray-600">Google's document synthesis tool — excellent for grounding AI in your own uploaded materials and sources.</p>
            </div>
          </li>
        </ul>

        <Note>
          <strong>Pre-meeting check:</strong> Verify the IT portal for any brand-new tool additions before presenting — this list may have grown.
        </Note>
      </SlideShell>
    ),
  },

  // SLIDE 3
  {
    label: "Infrastructure",
    content: (
      <SlideShell tag="Cloud & Dev Tools" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Cloud Options for AI Development
        </h1>
        <div className="w-16 h-1 bg-gray-700 rounded mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SectionCard title="Rutgers Cloud Services Portal" icon="🌐">
            <p className="text-sm mb-3">
              Official hub for cloud computing at Rutgers — provider comparisons, getting started guides, and support contacts.
            </p>
            <a
              href="https://it.rutgers.edu/cloud-services/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gray-700 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              it.rutgers.edu/cloud-services ↗
            </a>
          </SectionCard>

          <SectionCard title="AWS · Amazon Bedrock" icon="☁️" accent={true}>
            <p className="text-sm">
              We currently have <strong>Amazon Key access</strong> to Amazon Bedrock — foundation models available for approved development use.
            </p>
          </SectionCard>

          <SectionCard title="Azure AI Services" icon="🔷">
            <p className="text-sm">
              Additional AI toolsets are accessible through our existing <strong>Microsoft Azure</strong> environment — explore via the Azure portal.
            </p>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 4
  {
    label: "Upcoming",
    content: (
      <SlideShell tag="Pilots & Next Steps" tagColor="bg-green-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Coming Soon: PortKey & WebUI
        </h1>
        <div className="w-16 h-1 bg-green-600 rounded mb-8" />

        <div className="space-y-4 mb-5">
          <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">🔑</span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-gray-800">PortKey</p>
                <ComingSoonBadge />
              </div>
              <p className="text-sm text-gray-600">
                Direct <strong>LLM API management</strong> with built-in usage tracking and cost monitoring — gives us visibility and control across models.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
            <span className="text-2xl flex-shrink-0">🧪</span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-bold text-gray-800">WebUI Pilot</p>
                <ComingSoonBadge />
              </div>
              <p className="text-sm text-gray-600">
                Official pilot launching for <strong>WebUI capabilities on notebooks</strong> — broadening accessible AI interfaces for faculty and students.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-start gap-3">
          <span className="text-xl flex-shrink-0">📅</span>
          <div>
            <p className="font-bold text-red-700 text-sm">Next AI Faculty Committee Meeting</p>
            <p className="text-sm text-red-600">
              Tentatively <strong>March 3</strong> <span className="italic text-red-400">(confirm date)</span> — agenda includes syllabus integration and committee recommendation review.
            </p>
          </div>
        </div>
      </SlideShell>
    ),
  },
];

function Presentation() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col">
      {/* Slide */}
      <div className="flex-1 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative">
          {slides[current].content}
          {/* Slide counter */}
          <div className="absolute top-3 right-3 text-xs text-gray-400 bg-white/80 px-2 py-0.5 rounded-full border border-gray-200">
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all flex items-center gap-2"
        >
          ← Prev
        </button>

        <div className="flex gap-2 items-center">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              title={s.label}
              className={`transition-all rounded-full ${
                i === current
                  ? "w-6 h-2.5 bg-red-600"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all flex items-center gap-2"
        >
          Next →
        </button>
      </div>

      <div className="text-center text-xs text-gray-400 py-2">
        Use ← → arrow keys or spacebar to navigate
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

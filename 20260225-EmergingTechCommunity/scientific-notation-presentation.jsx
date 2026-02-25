const { useState, useEffect } = React;

const slides = [
  {
    id: 1,
    title: "Transcribing Scientific Notation",
    subtitle: "Project Overview & Consolidation",
    accent: "bg-red-600",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            UOES Emerging Technology · Rutgers University
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Transcribing Scientific Notation
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-medium mt-1">
            Project Overview & Consolidation
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <div className="bg-red-600 text-white rounded-xl p-5 flex flex-col">
            <div className="text-3xl font-black mb-2">4</div>
            <div className="text-sm font-bold uppercase tracking-wide mb-2">Distinct Projects</div>
            <p className="text-red-100 text-sm flex-1">
              Four individual initiatives bundled into one cohesive, end-to-end workflow.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="text-red-600 text-2xl mb-2">♿</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Primary Goal</div>
            <p className="text-gray-600 text-sm flex-1">
              Improving accessibility and digitizing complex scientific writing for all learners.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="text-red-600 text-2xl mb-2">🤝</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Collaboration</div>
            <p className="text-gray-600 text-sm flex-1">
              Developed in partnership with <strong>Carmela</strong>, highlighting joint efforts across these initiatives.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Multilingual Voice & STEM Support",
    subtitle: "Multimodal Inputs",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 2 · Multimodal Inputs
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Multilingual Voice & STEM Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5">
              <h3 className="font-bold text-red-700 text-base mb-2">Beyond Text Input</h3>
              <p className="text-gray-700 text-sm">
                Integrating multilingual voice recognition specifically trained and adapted for STEM terminology — expanding who can use these tools.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5">
              <h3 className="font-bold text-red-700 text-base mb-2">Voice + Transcription Pipeline</h3>
              <p className="text-gray-700 text-sm">
                Voice commands and dictation feed directly into the scientific notation transcription workflow — creating a seamless, hands-free path to accessible content.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-5 text-white flex flex-col justify-center">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Key Capability Areas</div>
            {[
              "Multilingual ASR tuned for STEM",
              "Voice-to-notation transcription",
              "Domain vocabulary adaptation",
              "Hands-free accessibility pathway",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-700 last:border-0">
                <span className="text-red-500 font-bold text-sm">0{i + 1}</span>
                <span className="text-gray-200 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Processing Scientific Documents",
    subtitle: "The Workflow: From Input to Analysis",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 3 · Workflow
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Processing Scientific Documents
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Input Sources</div>
            <div className="space-y-3">
              {[
                { icon: "✍️", label: "Handwritten Notes", desc: "Scanned or photographed lab notebooks and problem sets" },
                { icon: "📄", label: "Legacy PDFs", desc: "Older formatted documents without embedded accessibility metadata" },
                { icon: "📷", label: "Image Captures", desc: "Whiteboard photos, slide captures, and document scans" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{item.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis column */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Analysis Process</div>
            <div className="bg-gray-900 rounded-xl p-5 h-full flex flex-col justify-center space-y-4">
              {[
                { step: "01", label: "Layout Parsing", desc: "AI models analyze page structure and spatial arrangement" },
                { step: "02", label: "Symbol Detection", desc: "Distinguish scientific notation from standard prose" },
                { step: "03", label: "Spatial Processing", desc: "Handle fractions, matrices, subscripts, and superscripts" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <span className="text-red-500 font-black text-lg leading-tight">{item.step}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{item.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Evaluating Conversion Outputs",
    subtitle: "Conversion Options & Comparisons",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 4 · Conversion
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Evaluating Conversion Outputs
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Output formats */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Available Output Formats</div>
            <div className="space-y-3">
              {[
                { tag: "LaTeX", color: "bg-red-600 text-white", desc: "Industry standard for academic publishing; high fidelity rendering" },
                { tag: "MathML", color: "bg-gray-800 text-white", desc: "Native browser support; optimal for screen reader compatibility" },
                { tag: "Accessible Text", color: "bg-gray-100 text-gray-800 border border-gray-300", desc: "Plain language descriptions; best for general consumption and LMS integration" },
              ].map((item) => (
                <div key={item.tag} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                  <span className={`text-xs font-black px-2 py-1 rounded flex-shrink-0 ${item.color}`}>{item.tag}</span>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality comparison */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Quality Comparison</div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-gray-700">Printed Text</span>
                  <span className="text-green-600">High Accuracy</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-gray-700">Handwriting</span>
                  <span className="text-yellow-600">Moderate Accuracy</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "58%" }}></div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200">
                <div className="text-xs font-bold text-gray-700 mb-1">Current Limitations</div>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Ambiguous handwritten symbols (e.g., 0 vs θ)</li>
                  <li>• Complex multi-line equations and arrays</li>
                  <li>• Discipline-specific notation variants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Connection to Emerging Tech Research",
    subtitle: "Broader Impact",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 5 · Impact
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Connection to Emerging Tech Research
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Landscape card */}
          <div className="md:col-span-2 bg-gray-900 text-white rounded-xl p-6 flex flex-col">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">The Bigger Picture</div>
            <p className="text-gray-300 text-sm mb-4">
              These four bundled projects aren't isolated experiments — they represent a coherent research thread within Rutgers' broader emerging technology landscape, connecting accessibility, AI literacy, and multimodal data processing.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {[
                "AI Literacy Initiatives",
                "Accessibility Compliance",
                "Faculty Support Tools",
                "Multimodal AI Research",
              ].map((tag) => (
                <div key={tag} className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 font-medium">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* Long-term value */}
          <div className="flex flex-col gap-4">
            <div className="bg-red-600 text-white rounded-xl p-5 flex-1">
              <div className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2">Long-Term Value</div>
              <p className="text-sm text-red-50">
                Creating <strong>standardized, accessible, and queryable</strong> scientific data from previously unstructured documents.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex-1">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Outcome</div>
              <p className="text-gray-700 text-sm">
                Unlocking scientific content for broader research, reuse, and discovery across disciplines.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

function Presentation() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col" role="main">
      {/* Slide area */}
      <div className="flex-1 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl min-h-[480px] sm:min-h-[560px] overflow-hidden flex flex-col">
          <div className="flex-1 overflow-auto">
            {slides[current].content}
          </div>
          <div className="px-6 pb-2 text-right text-xs text-gray-400">
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="sticky bottom-0 bg-white border-t shadow-lg flex items-center justify-center gap-3 p-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
        >
          ← <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex gap-1.5" role="tablist" aria-label="Slide indicators">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="px-4 sm:px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
        >
          <span className="hidden sm:inline">Next</span> →
        </button>
      </nav>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

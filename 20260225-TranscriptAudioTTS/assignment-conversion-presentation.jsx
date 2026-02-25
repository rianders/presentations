const { useState, useEffect } = React;

const slides = [
  {
    id: 1,
    title: "Assignment Conversion Tool",
    subtitle: "Project Overview",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            UOES Emerging Technology · Rutgers University
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Assignment Conversion Tool
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-medium mt-1">
            PDF → Accessible Markdown, HTML & Audio Narration
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <div className="bg-red-600 text-white rounded-xl p-5 flex flex-col">
            <div className="text-3xl font-black mb-2">6+</div>
            <div className="text-sm font-bold uppercase tracking-wide mb-2">AI-Powered Tools</div>
            <p className="text-red-100 text-sm flex-1">
              A modular pipeline of specialized tools: OCR, analysis, summarization, image description, TTS, and assembly.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="text-red-600 text-2xl mb-2">♿</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">WCAG 2.1 AA</div>
            <p className="text-gray-600 text-sm flex-1">
              AI-generated alt text and audio narration make every assignment accessible to all learners.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="text-red-600 text-2xl mb-2">🌍</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Multi-Language</div>
            <p className="text-gray-600 text-sm flex-1">
              Bilingual summaries and native-quality TTS for Italian, Spanish, French, German, Portuguese, and more.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "End-to-End Pipeline",
    subtitle: "From PDF to Accessible Content",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 2 · Pipeline
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            End-to-End Pipeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {/* Steps */}
          <div className="bg-gray-900 rounded-xl p-5 flex flex-col justify-center space-y-4">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Sequential Stages</div>
            {[
              { step: "01", label: "PDF Extraction", desc: "OCR + layout parsing via DeepSeek-OCR-2 or PyMuPDF" },
              { step: "02", label: "Document Analysis", desc: "Detects document type, STEM content, and structure" },
              { step: "03", label: "Bilingual Summary", desc: "Qwen3.5 Plus (1M context) generates EN + target-language summaries — no chunking needed" },
              { step: "04", label: "Image Description", desc: "Qwen3.5 Plus vision writes WCAG-compliant alt text (parallel) — same model, no extra API call" },
              { step: "05", label: "Audio Narration", desc: "Qwen3-TTS generates chunked WAV audio per section" },
              { step: "06", label: "Final Assembly", desc: "Markdown + themed HTML output with embedded media" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <span className="text-red-500 font-black text-lg leading-tight flex-shrink-0">{item.step}</span>
                <div>
                  <div className="text-white font-bold text-sm">{item.label}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Output */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Output Structure</div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-xs text-gray-600 flex-1">
              <div className="text-gray-400 mb-2">output/lesson_name/</div>
              {[
                { indent: 1, name: "assignment.md", note: "← final markdown" },
                { indent: 1, name: "assignment.html", note: "← themed HTML" },
                { indent: 1, name: "manifest.json", note: "← run metadata" },
                { indent: 1, name: "artifacts/", note: "" },
                { indent: 2, name: "extraction.json", note: "" },
                { indent: 2, name: "summary.json", note: "" },
                { indent: 1, name: "images/", note: "← extracted PNGs" },
                { indent: 1, name: "audio/", note: "← WAV chunks" },
              ].map((f, i) => (
                <div key={i} style={{ paddingLeft: `${f.indent * 12}px` }} className="leading-6">
                  <span className="text-gray-800">{f.name}</span>
                  {f.note && <span className="text-red-500 ml-2">{f.note}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "OCR & Document Extraction",
    subtitle: "Input Handling Across Platforms",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 3 · Extraction
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            OCR & Document Extraction
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Backends */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">OCR Backends</div>
            <div className="space-y-3">
              {[
                {
                  tag: "DeepSeek-OCR-2",
                  color: "bg-red-600 text-white",
                  platform: "Linux · CUDA GPU",
                  desc: "3B parameter model, 91.09 OmniDocBench accuracy. Best for complex layouts, tables, and LaTeX math.",
                },
                {
                  tag: "PyMuPDF4LLM",
                  color: "bg-gray-800 text-white",
                  platform: "Mac · Cross-platform",
                  desc: "Layout-preserving extraction with reading order detection. No GPU required.",
                },
              ].map((item) => (
                <div key={item.tag} className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-black px-2 py-1 rounded ${item.color}`}>{item.tag}</span>
                    <span className="text-xs text-gray-400 font-medium">{item.platform}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Input sources */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Supported Input Types</div>
            <div className="space-y-3">
              {[
                { icon: "📄", label: "Native PDFs", desc: "Text-embedded PDFs with complex multi-column layouts" },
                { icon: "🖼️", label: "Scanned PDFs", desc: "Rasterized pages without selectable text — full OCR applied" },
                { icon: "📐", label: "STEM Documents", desc: "Formulas, tables, LaTeX, matrices, and mixed content" },
                { icon: "📚", label: "Batch Processing", desc: "Multiple PDFs in a single command with shared TTS model cache" },
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
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "AI Capabilities",
    subtitle: "Summarization, Vision & STEM",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 4 · AI Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            AI Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5">
              <h3 className="font-bold text-red-700 text-base mb-2">Bilingual Summaries</h3>
              <p className="text-gray-700 text-sm">
                LLM-generated summaries in both English and the target language, using whole-document context for accuracy. Supports HuggingFace and OpenRouter providers.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5">
              <h3 className="font-bold text-red-700 text-base mb-2">Parallel Image Descriptions</h3>
              <p className="text-gray-700 text-sm">
                Multimodal vision model generates context-aware alt text (≤125 chars) concurrently across all images using ThreadPoolExecutor — WCAG 2.1 AA compliant.
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-5">
              <h3 className="font-bold text-red-700 text-base mb-2">STEM Content Detection</h3>
              <p className="text-gray-700 text-sm">
                Automatically identifies LaTeX formulas, tables, definitions, and complex notation. MathJax or MathML rendering in HTML output.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-5 text-white flex flex-col justify-center">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Supported LLM Providers</div>
            {[
              { name: "HuggingFace Router", model: "Qwen2.5-72B / Qwen2.5-VL-7B", tag: "Default" },
              { name: "OpenRouter", model: "Qwen3.5 Plus · DeepSeek-V3 · Gemini 2.5 Flash", tag: "Recommended" },
              { name: "Ollama (local)", model: "Any locally hosted model", tag: "Optional" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-gray-700 last:border-0">
                <span className="text-red-500 font-black text-sm flex-shrink-0">0{i + 1}</span>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">{item.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{item.model}</div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded font-medium flex-shrink-0 ${i === 1 ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300"}`}>
                  {item.tag}
                </span>
              </div>
            ))}
            <div className="mt-4 bg-gray-800 rounded-lg p-3 border border-gray-600">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Why Qwen3.5 Plus via OpenRouter</div>
              {[
                "1M token context — entire document in one pass, no chunking",
                "Text + image + video inputs — one model handles steps 03 & 04",
                "$0.40/M input tokens — cost-effective for batch processing",
                "Future: route through PortKey for unified API management",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1 border-b border-gray-700 last:border-0">
                  <span className="text-red-500 text-xs">▸</span>
                  <span className="text-gray-300 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Audio Narration with Qwen3-TTS",
    subtitle: "Teaching-Quality Voice Generation",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 5 · Audio
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Audio Narration with Qwen3-TTS
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Built-in Voice Styles</div>
            <div className="space-y-2">
              {[
                { flag: "🇮🇹", lang: "Italian", style: "Voce di insegnante, ritmo lento, pronuncia chiara." },
                { flag: "🇪🇸", lang: "Spanish", style: "Voz de profesor, ritmo lento, pronunciación clara." },
                { flag: "🇫🇷", lang: "French", style: "Voix d'enseignant, rythme lent, prononciation claire." },
                { flag: "🇩🇪", lang: "German", style: "Lehrerstimme, langsames Tempo, klare Aussprache." },
                { flag: "🇬🇧", lang: "English", style: "Teacher voice, slow pace, clear pronunciation." },
              ].map((item) => (
                <div key={item.lang} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <span className="text-lg flex-shrink-0">{item.flag}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{item.lang}</div>
                    <div className="text-gray-500 text-xs mt-0.5 italic">{item.style}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gray-900 rounded-xl p-5 text-white flex-1">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Key Features</div>
              {[
                "Direct Python API — no subprocess overhead",
                "Smart chunking at sentence boundaries (NLTK)",
                "GPU-accelerated: CUDA (Linux) + MPS (Apple Silicon)",
                "Model cache reused across batch documents",
                "Custom voice style via natural language prompt",
                "Explicit speaker pinning (--tts-speaker)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-700 last:border-0">
                  <span className="text-red-500 font-bold text-xs flex-shrink-0">✓</span>
                  <span className="text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-red-600 text-white rounded-xl p-4">
              <div className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">Default Model</div>
              <div className="font-black text-base">Qwen3-TTS-12Hz-0.6B</div>
              <div className="text-red-100 text-xs mt-1">~600 MB · auto-downloaded on first run</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Accessibility & Output Formats",
    subtitle: "WCAG 2.1 AA · Themed HTML · Responsive Grids",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 6 · Output
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Accessibility & Output Formats
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HTML themes */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">HTML Themes</div>
            <div className="space-y-3">
              {[
                { tag: "tailwind-bilingual", color: "bg-red-600 text-white", desc: "Side-by-side EN + target language layout; default for language learning" },
                { tag: "tailwind-high-contrast", color: "bg-gray-800 text-white", desc: "Maximum contrast; optimized for low-vision users" },
                { tag: "tailwind-notebook", color: "bg-gray-100 text-gray-800 border border-gray-300", desc: "Clean notebook-style reading layout" },
                { tag: "tailwind-audio", color: "bg-gray-100 text-gray-800 border border-gray-300", desc: "Audio-first layout with prominent player controls" },
              ].map((item) => (
                <div key={item.tag} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                  <span className={`text-xs font-black px-2 py-1 rounded flex-shrink-0 ${item.color}`}>{item.tag}</span>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility signals */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Accessibility Signals</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-700">Alt Text Coverage</span>
                    <span className="text-green-600">AI-generated, 100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-700">Audio Narration</span>
                    <span className="text-green-600">Per-section WAV</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-700">STEM Math Rendering</span>
                    <span className="text-yellow-600">MathJax / MathML</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-5 flex-1">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">Responsive Image Grids</div>
              {[
                "1 image → full width",
                "2–4 images → 2-column grid",
                "5–6 images → 2→3 column responsive",
                "7+ images → 2→3→4 column responsive",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-700 last:border-0">
                  <span className="text-red-500 font-bold text-xs">▸</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Getting Started",
    subtitle: "CLI, Streamlit UI & Provider Setup",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 7 · Getting Started
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Getting Started
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick start */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Quick Start (CLI)</div>
            <div className="bg-gray-900 rounded-xl p-5 font-mono text-xs text-gray-300 space-y-3">
              <div>
                <div className="text-gray-500 mb-1"># Install dependencies</div>
                <div className="text-green-400">uv sync</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1"># Set your API key</div>
                <div className="text-yellow-300">export HUGGINGFACE_TOKEN=<span className="text-gray-400">"hf_..."</span></div>
              </div>
              <div>
                <div className="text-gray-500 mb-1"># Convert a PDF</div>
                <div className="text-green-400">{"assignment-conversion main \\"}</div>
                <div className="text-green-400 pl-4">{"--pdf lesson.pdf \\"}</div>
                <div className="text-green-400 pl-4">{"--language Italian"}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1"># Launch Streamlit UI</div>
                <div className="text-green-400">{"uv run -- streamlit run streamlit_app.py"}</div>
              </div>
            </div>
          </div>

          {/* Two interface modes */}
          <div className="flex flex-col gap-4">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Interface Options</div>
            <div className="bg-red-600 text-white rounded-xl p-5 flex-1">
              <div className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2">CLI</div>
              <p className="text-sm text-red-50 mb-3">
                Full control over every parameter — provider, model, OCR backend, voice style, chunk size, and incremental re-runs.
              </p>
              {["--skip-audio (markdown only)", "--audio-only (re-generate TTS)", "--images-only (re-describe images)"].map((f, i) => (
                <div key={i} className="text-red-100 text-xs font-mono border-t border-red-500 py-1.5">{f}</div>
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex-1">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Streamlit UI</div>
              <p className="text-gray-700 text-sm mb-2">
                Guided 7-page workflow with Faculty and Expert modes. Single-page runner for quick faculty conversions.
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Faculty (guided)", "Expert (full controls)", "Step-by-step", "Single-page runner"].map((tag) => (
                  <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded font-medium">{tag}</span>
                ))}
              </div>
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
          className="px-4 sm:px6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
        >
          <span className="hidden sm:inline">Next</span> →
        </button>
      </nav>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

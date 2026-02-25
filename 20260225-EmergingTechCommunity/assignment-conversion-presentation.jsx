const { useState, useEffect } = React;

const slides = [
  {
    id: 1,
    title: "Making Assignments Accessible Shouldn't Take Hours",
    subtitle: "Overview",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            UOES Emerging Technology · Rutgers University
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Making Assignments Accessible Shouldn't Take Hours
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-medium mt-1">
            Upload a PDF. Get back accessible content — ready for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
          <div className="bg-red-600 text-white rounded-xl p-5 flex flex-col">
            <div className="text-3xl mb-2">⏱️</div>
            <div className="text-sm font-bold uppercase tracking-wide mb-2">Minutes, Not Hours</div>
            <p className="text-red-100 text-sm flex-1">
              What used to take significant manual effort now happens automatically — so you can focus on teaching, not formatting.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="text-red-600 text-3xl mb-2">🎧</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Every Student Reached</div>
            <p className="text-gray-600 text-sm flex-1">
              Audio narration, image descriptions, and bilingual summaries mean your content works for students with different abilities and backgrounds.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col">
            <div className="text-red-600 text-3xl mb-2">🌍</div>
            <div className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">Multi-Language Support</div>
            <p className="text-gray-600 text-sm flex-1">
              Bilingual summaries and native-quality audio narration in Italian, Spanish, French, German, and more.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Three Steps for Faculty",
    subtitle: "How It Works",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 2 · How It Works
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Three Steps for Faculty
          </h2>
          <p className="text-gray-500 text-base mt-1">No technical expertise needed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {[
            { step: "1", icon: "📄", label: "Upload Your PDF", desc: "Any assignment — text-heavy, scanned, math formulas, charts, images. The tool handles it all." },
            { step: "2", icon: "🌐", label: "Choose a Language", desc: "Select the target language for bilingual summaries and audio narration. English is always included." },
            { step: "3", icon: "⬇️", label: "Download & Share", desc: "Get back a polished, accessible web page and audio files — ready to post directly to Canvas." },
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center text-center bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">{item.step}</div>
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-bold text-gray-900 text-base mb-2">{item.label}</div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <p className="text-red-700 text-sm">
            <strong>Used through a simple web interface</strong> — open it in your browser, upload, click go. No installs, no command line.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "What Students Receive",
    subtitle: "Output for Every Learner",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 3 · Student Experience
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            What Students Receive
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
          {[
            {
              icon: "🌐",
              label: "Accessible Web Page",
              desc: "A clean, readable version of the assignment that works on any device — phone, tablet, or laptop. No PDF viewer required.",
            },
            {
              icon: "🎧",
              label: "Audio Narration",
              desc: "A natural-sounding audio version of the assignment, section by section. Helps students with visual impairments, reading difficulties, or those who learn better by listening.",
            },
            {
              icon: "🌍",
              label: "Bilingual Summary",
              desc: "A side-by-side summary in English and the target language — helps non-native speakers engage with the material more confidently.",
            },
            {
              icon: "🖼️",
              label: "Described Images",
              desc: "Every chart, diagram, and image gets an AI-written description — so no student is left out when the content is visual.",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="font-bold text-gray-900 text-base mb-1">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Who Benefits Most",
    subtitle: "Reaching Every Student",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 4 · Impact
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Who Benefits Most
          </h2>
          <p className="text-gray-500 text-base mt-1">Designed for specific needs — helpful for everyone.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
          {[
            {
              icon: "👁️",
              label: "Students with Visual Impairments",
              desc: "Audio narration and described images mean the full content of an assignment is available — not just the text portions.",
              tag: "Accessibility",
              tagColor: "bg-red-100 text-red-700",
            },
            {
              icon: "🗣️",
              label: "Non-Native English Speakers",
              desc: "Bilingual summaries in the student's home language help them grasp the assignment expectations before diving into the English version.",
              tag: "Language Support",
              tagColor: "bg-blue-100 text-blue-700",
            },
            {
              icon: "📖",
              label: "Students with Reading Differences",
              desc: "Dyslexia, processing differences, and attention challenges all benefit from having audio alongside readable text — at their own pace.",
              tag: "Learning Differences",
              tagColor: "bg-green-100 text-green-700",
            },
            {
              icon: "🎓",
              label: "All Students",
              desc: "Cleaner formatting, structured summaries, and audio options help every student engage more deeply — not just those with specific needs.",
              tag: "Universal Design",
              tagColor: "bg-purple-100 text-purple-700",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <span className="text-3xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.tagColor}`}>{item.tag}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Works With Your Most Complex Assignments",
    subtitle: "STEM, Scanned, and Multi-Column Layouts",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 5 · Content Types
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Works With Your Most Complex Assignments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="space-y-4">
            {[
              { icon: "📐", label: "STEM & Math-Heavy Documents", desc: "Formulas, equations, and tables are recognized and rendered correctly — not garbled into meaningless characters." },
              { icon: "🖼️", label: "Scanned PDFs", desc: "Even older scanned documents without selectable text are fully processed — the tool reads the page like a human would." },
              { icon: "📄", label: "Complex Layouts", desc: "Multi-column papers, sidebars, footnotes, and mixed content all come through in the right reading order." },
              { icon: "📚", label: "Batch Processing", desc: "Need to convert an entire course packet? Submit multiple PDFs at once and get all outputs in one run." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                  <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-xl p-6 text-white flex flex-col justify-center">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Under the Hood</div>
            <p className="text-gray-300 text-sm mb-5">
              The tool uses a combination of AI models working in sequence — reading the PDF, understanding the content, writing descriptions, and generating audio. Faculty don't interact with any of this directly.
            </p>
            {[
              "Reads and understands the full document",
              "Writes summaries with full context — not paragraph by paragraph",
              "Describes every image with awareness of the surrounding content",
              "Generates natural-sounding audio per section",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-700 last:border-0">
                <span className="text-red-500 text-xs mt-1 flex-shrink-0">✓</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Languages & Audio",
    subtitle: "Native-Quality Narration for Your Students",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 6 · Languages & Audio
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Languages & Audio
          </h2>
          <p className="text-gray-500 text-base mt-1">Every output includes English. Add any of the languages below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Supported Languages</div>
            <div className="space-y-2">
              {[
                { flag: "🇮🇹", lang: "Italian", note: "Voce di insegnante — teacher voice, clear pace" },
                { flag: "🇪🇸", lang: "Spanish", note: "Voz de profesor — teacher voice, clear pace" },
                { flag: "🇫🇷", lang: "French", note: "Voix d'enseignant — teacher voice, clear pace" },
                { flag: "🇩🇪", lang: "German", note: "Lehrerstimme — teacher voice, clear pace" },
                { flag: "🇬🇧", lang: "English", note: "Teacher voice, slow pace, clear pronunciation" },
              ].map((item) => (
                <div key={item.lang} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <span className="text-xl flex-shrink-0">{item.flag}</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{item.lang}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-red-600 text-white rounded-xl p-5">
              <div className="text-red-200 text-xs font-bold uppercase tracking-widest mb-2">What the Audio Sounds Like</div>
              <p className="text-sm text-red-50">
                The narration is paced like a teacher reading aloud — not a robotic voice, not rushed. Students can listen section by section alongside the text.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex-1">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">What Gets Narrated</div>
              {[
                "Every section and paragraph of the assignment",
                "Bilingual summary — English, then target language",
                "Section headings read aloud for navigation",
                "Math and formulas read in plain language",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5 border-b border-gray-200 last:border-0">
                  <span className="text-red-500 text-xs mt-1 flex-shrink-0">▸</span>
                  <span className="text-gray-700 text-sm">{item}</span>
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
    title: "Try It — No Setup Required",
    subtitle: "Open the Interface and Go",
    content: (
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-6 pb-4 border-b-4 border-red-600">
          <div className="text-xs font-bold tracking-widest text-red-600 uppercase mb-1">
            Slide 7 · Getting Started
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 leading-tight">
            Try It — No Setup Required
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          <div className="flex flex-col gap-4">
            <div className="bg-red-600 text-white rounded-xl p-6 flex-1">
              <div className="text-red-200 text-xs font-bold uppercase tracking-widest mb-3">For Faculty</div>
              <p className="text-red-50 text-sm mb-4">
                Open the Streamlit interface in your browser. Upload your PDF, pick a language, and hit go. Your accessible assignment is ready to download and post.
              </p>
              <div className="space-y-2">
                {[
                  "No installation needed",
                  "Guided step-by-step workflow",
                  "Works with any PDF you already have",
                  "Output ready to post to Canvas",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-red-300 font-bold text-xs">✓</span>
                    <span className="text-red-50 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">For Scripted & Bulk Conversion</div>
              <p className="text-gray-600 text-sm">
                A command-line interface is also available for converting large batches of PDFs at once — useful for converting an entire course's materials in one run.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-gray-900 rounded-xl p-6 text-white flex-1 flex flex-col justify-center">
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Questions We're Ready to Answer</div>
              {[
                "Can this handle my existing PDFs without changes?",
                "How do I post the output to Canvas?",
                "Which languages are supported right now?",
                "What happens with math or science content?",
                "Can I run it on a whole course packet at once?",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-700 last:border-0">
                  <span className="text-red-500 text-xs mt-1 flex-shrink-0">?</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
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

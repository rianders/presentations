const { useState, useEffect } = React;

const UOESLogo = () => (
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
      <UOESLogo />
      <span className={`text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full ${tagColor}`}>
        {tag}
      </span>
    </div>
    <div className="flex-1 overflow-auto p-6 sm:p-10">
      {children}
    </div>
    <div className="px-6 py-2 border-t border-gray-100 flex justify-between items-center">
      <span className="text-xs text-gray-400">Office of University Online Education Services</span>
      <span className="text-xs text-gray-400">Prompting Cookbook · April 2026</span>
    </div>
  </div>
);

const SectionCard = ({ title, icon, children, accent = false }) => (
  <div className={`rounded-xl p-5 ${accent ? "bg-red-50 border-l-4 border-red-500" : "bg-gray-50 border border-gray-200"}`}>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xl">{icon}</span>
      <h3 className={`font-bold text-sm uppercase tracking-wide ${accent ? "text-red-700" : "text-gray-500"}`}>{title}</h3>
    </div>
    <div className={accent ? "text-gray-800 text-sm" : "text-gray-700 text-sm"}>
      {children}
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
  <div className="mt-5 flex items-start gap-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3">
    <span className="text-amber-500 text-lg flex-shrink-0">⚠</span>
    <p className="text-xs sm:text-sm text-amber-800 italic">{children}</p>
  </div>
);

const CodeBlock = ({ children }) => (
  <div className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-xs leading-relaxed overflow-x-auto my-4">
    <pre className="whitespace-pre-wrap">{children}</pre>
  </div>
);

const Tag = ({ color = "bg-blue-100 text-blue-700", children }) => (
  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>{children}</span>
);

const Placeholder = ({ label, children }) => (
  <div className="border-2 border-dashed border-amber-400 rounded-xl p-4 my-4 bg-amber-50">
    <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">📝 Prompt Placeholder · {label}</p>
    <p className="text-xs text-amber-800 italic">{children}</p>
  </div>
);

const slides = [

  // ── TITLE ──
  {
    label: "Title",
    content: (
      <SlideShell tag="Faculty Workshop" tagColor="bg-red-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">University Online Education Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-2">
            Prompting
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-red-600 leading-tight mb-4">
            Cookbook
          </h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-6">
            A hands-on workshop exploring prompt engineering as a key ingredient in course design — from learning objectives through assessments, active learning activities, and instructional aids.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag color="bg-red-100 text-red-700">Context Engineering</Tag>
            <Tag color="bg-amber-100 text-amber-700">Course Design</Tag>
            <Tag color="bg-blue-100 text-blue-700">Prompt Recipes</Tag>
            <Tag color="bg-emerald-100 text-emerald-700">Hands-On</Tag>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            <div>
              <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
              <p className="text-xs text-gray-500">Director of Emerging Technology, UOES</p>
              <p className="text-xs text-gray-400">Friday, April 10, 2026 · 11:00 AM – 12:30 PM</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 1: WORKSHOP GOAL ──
  {
    label: "Workshop Goal",
    content: (
      <SlideShell tag="Section 1" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Workshop Goal
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />
        <ul className="space-y-5">
          <Bullet icon="▸">
            Develop understanding of <strong>context engineering</strong>
          </Bullet>
          <Bullet icon="▸">
            Understand how prompts fit within a <strong>larger AI interaction design</strong>
          </Bullet>
          <Bullet icon="▸">
            Enable faculty to create reusable <strong>"prompt recipes"</strong>
          </Bullet>
        </ul>
      </SlideShell>
    ),
  },

  // ── 2: FOUNDATIONS: CONTEXT ENGINEERING ──
  {
    label: "Context Engineering",
    content: (
      <SlideShell tag="Section 2" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Foundations: Context Engineering
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SectionCard title="Prompt vs Context" icon="💬">
            <p>The prompt is only <strong>one component</strong> of the full AI interaction — context surrounds and shapes it.</p>
          </SectionCard>
          <SectionCard title="Large Context Windows" icon="📄">
            <p>Feed documents, syllabi, and assignments directly — the AI works <strong>within your materials</strong>.</p>
          </SectionCard>
          <SectionCard title="Multimodal Capabilities" icon="🖼️">
            <p>Text, images, diagrams, and PDFs — modern models can read and reason across <strong>multiple formats</strong>.</p>
          </SectionCard>
          <SectionCard title="Full Interaction Environment" icon="🏗️" accent={true}>
            <p>The goal is designing the <strong>complete environment</strong> around the AI, not just crafting the perfect sentence.</p>
          </SectionCard>
        </div>
        <Placeholder label="Prompt vs Context Demo">
          Show a bare prompt ("Write a quiz") side-by-side with a context-rich version that includes course name, learning objective, student level, and format requirements — illustrating how context shapes the output.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 3: MODEL CAPABILITIES OVERVIEW ──
  {
    label: "Model Capabilities",
    content: (
      <SlideShell tag="Section 3" tagColor="bg-indigo-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Model Capabilities Overview
        </h1>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SectionCard title="Text Generation & Transformation" icon="✍️">
            <p>Draft, rewrite, summarize, expand — the model transforms text in any direction you specify.</p>
          </SectionCard>
          <SectionCard title="Vision Models" icon="👁️">
            <p>Image and document understanding — read charts, figures, scanned PDFs, and handwritten materials.</p>
          </SectionCard>
          <SectionCard title="Document Summarization & Extraction" icon="📋">
            <p>Extract key information, structure unstructured content, and produce formatted outputs from long documents.</p>
          </SectionCard>
          <SectionCard title="Limitations of Zero-Shot Knowledge" icon="⚠️" accent={true}>
            <p>Without context, the model guesses. Supply your materials — course scope, student level, learning goals — to constrain and ground the output.</p>
          </SectionCard>
        </div>
        <Placeholder label="Zero-Shot vs Grounded Prompt">
          Show a zero-shot request ("Summarize this topic") versus a grounded request that attaches the actual course reading and asks for a summary constrained to that document's content only.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 4.1: USE CASES — ACCESSIBILITY ──
  {
    label: "Accessibility",
    content: (
      <SlideShell tag="Section 4.1 · Use Cases" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Core Faculty Use Cases
        </h1>
        <p className="text-lg font-bold text-emerald-700 mb-2">Accessibility</p>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Convert inaccessible PDFs → <strong>structured Canvas activities</strong>
          </Bullet>
          <Bullet icon="▸">
            Extract images and generate <strong>alt-text</strong>
          </Bullet>
          <Bullet icon="▸">
            <strong>Math transcription</strong> (without solving)
          </Bullet>
          <Bullet icon="▸">
            Diagram conversion (e.g., flowcharts → <strong>structured formats</strong>)
          </Bullet>
        </ul>
        <Placeholder label="Alt-Text Generation Prompt">
          Prompt for uploading an image/figure and requesting a screen-reader-compatible alt-text description: type of visual, key data or labels, trend or conclusion a reader should draw — without solving or interpreting beyond what is shown.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 4.2: USE CASES — ASSIGNMENTS ──
  {
    label: "Assignments",
    content: (
      <SlideShell tag="Section 4.2 · Use Cases" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Core Faculty Use Cases
        </h1>
        <p className="text-lg font-bold text-emerald-700 mb-2">Assignments</p>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Static → <strong>interactive assignment conversion</strong>
          </Bullet>
          <Bullet icon="▸">
            Activity scaffolding for <strong>different student levels</strong>
          </Bullet>
          <Bullet icon="▸">
            Generating <strong>completion artifacts</strong> (printable submission pages)
          </Bullet>
        </ul>
        <Placeholder label="Static → Interactive Assignment Prompt">
          Prompt for converting a traditional written assignment into an interactive step-by-step activity: specify subject, student level, desired output format (self-contained HTML), and scaffolding approach (hints, progressive disclosure, etc.).
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 4.3: USE CASES — SYLLABUS AS CONTEXT ENGINE ──
  {
    label: "Syllabus as Context",
    content: (
      <SlideShell tag="Section 4.3 · Use Cases" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Core Faculty Use Cases
        </h1>
        <p className="text-lg font-bold text-emerald-700 mb-2">Syllabus as Context Engine</p>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Use the syllabus as the <strong>primary framing document</strong>
          </Bullet>
          <Bullet icon="▸">
            Constrain AI outputs to <strong>course scope</strong>
          </Bullet>
          <Bullet icon="▸">
            Improve the syllabus via <strong>structured critique prompts</strong>
          </Bullet>
        </ul>
        <Placeholder label="Syllabus as Context Engine Prompt">
          Prompt that pastes the full syllabus as context, then asks the AI to generate module-level learning objectives aligned to the stated course goals — constrained strictly to the scope described in the syllabus.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 4.4: USE CASES — RUBRICS & FEEDBACK ──
  {
    label: "Rubrics & Feedback",
    content: (
      <SlideShell tag="Section 4.4 · Use Cases" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Core Faculty Use Cases
        </h1>
        <p className="text-lg font-bold text-emerald-700 mb-2">Rubrics & Feedback</p>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Generate <strong>aligned rubrics</strong>
          </Bullet>
          <Bullet icon="▸">
            Multi-level feedback (<strong>beginner → advanced</strong>)
          </Bullet>
          <Bullet icon="▸">
            Support <strong>differentiated learning paths</strong>
          </Bullet>
        </ul>
        <Placeholder label="Rubric Generation Prompt">
          Prompt for generating a rubric aligned to a specific learning objective: include the assignment description, desired performance levels (e.g., Excellent / Proficient / Developing / Beginning), and criteria drawn from the course goals.
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 5.1: EMBEDDING CONSTRAINTS — INSTITUTIONAL REQUIREMENTS ──
  {
    label: "Institutional Requirements",
    content: (
      <SlideShell tag="Section 5.1 · Constraints" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Embedding Constraints into Prompts
        </h1>
        <p className="text-lg font-bold text-amber-700 mb-2">Institutional Requirements</p>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Department-required <strong>syllabus elements</strong>
          </Bullet>
          <Bullet icon="▸">
            <strong>Assignment constraints</strong>
          </Bullet>
          <Bullet icon="▸">
            <strong>Academic integrity</strong> expectations
          </Bullet>
        </ul>
        <Placeholder label="Institutional Constraints Prompt">
          Prompt that embeds department requirements directly: e.g., "The following syllabus elements are required by my department: [list]. Review my draft syllabus and identify any missing elements. Do not suggest changes beyond this checklist."
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 5.2: EMBEDDING CONSTRAINTS — POLICY-AWARE PROMPTING ──
  {
    label: "Policy-Aware Prompting",
    content: (
      <SlideShell tag="Section 5.2 · Constraints" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Embedding Constraints into Prompts
        </h1>
        <p className="text-lg font-bold text-amber-700 mb-2">Policy-Aware Prompting</p>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Avoid sensitive data (<strong>FERPA, PHI</strong>)
          </Bullet>
          <Bullet icon="▸">
            Use approved tools (<strong>Gemini, Copilot</strong>)
          </Bullet>
          <Bullet icon="▸">
            Add <strong>validation steps</strong> into prompts
          </Bullet>
        </ul>
        <Placeholder label="Policy-Aware Prompt">
          Prompt that explicitly states tool and data constraints before the task: "Use only Gemini via my ScarletMail account. Do not include any student names, IDs, or identifiable information. After generating, flag anything that may require human review for accuracy."
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 5.3: EMBEDDING CONSTRAINTS — BEST PRACTICES AS PROMPT CONTEXT ──
  {
    label: "Best Practices",
    content: (
      <SlideShell tag="Section 5.3 · Constraints" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          Embedding Constraints into Prompts
        </h1>
        <p className="text-lg font-bold text-amber-700 mb-2">Best Practices as Prompt Context</p>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />
        <ul className="space-y-4">
          <Bullet icon="▸">
            Universal Design for Learning (<strong>UDL</strong>)
          </Bullet>
          <Bullet icon="▸">
            <strong>Accessibility standards</strong>
          </Bullet>
          <Bullet icon="▸">
            <strong>Pedagogical best practices</strong>
          </Bullet>
        </ul>
        <Placeholder label="UDL-Aware Prompt">
          Prompt that embeds UDL principles as constraints: "Design this activity with multiple means of engagement. Provide options for how students can represent their understanding. Ensure instructions are plain language and do not assume prior familiarity with the tools."
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 6: TOOLING: RUTGERS ENVIRONMENT ──
  {
    label: "Rutgers Tooling",
    content: (
      <SlideShell tag="Section 6" tagColor="bg-blue-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Tooling: Rutgers Environment
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <SectionCard title="Primary Tools" icon="🛠️" accent={true}>
            <ul className="space-y-2">
              <li className="text-sm"><strong>Google Gemini</strong> (Google Cloud / ScarletMail)</li>
              <li className="text-sm"><strong>Microsoft 365 Copilot</strong></li>
            </ul>
          </SectionCard>
          <SectionCard title="Observed Limitations" icon="⚠️">
            <ul className="space-y-2 text-sm">
              <li>Inconsistent feature behavior (e.g., file export issues)</li>
              <li>Partial integrations (not full Office embedding)</li>
              <li>Differences in multimodal capabilities</li>
              <li>"Agent-like" tools that are <strong>not true agents</strong></li>
            </ul>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  // ── 7: INFRASTRUCTURE REALITY ──
  {
    label: "Infrastructure",
    content: (
      <SlideShell tag="Section 7" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Infrastructure Reality
        </h1>
        <div className="w-16 h-1 bg-gray-600 rounded mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SectionCard title="Key Constraint" icon="🔑" accent={true}>
            <p>Interactive activities must be <strong>hosted</strong> — they cannot live as local files.</p>
          </SectionCard>
          <SectionCard title="Current Workarounds" icon="🔧">
            <ul className="space-y-2 text-sm">
              <li>Static HTML generation</li>
              <li>External hosting (Drive / OneDrive / other)</li>
              <li>iframe embedding into Canvas (if allowed)</li>
            </ul>
          </SectionCard>
          <SectionCard title="Submission Strategy" icon="📤">
            <p>Generate <strong>completion/summary pages</strong> for student submission.</p>
          </SectionCard>
        </div>
        <Placeholder label="Hosted Activity Generation Prompt">
          Prompt for generating a self-contained HTML activity: "Output a single HTML file with no external dependencies. The activity should work when pasted into a Canvas page or uploaded to Google Drive and opened in a browser."
        </Placeholder>
      </SlideShell>
    ),
  },

  // ── 8: LOCAL AI OPTION ──
  {
    label: "Local AI",
    content: (
      <SlideShell tag="Section 8" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Local AI Option
        </h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-6" />
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-purple-900 font-semibold">Use local tools (e.g., <strong>LM Studio</strong>) to run AI models entirely on your own machine.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SectionCard title="No Data Privacy Concerns" icon="🔒">
            <p className="text-sm">Nothing leaves your device — safe for sensitive course materials and student data.</p>
          </SectionCard>
          <SectionCard title="Full Experimentation Freedom" icon="🧪">
            <p className="text-sm">Try any model without institutional restrictions or account requirements.</p>
          </SectionCard>
          <SectionCard title="Safe Prompt Testing" icon="✅" accent={true}>
            <p className="text-sm">Develop and refine prompt recipes in a <strong>fully contained environment</strong> before using institutional tools.</p>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  // ── 9: HANDS-ON ACTIVITIES ──
  {
    label: "Hands-On",
    content: (
      <SlideShell tag="Section 9 · Workshop" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Hands-On Activities
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />
        <ul className="space-y-5">
          <Bullet icon="▸">
            Guided prompt exercises using <strong>real course materials</strong>
          </Bullet>
          <Bullet icon="▸">
            Breakout groups <strong>(Zoom)</strong>
          </Bullet>
          <Bullet icon="▸">
            <strong>Prompt recipe development</strong>
          </Bullet>
        </ul>
      </SlideShell>
    ),
  },

  // ── 10: REFLECTION & READOUT ──
  {
    label: "Reflection",
    content: (
      <SlideShell tag="Section 10 · Readout" tagColor="bg-teal-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Reflection & Readout
        </h1>
        <div className="w-16 h-1 bg-teal-600 rounded mb-6" />
        <p className="text-sm text-gray-600 mb-6">Participants share:</p>
        <ul className="space-y-4 mb-6">
          <Bullet icon="▸">
            Prompts they <strong>created</strong>
          </Bullet>
          <Bullet icon="▸">
            <strong>Unexpected results</strong>
          </Bullet>
        </ul>
        <div className="bg-teal-50 border-l-4 border-teal-500 rounded-r-xl px-5 py-4">
          <p className="text-sm text-teal-900 font-semibold">Discussion of <strong>discipline-specific applications</strong></p>
        </div>
      </SlideShell>
    ),
  },

  // ── 11: Q&A + OPEN EXPLORATION ──
  {
    label: "Q&A",
    content: (
      <SlideShell tag="Section 11 · Close" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Q&A + Open Exploration
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />
        <ul className="space-y-4 mb-6">
          <Bullet icon="▸">
            Address <strong>unmet needs</strong>
          </Bullet>
          <Bullet icon="▸">
            Explore additional <strong>faculty-specific scenarios</strong>
          </Bullet>
        </ul>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6 text-center">
          <div className="bg-red-600 text-white text-sm font-black tracking-widest px-6 py-2 rounded inline-block mb-3">
            RUTGERS UNIVERSITY
          </div>
          <p className="text-sm text-gray-700 font-semibold">Rick Anderson</p>
          <p className="text-xs text-gray-500">Director of Emerging Technology</p>
          <p className="text-xs text-gray-500">Office of University Online Education Services</p>
          <p className="text-blue-600 text-sm mt-3 font-semibold">rick.anderson@rutgers.edu</p>
        </div>
      </SlideShell>
    ),
  },

];

/* ── Presentation shell ──────────────────────────────────── */

function Presentation() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));
  const first = () => setCurrent(0);
  const last = () => setCurrent(slides.length - 1);

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
      <div className="bg-amber-400 text-amber-900 text-xs font-black uppercase tracking-widest text-center py-1.5 px-4">
        ⚠ DRAFT — Work in progress · Not for distribution
      </div>

      <div className="flex-1 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative">
          {slides[current].content}
          <div className="absolute top-3 right-3 text-xs text-gray-400 bg-white/80 px-2 py-0.5 rounded-full border border-gray-200">
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex items-center justify-center gap-2">
        <button
          onClick={first}
          className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all"
        >
          ⏮ Begin
        </button>
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
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
          disabled={current === slides.length - 1}
          className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next →
        </button>
        <button
          onClick={last}
          className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all"
        >
          End ⏭
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

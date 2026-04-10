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

const SectionCard = ({ title, icon, children, accent = false, isActive = false, isDimmed = false, onClick }) => (
  <div
    onClick={onClick}
    className={[
      "rounded-xl p-5 transition-all duration-200",
      accent ? "bg-red-50 border-l-4 border-red-500" : "bg-gray-50 border border-gray-200",
      isActive ? "ring-2 ring-red-500 shadow-xl scale-[1.02] relative z-10" : "",
      isDimmed ? "opacity-25 scale-[0.98]" : "",
      onClick ? "cursor-pointer select-none" : "",
    ].join(" ")}
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xl">{icon}</span>
      <h3 className={`font-bold text-sm uppercase tracking-wide ${accent ? "text-red-700" : "text-gray-500"}`}>{title}</h3>
    </div>
    <div className={accent ? "text-gray-800 text-sm" : "text-gray-700 text-sm"}>
      {children}
    </div>
  </div>
);

const CardGrid = ({ cols = 2, className = "", children }) => {
  const [active, setActive] = useState(null);
  const items = React.Children.toArray(children);
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-4 ${className}`}>
      {items.map((child, i) =>
        React.cloneElement(child, {
          isActive: active === i,
          isDimmed: active !== null && active !== i,
          onClick: () => setActive(active === i ? null : i),
        })
      )}
    </div>
  );
};

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

const PromptRecipe = ({ title, href, large = false, children }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-xs font-bold text-gray-300 ml-2 uppercase tracking-widest">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          {href && (
            <a href={href} target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-blue-300 transition-colors font-medium">
              Full recipe ↗
            </a>
          )}
          <button
            onClick={handleCopy}
            className={`text-xs font-bold px-3 py-1 rounded transition-all ${
              copied ? "bg-green-700 text-green-100" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {copied ? "✓ copied" : "copy"}
          </button>
        </div>
      </div>
      <div className={`bg-gray-950 text-green-300 px-4 py-3 font-mono text-xs leading-relaxed overflow-x-auto overflow-y-auto ${large ? "max-h-[34rem]" : "max-h-52"}`}>
        <pre className="whitespace-pre-wrap">{children}</pre>
      </div>
    </div>
  );
};

const PromptComparison = ({ leftLabel, rightLabel, leftPrompt, rightPrompt, leftHref, rightHref }) => (
  <div className="my-4 grid grid-cols-2 gap-3">
    <div className="rounded-xl overflow-hidden border border-gray-300 shadow">
      <div className="bg-gray-200 px-3 py-2">
        <span className="text-xs font-black uppercase tracking-widest text-gray-500">{leftLabel}</span>
        {leftHref && <a href={leftHref} target="_blank" rel="noreferrer" className="float-right text-xs text-gray-400 hover:text-gray-600">see example ↗</a>}
      </div>
      <div className="bg-gray-100 text-gray-500 px-3 py-3 font-mono text-xs leading-relaxed max-h-48 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{leftPrompt}</pre>
      </div>
    </div>
    <div className="rounded-xl overflow-hidden border border-emerald-400 shadow">
      <div className="bg-emerald-800 px-3 py-2 flex items-center justify-between">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-100">{rightLabel}</span>
        {rightHref && <a href={rightHref} target="_blank" rel="noreferrer" className="text-xs text-emerald-300 hover:text-white">see example ↗</a>}
      </div>
      <div className="bg-gray-950 text-green-300 px-3 py-3 font-mono text-xs leading-relaxed max-h-48 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{rightPrompt}</pre>
      </div>
    </div>
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
        <p className="text-xs text-gray-400 mb-3 italic">Click any card to spotlight it.</p>
        <CardGrid cols={2}>
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
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── 2b: CONTEXT ENGINEERING — RECIPE ──
  {
    label: "↳ Bare vs Rich",
    content: (
      <SlideShell tag="Section 2 · Recipe" tagColor="bg-red-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Context Engineering</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-red-600">Bare vs Context-Rich</span>
        </div>
        <PromptComparison
          leftLabel="Bare prompt"
          rightLabel="Context-rich prompt"
          leftPrompt={`Write a quiz about photosynthesis.`}
          rightPrompt={`You are an instructional designer.

Course: Biology 101 · Module 3
Objective: Students will identify inputs and
outputs of the light-dependent reactions.
Materials: [attached course reading]

Write a 5-question multiple-choice quiz
aligned to this objective.

Constraints:
- Use only the supplied reading.
- If a question cannot be answered from
  the materials, mark it [NEEDS REVIEW].`}
        />
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
        <p className="text-xs text-gray-400 mb-3 italic">Click any card to spotlight it.</p>
        <CardGrid cols={2}>
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
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── 3b: MODEL CAPABILITIES — RECIPE ──
  {
    label: "↳ Zero-Shot vs Grounded",
    content: (
      <SlideShell tag="Section 3 · Recipe" tagColor="bg-indigo-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Model Capabilities</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-indigo-600">Zero-Shot vs Grounded</span>
        </div>
        <PromptComparison
          leftLabel="Zero-shot"
          rightLabel="Grounded"
          leftPrompt={`Summarize this topic for my students.`}
          rightPrompt={`You are creating a student-facing summary.

Source: [attached course reading]
Level: Undergraduate, second year
Length: ~150 words

Task:
Summarize this reading for students at
this level.

Constraints:
- Draw only from the attached reading.
- Do not add outside examples.
- Mark anything unclear as [UNCERTAIN].`}
        />
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
      </SlideShell>
    ),
  },

  // ── 4.1b: ACCESSIBILITY RECIPE ──
  {
    label: "↳ Alt-Text Recipe",
    content: (
      <SlideShell tag="Section 4.1 · Recipe" tagColor="bg-emerald-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Accessibility</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-emerald-700">Alt-Text Generation</span>
        </div>
        <PromptRecipe large title="Alt-Text Generation" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/alt-text-generation/">{`You are helping me draft alt text for course materials.

Use the attached materials as the primary source of truth:
- the image or figure
- the surrounding page, slide, caption, or assignment context
- any course vocabulary or instructor notes I provide

Task:
Write draft alt text that helps a student understand the
instructional purpose of this image.

Important constraints:
- Base the description on what is actually visible and on
  the supplied course context.
- Prioritize educationally relevant content over decorative detail.
- Mark unreadable labels or axes as [UNCERTAIN].

Return:
1. concise alt text draft
2. longer-description draft if the figure is complex
3. note explaining which course context shaped the description
4. any [UNCERTAIN] details needing human review`}</PromptRecipe>
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
      </SlideShell>
    ),
  },

  // ── 4.2b: ASSIGNMENTS RECIPE ──
  {
    label: "↳ Assignment Recipe",
    content: (
      <SlideShell tag="Section 4.2 · Recipe" tagColor="bg-emerald-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Assignments</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-emerald-700">Static → Interactive Assignment</span>
        </div>
        <PromptRecipe large title="Static → Interactive Assignment" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/static-to-interactive-assignment/">{`You are helping me redesign a traditional assignment into a
more interactive learning activity.

Use the attached materials as the primary source of truth:
- the current assignment prompt
- learning objectives
- rubric or grading criteria, if available
- any student-level, accessibility, or Canvas constraints

Task:
Redesign this assignment so students get more structure,
interaction, and feedback opportunities while still meeting
the original course goals.

Important constraints:
- Preserve the core learning objective of the original.
- Do not add tools or technical requirements beyond the
  supplied constraints.
- Mark implementation questions as [NEEDS REVIEW].

Return:
1. summary of the original assignment purpose
2. redesigned interactive version
3. step-by-step student flow
4. note explaining how the redesign preserves original goals`}</PromptRecipe>
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
      </SlideShell>
    ),
  },

  // ── 4.3b: SYLLABUS RECIPE ──
  {
    label: "↳ Syllabus Recipe",
    content: (
      <SlideShell tag="Section 4.3 · Recipe" tagColor="bg-emerald-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Syllabus as Context</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-emerald-700">Syllabus → Module Objectives</span>
        </div>
        <PromptRecipe large title="Syllabus → Module Objectives" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/syllabus-to-module-objectives/">{`You are an instructional design assistant.

Use the attached syllabus and course materials as the
primary source of truth.

Task:
Generate module-level learning objectives for the
selected week or unit.

Important constraints:
- Stay within the scope of the course materials.
- Do not invent course goals not supported by the syllabus.
- Mark anything uncertain as [NEEDS REVIEW].

Return:
1. module title
2. short module purpose
3. 3 to 5 learning objectives
4. one note connecting objectives to the syllabus

Selected week or unit:
[PASTE WEEK OR UNIT HERE]`}</PromptRecipe>
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
      </SlideShell>
    ),
  },

  // ── 4.4b: RUBRIC RECIPE ──
  {
    label: "↳ Rubric Recipe",
    content: (
      <SlideShell tag="Section 4.4 · Recipe" tagColor="bg-emerald-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Rubrics & Feedback</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-emerald-700">Rubric Generation</span>
        </div>
        <PromptRecipe large title="Rubric Generation" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/rubric-generation/">{`You are an instructional design assistant helping me
create a rubric.

Use the attached materials as the primary source of truth:
- assignment description
- learning objective
- course goals or values
- any instructor notes I provide

Task:
Create a rubric aligned to the learning objective and the
purpose of the assignment.

Requirements:
- Use these performance levels:
  Excellent / Proficient / Developing / Beginning
- Build criteria from the course goals and assignment

Return:
1. rubric title
2. 4 to 6 criteria
3. performance descriptors for each level
4. note explaining alignment to the learning objective`}</PromptRecipe>
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
      </SlideShell>
    ),
  },

  // ── 5.1b: INSTITUTIONAL RECIPE ──
  {
    label: "↳ Syllabus Revision Recipe",
    content: (
      <SlideShell tag="Section 5.1 · Recipe" tagColor="bg-amber-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Institutional Requirements</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-amber-700">Policy-Aware Syllabus Revision</span>
        </div>
        <PromptRecipe large title="Policy-Aware Syllabus Revision" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/policy-aware-syllabus-revision/">{`You are helping me revise my course syllabus.

Use the attached materials as the primary source of truth:
- my current syllabus draft
- institutional syllabus template
- required accessibility statements
- academic integrity guidance
- department or campus-specific required statements

Task:
Revise or expand my syllabus so it reflects required and
recommended guidance while remaining faithful to my course goals.

Important constraints:
- Preserve my course-specific content where possible.
- Do not invent university or department policies not present
  in the materials.
- Identify missing required elements clearly.

Return:
1. revised syllabus draft
2. list of added or revised policy-related sections
3. checklist of missing or uncertain required elements
4. note explaining which supplied sources shaped the revision`}</PromptRecipe>
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
      </SlideShell>
    ),
  },

  // ── 5.2b: POLICY-SAFE RECIPE ──
  {
    label: "↳ Policy-Safe Recipe",
    content: (
      <SlideShell tag="Section 5.2 · Recipe" tagColor="bg-amber-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Policy-Aware Prompting</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-amber-700">Policy-Safe Generation</span>
        </div>
        <PromptRecipe large title="Policy-Safe Generation" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/policy-safe-generation/">{`You are helping me complete a teaching task while staying
within my institution's privacy and approved-tool constraints.

Use the attached materials as the primary source of truth:
- the task description
- the course materials needed for the task
- any local policy notes or approved-tool guidance I provide
- any redacted or anonymized examples I provide

Important constraints:
- Do not request student-identifying information unless I
  explicitly confirm it is permitted.
- If the task would require restricted data or a non-approved
  workflow, stop and propose a safer alternative.
- Clearly mark any point where human review is needed.

Return:
1. recommended safe workflow for this task
2. the draft output, if it can be produced safely
3. short list of policy or privacy risks to avoid
4. any required human-review or approved-tool handoff points`}</PromptRecipe>
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
      </SlideShell>
    ),
  },

  // ── 5.3b: UDL RECIPE ──
  {
    label: "↳ UDL Recipe",
    content: (
      <SlideShell tag="Section 5.3 · Recipe" tagColor="bg-amber-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Best Practices</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-amber-700">UDL-Aware Activity Design</span>
        </div>
        <PromptRecipe large title="UDL-Aware Activity Design" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/udl-aware-activity-design/">{`You are an instructional design assistant reviewing my
activity design.

Use the attached materials as the primary source of truth:
- activity description
- learning objective
- course notes or values
- any accessibility priorities I provide

Task:
Revise or critique this activity using UDL-aware principles.

Focus on:
1. multiple means of engagement
2. multiple ways students can show understanding
3. plain language and clarity
4. assumptions about prior knowledge, tools, or access
5. alignment between the activity and stated course values

Return:
1. strengths
2. possible mismatches or gaps
3. specific suggestions for improvement
4. a short revised version of the activity if appropriate`}</PromptRecipe>
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
        <CardGrid cols={2} className="mb-5">
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
        </CardGrid>
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
        <p className="text-xs text-gray-400 mb-3 italic">Click any card to spotlight it.</p>
        <CardGrid cols={3}>
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
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── 7b: HOSTED ACTIVITY RECIPE ──
  {
    label: "↳ HTML Activity Recipe",
    content: (
      <SlideShell tag="Section 7 · Recipe" tagColor="bg-gray-700">
        <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-widest">
          <span className="text-gray-400">Infrastructure</span>
          <span className="text-gray-300">›</span>
          <span className="font-black text-gray-600">Hosted Activity Generation</span>
        </div>
        <PromptRecipe large title="Hosted Activity Generation" href="https://rianders.github.io/prompting-cookbook/50-prompt-recipes/hosted-activity-generation/">{`You are both an instructional designer and a front-end
learning activity developer.

Use the attached module materials as the primary source:
- module overview and learning objectives
- reading or vocabulary list
- instructor notes and course design constraints

Task:
Create a small interactive learning activity that helps
students practice and confirm understanding before moving on.

Technical requirements:
- output a single self-contained HTML file
- include HTML, CSS, and JavaScript in one file
- do not use external dependencies
- include a completion section students can submit

Return:
1. short description of the activity
2. the complete self-contained HTML file
3. note describing how it supports the module objective`}</PromptRecipe>
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
        <p className="text-xs text-gray-400 mb-3 italic">Click any card to spotlight it.</p>
        <CardGrid cols={3}>
          <SectionCard title="No Cloud Transmission" icon="🔒">
            <p className="text-sm">No data is sent to a third party or cloud service. The same data-handling responsibilities faculty already have for files on their computers still apply — local AI doesn't change that, it just removes the third party.</p>
          </SectionCard>
          <SectionCard title="Full Experimentation Freedom" icon="🧪">
            <p className="text-sm">Try any model without institutional restrictions or account requirements.</p>
          </SectionCard>
          <SectionCard title="Safe Prompt Testing" icon="✅" accent={true}>
            <p className="text-sm">Develop and refine prompt recipes in a <strong>fully contained environment</strong> before using institutional tools.</p>
          </SectionCard>
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── 9: HANDS-ON ACTIVITIES ──
  {
    label: "Hands-On",
    content: (
      <SlideShell tag="Section 9 · Workshop" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Your Turn
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">If there's time · ~20 min</p>
            <ol className="space-y-2 text-sm text-gray-800 list-none">
              <li><span className="font-bold text-red-600">1.</span> Pick one recipe from the cookbook that fits a real course you teach.</li>
              <li><span className="font-bold text-red-600">2.</span> Gather what you have — a syllabus, an assignment, a figure, a rubric.</li>
              <li><span className="font-bold text-red-600">3.</span> Open Gemini via ScarletMail. Paste the recipe and your materials.</li>
              <li><span className="font-bold text-red-600">4.</span> Note what the output gets right — and what it misses.</li>
            </ol>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Take it home</p>
            <p className="text-sm text-gray-700 mb-3">No time today? The cookbook is designed for exactly this — a reference you return to when you're sitting with real materials in front of you.</p>
            <a href="https://rianders.github.io/prompting-cookbook/" target="_blank" rel="noreferrer"
               className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Open the Prompting Cookbook ↗
            </a>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Good starting recipes</p>
          <div className="flex flex-wrap gap-2">
            {["Alt-Text Generation","Syllabus → Module Objectives","Rubric Generation","Static → Interactive Assignment","UDL-Aware Activity Design"].map(r => (
              <span key={r} className="bg-gray-700 text-green-300 text-xs font-mono px-3 py-1 rounded-full">{r}</span>
            ))}
          </div>
        </div>
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

  // ── RESOURCES ──
  {
    label: "Resources",
    content: (
      <SlideShell tag="Take It Home" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Resources
        </h1>
        <div className="w-16 h-1 bg-gray-700 rounded mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="md:col-span-2 space-y-3">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-4">
              <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">Companion Site</p>
              <a href="https://rianders.github.io/prompting-cookbook/" target="_blank" rel="noreferrer"
                 className="text-sm font-bold text-gray-900 hover:text-red-600 transition-colors">
                rianders.github.io/prompting-cookbook ↗
              </a>
              <p className="text-xs text-gray-500 mt-1">All recipes, examples, watchouts, and revision moves — designed to use with real course materials.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Related Presentations</p>
              <div className="space-y-2">
                {[
                  { label: "Beyond ChatGPT: Navigating Alternative Models", url: "https://rianders.github.io/presentations/shell.html?p=20260306/beyond-the-chatbot-workshop" },
                  { label: "Emerging Technology for XR", url: "https://rianders.github.io/presentations/shell.html?p=20260313-uoes-xr-emerging-tech/uoes-xr-emerging-tech" },
                  { label: "All Presentations", url: "https://rianders.github.io/presentations/" },
                ].map(r => (
                  <a key={r.url} href={r.url} target="_blank" rel="noreferrer"
                     className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-3 py-2 hover:border-red-300 hover:bg-red-50 transition-colors group">
                    <span className="text-sm text-gray-800">{r.label}</span>
                    <span className="text-gray-400 group-hover:text-red-600 transition-colors text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Scan for the Cookbook</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoAQAAAABSnlx4AAADD0lEQVR4nO1bi27jMAwTjf7/L3PQy04XHHDpGQd5k7uuWSIMBsPSEuWA8mCMJ8HS0ffRmPxfTF4i8CMK7Ef0THz4+RXRd2cD3hLggoYzKIRCDtE39RYk/I33fXyACaAMVmRhL6EhrECHvHtE472F33Pg26dJyXVBbX7fx+eYkCrgwWwTE6iYJPqN9y5+0w4NV4Iq3EIVkBCYGdH8/me8JRXaNPtPrwxtPbmPZ5hgybNKNTwx9MzE/7pENL93rZdYqyN8jbRc3CH3E4p783uPnpD2qR/ivzIn9FU0Qxrv+3iMCQ1YKKIpJJqmWBoepLfMpfVkD78ZdF6ZNr3UmST3rwCb31vWS6RFQq/okaWm0d6vxWHryZb8BJmVBNCL6pF856XG+z6eYwKDVCvLUGutdrTcCWmxSx/+778f4/f4sXTFiIqSkReaaucVl/c68x7nRlP5rGaJ5SSI/NBJH4W9eynF5n1kNHxhzD6DBKON5++CrmF15j1Oj8ZMwWlUjjZDCIxn5RXnfV40p4zM6p0mMJkMuiHb9fy2u8MQjSx04LIya6DwUorx5MhomGZcuzgIsFd2ogEuLXXmPQ6OpsJrmu0i7ibWbPToGc9Sis37bH9Q0hfk7DCEhWKmob3rzHscGv3Kcj0UWlJbVECc2VnRt55s4jfD/3MPUJLxc7H0w/a/d/V3oOC6M8hrcW8j/UHW+l6O0/1YXutLRA44fdrIz+vMexxez4vb30zbW6+ldOd2ic4HN94d2i+otoQP6zkhzMqKRLwOT8a50TSUbb/m3PsQreKsg1LPS8377Ghm/Q4repTTswJKrak478Oi4VmJr5J8L/KjaTm3gVea9/gB+6toRgpmEb/22aebVWfe4wc836CDab7aOvlWe3Z/Z5dfpSNgxVRwy1GsBbGoXocn4+T9g8gnRgzuFO/ZcFhpeJ15j/Ofb6DzW1a3IbQkmmvtV+3FW7J5xjzORdT9lVI8GSdHM7bAIg58z09Ii9+E1u+N/qCsgZUN2raUEO7oZhbjyYHR6Oe5C9+d0dG38QyTLxIctVar6CrDAAAAAElFTkSuQmCC"
              alt="QR code linking to the Prompting Cookbook companion site"
              className="w-36 h-36 rounded"
            />
            <p className="text-xs text-gray-400 mt-3 text-center">rianders.github.io/<br/>prompting-cookbook</p>
          </div>
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

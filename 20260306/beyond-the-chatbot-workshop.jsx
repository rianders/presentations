const { useState, useEffect, useCallback } = React;

/* ── shared components ───────────────────────────────────── */

const SlideShell = ({ tag, tagColor = "bg-red-700", children }) => (
  <div className="flex flex-col h-full px-6 sm:px-10 lg:px-14 py-6 overflow-y-auto">
    <div className="flex items-center gap-3 mb-5">
      <div className="bg-red-600 text-white text-xs font-black tracking-widest px-3 py-1 rounded">
        RUTGERS
      </div>
      <div className={`${tagColor} text-white text-xs font-bold px-3 py-1 rounded`}>
        {tag}
      </div>
    </div>
    <div className="flex-1">{children}</div>
    <div className="pt-4 mt-auto border-t border-gray-200 flex items-center justify-between text-xs text-gray-400">
      <span>Office of University Online Education Services</span>
      <span>it.rutgers.edu/ai</span>
    </div>
  </div>
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

const Bullet = ({ icon = "→", children }) => (
  <li className="flex items-start gap-3">
    <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">{icon}</span>
    <span className="text-sm leading-relaxed">{children}</span>
  </li>
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

/* ── slides ──────────────────────────────────────────────── */

const slides = [

  /* ─ TITLE ─ */
  {
    label: "Title",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="bg-yellow-400 text-yellow-900 text-xs font-black tracking-widest px-4 py-1 rounded mb-4">
          DRAFT — DO NOT DISTRIBUTE
        </div>
        <div className="bg-red-600 text-white text-sm font-black tracking-widest px-6 py-2 rounded mb-8">
          RUTGERS UNIVERSITY
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
          Beyond ChatGPT
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-2">Navigating Alternative Models</p>
        <div className="w-24 h-1 bg-red-600 rounded my-6" />
<p className="text-gray-400 text-sm mt-1">Office of University Online Education Services</p>
        <p className="text-gray-400 text-sm">March 2026</p>
      </div>
    ),
  },

  /* ─ 1: THE PROVOCATION ─ */
  {
    label: "Provocation",
    content: (
      <SlideShell tag="Segment 1 · 10 min" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The Provocation
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <SectionCard title="Where We Started" icon="💬">
            <p className="text-sm">ChatGPT was the first chatbot most of us ever used. It set the frame: a box you type into, a response you get back.</p>
          </SectionCard>
          <SectionCard title="What Happened Next" icon="📈">
            <p className="text-sm">Competition ramped up fast. The University evaluated the landscape and selected official licensed tools — tools with data agreements, with institutional accountability.</p>
          </SectionCard>
          <SectionCard title="Where We Are Now" icon="⚠️" accent={true}>
            <p className="text-sm mb-2">Most major AI vendors are now navigating serious ethical pressure:</p>
            <ul className="space-y-1 text-xs text-red-100">
              <li>→ Banned by the US Military for refusing to work with them</li>
              <li>→ OpenAI and Anthropic (Claude) are both in the midst of this drama — companies that built guardrails, then worked around them</li>
              <li>→ Enormous and growing energy consumption and environmental impact</li>
            </ul>
          </SectionCard>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-5 mb-4">
          <p className="text-sm leading-relaxed">
            Which brings us to two questions for today. <strong>What tools exist beyond ChatGPT</strong> — including the ones already in your ScarletMail account? And <strong>what can AI do beyond the chat box</strong> — because the box you type into is the least interesting thing it can do.
          </p>
        </div>

        <Note>
          <strong>Open with a demo, not a slide.</strong> NotebookLM audio overview or DeepSeek OCR → LaTeX. Let it land before saying anything.
        </Note>
      </SlideShell>
    ),
  },

  /* ─ 2: THE RULE ─ */
  {
    label: "The Rule",
    content: (
      <SlideShell tag="Data & Policy" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The Rule for Today
        </h1>
        <div className="w-16 h-1 bg-gray-700 rounded mb-6" />

        <div className="bg-red-600 text-white rounded-xl p-6 mb-5">
          <p className="text-lg font-bold mb-2">If it involves your students or your course content, it stays in a licensed tool.</p>
          <p className="text-sm text-red-100">Three policies govern this: Academic Integrity (10.2.13), Information Classification (70.1.2), Acceptable Use (70.1.1).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="Check the Hub" icon="🔗">
            <a href="https://it.rutgers.edu/ai" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-red-600 text-sm font-bold hover:underline">
              it.rutgers.edu/ai ↗
            </a>
          </SectionCard>
          <SectionCard title="Log In Correctly" icon="🔐">
            <p className="text-sm">Always confirm you are signed in as <strong>@scarletmail.rutgers.edu</strong></p>
          </SectionCard>
          <SectionCard title="Data Classification" icon="📊">
            <p className="text-sm">The data classification chart is your practical guide.</p>
          </SectionCard>
        </div>

        <div className="bg-gray-800 text-white rounded-xl p-5 mb-4">
          <p className="text-sm font-bold text-amber-300 mb-2">Beyond Policy: Your Ethical Choices</p>
          <p className="text-sm mb-2">Today I'm going to show you a lot of tools. Policy tells you what's <strong>allowed</strong>. It does not tell you what you <strong>should</strong> do.</p>
          <p className="text-sm">Every tool and feature you see today comes with ethical questions that policy doesn't answer — about labor, about data, about who benefits and who doesn't. I want you to know what's available. I also want you to apply your own ethics and judgment to what you choose to use and how. That's not my decision to make for you. It's yours.</p>
        </div>

        <DropIn label="Your Secrets">
          Every time you paste student work into a tool, you're deciding where that data goes. 'Not uploading information' sounds simple — but some tools have a local interface and a remote brain. The question is not 'is this on my computer?' It's 'where is the work actually happening?'
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ 3: THE LANDSCAPE ─ */
  {
    label: "Landscape",
    content: (
      <SlideShell tag="The Map" tagColor="bg-indigo-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The AI Landscape in 2 Minutes
        </h1>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <SectionCard title="LLMs — Large Language Models" icon="💬">
            <p className="text-sm mb-2">Text in, text out. The foundation layer. GPT, Gemini, Claude, Llama, DeepSeek.</p>
            <p className="text-xs text-gray-500 italic">This is the chat box most people know. It's the starting point, not the whole story.</p>
          </SectionCard>
          <SectionCard title="Omni Models" icon="🌐">
            <p className="text-sm mb-2">Text, image, audio, video, speech — in and out, natively. Not bolted on, built in.</p>
            <p className="text-xs text-gray-500 italic">Gemini, GPT-4o, and Claude now process multiple modes in a single conversation.</p>
          </SectionCard>
          <SectionCard title="Local Models" icon="🏠">
            <p className="text-sm mb-2">Models that run on your machine or your institution's servers. No data leaves the building.</p>
            <p className="text-xs text-gray-500 italic">DeepSeek OCR, Llama, Whisper. Try <a href="https://handy.computer" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline">handy.computer</a> — free local speech-to-text.</p>
            <p className="text-xs text-amber-600 mt-2">⚠ Rutgers has no system for evaluating free/open source tools. These sit outside the licensed ecosystem.</p>
          </SectionCard>
          <SectionCard title="Agents" icon="🤖" accent={true}>
            <p className="text-sm mb-2">AI that doesn't just answer — it acts, uses tools, chains steps, and operates your software.</p>
            <p className="text-xs text-red-100 italic">CoWork, Copilot, agentic workflows. This is where everything is heading.</p>
          </SectionCard>
        </div>

        <Note>
          <strong>The shift:</strong> LLM → Omni → Agent is not a replacement chain. Each layer adds capability. Today's tools combine all three. The question is which capabilities you need for which problem.
        </Note>
      </SlideShell>
    ),
  },

  /* ─ 3: CHATBOT VS. AGENT ─ */
  {
    label: "Chatbot vs. Agent",
    content: (
      <SlideShell tag="The Difference" tagColor="bg-indigo-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Chatbot vs. Agent
        </h1>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500 mb-3">Chatbot</h3>
            <p className="text-sm text-gray-700 mb-3">Responds to whoever is typing. It does not know if you are a student asking for the answer or an instructor designing the question.</p>
            <p className="text-sm text-gray-700">The same model. The same behavior. No difference unless <em>you</em> build one in.</p>
          </div>
          <div className="bg-indigo-600 text-white rounded-xl p-5">
            <h3 className="font-bold text-sm uppercase tracking-wide text-indigo-100 mb-3">Agent</h3>
            <p className="text-sm text-indigo-50 mb-3">Knows who it is talking to — because <strong>you designed it that way</strong>. The instructor's role, intent, and constraints are built in before the first message.</p>
            <p className="text-sm text-indigo-50">That design is the work. The agent is the result.</p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-5">
          <p className="text-sm font-bold text-gray-700 mb-3">When you design an agent, you are specifying:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { term: "Role", def: "who it is — evaluator, tutor, guide" },
              { term: "Context", def: "what it knows going in" },
              { term: "Goal", def: "what it is trying to accomplish" },
              { term: "Tasks", def: "the steps it can take" },
              { term: "Tools", def: "what it can invoke — search, generate, analyze" },
              { term: "Skills", def: "how it applies tools well for your purpose" },
              { term: "Memory", def: "what it retains across steps" },
              { term: "Constraints", def: "what it will not do" },
              { term: "Output", def: "how results are structured" },
            ].map(({ term, def }) => (
              <div key={term} className="bg-white border border-gray-200 rounded-lg px-3 py-2">
                <p className="text-xs font-bold text-indigo-700">{term}</p>
                <p className="text-xs text-gray-600 mt-0.5">{def}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="text-sm font-bold text-indigo-900 mb-1">Your closest on-ramp: Gemini Gems</p>
          <p className="text-sm text-indigo-800">A Gem is a customized Gemini — you write the role, give it context, set its constraints. Available via your ScarletMail account. It is not a full agent, but it is where agent thinking starts: you are no longer a user of the chatbot. You are its designer.</p>
        </div>
      </SlideShell>
    ),
  },

  /* ─ 3: WHAT YOU HAVE ─ */
  {
    label: "Your Tools",
    content: (
      <SlideShell tag="Segment 2 · 10 min" tagColor="bg-blue-600">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          What You Actually Have
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🪟</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500">Microsoft 365</h3>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">What you have</p>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• <strong>Copilot Chat</strong> — via ScarletMail, also available inside M365 apps; includes voice-to-text</li>
              <li>• <strong>M365 Copilot</strong> — GPT-5.2 (quick &amp; thinking); GPT-5.3 rolling out</li>
              <li>• <strong>Designer</strong> — AI image and graphic creation</li>
            </ul>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Context you can provide</p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• Local files &nbsp;• Work content &nbsp;• Cloud files</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🔵</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500">Google Workspace</h3>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Models</p>
            <ul className="space-y-1 text-xs text-gray-600 mb-3">
              <li>• <strong>Fast</strong> &nbsp;• <strong>Thinking</strong> &nbsp;• <strong>Pro</strong> — Gemini 3.1 Pro</li>
            </ul>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Gemini tools</p>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• Guided Learning &nbsp;• Create Image &nbsp;• Create Music</li>
              <li>• Canvas &nbsp;• Deep Research</li>
            </ul>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Context you can provide</p>
            <ul className="space-y-1 text-xs text-gray-600 mb-3">
              <li>• Upload images &amp; files &nbsp;• Google Drive &nbsp;• NotebookLM &nbsp;• Voice-to-text</li>
            </ul>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Gems</p>
            <p className="text-xs text-gray-600 mb-3">Customized Gemini instances — you define the role, context, and constraints. Like an agent, but without autonomy. The closest thing in a licensed tool to designing your own AI.</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Also available</p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>• <strong>Gemini CLI</strong> — terminal-based access to Gemini; free but very limited quota</li>
              <li>• <strong>Google Colab</strong> — cloud-hosted Python notebooks; run AI code without a local install</li>
            </ul>
          </div>

        </div>

        <div className="bg-gray-900 text-white rounded-xl p-5">
          <p className="text-sm font-bold text-red-400 mb-2">⚠ What Is NOT in the License</p>
          <p className="text-sm mb-1">Personal ChatGPT and Claude accounts have <strong>no institutional data agreement</strong>. Student work entered there is a FERPA exposure.</p>
          <p className="text-xs text-gray-400">Same rule as always: if it's about your class or your students, use a licensed tool.</p>
        </div>
      </SlideShell>
    ),
  },

  /* ─ 4: RAW INGREDIENTS ─ */
  {
    label: "Materials",
    content: (
      <SlideShell tag="Segment 3 · 20 min" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Your Course Materials as Raw Ingredients
        </h1>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-emerald-900">
            Canvas <strong>delivers</strong> your course. It does not <strong>think</strong> about it. Your syllabus, readings, lecture notes, rubrics, and assessments are related to each other — but no system treats them that way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          <SectionCard title="Open Source = Permission to Transform" icon="📖">
            <p className="text-sm">
              A proprietary textbook can't be fed to AI tools or redistributed as derivatives. With open source, <strong>derivatives are the point</strong>.
            </p>
            <p className="text-xs text-gray-500 mt-2 italic">
              Cite the source. Note when AI was used. Model the practice you want students to follow.
            </p>
          </SectionCard>
          <SectionCard title="Ownership" icon="🔑">
            <p className="text-sm">
              Materials in Canvas belong to the Canvas workflow. Materials in <strong>a folder you own</strong>, fed into AI tools, belong to you. When you change institutions or tools, you have the source.
            </p>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  /* ─ 5: NOTEBOOKLM ─ */
  {
    label: "NotebookLM",
    content: (
      <SlideShell tag="Demo Flow" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          NotebookLM: One Set of Class Notes
        </h1>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-emerald-900 font-bold mb-1">Today's Source Material</p>
          <p className="text-sm text-emerald-800 mb-2">Class notes: <em>Defining Instantaneous Velocity</em>. One document. Watch what NotebookLM does with it.</p>
          <a href="https://notebooklm.google.com/notebook/4bc22dbf-89e3-4f84-bac1-87b9724d77a5" target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-700 underline">→ Open notebook</a>
        </div>

        <SectionCard title="NotebookLM" icon="📓">
          <ul className="space-y-2 text-sm">
            <li>• Upload the notes — NotebookLM reads and indexes them</li>
            <li>• Generate an <strong>audio overview</strong> — two AI hosts discuss the material</li>
            <li>• Ask questions — <strong>answers only from your source</strong>, with citations</li>
            <li>• Paste a <strong>YouTube URL</strong> — it summarizes the video and makes it queryable</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3 italic">
            You're not prompting AI every time — you're <strong>installing</strong> your content into an AI environment. Works for teaching <em>and</em> research — upload your own papers and sources for literature synthesis.
          </p>
        </SectionCard>

        <DropIn label="More From What You Have">
          We didn't create anything from scratch. We took one set of existing notes and turned them into a queryable knowledge base with an audio companion. The source stays the same. The forms multiply.
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ 6: VIBE CODING ─ */
  {
    label: "Vibe Code",
    content: (
      <SlideShell tag="Segment 4 · 15 min" tagColor="bg-violet-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Vibe Coding
        </h1>
        <div className="w-16 h-1 bg-violet-600 rounded mb-6" />

        <p className="text-sm text-gray-600 mb-4">
          Coined by Andrej Karpathy (OpenAI co-founder), 2025: describe what you want and let AI handle the code. You're not learning to code. You're learning to <strong>describe, evaluate, and iterate</strong>.
        </p>

        <CodeBlock>{`DESCRIBE  →  AI generates HTML
EVALUATE  →  Does it do what I meant?
REDIRECT  →  "Change the colors, add a timer, remove question 3"
REFINE    →  Repeat
DEPLOY    →  Paste into Canvas`}</CodeBlock>

        <div className="bg-violet-50 border border-violet-200 rounded-xl p-5 mb-4">
          <p className="font-bold text-violet-900 text-sm mb-2">The skill that transfers:</p>
          <p className="text-sm text-violet-800">Knowing what you want and being able to describe it clearly. Faculty already have that — about their courses.</p>
        </div>

        <Note>
          <strong>Honest limitations:</strong> It breaks — and that's part of the demo, not a failure. Not accessible by default (you have to ask). Not connected to Canvas gradebook. Content changes require rebuilding.
        </Note>

        <DropIn label="Bounded Is Better">
          The thing we just built is small. One quiz. One topic. Ten questions. That's the approach working correctly. The moment you ask AI to do something so large you can't review the output, you've left the zone where this is trustworthy.
        </DropIn>

        <Note>
          <strong>Prompting strategy:</strong> Be careful of asking your project to do too much. A fresh, focused effort is the quickest to understand and develop. One quiz, not a quiz-plus-flashcards-plus-study-guide in a single prompt. You can always build the next thing separately.
        </Note>
      </SlideShell>
    ),
  },

  /* ─ 7: LIVE BUILD ─ */
  {
    label: "Live Build",
    content: (
      <SlideShell tag="Hands-On" tagColor="bg-violet-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Live Build
        </h1>
        <div className="w-16 h-1 bg-violet-600 rounded mb-6" />

        <div className="bg-gray-900 text-white rounded-xl p-5 mb-5">
          <p className="text-sm text-gray-400 font-bold uppercase tracking-wide mb-2">Starting Prompt</p>
          <p className="text-sm font-medium italic leading-relaxed">
            "Build a ten-question multiple choice quiz on [topic]. Show one question at a time. Give feedback after each answer. Show a score at the end. Output a single self-contained HTML file I can paste into Canvas."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <SectionCard title="1 · Generate" icon="⚡">
            <p className="text-sm">Paste the prompt into Gemini via your ScarletMail account. Watch the HTML appear.</p>
          </SectionCard>
          <SectionCard title="2 · Deploy" icon="🚀">
            <p className="text-sm">Canvas → Pages → HTML Editor → Paste. Preview it. Does it work?</p>
          </SectionCard>
          <SectionCard title="3 · When It Breaks" icon="🔧" accent={true}>
            <p className="text-sm mb-2">Go back to Gemini and describe exactly what's wrong:</p>
            <p className="text-xs italic">"When I paste this into Canvas's HTML editor, [X] doesn't show up. Fix it so it works without any external libraries."</p>
            <p className="text-xs mt-2">Re-paste. That's the loop — and it's the whole skill.</p>
          </SectionCard>
          <SectionCard title="4 · Iterate" icon="🔄">
            <p className="text-sm">Wrong colors? Want a timer? Need fewer questions? Say so. You never need to touch the code.</p>
          </SectionCard>
        </div>

        <Note>
          <strong>Plan to show step 3.</strong> If Canvas accepts it perfectly the first time, walk through what you would say if it hadn't. The recovery is the most important thing for faculty to see.
        </Note>
      </SlideShell>
    ),
  },

  /* ─ 8: ASSESSMENT ─ */
  {
    label: "Assessment",
    content: (
      <SlideShell tag="Segment 5 · 20 min" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          AI That Evaluates, Not Answers
        </h1>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-amber-900 font-bold mb-1">The Seat You're Sitting In</p>
          <p className="text-sm text-amber-800">
            There is a fundamental difference between a student asking AI to solve a problem and a professor asking AI to evaluate against a rubric. The chatbot doesn't know which seat you're in. You have to tell it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SectionCard title="One Sentence" icon="✓">
            <p className="text-sm">Per rubric criterion: does the work meet it, and where specifically?</p>
          </SectionCard>
          <SectionCard title="Concrete Improvements" icon="📝">
            <p className="text-sm">Short list tied to rubric language. No model answer.</p>
          </SectionCard>
          <SectionCard title="Nothing Rewritten" icon="🚫">
            <p className="text-sm">Nothing solved. Nothing improved. The constraint is the entire pedagogical difference.</p>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  /* ─ 9: CONSTRAINED PROMPT ─ */
  {
    label: "The Prompt",
    content: (
      <SlideShell tag="Takeaway" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The Constrained Prompt
        </h1>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />

        <CodeBlock>{`You are evaluating student work against a rubric.

Do NOT rewrite or improve the student's work.
Do NOT provide answers or solutions.

For each rubric criterion, write ONE sentence:
  — Does the work meet it? Where specifically?

Then provide a short bulleted list of concrete
improvements the student could make to better
meet the rubric.`}</CodeBlock>

        <DropIn label="This Is Already an Agent">
          It has a role — evaluator, not helper. It has constraints — don't rewrite, don't solve. It has a goal — structured feedback against a rubric. It has a defined output format. That's the anatomy of an agent: context, goal, tools, constraints, structured output. You just built one without knowing it.
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ 10: STEM PIPELINE ─ */
  {
    label: "STEM OCR",
    content: (
      <SlideShell tag="The Pipeline" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The STEM Handwriting Pipeline
        </h1>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />

        <p className="text-sm text-gray-600 mb-5">A student submits a photo of handwritten math. A default chatbot sees the math and <strong>solves it</strong>. That's the opposite of what the professor needs.</p>

        <div className="space-y-4 mb-5">
          <PipelineStep num="1" title="DeepSeek OCR 2">
            Open source, 3B parameters. Feed it handwritten math → structured markdown with LaTeX. Demo at huggingface.co/spaces — no setup required.
          </PipelineStep>
          <PipelineStep num="2" title="MathJax Rendering">
            One script tag closes the gap. MathJax tolerates imperfect OCR LaTeX gracefully — and it's what Canvas uses internally.
          </PipelineStep>
          <PipelineStep num="3" title="Vibe-Code the Assembler">
            Small Python script in Colab anchors figures, wraps in HTML with MathJax header. Output: single HTML file → paste into Canvas.
          </PipelineStep>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-emerald-800">
            <strong>Why open source:</strong> Student handwritten exams are FERPA-protected. DeepSeek OCR 2 in Colab keeps data inside the institution. For this use case, open source is the better choice on <em>both</em> capability and compliance grounds.
          </p>
        </div>

        <DropIn label="The Pipeline Is the Agent">
          Three tools chained together with a goal. No single tool does the whole job. The intelligence is in the sequence and the decisions between steps. That's what an agentic workflow looks like in practice.
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ 11: NANO BANANA ─ */
  {
    label: "Nano Banana",
    content: (
      <SlideShell tag="Segment 6 · 10 min" tagColor="bg-pink-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Nano Banana: 3 Moves
        </h1>
        <div className="w-16 h-1 bg-pink-600 rounded mb-6" />

        <p className="text-sm text-gray-600 mb-5">Google's Gemini image intelligence layer — available inside Gemini via your ScarletMail account.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SectionCard title="Move 1: Infographic" icon="📊">
            <p className="text-sm mb-1">Text or URL → course-ready infographic</p>
            <p className="text-xs text-gray-500 italic">Practical. Use it Monday. No design skills needed.</p>
          </SectionCard>
          <SectionCard title="Move 2: Clean Diagram" icon="✏️">
            <p className="text-sm mb-1">Rough sketch → clean rendered version</p>
            <p className="text-xs text-gray-500 italic">Connects to the STEM thread. Same concept, consistent style.</p>
          </SectionCard>
          <SectionCard title="Move 3: 3D View" icon="🏛️" accent={true}>
            <p className="text-sm mb-1">2D photo → 3D spatial model</p>
            <p className="text-xs text-red-100 italic">Architecture, urban planning, art history, archaeology, biology.</p>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  /* ─ 12: ACCESSIBILITY ─ */
  {
    label: "Accessibility",
    content: (
      <SlideShell tag="AI Vision" tagColor="bg-pink-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Accessibility at Scale
        </h1>
        <div className="w-16 h-1 bg-pink-600 rounded mb-6" />

        <div className="bg-pink-50 border border-pink-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-pink-900">
            Graphs, charts, and figures in PDFs are almost universally inaccessible. Screen readers hit them and say <strong>"image"</strong> — or nothing.
          </p>
        </div>

        <div className="space-y-3 mb-5">
          <PipelineStep num="1" title="Extract Figures">Vibe-coded script in Colab pulls figures from PDF.</PipelineStep>
          <PipelineStep num="2" title="Gemini Vision Describes">Prompt: "Describe this graph for a student who cannot see it — type, axes, trend, key data, and what conclusion a reader should draw."</PipelineStep>
          <PipelineStep num="3" title="QA With Your Knowledge">AI gets structure right, sometimes misses the <em>so what</em>. You add the domain judgment.</PipelineStep>
          <PipelineStep num="4" title="Assemble & Deploy">Image + embedded alt text + visible caption → HTML → Canvas.</PipelineStep>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-4 mb-4">
          <p className="text-sm">
            <strong className="text-pink-400">The outrageous version:</strong> Feed the description to text-to-speech. The graph now has a narrated audio description in Canvas. That's better than most published textbooks.
          </p>
        </div>

        <DropIn label="Audio Is Not an Extra">
          Audio is not an accommodation. It is a mode of learning. When you generate that narrated graph description, you are not checking a compliance box. You are teaching differently.
        </DropIn>

        <Note>
          <strong>Voice recognition — try it:</strong> <a href="https://handy.computer" target="_blank" rel="noreferrer" className="text-red-600 font-bold hover:underline">handy.computer</a> is a free, open source speech-to-text app that runs Whisper completely on your machine — no audio leaves your computer. Press a shortcut, speak, release, and the text appears wherever your cursor is. Great for accessibility, great for FERPA. The limitation: STT still struggles with STEM terminology, accented speech, and multilingual input. Review the output — it's a pipeline, not magic.
        </Note>

        <Note>
          <strong>A caveat on open source tools:</strong> Rutgers does not currently have a system for evaluating free and open source software for institutional use. Tools like Handy and DeepSeek OCR are powerful, but they sit outside the licensed ecosystem. Use your judgment, check with your department, and understand that "free and open" does not mean "institutionally approved."
        </Note>
      </SlideShell>
    ),
  },

  /* ─ 13: AGENTS ─ */
  {
    label: "Agents",
    content: (
      <SlideShell tag="Segment 7 · 5 min" tagColor="bg-gray-800">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Agents: AI That Acts
        </h1>
        <div className="w-16 h-1 bg-gray-700 rounded mb-6" />

        <div className="bg-gray-900 text-white rounded-xl p-5 mb-5">
          <p className="text-lg font-bold mb-2">A chatbot responds. An agent acts, observes, decides, and acts again.</p>
          <p className="text-sm text-gray-300">Everything in the second half of this workshop involved agentic behavior — pipelines running stages, assemblers making decisions, Agent Mode editing documents on your behalf.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          <SectionCard title="Agent Inside" icon="📄">
            <p className="text-sm">Working within a document, a dataset, a conversation. The constrained rubric prompt is an agent inside.</p>
          </SectionCard>
          <SectionCard title="Agent Outside" icon="🖥️" accent={true}>
            <p className="text-sm">Operating your actual software — opening files, controlling applications, sending emails. Copilot Agent Mode and tools like Claude Cowork are agents outside.</p>
          </SectionCard>
        </div>

        <DropIn label="The Caution That Comes With Acting">
          A chatbot gives you a bad answer, you ignore it. An agent takes a bad action, and now you have to undo it. Agents can be tricked — misleading instructions, bad context, prompt injection. The safety guardrails that feel annoying exist because an agent that acts without checking is an agent that can be exploited. Bounded, reviewable, narrow scope. That's not a limitation — that's responsible use.
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ 14: MONDAY ─ */
  {
    label: "Monday",
    content: (
      <SlideShell tag="Wrap · 5 min" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          What You Do Monday
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <SectionCard title="Start Here" icon="🟢">
            <p className="text-sm mb-2">
              Go to <strong>NotebookLM</strong>. Upload your syllabus and two readings. Generate an audio overview. Listen. Notice what it gets right and what it misses.
            </p>
            <a href="https://notebooklm.google.com/notebook/7f450fd7-158b-4d9b-87ee-adc1f9879252" target="_blank" rel="noreferrer" className="text-xs font-bold text-emerald-700 underline">→ See example notebook (syllabus + readings)</a>
          </SectionCard>
          <SectionCard title="Go Further" icon="🟡">
            <p className="text-sm">
              Open <strong>Gemini</strong> via your ScarletMail account. Paste a topic or learning objectives. Build a ten-question self-check quiz. Paste the HTML into Canvas. Show it to one class.
            </p>
          </SectionCard>
          <SectionCard title="Go All the Way" icon="🔴" accent={true}>
            <p className="text-sm">
              Take a handwritten STEM page to the <strong>DeepSeek OCR 2</strong> demo on Hugging Face Spaces. Watch it come back as LaTeX. Bring that output to the next conversation.
            </p>
          </SectionCard>
        </div>

        <DropIn label="The Question That Stays">
          Every time you sit down with one of these tools, start with two questions. First: What problem am I trying to solve — and does AI meaningfully help? Second: Am I comfortable with how this tool works, where it comes from, and what it costs beyond money? Policy sets the floor. Your ethics set the standard. If the answer to either question is no, close the tab. The tool doesn't care. Your students do.
        </DropIn>

        <Note>
          <strong>Your course policy:</strong> If your students have access to Copilot, Gemini, NotebookLM, and local models — a single-tool AI policy no longer works. Clarify what's allowed, what must be disclosed, and what data may never be entered. The hub at it.rutgers.edu/ai has guidance for syllabus language.
        </Note>
      </SlideShell>
    ),
  },

  /* ─ 15: RESOURCES ─ */
  {
    label: "Resources",
    content: (
      <SlideShell tag="Reference" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Resources
        </h1>
        <div className="w-16 h-1 bg-gray-700 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { label: "Rutgers AI Hub", url: "https://it.rutgers.edu/ai" },
            { label: "NotebookLM", url: "https://notebooklm.google.com" },
            { label: "DeepSeek OCR 2 Demo", url: "https://huggingface.co/spaces/merterbak/DeepSeek-OCR-Demo" },
            { label: "DeepSeek OCR 2 Model", url: "https://huggingface.co/deepseek-ai/DeepSeek-OCR-2" },
            { label: "MathJax", url: "https://mathjax.org" },
            { label: "Handy — Local Speech-to-Text", url: "https://handy.computer" },
          ].map((r, i) => (
            <a
              key={i}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-100 hover:border-gray-300 transition-colors group"
            >
              <span className="text-sm font-medium text-gray-800">{r.label}</span>
              <span className="text-xs text-gray-400 group-hover:text-red-600 transition-colors">↗</span>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center">
          <div className="bg-red-600 text-white text-xs font-black tracking-widest px-4 py-1.5 rounded inline-block mb-2">
            RUTGERS UNIVERSITY
          </div>
          <p className="text-sm text-gray-500">Office of University Online Education Services</p>
          <p className="text-xs text-gray-400 mt-1">Compiled March 2026 — UOES Emerging Technology</p>
        </div>
      </SlideShell>
    ),
  },
];

/* ── presentation shell ──────────────────────────────────── */

function Presentation() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(slides.length - 1, c + 1)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="h-screen w-screen flex flex-col bg-white">
      {/* slide area */}
      <div className="flex-1 overflow-hidden">
        {slides[current].content}
      </div>

      {/* nav bar */}
      <div className="border-t border-gray-200 bg-gray-50 px-4 py-2 flex items-center justify-between">
        <button
          onClick={prev}
          disabled={current === 0}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-red-700 transition-colors text-sm font-bold"
        >
          ‹
        </button>

        <div className="flex items-center gap-1 flex-wrap justify-center max-w-[80%]">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                i === current
                  ? "bg-red-600 text-white font-bold"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-red-700 transition-colors text-sm font-bold"
        >
          ›
        </button>
      </div>

      {/* counter */}
      <div className="text-center text-xs text-gray-400 py-1 bg-gray-50">
        {current + 1} / {slides.length}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

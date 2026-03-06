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
        <div className="mt-6 flex flex-col items-center gap-2">
          <img
            src="20260306/qr-beyond-chatbot.png"
            alt="QR code for this presentation"
            className="rounded-lg shadow"
            width="120"
            height="120"
          />
          <p className="text-gray-400 text-xs">Scan to follow along</p>
        </div>
      </div>
    ),
  },

  /* ─ 1: WHO I AM ─ */
  {
    label: "About",
    content: (
      <SlideShell tag="Introduction" tagColor="bg-red-700">
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
      </SlideShell>
    ),
  },

  /* ─ 2: THE PROVOCATION ─ */
  {
    label: "The Challenge of Now",
    content: (
      <SlideShell tag="Segment 1 · 10 min" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The Challenge of Now
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

        <a href="https://notebooklm.google.com/notebook/8637d705-971b-4140-bdba-43e31b3290a1" target="_blank" rel="noreferrer" className="block bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4 hover:bg-blue-100 transition-colors">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📓</span>
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-blue-700 mb-1">Live Example — NotebookLM Study Guide</p>
              <p className="text-sm font-bold text-gray-900">CITI Training: Biomedical &amp; Clinical Research Investigators</p>
              <p className="text-xs text-gray-500 mt-1">AI-generated study guide with audio overview, Q&amp;A, and source citations ↗</p>
            </div>
          </div>
        </a>

      </SlideShell>
    ),
  },

  /* ─ 2: THE RULE ─ */
  {
    label: "AI Initiative",
    content: (
      <SlideShell tag="Data & Policy" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Artificial Intelligence Initiative at Rutgers
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
          <SectionCard title="Access Google Products" icon="🔐">
            <p className="text-sm">Access Google products with your <strong>@scarletmail.rutgers.edu</strong> account to stay within the licensed ecosystem.</p>
          </SectionCard>
          <SectionCard title="Data Classification" icon="📊">
            <p className="text-sm">Know what data is sensitive — student records, personal information, institutional data — before choosing a tool.</p>
          </SectionCard>
        </div>

        <div className="bg-gray-800 text-white rounded-xl p-5 mb-4">
          <p className="text-sm font-bold text-amber-300 mb-2">Beyond Policy: Your Ethical Choices</p>
          <p className="text-sm mb-2">Today I'm going to show you a lot of tools. Policy tells you what's <strong>allowed</strong>. It does not tell you what you <strong>should</strong> do.</p>
          <p className="text-sm">Every tool and feature you see today comes with ethical questions that policy doesn't answer — about labor, about data, about who benefits and who doesn't. I want you to know what's available. I also want you to apply your own ethics and judgment to what you choose to use and how. That's not my decision to make for you. It's yours.</p>
        </div>

        <DropIn label="Your Secrets">
          The concern isn't only student work and FERPA. When AI tools have access to your files, email, or cloud storage, it becomes easy to accidentally expose things you didn't intend to share — API keys, passwords, personal data, confidential communications. A prompt that pulls context from your documents might surface something sensitive without you realizing it. The question is not just 'is this about a student?' It's 'what else might this tool be seeing — and where is that going?'
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ ACCESSIBILITY PRINCIPLE ─ */
  {
    label: "Accessibility",
    content: (
      <SlideShell tag="Guiding Principle" tagColor="bg-teal-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Accessibility Is Not Optional
        </h1>
        <div className="w-16 h-1 bg-teal-600 rounded mb-6" />

        <div className="bg-red-600 text-white rounded-xl p-5 mb-5">
          <p className="text-lg font-bold mb-1">Deadline: April 24, 2026</p>
          <p className="text-sm text-red-100">Federal digital accessibility requirements take effect. Course materials must meet <strong>WCAG 2.1</strong> standards. This is not a recommendation — it is a compliance requirement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <SectionCard title="The University Position" icon="🏛️">
            <p className="text-sm mb-2">Rutgers is committed to ensuring all digital content is accessible to everyone, including people with disabilities.</p>
            <a href="https://academicaffairs.rutgers.edu/digital-accessibility" target="_blank" rel="noreferrer" className="text-xs font-bold text-teal-700 underline">→ academicaffairs.rutgers.edu/digital-accessibility</a>
          </SectionCard>
          <SectionCard title="Where AI Comes In" icon="🤖" accent={true}>
            <p className="text-sm">For materials that are difficult or impossible to make accessible by hand — scanned PDFs, figures, charts, handwritten documents — AI tools can do in minutes what would take hours.</p>
          </SectionCard>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <p className="text-sm text-teal-900"><strong>This thread runs through the whole workshop.</strong> Every demo today has an accessibility dimension. We will return to this with a concrete pipeline — AI vision describing figures, generating alt text, producing narrated audio — before we are done.</p>
        </div>
      </SlideShell>
    ),
  },

  /* ─ WHAT YOU HAVE ─ */
  {
    label: "Your Tools",
    content: (
      <SlideShell tag="Segment 2 · 10 min" tagColor="bg-blue-600">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          What You Actually Have
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">

          {/* Microsoft */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🪟</span>
              <h3 className="font-bold text-base text-gray-800">Microsoft 365</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-1">Copilot Chat</span>
                <p className="text-sm text-gray-700">Available in ScarletMail and inside M365 apps. Includes voice-to-text. Powered by GPT-5.2.</p>
              </div>
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 rounded mb-1">Designer</span>
                <p className="text-sm text-gray-700">AI image and graphic creation.</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-200">Context: local files · work content · cloud files</p>
          </div>

          {/* Google */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔵</span>
              <h3 className="font-bold text-base text-gray-800">Google Workspace — Gemini</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Models</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">Flash (fast)</span>
                  <span className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">Thinking</span>
                  <span className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">Pro 3.1</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Specialized Tools</p>
                <div className="flex flex-wrap gap-2">
                  {["Guided Learning","Create Image","Create Music","Canvas","Deep Research","NotebookLM"].map(t => (
                    <span key={t} className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <p className="text-sm font-bold text-blue-800 mb-0.5">Gems</p>
                <p className="text-sm text-gray-700">Customized Gemini instances — define a role, context, and constraints. The closest thing to your own AI in a licensed tool.</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-200">Context: upload files · Google Drive · voice-to-text</p>
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

  /* ─ THE LANDSCAPE ─ */
  {
    label: "Landscape",
    content: (
      <SlideShell tag="The Map" tagColor="bg-indigo-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          The AI Landscape in 2 Minutes
        </h1>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">💬</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500">LLMs</h3>
            </div>
            <p className="text-sm text-gray-800 font-semibold mb-1">The Text Foundation</p>
            <p className="text-sm text-gray-700 mb-3">Text in, text out. This is what chatbots are built on — GPT, Gemini, Claude, Llama, DeepSeek.</p>
            <p className="text-xs text-gray-500 italic">The chat box is one application of this layer. It's the starting point, not the whole story.</p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌐</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-indigo-500">Omni Models</h3>
            </div>
            <p className="text-sm text-indigo-900 font-semibold mb-1">All the Senses</p>
            <p className="text-sm text-indigo-800 mb-3">The step change. These models see, hear, speak, and create media natively — not bolted on.</p>
            <div className="flex flex-wrap gap-1.5">
              {["👁 Sight","👂 Hearing","🗣 Speech","🎵 Audio","🎬 Video","🖼 Images"].map(s => (
                <span key={s} className="bg-white border border-indigo-200 text-indigo-700 text-xs font-medium px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
            <p className="text-xs text-indigo-500 italic mt-3">Gemini, GPT-4o, Claude. More common now than ever before.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏠</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500">Local Models</h3>
            </div>
            <p className="text-sm text-gray-800 font-semibold mb-1">No Data Leaves</p>
            <p className="text-sm text-gray-700 mb-3">Models that run on your machine or institution's servers. DeepSeek OCR, Llama, Whisper.</p>
            <p className="text-xs text-amber-600">⚠ These sit outside the licensed ecosystem — Rutgers has no evaluation process for open-source tools.</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-4">
          <p className="text-sm text-center"><span className="text-indigo-300 font-bold">These aren't separate worlds — they're the palette.</span> Agents draw from all of them, combining capabilities to do work no single chatbot exchange can.</p>
        </div>
      </SlideShell>
    ),
  },

  /* ─ THE COMPETITION ─ */
  {
    label: "The Competition",
    content: (
      <SlideShell tag="The Map" tagColor="bg-indigo-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-1 leading-tight">
          This Is What's Competing
        </h1>
        <p className="text-sm text-gray-500 mb-4">Weekly token usage across all models — <a href="https://openrouter.ai/rankings" target="_blank" rel="noreferrer" className="text-indigo-600 font-bold hover:underline">openrouter.ai/rankings</a></p>

        <img
          src="20260306/openrouter-rankings.png"
          alt="OpenRouter weekly model usage rankings chart showing explosive growth across dozens of competing AI models"
          className="w-full rounded-xl shadow-md mb-4"
        />

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
            <p className="text-xl font-black text-indigo-700">13.6T</p>
            <p className="text-xs text-gray-600">tokens in one week</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
            <p className="text-xl font-black text-indigo-700">"Others"</p>
            <p className="text-xs text-gray-600">is the largest category — 6.54T</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
            <p className="text-xl font-black text-indigo-700">↑</p>
            <p className="text-xs text-gray-600">usage nearly tripled since September</p>
          </div>
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💬</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-gray-500">Chatbot — e.g. ChatGPT</h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">One exchange at a time. You type, it responds. It doesn't plan, act across steps, or persist between sessions.</p>
            <p className="text-sm text-gray-700">Everything you know from ChatGPT fits here. It's the foundation — and one tool among many that agents can call.</p>
          </div>
          <div className="bg-indigo-600 text-white rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🤖</span>
              <h3 className="font-bold text-sm uppercase tracking-wide text-indigo-100">Agent — Orchestrator</h3>
            </div>
            <p className="text-sm text-indigo-50 mb-2">Spawns tools — chatbots, search, code execution, APIs — chains them together, and works autonomously to <strong>complete tasks and achieve goals.</strong></p>
            <p className="text-sm text-indigo-50">You don't prompt it. You give it a goal and access to your tools, and it figures out the steps.</p>
          </div>
        </div>

        <div className="bg-red-950 border border-red-700 rounded-xl p-5 mb-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <p className="text-red-300 font-black text-sm uppercase tracking-wide mb-1">New Milestone — and a Warning: OpenClaw</p>
              <p className="text-red-100 text-sm mb-2">OpenClaw is a self-hosted open-source agent that went viral in early 2026. You give it your credentials — email, calendar, messaging apps, terminals — and it autonomously completes tasks using as many sub-agents as it needs, then reports back.</p>
              <p className="text-red-200 text-sm mb-2">A January 2026 security audit found <strong className="text-white">512 vulnerabilities, 8 critical.</strong> This is where the technology is heading — and it's not ready for unsupervised use with institutional data.</p>
              <p className="text-red-300 text-xs italic">This is not a recommendation. It's a signal of what autonomous agents now look like in the wild.</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <p className="text-sm font-bold text-indigo-900 mb-1">Your safe on-ramp: Gemini Gems</p>
          <p className="text-sm text-indigo-800">A Gem is a customized Gemini — you define the role, give it context, set constraints. Available in your ScarletMail account. Not a full agent, but where agent thinking starts.</p>
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
          Your Course Materials as Context
        </h1>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-emerald-900">
            Students learn from <strong>you</strong> — how you organize a course, the connections you draw, the sequence you choose. Canvas delivers that structure. But it is not a deep authoring tool. If you want interactivity and engagement, you need something that can <strong>think with your materials</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <SectionCard title="Canvas Organizes" icon="📋">
            <p className="text-sm">Canvas is where your course lives. It is not where your course thinks. Your syllabus, readings, notes, and rubrics are related — but Canvas doesn't treat them that way.</p>
          </SectionCard>
          <SectionCard title="AI Works in Context" icon="🤖" accent={true}>
            <p className="text-sm">Feed AI your materials and it can generate interactive assignments, quizzes, summaries, and discussion prompts — all grounded in your course, not someone else's.</p>
          </SectionCard>
          <SectionCard title="NotebookLM Is the Entry Point" icon="📓">
            <p className="text-sm">Upload your notes, readings, or syllabus. NotebookLM indexes them and lets you — and your students — interact with your course as a knowledge base.</p>
          </SectionCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SectionCard title="Open Source = Permission to Transform" icon="📖">
            <p className="text-sm">A proprietary textbook can't be fed to AI tools or redistributed as derivatives. With open source, <strong>derivatives are the point</strong>.</p>
            <p className="text-xs text-gray-500 mt-2 italic">Cite the source. Note when AI was used. Model the practice you want students to follow.</p>
          </SectionCard>
          <SectionCard title="Ownership" icon="🔑">
            <p className="text-sm">Materials in Canvas belong to the Canvas workflow. Materials in <strong>a folder you own</strong>, fed into AI tools, belong to you.</p>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  /* ─ CONTEXT PROMPT ─ */
  {
    label: "Context Prompt",
    content: (
      <SlideShell tag="The Key Constraint" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Keeping AI in Your Course
        </h1>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-6" />

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-emerald-900">The risk with any AI tool is that it wanders — pulling in outside sources, other textbooks, generic examples that have nothing to do with your course. The fix is explicit constraint in your prompt: <strong>the context is the course.</strong></p>
        </div>

        <CodeBlock>{`Use ONLY the materials I have provided.
Do NOT draw from outside sources, other textbooks,
or general knowledge.

All examples, explanations, and questions must
come directly from the context I have given you.

If the answer is not in my materials, say so.`}</CodeBlock>

        <DropIn label="The Venn Diagram">
          When you give AI your syllabus, your notes, your readings — and then constrain it to stay there — everything it produces lives inside the Venn diagram of your materials. The AI doesn't reach outside that circle. The output reflects your course, not the internet.
        </DropIn>
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

  /* ─ 6: GEMS DEMO ─ */
  {
    label: "Gems Demo",
    content: (
      <SlideShell tag="Demo Flow" tagColor="bg-blue-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Gemini Gems: From Textbook to Interactive Assignment
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-6" />

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-blue-900 font-bold mb-1">Today's Source Material</p>
          <p className="text-sm text-blue-800 mb-2">
            A chapter from <strong>Dr. Carmela Scala's</strong> open-source Italian 101 textbook — uploaded to a Gemini Gem to generate an interactive assignment.
          </p>
          <div className="flex flex-col gap-1">
            <a href="https://openpub.libraries.rutgers.edu/italian101/" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-700 underline">→ Italian 101 Open Textbook</a>
            <a href="capitolo-1-libro-open-source-compressed.pdf" target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-700 underline">→ Source PDF (Capitolo 1)</a>
          </div>
        </div>

        <SectionCard title="What a Gem Does" icon="💎">
          <ul className="space-y-2 text-sm">
            <li>• You define the role, context, and constraints — once</li>
            <li>• Upload the PDF chapter — the Gem reads and works within it</li>
            <li>• Ask it to generate an interactive assignment from the material</li>
            <li>• The Gem stays in character: it doesn't wander beyond what you gave it</li>
          </ul>
          <p className="text-xs text-gray-500 mt-3 italic">
            You're not prompting from scratch every time. You're designing a reusable AI collaborator for your course.
          </p>
        </SectionCard>

        <DropIn label="The Difference from Plain Gemini">
          A regular Gemini chat starts fresh every time. A Gem carries your instructions, your context, and your constraints into every conversation. Same model — different relationship.
        </DropIn>
      </SlideShell>
    ),
  },

  /* ─ 7: VIBE CODING ─ */
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
      <SlideShell tag="Hard Cases" tagColor="bg-amber-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Handwritten &amp; Damaged PDFs → Accessible Canvas Pages
        </h1>
        <div className="w-16 h-1 bg-amber-600 rounded mb-6" />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
          <p className="text-sm text-amber-900"><strong>The problem:</strong> Handwritten notes, older scanned documents, and damaged PDFs contain STEM notation that is invisible to screen readers and inaccessible by default. Traditional remediation methods work — but on the hard cases, they struggle.</p>
          <p className="text-xs text-amber-700 mt-2 italic">This pipeline is not a replacement for standard accessibility workflows. It is a tool to reach the materials that other approaches can't.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="bg-white border-2 border-amber-300 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-sm mb-3">1</div>
            <p className="font-bold text-gray-800 text-sm mb-1">DeepSeek OCR 2</p>
            <p className="text-xs text-gray-600 mb-2">Open source model. Reads handwritten math and damaged PDFs → outputs structured LaTeX.</p>
            <a href="https://huggingface.co/spaces/ricklon/DeepSeek-OCR-2-Math" target="_blank" rel="noreferrer" className="text-xs font-bold text-amber-700 underline">→ Try on Hugging Face</a>
          </div>
          <div className="bg-white border-2 border-amber-300 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-sm mb-3">2</div>
            <p className="font-bold text-gray-800 text-sm mb-1">MathJax Rendering</p>
            <p className="text-xs text-gray-600">Converts LaTeX into rendered math notation in the browser. Already used internally by Canvas — no plugins needed.</p>
          </div>
          <div className="bg-white border-2 border-amber-300 rounded-xl p-4">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-black text-sm mb-3">3</div>
            <p className="font-bold text-gray-800 text-sm mb-1">Colab Assembler</p>
            <p className="text-xs text-gray-600">Python script in Google Colab wraps the LaTeX in an HTML file with a MathJax header. Paste the output directly into a Canvas page.</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-4">
          <p className="text-sm"><strong className="text-amber-400">The result:</strong> Handwritten equations and notation become screen-reader-compatible, properly rendered math in Canvas — accessible to all students.</p>
        </div>
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
            <p className="text-xs text-gray-500 italic mb-2">Connects to the STEM thread. Same concept, consistent style.</p>
            <a href="https://gemini.google.com/app/a1a44410b43b9642" target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-600 underline block mb-1">→ See example</a>
            <a href="20260306/graphs/images.html" target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-600 underline">→ Pick a graph to try</a>
          </SectionCard>
          <SectionCard title="Move 3: 3D View" icon="🏛️" accent={true}>
            <p className="text-sm mb-1">2D photo → 3D spatial model</p>
            <p className="text-xs text-red-100 italic mb-2">Architecture, urban planning, art history, archaeology, biology.</p>
            <p className="text-xs text-red-100 font-bold mb-1">Bonus:</p>
            <a href="https://www.meshy.ai/workspace" target="_blank" rel="noreferrer" className="text-xs font-bold text-white underline">→ Meshy — image to 3D model</a>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  /* ─ 12: ACCESSIBILITY ─ */
  {
    label: "Making It Accessible",
    content: (
      <SlideShell tag="AI Vision" tagColor="bg-pink-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Making It Accessible
        </h1>
        <div className="w-16 h-1 bg-pink-600 rounded mb-6" />

        <div className="bg-pink-50 border border-pink-200 rounded-xl p-5 mb-5">
          <p className="text-sm text-pink-900">
            Graphs, charts, and figures in PDFs are almost universally inaccessible. Screen readers hit them and say <strong>"image"</strong> — or nothing.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-900"><strong>Easier path for course materials:</strong> M365 Copilot can extract graphs and figures directly from your documents — it even writes and runs the code to do it. If your materials are already in Microsoft 365, start there.</p>
        </div>

        <div className="space-y-3 mb-5">
          <PipelineStep num="1" title="Extract Figures">Vibe-coded script in Colab pulls figures from PDF — or use M365 Copilot to extract them directly.</PipelineStep>
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

  /* ─ VOICE ─ */
  {
    label: "Voice",
    content: (
      <SlideShell tag="Both Directions" tagColor="bg-teal-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Voice In, Voice Out
        </h1>
        <div className="w-16 h-1 bg-teal-600 rounded mb-6" />

        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
          <p className="text-sm text-teal-900">Voice is an accessibility tool, a productivity tool, and an authoring tool. Both directions — speech to text and text to speech — now run locally in your browser or on your machine. No audio sent to the cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-white border-2 border-teal-300 rounded-xl p-5">
            <h3 className="font-black text-gray-900 text-base mb-1">Speech → Text</h3>
            <p className="text-xs text-teal-700 font-bold uppercase tracking-wide mb-3">Dictate anything, anywhere</p>
            <p className="text-sm text-gray-700 mb-4">Handy runs Whisper entirely on your machine. Press a shortcut, speak, release — text appears wherever your cursor is. Works in any app. Nothing leaves your computer.</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-4">
              <li>• Dictate into Canvas, email, documents</li>
              <li>• Great for faculty with accessibility needs</li>
              <li>• Review output — struggles with STEM terms and accented speech</li>
            </ul>
            <a href="https://handy.computer" target="_blank" rel="noreferrer" className="inline-block bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-teal-700 transition-colors">→ handy.computer</a>
          </div>

          <div className="bg-white border-2 border-teal-300 rounded-xl p-5">
            <h3 className="font-black text-gray-900 text-base mb-1">Text → Speech</h3>
            <p className="text-xs text-teal-700 font-bold uppercase tracking-wide mb-3">Narrate your content in the browser</p>
            <p className="text-sm text-gray-700 mb-4">A 25MB text-to-speech model that runs entirely in the browser. Paste any text — a graph description, a passage, an assignment — and hear it read aloud. No account, no upload, no server.</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-4">
              <li>• Narrate alt text and figure descriptions</li>
              <li>• Preview how your content sounds to students using assistive technology</li>
              <li>• Runs offline once loaded</li>
            </ul>
            <a href="https://rianders.github.io/kittenttsinweb/" target="_blank" rel="noreferrer" className="inline-block bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded hover:bg-teal-700 transition-colors">→ Try TTS in browser</a>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-4">
          <p className="text-sm"><strong className="text-teal-400">Why this matters for accessibility:</strong> Audio is not an accommodation — it is a mode of learning. These tools let you generate narrated content from anything you write, without a recording studio or a specialist.</p>
        </div>
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
            { label: "DeepSeek OCR 2 Math (Hugging Face Space)", url: "https://huggingface.co/spaces/ricklon/DeepSeek-OCR-2-Math" },
            { label: "DeepSeek OCR 2 Model", url: "https://huggingface.co/deepseek-ai/DeepSeek-OCR-2" },
            { label: "MathJax", url: "https://mathjax.org" },
            { label: "Handy — Local Speech-to-Text", url: "https://handy.computer" },
            { label: "Text-to-Speech in the Browser", url: "https://rianders.github.io/kittenttsinweb/" },
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
  /* ─ CONTACT ─ */
  {
    label: "Contact",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-8 leading-tight">
          Let's Talk
        </h1>
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 w-full max-w-sm">
          <div className="bg-red-600 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
            <span className="text-4xl text-white">👤</span>
          </div>
          <h2 className="font-black text-2xl text-gray-900">Rick Anderson</h2>
          <p className="text-sm text-gray-600 mt-1">Director of Emerging Technology</p>
          <p className="text-xs text-gray-500">University Online Education Services</p>
          <div className="mt-6">
            <p className="text-blue-600 font-semibold text-sm">rick.anderson@rutgers.edu</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="bg-red-600 text-white text-xs font-black tracking-widest px-6 py-2 rounded inline-block mb-2">
            RUTGERS UNIVERSITY
          </div>
          <p className="text-gray-500 text-sm">Office of University Online Education Services</p>
        </div>
      </div>
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

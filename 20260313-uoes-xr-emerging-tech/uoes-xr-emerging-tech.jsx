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
      <span className="text-xs text-gray-400">UOES Emerging Tech for XR · 2026</span>
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

const Tag = ({ color = "bg-blue-100 text-blue-700", children }) => (
  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>{children}</span>
);

const slides = [

  // SLIDE 1 — Title
  {
    label: "Title",
    content: (
      <SlideShell tag="Emerging Tech for XR" tagColor="bg-red-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">University Online Education Services</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Emerging Technology<br />
            <span className="text-red-600">for XR</span>
          </h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-8" />
          <div className="flex flex-wrap gap-2 mb-8">
            <Tag color="bg-red-100 text-red-700">WebXR</Tag>
            <Tag color="bg-purple-100 text-purple-700">Gaussian Splats</Tag>
            <Tag color="bg-blue-100 text-blue-700">AI to 3D</Tag>
            <Tag color="bg-green-100 text-green-700">Immersive Learning</Tag>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            <div>
              <p className="font-bold text-gray-800">Rick Anderson</p>
              <p className="text-sm text-gray-500">Director of Emerging Technology · UOES</p>
              <p className="text-xs text-gray-400 mt-0.5">rick.anderson@rutgers.edu</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 2 — UOES
  {
    label: "UOES",
    content: (
      <SlideShell tag="Who We Are" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          University Online Education Services
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SectionCard title="Our Mission" icon="🎓" accent={true}>
            <p>UOES supports Rutgers faculty and staff in developing innovative, high-quality online and hybrid learning experiences — from instructional design to emerging technology pilots.</p>
          </SectionCard>

          <SectionCard title="Emerging Technology" icon="🚀">
            <ul className="space-y-2">
              <Bullet>Identifying and piloting transformative edtech</Bullet>
              <Bullet>XR, AI, spatial computing, and immersive media</Bullet>
              <Bullet>Faculty partnerships &amp; proof-of-concept projects</Bullet>
              <Bullet>Building toward scalable adoption across Rutgers</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="What We Support" icon="🛠️">
            <ul className="space-y-2">
              <Bullet icon="→">Online course development &amp; redesign</Bullet>
              <Bullet icon="→">AI integration strategies</Bullet>
              <Bullet icon="→">XR &amp; 3D immersive experience design</Bullet>
              <Bullet icon="→">Accessibility &amp; inclusive design</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="Connect" icon="🔗">
            <ul className="space-y-2">
              <Bullet icon="✉">rick.anderson@rutgers.edu</Bullet>
              <Bullet icon="🌐">Office of University Online Education Services</Bullet>
              <Bullet icon="📅">UOES Emerging Technology Community — quarterly sessions</Bullet>
            </ul>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 3 — Emerging Technology
  {
    label: "Emerging Tech",
    content: (
      <SlideShell tag="Emerging Technology" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Why Emerging Technology in Education?
        </h1>
        <div className="w-16 h-1 bg-gray-700 rounded mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <SectionCard title="The Shift" icon="🌊" accent={true}>
            <p>We are in a period of rapid convergence — AI, spatial computing, and 3D media are colliding. This changes what's possible in online learning.</p>
          </SectionCard>

          <SectionCard title="Opportunity" icon="✨">
            <ul className="space-y-2">
              <Bullet>Presence &amp; engagement beyond flat video</Bullet>
              <Bullet>Experiential learning at scale</Bullet>
              <Bullet>Accessible immersion via the browser</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="Challenge" icon="⚖️">
            <ul className="space-y-2">
              <Bullet>Hardware barriers (but dropping fast)</Bullet>
              <Bullet>Authoring complexity (but AI is lowering it)</Bullet>
              <Bullet>Pedagogy must lead technology</Bullet>
            </ul>
          </SectionCard>
        </div>

        <div className="bg-red-50 border border-red-100 rounded-xl px-5 py-4">
          <p className="text-sm text-red-800 font-medium">
            The window to build meaningful XR learning experiences — without specialized hardware — is opening now.{" "}
            <span className="font-bold">Web-based XR is the on-ramp.</span>
          </p>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 4 — WebXR
  {
    label: "WebXR",
    content: (
      <SlideShell tag="WebXR" tagColor="bg-purple-600">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          WebXR: Immersive Experiences in the Browser
        </h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="What is WebXR?" icon="🌐">
            <ul className="space-y-2">
              <Bullet>W3C standard for VR &amp; AR in web browsers</Bullet>
              <Bullet>Works on phones, desktops, and headsets</Bullet>
              <Bullet>No app install — just a URL</Bullet>
              <Bullet>Lowers barrier to immersive learning dramatically</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="PlayCanvas" icon="🎮" accent={true}>
            <p className="mb-3">Our authoring platform of choice — a professional WebGL/WebXR engine with a browser-based editor, built for interactive 3D.</p>
            <ul className="space-y-1.5">
              <Bullet icon="→">Visual scene editor in the browser</Bullet>
              <Bullet icon="→">First-class WebXR &amp; VR support</Bullet>
              <Bullet icon="→">Gaussian splat rendering built-in</Bullet>
              <Bullet icon="→"><a href="https://playcanvas.com/user/rianders" target="_blank" rel="noreferrer" className="underline underline-offset-2">View splat demo ↗</a></Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="The Stack" icon="🧰">
            <ul className="space-y-2">
              <Bullet icon="▹"><strong>PlayCanvas</strong> — scene authoring &amp; interaction</Bullet>
              <Bullet icon="▹"><strong>SuperSplat</strong> — splat editing &amp; publishing</Bullet>
              <Bullet icon="▹"><strong>WebGL / WebGPU</strong> — GPU rendering</Bullet>
              <Bullet icon="▹"><strong>model-viewer</strong> — embeddable 3D models</Bullet>
            </ul>
          </SectionCard>
        </div>

        <SectionCard title="Educational Use Cases" icon="📚">
          <div className="flex flex-wrap gap-2 mt-1">
            {["Virtual field trips", "3D anatomy", "Historical reconstruction", "Lab simulations", "Language immersion", "Art & design critique"].map(label => (
              <span key={label} className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">{label}</span>
            ))}
          </div>
        </SectionCard>
      </SlideShell>
    ),
  },

  // SLIDE 5 — Spatial Justice
  {
    label: "Spatial Justice",
    content: (
      <SlideShell tag="Social Engagement in XR" tagColor="bg-indigo-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Spatial Justice &amp; Student-Created XR
        </h1>
        <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wide">Byrne Seminar — Social Engagement in XR · Rutgers 2024</p>
        <div className="w-16 h-1 bg-indigo-600 rounded mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="The Approach" icon="🏙️" accent={true}>
            <ul className="space-y-2">
              <Bullet icon="→">XR &amp; community development</Bullet>
              <Bullet icon="→">3D modeling &amp; game design</Bullet>
              <Bullet icon="→">Group XR prototype development</Bullet>
              <Bullet icon="→">Final immersive community assets</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="New Brunswick" icon="🎨">
            <ul className="space-y-2">
              <Bullet icon="▹">Address navigation hurdles</Bullet>
              <Bullet icon="▹">Highlight cultural histories</Bullet>
              <Bullet icon="▹">French Street murals in AR</Bullet>
              <Bullet icon="▹">Interactive digital layers over physical space</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="Spatial Justice" icon="⚖️">
            <ul className="space-y-2">
              <Bullet icon="✓">Improve public access to social services</Bullet>
              <Bullet icon="✓">Advocate for spatial justice</Bullet>
              <Bullet icon="✓">Students as community designers</Bullet>
              <Bullet icon="✓">Immersive assets for the public good</Bullet>
            </ul>
          </SectionCard>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-5 py-4 flex items-start gap-3">
          <span className="text-xl flex-shrink-0">💡</span>
          <div className="flex-1">
            <p className="text-sm text-indigo-800 mb-2">
              Students learn spatial computing not as spectators but as <strong>designers of public experience</strong> — building XR assets that serve their neighbors and advocate for spatial justice in their own communities.
            </p>
            <a
              href="https://miro.com/app/board/uXjVN482_Q4=/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Class Miro Board (2024) ↗
            </a>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 6 — Flowing Together
  {
    label: "Flowing Together",
    content: (
      <SlideShell tag="XR Experience" tagColor="bg-blue-600">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          Flowing Together
        </h1>
        <p className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-wide">A WebXR Immersive Experience</p>
        <div className="w-16 h-1 bg-blue-600 rounded mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <SectionCard title="About the Experience" icon="🌊" accent={true}>
            <p className="mb-3">
              <em>Flowing Together</em> is a browser-based WebXR experience designed to explore immersive, participatory presence — accessible from any device, no headset required.
            </p>
            <ul className="space-y-1.5">
              <Bullet icon="→">Built with A-Frame &amp; WebXR APIs</Bullet>
              <Bullet icon="→">Multi-user presence &amp; shared space</Bullet>
              <Bullet icon="→">Ambient, flowing 3D environment</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="What It Demonstrates" icon="🎯">
            <ul className="space-y-2">
              <Bullet>Low-barrier entry — mobile, desktop, or headset</Bullet>
              <Bullet>Shared spatial experience without a native app</Bullet>
              <Bullet>Emotional &amp; experiential dimensions of XR</Bullet>
              <Bullet>A model for immersive course components</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="Pedagogy Connection" icon="💡">
            <ul className="space-y-2">
              <Bullet icon="✓">Social presence in online learning</Bullet>
              <Bullet icon="✓">Place-based &amp; experiential learning theory</Bullet>
              <Bullet icon="✓">Engagement beyond passive video</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="Try It" icon="🔗">
            <p className="text-sm text-gray-600 mb-3">
              Visit the experience from any modern browser. Works best on mobile for full 360° interaction.
            </p>
            <a
              href="https://flowingtogether.lambertvillenj.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              flowingtogether.lambertvillenj.org ↗
            </a>
          </SectionCard>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 7 — Gaussian Splats + AI to 3D
  {
    label: "3D Workflows",
    content: (
      <SlideShell tag="New 3D Workflows" tagColor="bg-green-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          New 3D Workflows: Gaussian Splats &amp; AI to 3D
        </h1>
        <div className="w-16 h-1 bg-green-600 rounded mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <SectionCard title="Gaussian Splatting" icon="💠" accent={true}>
            <p className="mb-3">
              Photorealistic 3D capture from video or images — rendered as millions of volumetric "splats" in real time. Far more lifelike than traditional photogrammetry.
            </p>
            <ul className="space-y-1.5">
              <Bullet icon="→"><a href="https://gemini.google.com/app" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">Gemini</a> Nano Banana — extract multi-angle object views → 3D</Bullet>
              <Bullet icon="→"><a href="https://www.kiriengine.app/" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">Kiri Engine</a> — mobile splat capture</Bullet>
              <Bullet icon="→"><a href="https://poly.cam/" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">Polycam</a> — photogrammetry &amp; splat scans</Bullet>
              <Bullet icon="→">Edit in SuperSplat → embed in PlayCanvas</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="SuperSplat by PlayCanvas" icon="✨">
            <p className="mb-3 text-gray-600">
              Browser-based Gaussian splat editor — crop, clean, transform, and publish splats. Open source, made by the PlayCanvas team.
            </p>
            <ul className="space-y-2">
              <Bullet icon="▹">Trim &amp; mask unwanted geometry</Bullet>
              <Bullet icon="▹">Adjust position, scale, rotation</Bullet>
              <Bullet icon="▹">Publish scenes with a shareable URL</Bullet>
              <Bullet icon="▹">
                <a href="https://superspl.at" target="_blank" rel="noreferrer" className="text-green-700 font-bold underline underline-offset-2">superspl.at ↗</a>
              </Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="AI to 3D" icon="🤖">
            <p className="mb-3 text-gray-600">
              Generate 3D assets from images — no modeling expertise required.
            </p>
            <ul className="space-y-2">
              <Bullet icon="▹">
                <strong><a href="https://huggingface.co/spaces/microsoft/TRELLIS" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-green-700">Trellis</a></strong> — Microsoft open-source image → 3D
              </Bullet>
              <Bullet icon="▹">
                <strong><a href="https://www.meshy.ai/discover" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-green-700">Meshy</a></strong> — commercial image/text → 3D mesh
              </Bullet>
            </ul>
          </SectionCard>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-4 flex items-start gap-3">
          <span className="text-xl flex-shrink-0">📍</span>
          <div>
            <p className="font-bold text-green-800 text-sm mb-1">Live Splat Demos</p>
            <div className="flex flex-wrap gap-4 text-sm text-green-700">
              <span>Tokyo Drisk (SuperSplat) —{" "}
                <a href="https://superspl.at/scene/5a6bbd3c" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">View scene ↗</a>
              </span>
              <span>Luma Labs captures —{" "}
                <a href="https://lumalabs.ai/dashboard" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2">lumalabs.ai/dashboard ↗</a>
              </span>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // SLIDE 7 — What's Next / Resources
  {
    label: "Next Steps",
    content: (
      <SlideShell tag="Get Involved" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight">
          What's Next
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <SectionCard title="Pilot Opportunities" icon="🧪" accent={true}>
            <ul className="space-y-2">
              <Bullet icon="✓">Gaussian splat capture of your lab or site</Bullet>
              <Bullet icon="✓">WebXR component embedded in a course</Bullet>
              <Bullet icon="✓">AI-generated 3D assets for instruction</Bullet>
              <Bullet icon="✓">Flowing Together facilitation for cohort-building</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="Resources &amp; Tools" icon="🔗">
            <ul className="space-y-2">
              <Bullet icon="→"><a href="https://playcanvas.com/user/rianders" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-red-700">PlayCanvas</a> — playcanvas.com</Bullet>
              <Bullet icon="→"><a href="https://superspl.at" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-red-700">SuperSplat</a> — superspl.at</Bullet>
              <Bullet icon="→"><a href="https://poly.cam/" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-red-700">Polycam</a> — poly.cam</Bullet>
              <Bullet icon="→"><a href="https://www.kiriengine.app/" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-red-700">Kiri Engine</a> — kiriengine.app</Bullet>
              <Bullet icon="→"><a href="https://huggingface.co/spaces/microsoft/TRELLIS" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-red-700">Trellis</a> — image → 3D (open source)</Bullet>
              <Bullet icon="→"><a href="https://www.meshy.ai/discover" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-red-700">Meshy</a> — image → 3D (commercial)</Bullet>
            </ul>
          </SectionCard>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4">
          <span className="text-3xl">📬</span>
          <div>
            <p className="font-bold text-gray-800">Ready to explore?</p>
            <p className="text-sm text-gray-600">
              Reach out to discuss a pilot or join the UOES Emerging Technology Community.{" "}
              <span className="font-semibold text-red-600">rick.anderson@rutgers.edu</span>
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
          className="px-3 py-2 bg-gray-200 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-300 active:scale-95 transition-all"
        >
          ⏮ Begin
        </button>
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
        <button
          onClick={last}
          className="px-3 py-2 bg-gray-200 text-gray-700 text-xs font-bold rounded-lg hover:bg-gray-300 active:scale-95 transition-all"
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

const { useState, useEffect } = React;

const RutgersLogo = () => (
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
      <RutgersLogo />
      <span className={`text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full ${tagColor}`}>
        {tag}
      </span>
    </div>
    <div className="flex-1 overflow-auto p-6 sm:p-10">
      {children}
    </div>
    <div className="px-6 py-2 border-t border-gray-100 flex justify-between items-center">
      <span className="text-xs text-gray-400">Rutgers UOES / GRID · FUBAR Labs · CHI-261589</span>
      <span className="flex items-center gap-2 text-xs text-gray-400">
        <span className="bg-amber-400 text-amber-900 font-black uppercase tracking-widest px-2 py-0.5 rounded text-xs">DRAFT</span>
        Chameleon User Meeting · April 2026
      </span>
    </div>
  </div>
);

const SectionCard = ({ title, icon, children, accent = false, warn = false, success = false, isActive = false, isDimmed = false, onClick }) => (
  <div
    onClick={onClick}
    className={[
      "rounded-xl p-5 transition-all duration-200",
      warn ? "bg-amber-50 border-l-4 border-amber-400" :
        success ? "bg-emerald-50 border-l-4 border-emerald-500" :
        accent ? "bg-red-50 border-l-4 border-red-500" : "bg-gray-50 border border-gray-200",
      isActive ? "ring-2 ring-red-500 shadow-xl scale-[1.02] relative z-10" : "",
      isDimmed ? "opacity-25 scale-[0.98]" : "",
      onClick ? "cursor-pointer select-none" : "",
    ].join(" ")}
  >
    <div className="flex items-center gap-2 mb-3">
      <span className="text-xl">{icon}</span>
      <h3 className={`font-bold text-sm uppercase tracking-wide ${warn ? "text-amber-700" : success ? "text-emerald-700" : accent ? "text-red-700" : "text-gray-500"}`}>{title}</h3>
    </div>
    <div className={warn ? "text-amber-900 text-sm" : success ? "text-emerald-900 text-sm" : accent ? "text-gray-800 text-sm" : "text-gray-700 text-sm"}>
      {children}
    </div>
  </div>
);

const CardGrid = ({ cols = 2, className = "", children }) => {
  const [active, setActive] = useState(null);
  const activeRef = React.useRef(null);
  const items = React.Children.toArray(children);
  const count = items.length;

  useEffect(() => { activeRef.current = active; }, [active]);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key.toLowerCase();
      if (key === 'escape') { setActive(null); return; }
      if (e.key === ' ') {
        if (activeRef.current !== null) {
          e.preventDefault();
          e.stopImmediatePropagation();
          setActive(prev => prev < count - 1 ? prev + 1 : null);
        }
        return;
      }
      if (!['w', 'a', 's', 'd'].includes(key)) return;
      setActive(prev => {
        const cur = prev === null ? 0 : prev;
        const row = Math.floor(cur / cols);
        const col = cur % cols;
        if (key === 'a') return Math.max(0, cur - 1);
        if (key === 'd') return Math.min(count - 1, cur + 1);
        if (key === 'w') { const n = (row - 1) * cols + col; return n >= 0 ? n : cur; }
        if (key === 's') { const n = (row + 1) * cols + col; return n < count ? n : cur; }
        return cur;
      });
    };
    window.addEventListener('keydown', handler, true);
    return () => window.removeEventListener('keydown', handler, true);
  }, [cols, count]);

  const Kbd = ({ children }) => (
    <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 font-mono text-gray-600 text-xs mx-0.5">{children}</kbd>
  );

  return (
    <div>
      <p className="text-xs text-gray-400 mb-3 italic">
        Click · <Kbd>W</Kbd><Kbd>A</Kbd><Kbd>S</Kbd><Kbd>D</Kbd> to spotlight · <Kbd>Space</Kbd> to step through · <Kbd>Esc</Kbd> to clear
      </p>
      <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-4 ${className}`}>
        {items.map((child, i) =>
          React.cloneElement(child, {
            isActive: active === i,
            isDimmed: active !== null && active !== i,
            onClick: () => setActive(active === i ? null : i),
          })
        )}
      </div>
    </div>
  );
};

const Bullet = ({ icon = "▸", children }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">{icon}</span>
    <span>{children}</span>
  </li>
);

const GapBullet = ({ children }) => (
  <li className="flex items-start gap-3 text-amber-900 text-sm leading-relaxed">
    <span className="text-amber-500 mt-0.5 flex-shrink-0 font-bold">?</span>
    <span>{children}</span>
  </li>
);

const Tag = ({ color = "bg-blue-100 text-blue-700", children }) => (
  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>{children}</span>
);

const PhaseBar = ({ phase, color, label, children }) => (
  <div className={`rounded-xl border-l-4 ${color} bg-gray-50 p-4`}>
    <div className="flex items-center gap-3 mb-1">
      <span className="text-xs font-black uppercase tracking-widest text-gray-500">{phase}</span>
      <span className="text-sm font-bold text-gray-800">{label}</span>
    </div>
    <div className="text-sm text-gray-600">{children}</div>
  </div>
);

const LoopStep = ({ n, label, detail, color }) => (
  <div className={`flex items-start gap-3 rounded-xl p-4 ${color}`}>
    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-black text-gray-800 text-sm flex-shrink-0 shadow">
      {n}
    </div>
    <div>
      <p className="font-bold text-sm text-gray-900">{label}</p>
      <p className="text-xs text-gray-600 mt-0.5">{detail}</p>
    </div>
  </div>
);

const LessonRow = ({ status, problem, fix }) => (
  <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
    <span className={`text-xs font-black mt-0.5 flex-shrink-0 ${status === "fixed" ? "text-emerald-600" : "text-amber-600"}`}>
      {status === "fixed" ? "✓" : "▲"}
    </span>
    <div>
      <p className="text-xs font-bold text-gray-800">{problem}</p>
      <p className="text-xs text-gray-500 mt-0.5">{fix}</p>
    </div>
  </div>
);

// ── SLIDES ─────────────────────────────────────────────────

const slides = [

  // ── TITLE ──
  {
    label: "Title",
    content: (
      <SlideShell tag="DRAFT · Chameleon User Meeting 2026" tagColor="bg-amber-500">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Rutgers University · FUBAR Labs · CHI-261589</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-1">
            From RC Cars
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-red-600 leading-tight mb-1">
            to Robot Arms
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-600 leading-snug mb-4">
            Extending Embodied AI Education on Chameleon Cloud
          </h2>
          <div className="w-20 h-1 bg-red-600 rounded mb-5" />
          <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-5">
            An open-source curriculum that grows from autonomous RC cars to robotic arm manipulation —
            using CHI@Edge, MI100 bare-metal GPU, and Chameleon-hosted inference as its backbone.
            Now adding AI agents to the control loop.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag color="bg-red-100 text-red-700">Embodied AI</Tag>
            <Tag color="bg-blue-100 text-blue-700">CHI@Edge</Tag>
            <Tag color="bg-purple-100 text-purple-700">LeRobot</Tag>
            <Tag color="bg-orange-100 text-orange-700">MI100 / ROCm</Tag>
            <Tag color="bg-emerald-100 text-emerald-700">Open Source</Tag>
            <Tag color="bg-amber-100 text-amber-700">Agentic Control</Tag>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            <div>
              <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
              <p className="text-xs text-gray-500">Rutgers UOES / GRID · FUBAR Labs</p>
              <p className="text-xs text-gray-400">April 15, 2026 · Chameleon User Meeting</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── ROADMAP ──
  {
    label: "Roadmap",
    content: (
      <SlideShell tag="Overview" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          What We'll Cover
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-6" />
        <div className="space-y-3">
          <PhaseBar phase="01" label="Who We Are — Rutgers UOES/GRID + FUBAR Labs" color="border-gray-400">
            AI Study Group, Robot Build Night, community learners, Bergen Tech HS, Maker Faires
          </PhaseBar>
          <PhaseBar phase="02" label="Phase 1: FooCars — RC Cars on CHI@Edge (2021–2023)" color="border-blue-400">
            Supervised vision navigation, fleet management, training loops, community workshops
          </PhaseBar>
          <PhaseBar phase="03" label="Phase 2: Coachable Robots — Arms + Cloud (Current)" color="border-red-500">
            SO-ARM101, LeRobot, MI100 training, CHI@Edge inference, Xbox controller teleop
          </PhaseBar>
          <PhaseBar phase="04" label="Lessons from the Trenches + CHI@Edge Specifics" color="border-amber-400">
            What we learned building this on real Chameleon infrastructure — not a polished doc
          </PhaseBar>
          <PhaseBar phase="05" label="Agents: AI on the Control Node (and the Edge?)" color="border-purple-500">
            LLM agents automating configuration; open question: can the Pi run an agent too?
          </PhaseBar>
        </div>
      </SlideShell>
    ),
  },

  // ── WHO WE ARE ──
  {
    label: "Who We Are",
    content: (
      <SlideShell tag="Background" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Who We Are
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Rutgers University</p>
            <p className="text-sm font-bold text-gray-800 mb-1">UOES / GRID</p>
            <p className="text-sm text-gray-700">Office of University Online Education Services + Game Research &amp; Immersive Design. Focus: hands-on, open curriculum for adult learners and undergrads.</p>
          </div>
          <div className="bg-gray-50 border-l-4 border-gray-400 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-600 mb-2">FUBAR Labs</p>
            <p className="text-sm font-bold text-gray-800 mb-1">NJ's First Hackerspace</p>
            <p className="text-sm text-gray-700">Community makerspace bridging academia and makers. Home to the <strong>AI Study Group</strong> and <strong>Robot Build Night</strong> — where curriculum sections get prototyped live with real participants.</p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Reach So Far</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div>
              <p className="text-2xl font-black text-red-600">15</p>
              <p className="text-xs text-gray-500">Bergen Tech HS students</p>
            </div>
            <div>
              <p className="text-2xl font-black text-red-600">1,000+</p>
              <p className="text-xs text-gray-500">Maker Faire attendees (multiple events)</p>
            </div>
            <div>
              <p className="text-2xl font-black text-red-600">2</p>
              <p className="text-xs text-gray-500">CHI@Edge summer internships</p>
            </div>
            <div>
              <p className="text-2xl font-black text-red-600">May 5</p>
              <p className="text-xs text-gray-500">CMSCE teacher training next</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── PHASE 1: FOOCARS ──
  {
    label: "Phase 1: FooCars",
    content: (
      <SlideShell tag="Phase 1 · 2021–2023" tagColor="bg-blue-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Phase 1: ChiaRacers / FooCars
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-5" />
        <CardGrid cols={2}>
          <SectionCard title="The Platform" icon="🚗">
            <p>Low-cost RC cars running <strong>supervised vision-based navigation</strong> on CHI@Edge. Custom Rutgers/GRID circuit boards adapted RC cars for Raspberry Pi control.</p>
          </SectionCard>
          <SectionCard title="CHI@Edge Role" icon="☁️">
            <p>Fleet management across multiple vehicles. <strong>Edge-to-bare-metal training loop:</strong> data collected on-car → trained on Chameleon GPU → weights returned to edge Pi.</p>
          </SectionCard>
          <SectionCard title="Tools Built" icon="🛠️">
            <p>Custom data curation tool, Streamlit/Gradio dashboards, JupyterHub notebooks for TensorFlow, PyTorch, ONNX, PiCamera, GPIO, serial devices.</p>
          </SectionCard>
          <SectionCard title="Community & Open Source" icon="🏫" accent={true}>
            <p>Bergen Tech HS (2021, 2023) · CHI@Edge Internships (2021, 2022) · Maker Faire nationwide · <strong>github.com/fubarlabs/foocars</strong> · 1,237 commits · 15 contributors</p>
          </SectionCard>
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── PHASE 1: TRAINING LOOP ──
  {
    label: "↳ Training Loop",
    content: (
      <SlideShell tag="Phase 1 · Infrastructure" tagColor="bg-blue-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          The Edge-to-Cloud Training Loop
        </h1>
        <div className="w-16 h-1 bg-blue-600 rounded mb-4" />
        <p className="text-sm text-gray-600 mb-4">This four-step loop is the core pattern of Phase 1 — Phase 2 extends it with simulation and inference.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <LoopStep n="1" label="Collect" detail="Camera + steering data captured on RC car during human demonstration drives" color="bg-blue-50" />
          <LoopStep n="2" label="Curate" detail="Custom tool filters and labels the dataset; bad frames removed before upload" color="bg-blue-50" />
          <LoopStep n="3" label="Train" detail="Dataset sent to Chameleon GPU bare metal; full PyTorch training, no virtualization" color="bg-red-50" />
          <LoopStep n="4" label="Deploy" detail="Trained weights returned to Raspberry Pi; car runs autonomously on next session" color="bg-emerald-50" />
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Why Chameleon Was Essential</p>
          <ul className="space-y-1">
            <Bullet>Bare-metal GPU — full memory bandwidth, no hypervisor overhead</Bullet>
            <Bullet>Predictable reservation windows vs. spot-instance interruptions on AWS/GCP during live sessions</Bullet>
            <Bullet>JupyterHub + container support matched the educational workflow exactly</Bullet>
          </ul>
        </div>
      </SlideShell>
    ),
  },

  // ── PHASE 2: COACHABLE ROBOTS ──
  {
    label: "Phase 2: Coachable Robots",
    content: (
      <SlideShell tag="Phase 2 · Current" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Phase 2: Coachable Robots
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <p className="text-sm text-gray-600 mb-4">Students <strong>coach</strong> a robot arm by demonstrating tasks with an Xbox controller. No programming required to collect training data.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Hardware</p>
            <p className="text-sm font-bold text-gray-800">SO-ARM101 + Raspberry Pi 5</p>
            <p className="text-xs text-gray-600 mt-1">6-DOF, Feetech STS3215 servos. Xbox controller teleop via leader arm. 2× USB cameras.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Training</p>
            <p className="text-sm font-bold text-gray-800">MI100 on Chameleon</p>
            <p className="text-xs text-gray-600 mt-1">AMD Instinct MI100, 32 GB HBM2, ROCm 6.3 + PyTorch 2.7. ACT policy (gfx908 — no Flash Attention 2).</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Data Hub</p>
            <p className="text-sm font-bold text-gray-800">HuggingFace Hub</p>
            <p className="text-xs text-gray-600 mt-1">Episodes pushed as LeRobot HDF5 datasets. Trained checkpoints returned same path. Pi pulls policy for autonomous execution.</p>
          </div>
        </div>
        <div className="bg-gray-900 text-green-400 rounded-xl px-5 py-3 font-mono text-xs">
          Pi → HF Hub (dataset) → MI100 trains → HF Hub (checkpoint) → Pi runs policy
        </div>
      </SlideShell>
    ),
  },

  // ── CURRENT STATUS ──
  {
    label: "Current Status",
    content: (
      <SlideShell tag="Where We Are Now" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Current Status
        </h1>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-5" />
        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl px-4 py-3">
            <span className="text-emerald-600 font-black text-lg">✓</span>
            <div>
              <p className="text-sm font-bold text-gray-800">Arms installed on CHI@Edge and operating as expected</p>
              <p className="text-xs text-gray-500">Calibration and fleet management working. CHI-261589 / soarm101-1 device enrolled.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-xl px-4 py-3">
            <span className="text-emerald-600 font-black text-lg">✓</span>
            <div>
              <p className="text-sm font-bold text-gray-800">Coachable CLI built — preview, calibrate, collect, train, fetch, run</p>
              <p className="text-xs text-gray-500">Full pipeline from demonstration to autonomous policy execution operational.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 border-l-4 border-blue-400 rounded-xl px-4 py-3">
            <span className="text-blue-500 font-black text-lg">→</span>
            <div>
              <p className="text-sm font-bold text-gray-800">Now: data collection, training loop, and benchmarking</p>
              <p className="text-xs text-gray-500">Collecting first real episodes. Latency benchmarks (Pi vs. MI100 vs. edge inference) in progress — will be published.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 border-l-4 border-blue-400 rounded-xl px-4 py-3">
            <span className="text-blue-500 font-black text-lg">→</span>
            <div>
              <p className="text-sm font-bold text-gray-800">Scaling to multiple arms for class attendees + sim-to-real transfer</p>
              <p className="text-xs text-gray-500">Moving beyond single-station calibration toward multi-arm cohort sessions and simulation-to-physical transfer.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2">
          <p className="text-xs text-amber-800">Media available: video of arms operating, setup photos, 3D printing timelapse — to be added to slides.</p>
        </div>
      </SlideShell>
    ),
  },

  // ── THE KEY SHIFT ──
  {
    label: "↳ Cloud Inference",
    content: (
      <SlideShell tag="Phase 2 · Key Shift" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          The Key Infrastructure Shift
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-gray-100 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Phase 1 — Training Only</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Chameleon used <strong>only for training</strong></li>
              <li>Inference ran entirely on Raspberry Pi</li>
              <li>MobileNet-class models fit on edge hardware</li>
              <li>Simple steering output — fast response OK on-device</li>
            </ul>
          </div>
          <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-3">Phase 2 — Training + Inference</p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><strong>MI100 hosts inference</strong> for spatial AI and manipulation policies</li>
              <li>Pi sends sensor data → receives action predictions over network</li>
              <li>Edge stays lightweight; cloud handles heavy spatial + ACT policy execution</li>
              <li>Manipulation tolerates more latency than fast RC cars — pipeline designed around this</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">What Runs on Chameleon Inference</p>
          <div className="flex flex-wrap gap-2">
            <Tag color="bg-purple-100 text-purple-700">Open-vocabulary detection</Tag>
            <Tag color="bg-purple-100 text-purple-700">Depth estimation</Tag>
            <Tag color="bg-purple-100 text-purple-700">ACT policy execution</Tag>
            <Tag color="bg-purple-100 text-purple-700">LLM agentic control</Tag>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── LESSONS FROM CHI@EDGE ──
  {
    label: "CHI@Edge Lessons",
    content: (
      <SlideShell tag="Lessons Learned" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Lessons from CHI@Edge
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <p className="text-xs text-gray-500 mb-3 italic">Running notes from building the real pipeline — not a polished doc. github.com/ricklon/coachable-robots/LESSONS_LEARNED.md</p>
        <div className="space-y-2">
          <LessonRow status="fixed"
            problem="USB cameras on Pi 5 needed helpdesk tickets — pi_camera and pi_libcamera are CSI-only"
            fix="video0/video1/video2/video3 profiles added by helpdesk. Use device_profiles=['ttyacm0','ttyacm1','video0','video2']" />
          <LessonRow status="fixed"
            problem="chi.set('project_name') breaks app credentials — keystoneauth demands project_domain_id"
            fix="Omit chi.set('project_name') entirely with application credentials. Network must be 'caliconet', not 'containernet1'." />
          <LessonRow status="fixed"
            problem="Containers stuck Unschedulable after hardware maintenance — stale coordinator lock"
            fix="balena restart coordinator_{uuid} breaks the lock. Also restart k3s and chi-edge device sync." />
          <LessonRow status="fixed"
            problem="BalenaOS uses 'balena' not 'docker'; --rm flag not supported; -v /dev:/dev breaks interactive containers"
            fix="Use --privileged with explicit --device flags. Containers persist until manually removed with balena rm." />
          <LessonRow status="fixed"
            problem="No mesh VPN between Pi on lab network and Chameleon training node"
            fix="Tailscale: Pi gets BalenaOS block, Chameleon node installs via curl. All devices join 100.x.x.x mesh — no floating IPs or tunnels." />
          <LessonRow status="warn"
            problem="Reservation model friction: per-session re-provisioning breaks class flow; GPU needed across sim + training + inference"
            fix="Need persistent pre-provisioned environments. Reconnect cell pattern added to notebooks as workaround." />
        </div>
      </SlideShell>
    ),
  },

  // ── LESSONS: MI100 SPECIFICS ──
  {
    label: "↳ MI100 Notes",
    content: (
      <SlideShell tag="Training · MI100" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Training on the AMD MI100
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">Hardware Profile</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>AMD Instinct MI100</strong> — gfx908 architecture</li>
              <li>32 GB HBM2 · ROCm 6.3 · PyTorch 2.7</li>
              <li>Ansible-provisioned — setup playbook in repo</li>
              <li>Use <code className="bg-gray-100 px-1 rounded text-xs">rocm-smi</code>, not <code className="bg-gray-100 px-1 rounded text-xs">nvidia-smi</code></li>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-3">gfx908 Constraints</p>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>No Flash Attention 2 (requires gfx90a+)</li>
              <li>No hipBLASLt</li>
              <li><strong>Use ACT as default policy</strong> — not Diffusion Policy or Pi0 without tuning</li>
              <li>Pi0 3B works: <code className="bg-amber-100 px-1 rounded text-xs">--gradient_checkpointing=true --dtype=bfloat16 --batch_size=8</code></li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">lerobot v0.5.0 Breaking Changes (Discovered in Production)</p>
          <div className="space-y-1 text-xs text-gray-700">
            <p>· <code className="bg-gray-100 px-1 rounded">LEROBOT_HOME</code> renamed to <code className="bg-gray-100 px-1 rounded">HF_LEROBOT_HOME</code></p>
            <p>· <code className="bg-gray-100 px-1 rounded">aloha</code> robot type removed — sim mode no longer available via CLI; use pipeline dry-run with <code className="bg-gray-100 px-1 rounded">lerobot/pusht</code></p>
            <p>· <code className="bg-gray-100 px-1 rounded">python -m lerobot.scripts.control_robot</code> replaced by <code className="bg-gray-100 px-1 rounded">lerobot-calibrate</code> CLI entry point</p>
            <p>· python-chi 0.15.x incompatible with 1.0+ class-based API — upgrade breaks chi-edge 0.2.4 pin</p>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── COACHABLE CLI ──
  {
    label: "Coachable CLI",
    content: (
      <SlideShell tag="Tooling" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          The Coachable CLI
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <p className="text-sm text-gray-600 mb-4">A single CLI that wraps the full pipeline — designed so students focus on coaching, not DevOps.</p>
        <div className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-xs mb-5 leading-relaxed">
          <div className="text-gray-500 mb-2"># The full session flow from one command set:</div>
          <div>coachable <span className="text-blue-400">preview</span>  --robot alpha              <span className="text-gray-600"># live camera feed via Gradio</span></div>
          <div>coachable <span className="text-blue-400">calibrate</span> --robot alpha              <span className="text-gray-600"># servo calibration (once per arm)</span></div>
          <div>coachable <span className="text-blue-400">collect</span>   --robot alpha --dataset pick_block --episodes 20</div>
          <div className="text-gray-500 mt-1"># → pushes HDF5 dataset to HuggingFace Hub automatically</div>
          <div className="mt-2 text-gray-500"># (training runs on MI100 via CoachableRobots_v3.ipynb)</div>
          <div className="mt-2">coachable <span className="text-blue-400">fetch</span>     --repo ricklon/act-pick_block</div>
          <div>coachable <span className="text-blue-400">run</span>       --robot alpha              <span className="text-gray-600"># autonomous execution</span></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <p className="text-xs font-black text-gray-600 uppercase mb-1">Data Curator</p>
            <p className="text-xs text-gray-600">Extended from FooCars image+steering format → LeRobot HDF5 (image sequences + joint states + timestamps)</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <p className="text-xs font-black text-gray-600 uppercase mb-1">Training Dashboard</p>
            <p className="text-xs text-gray-600">Streamlit/Gradio UI adapted for LeRobot jobs — loss curves, checkpoints, weight download to edge</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
            <p className="text-xs font-black text-gray-600 uppercase mb-1">Jupyter Orchestration</p>
            <p className="text-xs text-gray-600">CoachableRobots_v3.ipynb — provisions MI100 node via python-chi, runs Ansible, launches training</p>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── AGENTS ──
  {
    label: "AI Agents",
    content: (
      <SlideShell tag="Emerging Capability" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          AI Agents in the Loop
        </h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Control Node — Working Now</p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>LLM agents drive <strong>CLI tools</strong> for automated infrastructure interaction</li>
              <li>Agents handle Chameleon provisioning, container management, training job configuration</li>
              <li>Natural language → chi API calls → reproducible setup</li>
              <li>Reduces manual notebook steps; enables less-technical users to drive pipeline</li>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Edge Device — Open Question</p>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>Can the Raspberry Pi 5 run a local agent?</li>
              <li>Small models (Phi-3 mini, Llama 3.2 1B, Gemma 3 1B) now run on Pi-class hardware</li>
              <li>Use case: on-device task planning, natural language coaching instructions, local sensor reasoning</li>
              <li><strong>Resource constraint:</strong> Pi 5 doing teleop + recording + inference — headroom for LLM TBD</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">The Bigger Vision: AI All the Way Down</p>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold text-xs">LLM agent</span>
            <span className="text-gray-400">→ configures →</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold text-xs">Chameleon infra</span>
            <span className="text-gray-400">→ trains →</span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold text-xs">manipulation policy</span>
            <span className="text-gray-400">→ runs on →</span>
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold text-xs">Pi agent</span>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 6-SESSION CURRICULUM ──
  {
    label: "Curriculum",
    content: (
      <SlideShell tag="Phase 2 · Curriculum" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          6-Session Program
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <p className="text-sm text-gray-600 mb-4">Prototyped live at FUBAR Labs AI Study Group and Robot Build Night. CMSCE teacher training begins May 5.</p>
        <div className="space-y-2">
          {[
            { n: "01", label: "Simulation Foundations", detail: "MuJoCo environment, arm kinematics, simulation-first reasoning before touching hardware", color: "bg-blue-50 border-blue-300" },
            { n: "02", label: "Spatial AI", detail: "Open-vocabulary detection + depth estimation running on Chameleon inference; Pi calls over network", color: "bg-blue-50 border-blue-300" },
            { n: "03", label: "Agentic Control", detail: "LLM-driven task planning, CLI agent tools, closed-loop control — now a working part of the stack", color: "bg-purple-50 border-purple-300" },
            { n: "04", label: "Policy Training", detail: "LeRobot episode collection (Xbox controller coaching), HDF5 curation, ACT training on MI100", color: "bg-red-50 border-red-300" },
            { n: "05", label: "Sim-to-Real Transfer", detail: "Domain randomization in Isaac Sim, gap analysis, weight transfer to physical arm — scaling to multi-arm", color: "bg-amber-50 border-amber-300" },
            { n: "06", label: "Full Pipeline Demo", detail: "End-to-end: simulation → coaching → MI100 training → Chameleon inference → physical arm autonomous task", color: "bg-emerald-50 border-emerald-300" },
          ].map(s => (
            <div key={s.n} className={`flex items-start gap-4 rounded-xl border p-3 ${s.color}`}>
              <span className="text-xs font-black text-gray-400 mt-0.5 w-5 flex-shrink-0">{s.n}</span>
              <div>
                <p className="text-sm font-bold text-gray-800">{s.label}</p>
                <p className="text-xs text-gray-600">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </SlideShell>
    ),
  },

  // ── CHALLENGES ──
  {
    label: "Challenges",
    content: (
      <SlideShell tag="Challenges" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Challenges &amp; Insights
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <CardGrid cols={2}>
          <SectionCard title="Latency: Pi → Cloud Inference" icon="⏱️">
            <p>Near-real-time control needs: <strong>batched sensor data, minimal round-trips, cached outputs</strong> on edge. Manipulation tolerates more latency than RC cars — pipeline designed around this window. Benchmark numbers coming.</p>
          </SectionCard>
          <SectionCard title="Reservation Friction" icon="📅" warn={true}>
            <p>GPU needed <strong>across simulation, training, AND inference</strong> now — not just at training time. Students need persistent pre-provisioned environments. Per-session re-provisioning breaks class flow.</p>
          </SectionCard>
          <SectionCard title="Isaac Sim Node Availability" icon="🎮" warn={true}>
            <p>RTX-class GPU inconsistently available on older Chameleon generations. <strong>MuJoCo fallback built into curriculum.</strong> Commercial cloud spot instance interruptions during live sessions made them unsuitable.</p>
          </SectionCard>
          <SectionCard title="Sim-to-Real Gap" icon="🤖" accent={true}>
            <p>Manipulation exposes gaps invisible in navigation: depth cameras, point clouds, sensor-to-model latency. <strong>Domain randomization in Isaac Sim is essential</strong> — larger gap than RC cars. Scaling to multi-arm makes this harder.</p>
          </SectionCard>
        </CardGrid>
      </SlideShell>
    ),
  },

  // ── OPEN SOURCE + NEXT STEPS ──
  {
    label: "Open Source",
    content: (
      <SlideShell tag="Community" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Open Source &amp; What's Next
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-xs leading-relaxed">
            <div className="text-gray-500 mb-1"># Phase 1 community repo</div>
            <div>github.com/fubarlabs/foocars</div>
            <div className="text-gray-400 text-xs mt-1">1,237 commits · 15 contributors</div>
            <div className="text-gray-500 mt-3 mb-1"># Phase 2 (Coachable Robots)</div>
            <div>github.com/ricklon/coachable-robots</div>
            <div className="text-gray-400 text-xs mt-1">CLI · notebooks · Ansible · benchmarks</div>
          </div>
          <div className="space-y-3">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-3">
              <p className="text-xs font-bold text-emerald-800">Benchmark data coming</p>
              <p className="text-xs text-gray-600">Inference latency across Pi / MI100 / edge tiers. Will be published in bench/results/ as episodes are collected.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-3">
              <p className="text-xs font-bold text-blue-800">CMSCE Teacher Training · May 5</p>
              <p className="text-xs text-gray-600">Next deployment — CS/math educator training using the 6-session curriculum as a framework.</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 rounded-xl p-3">
              <p className="text-xs font-bold text-purple-800">Multi-arm scaling</p>
              <p className="text-xs text-gray-600">Moving from single-station calibration to multiple arms for class cohorts + sim-to-real transfer at scale.</p>
            </div>
          </div>
        </div>
        <ul className="space-y-2">
          <Bullet>All curriculum, notebooks, Ansible playbooks, CLI, and benchmarks released open-source</Bullet>
          <Bullet>Reproducible: environment snapshots + versioned HF datasets for consistent cohort experiments</Bullet>
        </ul>
      </SlideShell>
    ),
  },

  // ── GAPS ──
  {
    label: "Still Needed",
    content: (
      <SlideShell tag="Open Questions" tagColor="bg-amber-600">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Still Needed for This Talk
        </h1>
        <div className="w-16 h-1 bg-amber-500 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Media to Add</p>
            <ul className="space-y-2">
              <GapBullet>Video of arms operating on CHI@Edge</GapBullet>
              <GapBullet>Setup photos (hardware at bench, Pi + arm wiring)</GapBullet>
              <GapBullet>3D printing timelapse of arm components</GapBullet>
              <GapBullet>Architecture diagram: Pi ↔ HF Hub ↔ MI100 ↔ Chameleon inference</GapBullet>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Numbers Still Pending</p>
            <ul className="space-y-2">
              <GapBullet>Actual inference latency benchmarks (Pi → MI100 round-trip ms)</GapBullet>
              <GapBullet>Training time per episode count on MI100 vs. estimated alternatives</GapBullet>
              <GapBullet>Session-level learning objectives for 6-session program</GapBullet>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">For the Chameleon Audience</p>
            <ul className="space-y-2">
              <GapBullet>Specific asks for Chameleon team — what infrastructure changes would help most?</GapBullet>
              <GapBullet>RTX node availability on current hardware generations?</GapBullet>
              <GapBullet>Persistent environment path for educational cohorts?</GapBullet>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Edge Agent Research</p>
            <ul className="space-y-2">
              <GapBullet>Which small models actually run on Pi 5 with acceptable latency while recording?</GapBullet>
              <GapBullet>What tasks make sense for on-device agent vs. cloud agent?</GapBullet>
              <GapBullet>Has anyone at Chameleon done similar edge LLM work?</GapBullet>
            </ul>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── Q&A ──
  {
    label: "Q&A",
    content: (
      <SlideShell tag="Questions" tagColor="bg-gray-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Chameleon User Meeting · April 2026 · CHI-261589</p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-2">
            Questions?
          </h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-4">
            Especially interested in: <strong>reservation model for education</strong>, RTX node availability,
            edge-to-cloud inference patterns, and whether anyone has run small LLMs on CHI@Edge Pi devices.
          </p>
          <ul className="space-y-2 mb-6">
            <Bullet icon="→">github.com/ricklon/coachable-robots — notebooks, CLI, Ansible, benchmarks</Bullet>
            <Bullet icon="→">github.com/fubarlabs/foocars — Phase 1 RC car curriculum (1,237 commits)</Bullet>
            <Bullet icon="→">Chameleon project: chameleoncloud.org/user/projects/1589/ (CHI-261589)</Bullet>
          </ul>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 w-full max-w-sm">
            <div className="bg-red-600 text-white text-sm font-black tracking-widest px-5 py-2 rounded inline-block mb-3">
              RUTGERS UNIVERSITY
            </div>
            <p className="text-sm text-gray-700 font-semibold">Rick Anderson</p>
            <p className="text-xs text-gray-500">Rutgers UOES / GRID · FUBAR Labs</p>
            <p className="text-blue-600 text-sm mt-2 font-semibold">rick.anderson@rutgers.edu</p>
          </div>
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
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
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
      </div>

      <div className="text-center text-xs text-gray-400 py-2">
        Use ← → arrow keys to navigate · WASD + Space to spotlight cards
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

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
      <span className="text-xs text-gray-400">Rutgers UOES · FUBAR Labs · CHI-261589</span>
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
              <p className="text-xs text-gray-500">Rutgers UOES · FUBAR Labs</p>
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
          <PhaseBar phase="01" label="Who We Are — Rutgers UOES + FUBAR Labs" color="border-gray-400">
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
            <p className="text-sm font-bold text-gray-800 mb-1">UOES</p>
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

  // ── PHASE 1: CHIARACERS ──
  {
    label: "Phase 1: ChiaRacers",
    content: (
      <SlideShell tag="Phase 1" tagColor="bg-blue-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">
          Phase 1: ChiaRacers
        </h1>
        <p className="text-sm font-semibold text-blue-700 mb-4">Traditional ML → edge devices → autonomous driving</p>
        <div className="w-16 h-1 bg-blue-600 rounded mb-5" />
        <CardGrid cols={2}>
          <SectionCard title="The Approach" icon="🧠">
            <p><strong>Supervised CNN:</strong> camera frame in, steering angle out. Labeled by human demonstration drives. Trained on Chameleon GPU, weights returned to the Pi for on-device inference.</p>
          </SectionCard>
          <SectionCard title="Edge Hardware Stack" icon="🚗">
            <p>Raspberry Pi (camera + inference) + <strong>Teensy microcontroller</strong> on custom carrier PCB (reads RC receiver, sends autonomous drive commands). Starting artifact: <strong>Request_Chia_Racer.ipynb</strong>.</p>
          </SectionCard>
          <SectionCard title="CHI@Edge Role" icon="☁️">
            <p>Fleet management across vehicles. <strong>Edge-to-bare-metal training loop:</strong> data collected on-car → trained on Chameleon GPU → weights returned to edge Pi. JupyterHub for TF, PyTorch, ONNX, GPIO, serial.</p>
          </SectionCard>
          <SectionCard title="Community Reach" icon="🏫" accent={true}>
            <p>CMSCE: middle school → college → adult professional. Bergen Tech HS (2021, 2023) · CHI@Edge Internships (2021, 2022) · Maker Faire nationwide · <strong>github.com/rianders/chiaracers</strong> · github.com/fubarlabs/foocars (1,237 commits · 15 contributors)</p>
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
        <p className="text-sm text-gray-600 mb-4">Students <strong>coach</strong> a robot by demonstrating tasks — no programming required to collect training data. The arm is the first embodiment; the platform is designed for many more.</p>
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

  // ── BENCHMARKING ──
  {
    label: "Benchmarking",
    content: (
      <SlideShell tag="Benchmarking" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Benchmarking Every Stage</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-3" />
        <p className="text-sm text-gray-600 mb-4">
          Talkbot established a rigorous benchmarking methodology for edge AI systems.
          Applying the same approach here: <strong>every end-to-end stage measured, compared across configurations, and published</strong> in <code className="bg-gray-100 px-1 rounded text-xs">bench/results/</code>.
        </p>

        {/* Pipeline stages */}
        <div className="space-y-2 mb-4">
          {[
            {
              stage: "00 · Talkbot",
              what: "Speech pipeline: STT latency · LLM tok/s · TTS latency · tool call success rate",
              compare: "Control node vs. CHI@Edge arm vs. inference node; small model vs. large model tool reliability",
              status: "active",
            },
            {
              stage: "01 · Collect",
              what: "Camera frame rate · joint state capture frequency · episode recording latency",
              compare: "LeRobot alone vs. LeRobot + Talkbot concurrent (no camera/serial needed for Talkbot bench)",
              status: "active",
            },
            {
              stage: "02 · Transfer",
              what: "Episode push time: Pi → HF Hub vs. Pi → Chameleon Object Store (future)",
              compare: "Dataset size vs. upload time; Tailscale mesh now live — direct path benchmarkable",
              status: "pending",
            },
            {
              stage: "03 · Train",
              what: "Training time per N episodes on MI100 · loss convergence · checkpoint size",
              compare: "ACT vs. Diffusion Policy vs. Pi0 3B on gfx908; batch size sensitivity",
              status: "pending",
            },
            {
              stage: "04 · Inference",
              what: "Round-trip latency: Pi → inference endpoint → action output",
              compare: "On-device (Pi 5) vs. cloud-delegated (CHI@Edge / MI100 / RTX) · HTTP vs. gRPC",
              status: "active",
            },
            {
              stage: "05 · Execute",
              what: "Policy execution: action frequency · task success rate · recovery behavior",
              compare: "Across model architectures; single arm vs. multi-arm fleet",
              status: "pending",
            },
          ].map(({ stage, what, compare, status }) => (
            <div key={stage} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <div className="flex-shrink-0 w-20">
                <p className="text-xs font-black text-gray-500">{stage}</p>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${status === "active" ? "bg-emerald-100 text-emerald-700" : "bg-gray-200 text-gray-500"}`}>
                  {status === "active" ? "active" : "pending"}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-800">{what}</p>
                <p className="text-xs text-gray-500 mt-0.5">Compare: {compare}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs font-black text-blue-700 mb-1">Talkbot Precedent</p>
            <p className="text-xs text-gray-700">qwen3.5-0.8b achieves 21 tok/s on CPU with 90% benchmark success — a concrete, reproducible number. Same standard applies here: every claim backed by a result in <code className="bg-gray-100 px-1 rounded">bench/results/</code>.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-xs font-black text-amber-700 mb-1">Key Open Number</p>
            <p className="text-xs text-gray-700">Pi → Chameleon inference round-trip latency at real manipulation frequency (~10 Hz). This determines whether cloud-delegated inference is viable for real-time control — or whether on-device is required.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 md:col-span-2">
            <p className="text-xs font-black text-red-700 mb-1">Model Scaling Finding</p>
            <p className="text-xs text-gray-700">Large models perform well. Small models don't reliably improve tool use or instruction following — their <strong>small context windows create back-pressure</strong> on the entire pipeline, causing other components to degrade. Benchmarking across model sizes to quantify this effect.</p>
          </div>
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
            fix="Desired fix: Tailscale (BalenaOS block on Pi, curl install on Chameleon node). Permission not yet requested — and performance overhead TBD. Asking Chameleon: is there a native networking solution?" />
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
      <SlideShell tag="Training · Compute" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 leading-tight">
          Training &amp; Inference Compute
        </h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Now · MI100 Bare Metal</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li><strong>AMD Instinct MI100</strong> — gfx908</li>
              <li>32 GB HBM2 · ROCm 6.3 · PyTorch 2.7</li>
              <li>ACT policy works well</li>
              <li className="text-amber-700">No Flash Attn 2 · no hipBLASLt</li>
              <li className="text-amber-700">Diffusion Policy / Pi0 need tuning</li>
            </ul>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-2">Future · H100 Bare Metal</p>
            <ul className="space-y-1.5 text-sm text-gray-800">
              <li><strong>NVIDIA H100</strong> on Chameleon</li>
              <li>Full CUDA · Flash Attention 2</li>
              <li>All policy architectures available</li>
              <li>Diffusion Policy · Pi0 · larger models</li>
              <li className="text-emerald-700 font-semibold">Removes gfx908 constraints entirely</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Future · KVM@TACC H100</p>
            <ul className="space-y-1.5 text-sm text-gray-800">
              <li><strong>H100 via KVM@TACC</strong></li>
              <li>VM-based (not bare metal)</li>
              <li>Suited for <strong>inference at scale</strong></li>
              <li>Many concurrent robot sessions</li>
              <li className="text-blue-700 font-semibold">Talkbot + policy inference for classroom fleets</li>
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
          <div className="bg-purple-50 border-l-4 border-purple-400 rounded-xl p-5">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Edge Agent — Talkbot + Robot Tools</p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>Talkbot is <strong>LLM + tools</strong> — already working for voice and utility tasks</li>
              <li>Adapt the tool set to the robot: arm position, gripper open/close, camera query, policy trigger</li>
              <li>Becomes the <strong>on-device agent that controls the arm</strong> via natural language or agentic loop</li>
              <li>Falls back to Chameleon-hosted LLM when Pi compute is saturated</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">AI All the Way Down</p>
          <div className="flex items-center gap-2 flex-wrap text-sm text-gray-700">
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-bold text-xs">Cloud agent</span>
            <span className="text-gray-400 text-xs">→ provisions →</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-bold text-xs">Chameleon infra</span>
            <span className="text-gray-400 text-xs">→ trains →</span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded font-bold text-xs">policy</span>
            <span className="text-gray-400 text-xs">→ deployed to →</span>
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold text-xs">Talkbot edge agent</span>
            <span className="text-gray-400 text-xs">→ controls →</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-bold text-xs">robot body</span>
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

  // ── ARCHITECTURE: CURRENT ──
  {
    label: "Architecture: Current",
    content: (
      <SlideShell tag="Architecture · Now" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Architecture: Current</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />

        {/* Three-zone layout */}
        <div className="flex items-stretch gap-0">

          {/* ZONE 1: Edge */}
          <div className="flex flex-col w-48 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2 text-center">Edge</div>
            <div className="flex-1 border-2 border-blue-400 rounded-xl p-3 bg-blue-50 flex flex-col gap-2">
              <div className="text-xs font-black text-blue-800 text-center mb-1">Raspberry Pi 5</div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">SO-ARM101</span><br/>leader + follower arms
              </div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">2× USB cameras</span><br/>C920 + gripper cam
              </div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Coachable CLI</span><br/>preview · collect · run
              </div>
              {/* Swappable container row */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg px-2 py-1.5 text-xs">
                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">Multi-stage Docker</span>
                <div className="mt-1 flex flex-col gap-1">
                  <div className="bg-purple-900 border border-purple-600 rounded px-1.5 py-1 text-purple-200">
                    <span className="font-bold">Talkbot</span><br/>qwen3.5-0.8b · voice + tools
                  </div>
                  <div className="text-gray-500 text-center text-xs italic">swap or combine ↕</div>
                  <div className="bg-blue-900 border border-blue-600 rounded px-1.5 py-1 text-blue-200">
                    <span className="font-bold">LeRobot</span><br/>collect · train · run
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-400 rounded-lg px-2 py-1.5 text-xs text-emerald-900">
                <span className="font-bold">Tailscale ✓</span><br/>6 nodes live<br/>training/inference TBD
              </div>
            </div>
          </div>

          {/* ARROWS + HF HUB middle column */}
          <div className="flex flex-col items-center justify-center flex-1 px-2 gap-3">
            {/* Top arrow: dataset push */}
            <div className="flex flex-col items-center w-full">
              <div className="text-xs text-gray-500 italic mb-0.5">episodes (HDF5)</div>
              <div className="flex items-center w-full gap-1">
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
                <span className="text-gray-500 font-bold text-sm">→</span>
                <div className="border-2 border-orange-400 rounded-xl bg-orange-50 px-3 py-2 text-center mx-1">
                  <div className="text-xs font-black text-orange-700">HF Hub</div>
                  <div className="text-xs text-gray-600">datasets</div>
                  <div className="text-xs text-gray-600">checkpoints</div>
                </div>
                <span className="text-gray-500 font-bold text-sm">→</span>
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
              </div>
              <div className="text-xs text-gray-500 italic mt-0.5">checkpoint pull</div>
            </div>

            {/* Bottom arrow: inference */}
            <div className="flex flex-col items-center w-full">
              <div className="text-xs text-gray-500 italic mb-0.5">sensor data</div>
              <div className="flex items-center w-full">
                <div className="flex-1 border-t-2 border-dashed border-red-300" />
                <span className="text-red-400 font-bold text-sm">→</span>
                <span className="text-xs text-red-500 italic px-1">inference req</span>
                <span className="text-red-400 font-bold text-sm">→</span>
                <div className="flex-1 border-t-2 border-dashed border-red-300" />
              </div>
              <div className="flex items-center w-full flex-row-reverse">
                <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
                <span className="text-emerald-500 font-bold text-sm">←</span>
                <span className="text-xs text-emerald-600 italic px-1">action output</span>
                <span className="text-emerald-500 font-bold text-sm">←</span>
                <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
              </div>
            </div>

            {/* CHI@Edge management */}
            <div className="flex items-center w-full gap-1 mt-1">
              <div className="flex-1 border-t-2 border-dashed border-gray-300" />
              <span className="text-gray-400 font-bold text-sm">↔</span>
              <span className="text-xs text-gray-400 italic px-1">device mgmt</span>
              <span className="text-gray-400 font-bold text-sm">↔</span>
              <div className="flex-1 border-t-2 border-dashed border-gray-300" />
            </div>
          </div>

          {/* ZONE 2: Chameleon Cloud */}
          <div className="flex flex-col w-52 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-red-700 mb-2 text-center">Chameleon Cloud</div>
            <div className="flex-1 border-2 border-red-400 rounded-xl p-3 bg-red-50 flex flex-col gap-2">
              <div className="text-xs font-black text-red-800 text-center mb-1">CHI-261589</div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">MI100 bare metal</span><br/>ROCm 6.3 · PyTorch 2.7<br/>ACT policy training
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Inference endpoint</span><br/>spatial AI · depth est.<br/>policy execution
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">CHI@Edge</span><br/>device enroll<br/>container mgmt
              </div>
            </div>
          </div>

        </div>

        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">HF Hub = external dependency for data</span>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Tailscale live — 6 nodes (arms + control + soarm101 + Mac); training/inference not yet enrolled</span>
        </div>
      </SlideShell>
    ),
  },

  // ── ARCHITECTURE: FUTURE ──
  {
    label: "Architecture: Future",
    content: (
      <SlideShell tag="Architecture · Future" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Architecture: Future State</h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-4" />

        <div className="flex items-stretch gap-0">

          {/* ZONE 1: Edge (future) */}
          <div className="flex flex-col w-48 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2 text-center">Edge</div>
            <div className="flex-1 border-2 border-blue-400 rounded-xl p-3 bg-blue-50 flex flex-col gap-2">
              <div className="text-xs font-black text-blue-800 text-center mb-1">Raspberry Pi 5</div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">SO-ARM101</span><br/>multi-arm fleet
              </div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Coachable CLI</span>
              </div>
              <div className="bg-purple-100 border border-purple-300 rounded-lg px-2 py-1.5 text-xs text-purple-900">
                <span className="font-bold">Talkbot</span><br/>
                <span className="text-purple-700">qwen3.5-0.8b<br/>voice + tools</span><br/>
                <span className="italic text-purple-500">→ Chameleon fallback</span>
              </div>
            </div>
          </div>

          {/* Middle: network layer */}
          <div className="flex flex-col items-center justify-center flex-1 px-2 gap-3">
            {/* Native network question */}
            <div className="border-2 border-dashed border-purple-400 rounded-xl bg-purple-50 px-3 py-2 text-center w-full">
              <div className="text-xs font-black text-purple-700 mb-1">Private Network</div>
              <div className="text-xs text-emerald-700 font-semibold">Tailscale ✓ — 6 nodes live</div>
              <div className="text-xs text-gray-500 italic">arm-01/1/2, soarm101,</div>
              <div className="text-xs text-gray-500 italic">control + Mac enrolled</div>
              <div className="text-xs text-purple-700 font-semibold mt-2">Next: training + inference nodes</div>
              <div className="text-xs text-gray-400 italic">+ native Chameleon mesh?</div>
            </div>

            <div className="flex flex-col items-center gap-1 w-full text-xs text-gray-500">
              <div className="flex items-center gap-1 w-full">
                <div className="flex-1 border-t-2 border-dashed border-gray-300"/>
                <span className="font-bold text-gray-400">↔</span>
                <div className="flex-1 border-t-2 border-dashed border-gray-300"/>
              </div>
              <span className="italic">dataset · checkpoint · inference</span>
              <span className="italic text-purple-500">all within Chameleon network</span>
            </div>
          </div>

          {/* ZONE 2: Chameleon (future) */}
          <div className="flex flex-col w-52 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-red-700 mb-2 text-center">Chameleon Cloud</div>
            <div className="flex-1 border-2 border-red-400 rounded-xl p-3 bg-red-50 flex flex-col gap-2">
              <div className="text-xs font-black text-red-800 text-center mb-1">CHI-261589</div>
              <div className="bg-emerald-50 border border-emerald-400 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold text-emerald-800">Chameleon Object Store</span><br/>
                episodes + checkpoints<br/>
                <span className="text-emerald-700 font-semibold">replaces HF Hub</span>
              </div>
              <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold text-emerald-800">H100 bare metal</span><br/>all policies · Flash Attn 2
              </div>
              <div className="bg-blue-50 border border-blue-300 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold text-blue-800">KVM@TACC H100</span><br/>
                inference at scale<br/>
                <span className="text-blue-600">many concurrent robots</span>
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">CHI@Edge + Isaac Sim</span><br/>sim-to-real, domain rand.
              </div>
            </div>
          </div>

        </div>

        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Object Store keeps training data inside Chameleon</span>
          <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full">RTX unlocks Flash Attn 2 + Diffusion Policy + WebRTC sim streaming</span>
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">? native Chameleon VPN preferred over Tailscale (permission + perf concerns)</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">gRPC replaces HTTP for real-time Pi ↔ inference loop</span>
          <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">variant: MCU direct → Chameleon inference (no Pi)</span>
        </div>
      </SlideShell>
    ),
  },

  // ── WEBRTC + gRPC ──
  {
    label: "WebRTC + gRPC",
    content: (
      <SlideShell tag="Protocols" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Protocol Choices for the Pipeline</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* WebRTC */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📡</span>
              <p className="text-sm font-black uppercase tracking-wide text-blue-700">WebRTC — Simulation Access</p>
              <span className="text-xs bg-amber-200 text-amber-800 font-bold px-2 py-0.5 rounded-full ml-auto">Testing</span>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Problem:</strong> Students need to see Isaac Sim / MuJoCo running on a Chameleon GPU node. X11 forwarding and VNC are fragile and slow.</p>
              <p><strong>WebRTC solution:</strong> GPU node streams rendered frames directly to a browser tab — no software install, no latency from double-encoding.</p>
            </div>
            <div className="mt-3 space-y-1 text-xs text-gray-600">
              <p>· Isaac Sim: Omniverse WebRTC streaming built in</p>
              <p>· MuJoCo: needs a streaming wrapper (evaluating options)</p>
              <p>· Students open a URL — simulation is live in the browser</p>
            </div>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              <p className="text-xs text-amber-800 italic">Still testing on Chameleon GPU nodes — need to confirm WebRTC port exposure through the reservation network.</p>
            </div>
          </div>

          {/* gRPC */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">⚡</span>
              <p className="text-sm font-black uppercase tracking-wide text-purple-700">gRPC — Real-Time Control</p>
              <span className="text-xs bg-blue-200 text-blue-800 font-bold px-2 py-0.5 rounded-full ml-auto">Evaluating</span>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Where it helps:</strong> The Pi → Chameleon inference loop. Current HTTP polling adds unnecessary overhead for a real-time control cycle.</p>
            </div>
            <div className="mt-2 space-y-1 text-xs text-gray-600">
              <p>· <strong>Bidirectional streaming:</strong> Pi streams joint states + frames; Chameleon streams action predictions back continuously</p>
              <p>· <strong>Typed protobufs:</strong> enforced schema for sensor data and action outputs across Pi ↔ cloud boundary</p>
              <p>· <strong>Backpressure:</strong> cloud signals when it's ready, Pi doesn't flood the pipe</p>
              <p>· <strong>Multi-arm fleet:</strong> one gRPC channel per arm, multiplexed on same connection</p>
            </div>
            <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
              <p className="text-xs text-gray-600"><strong>REST stays for:</strong> dataset push/pull, checkpoint download, job management — no need to change these.</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── HETEROGENEOUS EMBODIMENT ──
  {
    label: "Heterogeneous Embodiment",
    content: (
      <SlideShell tag="Platform Vision" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Coachable Robots: A Platform, Not a Robot</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <p className="text-sm text-gray-600 mb-5">
          LeRobot provides the universal coaching interface. Chameleon is the shared backbone.
          <strong> The body is interchangeable.</strong> RC cars, arms, voice agents, microcontrollers —
          all instances of the same pipeline. The distributed components of embodiment.
        </p>

        {/* Central backbone */}
        <div className="flex flex-col items-center mb-4">
          <div className="bg-red-600 text-white rounded-xl px-6 py-3 text-center w-full max-w-lg">
            <p className="text-xs font-black uppercase tracking-widest text-red-200 mb-1">Chameleon · CHI-261589</p>
            <p className="text-sm font-bold">Object Store · MI100 Training · Inference · CHI@Edge</p>
            <p className="text-xs text-red-200 mt-1">LeRobot HDF5 episodes · ACT / Diffusion Policy · HuggingFace Hub</p>
          </div>
          <div className="flex gap-8 mt-1 text-gray-300 text-xl">
            <span>↑</span><span>↑</span><span>↑</span><span>↑</span><span>↑</span>
          </div>
        </div>

        {/* Robot types */}
        <div className="grid grid-cols-5 gap-2 text-center">
          <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-3">
            <p className="text-2xl mb-1">🚗</p>
            <p className="text-xs font-black text-blue-700">FooCars v2</p>
            <p className="text-xs text-gray-600 mt-1">RC cars<br/>combat-durable<br/>LeRobot-compatible</p>
            <span className="text-xs bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">updating</span>
          </div>
          <div className="bg-red-50 border-2 border-red-500 rounded-xl p-3">
            <p className="text-2xl mb-1">🦾</p>
            <p className="text-xs font-black text-red-700">SO-ARM101</p>
            <p className="text-xs text-gray-600 mt-1">6-DOF arm<br/>Xbox coaching<br/>ACT policy</p>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">live</span>
          </div>
          <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-3">
            <p className="text-2xl mb-1">🤖</p>
            <p className="text-xs font-black text-purple-700">Talkbot</p>
            <p className="text-xs text-gray-600 mt-1">voice agent<br/>Pi 5<br/>Chameleon LLM</p>
            <span className="text-xs bg-amber-100 text-amber-700 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">prototyping</span>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400 rounded-xl p-3">
            <p className="text-2xl mb-1">⚡</p>
            <p className="text-xs font-black text-gray-600">Thin Edge</p>
            <p className="text-xs text-gray-600 mt-1">ESP32 / RP2040<br/>no Linux<br/>MCU → inference</p>
            <span className="text-xs bg-amber-100 text-amber-700 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">exploring</span>
          </div>
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-3">
            <p className="text-2xl mb-1">＋</p>
            <p className="text-xs font-black text-gray-400">Next?</p>
            <p className="text-xs text-gray-400 mt-1">humanoid<br/>mobile base<br/>any body</p>
            <span className="text-xs bg-gray-100 text-gray-500 font-bold px-1.5 py-0.5 rounded-full mt-1 inline-block">open</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 italic text-center mt-4">
          Same episode format · same training pipeline · same Chameleon backbone · different bodies
        </p>
      </SlideShell>
    ),
  },

  // ── FOOCARS V2 + COMBAT ROBOTICS ──
  {
    label: "FooCars v2",
    content: (
      <SlideShell tag="FooCars v2" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">FooCars v2: Joining the Platform</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Durability: Combat Robotics Input</p>
            <p className="text-sm font-bold text-gray-800 mb-2">Garden State Combat Robotics League</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>· Combat robots survive real impacts</li>
              <li>· Reliable electronics under vibration and stress</li>
              <li>· Robust chassis and motor mounts</li>
              <li>· Design patterns apply directly to field-deployable cars</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Phase 1 → Coachable Platform</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>· <strong>Data format:</strong> HDF5 episodes (replaces flat image+steering CSV)</li>
              <li>· <strong>Policy:</strong> ACT / Diffusion Policy (replaces end-to-end CNN)</li>
              <li>· <strong>Collection:</strong> leader-follower or controller coaching</li>
              <li>· <strong>Inference:</strong> Chameleon cloud or thin-edge MCU</li>
              <li>· <strong>Same backbone:</strong> same CHI@Edge → MI100 → deploy loop</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-1">The Point</p>
          <p className="text-sm text-gray-700">
            FooCars v2 doesn't leave the platform — it <strong>joins</strong> it. The same Chameleon backbone,
            the same LeRobot episode format, the same training pipeline. Curriculum and tooling
            built for arms transfer directly to cars. The body changes; the coaching loop doesn't.
          </p>
        </div>
      </SlideShell>
    ),
  },

  // ── THIN EDGE: MICROCONTROLLER → INFERENCE ──
  {
    label: "Thin Edge",
    content: (
      <SlideShell tag="Thin Edge" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Thin Edge: Microcontroller → Cloud Inference</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />
        <p className="text-sm text-gray-600 mb-4">The most minimal possible edge: no Pi, no Linux. A microcontroller handles sensors and actuators — all intelligence lives in Chameleon.</p>

        <div className="flex items-stretch gap-3 mb-4">
          {/* MCU box */}
          <div className="w-44 flex-shrink-0 border-2 border-blue-400 rounded-xl bg-blue-50 p-3 flex flex-col gap-2">
            <p className="text-xs font-black text-blue-800 text-center">Microcontroller</p>
            <p className="text-xs text-center text-gray-600">ESP32 / RP2040 / STM32</p>
            <div className="bg-white border border-blue-200 rounded-lg px-2 py-1 text-xs text-gray-700">Camera (OV2640)</div>
            <div className="bg-white border border-blue-200 rounded-lg px-2 py-1 text-xs text-gray-700">IMU + encoders</div>
            <div className="bg-white border border-blue-200 rounded-lg px-2 py-1 text-xs text-gray-700">PWM motor control</div>
            <div className="bg-white border border-blue-200 rounded-lg px-2 py-1 text-xs text-gray-700">WiFi / LTE</div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center justify-center gap-1 w-16 flex-shrink-0">
            <p className="text-xs text-gray-500 italic text-center">sensor data</p>
            <div className="text-gray-500 font-bold text-xl">→</div>
            <div className="text-gray-400 font-bold text-xl">←</div>
            <p className="text-xs text-gray-500 italic text-center">action output</p>
            <p className="text-xs text-purple-600 font-bold text-center">gRPC</p>
          </div>

          {/* Chameleon inference */}
          <div className="flex-1 border-2 border-red-400 rounded-xl bg-red-50 p-3 flex flex-col gap-2">
            <p className="text-xs font-black text-red-800 text-center">CHI@Edge / Chameleon Inference</p>
            <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
              <span className="font-bold">Policy execution</span> — ACT, Diffusion Policy, or navigation model
            </div>
            <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
              <span className="font-bold">Spatial AI</span> — detection, depth estimation, scene understanding
            </div>
            <div className="bg-purple-50 border border-purple-300 rounded-lg px-2 py-1.5 text-xs text-gray-700">
              <span className="font-bold text-purple-800">Talkbot</span> — voice + tools on Pi; Chameleon as LLM fallback
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
            <p className="text-xs font-black text-emerald-700 mb-1">Advantages</p>
            <p className="text-xs text-gray-700">Cheaper, lighter, more robust hardware. No OS to maintain. Survives crashes that would kill a Pi.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-xs font-black text-amber-700 mb-1">Latency Constraint</p>
            <p className="text-xs text-gray-700">RC cars need ~20–50ms control cycles. gRPC streaming + Chameleon proximity to the device matters. Measuring now.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
            <p className="text-xs font-black text-blue-700 mb-1">Chameleon Fit</p>
            <p className="text-xs text-gray-700">CHI@Edge device enrollment for the MCU? Or dedicated inference endpoint on a reserved node the MCU always calls?</p>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── TALKBOT: CONCEPT ──
  {
    label: "Talkbot: Concept",
    content: (
      <SlideShell tag="Edge Agent" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Talkbot as Robot Agent</h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-5" />

        {/* Core concept: LLM + Tools */}
        <div className="flex flex-col items-center gap-3 mb-5">

          {/* Input row */}
          <div className="flex gap-4 items-center">
            <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-sm font-semibold text-gray-600">voice / text command</div>
          </div>
          <div className="text-gray-400 text-xl">↓</div>

          {/* LLM core */}
          <div className="bg-purple-600 text-white rounded-2xl px-10 py-4 text-center shadow-lg">
            <p className="text-xs font-black uppercase tracking-widest text-purple-200 mb-1">LLM Core · Pi 5</p>
            <p className="text-base font-black">qwen3.5-0.8b</p>
            <p className="text-xs text-purple-200">local · 21 tok/s · Chameleon fallback</p>
          </div>
          <div className="text-gray-400 text-xl">↓</div>

          {/* Tool dispatch */}
          <div className="bg-gray-50 border-2 border-gray-300 rounded-xl px-6 py-2 text-xs font-black uppercase tracking-widest text-gray-500">
            tool dispatcher
          </div>
          <div className="text-gray-400 text-xl">↓</div>

          {/* Two columns: today vs robot */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 text-center">Today</p>
              <div className="space-y-1.5 text-xs text-gray-500 text-center">
                <div className="bg-white rounded px-2 py-1">timer · reminder</div>
                <div className="bg-white rounded px-2 py-1">web search</div>
                <div className="bg-white rounded px-2 py-1">shopping list</div>
                <div className="bg-white rounded px-2 py-1">user memory</div>
              </div>
              <p className="text-center mt-3 text-gray-400 text-xl">🖥️</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-widest text-purple-600 mb-3 text-center">Robot Tools</p>
              <div className="space-y-1.5 text-xs text-center">
                <div className="bg-purple-100 text-purple-800 font-semibold rounded px-2 py-1">move_joint</div>
                <div className="bg-purple-100 text-purple-800 font-semibold rounded px-2 py-1">gripper_open / close</div>
                <div className="bg-purple-100 text-purple-800 font-semibold rounded px-2 py-1">camera_query</div>
                <div className="bg-purple-100 text-purple-800 font-semibold rounded px-2 py-1">run_policy</div>
              </div>
              <p className="text-center mt-3 text-2xl">🦾</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 italic">
          Same framework · same LLM · different tools → the robot becomes the interface
        </p>
        <div className="mt-3 flex justify-center gap-2 flex-wrap">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Active testing — control · inference · CHI@Edge SO-ARM</span>
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">Swap or combine with LeRobot</span>
        </div>
      </SlideShell>
    ),
  },

  // ── TALKBOT: DETAILS ──
  {
    label: "↳ Talkbot Details",
    content: (
      <SlideShell tag="Edge Agent · Detail" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Talkbot: Platform &amp; Scale</h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="space-y-3">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Edge — Pi 5</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>· qwen3.5-0.8b-Q8 · 775 MB · 21 tok/s</li>
                <li>· faster-whisper STT · Silero VAD</li>
                <li>· KittenTTS local neural voice</li>
                <li>· Benchmarked: 90% task success</li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4">
              <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">Cloud — Chameleon Fallback</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>· Pi busy with teleop + recording → offload LLM</li>
                <li>· Heavier reasoning tasks → larger model</li>
                <li>· KVM@TACC H100 for <strong>classroom fleet scale</strong> — many robots, many concurrent sessions</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Embodied in Any Robot</p>
            <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <span className="text-2xl flex-shrink-0">🦾</span>
              <div>
                <p className="text-sm font-bold text-gray-800">SO-ARM101</p>
                <p className="text-xs text-gray-500">Voice-controlled arm. Narrates actions, accepts task instructions, triggers trained policies.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <span className="text-2xl flex-shrink-0">🚗</span>
              <div>
                <p className="text-sm font-bold text-gray-800">FooCars v2</p>
                <p className="text-xs text-gray-500">Vehicle that takes voice commands, reports sensor state, narrates what it sees.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3">
              <span className="text-2xl flex-shrink-0">🤖</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Reachy / Coglet pattern</p>
                <p className="text-xs text-gray-500">Humanoid or companion robot with voice, memory, and embodied tool access.</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 italic mt-1">github.com/ricklon/talkbot</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl px-4 py-3">
            <p className="text-xs font-black uppercase tracking-widest text-emerald-700 mb-1">Now Active — Three Test Targets</p>
            <div className="grid grid-cols-3 gap-2 mt-1">
              <div className="bg-white border border-emerald-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 text-center">
                <p className="font-bold text-emerald-800">Control node</p>
                <p className="text-gray-500">coachable-robots-control</p>
              </div>
              <div className="bg-white border border-emerald-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 text-center">
                <p className="font-bold text-emerald-800">Inference node</p>
                <p className="text-gray-500">CHI@Edge / MI100</p>
              </div>
              <div className="bg-white border border-emerald-200 rounded-lg px-2 py-1.5 text-xs text-gray-700 text-center">
                <p className="font-bold text-emerald-800">SO-ARM systems</p>
                <p className="text-gray-500">arm-01 / soarm101</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-1">Swap or Combine</p>
            <p className="text-xs text-gray-700">LeRobot, Talkbot, or both together — the same infrastructure under all three. Talkbot stress-tests the full pipeline <strong>without requiring cameras or USB serial</strong>: no hardware lock-in, clean benchmark baselines across every configuration.</p>
          </div>
          <div className="bg-red-50 border border-red-300 rounded-xl px-4 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-1">Scaling Problem: Small Models Don't Improve</p>
            <p className="text-xs text-gray-700">Larger models work well. Smaller models don't reliably use tools or follow instructions better — and their <strong>small context windows put pressure on the whole stack</strong>, causing other tools and pipeline stages to fail. Scaling small → large is not smooth.</p>
          </div>
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
            <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-2">Benchmark Results Pending</p>
            <ul className="space-y-2">
              <GapBullet>Pi → Chameleon inference round-trip at ~10 Hz — is cloud inference viable for real-time control?</GapBullet>
              <GapBullet>Training time per N episodes on MI100 — ACT vs. Diffusion Policy on gfx908</GapBullet>
              <GapBullet>HTTP vs. gRPC latency comparison for the inference loop</GapBullet>
              <GapBullet>Pi 5 resource budget: teleop + recording + Talkbot concurrently</GapBullet>
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
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Open Technical Questions</p>
            <ul className="space-y-2">
              <GapBullet>WebRTC port exposure through Chameleon reservation network — confirmed working?</GapBullet>
              <GapBullet>gRPC latency benchmarks: Pi → MI100 round-trip for streaming inference</GapBullet>
              <GapBullet>MCU → Chameleon direct inference: CHI@Edge enrollment path for microcontrollers?</GapBullet>
              <GapBullet>Talkbot on Pi 5: resource budget when teleop + recording also running? qwen3.5-0.8b @ 21 tok/s CPU is the baseline.</GapBullet>
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
            <p className="text-xs text-gray-500">Rutgers UOES · FUBAR Labs</p>
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

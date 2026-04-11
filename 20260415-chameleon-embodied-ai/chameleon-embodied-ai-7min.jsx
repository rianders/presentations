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

const Bullet = ({ icon = "▸", children }) => (
  <li className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">{icon}</span>
    <span>{children}</span>
  </li>
);

const Tag = ({ color = "bg-blue-100 text-blue-700", children }) => (
  <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${color}`}>{children}</span>
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

  // ── 1: TITLE ──
  {
    label: "Title",
    content: (
      <SlideShell tag="DRAFT · Chameleon User Meeting 2026" tagColor="bg-amber-500">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Rutgers UOES · FUBAR Labs · CHI-261589</p>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-1">From RC Cars</h1>
          <h1 className="text-4xl sm:text-5xl font-black text-red-600 leading-tight mb-1">to Robot Arms</h1>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-500 mb-4">Extending Embodied AI Education on Chameleon Cloud</h2>
          <div className="w-20 h-1 bg-red-600 rounded mb-5" />
          <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-5">
            An open-source curriculum growing from autonomous RC cars to robotic arm manipulation —
            using CHI@Edge, MI100 bare-metal GPU, and Chameleon-hosted inference.
            Now adding voice agents at the edge.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <Tag color="bg-red-100 text-red-700">Embodied AI</Tag>
            <Tag color="bg-blue-100 text-blue-700">CHI@Edge</Tag>
            <Tag color="bg-orange-100 text-orange-700">MI100 / ROCm</Tag>
            <Tag color="bg-purple-100 text-purple-700">LeRobot</Tag>
            <Tag color="bg-emerald-100 text-emerald-700">Open Source</Tag>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
            <p className="text-xs text-gray-500">Rutgers UOES · FUBAR Labs</p>
            <p className="text-xs text-gray-400">April 15, 2026 · 7 minutes</p>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 2: TWO PHASES, ONE COMMUNITY ──
  {
    label: "Two Approaches",
    content: (
      <SlideShell tag="The Work" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Two Approaches, One Backbone</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-1">Original Approach</p>
            <p className="text-lg font-black text-gray-900 mb-0.5">ChiaRacers</p>
            <p className="text-xs text-blue-700 font-semibold mb-3">Traditional supervised ML → edge autonomous driving</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>· Supervised CNN: camera frame → steering angle</li>
              <li>· Pi + Teensy microcontroller + custom carrier PCB</li>
              <li>· Chameleon GPU for training; fleet managed via CHI@Edge</li>
              <li>· Origin artifact: <strong>Request_Chia_Racer.ipynb</strong></li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">Current Approach</p>
            <p className="text-lg font-black text-gray-900 mb-0.5">Coachable Robots</p>
            <p className="text-xs text-red-700 font-semibold mb-3">A platform, not a robot — heterogeneous embodiment on a shared backbone</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>· LeRobot: same pipeline for any body</li>
              <li>· SO-ARM101 operational; FooCars v2, Talkbot, MCUs joining</li>
              <li>· <strong>Chameleon hosts inference</strong> — Pi is a thin client</li>
              <li>· Arms live on CHI-261589 — benchmarking now</li>
            </ul>
          </div>

        </div>

        <div className="bg-gray-100 rounded-xl px-5 py-3">
          <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Who's Learning With This</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-700">
            <span>· Bergen Tech HS students</span>
            <span>· CMSCE teacher training</span>
            <span>· AI Study Group + Robot Build Night @ FUBAR Labs</span>
            <span>· Maker Faire attendees</span>
            <span>· CHI@Edge interns</span>
          </div>
        </div>

      </SlideShell>
    ),
  },

  // ── 3: THE CHAMELEON STACK ──
  {
    label: "Chameleon Stack",
    content: (
      <SlideShell tag="Infrastructure" tagColor="bg-red-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The Chameleon Stack</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-5" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">CHI@Edge</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>· Raspberry Pi 5 device enrollment</li>
              <li>· Serial + camera device profiles</li>
              <li>· Container management via python-chi</li>
              <li>· SO-ARM101 fleet (soarm101-1)</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">MI100 Bare Metal</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>· gfx908 · 32 GB HBM2</li>
              <li>· ROCm 6.3 · PyTorch 2.7</li>
              <li>· ACT policy training</li>
              <li>· Ansible-provisioned</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Inference Endpoint</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>· Spatial AI (detection, depth)</li>
              <li>· ACT policy execution</li>
              <li>· LLM agentic control</li>
              <li>· Pi calls over network</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 bg-gray-100 rounded-xl p-4">
            <div className="text-center flex-1">
              <p className="text-xs font-black text-gray-500 uppercase mb-1">Phase 1</p>
              <p className="text-sm font-bold text-gray-700">Chameleon = training only</p>
              <p className="text-xs text-gray-500">inference ran on Pi</p>
            </div>
            <span className="text-2xl text-red-400 font-black">→</span>
            <div className="text-center flex-1">
              <p className="text-xs font-black text-red-700 uppercase mb-1">Phase 2</p>
              <p className="text-sm font-bold text-gray-900">training + inference</p>
              <p className="text-xs text-gray-500">Pi is a thin client</p>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 flex items-center gap-3">
            <span className="text-emerald-600 font-black text-lg">✓</span>
            <div>
              <p className="text-sm font-bold text-gray-800">Arms operational on CHI-261589</p>
              <p className="text-xs text-gray-500">Calibration and fleet mgmt working. Now: first episode collection + latency benchmarking.</p>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 4: ARCHITECTURE (current diagram) ──
  {
    label: "Architecture",
    content: (
      <SlideShell tag="Architecture · Now" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Architecture: Current</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />

        <div className="flex items-stretch gap-0">
          {/* ZONE 1: Edge */}
          <div className="flex flex-col w-48 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2 text-center">Edge</div>
            <div className="flex-1 border-2 border-blue-400 rounded-xl p-3 bg-blue-50 flex flex-col gap-2">
              <div className="text-xs font-black text-blue-800 text-center mb-1">Raspberry Pi 5</div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">SO-ARM101</span><br/>leader + follower
              </div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">2× USB cameras</span>
              </div>
              <div className="bg-white border border-blue-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Coachable CLI</span><br/>preview · collect · run
              </div>
              <div className="bg-amber-50 border border-amber-300 rounded-lg px-2 py-1.5 text-xs text-amber-900">
                <span className="font-bold">Talkbot?</span><br/>qwen3.5-0.8b<br/>voice + tools
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="flex flex-col items-center justify-center flex-1 px-2 gap-3">
            <div className="flex flex-col items-center w-full">
              <div className="text-xs text-gray-500 italic mb-0.5">episodes (HDF5)</div>
              <div className="flex items-center w-full gap-1">
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
                <span className="text-gray-500 font-bold">→</span>
                <div className="border-2 border-orange-400 rounded-xl bg-orange-50 px-3 py-2 text-center mx-1">
                  <div className="text-xs font-black text-orange-700">HF Hub</div>
                  <div className="text-xs text-gray-600">datasets</div>
                  <div className="text-xs text-gray-600">checkpoints</div>
                </div>
                <span className="text-gray-500 font-bold">→</span>
                <div className="flex-1 border-t-2 border-dashed border-gray-400" />
              </div>
              <div className="text-xs text-gray-500 italic mt-0.5">checkpoint pull</div>
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="text-xs text-gray-500 italic mb-0.5">sensor data</div>
              <div className="flex items-center w-full">
                <div className="flex-1 border-t-2 border-dashed border-red-300" />
                <span className="text-red-400 font-bold">→</span>
                <span className="text-xs text-red-500 italic px-1">inference req</span>
                <span className="text-red-400 font-bold">→</span>
                <div className="flex-1 border-t-2 border-dashed border-red-300" />
              </div>
              <div className="flex items-center w-full flex-row-reverse">
                <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
                <span className="text-emerald-500 font-bold">←</span>
                <span className="text-xs text-emerald-600 italic px-1">action output</span>
                <span className="text-emerald-500 font-bold">←</span>
                <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
              </div>
            </div>
            <div className="flex items-center w-full gap-1">
              <div className="flex-1 border-t-2 border-dashed border-gray-300" />
              <span className="text-gray-400 font-bold">↔</span>
              <span className="text-xs text-gray-400 italic px-1">device mgmt</span>
              <span className="text-gray-400 font-bold">↔</span>
              <div className="flex-1 border-t-2 border-dashed border-gray-300" />
            </div>
          </div>

          {/* ZONE 2: Chameleon */}
          <div className="flex flex-col w-52 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-red-700 mb-2 text-center">Chameleon · CHI-261589</div>
            <div className="flex-1 border-2 border-red-400 rounded-xl p-3 bg-red-50 flex flex-col gap-2">
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">MI100 bare metal</span><br/>ROCm 6.3 · ACT training
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Inference endpoint</span><br/>spatial AI · policy exec
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">CHI@Edge</span><br/>device enroll · containers
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">HF Hub = external data dependency today</span>
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">No native Pi ↔ cloud mesh — Tailscale desired, permission TBD</span>
        </div>
      </SlideShell>
    ),
  },

  // ── 5: LESSONS FROM CHI@EDGE ──
  {
    label: "Lessons",
    content: (
      <SlideShell tag="Lessons Learned" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Lessons from CHI@Edge</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-3" />
        <p className="text-xs text-gray-400 italic mb-4">Running notes — github.com/ricklon/coachable-robots/LESSONS_LEARNED.md</p>
        <div className="space-y-2">
          <LessonRow status="fixed"
            problem="USB cameras on Pi 5: pi_camera and pi_libcamera target CSI hardware only — neither works for USB"
            fix="video0/video1/video2/video3 profiles added after helpdesk ticket. Use device_profiles=['ttyacm0','ttyacm1','video0','video2']" />
          <LessonRow status="fixed"
            problem="chi.set('project_name') silently breaks application credentials — keystoneauth demands project_domain_id"
            fix="Omit chi.set('project_name') entirely with app creds. Container network must be 'caliconet', not 'containernet1'." />
          <LessonRow status="fixed"
            problem="Containers stuck Unschedulable after hardware maintenance — stale coordinator lock never released"
            fix="balena restart coordinator_{uuid} breaks the lock. Also restart k3s + chi-edge device sync. Takes ~5 min." />
          <LessonRow status="warn"
            problem="No native mesh between Pi on lab network and Chameleon nodes — SSH tunnels are fragile"
            fix="Tailscale is the desired fix (BalenaOS block + curl install). Permission not yet requested; performance overhead TBD. Does Chameleon have a native option?" />
          <LessonRow status="fixed"
            problem="MI100 is gfx908: no Flash Attention 2, no hipBLASLt — Diffusion Policy degrades; lerobot v0.5.0 has breaking API changes"
            fix="Use ACT as default policy on MI100. Rename LEROBOT_HOME → HF_LEROBOT_HOME. Removed aloha type — use pusht for dry-runs." />
        </div>
      </SlideShell>
    ),
  },

  // ── 6: WHAT'S NEXT + THREE ASKS ──
  {
    label: "What's Next",
    content: (
      <SlideShell tag="Future + Asks" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">What's Next</h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-4" />

        {/* Concept diagram — target pipeline */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4">
          <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Target Pipeline</p>
          <div className="flex items-center justify-between gap-1 text-center text-xs">
            <div className="flex-1 bg-blue-100 rounded-lg p-2">
              <p className="font-black text-blue-800 text-sm">Pi + Arm</p>
              <p className="text-blue-600 leading-tight">collect · teleop</p>
              <p className="text-blue-500 mt-1 font-semibold">Talkbot agent</p>
            </div>
            <div className="text-gray-400 font-bold flex flex-col items-center">
              <span>gRPC</span>
              <span>→</span>
            </div>
            <div className="flex-1 bg-purple-100 rounded-lg p-2">
              <p className="font-black text-purple-800 text-sm">Chameleon</p>
              <p className="text-purple-600 leading-tight">inference endpoint</p>
              <p className="text-purple-500 mt-1 font-semibold">~10 Hz round-trip</p>
            </div>
            <div className="text-gray-400 font-bold flex flex-col items-center">
              <span>↕</span>
            </div>
            <div className="flex-1 bg-red-100 rounded-lg p-2">
              <p className="font-black text-red-800 text-sm">H100</p>
              <p className="text-red-600 leading-tight">training · Flash Attn 2</p>
              <p className="text-red-500 mt-1 font-semibold">all policies</p>
            </div>
            <div className="text-gray-400 font-bold flex flex-col items-center">
              <span>↕</span>
            </div>
            <div className="flex-1 bg-green-100 rounded-lg p-2">
              <p className="font-black text-green-800 text-sm">Object Store</p>
              <p className="text-green-600 leading-tight">episodes · checkpoints</p>
              <p className="text-green-500 mt-1 font-semibold">stays in project</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Next Steps</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <Bullet icon="→"><strong>Benchmark every stage</strong> — collect · transfer · train · inference · execution</Bullet>
              <Bullet icon="→"><strong>gRPC</strong> streaming for real-time Pi → Chameleon inference loop</Bullet>
              <Bullet icon="→"><strong>Talkbot as robot agent</strong> — move_joint, gripper, run_policy tools on Pi</Bullet>
              <Bullet icon="→"><strong>FooCars v2</strong> + thin-edge MCUs on the same LeRobot backbone</Bullet>
            </ul>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Three Asks</p>
            <div className="space-y-2">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">1. Persistent GPU environments</p>
                <p className="text-xs text-gray-500">GPU needed for sim + training + inference — not just at training time</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">2. RTX node availability?</p>
                <p className="text-xs text-gray-500">Isaac Sim requires RTX-class — what's current at CHI@UC and CHI@TACC?</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">3. Native Pi ↔ Chameleon networking</p>
                <p className="text-xs text-gray-500">Tailscale desired but not approved — is there a native Chameleon path?</p>
              </div>
            </div>
          </div>

        </div>
      </SlideShell>
    ),
  },

  // ── 7: Q&A ──
  {
    label: "Q&A",
    content: (
      <SlideShell tag="Questions" tagColor="bg-gray-700">
        <div className="flex flex-col items-start justify-center h-full min-h-[380px]">
          <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Chameleon User Meeting · April 2026 · CHI-261589</p>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Questions?</h1>
          <div className="w-20 h-1 bg-red-600 rounded mb-6" />
          <ul className="space-y-2 mb-8">
            <Bullet icon="→">github.com/ricklon/coachable-robots — CLI, notebooks, Ansible, LESSONS_LEARNED.md</Bullet>
            <Bullet icon="→">github.com/fubarlabs/foocars — Phase 1 RC car curriculum</Bullet>
            <Bullet icon="→">github.com/ricklon/talkbot — Pi-level voice agent</Bullet>
            <Bullet icon="→">chameleoncloud.org/user/projects/1589 — CHI-261589</Bullet>
          </ul>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="bg-red-600 text-white text-sm font-black tracking-widest px-5 py-2 rounded inline-block mb-3">
              RUTGERS UNIVERSITY
            </div>
            <p className="text-sm font-bold text-gray-800">Rick Anderson</p>
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
        Use ← → arrow keys to navigate · ~1 min per slide · 7 slides · 7 minutes
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

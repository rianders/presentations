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
            Now adding voice coaching and remote inference, with the Pi acting as the robot interface rather than the model host.
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

  // ── 2: TWO APPROACHES ──
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
            <p className="text-xs text-red-700 font-semibold mb-3">A fleet architecture for demonstration collection, training, inference, and classroom operation</p>
            <ul className="space-y-1.5 text-sm text-gray-700">
              <li>· LeRobot: same pipeline for any body</li>
              <li>· SO-ARM101 operational; Talkbot, FooCars v2, MCUs joining</li>
              <li>· <strong>Chameleon hosts inference</strong> — Pi is the robot interface</li>
              <li>· Coachable is the umbrella: fleet, workflows, edge-to-cloud ops</li>
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

  // ── 3: WHAT WORKS NOW ──
  {
    label: "What Works Now",
    content: (
      <SlideShell tag="Current Status" tagColor="bg-emerald-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">What Works Now</h1>
        <div className="w-16 h-1 bg-emerald-600 rounded mb-3" />
        <p className="text-xs text-gray-400 italic mb-4">What is real and verified today — not overclaiming the full autonomous loop</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Pi enrolled on CHI@Edge</p>
                <p className="text-xs text-gray-500">Device: soarm101-1 · container management via python-chi</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">SO-ARM101 leader + follower calibrated</p>
                <p className="text-xs text-gray-500">Serial profiles resolved · ttyacm0 + ttyacm1</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Dual USB cameras operational</p>
                <p className="text-xs text-gray-500">video0 / video2 profiles · UVC, not CSI</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Teleoperation working</p>
                <p className="text-xs text-gray-500">Xbox · keyboard · Joy-Con · MuJoCo sim</p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Collect → replay → push pipeline</p>
                <p className="text-xs text-gray-500">Calibration dataset pushed to Hugging Face Hub</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Coachable CLI + student notebooks</p>
                <p className="text-xs text-gray-500">preview · collect · run · Papermill acceptance tests</p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-emerald-600 font-black text-sm flex-shrink-0">✓</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Operator automation mature</p>
                <p className="text-xs text-gray-500">justfile CLI · fleet.example.yaml · Tailscale access layer live</p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-300 rounded-lg px-4 py-3 flex items-start gap-3">
              <span className="text-amber-600 font-black text-sm flex-shrink-0">→</span>
              <div>
                <p className="text-sm font-bold text-gray-800">Next: MI100 policy training + autonomous execution</p>
                <p className="text-xs text-gray-500">Demonstration collection in progress · benchmarking underway</p>
              </div>
            </div>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 4: ARCHITECTURE ──
  {
    label: "Architecture",
    content: (
      <SlideShell tag="Architecture · Fleet" tagColor="bg-gray-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1 leading-tight">Architecture: Distributed Embodied AI Fleet</h1>
        <div className="w-16 h-1 bg-red-600 rounded mb-4" />

        <div className="flex items-stretch gap-0">
          {/* ZONE 1: Edge */}
          <div className="flex flex-col w-44 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2 text-center">CHI@Edge · Arm Node</div>
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
              <div className="bg-purple-50 border border-purple-300 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Talkbot</span><br/>UI + remote inference
              </div>
            </div>
          </div>

          {/* Middle: Tailscale + HF Hub + data flows */}
          <div className="flex flex-col items-center justify-center flex-1 px-2 gap-3">
            <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl px-3 py-2 text-center w-full">
              <p className="text-xs font-black text-emerald-700 uppercase tracking-widest">Tailscale · Live</p>
              <p className="text-xs text-emerald-600 mt-0.5">arm · control · training · inference nodes</p>
            </div>
            <div className="flex flex-col items-center w-full gap-1">
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
              <div className="flex items-center w-full">
                <div className="flex-1 border-t-2 border-dashed border-red-300" />
                <span className="text-xs text-red-500 italic px-1">inference req →</span>
                <div className="flex-1 border-t-2 border-dashed border-red-300" />
              </div>
              <div className="flex items-center w-full">
                <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
                <span className="text-xs text-emerald-600 italic px-1">← action</span>
                <div className="flex-1 border-t-2 border-dashed border-emerald-300" />
              </div>
            </div>
          </div>

          {/* ZONE 2: Chameleon */}
          <div className="flex flex-col w-52 flex-shrink-0">
            <div className="text-xs font-black uppercase tracking-widest text-red-700 mb-2 text-center">Chameleon · CHI-261589</div>
            <div className="flex-1 border-2 border-red-400 rounded-xl p-3 bg-red-50 flex flex-col gap-2">
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">Control node</span><br/>operator CLI · fleet mgmt
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">MI100 bare metal</span><br/>ROCm 6.3 · ACT training
              </div>
              <div className="bg-white border border-red-200 rounded-lg px-2 py-1.5 text-xs text-gray-700">
                <span className="font-bold">CHI@Edge</span><br/>device enroll · containers
              </div>
              <div className="bg-amber-50 border border-amber-300 rounded-lg px-2 py-1.5 text-xs text-amber-900">
                <span className="font-bold">Jetson Orin</span><br/>inference node<br/>⚠ egress blocked
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex gap-2 flex-wrap">
          <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">Tailscale live — stable hostnames across fleet nodes</span>
          <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">Jetson pod: GPU works, outbound internet blocked</span>
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full">HF Hub = external data transfer layer today</span>
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
        <div className="w-16 h-1 bg-red-600 rounded mb-2" />
        <p className="text-xs text-gray-400 italic mb-4">The gap between a container that starts and a container that can operate real embodied hardware</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-2">Device Profiles</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>· USB cameras need <code className="bg-blue-100 px-1 rounded">video0–video3</code>, not <code className="bg-blue-100 px-1 rounded">pi_camera</code> (CSI-only)</li>
              <li>· Serial profiles for leader + follower resolved (<code className="bg-blue-100 px-1 rounded">ttyacm0</code>, <code className="bg-blue-100 px-1 rounded">ttyacm1</code>)</li>
              <li>· Device binding has startup timing delays — camera open retries required</li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-orange-700 mb-2">Networking</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>· Floating IP = inbound routing only — no outbound NAT for pod egress</li>
              <li>· Tailscale gives stable access across arm, training, and control nodes</li>
              <li>· Jetson Orin pod: GPU works, but outbound internet blocked — Tailscale and HF Hub fail</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 mb-2">Container Lifecycle</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>· Image caching requires dated tags — same-tag rebuilds may not pull fresh content</li>
              <li>· Zun container startup differs from Docker — use entrypoint patterns carefully</li>
              <li>· Stale coordinator locks block scheduling after hardware maintenance</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-xs font-black uppercase tracking-widest text-red-700 mb-2">GPU / Runtime</p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li>· MI100 (gfx908): no Flash Attention 2, no hipBLASLt — use ACT, not Diffusion Policy</li>
              <li>· Jetson Orin: requires <code className="bg-red-100 px-1 rounded">runtime="nvidia"</code> and correct L4T/JetPack base image</li>
              <li>· Large model assets must be baked into image until Jetson pod egress is resolved</li>
            </ul>
          </div>
        </div>
      </SlideShell>
    ),
  },

  // ── 6: TALKBOT + INFERENCE SPLIT ──
  {
    label: "Talkbot",
    content: (
      <SlideShell tag="New Work" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">Talkbot and the Inference Split</h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">What Talkbot Does</p>
            <div className="space-y-2">
              <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-3">
                <p className="text-sm font-bold text-gray-800">Conversational tool user</p>
                <p className="text-xs text-gray-500 mt-0.5">STT → LLM → tool call → TTS</p>
                <p className="text-xs text-gray-500 mt-0.5">Robots are one class of tool it can call</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-3">
                <p className="text-sm font-bold text-gray-800">No vision currently</p>
                <p className="text-xs text-gray-500 mt-0.5">Voice + tool calling only — camera is a separate pipeline</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                <p className="text-sm font-bold text-gray-800">Build time: 90 min → 5 min</p>
                <p className="text-xs text-gray-500 mt-0.5">Removed llama.cpp from Pi — Pi calls remote inference instead</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">The Split</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 border border-blue-300 rounded-lg px-3 py-3 text-center flex-1">
                  <p className="text-xs font-black text-blue-800">Pi 5</p>
                  <p className="text-xs text-blue-700 mt-0.5">robot control</p>
                  <p className="text-xs text-blue-600">cameras · UI · API calls</p>
                </div>
                <span className="text-gray-400 font-bold text-lg flex-shrink-0">→</span>
                <div className="bg-red-100 border border-red-300 rounded-lg px-3 py-3 text-center flex-1">
                  <p className="text-xs font-black text-red-800">Remote Inference</p>
                  <p className="text-xs text-red-700 mt-0.5">OpenRouter</p>
                  <p className="text-xs text-red-600">MI100 · Jetson · tailnet host</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center italic">Inference target is swappable — student interaction unchanged</p>
            </div>
            <div className="bg-gray-900 rounded-xl px-4 py-3">
              <p className="text-sm font-semibold text-white leading-snug">
                "Models become tools the robot can call; the hard question is where each tool should run."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
          <p className="text-xs font-black uppercase tracking-widest text-blue-700 mb-1">Why This Matters for Chameleon</p>
          <p className="text-sm text-gray-700">Pi-class devices handle robot control, cameras, UI, and API calls — not language inference at useful latency. Useful LLM inference needs OpenRouter, MI100, Jetson Orin, or another tailnet host. Chameleon is a natural inference target once networking is solved.</p>
        </div>
      </SlideShell>
    ),
  },

  // ── 7: ASKS FOR CHAMELEON ──
  {
    label: "What's Next",
    content: (
      <SlideShell tag="Asks + Next Steps" tagColor="bg-purple-700">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Asks for Chameleon</h1>
        <div className="w-16 h-1 bg-purple-600 rounded mb-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Five Asks</p>
            <div className="space-y-2">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">1. Edge-to-cloud networking guidance</p>
                <p className="text-xs text-gray-500">Native or documented path for user-enrolled edge devices; Tailscale is the current workaround</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">2. Clarify floating IP behavior</p>
                <p className="text-xs text-gray-500">Inbound routing vs outbound NAT — CHI@Edge pods needing internet egress</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">3. Jetson Orin pod outbound internet</p>
                <p className="text-xs text-gray-500">GPU access works; egress blocked — Tailscale, HF Hub, and model downloads fail</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">4. Persistent GPU environments</p>
                <p className="text-xs text-gray-500">GPU needed for sim + training + inference — not just at training time</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                <p className="text-sm font-bold text-gray-900">5. RTX / H100 availability + device profile docs</p>
                <p className="text-xs text-gray-500">Isaac Sim requires RTX-class; USB serial and UVC camera profile patterns</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">Next Steps</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <Bullet icon="→"><strong>Benchmark every stage</strong> — collect · transfer · train · inference · execution</Bullet>
              <Bullet icon="→"><strong>MI100 policy training</strong> — first full ACT training run on demonstration data</Bullet>
              <Bullet icon="→"><strong>Autonomous policy execution</strong> — close the full collect → train → run loop</Bullet>
              <Bullet icon="→"><strong>Talkbot as robot agent</strong> — swap inference targets without changing student interaction</Bullet>
              <Bullet icon="→"><strong>FooCars v2 + MCUs</strong> — same Coachable backbone, lower-power embodiments</Bullet>
              <Bullet icon="→"><strong>Embodied AI curriculum</strong> — student notebooks + CMSCE teacher training (May 5)</Bullet>
            </ul>
          </div>

        </div>
      </SlideShell>
    ),
  },

  // ── 8: Q&A ──
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
            <Bullet icon="→">github.com/ricklon/talkbot — voice coaching interface</Bullet>
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
        Use ← → arrow keys to navigate · ~1 min per slide · 8 slides · ~8 minutes
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);

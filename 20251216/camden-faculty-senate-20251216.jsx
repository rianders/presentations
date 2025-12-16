const { useState, useEffect } = React;

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    // Slide 1: Title
    {
      content: (
        <div className="flex flex-col items-center justify-center min-h-full text-center px-4 sm:px-8 py-8">
          <div className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded mb-4 sm:mb-6 text-sm sm:text-lg font-bold">
            RUTGERS UNIVERSITY
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            AI, Emerging Technology, and Your Teaching
          </h1>
          <p className="text-base sm:text-xl text-orange-600 font-semibold mb-4 sm:mb-6">A Critical Moment for Faculty Input</p>
          <div className="border-t-2 border-gray-200 pt-4 sm:pt-6 mt-2 w-full max-w-lg">
            <p className="text-base sm:text-lg text-gray-700">Rutgers Camden Faculty Senate</p>
            <p className="text-sm sm:text-md text-gray-500 mt-2">December 16, 2025</p>
            <p className="text-sm sm:text-md text-red-600 mt-4 font-semibold">Rick Anderson</p>
            <p className="text-xs sm:text-sm text-gray-500">Director of Emerging Technology</p>
            <p className="text-xs sm:text-sm text-gray-500">University Online Education Services</p>
          </div>
        </div>
      )
    },
    // Slide 2: Who I Am (Condensed)
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">Who I Am</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-600">
              <h3 className="font-bold text-red-700 text-sm sm:text-base">Early 1990s</h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">Built some of the University's first websites — New Brunswick Summer Session, University College, and more. At the <span className="font-semibold">Center for Electronic Texts in the Humanities</span>, worked with experts worldwide on text markup and analysis at a critical moment for the field.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
              <h3 className="font-bold text-orange-700 text-sm sm:text-base">Decades Since</h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">Built critical infrastructure for the University. Developed virtual worlds. Always working to connect <span className="font-semibold">emerging technologies, research, and instructional design</span>.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h3 className="font-bold text-green-700 text-sm sm:text-base">Today</h3>
              <p className="text-xs sm:text-sm text-gray-700 mt-2">Director of Emerging Technology, UOES. That early work on electronic texts now informs how I understand <span className="font-semibold">AI's impact on knowledge and research</span>.</p>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-2 border-red-200">
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              This history at Rutgers has given me a <span className="font-bold text-red-600">unique perspective on technology adoption</span> and integration into the knowledge ecosystem of higher education.
            </p>
          </div>
        </div>
      )
    },
    // Slide 3: UOES Mission
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">UOES: University Online Education Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">Who We Are</h3>
              <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 flex-shrink-0">•</span>
                  <span>Part of <span className="font-semibold">University Academic Affairs</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 flex-shrink-0">•</span>
                  <span>Instructional designers, media specialists, and facilitators of educational technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 flex-shrink-0">•</span>
                  <span>Reports to <span className="font-semibold">William Pagán</span>, Associate Vice President of University Online Education Services</span>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic">Supporting the goals and mission of the chancellor-led units for online learning</p>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-4 sm:p-6 border-l-4 border-red-600">
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-700">
                UOES advances the <span className="font-bold text-red-600">QUALITY</span> and{' '}
                <span className="font-bold text-orange-500">IMPACT</span> of online education at Rutgers.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                We partner with academic units to strengthen and support their online programs—helping them succeed in a competitive digital landscape.
              </p>
              <p className="text-xs sm:text-sm text-gray-700 mt-3">
                Through collaboration, innovation, and continuous improvement, we ensure Rutgers' online offerings deliver <span className="font-semibold">exceptional, student-centered learning experiences</span> aligned with institutional goals.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: AI@Rutgers Initiative Context
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">AI@Rutgers: A University-Wide Initiative</h2>
          
          <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-2 border-blue-200 mb-4">
            <div className="flex items-start">
              <span className="text-2xl sm:text-3xl mr-3">🏛️</span>
              <div>
                <h3 className="font-bold text-blue-700 text-sm sm:text-base mb-2">You May Not Have Heard About This</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Rutgers has a university-wide AI initiative coordinating policy, technology, and academic responses to AI. 
                  <span className="font-semibold"> But Rutgers isn't always great at communicating these efforts</span> — so this may be the first you're hearing about it.
                </p>
                <p className="text-xs sm:text-sm text-blue-600 mt-2 font-medium">
                  Learn more: it.rutgers.edu/ai/
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 sm:p-6 border-l-4 border-red-600">
            <h3 className="font-bold text-red-700 text-sm sm:text-base mb-3">My Involvement</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              As part of my role at UOES, I've been working with this initiative. I've participated on <span className="font-bold">both</span> committees:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3 shadow-sm">
                <p className="text-xs sm:text-sm font-semibold text-purple-700">📚 AI Academic Working Group</p>
                <p className="text-xs text-gray-600 mt-1">Faculty, pedagogy, academic integrity</p>
              </div>
              <div className="bg-white rounded p-3 shadow-sm">
                <p className="text-xs sm:text-sm font-semibold text-blue-700">🖥️ AI Technology Working Group</p>
                <p className="text-xs text-gray-600 mt-1">Security, data governance, technical controls</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-orange-100 rounded-lg p-3 sm:p-4 border-2 border-orange-300">
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              <span className="font-bold text-orange-700">Reports from both committees are due soon.</span> I've reviewed the drafts — and there are things you need to know.
            </p>
          </div>
        </div>
      )
    },
    // Slide 5: Breaking News - Two Committees
    {
      content: (
        <div className="p-4 sm:p-8">
          <div className="bg-red-600 text-white rounded-lg px-3 py-1 inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-bold">
            ⚡ BREAKING NEWS
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Two Committees, Two Views of Governance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-purple-50 rounded-xl p-4 sm:p-6 border-2 border-purple-200">
              <div className="text-2xl sm:text-3xl mb-2">📚</div>
              <h3 className="font-bold text-purple-700 text-base sm:text-lg mb-2">AI Academic Working Group</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                Asking for <span className="font-bold text-purple-700">partnership in governance</span> — faculty as co-governors, not just governed subjects.
              </p>
              <div className="bg-purple-100 rounded p-2 mt-3">
                <p className="text-xs text-purple-800 italic">"A coordinated central and distributed structure... managed as a workstream within the Academic Technology Advisory Council"</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Clear effort to understand the situation and engage constructively.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border-2 border-blue-200">
              <div className="text-2xl sm:text-3xl mb-2">🖥️</div>
              <h3 className="font-bold text-blue-700 text-base sm:text-lg mb-2">AI Technology Working Group</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                Positions IT as <span className="font-bold text-blue-700">the governors</span> — academics as risk vectors to be managed through controls.
              </p>
              <div className="bg-blue-100 rounded p-2 mt-3">
                <p className="text-xs text-blue-800 italic">"We can only govern their behavior through policy... approval by Department Head AND Data Governance Office"</p>
              </div>
              <p className="text-xs text-gray-600 mt-2">Focused on what users might do wrong, not what they need to succeed.</p>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 sm:p-4 border-l-4 border-orange-500">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-bold">The next phase requires these groups to work together.</span> The question isn't <em>whether</em> there will be governance — it's whether faculty will be <span className="font-bold text-red-600">partners</span> in it or <span className="font-bold text-blue-600">subjects</span> of it.
            </p>
          </div>
        </div>
      )
    },
    // Slide 6: The Core Divergence
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">The Core Divergence: Who Governs Whom?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-purple-50 rounded-lg p-4 border-t-4 border-purple-600">
              <h3 className="font-bold text-purple-700 text-sm sm:text-base mb-2">Academic Perspective</h3>
              <p className="text-xs sm:text-sm text-gray-700">Faculty as <span className="font-bold text-purple-600">Partners in Governance</span></p>
              <p className="text-xs text-gray-600 mt-2">"Course-level adoption will remain at the discretion of the instructor" — but within shared frameworks developed collaboratively.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border-t-4 border-blue-600">
              <h3 className="font-bold text-blue-700 text-sm sm:text-base mb-2">Technology Perspective</h3>
              <p className="text-xs sm:text-sm text-gray-700">Faculty as <span className="font-bold text-blue-600">Subjects to Be Governed</span></p>
              <p className="text-xs text-gray-600 mt-2">"Users may accidentally leak data, incur costs, or compromise security" — system must limit what users can do.</p>
            </div>
          </div>
          
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left font-bold text-gray-700">Dimension</th>
                  <th className="p-2 text-left font-bold text-purple-600">Academic (Partnership)</th>
                  <th className="p-2 text-left font-bold text-blue-600">Technology (Control)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Primary Mechanism</td>
                  <td className="p-2">Social contract, shared policy</td>
                  <td className="p-2">Technical restrictions, permissions</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-medium">Response to Risk</td>
                  <td className="p-2">Adaptation, education</td>
                  <td className="p-2">Moratoriums, blocks</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">How Decisions Get Made</td>
                  <td className="p-2">Distributed wisdom, faculty judgment</td>
                  <td className="p-2">Central approval chains</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-2 font-medium">View of the User</td>
                  <td className="p-2">Professional developing judgment</td>
                  <td className="p-2">Potential risk vector</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-3 bg-orange-50 rounded-lg p-3 border-l-4 border-orange-500">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-bold">Note:</span> Both groups want to protect the university. The difference is whether protection comes <em>through</em> faculty or <em>despite</em> them.
            </p>
          </div>
        </div>
      )
    },
    // Slide 7: What This Means in Practice
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">Same Tools, Different Vantage Points</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-5">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-3">🌐 The "AI Browser" Example</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">AI-enhanced browsers can complete tasks users typically have to do by hand — forms, data entry, research synthesis.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-500">
                  <p className="text-xs font-bold text-blue-700">IT Sees:</p>
                  <p className="text-xs text-gray-600 mt-1"><span className="font-semibold">Today's security risk.</span> These browsers send page content to external servers. Data exfiltration. No technical way to block them.</p>
                  <p className="text-xs text-blue-700 mt-2 italic">"Policy-based moratorium"</p>
                </div>
                <div className="bg-purple-50 rounded p-3 border-l-4 border-purple-500">
                  <p className="text-xs font-bold text-purple-700">Faculty Sees:</p>
                  <p className="text-xs text-gray-600 mt-1"><span className="font-semibold">Student behavior.</span> Students using AI to complete assignments that require demonstrating skills — faculty may respond by banning AI browsers. They face the same verification challenge: there is often no reliable way to tell whether the student or a tool produced the work. How do we design around this?</p>
                  <p className="text-xs text-purple-700 mt-2 italic">"Teach the trade-offs, redesign assignments"</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 sm:p-5">
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-3">💰 The "Who Pays?" Challenge</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3">A researcher wants to connect external AI tools to Office 365 for analysis. This costs money per query.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded p-3 border-l-4 border-blue-500">
                  <p className="text-xs font-bold text-blue-700">IT Sees:</p>
                  <p className="text-xs text-gray-600 mt-1"><span className="font-semibold">Uncapped costs.</span> "Tens of thousands of dollars in monthly consumption charges" with no clear budget owner.</p>
                  <p className="text-xs text-blue-700 mt-2 italic">"Block by default"</p>
                </div>
                <div className="bg-purple-50 rounded p-3 border-l-4 border-purple-500">
                  <p className="text-xs font-bold text-purple-700">Faculty Sees:</p>
                  <p className="text-xs text-gray-600 mt-1"><span className="font-semibold">Research necessity.</span> These tools enable new forms of scholarship. But who funds experimentation?</p>
                  <p className="text-xs text-purple-700 mt-2 italic">"No clear answer yet"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-orange-50 rounded-lg p-3 border-l-4 border-orange-500">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-bold">Both perspectives are valid.</span> IT has to deal with today's risks with limited resources. Faculty have to prepare students for tomorrow's tools. <span className="font-semibold text-orange-700">Neither can succeed without the other.</span>
            </p>
          </div>
        </div>
      )
    },
    // Slide 8: NEW - The Hidden Economic Shift
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">The Hidden Challenge: Knowledge Is Now Metered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-bold text-gray-700 text-sm sm:text-base mb-2">📚 When the Internet Came...</h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• Infrastructure cost = institutional</li>
                <li>• Access to information = free at point of use</li>
                <li>• The promise: <span className="font-semibold">democratized knowledge</span></li>
                <li>• The reality: became an <span className="text-orange-600 font-semibold">affordability & access problem</span></li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
              <h3 className="font-bold text-red-700 text-sm sm:text-base mb-2">🤖 With AI...</h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• Infrastructure cost = institutional</li>
                <li>• <span className="font-bold text-red-600">Every query = metered transaction</span></li>
                <li>• The promise: <span className="font-semibold">personalized learning</span></li>
                <li>• The risk: becomes a <span className="text-red-600 font-semibold">cost problem</span></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 mb-4">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-bold">From the Tech Committee:</span> "Unlike a flat license fee, external API costs are <span className="font-bold text-orange-600">uncapped</span>. A single heavy research query involving large PDFs could cost dollars... across a university, tens of thousands of dollars in monthly consumption charges."
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg p-4">
            <p className="text-sm sm:text-base font-bold mb-2">This Is Why Governance Matters:</p>
            <p className="text-xs sm:text-sm">We're not just deciding which tools to allow. We're deciding <span className="font-bold">how knowledge exchange itself gets funded</span> in the era of AI. Faculty must be at that table — not just as users to be governed, but as partners shaping policy.</p>
          </div>
        </div>
      )
    },
    // Slide 9: The Key Insight - Bridge
    {
      content: (
        <div className="p-4 sm:p-8 min-h-full flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">What Faculty Bring: Pedagogical Solutions</h2>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 sm:p-6 border-2 border-red-200">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">💡</div>
            <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
              Context-Grounded AI &gt; Generic AI Output
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              IT can block tools. But only faculty can design assignments where AI only works if students <span className="font-bold text-red-600">genuinely engage with course materials</span>. This is pedagogical expertise IT doesn't have.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="bg-white rounded-lg p-2 sm:p-3 shadow">
                <span className="text-lg sm:text-xl">📚</span>
                <p className="font-semibold mt-1 text-xs sm:text-sm">Your Readings</p>
              </div>
              <div className="bg-white rounded-lg p-2 sm:p-3 shadow">
                <span className="text-lg sm:text-xl">🎯</span>
                <p className="font-semibold mt-1 text-xs sm:text-sm">Your Outcomes</p>
              </div>
              <div className="bg-white rounded-lg p-2 sm:p-3 shadow">
                <span className="text-lg sm:text-xl">📊</span>
                <p className="font-semibold mt-1 text-xs sm:text-sm">Your Data</p>
              </div>
              <div className="bg-white rounded-lg p-2 sm:p-3 shadow">
                <span className="text-lg sm:text-xl">🗣️</span>
                <p className="font-semibold mt-1 text-xs sm:text-sm">Your Lectures</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-bold">This is why faculty need to be at the governance table:</span> The solutions to AI challenges in education require pedagogical judgment, not just technical controls.
            </p>
          </div>
        </div>
      )
    },
    // Slide 10: Process Over Product
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">Process Over Product: A Bridge Between Perspectives</h2>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full inline-block align-middle px-4 sm:px-0">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 sm:p-3 text-left font-bold text-gray-700">Dimension</th>
                    <th className="p-2 sm:p-3 text-left font-bold text-orange-600">Product-Focused</th>
                    <th className="p-2 sm:p-3 text-left font-bold text-green-600">Process-Focused</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 sm:p-3 font-medium">Assessments</td>
                    <td className="p-2 sm:p-3">One big assignment</td>
                    <td className="p-2 sm:p-3">Multiple checkpoints</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 sm:p-3 font-medium">What's submitted</td>
                    <td className="p-2 sm:p-3">Final product only</td>
                    <td className="p-2 sm:p-3">Drafts + rationale + reflection</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 sm:p-3 font-medium">AI vulnerability</td>
                    <td className="p-2 sm:p-3 text-red-600 font-semibold">High</td>
                    <td className="p-2 sm:p-3 text-green-600 font-semibold">Much Lower</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-2 sm:p-3 font-medium">Data exposure risk</td>
                    <td className="p-2 sm:p-3 text-red-600">Students may upload sensitive work to AI</td>
                    <td className="p-2 sm:p-3 text-green-600">Less incentive to outsource to external AI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-500">
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-bold text-blue-700">Addresses IT's concern:</span> Less student data going to external AI services
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-bold text-purple-700">Addresses Faculty's goal:</span> AI can't fake genuine engagement with learning
              </p>
            </div>
          </div>
        </div>
      )
    },
    // Slide 11: Four Principles
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-3 sm:mb-4">Four Principles: What Good AI Policy Looks Like in Practice</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">These emerge from faculty expertise — the kind of thinking that must inform governance:</p>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start bg-red-50 rounded-lg p-2 sm:p-3">
              <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm">1</div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm">Ground in YOUR Course Materials</h3>
                <p className="text-xs text-gray-600">Require citation of specific readings, lectures, discussions — AI can't fake this</p>
              </div>
            </div>
            <div className="flex items-start bg-orange-50 rounded-lg p-2 sm:p-3">
              <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm">2</div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm">Make Outside Sources Visible</h3>
                <p className="text-xs text-gray-600">If AI or external sources are used, require explicit documentation</p>
              </div>
            </div>
            <div className="flex items-start bg-yellow-50 rounded-lg p-2 sm:p-3">
              <div className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm">3</div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm">Scaffold the Process</h3>
                <p className="text-xs text-gray-600">Break into stages: proposal → notes → draft → revision → reflection</p>
              </div>
            </div>
            <div className="flex items-start bg-green-50 rounded-lg p-2 sm:p-3">
              <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm">4</div>
              <div>
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm">Connect to Specific Outcomes</h3>
                <p className="text-xs text-gray-600">Each step maps to a learning outcome students can articulate</p>
              </div>
            </div>
          </div>
          <div className="mt-3 sm:mt-4 bg-purple-50 rounded-lg p-3 border-l-4 border-purple-500">
            <p className="text-xs sm:text-sm text-gray-700">
              <span className="font-bold">This is faculty work.</span> IT can't create these policies. But faculty solutions need IT support to implement. <span className="font-semibold text-purple-700">Partnership is required.</span>
            </p>
          </div>
        </div>
      )
    },
    // Slide 12: How UOES Can Help
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">UOES: Bridging the Gap</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4">We sit between IT and faculty — we understand both perspectives and can help you navigate this landscape:</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl mb-1">💬</div>
              <h3 className="font-bold text-red-700 mb-1 text-xs sm:text-sm">Consultations</h3>
              <p className="text-xs text-gray-700">Redesign assignments to reduce AI vulnerability while maintaining learning goals.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl mb-1">🎓</div>
              <h3 className="font-bold text-orange-700 mb-1 text-xs sm:text-sm">Workshops</h3>
              <p className="text-xs text-gray-700">Hands-on sessions to build your AI literacy and practical strategies.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl mb-1">📖</div>
              <h3 className="font-bold text-yellow-700 mb-1 text-xs sm:text-sm">Course Development</h3>
              <p className="text-xs text-gray-700">Building a new course? We integrate AI considerations from the start.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 sm:p-4">
              <div className="text-xl sm:text-2xl mb-1">🔬</div>
              <h3 className="font-bold text-green-700 mb-1 text-xs sm:text-sm">Pilots</h3>
              <p className="text-xs text-gray-700">Want to test a new AI tool? We help you experiment within institutional guidelines.</p>
            </div>
          </div>
          <div className="mt-4 bg-gray-100 rounded-lg p-3">
            <p className="text-xs sm:text-sm text-gray-700 text-center">
              <span className="font-bold">Upcoming:</span> AI as Accessibility Tool (Jan 23) • Beyond ChatGPT (Mar 6) • RU Online Conference (Mar 16)
            </p>
          </div>
        </div>
      )
    },
    // Slide 13: REVISED - The Common Ground & Shared Governance
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">What Both Groups Actually Share</h2>
          
          <div className="bg-green-50 rounded-lg p-4 mb-4 border-2 border-green-200">
            <h3 className="font-bold text-green-700 text-sm sm:text-base mb-3">Shared Skepticism About Current Tools</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-3">
              No one thinks AI tools as they exist now are all that great. Both groups see the limitations, the risks, the hype.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><span className="font-semibold">Faculty agency matters</span> — course-level decisions belong with instructors</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><span className="font-semibold">Training is essential</span> — literacy programs for informed use</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><span className="font-semibold">Security is real</span> — data exfiltration and privacy risks exist</span>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><span className="font-semibold">Costs are unpredictable</span> — metered access creates budget risk</span>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 mb-4">
            <h3 className="font-bold text-orange-700 text-sm sm:text-base mb-2">But They Don't See Each Other Clearly</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
              <div>
                <p className="font-semibold text-blue-700 mb-1">IT's view of faculty:</p>
                <p>Potential risk vectors who might accidentally expose data or incur costs</p>
              </div>
              <div>
                <p className="font-semibold text-purple-700 mb-1">Faculty's view of IT:</p>
                <p>Gatekeepers blocking tools needed for teaching and research</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3 italic">IT's concerns are warranted — they're asked to chase down issues with limited resources. But oversimplifying the faculty role misses why these tools matter for the university's core mission.</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-center">
            <p className="text-sm sm:text-base font-bold mb-2">The University's Mission Is Both Teaching AND Research</p>
            <p className="text-xs sm:text-sm">IT is critical for faculty because these new tools directly affect how we teach students and conduct research. We need each other.</p>
          </div>
        </div>
      )
    },
    // Slide 14: Why Your Voice Matters Now
    {
      content: (
        <div className="p-4 sm:p-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4 sm:mb-6">Why This Moment Is Different</h2>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-4 border-2 border-blue-200">
            <h3 className="font-bold text-blue-700 text-sm sm:text-base mb-2">📋 What Happens Next</h3>
            <p className="text-xs sm:text-sm text-gray-700">
              These reports will be submitted. The issues they raise will be resolved in <span className="font-bold">another phase</span> — one where these two groups will need to work together. But the critical issues are surfacing now.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-lg p-4 mb-4 border-l-4 border-red-500">
            <h3 className="font-bold text-red-700 text-sm sm:text-base mb-2">⚠️ This Is Not Like Recent Technology Adoptions</h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-2">
              IT is now being asked to <span className="font-bold">mediate access</span> to technologies that are:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-white rounded p-2 text-center">
                <span className="font-bold text-red-600">Necessary</span>
                <p className="text-gray-600">for teaching & research</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="font-bold text-orange-600">Metered</span>
                <p className="text-gray-600">every query costs money</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="font-bold text-yellow-600">New</span>
                <p className="text-gray-600">rapidly evolving</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <span className="font-bold text-purple-600">Risky</span>
                <p className="text-gray-600">real security concerns</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-4">
            <h3 className="text-base sm:text-lg font-bold mb-2">The Critical Issues to Overcome</h3>
            <ul className="text-xs sm:text-sm space-y-1">
              <li>• Who bears the <span className="font-bold">cost</span> when every query is metered?</li>
              <li>• How do we fund <span className="font-bold">faculty learning and experimentation</span>?</li>
              <li>• How do we avoid <span className="font-bold">"technology feudalism"</span> — where access depends on who can afford the tokens?</li>
              <li>• How do we ensure <span className="font-bold">shared governance</span>, not just governance of faculty by IT?</li>
            </ul>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Faculty voice is essential in the next phase. The policies being shaped now will affect how you teach for years to come.
            </p>
          </div>
        </div>
      )
    },
    // Slide 14: Contact
    {
      content: (
        <div className="p-4 sm:p-8 flex flex-col items-center justify-center min-h-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-6 sm:mb-8">Let's Talk</h2>
          <div className="bg-red-50 rounded-xl p-6 sm:p-8 w-full max-w-md text-center">
            <div className="bg-red-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl text-white">👤</span>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-gray-800">Rick Anderson</h3>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Director of Emerging Technology</p>
            <p className="text-xs sm:text-sm text-gray-500">University Online Education Services</p>
            <div className="mt-4 sm:mt-6">
              <p className="text-blue-600 font-semibold text-sm sm:text-base">rick.anderson@rutgers.edu</p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded inline-block">
              <span className="font-bold text-sm sm:text-base">RUTGERS UNIVERSITY</span>
            </div>
            <p className="text-gray-500 mt-2 text-xs sm:text-sm">Office of University Online Education Services</p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">Your voice matters. Let's make sure it's heard.</p>
        </div>
      )
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full max-w-5xl min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden relative flex flex-col">
          <div className="flex-1 overflow-auto">
            {slides[currentSlide].content}
          </div>
          
          {/* Slide Number */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-xs sm:text-sm text-gray-400 bg-white/80 px-2 py-1 rounded">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="sticky bottom-0 flex justify-center items-center gap-2 sm:gap-4 p-2 sm:p-4 bg-white shadow-lg border-t">
        <button 
          onClick={prevSlide}
          className="px-3 sm:px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <span>←</span>
          <span className="hidden sm:inline">Previous</span>
        </button>
        
        {/* Slide Indicators */}
        <div className="flex gap-1 max-w-[150px] sm:max-w-none overflow-hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                idx === currentSlide ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="px-3 sm:px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <span className="hidden sm:inline">Next</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Presentation />);
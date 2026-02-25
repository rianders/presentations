function Agenda() {
  const items = [
    {
      time: null,
      label: "Welcome",
      presenter: "Rick Anderson",
      sub: [],
    },
    {
      time: null,
      label: "Old Business",
      presenter: null,
      sub: [
        { text: "Summary of last meeting — presentations available (see email for links)" },
        { text: "Describing AI research ontology — updated", href: "https://ai-ontology-survey.pages.dev/" },
      ],
    },
    {
      time: null,
      label: "Round Robin: Current AI Projects",
      presenter: "Sonia Yaco",
      sub: [],
    },
    {
      time: null,
      label: "Rutgers AI Update",
      presenter: "Rick Anderson",
      presentation: "shell.html?p=20260225-aiatrutgers/uoes-ai-update",
      sub: [
        { text: "Policies and software availability" },
      ],
    },
    {
      time: null,
      label: "Presentation: AI Projects on Transcribing Scientific Notation",
      presenter: "Rick Anderson",
      presentation: "shell.html?p=20260225-EmergingTechCommunity/scientific-notation-presentation",
      sub: [],
    },
    {
      time: null,
      label: "Presentation: The Use of AI in Research Support",
      presenter: "Sonia Yaco",
      sub: [],
    },
    {
      time: null,
      label: "Discussion: How Can We Collaborate?",
      presenter: "Rick Anderson",
      sub: [],
    },
    {
      time: null,
      label: "Plans for Next Meeting",
      presenter: "Sonia Yaco",
      sub: [],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-start sm:items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">

        {/* Header */}
        <div className="bg-red-600 px-8 py-6">
          <div className="text-red-200 text-xs font-bold uppercase tracking-widest mb-1">
            Rutgers University · UOES Emerging Technology
          </div>
          <h1 className="text-white text-2xl sm:text-3xl font-black leading-tight">
            Emerging Technology Community
          </h1>
          <p className="text-red-100 text-sm mt-1 font-medium">February 25, 2026 · 1:00 – 3:00 pm</p>
        </div>

        {/* Agenda items */}
        <div className="divide-y divide-gray-100">
          {items.map((item, i) => (
            <div key={i} className="px-8 py-4">
              <div className="flex items-start gap-4">
                <span className="text-red-600 font-black text-sm w-5 flex-shrink-0 mt-0.5">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-gray-900 text-sm sm:text-base">{item.label}</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {item.presenter && (
                        <span className="text-xs text-gray-400 font-medium">{item.presenter}</span>
                      )}
                      {item.presentation && (
                        <a
                          href={item.presentation}
                          className="text-xs bg-red-600 text-white px-3 py-1 rounded-full font-bold hover:bg-red-700 transition-colors"
                        >
                          View →
                        </a>
                      )}
                    </div>
                  </div>
                  {item.sub.length > 0 && (
                    <ul className="mt-2 space-y-1.5">
                      {item.sub.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-red-400 flex-shrink-0 mt-0.5">▸</span>
                          {s.href ? (
                            <a href={s.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{s.text} ↗</a>
                          ) : (
                            <span>{s.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-gray-400">Office of University Online Education Services</span>
          <span className="text-xs text-gray-400">UOES EmTech · 2025–2026</span>
        </div>

      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Agenda />);

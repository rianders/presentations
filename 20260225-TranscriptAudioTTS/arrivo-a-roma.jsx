const { useState } = React;

const sections = [
  {
    id: "aeroporto",
    title: "All'Aeroporto",
    subtitle: "At the Airport",
    emoji: "✈️",
    color: "from-sky-900 to-slate-800",
    accent: "sky-400",
    vocab: [
      { it: "L'aereo atterra", en: "The plane lands" },
      { it: "Partenze", en: "Departures" },
      { it: "Arrivi", en: "Arrivals" },
      { it: "Controllo passaporti", en: "Passport control" },
      { it: "Ritiro bagagli", en: "Baggage claim" },
      { it: "Transiti", en: "Flight connections" },
      { it: "Uscita", en: "Exit" },
      { it: "Valigie / Bagagli", en: "Suitcases / Luggage" },
      { it: "Dogana", en: "Customs" },
    ],
    phrases: [
      { it: "Dov'è il ritiro bagagli?", en: "Where is the baggage claim?" },
      { it: "Dove posso prendere un taxi?", en: "Where can I get a taxi?" },
      { it: "Dove si prende lo shuttle per andare alla Stazione Termini?", en: "Where do I take the shuttle to Roma Termini?" },
    ],
  },
  {
    id: "taxi",
    title: "In Taxi",
    subtitle: "In the Taxi",
    emoji: "🚕",
    color: "from-amber-800 to-orange-900",
    accent: "amber-300",
    vocab: [
      { it: "Bus Shuttle", en: "Shuttle bus" },
      { it: "Stazione Termini", en: "Roma Termini (main train station)" },
      { it: "L'indirizzo", en: "The address" },
      { it: "Quanto le devo?", en: "How much do I owe you?" },
    ],
    phrases: [
      { it: "Mi può portare all'albergo…", en: "Can you take me to the hotel…" },
      { it: "Dovrei andare a questo indirizzo.", en: "I need to go to this address." },
      { it: "Quanto le devo?", en: "How much do I owe you?" },
      { it: "Grazie, arrivederci!", en: "Thank you, goodbye!" },
    ],
  },
  {
    id: "albergo",
    title: "In Albergo",
    subtitle: "At the Hotel",
    emoji: "🏨",
    color: "from-stone-700 to-amber-900",
    accent: "amber-400",
    vocab: [
      { it: "Albergo / Hotel", en: "Hotel" },
      { it: "Ostello", en: "Hostel" },
      { it: "Accoglienza / Ricezione", en: "Reception / Front desk" },
      { it: "Camera", en: "Room" },
      { it: "Camera matrimoniale", en: "Double room (queen/king)" },
      { it: "Camera singola", en: "Single room" },
      { it: "Camera doppia", en: "Twin room" },
      { it: "Servizio in camera", en: "Room service" },
      { it: "Prenotazione", en: "Reservation / Booking" },
    ],
    phrases: [
      { it: "Salve, sono…", en: "Hello, I am…" },
      { it: "Dovrebbe esserci una prenotazione a mio nome.", en: "There should be a reservation under my name." },
      { it: "Vorrei prenotare una camera singola/doppia.", en: "I'd like to book a single/double room." },
      { it: "Che servizi offre questo albergo?", en: "What services does this hotel offer?" },
      { it: "Quanto dista la stazione?", en: "How far is the train station?" },
      { it: "Qual è la fermata d'autobus più vicina?", en: "What is the nearest bus stop?" },
    ],
  },
  {
    id: "strada",
    title: "Per Strada",
    subtitle: "On the Street",
    emoji: "🗺️",
    color: "from-emerald-900 to-teal-900",
    accent: "emerald-300",
    vocab: [
      { it: "A sinistra", en: "Left" },
      { it: "A destra", en: "Right" },
      { it: "Diritto", en: "Straight ahead" },
      { it: "Circa 10 minuti a piedi", en: "About 10 minutes on foot" },
      { it: "Come ci si arriva?", en: "How do you get there?" },
    ],
    phrases: [
      { it: "Quanto dista Piazza San Pietro?", en: "How far is Piazza San Pietro?" },
      { it: "Circa 10 minuti a piedi.", en: "About 10 minutes on foot." },
      { it: "Come ci si arriva?", en: "How do you get there?" },
      { it: "Diritto per Via Cola di Rienzo, poi a sinistra in Piazza Risorgimento.", en: "Straight along Via Cola di Rienzo, then left at Piazza Risorgimento." },
    ],
  },
];

function FlashCard({ it, en }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="cursor-pointer select-none"
      style={{ perspective: "800px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          height: "80px",
        }}
      >
        {/* Front */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 px-4"
        >
          <span className="text-white font-semibold text-center text-sm tracking-wide">{it}</span>
        </div>
        {/* Back */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/25 border border-white/30 px-4"
        >
          <span className="text-white/90 text-center text-sm italic">{en}</span>
        </div>
      </div>
    </div>
  );
}

function PhraseRow({ it, en }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div
      className="border border-white/15 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-all"
      onClick={() => setRevealed(!revealed)}
    >
      <p className="text-white font-medium text-sm mb-1">{it}</p>
      <div
        style={{
          maxHeight: revealed ? "60px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p className="text-white/70 text-sm italic pt-1 border-t border-white/10">{en}</p>
      </div>
      {!revealed && (
        <p className="text-white/30 text-xs mt-1">tap to reveal translation</p>
      )}
    </div>
  );
}

function ArrivoARoma() {
  const [activeSection, setActiveSection] = useState(0);
  const [tab, setTab] = useState("vocab");
  const section = sections[activeSection];

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-900 via-stone-900 to-amber-950 px-6 py-12 text-center">
        {/* Decorative arch shape */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-t-full border-4 border-amber-300" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-48 rounded-t-full border-2 border-amber-300" />
        </div>
        <p className="text-amber-300/70 text-xs tracking-[0.3em] uppercase mb-2 font-light">Capitolo Uno · Chapter One</p>
        <h1
          className="text-5xl font-black tracking-tight mb-2"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Arrivo a Roma
        </h1>
        <p className="text-amber-200/60 text-sm tracking-wide">
          Benvenuti all'Aeroporto Leonardo Da Vinci–Fiumicino
        </p>
        <div className="mt-4 flex justify-center gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${i === activeSection ? "w-8 bg-amber-400" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
      </div>

      {/* Section Nav */}
      <div className="flex overflow-x-auto gap-2 px-4 py-4 bg-stone-900 border-b border-white/10 scrollbar-hide">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setActiveSection(i); setTab("vocab"); }}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === i
                ? "bg-amber-500 text-stone-900"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>{s.emoji}</span>
            <span>{s.title}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={`min-h-screen bg-gradient-to-b ${section.color} px-4 py-6`}>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-4xl">{section.emoji}</span>
            <div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
                {section.title}
              </h2>
              <p className="text-white/50 text-sm italic">{section.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-2xl mx-auto mb-5">
          <div className="flex gap-1 bg-black/30 rounded-xl p-1 w-fit">
            <button
              onClick={() => setTab("vocab")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === "vocab" ? "bg-white text-stone-900" : "text-white/60 hover:text-white"
              }`}
            >
              Vocabulary
            </button>
            <button
              onClick={() => setTab("phrases")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                tab === "phrases" ? "bg-white text-stone-900" : "text-white/60 hover:text-white"
              }`}
            >
              Frasi Utili
            </button>
          </div>
        </div>

        {/* Vocab Cards */}
        {tab === "vocab" && (
          <div className="max-w-2xl mx-auto">
            <p className="text-white/40 text-xs mb-3 text-center tracking-wide uppercase">
              Tap each card to reveal the English translation
            </p>
            <div className="grid grid-cols-2 gap-3">
              {section.vocab.map((v, i) => (
                <FlashCard key={i} it={v.it} en={v.en} />
              ))}
            </div>
          </div>
        )}

        {/* Phrases */}
        {tab === "phrases" && (
          <div className="max-w-2xl mx-auto">
            <p className="text-white/40 text-xs mb-3 text-center tracking-wide uppercase">
              Tap each phrase to reveal the English
            </p>
            <div className="flex flex-col gap-3">
              {section.phrases.map((p, i) => (
                <PhraseRow key={i} it={p.it} en={p.en} />
              ))}
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="max-w-2xl mx-auto mt-10 flex justify-between items-center">
          <button
            onClick={() => { setActiveSection(Math.max(0, activeSection - 1)); setTab("vocab"); }}
            disabled={activeSection === 0}
            className="px-5 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            ← Precedente
          </button>
          <span className="text-white/30 text-xs">{activeSection + 1} / {sections.length}</span>
          <button
            onClick={() => { setActiveSection(Math.min(sections.length - 1, activeSection + 1)); setTab("vocab"); }}
            disabled={activeSection === sections.length - 1}
            className="px-5 py-2 rounded-full bg-white/10 text-white/70 text-sm hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            Prossimo →
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-stone-950 px-6 py-6 text-center border-t border-white/5">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          Italiano · Livello Principiante · Open Source Textbook
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ArrivoARoma />);

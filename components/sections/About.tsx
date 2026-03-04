import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  "Serviciu complet gratuit pentru toți clienții noștri",
  "Expertiză în credite personale și ipotecare",
  "Suport pentru clienți cu istorii de credit dificile",
  "Confidențialitate totală și respect pentru datele tale",
  "Parteneri oficiali cu top 5 bănci din România",
];

const cards = [
  { icon: "🏆", num: "8+", label: "Ani de experiență în brokeraj" },
  { icon: "👥", num: "1.200+", label: "Clienți ajutați cu succes" },
  { icon: "💰", num: "0 RON", label: "Cost direct pentru client" },
  { icon: "⭐", num: "4.9/5", label: "Rating mediu clienți" },
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gold/7 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-forest/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <FadeIn>
            <SectionLabel light>Despre CS Credit Advisor</SectionLabel>
            <h2 className="font-playfair font-bold text-white text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] mb-5">
              Misiunea Noastră:<br />Acces Egal la Creditare
            </h2>
            <p className="text-white/65 text-base leading-[1.75] mb-4">
              CS Credit Advisor a fost fondată cu o convingere simplă: fiecare persoană merită
              acces la o finanțare corectă și transparentă, indiferent de trecutul financiar. Nu
              judecăm — găsim soluții.
            </p>
            <p className="text-white/65 text-base leading-[1.75] mb-8">
              Ca broker autorizat, lucrăm în numele tău, nu al băncilor. Negociem condițiile cele
              mai avantajoase și te reprezentăm cu profesionalism în fața instituțiilor financiare
              partenere.
            </p>
            <ul className="space-y-3">
              {values.map((v, i) => (
                <li key={i} className="flex items-center gap-3 text-[14px] text-white/80">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Stats grid */}
          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 cursor-default"
                >
                  <span className="text-3xl block mb-3">{c.icon}</span>
                  <h5 className="font-playfair font-bold text-gold text-2xl sm:text-3xl mb-1.5">
                    {c.num}
                  </h5>
                  <p className="text-[12px] text-white/55 leading-tight">{c.label}</p>
                </div>
              ))}
            </div>

            {/* Free service callout */}
            <div className="mt-5 bg-forest/60 border border-gold/20 rounded-2xl p-5 flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">🎁</span>
              <div>
                <p className="font-semibold text-gold-light text-sm mb-1">
                  Serviciu 100% Gratuit
                </p>
                <p className="text-white/55 text-[13px] leading-relaxed">
                  Nu există niciun cost pentru client. CS Credit Advisor este remunerat exclusiv
                  din comisioanele plătite de bănci.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    icon: "🎯",
    title: "Soluții Personalizate",
    desc: "Analizăm profilul tău financiar și identificăm oferta optimă din rețeaua celor 5 bănci partenere.",
  },
  {
    icon: "🛡️",
    title: "Suport Istorii Dificile",
    desc: "Nu te descurajăm dacă ai înregistrări negative — cunoaștem soluțiile chiar și pentru situații complexe.",
  },
  {
    icon: "⚡",
    title: "Comunicare Rapidă",
    desc: "Fără birocrație inutilă. Îți explicăm clar condițiile și pașii următori de la prima consultație.",
  },
  {
    icon: "🏦",
    title: "Top 5 Bănci Partenere",
    desc: "Acces direct la BCR, BRD, Banca Transilvania, ING și Raiffeisen — cele mai competitive dobânzi.",
  },
  {
    icon: "🔒",
    title: "Confidențialitate Totală",
    desc: "Datele tale sunt protejate conform GDPR și nu sunt transmise niciodată fără acordul tău explicit.",
  },
];

const highlight = {
  icon: "🎁",
  title: "Serviciu 100% Gratuit",
  desc: "Nu plătești niciun comision. CS Credit Advisor este remunerat exclusiv de băncile partenere, nu de tine.",
};

export default function About() {
  return (
    <section id="about" className="bg-navy py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-gold/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-navy-light/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center">
            <SectionLabel light center>De ce CS Credit Advisor</SectionLabel>
          </div>
          <h2 className="font-playfair font-bold text-white text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] mb-4">
            Expertiza Noastră,<br />
            <em className="text-gold italic">În Serviciul Tău</em>
          </h2>
          <p className="text-white/60 text-base sm:text-[1.05rem] leading-[1.75] max-w-xl mx-auto">
            Broker autorizat de credite cu peste 8 ani de experiență. Lucrăm
            în numele tău, nu al băncilor.
          </p>
        </FadeIn>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-navy-light/60 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-navy-light border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:border-gold/30 transition-colors">
                  {f.icon}
                </div>
                <h4 className="font-playfair font-bold text-white text-[1rem] mb-2">
                  {f.title}
                </h4>
                <p className="text-[13.5px] text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}

          {/* Highlight card */}
          <FadeIn delay={features.length * 60}>
            <div className="h-full bg-gradient-to-br from-gold to-gold-light rounded-2xl p-6 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-navy/20 flex items-center justify-center text-2xl mb-4">
                {highlight.icon}
              </div>
              <h4 className="font-playfair font-bold text-navy text-[1rem] mb-2">
                {highlight.title}
              </h4>
              <p className="text-[13.5px] text-navy/70 leading-relaxed">{highlight.desc}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

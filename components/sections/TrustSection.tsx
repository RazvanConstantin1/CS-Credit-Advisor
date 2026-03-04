import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const benefits = [
  {
    icon: "🎯",
    title: "Soluții Personalizate de Creditare",
    desc: "Analizăm profilul tău financiar în detaliu și identificăm oferta cea mai avantajoasă din portofoliul celor 5 bănci partenere.",
  },
  {
    icon: "🛡️",
    title: "Suport pentru Istorii de Credit Dificile",
    desc: "Nu te descurajăm dacă ai înregistrări negative sau un scoring redus — cunoaștem soluțiile potrivite chiar și pentru situații complexe.",
  },
  {
    icon: "⚡",
    title: "Comunicare Rapidă și Transparentă",
    desc: "Fără birocrație inutilă. Îți explicăm clar condițiile, documentele necesare și pașii următori de la prima consultație.",
  },
  {
    icon: "🏦",
    title: "Parteneriate cu Top 5 Bănci din România",
    desc: "Colaborăm direct cu BCR, BRD, Banca Transilvania, ING și Raiffeisen — acces la cele mai competitive dobânzi și condiții.",
  },
];

const stats = [
  { num: "1.200+", label: "Clienți mulțumiți" },
  { num: "94%", label: "Rată de aprobare" },
  { num: "5", label: "Bănci partenere" },
  { num: "0 RON", label: "Cost pentru client" },
];

const badges = [
  { dot: true, label: "Broker Autorizat" },
  { dot: true, label: "GDPR Conform" },
  { dot: true, label: "Serviciu Gratuit" },
];

const banks = [
  { abbr: "BCR", full: "Banca Comercială Română" },
  { abbr: "BRD", full: "BRD – Groupe Société Générale" },
  { abbr: "BT", full: "Banca Transilvania" },
  { abbr: "ING", full: "ING Bank România" },
  { abbr: "RFB", full: "Raiffeisen Bank" },
];

export default function TrustSection() {
  return (
    <section id="trust" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <SectionLabel>De Ce Să Alegi CS Credit Advisor</SectionLabel>
          <h2 className="font-playfair font-bold text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] text-navy mb-4">
            Expertiza Noastră,<br />
            În Serviciul Tău
          </h2>
          <p className="text-muted text-base sm:text-[1.05rem] leading-[1.75] max-w-xl">
            Îți oferim accesul la cele mai bune soluții de creditare, personalizate în funcție de
            situația ta — fără costuri ascunse, fără surprize.
          </p>
        </FadeIn>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Benefits list */}
          <FadeIn className="space-y-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex gap-4 items-center p-5 rounded-2xl border-[1.5px] border-[#eaecf0] bg-[#fafbfc] hover:border-gold hover:bg-gold-pale hover:translate-x-1 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-xl flex-shrink-0">
                  {b.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold text-navy mb-1">{b.title}</h4>
                  <p className="text-[13.5px] text-muted leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </FadeIn>

          {/* Stats + badges + banks */}
          <FadeIn delay={150} className="space-y-5">
            {/* Stats card */}
            <div className="bg-navy rounded-2xl p-7 relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-32 h-32 bg-gold/8 rounded-full" />
              <div className="grid grid-cols-2 gap-5 mb-6">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <span className="font-playfair text-gold text-2xl sm:text-3xl font-bold block leading-none mb-1">
                      {s.num}
                    </span>
                    <span className="text-[12px] text-white/60">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-10">
                {badges.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-md px-3 py-1.5 text-[11.5px] text-white/80 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Bank logos */}
            <div className="bg-white border-[1.5px] border-gold/25 rounded-2xl p-6">
              <h4 className="text-[12px] font-semibold uppercase tracking-[1px] text-muted mb-4">
                Bănci Partenere Oficiale
              </h4>
              <div className="grid grid-cols-5 gap-2">
                {banks.map((b) => (
                  <div
                    key={b.abbr}
                    className="group bg-off-white border border-[#e8eaed] rounded-lg py-3 px-1 flex flex-col items-center gap-1.5 hover:border-gold hover:bg-gold-pale transition-all duration-200 cursor-default"
                    title={b.full}
                  >
                    <span className="text-lg">🏛️</span>
                    <span className="text-[11px] font-bold text-navy">{b.abbr}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

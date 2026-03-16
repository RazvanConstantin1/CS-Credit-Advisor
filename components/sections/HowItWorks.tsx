import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "1",
    icon: "📋",
    title: "Completezi Formularul",
    desc: "Completezi formularul de pe această pagină cu informații de bază. Durează sub 2 minute. 100% gratuit.",
  },
  {
    num: "2",
    icon: "🤝",
    title: "Consultație Gratuită",
    desc: "Un specialist CS Credit Advisor te contactează și discutați în detaliu nevoile și situația ta financiară.",
  },
  {
    num: "3",
    icon: "🔍",
    title: "Analiză și Ofertă",
    desc: "Identificăm cele mai bune oferte din rețeaua noastră de bănci partenere și îți prezentăm opțiunile clar și transparent.",
  },
  {
    num: "4",
    icon: "✅",
    title: "Aprobare și Finalizare",
    desc: "Te însoțim pas cu pas în procesul de aprobare și semnare — până când banii ajung în contul tău.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-off-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center">
          <div className="flex justify-center">
            <SectionLabel center>Procesul Simplu</SectionLabel>
          </div>
          <h2 className="font-playfair font-bold text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] text-navy mb-4">
            4 Pași Simpli spre
            <br />
            Creditul Tău
          </h2>
          <p className="text-muted text-base sm:text-[1.05rem] leading-[1.75] max-w-lg mx-auto">
            De la prima completare a formularului până la aprobarea creditului —
            totul este simplu și transparent.
          </p>
        </FadeIn>

        {/* Mobile: vertical stepper */}
        <div className="mt-12 flex flex-col gap-0 sm:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              {/* Connector column */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-playfair font-bold text-navy text-base shadow-[0_4px_16px_rgba(201,168,76,0.35)] flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 min-h-[32px] bg-gradient-to-b from-gold/60 to-gold/10 my-1" />
                )}
              </div>
              {/* Card */}
              <div className="bg-white text-center border-[1.5px] border-[#eaecf0] rounded-2xl p-5 mb-4 flex-1 hover:border-gold hover:shadow-card-hover transition-all duration-300">
                <div className="text-2xl mb-2">{step.icon}</div>
                <h4 className="font-playfair font-bold text-navy text-[1rem] mb-1.5">
                  {step.title}
                </h4>
                <p className="text-[13.5px] text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop: grid with horizontal connector */}
        <FadeIn>
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 relative">
            {/* Horizontal line connector (desktop only) */}
            <div className="hidden lg:block absolute top-[38px] left-[calc(12.5%+26px)] right-[calc(12.5%+26px)] h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold z-0" />

            {steps.map((step, i) => (
              <div
                key={i}
                className="group bg-white border-[1.5px] border-[#eaecf0] rounded-2xl p-7 text-center relative z-10 hover:border-gold hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-playfair font-bold text-navy text-xl mx-auto mb-5 shadow-[0_4px_16px_rgba(201,168,76,0.35)]">
                  {step.num}
                </div>
                <div className="text-[28px] mb-3">{step.icon}</div>
                <h4 className="font-playfair font-bold text-navy text-[1rem] mb-2">
                  {step.title}
                </h4>
                <p className="text-[13.5px] text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

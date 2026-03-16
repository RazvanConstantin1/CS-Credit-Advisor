import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import LeadForm from "@/components/ui/LeadForm";

const promises = [
  "Consultație personalizată 100% gratuită",
  "Nicio interogare la Biroul de Credit fără acordul tău",
  "Acces la ofertele celor mai mari 5 bănci din România",
  "Suport dedicat chiar și pentru istorii de credit dificile",
  "Răspuns în maxim 24 de ore lucrătoare",
];

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-navy py-20 sm:py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(30,53,144,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Content */}
          <FadeIn>
            <SectionLabel light>Fă Primul Pas Azi</SectionLabel>
            <h2 className="font-playfair font-bold text-white text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] mb-5">
              Creditul Tău
              <br />
              Te Așteaptă
            </h2>
            <p className="text-white/65 text-base leading-[1.75] mb-8">
              Nu lăsa situația financiară să te oprească. Indiferent de
              istoricul tău de credit, avem o soluție pentru tine — și totul
              este complet gratuit.
            </p>
            <ul className="space-y-3.5">
              {promises.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14px] text-white/80"
                >
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy text-[11px] font-bold flex-shrink-0">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Social proof strip */}
            <div className="mt-10 ml-6 flex flex-wrap gap-6">
              {[
                { num: "1.200+", label: "Clienți" },
                { num: "94%", label: "Aprobare" },
                { num: "0 RON", label: "Cost" },
                { num: "24h", label: "Răspuns" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-playfair font-bold text-gold text-xl block">
                    {s.num}
                  </span>
                  <span className="text-white/45 text-[11px] uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={150}>
            <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="font-playfair font-bold text-white text-xl text-center mb-1">
                Solicită Acum
              </p>
              <p className="text-white/50 text-[13px] text-center mb-6">
                Completează — te sunăm noi!
              </p>
              <LeadForm formId="cta" dark compact={false} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

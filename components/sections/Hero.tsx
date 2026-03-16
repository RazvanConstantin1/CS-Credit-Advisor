import LeadForm from "@/components/ui/LeadForm";

const banks = ["Bănci de Top", "Dobânzi Competitive", "Oferte Actualizate", "Acces Direct", "Negociere Preferențială"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-navy overflow-hidden flex items-stretch"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid-bg" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(30,53,144,0.5) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 85% 20%, rgba(201,168,76,0.12) 0%, transparent 60%), linear-gradient(160deg, #0d2060 0%, #081545 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 pt-28 sm:pt-28 lg:pt-20 flex flex-col lg:grid lg:grid-cols-[1fr_480px] lg:gap-16 xl:gap-20 items-start lg:items-center min-h-screen">

        {/* ── MOBILE: Form first (above headline) ── */}
        <div className="lg:hidden w-full mb-8 animate-fade-up">
          <MobileFormCard />
        </div>

        {/* ── LEFT: Content ── */}
        <div className="animate-fade-up">
          {/* Free badge */}
          <div className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full text-[11px] font-semibold tracking-[1.5px] uppercase mb-7">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse2" />
            Serviciu 100% Gratuit pentru Clienți
          </div>

          {/* Headline */}
          <h1 className="font-playfair font-bold text-white leading-[1.15] tracking-[-0.5px] text-[2.2rem] sm:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.6rem] mb-6">
            Creditul perfect,<br />
            <em className="text-gold italic">găsit rapid pentru tine</em>
          </h1>

          {/* Sub */}
          <p className="text-white/70 text-base sm:text-lg leading-[1.75] mb-8 max-w-lg">
            Fie că ai nevoie de un credit de nevoi personale sau ipotecar, echipa CS Credit
            Advisor compară ofertele celor mai mari bănci din România și îți negociază
            cele mai bune condiții — rapid, transparent și fără costuri.
          </p>

          {/* Free info card */}
          <div className="flex items-start gap-3.5 bg-navy-light/70 border border-gold/25 rounded-xl px-4 py-4 mb-8 max-w-lg">
            <span className="text-2xl flex-shrink-0 mt-0.5">🎁</span>
            <p className="text-sm text-white/85 leading-relaxed">
              <strong className="text-gold-light">Consultație și intermediere 100% GRATUITĂ.</strong>
              <br />
              Nu plătești nimic — suntem remunerați exclusiv de bănci.
            </p>
          </div>

          {/* Banks */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] text-white/45 uppercase tracking-widest whitespace-nowrap">
              Parteneri cu:
            </span>
            <div className="flex flex-wrap gap-2">
              {banks.map((b) => (
                <span
                  key={b}
                  className="bg-white/7 border border-white/12 text-white/70 px-2.5 py-1 rounded text-[11px] font-semibold tracking-[0.4px]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form (desktop only) ── */}
        <div className="hidden lg:block animate-fade-up-delay self-center">
          <DesktopFormCard />
        </div>
      </div>
    </section>
  );
}

function DesktopFormCard() {
  return (
    <div className="bg-white rounded-2xl p-8 xl:p-9 shadow-glass border border-gold/15 relative overflow-hidden">
      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <p className="font-playfair font-bold text-navy text-xl text-center mb-1">
        Solicită Consultația Ta Gratuită
      </p>
      <p className="text-muted text-[13px] text-center mb-6">
        Completează formularul — te contactăm în maxim 24h
      </p>
      <LeadForm formId="hero-desktop" />
    </div>
  );
}

function MobileFormCard() {
  return (
    <div className="bg-white rounded-2xl px-5 py-7 shadow-glass border border-gold/15 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
      <p className="font-playfair font-bold text-navy text-lg text-center mb-1">
        Solicită Consultația Gratuită
      </p>
      <p className="text-muted text-[12px] text-center mb-5">
        Te contactăm în maxim 24h
      </p>
      <LeadForm formId="hero-mobile" compact />
    </div>
  );
}

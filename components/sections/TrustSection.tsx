import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { num: "800+", label: "Clienți Mulțumiți" },
  { num: "94%", label: "Rată de Aprobare" },
  { num: "0 RON", label: "Cost pentru Tine" },
  { num: "8+", label: "Ani Experiență" },
];

const badges = ["Broker Autorizat", "GDPR Conform", "Serviciu Gratuit", "Multiple Bănci Partenere"];

export default function TrustSection() {
  return (
    <section className="bg-off-white border-b border-[#e8e3d8] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="flex flex-col gap-6">
            {/* Stats — un rând */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-16">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <span className="font-playfair font-bold text-navy text-2xl sm:text-3xl block leading-none mb-1">
                    {s.num}
                  </span>
                  <span className="text-[11.5px] text-muted uppercase tracking-[0.8px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="border-t border-[#e8e3d8]" />

            {/* Badges — rândul de dedesubt */}
            <div className="flex flex-wrap justify-center gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 bg-white border border-gold/25 rounded-full px-3 py-1.5 text-[11px] font-semibold text-navy tracking-[0.3px]"
                >
                  <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

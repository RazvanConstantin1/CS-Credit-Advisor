"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { AFFILIATE_LINKS } from "@/constants/affiliateLinks";

/* ─────────────────────────────────────────
   Date IFN-uri
───────────────────────────────────────── */
const ifnList = [
  {
    key: "CreditPrime",
    title: "CreditPrime",
    tagline: "Finanțare rapidă, chiar și cu istoric negativ",
    badge: "✅ Recomandat",
    badgeColor: "green" as const,
    stars: 4,
    description:
      "Soluție de finanțare 100% online, accesibilă inclusiv clienților cu un istoric de credit mai puțin favorabil. Procesul de aprobare este rapid, fără birocrație și fără drum la bancă.",
    table: {
      sumaMax: "15.000 lei",
      perioada: "până la 24 luni",
      venitMin: "1.000 lei",
      birouCredit: "Acceptă și negativ",
    },
    benefits: [
      "Fără garanții imobiliare",
      "100% online — fără deplasări",
      "Dobândă 0% primele 30 zile (clienți noi)",
      "Aprobare inclusiv sâmbătă și duminică",
      "Decizie în câteva ore de la aplicare",
    ],
    drawbacks: [
      "Dobânda poate fi mai mare față de credite bancare",
      "Suma maximă limitată la 15.000 lei",
    ],
    ctaLabel: "Aplică la CreditPrime →",
    href: AFFILIATE_LINKS.creditPrime,
    disclaimer: "*Serviciu oferit de CreditPrime, independent de CS Credit Advisor",
  },
  {
    key: "Axi-card",
    title: "Axi-card",
    tagline: "Card de credit flexibil — plătești doar ce folosești",
    badge: "💳 Card flexibil",
    badgeColor: "blue" as const,
    stars: 4,
    description:
      "Card de credit cu limită de până la 4.000 lei, ideal pentru cheltuieli neașteptate sau achiziții planificate. Dobânda se calculează doar pentru suma efectiv utilizată.",
    table: {
      sumaMax: "4.000 lei",
      perioada: "2–5 ani",
      venitMin: "Fără adeverință",
      birouCredit: "Condiții flexibile",
    },
    benefits: [
      "Fără adeverință de venit",
      "Aprobare rapidă online",
      "Plătești dobândă doar pe suma utilizată",
      "Flexibilitate totală la rambursare",
      "Refolosești limita pe măsură ce rambursezi",
    ],
    drawbacks: [
      "Limită maximă de 4.000 lei",
      "Dobânzi specifice produselor de tip revolving",
    ],
    ctaLabel: "Aplică la Axi-card →",
    href: AFFILIATE_LINKS.axiCard,
    disclaimer: "*Serviciu oferit de Axi-card, independent de CS Credit Advisor",
  },
];

const faqItems = [
  {
    q: "IFN-urile sunt sigure și reglementate?",
    a: "Da. Instituțiile Financiare Nebancare (IFN) din România funcționează sub supravegherea Băncii Naționale a României (BNR) și trebuie să respecte legislația privind creditul de consum. Verifică întotdeauna dacă IFN-ul este înscris în Registrul BNR.",
  },
  {
    q: "Cât costă un credit IFN față de unul bancar?",
    a: "Dobânzile la IFN-uri sunt în general mai mari față de băncile tradiționale, compensând riscul mai ridicat pe care îl acceptă. Avantajul este accesibilitatea — aprobarea este mai rapidă și criteriile mai flexibile. Compară DAE (Dobânda Anuală Efectivă) înainte de a semna.",
  },
  {
    q: "Ce acte sunt necesare pentru un credit IFN?",
    a: "De obicei, suficient cu un act de identitate valabil și un număr de telefon. Unele IFN-uri cer și o copie după extras de cont sau dovada venitului, dar procesul este mult simplificat față de o bancă.",
  },
  {
    q: "Pot lua un credit IFN dacă am fost refuzat de bancă?",
    a: "Da, acesta este tocmai avantajul principal al IFN-urilor. Ele acceptă deseori și clienți cu întârzieri istorice la plată, grad de îndatorare mai ridicat sau vechime mai mică la locul de muncă.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-gold" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[14px] text-navy pr-4">{q}</span>
        <span className="text-gold font-bold text-[18px] flex-shrink-0 leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white">
          <p className="text-[13px] text-charcoal leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ParteneriIFNPage() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq?.("track", "ViewContent", {
      content_name: "IFN Partners Page",
      content_category: "Financial Services",
    });
  }, []);

  const handleAffiliateClick = (ifnKey: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).fbq?.("track", "Lead", {
      content_name: ifnKey,
      content_category: "IFN Affiliate",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag?.("event", "affiliate_click", {
      affiliate_name: ifnKey,
      page: "parteneri-ifn",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      <Header />

      <main className="flex-1 pt-[70px] sm:pt-[78px]">

        {/* ── Hero ── */}
        <section className="bg-navy py-14 sm:py-20 px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
            <span className="text-[11px] font-semibold tracking-[2px] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-full">
              Soluții Alternative
            </span>
            <h1 className="font-playfair text-[28px] sm:text-[38px] font-bold text-white leading-tight">
              Soluții alternative de finanțare
            </h1>
            <p className="text-[15px] sm:text-[16px] text-white/70 leading-relaxed max-w-xl">
              Nu te califici la bancă? Iată cele mai bune IFN-uri recomandate de
              CS Credit Advisor — aprobate rapid, online, fără birocrație.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col gap-14">

          {/* ── Ce este un IFN? ── */}
          <section className="bg-white rounded-2xl border border-gold/20 px-6 sm:px-10 py-8 flex flex-col gap-4">
            <h2 className="font-playfair text-[22px] font-bold text-navy">
              Ce este un IFN?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-2xl">🏦</span>
                <h3 className="font-semibold text-[14px] text-navy">Definiție</h3>
                <p className="text-[13px] text-charcoal leading-relaxed">
                  O Instituție Financiară Nebancară (IFN) oferă credite, dar nu
                  acceptă depozite. Funcționează sub supravegherea BNR și este
                  reglementată legal.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">⚡</span>
                <h3 className="font-semibold text-[14px] text-navy">
                  Diferența față de bancă
                </h3>
                <p className="text-[13px] text-charcoal leading-relaxed">
                  IFN-urile sunt mai flexibile la criterii de eligibilitate,
                  dar au dobânzi mai mari. Aprobările sunt mult mai rapide —
                  deseori în aceeași zi.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl">✅</span>
                <h3 className="font-semibold text-[14px] text-navy">
                  Când să alegi un IFN
                </h3>
                <p className="text-[13px] text-charcoal leading-relaxed">
                  Când ai nevoie urgentă de lichiditate, nu te califici la
                  bancă sau vrei un proces fără birocrație și deplasări.
                </p>
              </div>
            </div>
          </section>

          {/* ── Grid IFN-uri ── */}
          <section className="flex flex-col gap-6">
            <h2 className="font-playfair text-[24px] sm:text-[28px] font-bold text-navy text-center">
              Parteneri IFN recomandați
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ifnList.map((ifn) => {
                const badgeClasses =
                  ifn.badgeColor === "green"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200";

                return (
                  <div
                    key={ifn.key}
                    className="bg-white rounded-2xl border border-gold/25 shadow-sm hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
                  >
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      {/* Header card */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span
                            className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide mb-2 ${badgeClasses}`}
                          >
                            {ifn.badge}
                          </span>
                          <h3 className="font-playfair text-[22px] font-bold text-navy">
                            {ifn.title}
                          </h3>
                          <p className="text-[12px] text-muted mt-0.5">{ifn.tagline}</p>
                        </div>
                        <Stars count={ifn.stars} />
                      </div>

                      <p className="text-[13px] text-charcoal leading-relaxed">
                        {ifn.description}
                      </p>

                      {/* Tabel condiții */}
                      <div className="rounded-xl border border-gray-100 overflow-hidden">
                        <table className="w-full text-[12px]">
                          <tbody>
                            {[
                              ["Sumă maximă", ifn.table.sumaMax],
                              ["Perioadă", ifn.table.perioada],
                              ["Venit minim", ifn.table.venitMin],
                              ["Birou Credit", ifn.table.birouCredit],
                            ].map(([label, value]) => (
                              <tr key={label} className="border-b border-gray-100 last:border-0">
                                <td className="px-3 py-2 text-muted font-medium bg-gray-50 w-[45%]">
                                  {label}
                                </td>
                                <td className="px-3 py-2 text-navy font-semibold">
                                  {value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Avantaje */}
                      <div>
                        <p className="text-[11px] font-semibold text-charcoal uppercase tracking-wider mb-2">
                          Avantaje
                        </p>
                        <ul className="space-y-1.5">
                          {ifn.benefits.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-[13px] text-charcoal"
                            >
                              <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">
                                ✓
                              </span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dezavantaje */}
                      <div>
                        <p className="text-[11px] font-semibold text-charcoal uppercase tracking-wider mb-2">
                          De știut
                        </p>
                        <ul className="space-y-1.5">
                          {ifn.drawbacks.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-[13px] text-charcoal"
                            >
                              <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">
                                !
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="px-6 pb-6 flex flex-col gap-2">
                      <a
                        href={ifn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleAffiliateClick(ifn.key)}
                        className="block text-center btn-gold py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm hover:opacity-90 transition-opacity"
                      >
                        {ifn.ctaLabel}
                      </a>
                      <p className="text-[11px] text-muted text-center leading-snug">
                        {ifn.disclaimer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="flex flex-col gap-5">
            <h2 className="font-playfair text-[24px] font-bold text-navy text-center">
              Întrebări frecvente despre IFN-uri
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* ── Disclaimer afiliere ── */}
          <section className="bg-white border border-gray-200 rounded-xl px-5 py-4">
            <p className="text-[12px] text-muted leading-relaxed text-center">
              CS Credit Advisor prezintă aceste produse ca informație generală.
              Linkurile de mai sus sunt linkuri de afiliere — primim un comision dacă
              aplici și ești aprobat, fără niciun cost suplimentar pentru tine.
              CS Credit Advisor nu este responsabil pentru deciziile de creditare ale
              IFN-urilor partenere.
            </p>
          </section>

          {/* ── CTA spre brokeraj ── */}
          <section className="bg-navy rounded-2xl px-6 sm:px-10 py-10 text-center flex flex-col items-center gap-4">
            <h2 className="font-playfair text-[22px] sm:text-[26px] font-bold text-white">
              Totuși vrei să încerci o bancă?
            </h2>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-md">
              Dacă situația ta s-a îmbunătățit sau dorești o a doua opinie, consultanții
              noștri analizează gratuit profilul tău și îți spun exact la ce bancă ai
              șanse de aprobare.
            </p>
            <Link
              href="/#hero"
              className="btn-gold mt-2 px-8 py-3.5 rounded-xl text-navy font-bold text-[15px] tracking-[0.3px] font-dm hover:opacity-90 transition-opacity"
            >
              Contactează-ne gratuit →
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

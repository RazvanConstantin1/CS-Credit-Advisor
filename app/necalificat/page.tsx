"use client";

import { useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { AFFILIATE_LINKS } from "@/constants/affiliateLinks";

const benefits = {
  creditPrime: [
    "Fără garanții imobiliare",
    "100% online, fără drumuri la bancă",
    "Dobândă 0% primele 30 zile (clienți noi)",
    "Aprobare inclusiv în weekend",
  ],
  axiCard: [
    "Fără adeverință de venit",
    "Aprobare rapidă online",
    "Flexibilitate totală la utilizare",
    "Rambursare în 2–5 ani",
  ],
  viaConto: [
    "Aprobare în ~15 minute",
    "Dobândă 0% primele 30 zile (clienți noi)",
    "Plătești doar suma utilizată",
    "Linie de credit refolosibilă",
  ],
  horaCredit: [
    "Dobândă 0% primele 7 zile (clienți noi)",
    "Banii pe card în 30 de minute",
    "Fără garanții imobiliare",
    "Proces 100% online",
  ],
};

function IFNCard({
  title,
  badge,
  badgeColor,
  description,
  benefitsList,
  ctaLabel,
  href,
  disclaimer,
  ifnKey,
  logo,
  logoWidth,
  logoHeight,
}: {
  title: string;
  badge: string;
  badgeColor: "green" | "blue";
  description: string;
  benefitsList: string[];
  ctaLabel: string;
  href: string;
  disclaimer: string;
  ifnKey: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}) {
  const handleClick = () => {
    (window as any).fbq?.("track", "Lead", {
      content_name: ifnKey,
      content_category: "IFN Affiliate",
    });
    (window as any).gtag?.("event", "affiliate_click", {
      affiliate_name: ifnKey,
      page: "necalificat",
    });
  };

  const badgeClasses =
    badgeColor === "green"
      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
      : "bg-blue-50 text-blue-700 border border-blue-200";

  return (
    <div className="bg-white rounded-2xl border border-gold/25 shadow-sm hover:shadow-card-hover transition-shadow duration-300 flex flex-col p-6 gap-5">
      {/* Badge */}
      <span className={`self-start text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide ${badgeClasses}`}>
        {badge}
      </span>

      {/* Logo */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`Aplică la ${title}`}
        onClick={handleClick}
        className="block"
      >
        <Image
          src={logo}
          alt={`${title} logo`}
          width={logoWidth}
          height={logoHeight}
          className="h-9 w-auto object-contain"
          unoptimized
        />
      </a>

      {/* Description */}
      <p className="text-[14px] text-charcoal leading-relaxed">{description}</p>

      {/* Benefits */}
      <ul className="space-y-2">
        {benefitsList.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[13px] text-charcoal">
            <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-2 flex flex-col gap-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="block text-center btn-gold py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm transition-opacity hover:opacity-90"
        >
          {ctaLabel}
        </a>
        <p className="text-[11px] text-muted text-center leading-snug">{disclaimer}</p>
      </div>
    </div>
  );
}

function NecalificatContent() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const isLocalityReject = reason === "locality";
  const isNeangajat = reason === "neangajat";

  useEffect(() => {
    (window as any).fbq?.("track", "ViewContent", {
      content_name: isLocalityReject ? "Disqualified — Locality" : isNeangajat ? "Disqualified — No Income" : "Disqualified — IFN Redirect",
      content_category: "Financial Services",
    });
  }, [isLocalityReject]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      {/* Header minimal */}
      <header className="bg-navy border-b border-gold/20 py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex-shrink-0 rounded-xl ring-2 ring-gold/60 shadow-[0_0_14px_rgba(201,168,76,0.3)] overflow-hidden">
              <Image src="/logo.jpg" alt="CS Credit Advisor" width={44} height={44} className="block" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair font-bold text-[15px] sm:text-[17px] text-white">
                CS Credit Advisor
              </span>
              <span className="text-[9px] text-gold tracking-[2px] uppercase font-semibold">
                Broker de Credite
              </span>
            </div>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-14 flex flex-col gap-12">

        {/* ── Secțiunea descalificare ── */}
        <section className="text-center flex flex-col items-center gap-4">
          <div className="text-5xl">{isLocalityReject ? "📍" : isNeangajat ? "🙏" : "😔"}</div>
          <h1 className="font-playfair text-[26px] sm:text-[32px] font-bold text-navy leading-snug max-w-lg">
            {isLocalityReject
              ? "Momentan nu ne desfășurăm activitatea în zona dvs."
              : isNeangajat
              ? "Ne pare rău, nu îți putem oferi o soluție în acest moment"
              : "Ne pare rău, momentan nu te putem ajuta cu un credit bancar"}
          </h1>
          <p className="text-[15px] text-charcoal leading-relaxed max-w-md">
            {isLocalityReject
              ? "Serviciile noastre de brokeraj sunt disponibile în București și localitățile limitrofe. Însă partenerii noștri IFN operează 100% online — poți aplica din orice localitate din România."
              : isNeangajat
              ? "Băncile și instituțiile financiare partenere solicită un venit stabil ca o condiție esențială de eligibilitate. Revino oricând după ce obții un loc de muncă — te vom ajuta cu plăcere."
              : "Pe baza informațiilor furnizate, profilul tău nu îndeplinește criteriile băncilor partenere. Nu este o judecată — e pur și simplu politica lor de risc. Dar asta nu înseamnă că ești fără opțiuni."}
          </p>
          <Link
            href="/"
            className="text-[13px] text-muted underline hover:text-navy transition-colors"
          >
            ← Înapoi la formular pentru a modifica răspunsurile
          </Link>
        </section>

        {/* ── Secțiunea IFN-uri alternative ── */}
        {!isNeangajat && <section className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="font-playfair text-[24px] sm:text-[28px] font-bold text-navy mb-3">
              Există soluții alternative!
            </h2>
            <p className="text-[14px] sm:text-[15px] text-charcoal leading-relaxed max-w-2xl mx-auto">
              Un refuz de la bancă nu înseamnă că rămâi fără opțiuni. Partenerii noștri
              IFN oferă finanțare rapidă, chiar și în situații mai dificile — fără
              garanții, 100% online.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <IFNCard
              title="Hora Credit"
              badge="🎯 Fără garanții"
              badgeColor="blue"
              description="Credit până la 5.000 lei fără garanții. Banii pe card în 30 de minute, dobândă 0% primele 7 zile."
              benefitsList={benefits.horaCredit}
              ctaLabel="Aplică la Hora Credit →"
              href={AFFILIATE_LINKS.horaCredit}
              disclaimer="*Serviciu oferit de Hora Credit, independent de CS Credit Advisor"
              ifnKey="Hora Credit"
              logo="/partners/horacredit-logo.svg"
              logoWidth={140}
              logoHeight={28}
            />
            <IFNCard
              title="Via Conto"
              badge="⚡ Aprobare în 15 minute"
              badgeColor="green"
              description="Linie de credit online până la 4.000 lei. Aprobare în ~15 minute, dobândă 0% primele 30 zile."
              benefitsList={benefits.viaConto}
              ctaLabel="Aplică la Via Conto →"
              href={AFFILIATE_LINKS.viaConto}
              disclaimer="*Serviciu oferit de Via Conto, independent de CS Credit Advisor"
              ifnKey="Via Conto"
              logo="/partners/viaconto-logo.svg"
              logoWidth={140}
              logoHeight={28}
            />
            <IFNCard
              title="CreditPrime"
              badge="✅ Acceptă și istoric negativ"
              badgeColor="green"
              description="Credit rapid online până la 15.000 lei. Aprobare în câteva ore, chiar și în weekend."
              benefitsList={benefits.creditPrime}
              ctaLabel="Aplică la CreditPrime →"
              href={AFFILIATE_LINKS.creditPrime}
              disclaimer="*Serviciu oferit de CreditPrime, independent de CS Credit Advisor"
              ifnKey="CreditPrime"
              logo="/partners/creditprime-logo.svg"
              logoWidth={136}
              logoHeight={22}
            />
            <IFNCard
              title="Axi-card"
              badge="💳 Card de credit flexibil"
              badgeColor="blue"
              description="Card de credit până la 4.000 lei. Plătești dobândă doar pentru suma folosită."
              benefitsList={benefits.axiCard}
              ctaLabel="Aplică la Axi-card →"
              href={AFFILIATE_LINKS.axiCard}
              disclaimer="*Serviciu oferit de Axi-card, independent de CS Credit Advisor"
              ifnKey="Axi-card"
              logo="/partners/axicard-logo.png"
              logoWidth={400}
              logoHeight={216}
            />
          </div>
        </section>}

        {/* ── Secțiunea "Situația ta se poate schimba" ── */}
        <section className="bg-navy rounded-2xl px-6 sm:px-10 py-8 text-center flex flex-col items-center gap-4">
          <div className="text-3xl">🌱</div>
          <h2 className="font-playfair text-[20px] sm:text-[24px] font-bold text-white">
            Situația ta se poate schimba
          </h2>
          <p className="text-[14px] text-white/70 leading-relaxed max-w-md">
            Dacă îți îmbunătățești istoricul de credit, reduci gradul de îndatorare sau
            câștigi vechime la locul de muncă, șansele de aprobare la o bancă cresc
            semnificativ. Revino oricând — consultarea noastră este gratuită.
          </p>
          <Link
            href="/"
            className="btn-gold mt-2 px-8 py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm hover:opacity-90 transition-opacity"
          >
            Reîncercați mai târziu →
          </Link>
        </section>

        {/* ── Disclaimer afiliere ── */}
        {!isNeangajat && <section className="bg-white border border-gray-200 rounded-xl px-5 py-4">
          <p className="text-[12px] text-muted leading-relaxed text-center">
            CS Credit Advisor prezintă aceste produse ca informație generală. Linkurile
            de mai sus sunt linkuri de afiliere — primim un comision dacă aplici și ești
            aprobat, fără niciun cost suplimentar pentru tine. CS Credit Advisor nu este
            responsabil pentru deciziile de creditare ale IFN-urilor partenere.
          </p>
        </section>}
      </main>

      {/* Footer minimal */}
      <footer className="bg-navy border-t border-gold/15 py-6 px-4 text-center">
        <p className="text-[12px] text-white/30">
          © {new Date().getFullYear()} CS Credit Advisor · Broker de credite autorizat ·{" "}
          <Link href="/politica-confidentialitate" className="hover:text-gold transition-colors">
            Politică de Confidențialitate
          </Link>
          {" · "}
          <Link href="/termeni-conditii" className="hover:text-gold transition-colors">
            Termeni și Condiții
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default function NecalificatPage() {
  return (
    <Suspense fallback={null}>
      <NecalificatContent />
    </Suspense>
  );
}

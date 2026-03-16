"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const DURATIONS = [12, 24, 36, 48, 60];
const MIN_AMOUNT = 1000;
const MAX_AMOUNT = 150000;
const ANNUAL_RATE = 0.09;

function calcMonthly(principal: number, months: number): number {
  const r = ANNUAL_RATE / 12;
  return Math.round((principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1));
}

function fmt(n: number) {
  return n.toLocaleString("ro-RO");
}

const benefits = [
  "Fără deplasări la bancă — totul online sau telefonic",
  "Un singur dosar pentru toate băncile partenere",
  "Consultant dedicat pe toată durata procesului",
  "Aprobare în 24-48 ore pentru credite personale",
];

export default function Calculator() {
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(60);

  const monthly = calcMonthly(amount, months);
  const total = monthly * months;
  const interest = total - amount;

  return (
    <section id="calculator" className="bg-white py-20 sm:py-28 border-y border-[#e8e3d8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Calculator */}
          <FadeIn>
            <SectionLabel>Calculator de Credit</SectionLabel>
            <h2 className="font-playfair font-bold text-navy text-[1.9rem] sm:text-[2.4rem] leading-[1.2] tracking-[-0.3px] mb-8">
              Calculează Rata<br />Ta Lunară
            </h2>

            {/* Amount slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[13px] font-semibold text-charcoal uppercase tracking-[0.5px]">
                  Suma dorită
                </label>
                <span className="font-playfair font-bold text-navy text-lg">
                  {fmt(amount)} RON
                </span>
              </div>
              <input
                type="range"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #c9a84c ${((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100}%, #e8e3d8 0%)`,
                }}
              />
              <div className="flex justify-between mt-1.5 text-[11px] text-muted">
                <span>{fmt(MIN_AMOUNT)} RON</span>
                <span>{fmt(MAX_AMOUNT)} RON</span>
              </div>
            </div>

            {/* Duration buttons */}
            <div className="mb-7">
              <label className="block text-[13px] font-semibold text-charcoal uppercase tracking-[0.5px] mb-3">
                Perioadă de rambursare
              </label>
              <div className="flex flex-wrap gap-2">
                {DURATIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setMonths(d)}
                    className={[
                      "px-4 py-2.5 rounded-lg text-[13px] font-semibold border-[1.5px] transition-all duration-200",
                      months === d
                        ? "bg-navy text-white border-navy"
                        : "bg-off-white text-navy border-[#ddd8ce] hover:border-gold hover:bg-gold-pale",
                    ].join(" ")}
                  >
                    {d} luni
                  </button>
                ))}
              </div>
            </div>

            {/* Result card */}
            <div className="bg-navy rounded-2xl p-6 mb-6 relative overflow-hidden">
              <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-gold/8 rounded-full pointer-events-none" />
              <p className="text-white/60 text-[12px] uppercase tracking-[0.8px] mb-1">
                Rată lunară estimată*
              </p>
              <p className="font-playfair font-bold text-gold text-[2.6rem] leading-none mb-4">
                {fmt(monthly)} <span className="text-xl text-gold/70">RON</span>
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div>
                  <span className="text-[11px] text-white/45 uppercase tracking-[0.5px] block mb-0.5">Total rambursat</span>
                  <span className="text-white font-semibold text-sm">{fmt(total)} RON</span>
                </div>
                <div>
                  <span className="text-[11px] text-white/45 uppercase tracking-[0.5px] block mb-0.5">Dobândă totală</span>
                  <span className="text-white font-semibold text-sm">{fmt(interest)} RON</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-muted mb-5 leading-relaxed">
              *Calcul orientativ bazat pe o DAE de ~9%. Rata reală depinde de profilul tău și oferta băncii.
            </p>

            <Link
              href="#hero"
              className="btn-gold inline-block text-navy font-bold py-4 px-7 rounded-xl text-[14px] tracking-[0.3px]"
            >
              Solicită Ofertă Reală →
            </Link>
          </FadeIn>

          {/* Right: Text */}
          <FadeIn delay={150}>
            <SectionLabel>Serviciu 100% Gratuit</SectionLabel>
            <h2 className="font-playfair font-bold text-navy text-[1.9rem] sm:text-[2.4rem] leading-[1.2] tracking-[-0.3px] mb-5">
              Nu pierde ore<br />
              prin <em className="text-gold italic">birocrație</em>
            </h2>
            <p className="text-muted text-base leading-[1.75] mb-8">
              Completezi un singur formular și echipa CS Credit Advisor se ocupă
              de tot — analiză, comparație oferte, pregătire dosar și negociere
              cu banca. Tu primești doar aprobarea.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy text-[11px] font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-[14.5px] text-charcoal leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Banks strip */}
            <div className="bg-off-white border border-[#e8e3d8] rounded-xl p-5">
              <p className="text-[11px] text-muted uppercase tracking-[1px] font-semibold mb-3">
                Parteneri oficiali
              </p>
              <div className="flex flex-wrap gap-2">
                {["BCR", "BRD", "Banca Transilvania", "ING", "Raiffeisen"].map((b) => (
                  <span
                    key={b}
                    className="bg-white border border-[#ddd8ce] text-navy px-3 py-1.5 rounded-lg text-[12px] font-semibold"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

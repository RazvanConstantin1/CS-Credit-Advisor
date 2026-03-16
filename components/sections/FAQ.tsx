"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

const faqs = [
  {
    q: "Serviciul CS Credit Advisor este cu adevărat gratuit?",
    a: "Da, 100% gratuit pentru clienți. Suntem remunerați exclusiv de băncile partenere, nu de clienți. Nu există taxe ascunse, comisioane sau plăți de orice fel din partea ta.",
  },
  {
    q: "Pot obține un credit dacă am înregistrări negative la Biroul de Credit?",
    a: "Da, în multe cazuri da. Depinde de tipul și vechimea înregistrărilor negative. Echipa noastră analizează situația ta și identifică băncile sau produsele care acceptă profiluri cu istorii dificile. Nu renunța fără să consulți un specialist!",
  },
  {
    q: "Cât durează procesul de aprobare a unui credit?",
    a: "Variază în funcție de tipul creditului. Un credit de nevoi personale poate fi aprobat în 1–3 zile lucrătoare, în timp ce un credit ipotecar poate dura 2–4 săptămâni din cauza evaluărilor suplimentare (imobil, acte). Ne asigurăm că procesul decurge cât mai rapid posibil.",
  },
  {
    q: "Veți face o interogare la Biroul de Credit în etapa inițială?",
    a: "Nu. Prima consultație este informativă și nu implică nicio interogare la Biroul de Credit. Interogarea oficială se realizează doar după ce decizi că vrei să aplici la o bancă și numai cu acordul tău explicit.",
  },
  {
    q: "Ce documente îmi trebuie pentru un credit de nevoi personale?",
    a: "De regulă: carte de identitate, adeverință de venit sau fluturași de salariu (ultimele 3 luni), și extrase de cont. Lista exactă depinde de bancă și de tipul de credit — consultantul tău îți va comunica lista completă după analiza situației tale.",
  },
  {
    q: "Ce se întâmplă cu datele mele personale?",
    a: "Datele tale sunt protejate conform GDPR și nu sunt niciodată transmise terților fără consimțământul tău explicit. Utilizăm criptare SSL și sisteme securizate pentru stocarea informațiilor. Confidențialitatea ta este o prioritate absolută.",
  },
  {
    q: "Pot accesa un credit ipotecar fără avans?",
    a: "Băncile cer de regulă un avans minim de 15–25% din valoarea proprietății. Există și programe guvernamentale (Prima Casă, Noua Casă) cu condiții speciale. Consultantul nostru va analiza situația ta și va identifica cea mai avantajoasă opțiune disponibilă.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-off-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <FadeIn>
            <SectionLabel>Întrebări Frecvente</SectionLabel>
            <h2 className="font-playfair font-bold text-[1.9rem] sm:text-[2.4rem] leading-[1.2] tracking-[-0.3px] text-navy mb-4">
              Ai Întrebări?<br />Avem Răspunsuri.
            </h2>
            <p className="text-muted text-base leading-[1.75] mb-8">
              Nu există întrebări nepotrivite când vine vorba de banii tăi. Suntem transparenți în
              tot ceea ce facem.
            </p>
            <Link
              href="#hero"
              className="btn-gold inline-block text-navy font-bold py-4 px-7 rounded-xl text-[14px] tracking-[0.3px]"
            >
              Solicită Consultație →
            </Link>

            {/* Quick stats */}
            <div className="mt-8 bg-white border-[1.5px] border-gold/20 rounded-2xl p-5 space-y-3">
              {[
                ["⏱️", "Răspuns în 24h"],
                ["🔒", "100% Confidențial"],
                ["🎁", "Gratuit pentru tine"],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-3 text-sm text-navy font-medium">
                  <span className="text-base">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Accordion */}
          <FadeIn delay={100} className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={[
                  "bg-white rounded-xl border-[1.5px] overflow-hidden transition-all duration-200",
                  open === i ? "border-gold" : "border-[#eaecf0]",
                ].join(" ")}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={[
                    "w-full flex items-center justify-between gap-4 px-5 py-4 sm:py-5 text-left font-semibold text-[14px] sm:text-[15px] text-navy transition-all duration-200 font-dm min-h-[56px]",
                    open === i ? "bg-gold-pale" : "hover:bg-[#fafbfc]",
                  ].join(" ")}
                  aria-expanded={open === i}
                >
                  <span className="flex-1">{f.q}</span>
                  <span
                    className={[
                      "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                      open === i
                        ? "bg-gold rotate-180"
                        : "bg-off-white",
                    ].join(" ")}
                  >
                    <ChevronDown
                      size={14}
                      className={open === i ? "text-navy" : "text-muted"}
                    />
                  </span>
                </button>

                <div
                  className={[
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    open === i ? "max-h-80" : "max-h-0",
                  ].join(" ")}
                >
                  <p className="px-5 pb-5 pt-1 text-[13.5px] text-muted leading-[1.75]">{f.a}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

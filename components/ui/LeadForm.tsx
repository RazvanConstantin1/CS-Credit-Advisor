"use client";

import { useState, FormEvent } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface LeadFormProps {
  dark?: boolean;
  compact?: boolean;
  formId: string;
}

export default function LeadForm({ dark = false, compact = false, formId }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [creditStatus, setCreditStatus] = useState("");
  const [loanType, setLoanType] = useState("");
  const [jobSeniority, setJobSeniority] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [notes, setNotes] = useState("");

  const inputBase = [
    "w-full rounded-lg px-3.5 py-3 text-sm outline-none transition-all duration-200 font-dm border-[1.5px]",
    dark
      ? "bg-white/15 border-white/20 text-white [color-scheme:dark] placeholder:text-white/40 focus:border-gold focus:bg-white/20"
      : "bg-[#fafbfc] border-[#e0e4ea] text-navy placeholder:text-muted focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]",
  ].join(" ");

  const labelClass = `block text-[12px] font-semibold mb-1.5 tracking-[0.3px] ${
    dark ? "text-white/70" : "text-charcoal"
  }`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !creditStatus || !loanType || !jobSeniority || !netIncome) return;
    if (!gdprConsent) {
      setErrorMsg("Trebuie să accepți prelucrarea datelor pentru a continua.");
      return;
    }
    setLoading(true);
    setErrorMsg("");

    try {
      const { error } = await supabase.from("leads").insert({
        nume: name,
        numar_de_telefon: phone,
        email: email || null,
        situatia_curenta: creditStatus,
        tipul_creditului: loanType,
        vechime: jobSeniority,
        venit_net: netIncome,
        notes: notes || null,
        form_id: formId,
        gdpr_consent: gdprConsent,
      });

      if (error) {
        console.error("Eroare Supabase:", error.message, error.details, error.hint);
        setErrorMsg("A apărut o eroare la trimitere. Vă rugăm să ne contactați direct la telefon.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Eroare rețea:", err);
      setErrorMsg("Conexiunea a eșuat. Verificați internetul sau contactați-ne direct la telefon.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-3 px-4">
        <div className="text-5xl mb-2">✅</div>
        <h4 className={`font-playfair text-xl font-bold ${dark ? "text-white" : "text-navy"}`}>
          Cerere înregistrată!
        </h4>
        <p className={`text-sm leading-relaxed max-w-xs ${dark ? "text-white/60" : "text-muted"}`}>
          Un consultant CS Credit Advisor te va contacta în maxim 24 de ore lucrătoare.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
      {/* Name */}
      <div>
        <label className={labelClass}>
          Nume Complet <span className="text-gold">*</span>
        </label>
        <input
          type="text"
          autoComplete="name"
          placeholder="ex: Ion Popescu"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputBase}
        />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>
          Număr de Telefon <span className="text-gold">*</span>
        </label>
        <input
          type="tel"
          autoComplete="tel"
          placeholder="ex: 07xx xxx xxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={inputBase}
        />
      </div>

      {/* Email — hide on compact */}
      {!compact && (
        <div>
          <label className={labelClass}>
            Email{" "}
            <span className={`font-normal text-[11px] ${dark ? "text-white/40" : "text-muted"}`}>
              (opțional, recomandat)
            </span>
          </label>
          <input
            type="email"
            autoComplete="email"
            placeholder="exemplu@email.ro"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputBase}
          />
        </div>
      )}

      {/* Credit status */}
      <div>
        <label className={labelClass}>
          Situația Curentă a Creditului <span className="text-gold">*</span>
        </label>
        <select
          value={creditStatus}
          onChange={(e) => setCreditStatus(e.target.value)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>Selectează situația ta...</option>
          <option value="Bun — fără probleme de plată">Bun — fără probleme de plată</option>
          <option value="Mediu — câteva întârzieri mici">Mediu — câteva întârzieri mici</option>
          <option value="Am un singur credit activ">Am un singur credit activ</option>
          <option value="Nu am niciun credit activ">Nu am niciun credit activ</option>
        </select>
      </div>

      {/* Loan type */}
      <div>
        <label className={labelClass}>
          Tipul de Credit Dorit <span className="text-gold">*</span>
        </label>
        <select
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>Selectează tipul de credit...</option>
          <option value="Credit de Nevoi Personale">Credit de Nevoi Personale</option>
          <option value="Credit Ipotecar / Imobiliar">Credit Ipotecar / Imobiliar</option>
        </select>
      </div>

      {/* Job seniority */}
      <div>
        <label className={labelClass}>
          Vechime la Actualul Loc de Muncă <span className="text-gold">*</span>
        </label>
        <select
          value={jobSeniority}
          onChange={(e) => setJobSeniority(e.target.value)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>Selectează vechimea...</option>
          <option value="Mai puțin de 6 luni">Mai puțin de 6 luni</option>
          <option value="6 – 12 luni">6 – 12 luni</option>
          <option value="1 – 3 ani">1 – 3 ani</option>
          <option value="Peste 5 ani">Peste 5 ani</option>
        </select>
      </div>

      {/* Net income */}
      <div>
        <label className={labelClass}>
          Venit Net <span className="text-gold">*</span>
        </label>
        <select
          value={netIncome}
          onChange={(e) => setNetIncome(e.target.value)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>Selectează venitul net...</option>
          <option value="Salariu minim pe economie">Salariu minim pe economie</option>
          <option value="3.000 – 5.000 lei">3.000 – 5.000 lei</option>
          <option value="5.000 – 7.000 lei">5.000 – 7.000 lei</option>
          <option value="7.000 – 10.000 lei">7.000 – 10.000 lei</option>
          <option value="Peste 10.000 lei">Peste 10.000 lei</option>
        </select>
      </div>

      {/* Notes — hide on compact */}
      {!compact && (
        <div>
          <label className={labelClass}>
            Mențiuni Suplimentare{" "}
            <span className={`font-normal text-[11px] ${dark ? "text-white/40" : "text-muted"}`}>
              (opțional)
            </span>
          </label>
          <textarea
            placeholder="Suma aproximativă, urgența, sau orice detaliu relevant..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className={`${inputBase} resize-none`}
          />
        </div>
      )}

      {/* GDPR Consent */}
      <div className={`flex items-start gap-3 p-3 rounded-lg border-[1.5px] transition-colors duration-200 ${
        gdprConsent
          ? "border-gold/50 bg-gold/5"
          : dark ? "border-white/15 bg-white/5" : "border-[#e0e4ea] bg-[#fafbfc]"
      }`}>
        <input
          type="checkbox"
          id={`${formId}-gdpr`}
          checked={gdprConsent}
          onChange={(e) => {
            setGdprConsent(e.target.checked);
            if (e.target.checked) setErrorMsg("");
          }}
          className="mt-0.5 w-4 h-4 accent-[#C9A84C] cursor-pointer flex-shrink-0"
        />
        <label
          htmlFor={`${formId}-gdpr`}
          className={`text-[12px] leading-relaxed cursor-pointer ${dark ? "text-white/60" : "text-muted"}`}
        >
          Sunt de acord cu prelucrarea datelor mele cu caracter personal de către ACS Credit Advisor S.R.L.
          în scopul soluționării solicitării mele de creditare, conform{" "}
          <Link
            href="/politica-confidentialitate"
            target="_blank"
            className="text-gold underline hover:text-gold/80 transition-colors"
          >
            Politicii de Confidențialitate
          </Link>{" "}
          și{" "}
          <Link
            href="/termeni-conditii"
            target="_blank"
            className="text-gold underline hover:text-gold/80 transition-colors"
          >
            Termenilor și Condițiilor
          </Link>
          . <span className="text-gold">*</span>
        </label>
      </div>

      {/* Error message */}
      {errorMsg && (
        <p className="text-red-500 text-[12px] text-center">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full py-4 rounded-xl text-navy font-bold text-[15px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 mt-1 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Se trimite...
          </>
        ) : (
          "Solicită Consultație Gratuită →"
        )}
      </button>

      {/* Disclaimer */}
      <div className="flex items-start gap-2 pt-1">
        <ShieldCheck
          size={14}
          className={`mt-0.5 flex-shrink-0 ${dark ? "text-white/40" : "text-muted"}`}
        />
        <p className={`text-[11px] leading-relaxed ${dark ? "text-white/40" : "text-muted"}`}>
          Datele tale sunt în siguranță și nu vor fi partajate cu terți fără consimțământul tău.
          Serviciul nostru este complet confidențial și gratuit.
        </p>
      </div>
    </form>
  );
}

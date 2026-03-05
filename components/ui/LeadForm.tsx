"use client";

import { useState, FormEvent } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface LeadFormProps {
  dark?: boolean;
  compact?: boolean;
  formId: string;
}

type CreditStatus = "" | "good" | "medium" | "difficult" | "unknown";
type LoanType = "" | "personal" | "mortgage";
type JobSeniority = "" | "under6m" | "6to12m" | "1to3y" | "over5y";
type NetIncome =
  | ""
  | "minimum"
  | "3000to5000"
  | "5000to7000"
  | "7000to10000"
  | "over10000";

export default function LeadForm({
  dark = false,
  compact = false,
  formId,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [creditStatus, setCreditStatus] = useState<CreditStatus>("");
  const [loanType, setLoanType] = useState<LoanType>("");
  const [jobSeniority, setJobSeniority] = useState<JobSeniority>("");
  const [netIncome, setNetIncome] = useState<NetIncome>("");
  const [notes, setNotes] = useState("");

  const inputBase = [
    "w-full rounded-lg px-3.5 py-3 text-sm outline-none transition-all duration-200 font-dm border-[1.5px]",
    dark
      ? "bg-white/8 border-white/15 text-white placeholder:text-white/35 focus:border-gold focus:bg-white/12"
      : "bg-[#fafbfc] border-[#e0e4ea] text-navy placeholder:text-muted focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]",
  ].join(" ");

  const labelClass = `block text-[12px] font-semibold mb-1.5 tracking-[0.3px] ${
    dark ? "text-white/70" : "text-charcoal"
  }`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !name ||
      !phone ||
      !creditStatus ||
      !loanType ||
      !jobSeniority ||
      !netIncome
    )
      return;
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.from("leads").insert({
      name,
      phone,
      email: email || null,
      credit_status: creditStatus,
      loan_type: loanType,
      job_seniority: jobSeniority,
      net_income: netIncome,
      notes: notes || null,
      form_id: formId,
    });

    setLoading(false);

    if (error) {
      console.error(
        "Eroare Supabase:",
        error.message,
        error.details,
        error.hint
      );
      setErrorMsg(`Eroare: ${error.message}`);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-3 px-4">
        <div className="text-5xl mb-2">✅</div>
        <h4
          className={`font-playfair text-xl font-bold ${
            dark ? "text-white" : "text-navy"
          }`}
        >
          Cerere înregistrată!
        </h4>
        <p
          className={`text-sm leading-relaxed max-w-xs ${
            dark ? "text-white/60" : "text-muted"
          }`}
        >
          Un consultant CS Credit Advisor te va contacta în maxim 24 de ore
          lucrătoare.
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
            <span
              className={`font-normal text-[11px] ${
                dark ? "text-white/40" : "text-muted"
              }`}
            >
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
          onChange={(e) => setCreditStatus(e.target.value as CreditStatus)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>
            Selectează situația ta...
          </option>
          <option value="good">Bun — fără probleme de plată</option>
          <option value="medium">Mediu — câteva întârzieri mici</option>
          <option value="difficult">
            Dificil — întârzieri sau credite restante
          </option>
          <option value="unknown">Nu am niciun credit activ</option>
        </select>
      </div>

      {/* Loan type */}
      <div>
        <label className={labelClass}>
          Tipul de Credit Dorit <span className="text-gold">*</span>
        </label>
        <select
          value={loanType}
          onChange={(e) => setLoanType(e.target.value as LoanType)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>
            Selectează tipul de credit...
          </option>
          <option value="personal">Credit De Nevoi Personale</option>
          <option value="mortgage">Credit Ipotecar / Imobiliar</option>
        </select>
      </div>

      {/* Job seniority */}
      <div>
        <label className={labelClass}>
          Vechime la Actualul Loc de Muncă <span className="text-gold">*</span>
        </label>
        <select
          value={jobSeniority}
          onChange={(e) => setJobSeniority(e.target.value as JobSeniority)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>
            Selectează vechimea...
          </option>
          <option value="under6m">Mai puțin de 6 luni</option>
          <option value="6to12m">6 – 12 luni</option>
          <option value="1to3y">1 – 3 ani</option>
          <option value="over5y">Peste 5 ani</option>
        </select>
      </div>

      {/* Net income */}
      <div>
        <label className={labelClass}>
          Venit Net <span className="text-gold">*</span>
        </label>
        <select
          value={netIncome}
          onChange={(e) => setNetIncome(e.target.value as NetIncome)}
          required
          className={`${inputBase} custom-select cursor-pointer`}
        >
          <option value="" disabled>
            Selectează venitul net...
          </option>
          <option value="minimum">Salariu minim pe economie</option>
          <option value="3000to5000">3.000 – 5.000 lei</option>
          <option value="5000to7000">5.000 – 7.000 lei</option>
          <option value="7000to10000">7.000 – 10.000 lei</option>
          <option value="over10000">Peste 10.000 lei</option>
        </select>
      </div>

      {/* Notes — hide on compact */}
      {!compact && (
        <div>
          <label className={labelClass}>
            Mențiuni Suplimentare{" "}
            <span
              className={`font-normal text-[11px] ${
                dark ? "text-white/40" : "text-muted"
              }`}
            >
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
          className={`mt-0.5 flex-shrink-0 ${
            dark ? "text-white/40" : "text-muted"
          }`}
        />
        <p
          className={`text-[11px] leading-relaxed ${
            dark ? "text-white/40" : "text-muted"
          }`}
        >
          Datele tale sunt în siguranță și nu vor fi partajate cu terți fără
          consimțământul tău. Serviciul nostru este complet confidențial și
          gratuit.
        </p>
      </div>
    </form>
  );
}

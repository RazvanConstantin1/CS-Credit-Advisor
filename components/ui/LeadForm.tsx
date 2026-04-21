"use client";

import { useState, useEffect, FormEvent } from "react";
import { ShieldCheck, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LeadFormProps {
  dark?: boolean;
  compact?: boolean;
  formId: string;
}

const STEPS = ["Eligibilitate", "Detalii", "Contact"];

export default function LeadForm({
  dark = false,
  compact = false,
  formId,
}: LeadFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [rejectedMsg, setRejectedMsg] = useState("");
  const [rejectedStep, setRejectedStep] = useState(1);
  const [rejectedField, setRejectedField] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);

  const [leadSource, setLeadSource] = useState("Website");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = (params.get("utm_source") || "").toLowerCase();
    if (utmSource.includes("instagram")) setLeadSource("Instagram");
    else if (utmSource.includes("facebook") || utmSource.includes("fb"))
      setLeadSource("Facebook");
  }, []);

  // Step 1
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [jobSeniority, setJobSeniority] = useState("");
  const [creditStatus, setCreditStatus] = useState("");

  // Step 2
  const [debtRatio, setDebtRatio] = useState("");
  const [loanType, setLoanType] = useState("");
  const [netIncome, setNetIncome] = useState("");

  // Step 3
  const [locality, setLocality] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const handleLocalityChange = (value: string) => {
    setLocality(value);
    if (value === "Altă localitate / Alt județ")
      disqualify(
        "Ne pare rău, dar momentan ne desfășurăm activitatea doar în București și localitățile limitrofe. Poți accesa în continuare soluțiile noastre IFN partenere — acestea se completează 100% online, indiferent de localitate.",
        3, "locality",
        "/necalificat?reason=locality",
      );
  };

  const inputBase = [
    "w-full rounded-lg px-3.5 py-3 text-sm outline-none transition-all duration-200 font-dm border-[1.5px]",
    dark
      ? "bg-white/15 border-white/20 text-white [color-scheme:dark] placeholder:text-white/40 focus:border-gold focus:bg-white/20"
      : "bg-[#fafbfc] border-[#e0e4ea] text-navy placeholder:text-muted focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]",
  ].join(" ");

  const labelClass = `block text-[12px] font-semibold mb-1.5 tracking-[0.3px] ${
    dark ? "text-white/70" : "text-charcoal"
  }`;

  const disqualify = (msg: string, fromStep: number, field: string, redirectTo: string | false = "/necalificat") => {
    setRejectedMsg(msg);
    setRejectedStep(fromStep);
    setRejectedField(field);
    setRejected(true);
    (window as any).gtag?.("event", "lead_rejected", {
      form_id: formId,
      rejection_reason: field,
      lead_source: leadSource,
    });
    if (redirectTo) {
      (window as any).fbq?.("track", "Lead", {
        content_name: "Disqualified — " + field,
        content_category: "IFN Redirect",
      });
      router.push(redirectTo);
    }
  };

  const handleEmploymentStatusChange = (value: string) => {
    setEmploymentStatus(value);
    if (value === "Neangajat / Fără venit stabil")
      disqualify(
        "Ne pare rău, dar lipsa unui venit stabil nu îndeplinește criteriile minime de eligibilitate pentru creditare. Te invităm să revii după ce obții un loc de muncă stabil.",
        1, "employmentStatus",
        false,
      );
    else if (value === "Angajat part-time")
      disqualify(
        "Angajarea part-time nu îndeplinește criteriile băncilor partenere, însă există soluții IFN potrivite pentru profilul tău.",
        1, "employmentStatus",
        "/necalificat",
      );
  };

  const handleAgeGroupChange = (value: string) => {
    setAgeGroup(value);
    if (value === "18 – 22 ani" || value === "Peste 65 ani")
      disqualify(
        "Ne pare rău, dar grupa ta de vârstă nu îndeplinește criteriile de eligibilitate pentru creditare. Creditele sunt disponibile persoanelor cu vârsta între 23 și 65 de ani.",
        1, "ageGroup",
      );
  };

  const handleJobSeniorityChange = (value: string) => {
    setJobSeniority(value);
    if (value === "Sub 6 luni")
      disqualify(
        "Ne pare rău, dar o vechime mai mică de 6 luni la actualul loc de muncă nu îndeplinește criteriile minime de eligibilitate pentru creditare. Te invităm să revii după ce acumulezi cel puțin 6 luni de vechime.",
        1, "jobSeniority",
      );
  };

  const handleCreditStatusChange = (value: string) => {
    setCreditStatus(value);
    if (value === "Dificil — întârzieri mari sau credite restante") {
      disqualify(
        "Ne pare rău, dar situația ta de credit actuală nu îndeplinește criteriile minime de eligibilitate pentru creditare. Te invităm să revii după ce situația creditului tău s-a îmbunătățit.",
        1, "creditStatus",
        "/necalificat",
      );
    } else if (value === "Mediu — câteva întârzieri mici (max 30 zile)") {
      disqualify(
        "Istoricul tău de credit cu întârzieri poate limita opțiunile bancare. Te redirecționăm către soluții IFN potrivite profilului tău.",
        1, "creditStatus",
        "/necalificat",
      );
    }
  };

  const handleDebtRatioChange = (value: string) => {
    setDebtRatio(value);
    if (value === "Peste 45% din venit")
      disqualify(
        "Ne pare rău, dar un grad de îndatorare peste 45% din venit depășește limita maximă admisă pentru acordarea unui credit suplimentar. Te invităm să revii după ce reduci ratele existente.",
        2, "debtRatio",
      );
  };

  const canProceedStep1 =
    employmentStatus && ageGroup && jobSeniority && creditStatus;
  const canProceedStep2 = debtRatio && loanType && netIncome;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!locality || !name || !phone) return;
    if (!gdprConsent) {
      setErrorMsg("Trebuie să accepți prelucrarea datelor pentru a continua.");
      return;
    }
    setLoading(true);
    setErrorMsg("");

    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );
      const { error } = await supabase.from("leads").insert({
        nume: name,
        numar_de_telefon: phone,
        email: email || null,
        localitate: locality,
        statut_angajare: employmentStatus,
        grupa_varsta: ageGroup,
        vechime: jobSeniority,
        situatia_curenta: creditStatus,
        procent_rate: debtRatio,
        tipul_creditului: loanType,
        venit_net: netIncome,
        sursa: leadSource,
        notes: notes || null,
        form_id: formId,
        gdpr_consent: gdprConsent,
      });

      if (error) {
        console.error(
          "Eroare Supabase:",
          error.message,
          error.details,
          error.hint,
        );
        setErrorMsg(
          "A apărut o eroare la trimitere. Vă rugăm să ne contactați direct la telefon.",
        );
      } else {
        setSubmitted(true);
        (window as any).gtag?.("event", "generate_lead", {
          form_id: formId,
          loan_type: loanType,
          lead_source: leadSource,
        });
      }
    } catch (err) {
      console.error("Eroare rețea:", err);
      setErrorMsg(
        "Conexiunea a eșuat. Verificați internetul sau contactați-ne direct la telefon.",
      );
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-3 px-4">
        <div className="text-5xl mb-2">✅</div>
        <h4
          className={`font-playfair text-xl font-bold ${dark ? "text-white" : "text-navy"}`}
        >
          Cerere înregistrată!
        </h4>
        <p
          className={`text-sm leading-relaxed max-w-xs ${dark ? "text-white/60" : "text-muted"}`}
        >
          Un consultant CS Credit Advisor te va contacta în maxim 24 de ore
          lucrătoare.
        </p>
      </div>
    );
  }

  if (rejected) {
    const isLocalityReject = rejectedField === "locality";
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-3 px-4">
        <div className="text-5xl mb-2">{isLocalityReject ? "📍" : "❌"}</div>
        <h4
          className={`font-playfair text-xl font-bold ${dark ? "text-white" : "text-navy"}`}
        >
          {isLocalityReject
            ? "Nu ne desfășurăm activitatea în zona dvs."
            : "Cerere neeligibilă"}
        </h4>
        <p
          className={`text-sm leading-relaxed max-w-xs ${dark ? "text-white/60" : "text-muted"}`}
        >
          {rejectedMsg}
        </p>
        <button
          onClick={() => {
            setRejected(false);
            setRejectedMsg("");
            if (rejectedField === "employmentStatus") setEmploymentStatus("");
            else if (rejectedField === "ageGroup") setAgeGroup("");
            else if (rejectedField === "jobSeniority") setJobSeniority("");
            else if (rejectedField === "creditStatus") setCreditStatus("");
            else if (rejectedField === "debtRatio") setDebtRatio("");
            else if (rejectedField === "locality") setLocality("");
            setStep(rejectedStep);
          }}
          className={`mt-2 text-[12px] underline cursor-pointer ${dark ? "text-white/50 hover:text-white/80" : "text-muted hover:text-navy"} transition-colors`}
        >
          {isLocalityReject ? "Modifică localitatea" : "Modifică selecția"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Step indicator */}
      <div className="flex items-center mb-1">
        {STEPS.map((label, i) => {
          const idx = i + 1;
          const isActive = step === idx;
          const isDone = step > idx;
          return (
            <div key={i} className="flex items-center flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-colors ${
                    isDone || isActive
                      ? "bg-gold text-navy"
                      : dark
                        ? "bg-white/15 text-white/35"
                        : "bg-[#e0e4ea] text-muted"
                  }`}
                >
                  {isDone ? "✓" : idx}
                </div>
                <span
                  className={`hidden xs:inline text-[11px] font-semibold tracking-wide whitespace-nowrap ${
                    isActive
                      ? "text-gold"
                      : dark
                        ? "text-white/30"
                        : "text-muted"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 transition-colors ${
                    isDone
                      ? "bg-gold/50"
                      : dark
                        ? "bg-white/15"
                        : "bg-[#e0e4ea]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Step 1: Eligibilitate ── */}
      {step === 1 && (
        <div className="space-y-3.5">
          <div>
            <label className={labelClass}>
              Statutul tău de Angajare <span className="text-gold">*</span>
            </label>
            <select
              value={employmentStatus}
              onChange={(e) => handleEmploymentStatusChange(e.target.value)}
              required
              className={`${inputBase} custom-select cursor-pointer`}
            >
              <option value="" disabled>
                Selectează statutul tău...
              </option>
              <option value="Angajat normă întreagă">
                Angajat normă întreagă
              </option>
              <option value="Angajat part-time">Angajat part-time</option>
              <option value="Pensionar">Pensionar</option>
              <option value="Neangajat / Fără venit stabil">
                Neangajat / Fără venit stabil
              </option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Grupa ta de Vârstă <span className="text-gold">*</span>
            </label>
            <select
              value={ageGroup}
              onChange={(e) => handleAgeGroupChange(e.target.value)}
              required
              className={`${inputBase} custom-select cursor-pointer`}
            >
              <option value="" disabled>
                Selectează grupa de vârstă...
              </option>
              <option value="18 – 22 ani">18 – 22 ani</option>
              <option value="23 – 30 ani">23 – 30 ani</option>
              <option value="31 – 45 ani">31 – 45 ani</option>
              <option value="46 – 55 ani">46 – 55 ani</option>
              <option value="56 – 65 ani">56 – 65 ani</option>
              <option value="Peste 65 ani">Peste 65 ani</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Vechime la Actualul Loc de Muncă{" "}
              <span className="text-gold">*</span>
            </label>
            <select
              value={jobSeniority}
              onChange={(e) => handleJobSeniorityChange(e.target.value)}
              required
              className={`${inputBase} custom-select cursor-pointer`}
            >
              <option value="" disabled>
                Selectează vechimea...
              </option>
              <option value="Sub 6 luni">Sub 6 luni</option>
              <option value="6 – 12 luni">6 – 12 luni</option>
              <option value="1 – 3 ani">1 – 3 ani</option>
              <option value="Peste 3 ani">Peste 3 ani</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Situația ta la Biroul de Credit{" "}
              <span className="text-gold">*</span>
            </label>
            <select
              value={creditStatus}
              onChange={(e) => handleCreditStatusChange(e.target.value)}
              required
              className={`${inputBase} custom-select cursor-pointer`}
            >
              <option value="" disabled>
                Selectează situația ta...
              </option>
              <option value="Bun — fără întârzieri">Bun — fără întârzieri</option>
              <option value="Mediu — câteva întârzieri mici (max 30 zile)">
                Mediu — câteva întârzieri mici (max 30 zile)
              </option>
              <option value="Dificil — întârzieri mari sau credite restante">
                Dificil — întârzieri mari sau credite restante
              </option>
              <option value="Nu știu / nu am verificat">
                Nu știu / nu am verificat
              </option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!canProceedStep1}
            className="btn-gold w-full py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 mt-1 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continuă <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* ── Step 2: Detalii financiare ── */}
      {step === 2 && (
        <div className="space-y-3.5">
          <div>
            <label className={labelClass}>
              Procent din Venitul Net pe Rate{" "}
              <span className="text-gold">*</span>
            </label>
            <select
              value={debtRatio}
              onChange={(e) => handleDebtRatioChange(e.target.value)}
              required
              className={`${inputBase} custom-select cursor-pointer`}
            >
              <option value="" disabled>
                Selectează procentul...
              </option>
              <option value="Nu am nicio rată">Nu am nicio rată</option>
              <option value="Sub 20% din venit">Sub 20% din venit</option>
              <option value="20% – 35% din venit">20% – 35% din venit</option>
              <option value="35% – 45% din venit">35% – 45% din venit</option>
              <option value="Peste 45% din venit">Peste 45% din venit</option>
            </select>
          </div>

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
              <option value="" disabled>
                Selectează tipul de credit...
              </option>
              <option value="Credit de Nevoi Personale">
                Credit de Nevoi Personale
              </option>
              <option value="Credit Ipotecar / Imobiliar">
                Credit Ipotecar / Imobiliar
              </option>
            </select>
          </div>

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
              <option value="" disabled>
                Selectează venitul net...
              </option>
              <option value="Salariu minim pe economie">
                Salariu minim pe economie
              </option>
              <option value="3.000 – 5.000 lei">3.000 – 5.000 lei</option>
              <option value="5.000 – 7.000 lei">5.000 – 7.000 lei</option>
              <option value="7.000 – 10.000 lei">7.000 – 10.000 lei</option>
              <option value="Peste 10.000 lei">Peste 10.000 lei</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`flex-1 py-3.5 rounded-xl font-bold text-[14px] font-dm flex items-center justify-center gap-1.5 border-[1.5px] transition-colors ${
                dark
                  ? "border-white/20 text-white/60 hover:text-white hover:border-white/40"
                  : "border-[#e0e4ea] text-muted hover:text-navy hover:border-navy/30"
              }`}
            >
              <ChevronLeft size={16} /> Înapoi
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!canProceedStep2}
              className="flex-[2] btn-gold py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuă <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Date de contact ── */}
      {step === 3 && (
        <div className="space-y-3.5">
          <div>
            <label className={labelClass}>
              Localitatea ta <span className="text-gold">*</span>
            </label>
            <select
              value={locality}
              onChange={(e) => handleLocalityChange(e.target.value)}
              required
              className={`${inputBase} custom-select cursor-pointer`}
            >
              <option value="" disabled>Selectează localitatea...</option>
              <optgroup label="București">
                <option value="București - Sector 1">București - Sector 1</option>
                <option value="București - Sector 2">București - Sector 2</option>
                <option value="București - Sector 3">București - Sector 3</option>
                <option value="București - Sector 4">București - Sector 4</option>
                <option value="București - Sector 5">București - Sector 5</option>
                <option value="București - Sector 6">București - Sector 6</option>
              </optgroup>
              <optgroup label="Ilfov (localități limitrofe)">
                <option value="Voluntari">Voluntari</option>
                <option value="Otopeni">Otopeni</option>
                <option value="Popești-Leordeni">Popești-Leordeni</option>
                <option value="Pantelimon">Pantelimon</option>
                <option value="Chitila">Chitila</option>
                <option value="Chiajna">Chiajna</option>
                <option value="Bragadiru">Bragadiru</option>
                <option value="Măgurele">Măgurele</option>
                <option value="Jilava">Jilava</option>
                <option value="Buftea">Buftea</option>
                <option value="Mogoșoaia">Mogoșoaia</option>
                <option value="Tunari">Tunari</option>
                <option value="Afumați">Afumați</option>
                <option value="Brănești">Brănești</option>
                <option value="Cernica">Cernica</option>
                <option value="Corbeanca">Corbeanca</option>
                <option value="Cornetu">Cornetu</option>
                <option value="1 Decembrie">1 Decembrie</option>
                <option value="Ciorogârla">Ciorogârla</option>
                <option value="Clinceni">Clinceni</option>
                <option value="Copăceni">Copăceni</option>
                <option value="Dărăști-Ilfov">Dărăști-Ilfov</option>
                <option value="Dascălu">Dascălu</option>
                <option value="Dobroești">Dobroești</option>
                <option value="Domneşti">Domneşti</option>
                <option value="Găneasa">Găneasa</option>
                <option value="Glina">Glina</option>
                <option value="Grădiştea">Grădiştea</option>
                <option value="Gruiu">Gruiu</option>
                <option value="Moara Vlăsiei">Moara Vlăsiei</option>
                <option value="Nuci">Nuci</option>
                <option value="Periş">Periş</option>
                <option value="Petrăchioaia">Petrăchioaia</option>
                <option value="Snagov">Snagov</option>
                <option value="Ştefăneştii de Jos">Ştefăneştii de Jos</option>
                <option value="Vidra">Vidra</option>
                <option value="Oltenița (jud. Călărași)">Oltenița (jud. Călărași)</option>
              </optgroup>
              <option value="Altă localitate / Alt județ">Altă localitate / Alt județ</option>
            </select>
          </div>

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

          {!compact && (
            <div>
              <label className={labelClass}>
                Email{" "}
                <span
                  className={`font-normal text-[11px] ${dark ? "text-white/40" : "text-muted"}`}
                >
                  (opțional)
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

          {!compact && (
            <div>
              <label className={labelClass}>
                Mențiuni Suplimentare{" "}
                <span
                  className={`font-normal text-[11px] ${dark ? "text-white/40" : "text-muted"}`}
                >
                  (opțional)
                </span>
              </label>
              <textarea
                placeholder="Suma aproximativă, urgența, sau orice detaliu relevant..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className={`${inputBase} resize-none`}
              />
            </div>
          )}

          {/* GDPR */}
          <div
            className={`flex items-start gap-3 p-3 rounded-lg border-[1.5px] transition-colors duration-200 ${
              gdprConsent
                ? "border-gold/50 bg-gold/5"
                : dark
                  ? "border-white/15 bg-white/5"
                  : "border-[#e0e4ea] bg-[#fafbfc]"
            }`}
          >
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
              Sunt de acord cu prelucrarea datelor mele conform{" "}
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

          {errorMsg && (
            <p className="text-red-500 text-[12px] text-center">{errorMsg}</p>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className={`flex-1 py-3.5 rounded-xl font-bold text-[14px] font-dm flex items-center justify-center gap-1.5 border-[1.5px] transition-colors ${
                dark
                  ? "border-white/20 text-white/60 hover:text-white hover:border-white/40"
                  : "border-[#e0e4ea] text-muted hover:text-navy hover:border-navy/30"
              }`}
            >
              <ChevronLeft size={16} /> Înapoi
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-[2] btn-gold py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Se trimite...
                </>
              ) : (
                "Solicită Consultație →"
              )}
            </button>
          </div>

          <div className="flex items-start gap-2 pt-0.5">
            <ShieldCheck
              size={13}
              className={`mt-0.5 flex-shrink-0 ${dark ? "text-white/40" : "text-muted"}`}
            />
            <p
              className={`text-[11px] leading-relaxed ${dark ? "text-white/40" : "text-muted"}`}
            >
              Datele tale sunt în siguranță și nu vor fi partajate cu terți fără
              consimțământul tău. Serviciu complet gratuit.
            </p>
          </div>
        </div>
      )}
    </form>
  );
}

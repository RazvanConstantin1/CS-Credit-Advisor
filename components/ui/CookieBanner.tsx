"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-navy border border-gold/20 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-white/80 text-[13px] leading-relaxed">
            🍪 Folosim cookie-uri pentru a îmbunătăți experiența pe site. Prin continuarea navigării,
            ești de acord cu utilizarea acestora. Află mai multe în{" "}
            <Link href="/politica-cookies" className="text-gold underline hover:text-gold/80 transition-colors">
              Politica de Cookie-uri
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-lg border border-white/20 text-white/60 text-[13px] font-medium hover:border-white/40 hover:text-white/80 transition-all duration-200"
          >
            Refuz
          </button>
          <button
            onClick={handleAccept}
            className="btn-gold px-5 py-2 rounded-lg text-navy text-[13px] font-bold transition-all duration-200"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

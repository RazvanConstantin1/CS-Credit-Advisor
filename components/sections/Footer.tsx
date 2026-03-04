import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080e16] border-t border-gold/15 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-playfair font-bold text-navy text-sm">
              CS
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair font-bold text-white text-[15px]">CS Credit Advisor</span>
              <span className="text-[9px] text-gold tracking-[2px] uppercase">Brokeraj de Credite</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              ["#trust", "Beneficii"],
              ["#how", "Cum Funcționează"],
              ["#about", "Despre Noi"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-[13px] text-white/40 hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-white/30 text-center sm:text-left">
              © {new Date().getFullYear()} CS Credit Advisor. Broker de credite autorizat. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              {["Politică de Confidențialitate", "Termeni și Condiții", "GDPR"].map((l) => (
                <Link
                  key={l}
                  href="#"
                  className="text-[12px] text-white/30 hover:text-gold transition-colors duration-200"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

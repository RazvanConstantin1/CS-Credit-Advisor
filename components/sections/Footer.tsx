import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/15 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="CS Credit Advisor"
              width={36}
              height={36}
              className="rounded-lg flex-shrink-0"
            />
            <div className="flex flex-col leading-none">
              <span className="font-playfair font-bold text-white text-[15px]">
                CS Credit Advisor
              </span>
              <span className="text-[9px] text-gold tracking-[2px] uppercase">
                Broker de Credite
              </span>
            </div>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              ["/#trust", "Beneficii"],
              ["/#calculator", "Calculator"],
              ["/#about", "Despre Noi"],
              ["/#faq", "FAQ"],
              ["/blog", "Blog"],
              ["/parteneri-ifn", "Soluții IFN"],
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
              © {new Date().getFullYear()} CS Credit Advisor. Broker de credite
              autorizat. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
              {[
                ["/politica-confidentialitate", "Politică de Confidențialitate"],
                ["/termeni-conditii", "Termeni și Condiții"],
                ["#", "GDPR"],
              ].map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-[12px] text-white/30 hover:text-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS Credit Advisor – Soluții de Creditare Personalizate",
  description:
    "Broker de credite autorizat. Obține creditul potrivit — personal sau ipotecar — chiar și cu un istoric dificil. Serviciu 100% gratuit.",
  keywords: "credit, broker credit, credit personal, credit ipotecar, IFN, Romania, CS Credit Advisor",
  openGraph: {
    title: "CS Credit Advisor",
    description: "Serviciu de brokeraj credite 100% gratuit. Parteneri cu top 5 bănci din România.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-dm antialiased bg-off-white text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

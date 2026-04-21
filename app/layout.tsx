import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
  preload: true,
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CS Credit Advisor – Soluții de Creditare Personalizate",
  description:
    "Broker de credite autorizat. Comparăm toate ofertele din piață și îți negociem cele mai bune condiții — personal sau ipotecar. Serviciu 100% gratuit.",
  keywords: "credit, broker credit, credit de nevoi personale, credit ipotecar, IFN, Romania, CS Credit Advisor",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "CS Credit Advisor",
    description: "Serviciu de brokeraj credite 100% gratuit. Parteneri cu principalele bănci din România.",
    type: "website",
    images: [{ url: "/logo.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`scroll-smooth ${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="verify-admitad" content="9f74b14d08" />
      </head>
      <body className="font-dm antialiased bg-off-white text-navy overflow-x-hidden">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85M2PLMP1S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85M2PLMP1S');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1904815583491015');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1904815583491015&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}

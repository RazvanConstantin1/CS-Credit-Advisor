import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parteneri IFN | Soluții de finanțare rapidă | CS Credit Advisor",
  description:
    "Soluții alternative de finanțare rapidă, 100% online. Aprobare chiar și cu istoric negativ. Recomandate de CS Credit Advisor.",
  keywords:
    "IFN Romania, finantare rapida online, credit fara garantii, credit fara adeverinta venit, alternativa bancara",
};

export default function ParteneriIFNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluții alternative de finanțare | CS Credit Advisor",
  description:
    "Nu te califici la bancă? Descoperă soluții de finanțare rapidă online — aprobate în câteva ore, chiar și cu istoric negativ.",
  robots: "noindex, nofollow",
};

export default function NecalificatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

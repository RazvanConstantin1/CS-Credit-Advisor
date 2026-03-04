interface SectionLabelProps {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}

export default function SectionLabel({ children, center, light }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[2.5px] uppercase text-gold mb-4 ${
        center ? "justify-center w-full" : ""
      }`}
    >
      <span className={`block w-7 h-[1.5px] ${light ? "bg-gold/60" : "bg-gold"}`} />
      {children}
    </div>
  );
}

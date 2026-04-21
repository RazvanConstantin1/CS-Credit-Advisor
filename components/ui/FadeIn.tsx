import { ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  const style: CSSProperties = delay
    ? { animationDelay: `${delay}ms` }
    : {};

  return (
    <div className={`fade-in-view ${className}`} style={style}>
      {children}
    </div>
  );
}

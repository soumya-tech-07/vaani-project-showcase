import type React from "react";

interface CrmGradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

/** Layered product-frame background adapted from the supplied gradient treatment. */
export function CrmGradientBackground({ children, className = "" }: CrmGradientBackgroundProps) {
  return (
    <div className={`relative overflow-hidden bg-[#101714] ${className}`}>
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(145deg, #101714 0%, #16211C 38%, #075E54 100%)" }} />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(45deg, rgba(37,211,102,0.45) 1px, transparent 1px), linear-gradient(-45deg, rgba(37,211,102,0.25) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
      <div aria-hidden="true" className="absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[#25D366]/15 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

import type React from "react";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GradientBackground({ children, className = "" }: GradientBackgroundProps) {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #000000 0%, #05080F 20%, #032F3A 40%, #0891b2 70%, #22d3ee 100%)" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-repeat opacity-5"
        style={{
          backgroundImage: 'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")',
          backgroundSize: "149.76px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
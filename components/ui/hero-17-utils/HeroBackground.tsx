export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(100vh,900px)] overflow-hidden"
    >
      <img
        src="/FunnelForCouch.svg"
        alt=""
        className="hero-17-liquid absolute inset-[-18%] h-[136%] w-[136%] object-cover opacity-[0.12] blur-[38px] grayscale"
      />
      <div className="hero-17-lines absolute inset-0" />
    </div>
  );
}

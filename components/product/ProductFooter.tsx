export function ProductFooter() {
  return (
    <footer className="border-t border-[var(--project-border)] bg-[var(--project-surface)] px-6 py-12 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-xl font-bold tracking-tighter text-[var(--project-text)]">
          ProjectShowcase
        </div>
        <div className="flex gap-8 text-sm font-medium text-[var(--project-secondary)]">
          <a href="/" className="transition-colors hover:text-[var(--project-text)]">Products</a>
          <a href="#" className="transition-colors hover:text-[var(--project-primary)]">About</a>
          <a href="#" className="transition-colors hover:text-[var(--project-primary)]">Contact</a>
        </div>
        <div className="font-mono text-xs text-[var(--project-secondary)]">
          © 2024 ProjectShowcase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function FooterSection() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
              <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2.5 4.5L12 13l-2.5-1.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z" />
              <path d="M12 13v9" />
            </svg>
          </div>
          <span className="text-lg font-bold text-foreground">Basil</span>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Basil is a demo concept project and is not a real bank, financial institution, or payment provider. No real financial services are offered. For demonstration purposes only.
        </p>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Basil · Concept Demo
        </p>
      </div>
    </footer>
  );
}

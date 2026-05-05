export default function FooterSection() {
  return (
    <footer className="border-t border-[#e5edf5] bg-[#f8fbff] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#07111d]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2.5 4.5L12 13l-2.5-1.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z" />
              <path d="M12 13v9" />
            </svg>
          </div>
          <span className="text-lg font-black tracking-tight text-[#07111d]">Basil</span>
        </div>
        <p className="max-w-lg text-sm leading-relaxed text-[#64748b]">
          Basil is a demo concept project and is not a real bank, financial institution, or payment provider. No real financial services are offered. For demonstration and portfolio purposes only.
        </p>
        <div className="flex items-center gap-6 text-xs font-bold text-[#94a3b8]">
          <span>© {new Date().getFullYear()} Basil</span>
          <span>·</span>
          <span>Concept Demo</span>
          <span>·</span>
          <a href="#waitlist" className="transition-colors hover:text-[#07111d]">Join Waitlist</a>
        </div>
      </div>
    </footer>
  );
}

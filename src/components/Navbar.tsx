import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
              <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2.5 4.5L12 13l-2.5-1.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z" />
              <path d="M12 13v9" />
              <path d="M9 18c-2 0-4-1-4-3" />
              <path d="M15 18c2 0 4-1 4-3" />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Basil</span>
        </div>
        <a
          href="#waitlist"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
        >
          Join Waitlist
        </a>
      </div>
    </motion.nav>
  );
}

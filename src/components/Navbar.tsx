import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#e5edf5]/60 bg-white/80 shadow-[0_4px_30px_rgba(7,17,29,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#07111d]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3.5-2.5 4.5L12 13l-2.5-1.5C8 10.5 7 9 7 7a5 5 0 0 1 5-5z" />
              <path d="M12 13v9" />
              <path d="M9 18c-2 0-4-1-4-3" />
              <path d="M15 18c2 0 4-1 4-3" />
            </svg>
          </div>
          <span className="text-lg font-black tracking-tight text-[#07111d]">Basil</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm font-semibold text-[#425466] transition-colors hover:text-[#07111d]">Product</a>
          <a href="#features" className="text-sm font-semibold text-[#425466] transition-colors hover:text-[#07111d]">Features</a>
          <a href="#dashboard" className="text-sm font-semibold text-[#425466] transition-colors hover:text-[#07111d]">Dashboard</a>
        </div>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-[#07111d] px-5 py-2.5 text-sm font-bold text-white transition-shadow hover:shadow-[0_8px_30px_rgba(7,17,29,0.25)]"
        >
          Join Waitlist
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.a>
      </div>
    </motion.nav>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-white/[0.72] backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#07111d] text-white shadow-lg">
            <Leaf className="h-4 w-4" />
          </div>
          <span className="text-xl font-black tracking-tight text-[#07111d]">Basil</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-[#516173] md:flex">
          <a href="#how-it-works" className="transition-colors hover:text-[#07111d]">
            Flow
          </a>
          <a href="#waitlist" className="transition-colors hover:text-[#07111d]">
            Waitlist
          </a>
        </div>

        <motion.a
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-[#07111d] px-5 py-2.5 text-sm font-black text-white shadow-[0_14px_34px_rgba(7,17,29,0.18)]"
        >
          Join
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.nav>
  );
}

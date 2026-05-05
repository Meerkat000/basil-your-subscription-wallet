import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useRef } from "react";
import SubscriptionCards from "./SubscriptionCards";

const proofPoints = ["Dedicated virtual cards", "Hard spending limits", "One-tap freeze"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={sectionRef} className="relative min-h-[110vh] overflow-hidden pt-24">
      {/* Layered background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-[linear-gradient(140deg,#f8fbff_0%,#edf6ff_35%,#dff7ef_65%,#f0fdf4_100%)]"
      />

      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 bottom-32 h-[400px] w-[400px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)" }}
      />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f8fbff] to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 lg:pb-32 lg:pt-24"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#0f766e]/12 bg-white/80 px-4 py-2 text-[13px] font-bold text-[#0f766e] shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Premium fintech concept · Waitlist open
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.9, ease }}
              className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.94] tracking-[-0.035em] text-[#07111d]"
            >
              Take control of{" "}
              <span className="bg-gradient-to-r from-[#0f766e] to-[#0ea5e9] bg-clip-text text-transparent">
                every subscription.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease }}
              className="mx-auto mt-7 max-w-xl text-lg leading-[1.7] text-[#4b5b6f] lg:mx-0 lg:text-xl"
            >
              Basil gives every recurring charge its own controlled card, spending limit, price alert, and freeze switch — one elegant command center.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.a
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#waitlist"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#07111d] px-8 py-4 text-base font-bold text-white shadow-[0_20px_60px_rgba(7,17,29,0.25)] transition-shadow hover:shadow-[0_24px_70px_rgba(7,17,29,0.35)]"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <a href="#how-it-works" className="text-sm font-bold text-[#425466] transition-colors hover:text-[#07111d]">
                See the product flow →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {proofPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.1, duration: 0.45 }}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/60 px-3 py-3 text-sm font-semibold text-[#27384a] shadow-sm backdrop-blur-sm lg:justify-start"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#0f766e]" />
                  {point}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Card showcase column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-12 rounded-[4rem] bg-white/30 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-2 top-6 z-30 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm font-bold text-[#07111d] shadow-xl backdrop-blur md:block"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#0f766e]" />
                Overcharge blocked
              </div>
            </motion.div>
            <SubscriptionCards />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

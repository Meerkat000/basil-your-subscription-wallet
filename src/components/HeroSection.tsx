import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import SubscriptionCards from "./SubscriptionCards";

const proofPoints = ["Dedicated virtual cards", "Hard spending limits", "One-tap freeze"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fbff] pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#f8fbff_0%,#edf6ff_42%,#dff7ef_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-12 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0f766e]/15 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0f766e] shadow-sm backdrop-blur"
            >
              <Sparkles className="h-4 w-4" />
              Premium fintech demo · Early access opening soon
            </motion.div>

            <h1 className="text-5xl font-black leading-[0.96] tracking-tight text-[#07111d] md:text-6xl lg:text-7xl">
              The wallet built for subscriptions.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#4b5b6f] md:text-xl lg:mx-0">
              Basil gives every recurring charge its own controlled card, limit, alerts, and freeze switch, so subscription chaos finally has a clean command center.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[#07111d] px-7 py-4 text-base font-bold text-white shadow-[0_18px_50px_rgba(7,17,29,0.22)] transition-colors hover:bg-[#10243b]"
              >
                Join the waitlist
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <a href="#how-it-works" className="text-sm font-bold text-[#425466] transition-colors hover:text-[#07111d]">
                See the product flow
              </a>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {proofPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.1, duration: 0.45 }}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/[0.68] px-3 py-3 text-sm font-semibold text-[#27384a] shadow-sm backdrop-blur lg:justify-start"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#0f766e]" />
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 42, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-white/40 blur-2xl" />
            <div className="absolute right-4 top-8 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-bold text-[#07111d] shadow-xl backdrop-blur md:block">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#0f766e]" />
                Overcharge blocked
              </div>
            </div>
            <SubscriptionCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

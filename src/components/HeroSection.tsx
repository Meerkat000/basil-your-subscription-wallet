import { motion } from "framer-motion";
import SubscriptionCards from "./SubscriptionCards";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24" style={{ background: "var(--gradient-hero)" }}>
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-20 h-80 w-80 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.16 145 / 40%), transparent)" }}
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 bottom-40 h-60 w-60 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, oklch(0.55 0.16 148 / 40%), transparent)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="pt-12 text-center lg:pt-0 lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Now accepting early access
            </motion.div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Take Control of{" "}
              <span className="gradient-text">Every Subscription</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Basil gives every subscription its own digital card with a custom spending limit. No more surprise charges, no more forgotten payments.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:shadow-xl"
                style={{ background: "var(--gradient-basil)" }}
              >
                Get Early Access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                See how it works →
              </a>
            </div>
          </motion.div>

          {/* Right: animated cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <SubscriptionCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

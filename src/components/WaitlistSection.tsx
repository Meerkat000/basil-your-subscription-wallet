import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-dark)" }}>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.16 148 / 40%), transparent)" }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "oklch(0.65 0.16 145)" }}>
            Early access
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ color: "oklch(0.97 0.01 90)" }}>
            Be the first to try Basil
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "oklch(0.75 0.02 90)" }}>
            Join the waitlist and get notified when we launch. Early members get priority access and exclusive perks.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3"
              style={{ background: "oklch(0.55 0.16 148 / 15%)", color: "oklch(0.65 0.16 145)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span className="font-semibold">You're on the list!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary sm:w-72"
                style={{ background: "oklch(1 0 0 / 10%)", borderColor: "oklch(1 0 0 / 15%)", color: "oklch(0.95 0.01 90)" }}
              />
              <button
                type="submit"
                className="w-full rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg sm:w-auto"
                style={{ background: "var(--gradient-basil)" }}
              >
                Join Waitlist
              </button>
            </form>
          )}

          <p className="mt-6 text-xs" style={{ color: "oklch(0.6 0.02 90)" }}>
            No spam, ever. We'll only email you when Basil is ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

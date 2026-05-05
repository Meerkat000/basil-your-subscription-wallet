import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LockKeyhole, Shield, Users } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative overflow-hidden bg-[#06121f] px-6 py-28 text-white lg:py-36">
      {/* Background orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7dd3fc]">Early access</p>
          <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl">
            Join the first wave of subscription control.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.8] text-white/[0.55]">
            Basil is a clean static demo today. The waitlist form is a placeholder — connect your preferred email capture tool when you're ready.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { icon: Shield, text: "Priority launch access" },
              { icon: Users, text: "Product updates only" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease }}
                  className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm font-bold text-white/[0.7]"
                >
                  <Icon className="h-4 w-4 text-[#7dd3fc]" />
                  {item.text}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="rounded-[2.2rem] border border-white/[0.08] bg-white/[0.05] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-5">
            <div className="rounded-[1.7rem] bg-white p-7 text-[#07111d] md:p-9">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#0f766e]">Reserve your spot</p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight">Get Basil first.</h3>
                </div>
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#07111d] text-white">
                  <LockKeyhole className="h-5 w-5" />
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  className="rounded-2xl bg-[#e7f8ef] p-6 text-[#047857]"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6" />
                    <span className="text-lg font-black">You're on the list!</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-[#0f766e]">
                    This placeholder can be connected to your preferred waitlist provider.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-2xl border border-[#dbe7f1] bg-[#f8fbff] px-6 py-4 text-base font-semibold text-[#07111d] outline-none transition-all placeholder:text-[#94a3b8] focus:border-[#0f766e]/30 focus:shadow-[0_0_0_4px_rgba(14,165,233,0.12)]"
                  />
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#07111d] px-6 py-4 text-base font-black text-white shadow-[0_16px_50px_rgba(7,17,29,0.25)] transition-shadow hover:shadow-[0_20px_60px_rgba(7,17,29,0.35)]"
                  >
                    Join waitlist
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </form>
              )}

              <p className="mt-6 text-center text-xs font-semibold leading-5 text-[#94a3b8]">
                Demo-only form — no account, payment, or backend.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

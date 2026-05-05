import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="section-padding bg-[#06121f] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#7dd3fc]">Early access</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Join the first wave of people taking back subscription control.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/[0.66]">
            Basil is a clean static demo today. The waitlist form is a placeholder ready for your preferred email capture tool later.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["Priority launch access", "Product updates only", "No backend added"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08 }}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-bold text-white/[0.78]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#7dd3fc]" />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_32px_100px_rgba(0,0,0,0.28)] backdrop-blur"
        >
          <div className="rounded-[1.5rem] bg-white p-6 text-[#07111d] md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#0f766e]">Reserve access</p>
                <h3 className="mt-2 text-3xl font-black">Get Basil first.</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111d] text-white">
                <LockKeyhole className="h-5 w-5" />
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-[#e7f8ef] p-5 text-[#047857]"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-black">You're on the list.</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#0f766e]">This placeholder can be connected to your waitlist provider later.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-[#dbe7f1] bg-[#f8fbff] px-5 py-4 text-base font-semibold text-[#07111d] outline-none transition-shadow placeholder:text-[#94a3b8] focus:shadow-[0_0_0_4px_rgba(14,165,233,0.15)]"
                />
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#07111d] px-5 py-4 text-base font-black text-white"
                >
                  Join waitlist
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            )}

            <p className="mt-5 text-xs font-semibold leading-5 text-[#64748b]">
              Demo-only form. No account, payment, or backend workflow has been added.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

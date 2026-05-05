import { motion } from "framer-motion";
import { CreditCard, DollarSign, ShieldCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Create a card",
    desc: "Generate a unique virtual card for each subscription in seconds. One subscription, one isolated card.",
    icon: CreditCard,
    visual: "→ Netflix Card •••• 7824",
  },
  {
    num: "02",
    title: "Set your limit",
    desc: "Define the maximum each subscription can charge per month. Overages are blocked automatically.",
    icon: DollarSign,
    visual: "$20.00 monthly cap set",
  },
  {
    num: "03",
    title: "Stay in control",
    desc: "Freeze, cancel, or get alerted instantly when something changes. Full control in one tap.",
    icon: ShieldCheck,
    visual: "✓ All cards protected",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#f8fbff] px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">How it works</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#07111d] md:text-5xl">
            Three steps to subscription freedom.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#5b6b7f]">
            No account linking, no bank credentials. Just clean control.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.65, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-[1.8rem] border border-[#dbe7f1] bg-white p-8 shadow-[0_12px_40px_rgba(15,35,55,0.05)] transition-all hover:border-[#0f766e]/20 hover:shadow-[0_20px_60px_rgba(15,35,55,0.1)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#0f766e] transition-colors group-hover:bg-[#07111d] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-black text-[#07111d]/[0.06]">{s.num}</span>
                </div>
                <h3 className="text-xl font-black text-[#07111d]">{s.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-[#5b6b7f]">{s.desc}</p>

                {/* Mini visual */}
                <div className="mt-6 rounded-xl bg-[#f0fdf4] px-4 py-3 text-xs font-bold text-[#0f766e]">
                  {s.visual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Easy to forget",
    desc: "Subscriptions pile up quietly. Most people can't name half the recurring charges on their statement.",
    stat: "73%",
    statLabel: "forget at least one",
  },
  {
    icon: AlertTriangle,
    title: "Hard to cancel",
    desc: "Dark patterns, buried cancel buttons, and 14-step flows make stopping payments unreasonably difficult.",
    stat: "42%",
    statLabel: "give up trying",
  },
  {
    icon: DollarSign,
    title: "Prices creep up",
    desc: "Services silently raise prices by $1–3, betting you won't notice the slow budget erosion.",
    stat: "$240",
    statLabel: "avg annual waste",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#06121f] px-6 py-28 lg:py-36">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(125,211,252,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7dd3fc]">The problem</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Subscriptions are quietly<br className="hidden md:block" /> draining your wallet.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-[1.8rem] border border-white/[0.08] bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-white/[0.15] hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7dd3fc]/[0.1] text-[#7dd3fc] transition-colors group-hover:bg-[#7dd3fc]/[0.2]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-white/[0.5]">{p.desc}</p>
                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="text-3xl font-black text-[#7dd3fc]">{p.stat}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-white/[0.35]">{p.statLabel}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

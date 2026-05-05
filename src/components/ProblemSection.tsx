import { motion } from "framer-motion";

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "Easy to forget",
    desc: "Subscriptions pile up quietly. Most people don't realize how many they're paying for.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    ),
    title: "Hard to cancel",
    desc: "Dark patterns and buried cancel buttons make it frustratingly difficult to stop payments.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    ),
    title: "Prices creep up",
    desc: "Services silently raise prices, hoping you won't notice the extra dollars each month.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding" style={{ background: "var(--gradient-dark)" }}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "oklch(0.65 0.16 145)" }}>
            The problem
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl" style={{ color: "oklch(0.97 0.01 90)" }}>
            Subscriptions are out of control
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
              className="rounded-2xl border p-6 text-center"
              style={{
                background: "oklch(1 0 0 / 5%)",
                borderColor: "oklch(1 0 0 / 10%)",
              }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "oklch(0.55 0.16 148 / 15%)", color: "oklch(0.65 0.16 145)" }}>
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold" style={{ color: "oklch(0.95 0.01 90)" }}>{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "oklch(0.7 0.02 90)" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Bell, CreditCard, LockKeyhole, Radar, SlidersHorizontal } from "lucide-react";
import { useRef } from "react";

const featureSteps = [
  {
    eyebrow: "01 Virtual card issued",
    title: "Give Netflix its own card.",
    desc: "Basil creates a dedicated subscription card with a clean merchant label and masked number.",
    icon: CreditCard,
    cardTitle: "Netflix Card",
    cardMeta: "Limit set at $20/mo",
    accent: "from-[#ff4b5c] to-[#8a1d2c]",
  },
  {
    eyebrow: "02 Spending limit active",
    title: "Set a ceiling before they can raise yours.",
    desc: "Monthly limits sit directly on the card so the next surprise increase gets stopped.",
    icon: SlidersHorizontal,
    cardTitle: "$20 monthly cap",
    cardMeta: "$15.99 used · $4.01 left",
    accent: "from-[#6ee7b7] to-[#047857]",
  },
  {
    eyebrow: "03 Price-change alert",
    title: "Catch the quiet price creep.",
    desc: "Basil flags attempted overages and lets you decide what happens before the charge clears.",
    icon: Bell,
    cardTitle: "Price increase blocked",
    cardMeta: "Attempted charge: $24.99",
    accent: "from-[#fbbf24] to-[#b45309]",
  },
  {
    eyebrow: "04 Freeze instantly",
    title: "Pause a subscription card in one tap.",
    desc: "Freeze one merchant without replacing your main card or disrupting anything else.",
    icon: LockKeyhole,
    cardTitle: "Card frozen",
    cardMeta: "Future Netflix charges paused",
    accent: "from-[#93c5fd] to-[#1d4ed8]",
  },
];

function PhoneLayer({
  index,
  progress,
  step,
}: {
  index: number;
  progress: MotionValue<number>;
  step: (typeof featureSteps)[number];
}) {
  const start = index / featureSteps.length;
  const mid = start + 0.1;
  const hold = start + 0.2;
  const end = Math.min(start + 0.31, 1);
  const opacity = useTransform(progress, [start, mid, hold, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid, hold, end], [36, 0, 0, -32]);
  const scale = useTransform(progress, [start, mid, hold, end], [0.94, 1, 1, 0.96]);
  const Icon = step.icon;

  return (
    <motion.div style={{ opacity, y, scale }} className="absolute inset-x-4 top-28">
      <div className={`rounded-[1.6rem] bg-gradient-to-br ${step.accent} p-4 text-white shadow-2xl`}>
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.18]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="rounded-full bg-white/[0.18] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
            Basil Card
          </span>
        </div>
        <div className="mt-8 text-sm text-white/[0.72]">•••• 7824</div>
        <div className="mt-2 text-2xl font-bold">{step.cardTitle}</div>
        <div className="mt-1 text-sm text-white/[0.78]">{step.cardMeta}</div>
      </div>
    </motion.div>
  );
}

export default function ScrollPhoneShowcase() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scanY = useTransform(scrollYProgress, [0, 1], ["8%", "88%"]);
  const screenGlow = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.18, 0.32, 0.26, 0.18]);

  return (
    <section ref={ref} className="relative bg-[#06121f] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-28">
        <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7 }}
            className="max-w-md"
          >
            <p className="text-sm font-semibold uppercase text-[#7dd3fc]">Interactive control layer</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] md:text-5xl">
              Watch Basil build control around every subscription.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/[0.68]">
              As you scroll, the phone adds a dedicated card, limit, alert, and freeze state. Each layer appears only while that feature is in focus.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_340px]">
          <div className="space-y-32 py-8 lg:py-24">
            {featureSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0.35, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-35% 0px -35% 0px" }}
                transition={{ duration: 0.55 }}
                className="max-w-md"
              >
                <div className="text-sm font-bold uppercase tracking-wide text-[#7dd3fc]">{step.eyebrow}</div>
                <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/[0.64]">{step.desc}</p>
              </motion.article>
            ))}
          </div>

          <div className="hidden lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-6rem)] lg:items-center lg:justify-center">
            <div className="relative h-[680px] w-[330px] rounded-[3rem] border border-white/[0.12] bg-[#0a1727] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.45)]">
              <div className="relative h-full overflow-hidden rounded-[2.45rem] border border-white/[0.08] bg-[#07111d]">
                <motion.div
                  style={{ opacity: screenGlow }}
                  className="absolute inset-x-8 top-12 h-48 rounded-full bg-[#38bdf8] blur-3xl"
                />
                <div className="relative flex items-center justify-between px-6 pt-5 text-[11px] font-semibold text-white/[0.76]">
                  <span>9:41</span>
                  <span>Basil</span>
                </div>
                <div className="relative px-5 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#07111d]">
                      <Radar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Subscription wallet</p>
                      <p className="text-xs text-white/[0.54]">4 cards protected</p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex justify-between text-xs text-white/[0.54]">
                      <span>Monthly exposure</span>
                      <span>$142.91</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left rounded-full bg-[#7dd3fc]" />
                    </div>
                  </div>
                </div>

                {featureSteps.map((step, index) => (
                  <PhoneLayer key={step.title} index={index} progress={scrollYProgress} step={step} />
                ))}

                <motion.div style={{ top: scanY }} className="absolute left-6 right-6 h-px bg-[#7dd3fc]/70 shadow-[0_0_18px_rgba(125,211,252,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

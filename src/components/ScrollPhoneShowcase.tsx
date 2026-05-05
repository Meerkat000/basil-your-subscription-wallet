import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Bell, CreditCard, LockKeyhole, Radar, SlidersHorizontal } from "lucide-react";
import { useRef } from "react";

const featureSteps = [
  {
    eyebrow: "01 Virtual card issued",
    title: "Give Netflix its own card.",
    desc: "Basil creates a dedicated subscription card with a clean merchant label and masked number. One subscription, one card, total isolation.",
    icon: CreditCard,
    cardTitle: "Netflix Card",
    cardMeta: "Limit set at $20/mo",
    accent: "from-[#ff4b5c] to-[#8a1d2c]",
    glowColor: "rgba(255,75,92,0.25)",
  },
  {
    eyebrow: "02 Spending limit active",
    title: "Set a ceiling before they can raise yours.",
    desc: "Monthly limits sit directly on the card. When your streaming service tries to bump the price, the limit you set stops it cold.",
    icon: SlidersHorizontal,
    cardTitle: "$20 monthly cap",
    cardMeta: "$15.99 used · $4.01 left",
    accent: "from-[#6ee7b7] to-[#047857]",
    glowColor: "rgba(52,211,153,0.25)",
  },
  {
    eyebrow: "03 Price-change alert",
    title: "Catch the quiet price creep.",
    desc: "Basil flags attempted overages and surfaces them in real time, letting you approve, block, or investigate before a single extra cent clears.",
    icon: Bell,
    cardTitle: "Price increase blocked",
    cardMeta: "Attempted charge: $24.99",
    accent: "from-[#fbbf24] to-[#b45309]",
    glowColor: "rgba(251,191,36,0.25)",
  },
  {
    eyebrow: "04 Freeze instantly",
    title: "Pause a subscription card in one tap.",
    desc: "Freeze one merchant without replacing your main card, calling your bank, or disrupting any other subscriptions. Unfreeze when you're ready.",
    icon: LockKeyhole,
    cardTitle: "Card frozen",
    cardMeta: "Future Netflix charges paused",
    accent: "from-[#93c5fd] to-[#1d4ed8]",
    glowColor: "rgba(59,130,246,0.25)",
  },
];

function PhoneScreen({
  index,
  progress,
  step,
  total,
}: {
  index: number;
  progress: MotionValue<number>;
  step: (typeof featureSteps)[number];
  total: number;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const fadeIn = start + segmentSize * 0.15;
  const holdStart = start + segmentSize * 0.25;
  const holdEnd = start + segmentSize * 0.75;
  const fadeOut = Math.min(start + segmentSize * 0.95, 0.99);

  const opacity = useTransform(
    progress,
    [start, fadeIn, holdStart, holdEnd, fadeOut],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, fadeIn, holdStart, holdEnd, fadeOut],
    [50, 0, 0, 0, -40]
  );
  const scale = useTransform(
    progress,
    [start, fadeIn, holdStart, holdEnd, fadeOut],
    [0.92, 1, 1, 1, 0.95]
  );
  const blur = useTransform(
    progress,
    [start, fadeIn, holdEnd, fadeOut],
    [8, 0, 0, 6]
  );

  const Icon = step.icon;

  return (
    <motion.div
      style={{ opacity, y, scale, filter: blur.get ? undefined : undefined }}
      className="absolute inset-x-4 top-28"
    >
      <motion.div style={{ filter: useTransform(blur, (v) => `blur(${v}px)`) }}>
        {/* Glow behind card */}
        <div
          className="absolute -inset-4 rounded-[2.5rem] blur-2xl"
          style={{ background: step.glowColor }}
        />

        <div className={`relative rounded-[1.6rem] bg-gradient-to-br ${step.accent} p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.3)]`}>
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.18] backdrop-blur">
              <Icon className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-white/[0.18] px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur">
              Basil Card
            </span>
          </div>

          <div className="mt-10 text-sm text-white/[0.6]">•••• 7824</div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            style={{ opacity }}
            className="mt-2 text-2xl font-black tracking-tight"
          >
            {step.cardTitle}
          </motion.div>
          <div className="mt-1.5 text-sm font-medium text-white/[0.72]">{step.cardMeta}</div>

          {/* Animated scan line */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </div>
      </motion.div>
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
  const screenGlow = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.12, 0.35, 0.28, 0.12]);
  const progressBarScale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

  return (
    <section ref={ref} className="relative bg-[#06121f] text-white" style={{ minHeight: `${featureSteps.length * 100 + 50}vh` }}>
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(125,211,252,0.4) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-28">
        {/* Left: sticky copy */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#7dd3fc]">Interactive control layer</p>
            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight md:text-5xl">
              Watch Basil build control around every subscription.
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-white/[0.6]">
              As you scroll, the phone layers in a dedicated card, spending limit, price-change alert, and freeze state. Each appears only while that feature is in view.
            </p>

            {/* Progress indicator */}
            <div className="mt-10 hidden lg:block">
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  style={{ scaleX: progressBarScale }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#34d399]"
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {featureSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.eyebrow}
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          [i / featureSteps.length, (i + 0.3) / featureSteps.length, (i + 0.7) / featureSteps.length, (i + 1) / featureSteps.length],
                          [0.3, 1, 1, 0.3]
                        ),
                      }}
                      className="flex items-center gap-2 text-xs font-bold text-white/60"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden xl:inline">{step.eyebrow.split(" ").slice(0, 2).join(" ")}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: scrolling steps + phone */}
        <div className="grid gap-14 lg:grid-cols-[1fr_340px]">
          {/* Text steps */}
          <div className="space-y-40 py-8 lg:py-32">
            {featureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0.2, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-35% 0px -35% 0px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-md"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08]">
                      <Icon className="h-4 w-4 text-[#7dd3fc]" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide text-[#7dd3fc]">{step.eyebrow}</span>
                  </div>
                  <h3 className="text-3xl font-black leading-tight tracking-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-base leading-[1.8] text-white/[0.55]">{step.desc}</p>
                </motion.article>
              );
            })}
          </div>

          {/* Sticky phone */}
          <div className="hidden lg:sticky lg:top-20 lg:flex lg:h-[calc(100vh-5rem)] lg:items-center lg:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[700px] w-[340px]"
            >
              {/* Phone shell */}
              <div className="absolute inset-0 rounded-[3rem] border border-white/[0.12] bg-[#0a1727] p-3 shadow-[0_50px_160px_rgba(0,0,0,0.5)]">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-[#0a1727]" />

                <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#07111d]">
                  {/* Screen glow */}
                  <motion.div
                    style={{ opacity: screenGlow }}
                    className="absolute inset-x-6 top-10 h-52 rounded-full bg-[#38bdf8] blur-[80px]"
                  />

                  {/* Status bar */}
                  <div className="relative flex items-center justify-between px-7 pt-8 text-[11px] font-bold text-white/[0.7]">
                    <span>9:41</span>
                    <span className="tracking-wide">Basil</span>
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                      <div className="h-2.5 w-5 rounded-full bg-white/30" />
                    </div>
                  </div>

                  {/* Wallet header */}
                  <div className="relative px-5 pt-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#07111d]">
                        <Radar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-black">Subscription wallet</p>
                        <p className="text-xs text-white/[0.45]">4 cards protected</p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                      <div className="flex justify-between text-xs text-white/[0.45]">
                        <span>Monthly exposure</span>
                        <span className="font-bold text-white/70">$142.91</span>
                      </div>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                        <motion.div
                          style={{ scaleX: scrollYProgress }}
                          className="h-full origin-left rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#34d399]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Feature layers */}
                  {featureSteps.map((step, index) => (
                    <PhoneScreen
                      key={step.title}
                      index={index}
                      progress={scrollYProgress}
                      step={step}
                      total={featureSteps.length}
                    />
                  ))}

                  {/* Scanning line */}
                  <motion.div
                    style={{ top: scanY }}
                    className="absolute left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#7dd3fc]/60 to-transparent shadow-[0_0_20px_rgba(125,211,252,0.6)]"
                  />
                </div>
              </div>

              {/* Phone reflection */}
              <div className="absolute -inset-1 -z-10 rounded-[3.2rem] bg-gradient-to-b from-white/[0.08] to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

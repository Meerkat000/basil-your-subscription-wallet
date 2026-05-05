import { motion } from "framer-motion";
import { BellRing, CreditCard, Eye, LockKeyhole, MousePointer2, WalletCards } from "lucide-react";

const features = [
  {
    title: "Merchant-specific cards",
    desc: "Issue one virtual card per recurring service, with merchant labeling and masked card details.",
    icon: CreditCard,
  },
  {
    title: "Live limit controls",
    desc: "Set monthly ceilings for every subscription before the renewal cycle starts.",
    icon: MousePointer2,
  },
  {
    title: "Instant freeze states",
    desc: "Pause a single subscription card without touching your primary bank card.",
    icon: LockKeyhole,
  },
  {
    title: "Price-change intelligence",
    desc: "Surface attempted overages, renewals, and price shifts before they become budget drift.",
    icon: BellRing,
  },
  {
    title: "Clean wallet overview",
    desc: "Track active, frozen, and risky subscriptions from one focused command center.",
    icon: WalletCards,
  },
  {
    title: "Privacy by design",
    desc: "Isolate subscription exposure so one merchant incident does not ripple across your wallet.",
    icon: Eye,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-[#f8fbff] px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">Premium control surface</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#07111d] md:text-5xl">
            A subscription wallet that feels calm, fast, and deliberate.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.55, ease }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-[1.6rem] border border-[#dbe7f1] bg-white p-7 shadow-[0_14px_44px_rgba(15,35,55,0.05)] transition-all hover:border-[#0f766e]/20 hover:shadow-[0_24px_70px_rgba(15,35,55,0.1)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#0f766e] transition-all duration-300 group-hover:bg-[#07111d] group-hover:text-white group-hover:shadow-[0_8px_30px_rgba(7,17,29,0.2)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-black text-[#07111d]">{feature.title}</h3>
                <p className="mt-3 text-sm leading-[1.7] text-[#5b6b7f]">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

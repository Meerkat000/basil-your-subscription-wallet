import { motion } from "framer-motion";

const cards = [
  { name: "Netflix", amount: "$15.99", color: "oklch(0.55 0.22 25)", icon: "🎬" },
  { name: "Spotify", amount: "$9.99", color: "oklch(0.6 0.2 145)", icon: "🎵" },
  { name: "iCloud", amount: "$2.99", color: "oklch(0.7 0.1 250)", icon: "☁️" },
  { name: "Gym Pass", amount: "$29.99", color: "oklch(0.6 0.15 50)", icon: "💪" },
];

export default function SubscriptionCards() {
  return (
    <div className="relative h-[420px] w-[340px] md:h-[480px] md:w-[380px]">
      {/* Wallet base */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] rounded-2xl p-5 glass-card-strong"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-basil)" }}>
            <span className="text-lg">🌿</span>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Basil Wallet</p>
            <p className="text-xs text-muted-foreground">4 active cards</p>
          </div>
        </div>
        <div className="h-px bg-border mb-3" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Monthly total</span>
          <span className="font-semibold text-foreground">$58.96</span>
        </div>
      </motion.div>

      {/* Floating subscription cards */}
      {cards.map((card, i) => (
        <motion.div
          key={card.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -8 - i * 2, 0],
            rotate: [-2 + i * 1.5, 0, -2 + i * 1.5],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.5 + i * 0.15 },
            y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            rotate: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
          className="absolute rounded-xl p-3 shadow-lg backdrop-blur-xl"
          style={{
            background: `linear-gradient(135deg, ${card.color} 0%, oklch(0.3 0.05 150) 100%)`,
            width: i % 2 === 0 ? "160px" : "150px",
            top: `${20 + i * 55}px`,
            left: i % 2 === 0 ? "0px" : "auto",
            right: i % 2 !== 0 ? "0px" : "auto",
            zIndex: 10 + i,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg">{card.icon}</span>
            <span className="text-[10px] font-medium text-cream/70">•••• 4242</span>
          </div>
          <p className="text-xs font-semibold" style={{ color: "oklch(0.97 0.01 90)" }}>{card.name}</p>
          <p className="text-sm font-bold" style={{ color: "oklch(0.97 0.01 90)" }}>{card.amount}<span className="text-[10px] font-normal opacity-70">/mo</span></p>
          {/* Connector line to wallet */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="absolute -bottom-4 left-1/2 h-4 w-px"
            style={{ background: "linear-gradient(to bottom, oklch(0.55 0.16 148 / 50%), transparent)" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

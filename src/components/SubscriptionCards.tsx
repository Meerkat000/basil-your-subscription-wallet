import { motion } from "framer-motion";
import { LockKeyhole, Pause, RadioTower, ShieldCheck } from "lucide-react";

const cards = [
  { name: "Netflix", amount: "$15.99", limit: "$20 cap", brand: "NF", gradient: "from-[#ff4b5c] to-[#7f1d1d]", x: -44, y: 4, rotate: -8 },
  { name: "Spotify", amount: "$9.99", limit: "$12 cap", brand: "SP", gradient: "from-[#34d399] to-[#047857]", x: 58, y: 86, rotate: 7 },
  { name: "Adobe", amount: "$54.99", limit: "$55 cap", brand: "AD", gradient: "from-[#fb7185] to-[#9f1239]", x: -18, y: 174, rotate: -3 },
];

export default function SubscriptionCards() {
  return (
    <div className="relative h-[520px] w-[360px] md:h-[590px] md:w-[420px]">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-8 bottom-0 rounded-[2.2rem] border border-white/70 bg-[#07111d] p-5 text-white shadow-[0_34px_90px_rgba(7,17,29,0.28)]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-white/[0.72]">Basil Wallet</p>
            <p className="mt-1 text-3xl font-black">$80.97</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#07111d]">
            <ShieldCheck className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {["3 cards", "1 alert", "$7 saved"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/[0.08] px-3 py-2 text-center text-xs font-semibold text-white/[0.72]">
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.55 }}
        className="absolute left-8 top-10 w-[280px] rounded-[2rem] border border-white/70 bg-white/[0.82] p-4 shadow-2xl backdrop-blur"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-[#64748b]">Subscription health</p>
            <p className="text-2xl font-black text-[#07111d]">Protected</p>
          </div>
          <RadioTower className="h-5 w-5 text-[#0f766e]" />
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#e2e8f0]">
          <motion.div
            initial={{ width: "12%" }}
            animate={{ width: "78%" }}
            transition={{ delay: 0.65, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full rounded-full bg-[#0f766e]"
          />
        </div>
      </motion.div>

      {cards.map((card, index) => (
        <motion.div
          key={card.name}
          initial={{ opacity: 0, y: 60, rotate: card.rotate - 8 }}
          animate={{
            opacity: 1,
            y: [card.y, card.y - 10, card.y],
            rotate: [card.rotate, card.rotate + 1.5, card.rotate],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.55 + index * 0.14 },
            y: { duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
          }}
          className={`absolute left-1/2 top-24 w-[230px] -translate-x-1/2 rounded-[1.65rem] bg-gradient-to-br ${card.gradient} p-4 text-white shadow-2xl`}
          style={{ marginLeft: card.x, zIndex: 20 + index }}
        >
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-black">{card.brand}</div>
            <span className="text-[11px] font-semibold text-white/70">•••• 4242</span>
          </div>
          <div className="mt-8">
            <p className="text-lg font-black">{card.name}</p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-sm text-white/70">{card.limit}</p>
              <p className="text-xl font-black">{card.amount}</p>
            </div>
          </div>
          <motion.div
            animate={{ opacity: [0.35, 0.8, 0.35], scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.25 }}
            className="absolute -bottom-7 left-1/2 h-7 w-px origin-top bg-white/50"
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        className="absolute bottom-28 right-0 rounded-2xl border border-white/70 bg-white/[0.88] px-4 py-3 text-sm font-bold text-[#07111d] shadow-xl backdrop-blur"
      >
        <div className="flex items-center gap-2">
          <Pause className="h-4 w-4 text-[#1d4ed8]" />
          Freeze ready
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-12 left-0 rounded-2xl border border-white/70 bg-white/[0.88] px-4 py-3 text-sm font-bold text-[#07111d] shadow-xl backdrop-blur"
      >
        <div className="flex items-center gap-2">
          <LockKeyhole className="h-4 w-4 text-[#0f766e]" />
          Merchant locked
        </div>
      </motion.div>
    </div>
  );
}

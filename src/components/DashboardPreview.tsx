import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Lock, MoreHorizontal, TrendingDown } from "lucide-react";

const subs = [
  { name: "Netflix", initials: "NF", amount: "$15.99", limit: "$20.00", status: "Active", tone: "green" },
  { name: "Spotify", initials: "SP", amount: "$9.99", limit: "$12.00", status: "Active", tone: "green" },
  { name: "Adobe CC", initials: "AD", amount: "$54.99", limit: "$55.00", status: "Watch", tone: "amber" },
  { name: "Gym Pass", initials: "GP", amount: "$29.99", limit: "$30.00", status: "Frozen", tone: "blue" },
  { name: "iCloud", initials: "IC", amount: "$2.99", limit: "$5.00", status: "Active", tone: "green" },
];

function StatusBadge({ tone, status }: { tone: string; status: string }) {
  const styles: Record<string, string> = {
    green: "bg-[#e7f8ef] text-[#047857]",
    amber: "bg-[#fff4d6] text-[#b45309]",
    blue: "bg-[#e8f1ff] text-[#1d4ed8]",
  };
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-black ${styles[tone]}`}>{status}</span>;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden bg-white px-6 py-28 lg:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 grid gap-6 lg:grid-cols-[0.65fr_1fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0f766e]">Dashboard preview</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#07111d] md:text-5xl">
              One screen for every recurring charge.
            </h2>
          </div>
          <p className="text-base leading-[1.8] text-[#5b6b7f] lg:text-lg">
            A premium fintech dashboard that makes the next action obvious: raise a limit, freeze a card, or ignore a healthy subscription.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease }}
          className="overflow-hidden rounded-[2rem] border border-[#dbe7f1] bg-white shadow-[0_40px_120px_rgba(15,35,55,0.12)]"
        >
          {/* Browser chrome */}
          <div className="flex items-center justify-between border-b border-[#e5edf5] bg-[#07111d] px-6 py-4 text-white">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <div className="h-3 w-3 rounded-full bg-[#ffd166]" />
              <div className="h-3 w-3 rounded-full bg-[#34d399]" />
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.08] px-4 py-1.5">
              <div className="h-2 w-2 rounded-full bg-[#34d399]" />
              <p className="text-xs font-bold tracking-wide text-white/60">app.trybasil.com</p>
            </div>
            <MoreHorizontal className="h-5 w-5 text-white/[0.4]" />
          </div>

          <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-[#e5edf5] bg-[#f8fbff] p-6 lg:border-b-0 lg:border-r">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease }}
                className="rounded-[1.5rem] bg-[#07111d] p-5 text-white"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-white/40">Monthly exposure</p>
                <p className="mt-3 text-4xl font-black tracking-tight">$113.95</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#7dd3fc]">
                  <TrendingDown className="h-4 w-4" />
                  $18.40 below limits
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 0.72 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1.2, ease }}
                    className="h-full origin-left rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#34d399]"
                  />
                </div>
              </motion.div>

              <div className="mt-5 grid gap-3">
                {[
                  { label: "Cards protected", value: "5", icon: CheckCircle2 },
                  { label: "Frozen cards", value: "1", icon: Lock },
                  { label: "Needs review", value: "1", icon: AlertTriangle },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + index * 0.1, duration: 0.5, ease }}
                      className="flex items-center justify-between rounded-2xl border border-[#e5edf5] bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[#0f766e]" />
                        <span className="text-sm font-bold text-[#425466]">{item.label}</span>
                      </div>
                      <span className="text-lg font-black text-[#07111d]">{item.value}</span>
                    </motion.div>
                  );
                })}
              </div>
            </aside>

            {/* Table area */}
            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#07111d]">Subscription cards</h3>
                  <p className="mt-1 text-sm text-[#64748b]">Merchant limits and card states</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-[#07111d] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(7,17,29,0.15)]"
                >
                  Create card
                </motion.button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#e5edf5]">
                <div className="grid grid-cols-[1fr_90px_90px_90px] gap-4 bg-[#f8fbff] px-5 py-3 text-xs font-black uppercase tracking-wide text-[#64748b]">
                  <span>Merchant</span>
                  <span className="text-right">Charge</span>
                  <span className="text-right">Limit</span>
                  <span className="text-right">Status</span>
                </div>
                {subs.map((sub, index) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.07, duration: 0.45, ease }}
                    className="grid grid-cols-[1fr_90px_90px_90px] items-center gap-4 border-t border-[#e5edf5] px-5 py-4 transition-colors hover:bg-[#f8fbff]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef6fc] text-xs font-black text-[#07111d]">{sub.initials}</span>
                      <span className="text-sm font-black text-[#07111d]">{sub.name}</span>
                    </div>
                    <span className="text-right text-sm font-bold text-[#07111d]">{sub.amount}</span>
                    <span className="text-right text-sm font-semibold text-[#64748b]">{sub.limit}</span>
                    <div className="text-right"><StatusBadge tone={sub.tone} status={sub.status} /></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

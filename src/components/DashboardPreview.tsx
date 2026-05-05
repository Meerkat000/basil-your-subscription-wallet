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

export default function DashboardPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_1fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#0f766e]">Mock dashboard preview</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#07111d] md:text-5xl">One screen for every recurring charge.</h2>
          </div>
          <p className="text-base leading-7 text-[#5b6b7f]">
            A premium fintech dashboard should make the next action obvious: raise a limit, freeze a card, or ignore a healthy subscription.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem] border border-[#dbe7f1] bg-white shadow-[0_32px_110px_rgba(15,35,55,0.12)]"
        >
          <div className="flex items-center justify-between border-b border-[#e5edf5] bg-[#07111d] px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <div className="h-3 w-3 rounded-full bg-[#ffd166]" />
              <div className="h-3 w-3 rounded-full bg-[#34d399]" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wide text-white/60">app.trybasil.com</p>
            <MoreHorizontal className="h-5 w-5 text-white/[0.54]" />
          </div>

          <div className="grid gap-0 lg:grid-cols-[270px_1fr]">
            <aside className="border-b border-[#e5edf5] bg-[#f8fbff] p-5 lg:border-b-0 lg:border-r">
              <div className="rounded-3xl bg-[#07111d] p-5 text-white">
                <p className="text-xs font-bold uppercase text-white/50">Monthly exposure</p>
                <p className="mt-3 text-4xl font-black">$113.95</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#7dd3fc]">
                  <TrendingDown className="h-4 w-4" />
                  $18.40 below limits
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  { label: "Cards protected", value: "5", icon: CheckCircle2 },
                  { label: "Frozen cards", value: "1", icon: Lock },
                  { label: "Needs review", value: "1", icon: AlertTriangle },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + index * 0.08 }}
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

            <div className="p-5 md:p-7">
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#07111d]">Subscription cards</h3>
                  <p className="text-sm text-[#64748b]">Merchant limits and card states in one table.</p>
                </div>
                <button className="rounded-full bg-[#07111d] px-5 py-2.5 text-sm font-bold text-white">Create card</button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#e5edf5]">
                <div className="grid grid-cols-[1fr_90px_90px_90px] gap-4 bg-[#f8fbff] px-4 py-3 text-xs font-black uppercase tracking-wide text-[#64748b]">
                  <span>Merchant</span>
                  <span className="text-right">Charge</span>
                  <span className="text-right">Limit</span>
                  <span className="text-right">Status</span>
                </div>
                {subs.map((sub, index) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + index * 0.07 }}
                    className="grid grid-cols-[1fr_90px_90px_90px] items-center gap-4 border-t border-[#e5edf5] px-4 py-4 transition-colors hover:bg-[#f8fbff]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef6fc] text-xs font-black text-[#07111d]">{sub.initials}</span>
                      <span className="text-sm font-black text-[#07111d]">{sub.name}</span>
                    </div>
                    <span className="text-right text-sm font-bold text-[#07111d]">{sub.amount}</span>
                    <span className="text-right text-sm font-semibold text-[#64748b]">{sub.limit}</span>
                    <div className="text-right">
                      <StatusBadge tone={sub.tone} status={sub.status} />
                    </div>
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

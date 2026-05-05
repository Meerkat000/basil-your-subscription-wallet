import { motion } from "framer-motion";

const subs = [
  { name: "Netflix", amount: "$15.99", limit: "$20.00", status: "active", icon: "🎬" },
  { name: "Spotify", amount: "$9.99", limit: "$12.00", status: "active", icon: "🎵" },
  { name: "Adobe CC", amount: "$54.99", limit: "$55.00", status: "alert", icon: "🎨" },
  { name: "Gym Pass", amount: "$29.99", limit: "$30.00", status: "frozen", icon: "💪" },
  { name: "iCloud", amount: "$2.99", limit: "$5.00", status: "active", icon: "☁️" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, { bg: string; text: string; label: string }> = {
    active: { bg: "oklch(0.55 0.16 148 / 15%)", text: "oklch(0.55 0.16 148)", label: "Active" },
    alert: { bg: "oklch(0.7 0.18 60 / 15%)", text: "oklch(0.65 0.18 60)", label: "Price Alert" },
    frozen: { bg: "oklch(0.6 0.1 250 / 15%)", text: "oklch(0.55 0.1 250)", label: "Frozen" },
  };
  const s = styles[status] || styles.active;
  return (
    <span className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style={{ background: s.bg, color: s.text }}>
      {s.label}
    </span>
  );
}

export default function DashboardPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Dashboard preview</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Your subscriptions at a glance</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-card-strong overflow-hidden hero-glow"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full" style={{ background: "oklch(0.65 0.2 25)" }} />
              <div className="h-3 w-3 rounded-full" style={{ background: "oklch(0.8 0.15 85)" }} />
              <div className="h-3 w-3 rounded-full" style={{ background: "oklch(0.65 0.16 145)" }} />
            </div>
            <p className="text-xs font-medium text-muted-foreground">app.trybasil.com</p>
            <div />
          </div>

          {/* Dashboard content */}
          <div className="p-6">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Active cards", value: "5", change: "+1 this month" },
                { label: "Monthly spend", value: "$113.95", change: "Under budget" },
                { label: "Alerts", value: "1", change: "Price increase" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl bg-muted/50 p-4"
                >
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-[11px] text-primary font-medium">{stat.change}</p>
                </motion.div>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 border-b border-border bg-muted/30 px-4 py-2.5 text-xs font-semibold text-muted-foreground">
                <span>Subscription</span>
                <span className="text-right">Amount</span>
                <span className="text-right">Limit</span>
                <span className="text-right">Status</span>
              </div>
              {subs.map((sub, i) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 border-b border-border/50 px-4 py-3 last:border-0 hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{sub.icon}</span>
                    <span className="text-sm font-medium text-foreground">{sub.name}</span>
                  </div>
                  <span className="text-sm text-foreground text-right">{sub.amount}</span>
                  <span className="text-sm text-muted-foreground text-right">{sub.limit}</span>
                  <div className="text-right"><StatusBadge status={sub.status} /></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

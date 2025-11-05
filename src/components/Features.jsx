import { Bot, ChartLine, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI Reconciliation',
    desc: 'Let autonomous agents match transactions, flag anomalies, and generate audit trails in realtime.'
  },
  {
    icon: ChartLine,
    title: 'Cash Flow Insights',
    desc: 'Forecast inflows and outflows, track runway, and get alerts before risks become emergencies.'
  },
  {
    icon: Zap,
    title: 'One-click Automations',
    desc: 'Connect banks, ERPs, and ledgers to trigger approvals, postings, and reports—hands-free.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto w-full max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for modern finance teams</h2>
        <p className="mt-3 text-white/70">Powerful automation with the safety, visibility, and control you need.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur transition hover:bg-white/[0.08]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20" />
          </div>
        ))}
      </div>
    </section>
  );
}

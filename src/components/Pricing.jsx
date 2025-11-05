import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      'Up to 3 bank connections',
      'Basic reconciliation',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: '$49',
    period: 'per month',
    highlight: true,
    features: [
      'Unlimited bank connections',
      'AI anomaly detection',
      'Automated reporting',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'SSO & SCIM',
      'Dedicated environment',
      'SLA & onboarding'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you scale. No contracts. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.highlight
                  ? 'border-emerald-400/30 bg-white/10'
                  : 'border-white/10 bg-white/5'
              } relative flex flex-col rounded-2xl border p-6 backdrop-blur`}
            >
              <div className="mb-4 text-sm text-white/70">{tier.name}</div>
              <div className="flex items-baseline gap-2">
                <div className="text-4xl font-semibold">{tier.price}</div>
                {tier.period && <div className="text-xs text-white/60">{tier.period}</div>}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`${
                  tier.highlight
                    ? 'bg-emerald-400 text-slate-950 hover:bg-emerald-300'
                    : 'bg-white/10 text-white hover:bg-white/15'
                } mt-8 inline-flex items-center justify-center rounded-full px-4 py-2 font-medium transition`}
              >
                {tier.highlight ? 'Start free trial' : 'Contact sales'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';
import { Rocket, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth (allow interactions with Spline) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {/* Top navigation */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 backdrop-blur">
              <Shield className="h-5 w-5 text-emerald-300" />
            </div>
            <span className="text-lg tracking-tight">AutonomiQ Finance</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a
              href="#pricing"
              className="rounded-full bg-white text-slate-900 px-4 py-2 font-medium shadow-lg shadow-emerald-500/10 hover:opacity-90"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Hero copy */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-24">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Rocket className="h-3.5 w-3.5 text-emerald-300" />
              Launch your automated finance ops in minutes
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Automate cash flow, compliance, and reconciliation
            </h1>
            <p className="mt-4 text-base text-white/80 md:text-lg">
              A modern fintech workspace powered by AI agents. Connect your banks and ledgers, then watch real-time automations reconcile transactions, generate reports, and keep you audit-ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 shadow ring-1 ring-emerald-300 transition hover:bg-emerald-300"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
              <div>Bank-grade encryption</div>
              <div className="h-1 w-1 rounded-full bg-white/30" />
              <div>SOC 2 Type II</div>
              <div className="h-1 w-1 rounded-full bg-white/30" />
              <div>14-day free trial</div>
            </div>
          </div>
          {/* Right column intentionally left for 3D scene focus */}
          <div className="h-[420px] md:h-[560px]" />
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, ArrowLeft, Check, ShieldCheck, BarChart3, Eye, TrendingUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Solution } from '@/config/solutions';
import { solutions, solutionThemes } from '@/config/solutions';
import { SectionHeading } from '@/components/SectionHeading';
import { CapabilityGrid } from '@/components/CapabilityGrid';
import { ScreenshotPlaceholder } from '@/components/ScreenshotPlaceholder';
import { QRCodeCard } from '@/components/QRCodeCard';

interface SolutionDetailPageProps {
  solution: Solution;
  onNavigate: (route: string) => void;
}

export function SolutionDetailPage({ solution, onNavigate }: SolutionDetailPageProps) {
  const theme = solutionThemes[solution.theme];
  const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[solution.themeIcon] || Icons.Monitor;
  const nextSolution = solutions.find((s) => s.number === String(parseInt(solution.number) + 1).padStart(2, '0')) || solutions[0];

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient} pt-32 pb-20`}>
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="container-app relative z-10">
          {/* Breadcrumb */}
          <button
            onClick={() => onNavigate('/solutions')}
            className="reveal mb-6 flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All Digital Solutions
          </button>

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 reveal">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <IconComp className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/60">
                    {solution.number} &middot; {solution.name}
                  </div>
                </div>
              </div>

              <h1 className="mt-6 text-display font-extrabold leading-[1.05] text-white text-balance reveal">
                {solution.heroHeading}
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-white/80 text-pretty reveal">
                {solution.heroSubheading}
              </p>
              {solution.altName && (
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent-300 reveal">
                  Also known as: {solution.altName}
                </p>
              )}
            </div>

            {/* QR Code */}
            <div className="reveal hidden lg:block">
              <QRCodeCard label={`Explore ${solution.name}`} url={solution.qrCode} compact />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className={`eyebrow ${theme.text} reveal`}>
                <span className="h-px w-6 bg-current opacity-50" />
                Overview
              </div>
              <h2 className="mt-4 text-headline font-bold text-primary-900 text-balance reveal">
                {solution.tagline}
              </h2>
              <div className="mt-6 space-y-4">
                {solution.overview.map((para, idx) => (
                  <p key={idx} className="text-lg leading-relaxed text-neutral-600 text-pretty reveal">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick facts sidebar */}
            <div className="reveal">
              <div className="card sticky top-24 p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">At a Glance</h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs font-medium text-neutral-500">System</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-primary-900">{solution.name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-neutral-500">Full Name</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-primary-900">{solution.fullName}</dd>
                  </div>
                  {solution.altName && (
                    <div>
                      <dt className="text-xs font-medium text-neutral-500">Also Known As</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-primary-900">{solution.altName}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs font-medium text-neutral-500">Focus Area</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-primary-900">{solution.tagline}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-neutral-500">Capabilities</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-primary-900">{solution.capabilities.length} key features</dd>
                  </div>
                </dl>
                <button
                  onClick={() => onNavigate('/brochure')}
                  className="mt-6 w-full btn-secondary !py-2.5"
                >
                  View in Brochure
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHALLENGE & SOLUTION ────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Challenge */}
            <div className="reveal">
              <div className="eyebrow text-neutral-500">
                <span className="h-px w-6 bg-current opacity-50" />
                The Challenge
              </div>
              <h2 className="mt-4 text-title font-bold text-primary-900 text-balance">
                The Problem We Addressed
              </h2>
              <div className="mt-6 space-y-3">
                {solution.challenge.map((para, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    <p className="text-base leading-relaxed text-neutral-600 text-pretty">{para}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="reveal">
              <div className={`eyebrow ${theme.text}`}>
                <span className="h-px w-6 bg-current opacity-50" />
                The Digital Solution
              </div>
              <h2 className="mt-4 text-title font-bold text-primary-900 text-balance">
                How We Addressed It
              </h2>
              <div className="mt-6 space-y-3">
                {solution.solution.map((para, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.accent}`} />
                    <p className="text-base leading-relaxed text-neutral-600 text-pretty">{para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY CAPABILITIES ─────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Key Capabilities"
            title={`What ${solution.name} Does`}
            subtitle="The platform provides a comprehensive set of digital capabilities designed to replace manual processes with structured, auditable workflows."
          />
          <div className="mt-12">
            <CapabilityGrid items={solution.capabilities} columns={3} />
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW ─────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Workflow"
            title="How the System Works"
            subtitle="The platform guides users through a structured digital workflow — from initial input through to reporting and oversight."
          />

          <div className="mt-14">
            {/* Horizontal workflow on desktop */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-neutral-200 via-neutral-200 to-neutral-200" />
                <div className="grid grid-cols-5 gap-4">
                  {solution.workflow.map((step, idx) => (
                    <div key={step.step} className="reveal relative flex flex-col items-center text-center" style={{ transitionDelay: `${idx * 100}ms` }}>
                      <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${theme.accent} text-sm font-bold text-white shadow-lg`}>
                        {step.step}
                      </div>
                      <h3 className="mt-4 text-sm font-bold text-primary-900">{step.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-500">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical workflow on mobile */}
            <div className="space-y-4 lg:hidden">
              {solution.workflow.map((step, idx) => (
                <div key={step.step} className="reveal flex gap-4 rounded-xl border border-neutral-200 bg-white p-5" style={{ transitionDelay: `${idx * 60}ms` }}>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${theme.accent} text-sm font-bold text-white`}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Benefits"
                title="What the System Delivers"
                subtitle="The platform delivers tangible improvements over manual processes — improving visibility, accountability and efficiency across the relevant County function."
                center={false}
              />
            </div>
            <div className="reveal">
              <ul className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${theme.chip}`}>
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCREENSHOTS ──────────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Screenshots"
            title="System Interface"
            subtitle="The following screenshots illustrate key screens of the platform. Screenshots will be inserted when available."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {solution.screenshots.map((shot, idx) => (
              <ScreenshotPlaceholder
                key={idx}
                label={shot.label}
                className="reveal aspect-video"
              />
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-neutral-400 reveal">
            Screenshots are placeholders. Real system screenshots will be inserted when available.
          </p>
        </div>
      </section>

      {/* ─── DATA & ANALYTICS ─────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className={`eyebrow ${theme.text}`}>
                <BarChart3 className="h-3.5 w-3.5" />
                Data & Analytics
              </div>
              <h2 className="mt-4 text-title font-bold text-primary-900 text-balance">
                Turning Operations Into Management Information
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 text-pretty">
                The system captures operational data and turns it into useful management information through
                dashboards, reports and analytics.
              </p>
              <ul className="mt-6 space-y-3">
                {solution.analytics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.accent}`} />
                    <span className="text-sm text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics visual placeholder */}
            <div className="reveal">
              <div className="card overflow-hidden p-1">
                <div className="rounded-xl bg-gradient-to-br from-primary-950 to-primary-800 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold uppercase tracking-wider text-white/40">Analytics Dashboard</div>
                    <BarChart3 className="h-4 w-4 text-white/30" />
                  </div>
                  {/* Mock chart bars */}
                  <div className="mt-6 flex h-48 items-end justify-between gap-2">
                    {[40, 65, 45, 80, 55, 70, 90, 60].map((h, idx) => (
                      <div key={idx} className="flex-1 rounded-t bg-gradient-to-t from-primary-500/40 to-secondary-400/60" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] text-white/30">
                    {['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'].map((q) => (
                      <span key={q}>{q}</span>
                    ))}
                  </div>
                  {/* Mock stat cards */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {['Total', 'Active', 'Pending'].map((label, idx) => (
                      <div key={idx} className="rounded-lg bg-white/5 p-3">
                        <div className="text-[10px] uppercase tracking-wider text-white/40">{label}</div>
                        <div className="mt-1 h-6 w-12 rounded bg-white/10" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-center text-[10px] text-white/30">Illustrative dashboard layout — data to be inserted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE & ACCOUNTABILITY ──────────────────── */}
      <section className="bg-primary-950 py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="reveal">
              <div className="eyebrow text-accent-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                Governance
              </div>
              <h2 className="mt-4 text-title font-bold text-white text-balance">
                Built for Oversight and Control
              </h2>
              <ul className="mt-6 space-y-3">
                {solution.governance.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <div className="eyebrow text-secondary-300">
                <Eye className="h-3.5 w-3.5" />
                Accountability
              </div>
              <h2 className="mt-4 text-title font-bold text-white text-balance">
                Transparent, Traceable, Auditable
              </h2>
              <ul className="mt-6 space-y-3">
                {solution.accountability.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <Eye className="mt-0.5 h-5 w-5 shrink-0 text-secondary-300" />
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUTURE OPPORTUNITIES ─────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Future Opportunities"
            title="Looking Ahead"
            subtitle="The platform provides a foundation for future enhancement. These opportunities represent potential directions — not features that are currently implemented."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {solution.futureOpportunities.map((opp, idx) => (
              <div
                key={idx}
                className="reveal flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-5"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-secondary-600" />
                <span className="text-sm font-medium text-neutral-700">{opp}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-neutral-400 reveal">
            Future opportunities are potential directions for development, not confirmed features.
          </p>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <section className={`bg-gradient-to-br ${theme.gradient} py-20`}>
        <div className="container-app">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-headline font-bold text-white text-balance reveal">
                Explore {solution.name} Further
              </h2>
              <p className="mt-4 text-white/80 reveal">
                Download our digital brochure for a detailed overview of {solution.name} and all four platforms.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 reveal">
              <button onClick={() => onNavigate('/brochure')} className="btn-accent">
                Download Brochure
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigate(`/solutions/${nextSolution.id}`)} className="btn-ghost border border-white/20 hover:bg-white/10">
                Next: {nextSolution.name}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

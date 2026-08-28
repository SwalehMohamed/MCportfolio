import { ArrowRight, Download, Sparkles, FileSearch, Workflow, BarChart3, ShieldCheck, TrendingUp } from 'lucide-react';
import { solutions } from '@/config/solutions';
import { SolutionCard } from '@/components/SolutionCard';
import { SectionHeading } from '@/components/SectionHeading';
import { siteConfig } from '@/config/site';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-primary-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={siteConfig.heroImage}
            alt={siteConfig.heroImageAlt}
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-950/85 to-primary-900/70" />
          <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
        </div>

        {/* Decorative floating orbs */}
        <div className="pointer-events-none absolute top-1/4 right-10 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl animate-pulse-slow" />
        <div className="pointer-events-none absolute bottom-1/4 left-10 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl animate-pulse-slow" />

        {/* Content */}
        <div className="container-app relative z-10 pt-20 pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent-300 opacity-init animate-fade-in-down">
              <span className="h-px w-8 bg-current opacity-60" />
              Mombasa County Government &middot; Digital Transformation Sub-Department
            </div>

            <h1 className="mt-6 text-display font-extrabold leading-[1.05] text-white text-balance opacity-init animate-fade-in-up animate-delay-100">
              Digital Transformation for a{' '}
              <span className="bg-gradient-to-r from-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Smarter Mombasa
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty opacity-init animate-fade-in-up animate-delay-200">
              The Mombasa County Government Digital Transformation Sub-Department is leveraging
              technology, data and innovation to modernise government processes, improve accountability
              and strengthen service delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 opacity-init animate-fade-in-up animate-delay-300">
              <button onClick={() => onNavigate('/solutions')} className="btn-primary">
                Explore Our Digital Solutions
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigate('/brochure')} className="btn-ghost border border-white/20 hover:bg-white/10">
                <Download className="h-4 w-4" />
                Download Our Digital Brochure
              </button>
            </div>

            {/* Stats / tagline strip */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 opacity-init animate-fade-in-up animate-delay-400">
              {['Transparency', 'Accountability', 'Efficiency', 'Citizen Engagement'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm font-medium text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary-400" />
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-init animate-fade-in animate-delay-500">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
            <div className="h-2 w-1 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── INTRODUCTION ────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="eyebrow text-secondary-600 reveal">
                <span className="h-px w-6 bg-current opacity-50" />
                Introduction
              </div>
              <h2 className="mt-4 text-headline font-bold text-primary-900 text-balance reveal">
                Transforming How Government Works
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600 text-pretty reveal">
                Digital transformation is about more than moving from paper to screens. It is about
                redesigning how government works — making processes more efficient, information more
                accessible, decisions more informed and services more responsive to the people of Mombasa.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500 text-pretty reveal">
                The Digital Transformation Sub-Department works to identify opportunities where technology
                can improve County operations and public service delivery — developing and implementing
                digital platforms that address real operational challenges.
              </p>
            </div>

            {/* Transformation journey visual */}
            <div className="reveal">
              <div className="card overflow-hidden p-1">
                <div className="rounded-xl bg-gradient-to-br from-primary-950 to-primary-800 p-8">
                  <div className="flex items-center gap-2 text-accent-300">
                    <Sparkles className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">The Transformation Journey</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      { icon: FileSearch, label: 'From Manual Processes', desc: 'Paper-based, dispersed, hard to track' },
                      { icon: Workflow, label: 'To Digital Workflows', desc: 'Structured, guided, auditable' },
                      { icon: BarChart3, label: 'To Data', desc: 'Centralised, visible, actionable' },
                      { icon: ShieldCheck, label: 'To Better Decisions', desc: 'Informed, transparent, accountable' },
                      { icon: TrendingUp, label: 'To Better Service Delivery', desc: 'Responsive, efficient, people-centred' },
                    ].map((step, idx) => {
                      const Icon = step.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-secondary-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-white">{step.label}</div>
                            <div className="text-xs text-white/50">{step.desc}</div>
                          </div>
                          {idx < 4 && (
                            <div className="hidden text-white/20 sm:block">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUR SOLUTIONS ──────────────────────────────── */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Digital Solutions"
            title="Four Platforms. One Transformation Journey."
            subtitle="Each system demonstrates how digital technology can support a different area of county government — from accountability and project management to education support and financial inclusion."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, idx) => (
              <SolutionCard key={solution.id} solution={solution} onNavigate={onNavigate} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <button onClick={() => onNavigate('/solutions')} className="btn-primary">
              View All Digital Solutions
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── TRANSFORMATION STORY BANNER ──────────────────── */}
      <section className="relative overflow-hidden bg-primary-900 py-24">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="container-app relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="eyebrow text-accent-300 reveal">
              <span className="h-px w-6 bg-current opacity-50" />
              The Bigger Picture
            </div>
            <h2 className="mt-4 text-headline font-bold text-white text-balance reveal">
              Mombasa County is Transforming Government Through Technology
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              The four systems are examples of that transformation. Together they demonstrate how digital
              technology can support different areas of county government — and how the journey from manual
              processes to digital workflows to data leads to better decisions and better service delivery.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'DIALS', value: 'Accountability', color: 'text-primary-200' },
                { label: 'PMFS', value: 'Projects & Citizen Engagement', color: 'text-secondary-300' },
                { label: 'ESMS', value: 'Education & Opportunity', color: 'text-accent-300' },
                { label: 'MCRF', value: 'Financial Inclusion & Enterprise', color: 'text-secondary-200' },
              ].map((item, idx) => (
                <div key={idx} className="reveal rounded-xl border border-white/10 bg-white/5 p-5 text-center" style={{ transitionDelay: `${idx * 60}ms` }}>
                  <div className="text-lg font-bold text-white">{item.label}</div>
                  <div className={`mt-1 text-sm font-medium ${item.color}`}>{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3 reveal">
              <button onClick={() => onNavigate('/transformation')} className="btn-secondary">
                Explore Digital Transformation
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigate('/impact')} className="btn-ghost border border-white/20 hover:bg-white/10">
                View Our Impact Framework
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VISION TEASER ───────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="eyebrow text-secondary-600 reveal">
                <span className="h-px w-6 bg-current opacity-50" />
                Our Vision
              </div>
              <h2 className="mt-4 text-headline font-bold text-primary-900 text-balance reveal">
                A Digitally Enabled Mombasa County
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600 text-pretty reveal">
                A digitally enabled Mombasa County where technology, data and innovation support efficient,
                transparent and people-centred government.
              </p>
              <p className="mt-4 text-base leading-relaxed text-neutral-500 reveal">
                The Digital Transformation Sub-Department is responsible for driving this vision —
                identifying, developing and implementing technology-enabled solutions that improve internal
                processes, programme management, information management and public service delivery.
              </p>
              <button onClick={() => onNavigate('/about')} className="mt-8 btn-primary reveal">
                Learn About the Sub-Department
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="order-1 lg:order-2 reveal">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/13418220/pexels-photo-13418220.jpeg?auto=compress&cs=tinysrgb&w=940&h=700&fit=crop"
                  alt="Aerial view of Mombasa waterfront with buildings and lush greenery along the coastline"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-medium text-white/80">
                    Building a smarter Mombasa through digital transformation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { impactDimensions, impactPlaceholders } from '@/config/content';

interface ImpactPageProps {
  onNavigate: (route: string) => void;
}

export function ImpactPage({ onNavigate }: ImpactPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent-300 reveal">
              <span className="h-px w-6 bg-current opacity-50" />
              Impact
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Measuring Digital Transformation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              Digital transformation should ultimately be measured through improvements in how government
              works and how citizens experience services. This framework defines what we measure and why.
            </p>
          </div>
        </div>
      </section>

      {/* Impact dimensions */}
      <section className="bg-white py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Impact Framework"
            title="Six Dimensions of Digital Transformation"
            subtitle="Every digital initiative should contribute to measurable improvements across these six dimensions."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {impactDimensions.map((dim, idx) => {
              const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[dim.icon] || Icons.Circle;
              return (
                <div
                  key={dim.title}
                  className="card-hover reveal flex flex-col p-7"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-700 text-white">
                    <IconComp className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary-900">{dim.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{dim.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified data placeholders */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Verified County Data"
            title="Statistics & Metrics"
            subtitle="The following metrics will be populated with verified County data when available. We do not publish unverified statistics."
          />

          {/* Placeholder banner */}
          <div className="mt-10 flex items-center justify-center gap-3 rounded-xl border border-accent-300 bg-accent-50 px-6 py-4 reveal">
            <Icons.Info className="h-5 w-5 shrink-0 text-accent-700" />
            <p className="text-sm font-semibold text-accent-800">
              VERIFIED COUNTY DATA TO BE INSERTED
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactPlaceholders.map((item, idx) => {
              const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[item.icon] || Icons.Circle;
              return (
                <div
                  key={idx}
                  className="reveal card flex flex-col items-center p-6 text-center"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-400">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div className="mt-4 h-8 w-20 rounded bg-neutral-100" />
                  <p className="mt-3 text-sm font-medium text-neutral-500">{item.label}</p>
                  <p className="mt-1 text-xs text-neutral-400">Data to be inserted</p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-neutral-400 reveal">
            All statistics will be verified before publication. No figures are invented or estimated.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-20">
        <div className="container-app text-center">
          <h2 className="text-headline font-bold text-white text-balance reveal">
            See the Impact in Practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 reveal">
            Explore the four digital platforms that are driving these improvements across Mombasa County.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <button onClick={() => onNavigate('/solutions')} className="btn-accent">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => onNavigate('/gallery')} className="btn-ghost border border-white/20 hover:bg-white/10">
              View Gallery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

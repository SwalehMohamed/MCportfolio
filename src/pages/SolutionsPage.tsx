import { ArrowRight, Download } from 'lucide-react';
import { solutions } from '@/config/solutions';
import { SolutionCard } from '@/components/SolutionCard';
import { SectionHeading } from '@/components/SectionHeading';

interface SolutionsPageProps {
  onNavigate: (route: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
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
              Digital Solutions
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Our Digital Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              Four digital platforms developed and implemented by the Mombasa County Government Digital
              Transformation Sub-Department — each demonstrating how technology can support a different
              area of county government.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-white py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Portfolio Overview"
            title="Four Platforms. One Transformation Journey."
            subtitle="Each system addresses a distinct operational challenge — from accountability and project management to education support and financial inclusion — while contributing to the County's broader digital transformation."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, idx) => (
              <SolutionCard key={solution.id} solution={solution} onNavigate={onNavigate} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Transformation story */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="The Story"
              title="From Manual Processes to Better Service Delivery"
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {solutions.map((sol, idx) => (
                <button
                  key={sol.id}
                  onClick={() => onNavigate(`/solutions/${sol.id}`)}
                  className="reveal group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 text-left transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="text-3xl font-bold text-neutral-200 transition-colors group-hover:text-primary-200">
                    {sol.number}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-primary-900">{sol.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{sol.fullName}</p>
                  <p className="mt-3 text-sm font-semibold text-secondary-600">{sol.tagline}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                    Explore {sol.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 py-20">
        <div className="container-app text-center">
          <h2 className="text-headline font-bold text-white text-balance reveal">
            Explore the Full Digital Transformation Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 reveal">
            Download our digital brochure for a complete overview of all four platforms and the County's
            broader digital transformation vision.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <button onClick={() => onNavigate('/transformation')} className="btn-secondary">
              Digital Transformation Vision
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => onNavigate('/brochure')} className="btn-accent">
              <Download className="h-4 w-4" />
              Download Digital Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { pillars } from '@/config/content';

interface DigitalTransformationPageProps {
  onNavigate: (route: string) => void;
}

export function DigitalTransformationPage({ onNavigate }: DigitalTransformationPageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-secondary-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />

        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent-300 reveal">
              <span className="h-px w-6 bg-current opacity-50" />
              Digital Transformation
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Transforming Government Through Technology
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              Digital transformation is an ongoing process of redesigning government services, processes
              and information systems around the needs of citizens, employees and decision-makers.
            </p>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="bg-white py-24">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="What It Means"
            title="More Than Technology"
            subtitle="Digital transformation is not simply about adopting new tools. It is about rethinking how government works — redesigning processes, improving access to information, and making services more responsive to the people who rely on them."
          />
          <div className="mt-12 space-y-4 reveal">
            <p className="text-lg leading-relaxed text-neutral-600 text-pretty">
              For Mombasa County, digital transformation means moving from manual, paper-based processes to
              structured digital workflows — creating records that are traceable, data that is actionable,
              and services that are accessible.
            </p>
            <p className="text-lg leading-relaxed text-neutral-600 text-pretty">
              It means giving decision-makers the information they need, when they need it. It means giving
              citizens better ways to engage with government. And it means building a foundation for
              continuous improvement — because digital transformation is never finished.
            </p>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Six Pillars"
            title="What Guides Our Work"
            subtitle="Six pillars define the scope and direction of the County's digital transformation efforts."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, idx) => {
              const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[pillar.icon] || Icons.Circle;
              return (
                <div
                  key={pillar.number}
                  className="card-hover group reveal flex flex-col p-7"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-white transition-transform group-hover:scale-110">
                      <IconComp className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-bold text-neutral-100 transition-colors group-hover:text-primary-100">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-primary-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The journey */}
      <section className="bg-primary-950 py-24">
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <div className="eyebrow text-accent-300 reveal justify-center">
              <span className="h-px w-6 bg-current opacity-50" />
              The Journey
            </div>
            <h2 className="mt-4 text-headline font-bold text-white text-balance reveal">
              From Manual Processes to Better Service Delivery
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              The County's digital transformation follows a clear path — each stage building on the last
              to create better outcomes for government and citizens alike.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-5">
              {['Manual Processes', 'Digital Workflows', 'Data', 'Better Decisions', 'Better Service Delivery'].map((step, idx) => (
                <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <div className="text-2xl font-bold text-accent-300">{idx + 1}</div>
                    <div className="mt-2 text-xs font-semibold text-white/80">{step}</div>
                  </div>
                  {idx < 4 && (
                    <div className="mt-2 text-center text-white/20 sm:hidden">
                      <ArrowRight className="inline h-4 w-4 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="container-app text-center">
          <SectionHeading
            eyebrow="Explore Further"
            title="See Digital Transformation in Action"
            subtitle="Explore the four digital platforms that demonstrate these pillars in practice."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <button onClick={() => onNavigate('/solutions')} className="btn-primary">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => onNavigate('/impact')} className="btn-secondary">
              View Impact Framework
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

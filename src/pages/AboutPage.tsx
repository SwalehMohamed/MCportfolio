import { ArrowRight, Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { approachStages } from '@/config/content';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
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
              About Us
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Digital Transformation Sub-Department
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              The team within Mombasa County Government responsible for driving digital innovation
              and transformation across the County.
            </p>
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="bg-white py-24">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Our Role"
            title="Driving Digital Innovation Across the County"
            subtitle="The Digital Transformation Sub-Department supports the Mombasa County Government in identifying, developing and implementing technology-enabled solutions that improve internal processes, programme management, information management and public service delivery."
          />
        </div>
      </section>

      {/* Vision */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow text-secondary-600 reveal justify-center">
              <span className="h-px w-6 bg-current opacity-50" />
              Our Vision
            </div>
            <p className="mt-6 text-2xl font-semibold leading-relaxed text-primary-900 text-balance reveal sm:text-3xl">
              &ldquo;A digitally enabled Mombasa County where technology, data and innovation support
              efficient, transparent and people-centred government.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our Approach"
            title="Understand \u2192 Design \u2192 Develop \u2192 Implement \u2192 Improve"
            subtitle="Our approach to digital transformation is structured and iterative — beginning with understanding the problem and continuing through ongoing improvement based on real-world use."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {approachStages.map((stage, idx) => {
              const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[stage.icon] || Icons.Circle;
              return (
                <div
                  key={stage.number}
                  className="reveal relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  {/* Connection arrow */}
                  {idx < approachStages.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-neutral-300 lg:block">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-xs font-bold text-neutral-400">{stage.number}</div>
                  <h3 className="mt-1 text-lg font-bold text-primary-900">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{stage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-primary-950 py-24">
        <div className="container-app">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow text-accent-300 reveal justify-center">
              <span className="h-px w-6 bg-current opacity-50" />
              What We Do
            </div>
            <h2 className="mt-4 text-headline font-bold text-white text-balance reveal">
              From Challenges to Digital Solutions
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              We work with County departments to understand their operational challenges, design digital
              solutions that address those challenges, and implement platforms that improve how government
              works — for employees, decision-makers and the public.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Search, title: 'Identify', desc: 'We identify opportunities where technology can improve County operations and service delivery.' },
              { icon: Code2, title: 'Develop', desc: 'We develop digital platforms with structured workflows, dashboards and reporting tools.' },
              { icon: Rocket, title: 'Implement', desc: 'We implement solutions with County departments, supporting adoption and ongoing improvement.' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="reveal rounded-2xl border border-white/10 bg-white/5 p-6" style={{ transitionDelay: `${idx * 80}ms` }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-secondary-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center reveal">
            <button onClick={() => onNavigate('/solutions')} className="btn-accent">
              Explore Our Digital Solutions
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

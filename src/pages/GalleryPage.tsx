import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { galleryImages } from '@/config/content';
import { solutions } from '@/config/solutions';

interface GalleryPageProps {
  onNavigate: (route: string) => void;
}

const filters = ['ALL', 'DIALS', 'PMFS', 'ESMS', 'MCRF', 'EXHIBITION', 'DIGITAL TRANSFORMATION'] as const;
type Filter = (typeof filters)[number];

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL');

  // Combine photo gallery with screenshot placeholders for each system
  const screenshotPlaceholders = solutions.flatMap((sol) =>
    sol.screenshots.map((shot) => ({
      label: shot.label,
      category: shot.category as Filter,
      isPlaceholder: true,
    }))
  );

  const allItems = [
    ...galleryImages.map((img) => ({
      label: img.label,
      category: img.category as Filter,
      url: img.url,
      alt: img.alt,
      isPlaceholder: false,
    })),
    ...screenshotPlaceholders.map((s) => ({
      label: s.label,
      category: s.category,
      url: null,
      alt: s.label,
      isPlaceholder: true,
    })),
  ];

  const filteredItems =
    activeFilter === 'ALL'
      ? allItems
      : allItems.filter((item) => item.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent-300 reveal">
              <span className="h-px w-6 bg-current opacity-50" />
              Gallery
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Digital Transformation in Focus
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              A visual showcase of system dashboards, application forms, reports, analytics, workflow
              screens, exhibition activities and digital transformation work across the County.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="container-app py-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'bg-primary-700 text-white shadow-md shadow-primary-900/20'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-neutral-50 py-16">
        <div className="container-app">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="reveal group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-primary-900/10"
                style={{ transitionDelay: `${(idx % 6) * 50}ms` }}
              >
                {item.isPlaceholder ? (
                  <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50/30">
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #0a1d35 1px, transparent 1px), linear-gradient(to bottom, #0a1d35 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <ImageIcon className="h-8 w-8 text-primary-300" />
                      <span className="mt-2 text-xs font-medium text-neutral-400">Screenshot placeholder</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.url!}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-primary-900">{item.label}</p>
                    <span className="shrink-0 rounded-full bg-primary-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-600">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-neutral-400">No items in this category yet.</p>
            </div>
          )}

          <p className="mt-10 text-center text-xs text-neutral-400 reveal">
            System screenshots are shown as labelled placeholders. Real screenshots will be inserted when
            available. Exhibition and digital transformation photos are for illustrative purposes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-app text-center">
          <h2 className="text-headline font-bold text-primary-900 text-balance reveal">
            Want to See More?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 reveal">
            Explore each digital solution in detail, or download the full digital brochure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <button onClick={() => onNavigate('/solutions')} className="btn-primary">
              Explore Solutions
            </button>
            <button onClick={() => onNavigate('/brochure')} className="btn-secondary">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

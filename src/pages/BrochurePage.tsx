import { useState } from 'react';
import { Download, Eye, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { QRCodeCard } from '@/components/QRCodeCard';
import { siteConfig } from '@/config/site';
import { solutions, solutionThemes } from '@/config/solutions';
import { pillars, brochurePages } from '@/config/content';

interface BrochurePageProps {
  onNavigate: (route: string) => void;
}

export function BrochurePage({ onNavigate }: BrochurePageProps) {
  const [viewing, setViewing] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);

  const totalPages = brochurePages.length;

  const goPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  const page = brochurePages[currentPage];

  if (viewing) {
    return <BrochureViewer
      page={page}
      currentPage={currentPage}
      totalPages={totalPages}
      zoom={zoom}
      onZoomIn={() => setZoom((z) => Math.min(1.5, z + 0.1))}
      onZoomOut={() => setZoom((z) => Math.max(0.5, z - 0.1))}
      onPrev={goPrev}
      onNext={goNext}
      onExit={() => setViewing(false)}
      onPageSelect={setCurrentPage}
    />;
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-10" />
        <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="container-app relative z-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-accent-300 reveal">
              <span className="h-px w-6 bg-current opacity-50" />
              Digital Brochure
            </div>
            <h1 className="mt-4 text-display font-extrabold text-white text-balance reveal">
              Explore Our Digital Transformation Journey
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 text-pretty reveal">
              Discover the digital platforms being developed and implemented by the Mombasa County
              Government Digital Transformation Sub-Department.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 reveal">
              <button onClick={() => setViewing(true)} className="btn-accent">
                <Eye className="h-4 w-4" />
                View Brochure Online
              </button>
              <button
                onClick={() => window.open(siteConfig.brochure.downloadUrl, '_blank')}
                className="btn-ghost border border-white/20 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download Digital Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure preview */}
      <section className="bg-neutral-50 py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="16-Page Digital Brochure"
            title="A Complete Overview of Our Digital Transformation Work"
            subtitle="The brochure covers the digital transformation journey, our approach, all four digital solutions, the six transformation pillars, and the County's digital vision."
          />

          {/* Page thumbnails */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brochurePages.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPage(idx);
                  setViewing(true);
                }}
                className="reveal group flex flex-col items-center"
                style={{ transitionDelay: `${(idx % 4) * 50}ms` }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border-2 border-neutral-200 bg-white shadow-sm transition-all group-hover:border-primary-300 group-hover:shadow-lg group-hover:shadow-primary-900/10">
                  <BrochurePagePreview page={p} />
                </div>
                <span className="mt-2 text-xs font-medium text-neutral-500">
                  Page {p.pageNumber}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* QR codes */}
      <section className="bg-white py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="QR Codes"
            title="Scan to Explore"
            subtitle="QR codes provide quick access to the portfolio website, individual systems and the digital brochure. Configure the destination URLs in the site configuration."
          />

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            <QRCodeCard label="Portfolio Website" url={siteConfig.qrCodes.mainSite} />
            {solutions.map((sol) => (
              <QRCodeCard key={sol.id} label={sol.name} url={sol.qrCode} compact />
            ))}
            <QRCodeCard label="Digital Brochure" url={siteConfig.qrCodes.brochure} />
          </div>

          <p className="mt-8 text-center text-xs text-neutral-400 reveal">
            QR code destinations are placeholders. Configure real URLs in the site configuration file.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-950 py-20">
        <div className="container-app text-center">
          <h2 className="text-headline font-bold text-white text-balance reveal">
            Ready to Explore?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3 reveal">
            <button onClick={() => setViewing(true)} className="btn-accent">
              <Eye className="h-4 w-4" />
              View Brochure Online
            </button>
            <button
              onClick={() => window.open(siteConfig.brochure.downloadUrl, '_blank')}
              className="btn-ghost border border-white/20 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Brochure Viewer ────────────────────────────────────────
interface BrochureViewerProps {
  page: typeof brochurePages[0];
  currentPage: number;
  totalPages: number;
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onPrev: () => void;
  onNext: () => void;
  onExit: () => void;
  onPageSelect: (page: number) => void;
}

function BrochureViewer({
  page, currentPage, totalPages, zoom,
  onZoomIn, onZoomOut, onPrev, onNext, onExit, onPageSelect,
}: BrochureViewerProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-primary-950">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-primary-950 px-4 py-3">
        <button onClick={onExit} className="btn-ghost !py-2 !px-4 text-sm">
          <ChevronLeft className="h-4 w-4" />
          Exit Viewer
        </button>
        <div className="flex items-center gap-2">
          <button onClick={onZoomOut} className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Zoom out">
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="text-xs text-white/50 tabular-nums">{Math.round(zoom * 100)}%</span>
          <button onClick={onZoomIn} className="rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white" aria-label="Zoom in">
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
        <span className="text-xs text-white/50 tabular-nums">
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>

      {/* Page display */}
      <div className="flex flex-1 items-center justify-center overflow-auto p-4 sm:p-8">
        <div
          className="relative aspect-[3/4] w-full max-w-2xl shrink-0 overflow-hidden rounded-xl bg-white shadow-2xl"
          style={{ transform: `scale(${zoom})` }}
        >
          <BrochurePageContent page={page} />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-white/10 bg-primary-950 px-4 py-3">
        <button
          onClick={onPrev}
          disabled={currentPage === 0}
          className="btn-ghost !py-2 !px-4 text-sm disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        {/* Page dots */}
        <div className="hidden max-w-md flex-1 items-center justify-center gap-1 overflow-x-auto px-4 sm:flex">
          {brochurePages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onPageSelect(idx)}
              className={`h-2 w-2 shrink-0 rounded-full transition-all ${
                idx === currentPage ? 'bg-accent-400 w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className="btn-ghost !py-2 !px-4 text-sm disabled:opacity-30"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Brochure Page Content ──────────────────────────────────
function BrochurePageContent({ page }: { page: typeof brochurePages[0] }) {
  switch (page.type) {
    case 'cover':
      return <BrochureCover />;
    case 'narrative':
      return (
        <BrochureLayout>
          <BrochureHeading title={page.title} subtitle={page.subtitle} />
          <div className="mt-6 space-y-4">
            {page.content.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-sm leading-relaxed text-neutral-600">{para}</p>
            ))}
          </div>
        </BrochureLayout>
      );
    case 'solutions':
      return <BrochureSolutions />;
    case 'solution-spread':
      return <BrochureSolutionSpread title={page.title} subtitle={page.subtitle} />;
    case 'pillars':
      return <BrochurePillars />;
    case 'future':
      return (
        <BrochureLayout>
          <BrochureHeading title={page.title} />
          <p className="mt-6 text-sm leading-relaxed text-neutral-600">{page.content}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {['Greater interoperability', 'Expanded digital services', 'Improved data integration', 'Mobile-first access', 'Advanced analytics', 'Digital citizen engagement', 'Automation', 'Emerging technologies'].map((item, idx) => (
              <div key={idx} className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-xs font-medium text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </BrochureLayout>
      );
    case 'vision':
      return (
        <BrochureLayout>
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="eyebrow text-secondary-600 justify-center">
              <span className="h-px w-6 bg-current opacity-50" />
              Our Vision
            </div>
            <p className="mt-6 text-xl font-semibold leading-relaxed text-primary-900 text-balance">
              &ldquo;A digitally enabled Mombasa County where technology, data and innovation support efficient, transparent and people-centred government.&rdquo;
            </p>
          </div>
        </BrochureLayout>
      );
    case 'contact':
      return <BrochureContact />;
    default:
      return null;
  }
}

function BrochureCover() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 p-8 text-center">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-10" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" className="text-accent-300" />
            <circle cx="12" cy="12" r="3" className="text-secondary-400" fill="currentColor" />
          </svg>
        </div>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/50">
          Mombasa County Government
        </p>
        <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-white/40">
          Digital Transformation Sub-Department
        </p>
        <h1 className="mt-8 text-3xl font-extrabold leading-tight text-white text-balance">
          Digital Transformation<br />for a Smarter Mombasa
        </h1>
        <div className="mt-6 h-px w-16 bg-accent-400" />
        <p className="mt-6 text-sm italic text-white/60">
          Transforming Government. Empowering People.<br />Building a Smarter Mombasa.
        </p>
      </div>
      {/* Page number */}
      <div className="absolute bottom-4 right-6 text-[10px] text-white/30">01</div>
    </div>
  );
}

function BrochureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col bg-white p-8">
      {children}
      <div className="mt-auto pt-4 border-t border-neutral-100 text-[10px] text-neutral-300">
        Mombasa County Government &middot; Digital Transformation Sub-Department
      </div>
    </div>
  );
}

function BrochureHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <div className="eyebrow text-secondary-600">
        <span className="h-px w-6 bg-current opacity-50" />
        Mombasa County Digital Transformation
      </div>
      <h2 className="mt-3 text-2xl font-bold text-primary-900 text-balance">{title}</h2>
      {subtitle && <p className="mt-2 text-sm font-medium text-secondary-600">{subtitle}</p>}
    </div>
  );
}

function BrochureSolutions() {
  return (
    <BrochureLayout>
      <BrochureHeading title="Our Digital Solutions" subtitle="Four platforms. One transformation journey." />
      <p className="mt-4 text-sm leading-relaxed text-neutral-600">
        The Digital Transformation Sub-Department has developed and implemented four digital platforms that
        demonstrate how technology can support different areas of county government.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {solutions.map((sol) => {
          const theme = solutionThemes[sol.theme];
          const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[sol.themeIcon] || Icons.Monitor;
          return (
            <div key={sol.id} className={`rounded-xl border ${theme.border} ${theme.bg} p-4`}>
              <div className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${theme.chip}`}>
                  <IconComp className="h-4 w-4" />
                </div>
                <span className="text-lg font-bold text-primary-900">{sol.name}</span>
              </div>
              <p className="mt-2 text-xs font-medium text-neutral-600">{sol.fullName}</p>
              <p className={`mt-1 text-xs font-semibold ${theme.text}`}>{sol.tagline}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-auto bottom-4 right-6 text-[10px] text-neutral-300 absolute">04</div>
    </BrochureLayout>
  );
}

function BrochureSolutionSpread({ title, subtitle }: { title: string; subtitle?: string }) {
  const sol = solutions.find((s) => s.name === title || s.fullName === subtitle || title.startsWith(s.name));
  if (!sol) {
    return (
      <BrochureLayout>
        <BrochureHeading title={title} subtitle={subtitle} />
        <p className="mt-4 text-sm text-neutral-500">Content to be added.</p>
      </BrochureLayout>
    );
  }
  const theme = solutionThemes[sol.theme];
  const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[sol.themeIcon] || Icons.Monitor;

  // Determine which spread this is (first or second page for this solution)
  const isFirstSpread = title === sol.name || title === sol.fullName;

  return (
    <div className="flex h-full flex-col bg-white p-8">
      {/* Header */}
      <div className={`mb-4 flex items-center gap-3 rounded-xl ${theme.bg} p-4`}>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${theme.chip}`}>
          <IconComp className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary-900">{sol.name}</h2>
          {subtitle && <p className="text-xs text-neutral-500">{subtitle}</p>}
        </div>
      </div>

      {isFirstSpread ? (
        <>
          {/* First spread: Overview, Challenge, Solution, Capabilities, Benefits */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h3 className="font-bold text-primary-800">Overview</h3>
              <p className="mt-1 leading-relaxed text-neutral-600">{sol.overview[0]}</p>
            </div>
            <div>
              <h3 className="font-bold text-primary-800">Challenge</h3>
              <p className="mt-1 leading-relaxed text-neutral-600">{sol.challenge[0]}</p>
            </div>
          </div>
          <div className="mt-3 text-xs">
            <h3 className="font-bold text-primary-800">Solution</h3>
            <p className="mt-1 leading-relaxed text-neutral-600">{sol.solution[0]}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-bold text-primary-800">Key Capabilities</h3>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {sol.capabilities.slice(0, 9).map((cap, idx) => (
                <div key={idx} className="rounded border border-neutral-200 bg-neutral-50 px-2 py-1 text-[10px] font-medium text-neutral-600">
                  {cap}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-bold text-primary-800">Benefits</h3>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              {sol.benefits.slice(0, 6).map((ben, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-[10px] text-neutral-600">
                  <Icons.Check className="mt-0.5 h-3 w-3 shrink-0 text-secondary-600" />
                  {ben}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Second spread: Workflow, Governance, Analytics, Accountability */}
          <div className="text-xs">
            <h3 className="font-bold text-primary-800">Workflow</h3>
            <div className="mt-2 space-y-2">
              {sol.workflow.map((step, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${theme.accent} text-[9px] font-bold text-white`}>
                    {step.step}
                  </span>
                  <div>
                    <span className="font-semibold text-neutral-700">{step.title}:</span>{' '}
                    <span className="text-neutral-600">{step.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h3 className="font-bold text-primary-800">Governance & Accountability</h3>
              <ul className="mt-1.5 space-y-1">
                {sol.governance.slice(0, 3).map((g, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-[10px] text-neutral-600">
                    <Icons.ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-primary-600" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-primary-800">Data & Analytics</h3>
              <ul className="mt-1.5 space-y-1">
                {sol.analytics.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-[10px] text-neutral-600">
                    <Icons.BarChart3 className="mt-0.5 h-3 w-3 shrink-0 text-secondary-600" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Screenshot placeholder */}
          <div className="mt-4 flex flex-1 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50">
            <div className="text-center">
              <Icons.ImageIcon className="mx-auto h-6 w-6 text-neutral-300" />
              <p className="mt-1 text-[10px] text-neutral-400">Screenshot to be inserted</p>
            </div>
          </div>
        </>
      )}

      <div className="mt-auto pt-2 border-t border-neutral-100 text-[10px] text-neutral-300">
        Mombasa County Government &middot; Digital Transformation Sub-Department
      </div>
    </div>
  );
}

function BrochurePillars() {
  return (
    <BrochureLayout>
      <BrochureHeading title="Digital Transformation Pillars" subtitle="Six pillars guiding our work" />
      <div className="mt-6 grid grid-cols-2 gap-3">
        {pillars.map((p) => {
          const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[p.icon] || Icons.Circle;
          return (
            <div key={p.number} className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <IconComp className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-neutral-400">{p.number}</span>
                  <h3 className="text-xs font-bold text-primary-900">{p.title}</h3>
                </div>
              </div>
              <p className="mt-1.5 text-[10px] leading-relaxed text-neutral-600">{p.description}</p>
            </div>
          );
        })}
      </div>
    </BrochureLayout>
  );
}

function BrochureContact() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-primary-950 to-primary-800 p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" className="text-accent-300" />
          <circle cx="12" cy="12" r="3" className="text-secondary-400" fill="currentColor" />
        </svg>
      </div>
      <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-white/50">Mombasa County Government</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">Digital Transformation Sub-Department</p>
      <div className="mt-6 space-y-1 text-xs text-white/60">
        <p>{siteConfig.contact.email}</p>
        <p>{siteConfig.contact.phone}</p>
        <p>{siteConfig.contact.website}</p>
        <p>{siteConfig.contact.address}</p>
      </div>
      <div className="mt-8 rounded-lg bg-white p-3">
        <div className="grid grid-cols-7 grid-rows-7 gap-0.5 h-20 w-20">
          {Array.from({ length: 49 }).map((_, i) => {
            const filled = (i * 7 + 3) % 3 === 0 || (i * 13 + 5) % 5 === 0;
            return <div key={i} className={`rounded-[1px] ${filled ? 'bg-primary-900' : 'bg-transparent'}`} />;
          })}
        </div>
      </div>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-accent-300">Scan to Explore</p>
      <p className="mt-1 text-xs text-white/70">Explore Our Digital Transformation Portfolio</p>
    </div>
  );
}

// ─── Brochure Page Preview (thumbnail) ─────────────────────
function BrochurePagePreview({ page }: { page: typeof brochurePages[0] }) {
  return (
    <div className="flex h-full flex-col p-3">
      {page.type === 'cover' ? (
        <div className="flex h-full flex-col items-center justify-center rounded bg-gradient-to-br from-primary-950 to-primary-800 text-center">
          <div className="h-6 w-6 rounded bg-accent-400/80" />
          <div className="mt-2 h-1 w-12 rounded bg-white/30" />
          <div className="mt-1 h-1 w-16 rounded bg-white/20" />
        </div>
      ) : page.type === 'contact' ? (
        <div className="flex h-full flex-col items-center justify-center rounded bg-gradient-to-br from-primary-950 to-primary-800">
          <div className="h-8 w-8 rounded bg-white/20" />
          <div className="mt-2 h-1 w-10 rounded bg-white/20" />
        </div>
      ) : (
        <div className="flex h-full flex-col rounded bg-white">
          <div className="h-1 w-full rounded-t bg-secondary-400" />
          <div className="flex-1 space-y-1.5 p-2">
            <div className="h-1.5 w-2/3 rounded bg-primary-200" />
            <div className="h-1 w-full rounded bg-neutral-100" />
            <div className="h-1 w-full rounded bg-neutral-100" />
            <div className="h-1 w-4/5 rounded bg-neutral-100" />
            {page.type === 'solution-spread' && (
              <div className="mt-1 grid grid-cols-2 gap-1">
                <div className="h-3 rounded bg-neutral-50" />
                <div className="h-3 rounded bg-neutral-50" />
              </div>
            )}
            {page.type === 'pillars' && (
              <div className="mt-1 grid grid-cols-2 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-2 rounded bg-neutral-50" />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <span className="mt-1.5 truncate text-center text-[10px] font-medium text-neutral-500">
        {page.title}
      </span>
    </div>
  );
}

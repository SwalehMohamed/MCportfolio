import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ArrowLeft, Pause, Play, Monitor } from 'lucide-react';
import * as Icons from 'lucide-react';
import { solutions, solutionThemes } from '@/config/solutions';
import { QRCodeCard } from '@/components/QRCodeCard';
import { siteConfig } from '@/config/site';

interface ExhibitionModeProps {
  onNavigate: (route: string) => void;
  onExit: () => void;
}

export function ExhibitionMode({ onNavigate, onExit }: ExhibitionModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showOverview, setShowOverview] = useState(true);

  const next = useCallback(() => {
    setShowOverview(false);
    setCurrentIndex((prev) => (prev + 1) % (solutions.length + 1));
  }, []);

  const prev = useCallback(() => {
    setShowOverview(false);
    setCurrentIndex((p) => (p - 1 + solutions.length + 1) % (solutions.length + 1));
  }, []);

  // Auto-rotate every 12 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 12000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Escape') onExit();
      else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, onExit]);

  const isOverview = currentIndex === 0 || showOverview;
  const currentSolution = isOverview ? null : solutions[currentIndex - 1];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-primary-950">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-10" />
      <div className="pointer-events-none absolute top-20 right-20 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute bottom-20 left-20 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl animate-pulse-slow" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 ring-1 ring-white/20">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2 L20 7 V17 L12 22 L4 17 V7 Z" className="text-accent-300" />
              <circle cx="12" cy="12" r="3" className="text-secondary-400" fill="currentColor" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-bold text-white">Mombasa County Government</div>
            <div className="text-[10px] uppercase tracking-wider text-white/40">Digital Transformation &middot; Exhibition Mode</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Progress dots */}
          <div className="hidden items-center gap-1.5 sm:flex">
            {Array.from({ length: solutions.length + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowOverview(idx === 0);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-accent-400' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
          </button>

          <button
            onClick={onExit}
            className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            <X className="h-4 w-4" />
            Exit
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-8">
        {isOverview ? (
          <OverviewSlide onNavigate={onNavigate} onSelectSolution={(idx) => { setCurrentIndex(idx + 1); setShowOverview(false); }} />
        ) : currentSolution ? (
          <SolutionSlide solution={currentSolution} onNavigate={onNavigate} />
        ) : null}
      </div>

      {/* Bottom controls */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 px-6 py-4">
        <button
          onClick={prev}
          className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="text-center">
          <div className="text-xs text-white/40">
            {isOverview ? 'Overview' : `${currentSolution?.name} (${currentIndex}/${solutions.length})`}
          </div>
          {!isPaused && (
            <div className="mt-1 flex justify-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-1 w-1 rounded-full bg-white/30 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          )}
        </div>

        <button
          onClick={next}
          className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Overview Slide ─────────────────────────────────────────
function OverviewSlide({
  onNavigate,
  onSelectSolution,
}: {
  onNavigate: (route: string) => void;
  onSelectSolution: (idx: number) => void;
}) {
  return (
    <div className="w-full max-w-7xl">
      <div className="text-center">
        <div className="eyebrow text-accent-300 justify-center opacity-init animate-fade-in-down">
          <span className="h-px w-8 bg-current opacity-60" />
          Mombasa County Government &middot; Digital Transformation Sub-Department
        </div>
        <h1 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-tight text-white text-balance opacity-init animate-fade-in-up">
          Digital Transformation for a{' '}
          <span className="bg-gradient-to-r from-secondary-300 to-accent-300 bg-clip-text text-transparent">
            Smarter Mombasa
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-white/60 opacity-init animate-fade-in-up animate-delay-200">
          Harnessing technology, data and innovation to transform government processes, strengthen
          accountability and improve service delivery.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((sol, idx) => {
          const theme = solutionThemes[sol.theme];
          const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[sol.themeIcon] || Icons.Monitor;
          return (
            <button
              key={sol.id}
              onClick={() => onSelectSolution(idx)}
              className={`group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 opacity-init animate-fade-in-up`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${theme.bg} ${theme.text}`}>
                  <IconComp className="h-7 w-7" />
                </div>
                <span className="text-4xl font-bold text-white/10">{sol.number}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">{sol.name}</h3>
              <p className="mt-1 text-xs text-white/40">{sol.fullName}</p>
              <p className={`mt-3 text-sm font-semibold ${theme.text}`}>{sol.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/50 line-clamp-3">{sol.shortDescription}</p>
              <div className={`mt-4 flex items-center gap-1.5 text-sm font-semibold ${theme.text}`}>
                Explore this system
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center gap-3 opacity-init animate-fade-in-up animate-delay-400">
        <button onClick={() => onNavigate('/solutions')} className="btn-accent">
          <Monitor className="h-4 w-4" />
          View All Solutions
        </button>
        <button onClick={() => onNavigate('/brochure')} className="btn-ghost border border-white/20 hover:bg-white/10">
          Download Brochure
        </button>
      </div>
    </div>
  );
}

// ─── Solution Slide ─────────────────────────────────────────
function SolutionSlide({
  solution,
  onNavigate,
}: {
  solution: typeof solutions[0];
  onNavigate: (route: string) => void;
}) {
  const theme = solutionThemes[solution.theme];
  const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[solution.themeIcon] || Icons.Monitor;

  return (
    <div className="w-full max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        {/* Left: Content */}
        <div className="opacity-init animate-fade-in-up">
          <div className="flex items-center gap-4">
            <div className={`flex h-20 w-20 items-center justify-center rounded-3xl ${theme.bg} ${theme.text}`}>
              <IconComp className="h-10 w-10" />
            </div>
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-white/40">
                {solution.number} &middot; {solution.name}
              </div>
              <div className="text-xs text-white/30">{solution.fullName}</div>
            </div>
          </div>

          <h2 className="mt-8 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight text-white text-balance">
            {solution.fullName}
          </h2>
          {solution.altName && (
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-accent-300">
              Also known as: {solution.altName}
            </p>
          )}
          <p className={`mt-4 text-xl font-semibold ${theme.text}`}>{solution.tagline}</p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
            {solution.shortDescription}
          </p>

          {/* Key capabilities preview */}
          <div className="mt-8 flex flex-wrap gap-2">
            {solution.capabilities.slice(0, 6).map((cap, idx) => (
              <span key={idx} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/60">
                {cap}
              </span>
            ))}
            <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/40">
              +{solution.capabilities.length - 6} more
            </span>
          </div>

          <button
            onClick={() => onNavigate(`/solutions/${solution.id}`)}
            className={`mt-8 inline-flex items-center gap-2 rounded-lg ${theme.accent} px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105`}
          >
            Explore {solution.name}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right: Screenshot placeholder + QR */}
        <div className="flex flex-col items-center gap-6 opacity-init animate-fade-in-up animate-delay-200">
          {/* Screenshot placeholder */}
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-white/20" />
              <div className="h-2 w-2 rounded-full bg-white/20" />
              <div className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="flex h-full flex-col items-center justify-center pt-6 text-center">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg} ${theme.text}`}>
                <IconComp className="h-8 w-8" />
              </div>
              <p className="mt-4 text-sm font-semibold text-white/70">{solution.name} Dashboard</p>
              <p className="mt-1 text-xs text-white/30">Screenshot to be inserted</p>
            </div>
          </div>

          {/* QR code */}
          <QRCodeCard label={`Explore ${solution.name}`} url={solution.qrCode} />
        </div>
      </div>
    </div>
  );
}

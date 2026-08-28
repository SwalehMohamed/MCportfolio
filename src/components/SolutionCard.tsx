import { ArrowRight } from 'lucide-react';
import type { Solution } from '@/config/solutions';
import { solutionThemes } from '@/config/solutions';
import * as Icons from 'lucide-react';

interface SolutionCardProps {
  solution: Solution;
  onNavigate: (route: string) => void;
  index: number;
}

export function SolutionCard({ solution, onNavigate, index }: SolutionCardProps) {
  const theme = solutionThemes[solution.theme];
  const IconComp = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[solution.themeIcon] || Icons.Monitor;

  return (
    <button
      onClick={() => onNavigate(`/solutions/${solution.id}`)}
      className="card-hover group flex flex-col overflow-hidden text-left reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${theme.gradient}`} />

      <div className="flex flex-1 flex-col p-6">
        {/* Number + Icon */}
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-neutral-200 transition-colors group-hover:text-neutral-300">
            {solution.number}
          </span>
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${theme.bg} ${theme.text}`}>
            <IconComp className="h-6 w-6" />
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-5 text-xl font-bold text-primary-900">{solution.name}</h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
          {solution.fullName}
        </p>

        {/* Tagline */}
        <p className={`mt-3 text-sm font-semibold ${theme.text}`}>{solution.tagline}</p>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {solution.shortDescription}
        </p>

        {/* CTA */}
        <div className={`mt-5 flex items-center gap-1.5 text-sm font-semibold ${theme.text}`}>
          Explore {solution.name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}

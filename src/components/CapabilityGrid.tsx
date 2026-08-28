import type { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface CapabilityGridProps {
  items: string[];
  columns?: 2 | 3 | 4;
  icon?: ReactNode;
}

export function CapabilityGrid({ items, columns = 3, icon }: CapabilityGridProps) {
  const colClass =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-3 ${colClass}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="reveal flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition-colors hover:border-primary-200 hover:bg-primary-50/50"
          style={{ transitionDelay: `${idx * 30}ms` }}
        >
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary-100 text-secondary-700">
            {icon || <Check className="h-3.5 w-3.5" />}
          </span>
          <span className="text-sm font-medium text-neutral-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

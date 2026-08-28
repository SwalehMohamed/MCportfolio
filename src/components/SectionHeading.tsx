import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  children,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && (
        <div
          className={`eyebrow ${
            light ? 'text-accent-300' : 'text-secondary-600'
          } reveal`}
        >
          <span className="h-px w-6 bg-current opacity-50" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-4 text-headline font-bold text-balance reveal ${
          light ? 'text-white' : 'text-primary-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty reveal ${
            light ? 'text-white/70' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}

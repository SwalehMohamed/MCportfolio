import { ImageIcon } from 'lucide-react';

interface ScreenshotPlaceholderProps {
  label: string;
  className?: string;
}

// Labelled placeholder for system screenshots. When real screenshots
// are available, replace the placeholder with an <img> tag pointing
// to the screenshot file. This avoids fabricating fake screenshots.
export function ScreenshotPlaceholder({ label, className = '' }: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-primary-50/30 ${className}`}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0a1d35 1px, transparent 1px), linear-gradient(to bottom, #0a1d35 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Mock browser chrome */}
      <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 border-b border-neutral-200 bg-white/60 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-neutral-300" />
        <div className="h-2 w-2 rounded-full bg-neutral-300" />
        <div className="h-2 w-2 rounded-full bg-neutral-300" />
        <div className="ml-3 h-3 flex-1 max-w-xs rounded-sm bg-neutral-100" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-500">
          <ImageIcon className="h-7 w-7" />
        </div>
        <p className="mt-4 text-sm font-semibold text-primary-800">{label}</p>
        <p className="mt-1 text-xs text-neutral-400">Screenshot to be inserted</p>
      </div>
    </div>
  );
}

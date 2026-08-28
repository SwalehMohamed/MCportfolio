interface QRCodeCardProps {
  label: string;
  url: string;
  caption?: string;
  compact?: boolean;
}

// Renders a QR-code placeholder. When the URL is a real, configured URL,
// swap the SVG placeholder for a real QR code library or generated image.
// The placeholder visually represents a QR code pattern.
export function QRCodeCard({ label, url, caption, compact = false }: QRCodeCardProps) {
  const isPlaceholder = url.startsWith('[CONFIGURE');

  return (
    <div className={`card flex flex-col items-center p-5 ${compact ? 'w-40' : 'w-52'}`}>
      {/* QR placeholder — visual pattern representing a QR code */}
      <div className={`relative ${compact ? 'h-28 w-28' : 'h-36 w-36'} rounded-lg bg-white p-2 ring-1 ring-neutral-200`}>
        {isPlaceholder ? (
          <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-0.5">
            {Array.from({ length: 49 }).map((_, i) => {
              // Deterministic pattern based on index
              const filled = (i * 7 + 3) % 3 === 0 || (i * 13 + 5) % 5 === 0;
              const isCorner =
                (i < 6 && i % 7 < 3) ||
                (i < 6 && i % 7 > 3) ||
                (i > 36 && i % 7 < 3);
              return (
                <div
                  key={i}
                  className={`rounded-[1px] ${filled || isCorner ? 'bg-primary-900' : 'bg-transparent'}`}
                />
              );
            })}
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded bg-primary-900 p-2 text-center text-[8px] font-medium text-white">
            QR Code
          </div>
        )}
      </div>

      {/* Label */}
      <div className="mt-3 text-center">
        <p className="text-[10px] font-bold uppercase tracking-wider text-secondary-600">
          Scan to Explore
        </p>
        <p className="mt-1 text-sm font-semibold text-primary-900">{label}</p>
        {caption && <p className="mt-0.5 text-xs text-neutral-500">{caption}</p>}
      </div>
    </div>
  );
}

import type { LucideIcon } from 'lucide-react';

interface TechTileProps {
  label: string;
  icon: LucideIcon;
  variant: 'red' | 'dark';
}

export default function TechTile({ label, icon: Icon, variant }: TechTileProps) {
  const isRed = variant === 'red';
  return (
    <div
      className="ticker-chip flex-shrink-0 h-[64px] sm:h-[76px] flex items-center gap-3 px-8 sm:px-10"
      style={{
        background: isRed
          ? 'linear-gradient(100deg, #A3121B 0%, #E2451C 100%)'
          : '#0C0C0C',
        border: isRed ? 'none' : '1px solid rgba(226, 69, 28, 0.35)',
      }}
    >
      <Icon className={isRed ? 'w-5 h-5 text-white' : 'w-5 h-5 text-[#FFB200]'} strokeWidth={1.75} />
      <span
        className={`font-bold uppercase tracking-wider text-sm sm:text-lg whitespace-nowrap ${
          isRed ? 'text-white' : 'text-[#F0D9A8]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

import type { LucideIcon } from 'lucide-react';

interface TechTileProps {
  label: string;
  icon: LucideIcon;
}

export default function TechTile({ label, icon: Icon }: TechTileProps) {
  return (
    <div
      className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl flex flex-col items-center justify-center gap-5 border border-white/10"
      style={{
        background: 'linear-gradient(155deg, #17171b 0%, #0c0c0c 100%)',
      }}
    >
      <Icon className="w-14 h-14 text-[#BBCCD7]" strokeWidth={1.25} />
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xl">
        {label}
      </span>
    </div>
  );
}

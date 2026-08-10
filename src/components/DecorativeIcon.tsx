import type { LucideIcon } from 'lucide-react';

interface DecorativeIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function DecorativeIcon({ icon: Icon, className = '' }: DecorativeIconProps) {
  return (
    <div
      className={`aspect-square rounded-[32px] flex items-center justify-center border border-white/10 ${className}`}
      style={{ background: 'linear-gradient(155deg, #1c1c20 0%, #0c0c0c 100%)' }}
    >
      <Icon className="w-[45%] h-[45%] text-[#8891a0]" strokeWidth={1} />
    </div>
  );
}

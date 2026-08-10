import type { CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ProjectImagePlaceholderProps {
  icon: LucideIcon;
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

export default function ProjectImagePlaceholder({
  icon: Icon,
  src,
  alt = '',
  className = '',
  style,
}: ProjectImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden border border-white/10 ${className}`} style={style}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center border border-white/10 ${className}`}
      style={{
        background: 'linear-gradient(155deg, #1c1c20 0%, #0c0c0c 100%)',
        ...style,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <Icon className="relative w-1/4 h-1/4 text-[#8891a0]" strokeWidth={1} />
    </div>
  );
}

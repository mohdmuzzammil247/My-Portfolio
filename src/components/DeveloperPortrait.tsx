import { Code2 } from 'lucide-react';

export default function DeveloperPortrait() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 15%, #2a2a2f 0%, #16161a 55%, #0c0c0c 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[70%] aspect-square rounded-full blur-3xl opacity-60"
        style={{
          background:
            'radial-gradient(circle, #B600A8 0%, #7621B0 45%, transparent 75%)',
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="hero-heading font-black uppercase tracking-tight leading-none text-[6rem] sm:text-[7.5rem] md:text-[9rem]">
          MM
        </span>
        <div className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/30 px-4 py-2">
          <Code2 className="w-4 h-4 text-[#D7E2EA]" strokeWidth={1.75} />
          <span className="text-[#D7E2EA] text-xs uppercase tracking-widest font-medium">
            Full Stack Dev
          </span>
        </div>
      </div>
    </div>
  );
}

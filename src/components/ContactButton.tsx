interface ContactButtonProps {
  href?: string;
  className?: string;
}

export default function ContactButton({
  href = 'mailto:muzzammilmohd247@gmail.com',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #3A0000 7%, #A3121B 37%, #E2451C 72%, #FFB200 100%)',
        boxShadow: '0px 4px 4px rgba(226, 69, 28, 0.3), 4px 4px 12px #A3121B inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  );
}

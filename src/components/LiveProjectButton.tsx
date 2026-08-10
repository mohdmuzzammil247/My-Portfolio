interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  size?: 'md' | 'sm';
  className?: string;
}

export default function LiveProjectButton({
  href = 'https://github.com/mohdmuzzammil247',
  label = 'Live Project',
  size = 'md',
  className = '',
}: LiveProjectButtonProps) {
  const sizeClasses =
    size === 'sm'
      ? 'px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm'
      : 'px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 whitespace-nowrap ${sizeClasses} ${className}`}
    >
      {label}
    </a>
  );
}

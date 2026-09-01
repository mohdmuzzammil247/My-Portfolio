import { Cpu } from 'lucide-react';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import IronManPortrait from './IronManPortrait';

const resumePdf = `${import.meta.env.BASE_URL}Mohd-Muzzammil-Resume.pdf`;

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      className="min-h-screen-safe relative flex flex-col bg-[#F4EFE3]"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between gap-3 px-6 md:px-10 pt-6 md:pt-8"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #A3121B 0%, #FFB200 100%)' }}
          >
            <Cpu className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <span className="hidden sm:inline text-[#0C0C0C] font-bold uppercase tracking-widest text-sm">
            MujuZ Portfolio
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6 md:gap-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#0C0C0C] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base transition-opacity duration-200 hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] font-medium uppercase tracking-widest text-[10px] sm:text-xs px-3.5 py-1.5 sm:px-5 sm:py-2 transition-colors duration-200 hover:bg-[#0C0C0C]/5"
          >
            Resume
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.05} y={-10} className="px-6 md:px-10 mt-6 sm:mt-8">
        <div className="inline-flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#E2451C', animation: 'arc-pulse 2s ease-in-out infinite' }}
          />
          <span className="text-[#A3121B] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
            Your friendly neighborhood engineer
          </span>
        </div>
      </FadeIn>

      <div className="mt-3 sm:mt-2 md:-mt-1">
        <FadeIn delay={0.15} y={40}>
          <h1 className="stark-hero font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[10.5vw] md:text-[11vw] lg:text-[11.3vw] px-6 md:px-10">
            hi, i&apos;m <span className="stark-hero-accent">muzzammil.</span>
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-center py-8 sm:py-10 md:py-12">
        <div className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px]">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <FadeIn delay={0.6} y={30}>
              <IronManPortrait />
            </FadeIn>
          </Magnet>
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#3a3a3a] font-medium uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a full stack developer driven by building fast, scalable and thoughtful digital
            products
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="flex items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(123deg, #A3121B 20%, #E2451C 100%)' }}
          >
            Explore Projects
          </a>
          <span className="hidden sm:inline-flex">
            <ContactButton />
          </span>
        </FadeIn>
      </div>
    </section>
  );
}

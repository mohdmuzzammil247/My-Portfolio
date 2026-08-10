import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const resumePdf = `${import.meta.env.BASE_URL}Mohd-Muzzammil-Resume.pdf`;

const LINKS = [
  { icon: Mail, label: 'muzzammilmohd247@gmail.com', href: 'mailto:muzzammilmohd247@gmail.com' },
  { icon: Phone, label: '+91 7022084687', href: 'tel:+917022084687' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mohd-muzzammil-82b73333a',
  },
  { icon: Github, label: 'GitHub', href: 'https://github.com/mohdmuzzammil247' },
  { icon: FileText, label: 'Resume', href: resumePdf },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 text-center">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactButton />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-[#D7E2EA] text-sm uppercase tracking-widest font-light transition-opacity duration-200 hover:opacity-70"
              >
                <link.icon className="w-4 h-4" strokeWidth={1.5} />
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <p className="text-[#8891a0] text-xs uppercase tracking-widest font-light pt-10">
          &copy; {new Date().getFullYear()} Mohd Muzzammil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { useState, type CSSProperties, type FormEvent } from 'react';
import { Github, Linkedin, Mail, Phone, FileText, Send } from 'lucide-react';
import FadeIn from './FadeIn';
import ironmanSuit from '../assets/hero/ironman-suit.jpg';

const resumePdf = `${import.meta.env.BASE_URL}Mohd-Muzzammil-Resume.pdf`;
const CONTACT_EMAIL = 'muzzammilmohd247@gmail.com';

const LINKS = [
  { icon: Mail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: '+91 7022084687', href: 'tel:+917022084687' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mohd-muzzammil-82b73333a' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/mohdmuzzammil247' },
  { icon: FileText, label: 'Resume', href: resumePdf },
];

const inputStyle: CSSProperties = {
  background: '#151515',
  border: '1px solid rgba(255, 178, 0, 0.2)',
};

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn
        x={60}
        y={0}
        duration={0.9}
        className="hidden lg:block absolute right-4 xl:right-16 top-1/2 -translate-y-1/2 w-[160px] xl:w-[210px]"
      >
        <img
          src={ironmanSuit}
          alt=""
          aria-hidden="true"
          className="w-full h-auto"
          style={{
            transform: 'scaleX(-1) rotate(8deg)',
            maskImage: 'radial-gradient(ellipse 65% 92% at 50% 38%, black 55%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 65% 92% at 50% 38%, black 55%, transparent 100%)',
            filter: 'drop-shadow(0 20px 30px rgba(226, 69, 28, 0.25))',
          }}
        />
      </FadeIn>

      <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
        <FadeIn>
          <div className="flex flex-col items-center gap-3">
            <span className="text-[#FFB200] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
              Get in touch
            </span>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
            >
              Contact.
            </h2>
            <span
              className="h-1 w-20 rounded-full"
              style={{ background: 'linear-gradient(90deg, #A3121B, #FFB200)' }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto text-left">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[#8891a0] text-[10px] uppercase tracking-widest font-medium">
                Your name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl px-4 py-3 text-sm text-[#D7E2EA] outline-none focus:border-[#FFB200] transition-colors"
                style={inputStyle}
                placeholder="Tony Stark"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[#8891a0] text-[10px] uppercase tracking-widest font-medium">
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl px-4 py-3 text-sm text-[#D7E2EA] outline-none focus:border-[#FFB200] transition-colors"
                style={inputStyle}
                placeholder="you@starkindustries.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-[#8891a0] text-[10px] uppercase tracking-widest font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-xl px-4 py-3 text-sm text-[#D7E2EA] outline-none focus:border-[#FFB200] transition-colors resize-none"
                style={inputStyle}
                placeholder="Let's build something incredible."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.02] mt-2"
              style={{
                background: 'linear-gradient(123deg, #3A0000 7%, #A3121B 37%, #E2451C 72%, #FFB200 100%)',
                boxShadow: '0px 4px 4px rgba(226, 69, 28, 0.3)',
              }}
            >
              Send Message
              <Send className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-6">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-[#D7E2EA] text-sm uppercase tracking-widest font-light transition-colors duration-200 hover:text-[#FFB200]"
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

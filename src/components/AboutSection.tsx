import { Cpu } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import muzzammilPhoto from '../assets/hero/muzzammil-photo.jpg';
import arcReactor from '../assets/hero/arc-reactor.jpg';

const ABOUT_TEXT =
  "With more than two years of hands-on experience across full product lifecycles, i focus on react.js, node.js, and building scalable, cloud-ready web applications, i truly enjoy partnering with businesses and stakeholders to turn ideas into production-ready platforms. let's build something incredible together!";

const PRIMARY_STACK = ['React', 'Node.js', 'Java', 'MongoDB', 'MySQL', 'Git'];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ overflowX: 'clip' }}
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0C0C0C 1px, transparent 1px), linear-gradient(90deg, #0C0C0C 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 flex-1 min-w-0 text-center md:text-left">
          <FadeIn>
            <div className="inline-flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#E2451C]" strokeWidth={2} />
              <span className="text-[#A3121B] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
                Behind the armor
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} y={30}>
            <h2
              className="font-black uppercase leading-[0.95] tracking-tight text-[#0C0C0C] whitespace-nowrap"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 68px)' }}
            >
              Mohd
              <br />
              Muzzammil.
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#3a3a3a] font-medium leading-relaxed max-w-[520px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          />

          <FadeIn delay={0.15} y={20} className="flex flex-col items-center md:items-start gap-3">
            <span className="text-[#8891a0] text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold">
              Primary tech stack
            </span>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {PRIMARY_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wide"
                  style={{
                    border: '1.5px solid #0C0C0C',
                    color: '#0C0C0C',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        <FadeIn delay={0.2} x={40} y={0} className="flex-shrink-0">
          <div className="relative w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px]">
            <div
              className="absolute -inset-2 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #A3121B, #FFB200, #A3121B, #FFB200, #A3121B)',
              }}
            />
            <div className="absolute inset-[6px] rounded-full overflow-hidden border-4 border-white">
              <img src={muzzammilPhoto} alt="Mohd Muzzammil" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -bottom-3 -right-3 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white"
              style={{ boxShadow: '0 0 0 2px #FFB200, 0 4px 16px rgba(0,0,0,0.25)' }}
            >
              <img src={arcReactor} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

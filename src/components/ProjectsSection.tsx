import { Globe, Smartphone, HeartPulse } from 'lucide-react';
import FadeIn from './FadeIn';
import ProjectCard, { type Project } from './ProjectCard';
import ironmanSuit from '../assets/hero/ironman-suit.jpg';

import karamaOg from '../assets/projects/karama-og.jpg';
import karamaMedtech from '../assets/projects/karama-medtech.webp';
import karamaSfda from '../assets/projects/karama-sfda.jpg';
import iwashIcon from '../assets/projects/iwash-icon.png';
import iwashShot1 from '../assets/projects/iwash-shot1.png';
import iwashShot2 from '../assets/projects/iwash-shot2.png';

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client',
    name: 'KaRama VS Website',
    icon: Globe,
    links: [{ label: 'Live Project', href: 'https://www.karamavs.com' }],
    images: {
      leftTop: karamaMedtech,
      leftBottom: karamaSfda,
      right: karamaOg,
    },
  },
  {
    number: '02',
    category: 'Client',
    name: 'iWash Laundry App',
    icon: Smartphone,
    links: [
      { label: 'Customer App', href: 'https://play.google.com/store/apps/details?id=com.iwashcustomer' },
      { label: 'Business App', href: 'https://play.google.com/store/apps/details?id=com.iwashbusiness' },
      { label: 'iWash App', href: 'https://play.google.com/store/apps/details?id=com.iwash' },
    ],
    images: {
      leftTop: iwashIcon,
      leftBottom: iwashShot1,
      right: iwashShot2,
    },
  },
  {
    number: '03',
    category: 'Client',
    name: 'Hospital Management System',
    icon: HeartPulse,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ overflowX: 'clip' }}
    >
      <div className="relative flex items-center justify-center mb-16 sm:mb-20 md:mb-28">
        <FadeIn
          x={-60}
          y={0}
          duration={0.9}
          className="hidden md:block absolute left-0 lg:left-8 bottom-0 w-[140px] lg:w-[190px]"
        >
          <img
            src={ironmanSuit}
            alt=""
            aria-hidden="true"
            className="w-full h-auto"
            style={{
              maskImage: 'radial-gradient(ellipse 65% 92% at 50% 38%, black 55%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 65% 92% at 50% 38%, black 55%, transparent 100%)',
              filter: 'drop-shadow(0 20px 30px rgba(226, 69, 28, 0.25))',
            }}
          />
        </FadeIn>

        <FadeIn>
          <div className="flex flex-col items-center gap-3">
            <span className="text-[#FFB200] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
              Featured works
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Project
            </h2>
            <span
              className="h-1 w-20 rounded-full"
              style={{ background: 'linear-gradient(90deg, #A3121B, #FFB200)' }}
            />
          </div>
        </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}

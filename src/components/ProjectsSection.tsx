import { Globe, Smartphone, HeartPulse } from 'lucide-react';
import FadeIn from './FadeIn';
import ProjectCard, { type Project } from './ProjectCard';

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
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import LiveProjectButton from './LiveProjectButton';
import ProjectImagePlaceholder from './ProjectImagePlaceholder';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  number: string;
  category: string;
  name: string;
  icon: LucideIcon;
  links?: ProjectLink[];
  images?: {
    leftTop: string;
    leftBottom: string;
    right: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

export default function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="relative h-[130vh]">
      <motion.div
        style={{ scale, top: `calc(5rem + ${index * 20}px)` }}
        className="sticky h-[72vh] sm:h-[75vh] md:h-[78vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
      >
        <div className="flex items-start sm:items-center justify-between gap-4 flex-wrap flex-shrink-0">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <span
              className="text-[#D7E2EA] font-black leading-none flex-shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[#8891a0] text-xs sm:text-sm uppercase tracking-widest font-medium">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl leading-tight">
                {project.name}
              </h3>
            </div>
          </div>

          {project.links && project.links.length > 0 ? (
            project.links.length === 1 ? (
              <LiveProjectButton href={project.links[0].href} />
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                {project.links.map((link) => (
                  <LiveProjectButton key={link.label} href={link.href} label={link.label} size="sm" />
                ))}
              </div>
            )
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border-2 border-[#8891a0]/40 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#8891a0]">
              Private Deployment
            </span>
          )}
        </div>

        <div className="grid grid-cols-[40%_60%] gap-3 flex-1 min-h-0">
          <div className="flex flex-col gap-3 min-h-0">
            <ProjectImagePlaceholder
              icon={project.icon}
              src={project.images?.leftTop}
              alt={`${project.name} preview 1`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-[1] min-h-0"
            />
            <ProjectImagePlaceholder
              icon={project.icon}
              src={project.images?.leftBottom}
              alt={`${project.name} preview 2`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-[1.5] min-h-0"
            />
          </div>
          <ProjectImagePlaceholder
            icon={project.icon}
            src={project.images?.right}
            alt={`${project.name} preview 3`}
            className="h-full min-h-0 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

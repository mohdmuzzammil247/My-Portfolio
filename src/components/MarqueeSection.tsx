import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Server,
  Network,
  Coffee,
  Database,
  GitBranch,
  Github,
  PenTool,
  Smartphone,
  Layers,
  Globe,
  PlayCircle,
  AppWindow,
  Users,
  RefreshCw,
  Cloud,
  Boxes,
  ShieldCheck,
} from 'lucide-react';
import TechTile from './TechTile';

const ROW_1 = [
  { label: 'HTML5', icon: Code2 },
  { label: 'CSS3', icon: Palette },
  { label: 'JavaScript (ES6+)', icon: Braces },
  { label: 'React.js', icon: Atom },
  { label: 'Node.js', icon: Server },
  { label: 'REST API', icon: Network },
  { label: 'Java', icon: Coffee },
  { label: 'MongoDB', icon: Database },
  { label: 'MySQL', icon: Boxes },
  { label: 'Git', icon: GitBranch },
  { label: 'GitHub', icon: Github },
];

const ROW_2 = [
  { label: 'Figma', icon: PenTool },
  { label: 'Responsive Design', icon: Smartphone },
  { label: 'UI/UX Design', icon: Layers },
  { label: 'Wix', icon: Globe },
  { label: 'Play Console', icon: PlayCircle },
  { label: 'App Store Connect', icon: AppWindow },
  { label: 'CRM Systems', icon: Users },
  { label: 'Agile/Scrum', icon: RefreshCw },
  { label: 'Cloud Architecture', icon: Cloud },
  { label: 'Secure Systems', icon: ShieldCheck },
];

const TRIPLED_ROW_1 = [...ROW_1, ...ROW_1, ...ROW_1];
const TRIPLED_ROW_2 = [...ROW_2, ...ROW_2, ...ROW_2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ overflowX: 'clip' }}
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-3"
          style={{ willChange: 'transform', transform: `translateX(${offset - 200}px)` }}
        >
          {TRIPLED_ROW_1.map((item, i) => (
            <TechTile key={`${item.label}-${i}`} label={item.label} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-3"
          style={{ willChange: 'transform', transform: `translateX(${-(offset - 200)}px)` }}
        >
          {TRIPLED_ROW_2.map((item, i) => (
            <TechTile key={`${item.label}-${i}`} label={item.label} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

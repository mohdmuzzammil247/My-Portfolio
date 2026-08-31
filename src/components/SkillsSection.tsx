import FadeIn from './FadeIn';
import arcReactor from '../assets/hero/arc-reactor.jpg';

const SKILLS = [
  {
    number: '01',
    name: 'Frontend Development',
    level: 'Advanced',
    levelValue: 90,
    description:
      'Building responsive, accessible interfaces with React.js, modern JavaScript (ES6+), and clean UI/UX design in Figma.',
  },
  {
    number: '02',
    name: 'Backend Development',
    level: 'Advanced',
    levelValue: 85,
    description:
      'Designing and integrating REST APIs with Node.js and Java, focused on performance, scalability, and clean architecture.',
  },
  {
    number: '03',
    name: 'Database & Cloud',
    level: 'Proficient',
    levelValue: 75,
    description:
      'Structuring and optimizing MongoDB and MySQL databases for cloud-ready, production-grade applications.',
  },
  {
    number: '04',
    name: 'Tools & Platforms',
    level: 'Proficient',
    levelValue: 80,
    description:
      'Working fluently across Git, GitHub, Figma, Wix, and CRM systems like Octopus AI to ship end-to-end product solutions.',
  },
  {
    number: '05',
    name: 'Leadership & Delivery',
    level: 'Advanced',
    levelValue: 88,
    description:
      'Leading projects from POC to production, presenting to stakeholders, and driving Agile teams toward on-time delivery.',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28"
      style={{ overflowX: 'clip' }}
    >
      <div className="hidden md:block absolute top-0 right-10 lg:right-24 w-px h-16 bg-[#0C0C0C]/15" />
      <div
        className="hidden md:block absolute top-16 right-4 lg:right-16 w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-[#FFB200]"
        style={{
          boxShadow: '0 0 24px 5px rgba(66, 189, 255, 0.35)',
          transformOrigin: 'top center',
          animation: 'skill-swing 4.5s ease-in-out infinite',
        }}
      >
        <img src={arcReactor} alt="" className="w-full h-full object-cover" />
      </div>

      <FadeIn>
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-[#A3121B] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold">
            Suit specifications
          </span>
          <h2
            className="text-[#0C0C0C] font-black uppercase leading-none mt-3"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
          >
            Technical Skills
          </h2>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black leading-none bg-clip-text text-transparent"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  backgroundImage: 'linear-gradient(160deg, #A3121B 0%, #FFB200 100%)',
                }}
              >
                {skill.number}
              </span>
              <div className="flex flex-col gap-3 pt-2 sm:pt-4 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <h3
                    className="text-[#0C0C0C] font-medium uppercase"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <span className="text-[#A3121B] text-[10px] sm:text-xs uppercase tracking-widest font-bold">
                    {skill.level}
                  </span>
                </div>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {skill.description}
                </p>
                <div className="w-full max-w-xs h-1.5 rounded-full bg-[#0C0C0C]/10 overflow-hidden mt-1">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.levelValue}%`,
                      background: 'linear-gradient(90deg, #A3121B 0%, #FFB200 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

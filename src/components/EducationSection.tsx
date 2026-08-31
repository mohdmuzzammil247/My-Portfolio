import FadeIn from './FadeIn';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  note?: string;
}

const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Amity University Online',
    period: 'In Progress',
  },
  {
    degree: 'Diploma in Computer Science Engineering',
    institution: 'Government Polytechnic College, Gulbarga, India',
    period: '2019 – 2023',
    note: 'Aggregate: 78%',
  },
  {
    degree: 'Secondary School Certificate (Xth)',
    institution: 'Shree Guru Vidya Peetha School, Gulbarga, India',
    period: '2018 – 2019',
    note: 'Aggregate: 79.68%',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase text-center mb-14 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col">
        {EDUCATION.map((item, i) => (
          <FadeIn key={item.degree} delay={i * 0.1}>
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 py-7 sm:py-8"
              style={{ borderBottom: '1px solid rgba(255, 178, 0, 0.15)' }}
            >
              <div className="flex flex-col gap-1.5 min-w-0">
                <h3 className="text-[#D7E2EA] font-medium uppercase text-base sm:text-xl md:text-2xl leading-snug">
                  {item.degree}
                </h3>
                <p className="text-[#8891a0] font-light text-sm sm:text-base">
                  {item.institution}
                  {item.note ? ` · ${item.note}` : ''}
                </p>
              </div>
              <span className="flex-shrink-0 text-[#F0D9A8] text-xs sm:text-sm uppercase tracking-widest font-medium border border-[#FFB200]/30 rounded-full px-4 py-2 self-start sm:self-auto">
                {item.period}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

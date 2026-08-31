import { Trophy, TrendingUp, Smartphone, Presentation, LayoutTemplate } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';

interface Achievement {
  icon: LucideIcon;
  headline: string;
  detail: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Trophy,
    headline: '40,000 SAR Datathon Win',
    detail: 'Led technical strategy, architecture, and the judge presentation for a winning entry.',
  },
  {
    icon: TrendingUp,
    headline: 'Intern to Full-Time in 4 Months',
    detail: 'Promoted at KaRama Intelligence Technology for rapid growth and impact.',
  },
  {
    icon: Smartphone,
    headline: 'iWash Shipped on Both Stores',
    detail: 'Managed end-to-end compliance and release on Google Play and the Apple App Store.',
  },
  {
    icon: Presentation,
    headline: 'International Conference Speaker',
    detail: 'Represented the company at healthcare, biotech, and tech conferences and hackathons.',
  },
  {
    icon: LayoutTemplate,
    headline: 'KaRama IT Website, Solo Build',
    detail: 'Independently designed and launched the company website end-to-end — UX, content, and implementation.',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="bg-white px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-12 sm:mb-16"
        style={{ fontSize: 'clamp(2.25rem, 7vw, 90px)' }}
      >
        Key Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
        {ACHIEVEMENTS.map((item, i) => (
          <FadeIn
            key={item.headline}
            delay={i * 0.08}
            className={i === ACHIEVEMENTS.length - 1 ? 'md:col-span-2' : ''}
          >
            <div
              className="h-full flex items-start gap-5 rounded-3xl p-6 sm:p-7"
              style={{ border: '1px solid rgba(12, 12, 12, 0.12)' }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #A3121B 0%, #FFB200 100%)' }}
              >
                <item.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-base sm:text-lg leading-snug">
                  {item.headline}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', opacity: 0.6 }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Expert in building end-to-end web and mobile solutions',
  },
  {
    icon: Rocket,
    title: 'Product Leadership',
    description: 'Leading technical execution from concept to deployment',
  },
  {
    icon: Users,
    title: 'Team Coordination',
    description: 'Managing cross-functional teams and stakeholders',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Delivered real-world solutions for businesses',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Professional Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNoJTIwZGV2ZWxvcGVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3Mzc2MjUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 rounded-2xl -z-10" />
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Tech Lead & Full Stack Developer</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am a Tech Lead and Full Stack IT specialist with experience in web development, CRM systems, product coordination, and end-to-end technical delivery. I have worked on websites, mobile app coordination, proof-of-concepts, client demos, and product presentations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I enjoy building practical digital solutions and contributing to innovative technology-driven companies. My approach combines technical expertise with strong communication and leadership skills to deliver impactful results.
              </p>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
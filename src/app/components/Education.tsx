import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Diploma in Computer Science',
    institution: 'Government Polytechnic College, Gulbarga',
    location: 'Gulbarga, India',
    period: '2019 – 2023',
    percentage: '78%',
    icon: GraduationCap,
  },
  {
    degree: 'Xth Standard',
    institution: 'Shree Guru Vidya Peetha School, Gulbarga',
    location: 'Gulbarga, India',
    period: '2018 – 2019',
    percentage: '79.68%',
    icon: Award,
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" className="py-24 bg-white">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {edu.institution}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Percentage Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
                    <Award className="w-5 h-5" />
                    <span>Score: {edu.percentage}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

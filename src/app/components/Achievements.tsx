import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Award, Building2, Users, TrendingUp } from 'lucide-react';

const achievements = [
  {
    title: 'Datathon Winner',
    description: 'Contributed to winning a 40,000 SAR Datathon through technical explanation, pitch support, and presentation',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  {
    title: 'Industry Representation',
    description: 'Represented company at conferences, hackathons, and industry events',
    icon: Users,
    color: 'from-blue-400 to-indigo-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    title: 'Hospital Management System Sale',
    description: 'Built and sold a Hospital Management System to Sofi Multispeciality Hospital - a real-world commercial success',
    icon: Building2,
    color: 'from-green-400 to-emerald-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    title: 'App Store Publishing',
    description: 'Successfully published iWash mobile application on both Google Play Store and Apple App Store',
    icon: Award,
    color: 'from-purple-400 to-pink-500',
    textColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];

const stats = [
  { number: '40K SAR', label: 'Datathon Prize Won', icon: TrendingUp },
  { number: '3+', label: 'Professional Roles', icon: Users },
  { number: '4+', label: 'Major Projects', icon: Building2 },
  { number: '2+', label: 'Years Experience', icon: Award },
];

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Achievements & Impact
            </h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full mb-4" />
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Delivering real-world results and making meaningful contributions
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-blue-400"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon with gradient */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-xl text-blue-200">
              Ready to create more impact and drive innovation forward
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

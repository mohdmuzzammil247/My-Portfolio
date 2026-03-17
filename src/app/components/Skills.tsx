import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Globe,
  Layers,
  MessageSquare,
  Users,
  Target,
  Presentation,
} from 'lucide-react';

const technicalSkills = [
  { name: 'HTML', icon: Code2, level: 90 },
  { name: 'CSS', icon: Code2, level: 85 },
  { name: 'JavaScript', icon: Code2, level: 80 },
  { name: 'Java', icon: Code2, level: 75 },
  { name: 'Python', icon: Code2, level: 70 },
  { name: 'SQL / DBMS', icon: Database, level: 85 },
  { name: 'Full Stack Development', icon: Layers, level: 85 },
  { name: 'Web Development', icon: Globe, level: 90 },
  { name: 'CRM Systems', icon: Target, level: 80 },
  { name: 'Product Coordination', icon: Users, level: 85 },
  { name: 'Team Coordination', icon: Users, level: 88 },
];

const softSkills = [
  {
    name: 'Client Communication',
    icon: MessageSquare,
    description: 'Effective communication with clients and stakeholders',
  },
  {
    name: 'Stakeholder Coordination',
    icon: Users,
    description: 'Managing relationships across teams and organizations',
  },
  {
    name: 'Technical Presentation',
    icon: Presentation,
    description: 'Presenting technical concepts to diverse audiences',
  },
  {
    name: 'Project Management',
    icon: Target,
    description: 'Leading projects from conception to delivery',
  },
  {
    name: 'Leadership',
    icon: Users,
    description: 'Guiding teams and driving technical excellence',
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-600" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-slate-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Soft Skills
              </h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 group hover:border-blue-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

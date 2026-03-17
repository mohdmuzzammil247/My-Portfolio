import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Tech Lead',
    company: 'KaRama Intelligence Technology',
    location: 'Saudi Arabia',
    period: 'March 2025 – Present',
    responsibilities: [
      'Leading development activities for the KaRama VS website',
      'Coordinating technical tasks and delivery across teams',
      'Building scalable frontend and backend solutions',
      'Developing POCs for clients and investors',
      'Supporting sales through product demos and technical discussions',
      'Representing the company at conferences, hackathons, and industry events',
      'Participating in board and stakeholder meetings',
      'Contributed to the 40,000 SAR Datathon win through technical explanation, pitch support, and presentation',
    ],
    current: true,
  },
  {
    title: 'Intern',
    company: 'KaRama Intelligence Technology',
    location: 'Saudi Arabia',
    period: 'December 2024 – March 2025',
    responsibilities: [
      'Designed and developed the KaRama IT company website on Wix',
      'Worked on the Octopus AI CRM platform',
      'Managed the iWash Laundry Service mobile application project',
      'Coordinated development timelines with the external app team',
      'Led the publishing process for Google Play Store and Apple App Store',
    ],
    current: false,
  },
  {
    title: 'Intern',
    company: 'British Institute of Technology',
    location: 'India',
    period: 'June 2023 – September 2023',
    responsibilities: [
      'Developed a client-server real-time chatting application using Java',
      'Built a Hospital Management System with patient records, appointments, billing, and admin workflows',
    ],
    current: false,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
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
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200" />

            {/* Experience cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left side (or right on odd items) */}
                  <div className={index % 2 === 0 ? 'md:text-right' : 'md:order-2'}>
                    <div
                      className={`inline-block bg-gradient-to-br from-white to-slate-50/50 rounded-2xl shadow-xl p-8 border-2 ${
                        exp.current ? 'border-blue-500 shadow-blue-100' : 'border-slate-200'
                      } hover:shadow-2xl hover:border-blue-400 transition-all duration-300 w-full group`}
                    >
                      {exp.current && (
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full mb-4 shadow-md">
                          CURRENT POSITION
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 text-left group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-bold mb-3 text-left">
                        <Briefcase className="w-5 h-5" />
                        <span className="text-lg">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6 text-left">
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <MapPin className="w-4 h-4 text-slate-500" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-3 text-slate-700 text-left">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <span className="text-blue-600 mt-1 text-lg font-bold flex-shrink-0">•</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`w-6 h-6 rounded-full border-4 ${
                        exp.current
                          ? 'bg-blue-600 border-blue-200'
                          : 'bg-white border-blue-600'
                      } shadow-lg`}
                    />
                  </div>

                  {/* Right side spacer (or left on odd items) */}
                  <div className={index % 2 === 0 ? 'md:order-2' : ''} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
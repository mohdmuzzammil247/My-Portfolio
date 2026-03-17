import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'muzzammilmohd247@gmail.com',
    link: 'mailto:muzzammilmohd247@gmail.com',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: Phone,
    label: 'Phone (India)',
    value: '+91 7022084687',
    link: 'tel:+917022084687',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Phone,
    label: 'Phone (Saudi Arabia)',
    value: '+966 533751837',
    link: 'tel:+966533751837',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Mohd Muzzammil',
    link: 'https://www.linkedin.com/in/mohd-muzzammil-82b73333a/',
    color: 'from-blue-500 to-blue-600',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              I'm always open to discussing new opportunities, projects, or collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 md:space-y-6"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={index}
                        href={contact.link}
                        target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 md:gap-4 bg-gradient-to-br from-white to-slate-50/50 p-4 md:p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-500 group active:scale-95"
                      >
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs md:text-sm text-slate-500 font-medium mb-0.5 md:mb-1">
                            {contact.label}
                          </div>
                          <div className="font-bold text-sm md:text-base text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                            {contact.value}
                          </div>
                        </div>
                        {contact.label === 'LinkedIn' && (
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-5 md:p-6 rounded-2xl text-white shadow-xl border border-blue-500"
              >
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl">Currently Based In</h4>
                </div>
                <p className="text-sm md:text-base text-blue-50 pl-13 md:pl-15">
                  Saudi Arabia | Available for remote and on-site opportunities
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white via-white to-blue-50/30 rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-blue-200/50 hover:border-blue-300 transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                Let's Work Together
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5 md:mb-6">
                Whether you're looking for a Tech Lead, Full Stack Developer, or someone to help coordinate and deliver your next big project, I'd love to hear from you.
              </p>

              <div className="space-y-3 md:space-y-4 bg-slate-50/50 p-4 md:p-5 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700">
                    <span className="font-bold text-slate-900">Tech Leadership:</span> Leading development teams and technical execution
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700">
                    <span className="font-bold text-slate-900">Full Stack Development:</span> Building scalable web and mobile solutions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700">
                    <span className="font-bold text-slate-900">Product Coordination:</span> Managing projects from concept to deployment
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t-2 border-slate-200">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  asChild
                >
                  <a href="mailto:muzzammilmohd247@gmail.com">
                    <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
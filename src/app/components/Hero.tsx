import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Mohd Muzzammil
          </motion.h1>

          {/* Title */}
          <motion.div
            className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tech Lead | Full Stack Developer
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Building scalable digital products, leading technical execution, and turning ideas into real-world solutions.
          </motion.p>

          {/* Featured Highlight */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 max-w-4xl mx-auto mb-10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-slate-700 leading-relaxed">
              From academic projects to real-world deployments — including a <span className="font-semibold text-blue-600">Hospital Management System sold to Sofi Multispeciality Hospital</span> and <span className="font-semibold text-blue-600">live mobile app publishing for iWash</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/mohd-muzzammil-82b73333a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 w-5 h-5" />
                LinkedIn Profile
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

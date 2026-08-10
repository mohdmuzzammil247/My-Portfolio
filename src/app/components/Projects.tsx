import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Building2, MessageSquare, Smartphone, Globe } from 'lucide-react';
import { Button } from './ui/button';
import karamaVsImage from '../../assets/d7d511ced4b4b22a03c4773ab6a64516bc26f473.png';

const projects = [
  {
    title: 'Hospital Management System',
    description:
      'Developed a complete Hospital Management System during college, including patient records, appointments, billing, and administrative workflows. The system was sold to Sofi Multispeciality Hospital in Jewargi, making it one of my most important practical academic achievements.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc3Mzc2MDMzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Java', 'SQL', 'DBMS', 'Desktop App'],
    featured: true,
  },
  {
    title: 'Chatting Application',
    description:
      'Created a client-server chatting application during internship at British Institute of Technology. The application supported real-time communication using Java and demonstrated practical understanding of networking and software development.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1742072594013-c87f855e29ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3NzM3NDMyNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Java', 'Networking', 'Real-time'],
  },
  {
    title: 'iWash Customer App',
    description:
      'Worked on the iWash Laundry Service application as Project Manager, coordinating the app development process and handling publishing activities for both Android and iOS platforms.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM3NjEzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Mobile', 'Project Management'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.iwashcustomer',
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/sa/app/iwash-customer/id6744693415',
      },
    ],
    featured: true,
  },
  {
    title: 'KaRama VS Website',
    description:
      'Contributed to the KaRama Venture Studio website and oversaw development-related tasks as part of my leadership role. Led technical execution and coordinated with stakeholders for successful delivery.',
    icon: Globe,
    tags: ['Web Development', 'Leadership', 'Full Stack'],
    image: karamaVsImage,
    links: [
      {
        label: 'Visit Website',
        url: 'https://www.karamavs.com/',
      },
    ],
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From academic achievements to real-world deployments
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isKarama = project.title.toLowerCase().includes('karama');
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={
                    isKarama
                      ? {
                          y: -20,
                          rotateX: 5,
                          rotateY: 5,
                          scale: 1.02,
                        }
                      : {}
                  }
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className={`group bg-white rounded-2xl overflow-hidden ${
                    isKarama
                      ? 'border border-slate-200/50'
                      : 'border-2 border-slate-200 hover:border-blue-600'
                  } ${
                    isKarama
                      ? 'shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)]'
                      : 'shadow-lg hover:shadow-2xl'
                  } transition-all duration-500 ${
                    project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Project Image */}
                  {project.image && (
                    <div
                      className={`relative h-64 overflow-hidden ${
                        isKarama
                          ? 'bg-gradient-to-br from-slate-50 to-white'
                          : 'bg-gradient-to-br from-blue-100 to-slate-100'
                      }`}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full ${
                          isKarama ? 'object-contain p-12' : 'object-cover'
                        }`}
                        animate={
                          isKarama && isHovered
                            ? {
                                scale: 1.1,
                                z: 50,
                              }
                            : isKarama
                            ? { scale: 1 }
                            : {}
                        }
                        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                        style={
                          isKarama
                            ? {
                                transformStyle: 'preserve-3d',
                                filter: isHovered ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' : 'none',
                              }
                            : {}
                        }
                      />
                      {!isKarama && (
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      )}
                      {!isKarama && (
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                      )}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Project Content */}
                  <div className={isKarama ? 'p-8' : 'p-6'}>
                    <h3
                      className={`${
                        isKarama ? 'text-2xl' : 'text-2xl'
                      } font-bold text-slate-900 mb-3 transition-colors ${
                        isKarama ? 'group-hover:text-blue-700' : 'group-hover:text-blue-600'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className={`text-slate-600 leading-relaxed mb-${isKarama ? '6' : '4'}`}>
                      {project.description}
                    </p>

                    {/* Wix Badge for KaRama VS */}
                    {isKarama && (
                      <div className="mb-6">
                        <span className="inline-flex items-center px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                          Built with Wix
                        </span>
                      </div>
                    )}

                    {/* Tags - Hidden for KaRama for minimalism */}
                    {!isKarama && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link, idx) => (
                          <Button
                            key={idx}
                            variant="outline"
                            size={isKarama ? 'default' : 'sm'}
                            className={
                              isKarama
                                ? 'border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300'
                                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                            }
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
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

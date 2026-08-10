import { motion } from 'motion/react';
import { Mail, Linkedin, Phone, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Mohd Muzzammil</h3>
            <p className="text-slate-400 leading-relaxed">
              Tech Lead | Full Stack Developer
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Building scalable digital products and leading technical execution
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(
                        link.toLowerCase()
                      );
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:muzzammilmohd247@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">muzzammilmohd247@gmail.com</span>
              </a>
              <a
                href="tel:+917022084687"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7022084687</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-muzzammil-82b73333a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mohd Muzzammil. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" />{' '}
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

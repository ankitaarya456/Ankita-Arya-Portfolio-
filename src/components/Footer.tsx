"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, Phone, ArrowUp, Code, Coffee } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ankitaarya456", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ankita-arya", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:ankitaarya9135@gmail.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+918210024102", label: "Phone" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ankita Arya</h3>
                <p className="text-purple-200">Software Developer & AI Researcher</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Passionate about creating innovative solutions in AI and cybersecurity while fostering 
              the next generation of tech professionals. Currently pursuing M.Tech and contributing 
              to cutting-edge research.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  title={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-200">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-200">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-purple-400" />
                <a 
                  href="mailto:ankitaarya9135@gmail.com"
                  className="hover:text-purple-300 transition-colors text-sm"
                >
                  ankitaarya9135@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-purple-400" />
                <a 
                  href="tel:+918210024102"
                  className="hover:text-purple-300 transition-colors text-sm"
                >
                  +91 8210024102
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-4 h-4 bg-purple-400 rounded-full mt-0.5"></div>
                <span className="text-sm">Available for new opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} Ankita Arya. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-400 fill-current" />
              </motion.div>
              <span>and</span>
              <Coffee size={16} className="text-yellow-400" />
              <span>using</span>
              <Code size={16} className="text-blue-400" />
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-sm"
            >
              Built with Next.js, TypeScript & Framer Motion
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
              title="Scroll to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

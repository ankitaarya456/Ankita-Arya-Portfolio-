"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Star } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const socialLinks = [
    { icon: <Phone size={18} />, href: "tel:+918210024102", label: "Phone" },
    { icon: <Mail size={18} />, href: "mailto:ankitaarya9135@gmail.com", label: "Email" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/ankita-arya", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "https://github.com/ankitaarya456", label: "GitHub" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 relative">
      {/* Elegant Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
      
      {/* Sophisticated Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Status Badge */}
              <motion.div variants={itemVariants} className="mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for new opportunities</span>
                </div>
              </motion.div>

              {/* Main Content */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Ankita Arya
                  </span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
                  Software Developer & AI Researcher
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Hello! I'm Ankita Arya, a software developer and AI researcher currently pursuing my M.Tech at IGDTUW. My work bridges machine learning, full-stack development, and AI security, with a focus on making intelligent systems more robust and reliable.
                </p>
                
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span>New Delhi, India</span>
                  <span className="mx-2">•</span>
                  <Star size={16} className="text-amber-500" />
                  <span>M.Tech Student at IGDTUW</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="mb-6">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? "_blank" : undefined}
                      rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300"
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Professional Stats */}
            <motion.div variants={itemVariants} className="lg:ml-12">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold shadow-lg">
                      AA
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Highlights</h3>
                    <p className="text-gray-600">Current achievements & expertise</p>
                  </div>

                  <div className="space-y-6">
                    {/* Education */}
                    <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                        87.8%
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">M.Tech CGPA</div>
                        <div className="text-sm text-gray-600">IGDTUW (2024-Present)</div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl">
                      <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                        2+
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Years Experience</div>
                        <div className="text-sm text-gray-600">DRDO • Teaching • Fintech</div>
                      </div>
                    </div>

                    {/* MCA */}
                    <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-xl">
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                        89.9%
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">MCA Score</div>
                        <div className="text-sm text-gray-600">GGSIPU (2021-2023)</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                >
                  DRDO
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                >
                  AI/ML
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-purple-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

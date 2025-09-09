"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin, Calendar, Award, ExternalLink } from "lucide-react";

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="text-left lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-600">Available for opportunities</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ankita Arya
                </span>
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
            </motion.div>

            {/* Role & Description */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mb-4">
                Software Developer & AI Researcher
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                M.Tech student specializing in <span className="font-semibold text-purple-600">Machine Learning</span> and{" "}
                <span className="font-semibold text-pink-600">Cybersecurity</span>. Currently researching adversarial attacks 
                on face recognition systems at <span className="font-semibold text-gray-800">DRDO</span> while developing 
                innovative fintech solutions.
              </p>
            </motion.div>

            {/* Key Info */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} className="text-purple-500" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={16} className="text-pink-500" />
                  <span>M.Tech 2024-Present</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Award size={16} className="text-purple-500" />
                  <span>87.8% CGPA</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-200 hover:border-purple-400 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">89.9%</div>
                  <div className="text-sm text-gray-600">MCA Score</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Profile Circle */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 p-1 shadow-2xl"
              >
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                  {/* Profile Image Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-8xl lg:text-9xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AA
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Status Indicator */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-8 right-8 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">🎓</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">💻</span>
              </motion.div>

              <motion.div
                animate={{ x: [-10, 10, -10], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-12 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-2xl">🔬</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

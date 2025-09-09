"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, MapPin, Calendar, Award, Briefcase, GraduationCap, Code } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
      
      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-purple-100">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm font-medium text-gray-600">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ankita Arya
              </span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8" />
            
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 mb-6">
              Software Developer & AI Researcher
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              M.Tech student specializing in <span className="font-semibold text-purple-600">Machine Learning</span> and{" "}
              <span className="font-semibold text-pink-600">Cybersecurity</span>. Currently researching adversarial attacks 
              on face recognition systems at <span className="font-semibold text-gray-800">DRDO</span> while developing 
              innovative fintech solutions.
            </p>
          </motion.div>

          {/* Key Achievements Grid */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">87.8%</div>
                <div className="text-gray-600 font-medium">M.Tech CGPA</div>
                <div className="text-sm text-gray-500 mt-1">IGDTUW, 2024-Present</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
                <div className="text-sm text-gray-500 mt-1">DRDO, Teaching, Fintech</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
                <div className="text-sm text-gray-500 mt-1">ML, Web Dev, Research</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-lg"
              >
                View My Work
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-purple-600 font-semibold rounded-2xl border-2 border-purple-200 hover:border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 group text-lg"
              >
                <Download size={22} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Professional Info */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-purple-500" />
                <span className="font-medium">New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-pink-500" />
                <span className="font-medium">M.Tech Student</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} className="text-purple-500" />
                <span className="font-medium">Research at DRDO</span>
              </div>
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
          className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center cursor-pointer hover:border-purple-500 transition-colors"
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

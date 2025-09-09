"use client";

import { motion } from "framer-motion";
import { Code, Database, Settings, Brain, PenTool, Server, Globe, Shield } from "lucide-react";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      skills: [
        { name: "Java", level: 90, experience: "3+ years" },
        { name: "Python", level: 85, experience: "2+ years" },
        { name: "JavaScript", level: 75, experience: "1+ years" },
        { name: "HTML/CSS", level: 80, experience: "2+ years" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      skills: [
        { name: "Spring Boot", level: 85, experience: "2+ years" },
        { name: "Spring Framework", level: 80, experience: "2+ years" },
        { name: "REST APIs", level: 85, experience: "2+ years" },
        { name: "Microservices", level: 70, experience: "1+ years" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe size={24} />,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      skills: [
        { name: "React.js", level: 80, experience: "1+ years" },
        { name: "Bootstrap", level: 85, experience: "2+ years" },
        { name: "Responsive Design", level: 80, experience: "2+ years" },
        { name: "Modern CSS", level: 75, experience: "2+ years" }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      skills: [
        { name: "MySQL", level: 85, experience: "3+ years" },
        { name: "MongoDB", level: 75, experience: "1+ years" },
        { name: "SQL", level: 90, experience: "3+ years" },
        { name: "Database Design", level: 80, experience: "2+ years" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={24} />,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      skills: [
        { name: "Machine Learning", level: 80, experience: "2+ years" },
        { name: "Computer Vision", level: 75, experience: "1+ years" },
        { name: "Deep Learning", level: 70, experience: "1+ years" },
        { name: "TensorFlow/PyTorch", level: 75, experience: "1+ years" }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Settings size={24} />,
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-50 to-gray-100",
      skills: [
        { name: "Git & GitHub", level: 85, experience: "3+ years" },
        { name: "VS Code", level: 90, experience: "3+ years" },
        { name: "Postman", level: 80, experience: "2+ years" },
        { name: "Jupyter Notebook", level: 85, experience: "2+ years" }
      ]
    }
  ];

  const certifications = [
    {
      title: "NPTEL Course: Digital Logic and Circuit Simulations",
      provider: "NPTEL",
      year: "2023",
      icon: "🎓"
    },
    {
      title: "Python Programming Course",
      provider: "DUCAT",
      year: "2022",
      icon: "🐍"
    },
    {
      title: "NIMCET AIR 1500",
      provider: "National Institute of Technology",
      year: "2021",
      icon: "🏆"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "from-green-400 to-green-500";
    if (level >= 70) return "from-yellow-400 to-yellow-500";
    return "from-red-400 to-red-500";
  };

  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise, developed through academic projects, 
              professional experience, and continuous learning.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{skill.experience}</span>
                          <span className="text-sm font-semibold text-gray-700">{skill.level}%</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full relative overflow-hidden`}
                        >
                          <motion.div
                            animate={{ x: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 h-full w-1/3 bg-white opacity-30"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-2">{cert.title}</h4>
                    <p className="text-purple-600 font-medium mb-1">{cert.provider}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-sm opacity-90">Programming Languages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-sm opacity-90">Frameworks & Tools</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-90">Databases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

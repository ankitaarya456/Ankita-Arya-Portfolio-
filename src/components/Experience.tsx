"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Building2, Users, Target, Code } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Research Intern",
      company: "Defence Research & Development Organisation (DRDO)",
      type: "Hybrid",
      period: "May 2025 – July 2025",
      location: "New Delhi, India",
      description: "Conducted cutting-edge research on adversarial attacks against face recognition models.",
      achievements: [
        "Evaluated robustness of face recognition models (Facenet, ArcFace, VGG-Face) against adversarial attacks",
        "Implemented PGD, NES, SimBA and Boundary Attack algorithms",
        "Analyzed white-box vs. black-box attack settings for comprehensive security assessment",
        "Used cosine similarity and threshold-based metrics for evaluation",
        "Explored preprocessing and defense strategies to enhance model reliability"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "Machine Learning", "Adversarial ML"],
      icon: <Target size={24} />,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100"
    },
    {
      title: "Assistant Professor",
      company: "Mewar Institute of Management",
      type: "On-Site",
      period: "October 2023 – July 2024",
      location: "Ghaziabad, India",
      description: "Delivered comprehensive education in programming and mathematics while mentoring students.",
      achievements: [
        "Delivered comprehensive lessons in Java programming, focusing on object-oriented principles",
        "Enhanced students' software development skills through debugging and code optimization techniques",
        "Taught foundational mathematics and digital electronics concepts critical for computing",
        "Strengthened students' analytical and problem-solving abilities",
        "Mentored students in their academic and professional development"
      ],
      technologies: ["Java", "Digital Electronics", "Mathematics", "Curriculum Development", "Teaching"],
      icon: <Users size={24} />,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      title: "Software Development Intern",
      company: "LetzPay Solutions Pvt. Ltd (Fintech Company)",
      type: "On-Site",
      period: "March 2023 – June 2023",
      location: "New Delhi, India",
      description: "Contributed to fintech solutions development with focus on backend systems and database management.",
      achievements: [
        "Fixed software bugs and improved existing features to enhance system performance",
        "Added functionality for downloading required documents in the application",
        "Utilized Java for robust backend development",
        "Worked with MySQL and MongoDB for efficient database management",
        "Followed Gradle and Maven for dependency management and build automation"
      ],
      technologies: ["Java", "MySQL", "MongoDB", "Gradle", "Maven", "Backend Development"],
      icon: <Code size={24} />,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    }
  ];

  return (
    <section id="experience" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
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
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My professional journey spans across research, education, and industry experience, 
              contributing to cutting-edge technology and nurturing future talent.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-400 shadow-lg z-10 transform md:-translate-x-1/2" />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } ml-12 md:ml-0`}
                  >
                    <div className="card relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${exp.color}`} />
                      
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          {exp.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Building2 size={16} className="text-gray-500" />
                            <span className="font-semibold text-gray-700">{exp.company}</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {exp.type}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3+
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Years of Experience</h4>
                <p className="text-gray-600">Across research, education, and industry</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  50+
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Students Mentored</h4>
                <p className="text-gray-600">In programming and technology</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  5+
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Papers</h4>
                <p className="text-gray-600">In AI and cybersecurity</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

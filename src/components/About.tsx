"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, TrendingUp } from "lucide-react";

const About = () => {
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

  const education = [
    {
      degree: "M.Tech (Master of Technology)",
      institution: "Indira Gandhi Delhi Technical University For Women",
      period: "2024 - Present",
      score: "87.8%",
      status: "Current",
      icon: <GraduationCap size={24} />,
      color: "from-purple-500 to-purple-600"
    },
    {
      degree: "MCA (Master In Computer Application)",
      institution: "Jagan Institute of Management Studies, New Delhi (GGSIPU)",
      period: "2021 - 2023",
      score: "89.9%",
      status: "Completed",
      icon: <Award size={24} />,
      color: "from-pink-500 to-pink-600"
    }
  ];

  const highlights = [
    "AI Research Specialist with focus on adversarial attacks",
    "Full-stack developer with Java and React expertise",
    "Experienced educator and mentor",
    "Published researcher in face recognition security"
  ];

  return (
    <section id="about" className="py-12 bg-white">
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
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate software developer and researcher dedicated to creating innovative solutions 
              in AI and cybersecurity while fostering the next generation of tech professionals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">👋</span>
                  </div>
                  My Journey
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Hello! I'm Ankita Arya, a software developer and AI researcher currently pursuing my M.Tech at IGDTUW. 
                    My work bridges machine learning, full-stack development, and AI security, with a focus on making 
                    intelligent systems more robust and reliable.
                  </p>
                  
                  <p>
                    As a Research Intern at <strong className="text-purple-600">DRDO</strong>, I worked on adversarial 
                    attacks in face recognition models (Facenet, ArcFace, VGG-Face) using techniques like PGD, NES, 
                    SimBA, and Boundary Attack, while also exploring defense strategies. Earlier, at 
                    <strong className="text-pink-600"> LetzPay Solutions</strong>, I contributed as a Software 
                    Development Intern, improving system performance, backend functionality in Java, and database 
                    management with MySQL/MongoDB.
                  </p>
                  
                  <p>
                    I've also served as an <strong className="text-purple-600">Assistant Professor</strong>, teaching 
                    Java programming, Digital Electronics, and Mathematics, which strengthened my passion for mentoring 
                    and knowledge sharing.
                  </p>
                  
                  <p>
                    My technical toolkit includes Java, Python, Spring Boot, React.js, MySQL, Power BI, GitHub, and 
                    Jupyter Notebook. I've applied these skills to projects such as Tweet Emotion Classification and 
                    Google Play Store Data Analysis, combining data science and software engineering to generate 
                    impactful insights.
                  </p>
                  
                  <p>
                    I'm driven by challenges at the intersection of <strong className="text-pink-600">AI</strong>, 
                    <strong className="text-purple-600"> software engineering</strong>, and 
                    <strong className="text-pink-600"> security</strong>, and I aim to contribute to research and 
                    solutions that make technology smarter, safer, and more accessible.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">What Drives Me</h4>
                  <div className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        <span className="text-gray-700">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  Education Journey
                </h3>

                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-3 top-6 w-6 h-6 bg-white rounded-full border-4 border-purple-400 shadow-md" />
                      
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                          {edu.icon}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h4 className="text-lg font-bold text-gray-800">{edu.degree}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              edu.status === 'Current' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {edu.status}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Award size={14} />
                              <span className="font-semibold text-purple-600">{edu.score}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Timeline Line */}
                <div className="absolute left-0 top-20 bottom-20 w-px bg-gradient-to-b from-purple-300 to-pink-300 ml-3" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

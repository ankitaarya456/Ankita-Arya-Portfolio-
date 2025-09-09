"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Database, Brain, BarChart3, Play, Star } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Tweet Emotion Classification Using Logistic Regression",
      description: "A comprehensive machine learning pipeline for classifying emotions from tweets including joy, anger, sadness, and other emotional states.",
      image: "/api/placeholder/400/250",
      category: "Machine Learning",
      technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "Matplotlib", "TF-IDF"],
      features: [
        "Built ML pipeline for emotion classification from tweets",
        "Extensive text preprocessing: tokenization, stopword removal, lowercasing",
        "Implemented TF-IDF vectorization with 1000+ features",
        "Trained and tuned Logistic Regression model for optimal performance",
        "Generated classification reports and confusion matrices",
        "Modular workflow ensuring reproducibility"
      ],
      highlights: {
        accuracy: "85%",
        dataset: "10K+ tweets",
        features: "1000+"
      },
      github: "https://github.com/ankitaarya456/tweet-emotion-classification",
      demo: "https://tweet-emotion-demo.herokuapp.com",
      status: "Completed",
      icon: <Brain size={24} />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Google Play Store Data Analysis",
      description: "Comprehensive exploratory data analysis on Google Play Store apps dataset to identify key trends and provide actionable insights for app developers.",
      image: "/api/placeholder/400/250",
      category: "Data Science",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      features: [
        "Conducted EDA on 10,000+ Google Play Store apps dataset",
        "Cleaned and preprocessed data handling missing values",
        "Applied feature engineering and data type conversions",
        "Used Pandas, Matplotlib, and Seaborn for visualization",
        "Performed univariate, bivariate, and correlation analysis",
        "Extracted insights into user behavior and app success patterns"
      ],
      highlights: {
        apps: "10K+",
        insights: "25+",
        categories: "33"
      },
      github: "https://github.com/ankitaarya456/google-playstore-analysis",
      demo: "https://playstore-analysis-dashboard.herokuapp.com",
      status: "Completed",
      icon: <BarChart3 size={24} />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Face Recognition Security Research",
      description: "Advanced research project evaluating the robustness of face recognition models against various adversarial attacks for enhanced security.",
      image: "/api/placeholder/400/250",
      category: "AI Research",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NumPy", "Computer Vision"],
      features: [
        "Evaluated robustness of FaceNet, ArcFace, VGG-Face models",
        "Implemented PGD, NES, SimBA, and Boundary Attack algorithms",
        "Analyzed white-box vs. black-box attack settings",
        "Used cosine similarity and threshold-based evaluation metrics",
        "Explored preprocessing and defense strategies",
        "Enhanced model reliability against adversarial threats"
      ],
      highlights: {
        models: "3",
        attacks: "4",
        accuracy: "92%"
      },
      github: "https://github.com/ankitaarya456/face-recognition-security",
      demo: "https://face-security-demo.herokuapp.com",
      status: "Research Phase",
      icon: <Star size={24} />,
      color: "from-red-500 to-pink-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Research Phase":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section id="projects" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
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
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my technical projects spanning machine learning, data science, and AI research, 
              demonstrating practical applications and innovative solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="card h-full overflow-hidden relative">
                  {/* Project Image/Icon */}
                  <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden rounded-lg mb-6`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="grid grid-cols-3 gap-2 my-4">
                      {Object.entries(project.highlights).map(([key, value], idx) => (
                        <div key={idx} className="text-center bg-gray-50 rounded-lg p-2">
                          <div className="font-bold text-purple-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {project.features.length > 3 && (
                        <button className="text-purple-600 text-sm mt-2 hover:underline">
                          +{project.features.length - 3} more features
                        </button>
                      )}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md hover:bg-purple-100 hover:text-purple-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                      >
                        <Play size={16} />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interested in More Projects?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I have worked on several other projects including web applications, data analysis tools, 
                and research implementations. Visit my GitHub to explore the complete portfolio.
              </p>
              <motion.a
                href="https://github.com/ankitaarya456"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Github size={20} />
                View All Projects on GitHub
                <ExternalLink size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, MessageCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 8210024102",
      href: "tel:+918210024102",
      description: "Available Mon-Fri, 9AM-6PM IST",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ankitaarya9135@gmail.com",
      href: "mailto:ankitaarya9135@gmail.com",
      description: "I'll respond within 24 hours",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "New Delhi, India",
      href: "#",
      description: "Open to remote opportunities",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/ankita-arya",
      color: "from-blue-600 to-indigo-600",
      username: "@ankita-arya"
    },
    {
      icon: <Github size={20} />,
      name: "GitHub",
      href: "https://github.com/ankitaarya456",
      color: "from-slate-700 to-slate-800",
      username: "@ankitaarya456"
    },
    {
      icon: <MessageCircle size={20} />,
      name: "WhatsApp",
      href: "https://wa.me/918210024102",
      color: "from-cyan-500 to-cyan-600",
      username: "+91 8210024102"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow tech enthusiasts. Let's start a conversation!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're looking for a passionate developer, a research collaborator, 
                  or someone to discuss the latest in AI and technology, I'd love to hear from you.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="block p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {info.title}
                          </h4>
                          <p className="font-medium text-gray-700">{info.value}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect on Social</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center gap-3 p-3 bg-gradient-to-r ${social.color} text-white rounded-lg shadow-md hover:shadow-lg transition-all group`}
                    >
                      <div className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm opacity-90">{social.username}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
                >
                  <Download size={20} className="group-hover:animate-bounce" />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                        placeholder="Enter your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                        placeholder="Enter your email address"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
                    >
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Whether it's a project collaboration, job opportunity, or just a friendly chat about technology, 
                I'm always open to new connections and exciting possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:ankitaarya9135@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Email Me Directly
                </motion.a>
                <motion.a
                  href="https://calendly.com/ankitaarya"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Schedule a Call
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => (
  <motion.section
    className="card"
    initial="hidden"
    animate="visible"
    variants={heroVariants}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ textAlign: "center", marginTop: "2rem" }}
  >
    <h2 style={{ fontSize: "2rem", color: "var(--color-accent)", fontWeight: 700 }}>
      Hi, I'm Ankita Arya
    </h2>
    <p style={{ fontSize: "1.2rem", color: "var(--color-text)", margin: "1rem 0" }}>
      M.Tech student, Software Developer, and Educator passionate about AI, fintech, and teaching.
    </p>
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ display: "inline-block", marginTop: "1.5rem" }}
    >
      <a href="#projects" style={{
        background: "var(--color-primary)",
        color: "#fff",
        padding: "0.8rem 2rem",
        borderRadius: "2rem",
        fontWeight: 600,
        fontSize: "1.1rem",
        boxShadow: "0 2px 8px rgba(180, 138, 252, 0.12)",
        transition: "background 0.2s"
      }}>View My Work</a>
    </motion.div>
  </motion.section>
);

export default Hero;

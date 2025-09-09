"use client";

import { motion } from "framer-motion";

export const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    style={{
      background: "var(--color-bg)",
      borderBottom: "2px solid var(--color-primary)",
      padding: "1.5rem 0",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(180, 138, 252, 0.05)",
    }}
  >
    <h1 style={{
      fontSize: "2.5rem",
      fontWeight: 800,
      color: "var(--color-accent)",
      letterSpacing: "1px",
      marginBottom: "0.5rem"
    }}>
      ANKITA ARYA
    </h1>
    <div style={{ fontSize: "1.1rem", color: "var(--color-text)" }}>
      <span>📞 +91 8210024102</span> &nbsp;|&nbsp;
      <span>✉️ ankitaarya9135@gmail.com</span> &nbsp;|&nbsp;
      <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a> &nbsp;|&nbsp;
      <a href="https://github.com" target="_blank" rel="noopener">Github</a>
    </div>
  </motion.header>
);

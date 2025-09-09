import React from "react";
import { motion } from "framer-motion";

export const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    style={{
      background: "var(--color-bg)",
      borderTop: "2px solid var(--color-secondary)",
      padding: "1rem 0",
      textAlign: "center",
      fontSize: "1rem",
      color: "var(--color-text)",
      marginTop: "2rem"
    }}
  >
    © {new Date().getFullYear()} Ankita Arya. All rights reserved.
  </motion.footer>
);

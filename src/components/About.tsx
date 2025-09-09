"use client";

import { motion } from "framer-motion";

const About = () => (
  <motion.section
    className="card"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ marginTop: "2rem" }}
  >
    <h3 style={{ fontSize: "1.7rem", color: "var(--color-accent)", fontWeight: 700, marginBottom: "1rem" }}>
      Education & Achievements
    </h3>
    <ul style={{ fontSize: "1.1rem", color: "var(--color-text)", lineHeight: 1.7 }}>
      <li><strong>Indira Gandhi Delhi Technical University For Women</strong> (2024 - present)<br />M.Tech (87.8%)</li>
      <li><strong>Jagan Institute of Management Studies, New Delhi (GGSIPU)</strong> (2021 - 2023)<br />MCA (89.9%)</li>
      <li><strong>Mewar Institute of Management, Ghaziabad</strong> (2017 - 2020)<br />BCA (68.5%)</li>
    </ul>
    <h4 style={{ marginTop: "1.5rem", color: "var(--color-accent)", fontWeight: 600 }}>Achievements/Certifications</h4>
    <ul style={{ fontSize: "1.05rem", color: "var(--color-text)", marginTop: "0.5rem" }}>
      <li>Completed NPTEL Course: Digital Logic and Circuit Simulations</li>
      <li>Python course from DUCAT</li>
      <li>AIR 1500 in NIMCET Exam (2021)</li>
    </ul>
  </motion.section>
);

export default About;

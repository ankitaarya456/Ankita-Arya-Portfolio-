"use client";

import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ minHeight: "80vh", padding: "2rem 0" }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}

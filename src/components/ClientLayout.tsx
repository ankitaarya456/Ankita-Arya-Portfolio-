"use client";

import { motion } from "framer-motion";
import Navigation from "./Navigation";
import { Footer } from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}

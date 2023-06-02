"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center mt-10 h-screen animate-fade-in">
      <div className="absolute top-0 right-0 m-4">
        <Navbar />
      </div>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 m-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Back
      </motion.button>
      {children}
    </div>
  );
}

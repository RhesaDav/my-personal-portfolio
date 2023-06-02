"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="my-16"
        >
          <Navbar />
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-8xl font-bold mb-8"
        >
          RhesaDav
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
        />

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="my-16 text-center animate-fade-in w-1/2"
        >
          <h2 className="text-sm md:text-base text-zinc-500">
            Hi, Im Rhesa Davinanto, an experienced Fullstack Developer. 
            Im passionate about crafting exceptional digital experiences and
            pushing boundaries in web development. Currently, Im working at{" "}
            <Link
              target="_blank"
              href="https://ids.id/"
              className="underline duration-500 hover:text-zinc-300"
            >
              ids.id
            </Link>, where I contribute to exciting projects and collaborate with
            a talented team. Lets connect and bring your ideas to life!
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

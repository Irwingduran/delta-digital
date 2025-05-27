"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { useEffect, useState } from "react";

const Hero = () => {
  const [bubbles, setBubbles] = useState<Array<{
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
    duration: number;
  }> | null>(null);

  useEffect(() => {
    // Only runs on client
    setBubbles(
      [...Array(5)].map((_, i) => ({
        width: Math.random() * 300 + 100,
        height: Math.random() * 300 + 100,
        top: Math.random() * 100,
        left: Math.random() * 100,
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25,
        duration: 10 + i * 2,
      }))
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles &&
          bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-100/40"
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                top: `${bubble.top}%`,
                left: `${bubble.left}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                x: [0, bubble.x, 0],
                y: [0, bubble.y, 0],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image src="/portada_Delta.png" alt="Delta Logo" width={240} height={240} className="object-contain" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Delta Consultora
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">Digital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-600 mt-6 text-xl font-medium py-4 italic"
          >
            &quot;LA DIFERENCIA DIGITAL QUE SE NOTA&quot;
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 py-3 text-white shadow-lg transition-all duration-300 hover:shadow-blue-300/50 hover:shadow-xl">
              <span className="relative z-10 text-lg font-medium tracking-wider">CONTÁCTANOS</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", size: 120, x: "10%", y: "20%", delay: 0 },
  { name: "TypeScript", size: 100, x: "80%", y: "15%", delay: 1 },
  { name: "Node.js", size: 90, x: "50%", y: "50%", delay: 2 },
  { name: "Framer", size: 110, x: "20%", y: "70%", delay: 0.5 },
  { name: "Tailwind", size: 95, x: "75%", y: "75%", delay: 1.5 },
  { name: "Figma", size: 85, x: "35%", y: "30%", delay: 2.5 },
  { name: "Next.js", size: 105, x: "65%", y: "40%", delay: 3 },
  { name: "Three.js", size: 90, x: "45%", y: "85%", delay: 1.2 },
];

const bubbleVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export default function TechStack() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden py-32 px-4 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Technologies
        </h2>
        <p className="text-gray-600">
          The tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute flex items-center justify-center rounded-full
              bg-white/10 backdrop-blur-md border border-white/20
              shadow-lg text-gray-800 font-medium cursor-default"
            style={{
              width: tech.size,
              height: tech.size,
              left: tech.x,
              top: tech.y,
            }}
            variants={bubbleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderColor: "rgba(255,255,255,0.5)",
              zIndex: 20,
            }}
          >
            <motion.span
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: tech.delay,
              }}
            >
              {tech.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

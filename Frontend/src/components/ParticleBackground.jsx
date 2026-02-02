import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    // Generate random particles
    const particleCount = 30;
    const newParticles = Array.from({
      length: particleCount
    }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10 // 10-30s
    }));
    setParticles(newParticles);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) =>
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear'
          }} />

      )}
    </div>);

}
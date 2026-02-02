import React from 'react';
import { motion } from 'framer-motion';
export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      {/* Large Lavender Blob */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30 bg-purple-200"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />


      {/* Mint Blob */}
      <motion.div
        className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30 bg-mint-200"
        style={{
          backgroundColor: '#A7F3D0'
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />


      {/* Pink Blob */}
      <motion.div
        className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] rounded-full mix-blend-multiply filter blur-3xl opacity-30 bg-pink-200"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5
        }} />

    </div>);

}
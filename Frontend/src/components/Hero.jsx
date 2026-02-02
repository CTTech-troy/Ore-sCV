import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        style={{
          y,
          opacity
        }}>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>

          <span className="inline-block py-1 px-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-sm font-medium text-purple-800 mb-6">
            Available for freelance
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 tracking-tight mb-6 leading-tight">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{
                y: 100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9]
              }}>

              Crafting Digital
            </motion.span>
          </span>
          <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            <motion.span
              className="block"
              initial={{
                y: 100
              }}
              animate={{
                y: 0
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.2, 0.65, 0.3, 0.9]
              }}>

              Experiences
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}>

          I'm ANIMASHAUN AL-FAWAZ. O, a creative developer building ethereal interfaces with
          code and motion.
        </motion.p>
      </motion.div>

      {/* 3D-like Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-purple-300 to-purple-100 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),10px_10px_20px_rgba(0,0,0,0.1)] z-0"
        animate={{
          y: [-20, 20],
          rotate: [0, 10]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }} />


      <motion.div
        className="absolute bottom-1/4 left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-mint-300 to-white shadow-[inset_-5px_-5px_15px_rgba(0,0,0,0.05),10px_10px_20px_rgba(0,0,0,0.05)] z-0"
        style={{
          backgroundColor: '#D1FAE5'
        }}
        animate={{
          y: [20, -20],
          x: [0, 10]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 1
        }} />


      {/* Glass Torus-like shape (ring) */}
      <motion.div
        className="absolute top-1/3 left-[15%] w-40 h-40 rounded-full border-[16px] border-white/20 backdrop-blur-sm shadow-xl z-0"
        style={{
          rotateX: 45,
          rotateY: 25
        }}
        animate={{
          rotateX: [45, 60],
          rotateY: [25, 15],
          y: [0, 30]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }} />

    </section>);

}
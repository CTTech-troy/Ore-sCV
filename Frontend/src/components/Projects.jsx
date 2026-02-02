import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, FileUser } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Ethereal Finance',
    category: 'Fintech Dashboard',
    description:
      'A reimagined banking interface with fluid data visualization and soft gradients.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 2,
    title: 'Lumina',
    category: 'Smart Home App',
    description:
      'Control your environment with light-inspired interactions and glassmorphism.',
    color: 'from-blue-400 to-cyan-300'
  },
  {
    id: 3,
    title: 'Botanica',
    category: 'E-commerce',
    description:
      'An immersive plant shopping experience focusing on organic shapes and textures.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    id: 4,
    title: 'Nebula OS',
    category: 'Design System',
    description:
      'A comprehensive design language built for spatial computing interfaces.',
    color: 'from-pink-400 to-rose-400'
  }];

function ProjectCard({ project }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, {
    stiffness: 150,
    damping: 15
  });
  const mouseY = useSpring(y, {
    stiffness: 150,
    damping: 15
  });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ['-7deg', '7deg']);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={ref}
      className="relative h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer perspective-1000"
      style={{
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6
      }}>

      <motion.div
        className="w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 flex flex-col justify-between shadow-xl"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}>

        {/* Abstract Background Art */}
        <div
          className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.color} z-0`} />

        <div className="absolute inset-0 bg-white/5 z-0" />

        <div className="relative z-10 transform translate-z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-gray-800 mb-4 border border-white/10">
            {project.category}
          </span>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </div>

        <div className="relative z-10 flex justify-end transform translate-z-20">
          <div className="p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/30 text-gray-800 hover:bg-white/50 transition-colors">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </motion.div>
    </motion.div>);

}
export default function Projects() {
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-16 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selected Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of digital experiences crafted with precision and
            passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) =>
            <ProjectCard key={project.id} project={project} />
          )}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/ANIMASHAUN AL-FAWAZ CV (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-full text-gray-900 font-semibold hover:bg-purple-500/10 hover:border-purple-500 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View CV</span>
            <FileUser className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>);

}
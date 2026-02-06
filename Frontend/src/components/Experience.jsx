import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Inc.',
    period: '2023 - Present',
    description:
      'Leading the frontend architecture for a next-gen SaaS platform using React and WebGL.'
  },
  {
    role: 'Creative Developer',
    company: 'Studio M',
    period: '2021 - 2023',
    description:
      'Crafted award-winning marketing sites with heavy focus on interaction design and motion.'
  },
  {
    role: 'UI Engineer',
    company: 'StartUp X',
    period: '2019 - 2021',
    description:
      'Built the core product interface from scratch, establishing the initial design system.'
  }];

export default function Experience() {
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-16 text-center"
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
          }}>

          Journey
        </motion.h2>

        <div className="relative">
          {/* Central Line (River) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-purple-200 via-mint-300 to-purple-200 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) =>
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
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
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}>

                <div className="w-full md:w-1/2 p-4">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <span className="text-sm font-medium text-purple-600 mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-gray-600 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative hidden md:flex items-center justify-center w-8 h-8">
                  <div className="w-4 h-4 rounded-full bg-purple-400 z-10 ring-4 ring-white/50" />
                  <div className="absolute w-8 h-8 rounded-full bg-purple-400/20 animate-ping" />
                </div>

                <div className="w-full md:w-1/2 p-4" />
              </motion.div>
            )}
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md border border-purple-500/30 rounded-full text-gray-900 font-semibold hover:bg-purple-500/10 hover:border-purple-500 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View More</span>
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>);

}
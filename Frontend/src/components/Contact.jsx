import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-xl mx-auto">
        <motion.div
          className="bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}>

          {/* Decorative background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-mint-300/30 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Let's Connect
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Have a project in mind? I'd love to hear from you.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'name' ? '-top-6 text-sm text-purple-600' : 'top-3 text-gray-500'}`}>

                  Name
                </motion.label>
                <input
                  type="text"
                  className="w-full bg-white/40 border border-white/30 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/60 transition-all"
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)} />

              </div>

              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'email' ? '-top-6 text-sm text-purple-600' : 'top-3 text-gray-500'}`}>

                  Email
                </motion.label>
                <input
                  type="email"
                  className="w-full bg-white/40 border border-white/30 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/60 transition-all"
                  onFocus={() => setFocusedField('email')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)} />

              </div>

              <div className="relative">
                <motion.label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${focusedField === 'message' ? '-top-6 text-sm text-purple-600' : 'top-3 text-gray-500'}`}>

                  Message
                </motion.label>
                <textarea
                  rows={4}
                  className="w-full bg-white/40 border border-white/30 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/60 transition-all resize-none"
                  onFocus={() => setFocusedField('message')}
                  onBlur={(e) => !e.target.value && setFocusedField(null)} />

              </div>

              <motion.button
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="w-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium py-4 rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 hover:shadow-purple-500/40 transition-shadow">

                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>);

}
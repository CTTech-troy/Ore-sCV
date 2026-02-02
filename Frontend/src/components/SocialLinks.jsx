import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Dribbble } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Mashaun18", label: "GitHub" },
  { icon: Linkedin, href: " https://www.linkedin.com/in/al-fawaz-animashaun", label: "LinkedIn" },
  { icon: Twitter, href: " https://x.com/geniidesigns?s=21&t=80_g5dUh87MmCWA7MoOOWw", label: "Twitter" },
  { icon: Mail, href: "animashaunoreoluwa@gmail.com", label: "Email" },
];

function MagneticPill({ children, href, label }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    damping: 15,
    stiffness: 150,
    mass: 0.1,
  };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.a
      ref={ref}
      href={href}
      className="relative flex items-center justify-center p-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full shadow-lg text-gray-700 hover:text-purple-600 transition-colors group"
      style={{
        x: springX,
        y: springY
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={label}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.95
      }}>

      {children}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </motion.a>);

}
export default function SocialLinks() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4">
      {socialLinks.map((link) =>
      <MagneticPill key={link.label} href={link.href} label={link.label}>
          <link.icon size={20} strokeWidth={2} />
        </MagneticPill>
      )}
    </div>);

}
import React from 'react';
import  ParticleBackground  from './components/ParticleBackground';
import  FloatingShapes  from './components/FloatingShapes';
import  Hero  from './components/Hero';
import  Projects  from './components/Projects';
import  TechStack  from './components/TechStack';
import  Experience  from './components/Experience';
import  Contact  from './components/Contact';
import  SocialLinks  from './components/SocialLinks';
export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#F5F3FF] to-[#ECFDF5]">
      {/* Ambient Background Layers */}
      <FloatingShapes />
      <ParticleBackground />

      {/* Main Content */}
      <main className="relative z-10 w-full">
        <Hero />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      {/* Floating UI Elements */}
      <SocialLinks />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Animashaun Al-Fawaz .O. Crafted with React & Framer
          Motion.
        </p>
      </footer>
    </div>);

}
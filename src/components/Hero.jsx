import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Coffee, Zap } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'Python Developer',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950 pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Optimized Floating Elements - Reduced from 4 to 2 */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl will-change-transform"
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl will-change-transform"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Coffee className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="block">Muhammad Hamza</span>
            <span className="gradient-text text-6xl md:text-8xl">Ashfaq</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            variants={itemVariants}
            className="h-16 mb-8 flex items-center justify-center"
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-gray-300 flex items-center gap-3"
            >
              <Zap className="w-6 h-6 text-accent-400" />
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specializing in full-stack development with React, Node.js, Python, and cloud solutions.
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-8 text-gray-500"
          >
            <MapPin className="w-4 h-4 text-primary-400" />
            <span>Pakistan</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4 glow-effect"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-lg px-8 py-4"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/hemmi2020', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/hamza-ashfaq-834127293/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:hamzashahzad020@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-dark-800 border border-dark-700 rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:shadow-xl hover:shadow-primary-500/30 hover:border-primary-500 transition-all duration-300 will-change-transform"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            variants={itemVariants}
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-primary-400 rounded-full"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
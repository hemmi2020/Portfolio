import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Smartphone, Server, Palette, Award, Users, Coffee, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      color: 'bg-blue-500',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vite']
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'bg-green-500',
      technologies: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'JWT', 'RESTful APIs', 'Socket.io']
    },
    {
      category: 'Database',
      icon: Database,
      color: 'bg-purple-500',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Database Design']
    },
    {
      category: 'Mobile & Tools',
      icon: Smartphone,
      color: 'bg-orange-500',
      technologies: ['React Native', 'Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'VS Code']
    },
    {
      category: 'Design & UI',
      icon: Palette,
      color: 'bg-pink-500',
      technologies: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design', 'Prototyping']
    },
    {
      category: 'Other',
      icon: Code2,
      color: 'bg-indigo-500',
      technologies: ['PHP', 'Python CV', 'MediaPipe', 'Payment Integration', 'Email Services']
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Zap },
    { number: '20+', label: 'Technologies', icon: Code2 },
    { number: '100%', label: 'Client Satisfaction', icon: Users }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4"
          >
            <Coffee className="w-4 h-4" />
            About Me
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Crafting Digital Solutions with
            <span className="gradient-text block">Passion & Precision</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love building scalable applications that solve real-world problems and create 
            exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      className="tech-badge"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Beyond Code</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying 
              updated with the latest industry trends.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented', 'Creative Thinker'].map((trait, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-800 transition-colors duration-200"
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
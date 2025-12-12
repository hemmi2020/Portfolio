import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Database, Globe, Smartphone, Filter, Eye, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Muslim Infopreneurs Platform',
      description: 'A comprehensive e-learning platform for Muslim entrepreneurs with course management, payment integration, and interactive features.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['Next.js', 'React', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Framer Motion', 'NextAuth'],
      features: [
        'User authentication and authorization',
        'Course management system',
        'Payment integration with Stripe',
        'Real-time notifications',
        'Responsive design',
        'Admin dashboard'
      ],
      github: 'https://github.com/hemmi2020',
      live: '#',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'TeleTrip - Travel Booking Platform',
      description: 'Full-stack travel booking application with hotel reservations, activity bookings, and comprehensive admin management.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary', 'Redis'],
      features: [
        'Hotel booking system',
        'Activity and transfer bookings',
        'Real-time chat support',
        'Payment processing',
        'Admin dashboard with analytics',
        'Multi-currency support'
      ],
      github: 'https://github.com/hemmi2020',
      live: '#',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Gesture Volume Control',
      description: 'Computer vision application using hand gestures to control system volume with OpenCV and MediaPipe.',
      image: '/api/placeholder/600/400',
      category: 'Python',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyCaw'],
      features: [
        'Real-time hand tracking',
        'Gesture recognition',
        'Volume control integration',
        'Smooth gesture detection',
        'Cross-platform compatibility'
      ],
      github: 'https://github.com/hemmi2020',
      live: '#',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 4,
      title: 'Avaya Call Management App',
      description: 'Full-stack application for call management with FastAPI backend and React frontend.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['FastAPI', 'React', 'Python', 'PostgreSQL', 'Docker'],
      features: [
        'Call logging and management',
        'Real-time call status',
        'User authentication',
        'Analytics dashboard',
        'API documentation'
      ],
      github: 'https://github.com/hemmi2020',
      live: '#',
      status: 'Completed',
      year: '2023'
    },
    {
      id: 5,
      title: 'Korson Furniture Website',
      description: 'E-commerce website for furniture company with Django backend and modern frontend.',
      image: '/api/placeholder/600/400',
      category: 'Full Stack',
      technologies: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Product catalog',
        'Shopping cart functionality',
        'User accounts',
        'Order management',
        'Admin panel',
        'SEO optimization'
      ],
      github: 'https://github.com/hemmi2020',
      live: '#',
      status: 'Completed',
      year: '2022'
    },
    {
      id: 6,
      title: 'Transport Booking System',
      description: 'Multi-step form application for transport bookings with PHP backend and modern JavaScript frontend.',
      image: '/api/placeholder/600/400',
      category: 'Frontend',
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'PHPMailer'],
      features: [
        'Multi-step booking form',
        'Email notifications',
        'Form validation',
        'Responsive design',
        'Payment integration ready'
      ],
      github: 'https://github.com/hemmi2020',
      live: '#',
      status: 'Completed',
      year: '2022'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Python', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-white">
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
            <Code className="w-4 h-4" />
            Projects
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Work &
            <span className="gradient-text block">Creative Solutions</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A showcase of my recent projects demonstrating expertise in full-stack development, 
            modern frameworks, and innovative problem-solving.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-400/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-600/30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  


                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Key Features
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>


                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in My Work?</h3>
            <p className="text-gray-600 mb-8">
              These are just a few examples of my projects. I'm always working on something new 
              and exciting. Let's discuss how I can help with your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Start a Project
              </motion.button>
              <motion.a
                href="https://github.com/hemmi2020"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                View All Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
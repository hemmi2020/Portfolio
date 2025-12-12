import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Users, Zap, Award } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Freelance',
      description: 'Developing end-to-end web applications for various clients using modern technologies.',
      achievements: [
        'Built 20+ responsive web applications using React, Node.js, and MongoDB',
        'Implemented secure authentication systems with JWT and OAuth',
        'Integrated payment gateways (Stripe, PayPal) for e-commerce solutions',
        'Optimized application performance resulting in 40% faster load times',
        'Collaborated with international clients across different time zones'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript', 'Tailwind CSS', 'AWS'],
      color: 'bg-blue-500'
    },
    {
      title: 'Python Developer',
      company: 'Various Projects',
      location: 'Remote',
      period: '2021 - Present',
      type: 'Project-based',
      description: 'Specialized in Python development for web applications, automation, and computer vision projects.',
      achievements: [
        'Developed gesture-controlled volume system using OpenCV and MediaPipe',
        'Built FastAPI applications with real-time features using WebSockets',
        'Created automated data scraping solutions for business intelligence',
        'Implemented machine learning models for image processing tasks',
        'Developed RESTful APIs serving 1000+ daily requests'
      ],
      technologies: ['Python', 'FastAPI', 'OpenCV', 'MediaPipe', 'PostgreSQL', 'Docker', 'Redis'],
      color: 'bg-green-500'
    },
    {
      title: 'Frontend Developer',
      company: 'Multiple Clients',
      location: 'Remote',
      period: '2021 - 2023',
      type: 'Contract',
      description: 'Focused on creating exceptional user interfaces and experiences for web applications.',
      achievements: [
        'Converted 15+ Figma designs to pixel-perfect React components',
        'Implemented responsive designs supporting all device sizes',
        'Built interactive dashboards with real-time data visualization',
        'Optimized bundle sizes reducing initial load time by 50%',
        'Mentored junior developers on React best practices'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Vite'],
      color: 'bg-purple-500'
    },
    {
      title: 'Web Developer',
      company: 'Local Businesses',
      location: 'Pakistan',
      period: '2020 - 2022',
      type: 'Part-time',
      description: 'Provided web development services to local businesses and startups.',
      achievements: [
        'Developed business websites increasing online presence by 200%',
        'Implemented SEO best practices improving search rankings',
        'Created content management systems for easy content updates',
        'Integrated social media APIs for enhanced user engagement',
        'Provided ongoing maintenance and technical support'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap'],
      color: 'bg-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
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
            <Briefcase className="w-4 h-4" />
            Experience
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Professional Journey &
            <span className="gradient-text block">Key Achievements</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A timeline of my professional growth, key projects, and the impact I've made 
            in the world of web development.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="card p-6 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-3 h-3 ${exp.color} rounded-full`} />
                          <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 text-sm">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <Zap className="w-3 h-3 text-primary-600 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4 text-primary-600" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="tech-badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card p-8 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Star } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'University of Engineering & Technology',
      location: 'Pakistan',
      period: '2023 - 2026',
      status: 'In Progress',
      gpa: '3.0/4.0',
      description: 'Comprehensive program covering software development, algorithms, database systems, and project management.',
      highlights: [
        'Software Development Life Cycle',
        'Object-Oriented Programming',
        'Database Design & Management',
        'Web Technologies',
        'Software Testing & Quality Assurance',
        'Project Management'
      ],
      projects: [
        'Database Management System for Library',
        'Mobile App Development Project'
      ],
      color: 'bg-blue-500'
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Self-Taught & Online Courses',
      date: '2021',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      icon: '🌐'
    },
    {
      title: 'Python Programming',
      issuer: 'Various Online Platforms',
      date: '2021',
      skills: ['Python', 'Django', 'FastAPI', 'Data Structures'],
      icon: '🐍'
    },
    {
      title: 'Modern JavaScript',
      issuer: 'Self-Learning',
      date: '2020',
      skills: ['ES6+', 'Async/Await', 'DOM Manipulation', 'APIs'],
      icon: '⚡'
    },
    {
      title: 'Database Management',
      issuer: 'University & Practice',
      date: '2022',
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Database Design'],
      icon: '🗄️'
    }
  ];

  const skills = [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'TypeScript', 'PHP', 'C++', 'Java'],
      level: 90
    },
    {
      category: 'Frontend Technologies',
      items: ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
      level: 95
    },
    {
      category: 'Backend Technologies',
      items: ['Node.js', 'Express.js', 'Django', 'FastAPI', 'REST APIs'],
      level: 88
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      level: 85
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'VS Code'],
      level: 82
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="section-padding bg-gray-50">
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
            <GraduationCap className="w-4 h-4" />
            Education & Skills
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Academic Background &
            <span className="gradient-text block">Continuous Learning</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            My educational journey and commitment to staying current with the latest 
            technologies and industry best practices.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              Formal Education
            </motion.h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6 mb-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 ${edu.color} rounded-full`} />
                      <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <div className="space-y-1 text-gray-600 text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{edu.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary-600" />
                    Key Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary-600" />
                    Notable Projects
                  </h5>
                  <ul className="space-y-1">
                    {edu.projects.map((project, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1 h-1 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              Certifications & Learning
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="card p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{cert.issuer} • {cert.date}</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, sIndex) => (
                          <span
                            key={sIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3"
          >
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            Technical Proficiency
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6"
              >
                <h4 className="font-semibold text-gray-900 mb-4">{skillGroup.category}</h4>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Proficiency</span>
                    <span>{skillGroup.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skillGroup.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-primary-600 h-2 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-md font-medium"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <div className="card p-8 max-w-3xl mx-auto">
            <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning Philosophy</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Technology evolves rapidly, and I believe in staying ahead of the curve through continuous learning. 
              I regularly explore new frameworks, attend webinars, contribute to open-source projects, and 
              engage with the developer community to enhance my skills and knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Self-Motivated', 'Problem Solver', 'Team Collaborator', 'Innovation Focused'].map((trait, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
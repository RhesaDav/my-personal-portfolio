'use client'
import { experience } from '@/data/experienceData'
import React, { Fragment } from 'react'
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { DiReact, DiNodejsSmall } from 'react-icons/di';
import { motion } from 'framer-motion';

const skills = [
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'TypeScript', icon: <FaCode /> },
    { name: 'React.js', icon: <DiReact /> },
    { name: 'Node.js', icon: <DiNodejsSmall /> },
    { name: 'HTML', icon: <FaCode /> },
    { name: 'CSS', icon: <FaCode /> },
    { name: 'Tailwind CSS', icon: <FaTools /> },
    { name: 'Database', icon: <FaDatabase /> },
  ];

const ExperiencePage = () => {
  return (
    <Fragment>

    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="mr-2">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    <motion.a
        href="/path/to/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 text-white rounded-md px-4 py-2 mt-8 hover:bg-blue-600"
      >
        Download Resume
      </motion.a>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      {experience.map((exp, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold">{exp.company}</h2>
          <p className="text-gray-500">{exp.position}</p>
          <p className="text-gray-500">{exp.period}</p>
          <ul className="list-disc list-inside mt-2">
            {exp.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </Fragment>
  )
}

export default ExperiencePage
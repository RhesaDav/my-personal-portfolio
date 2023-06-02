'use client'
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import React, { Fragment, useEffect, useState } from 'react';
import { SiReact, SiTailwindcss, SiRedux, SiPython, SiDjango, SiNextdotjs } from 'react-icons/si';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'Project 1',
      category: 'Project',
      techStack: [<SiReact key="react" />, <SiTailwindcss key="tailwind" />],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Project 2',
      category: 'Library',
      techStack: [<SiReact key="react" />, <SiRedux key="redux" />],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Project 3',
      category: 'Python',
      techStack: [<SiPython key="python" />, <SiDjango key="django" />],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Project 4',
      category: 'Project',
      techStack: [<SiReact key="react" />, <SiNextdotjs key="next" />],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory);

  return (
    <Fragment>

    {/* <div className="flex flex-col items-center mt-10 h-screen animate-fade-in">
      <div className="absolute top-0 right-0 m-4">
        <Navbar />
      </div>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-0 m-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Back
      </motion.button> */}

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-5"
      >
        Projects Page
      </motion.h1>

      <div className="flex justify-center mb-4">
        <button
          className={`mr-4 focus:outline-none ${
            activeCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        <button
          className={`mr-4 focus:outline-none ${
            activeCategory === 'Project' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white`}
          onClick={() => setActiveCategory('Project')}
        >
          Project
        </button>
        <button
          className={`mr-4 focus:outline-none ${
            activeCategory === 'Library' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white`}
          onClick={() => setActiveCategory('Library')}
        >
          Library
        </button>
        <button
          className={`focus:outline-none ${
            activeCategory === 'Python' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white`}
          onClick={() => setActiveCategory('Python')}
        >
          Python
        </button>
      </div>

      <motion.div
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: index*0.25 }}
            className="bg-gray-500 cursor-pointer rounded-lg p-4 m-4 shadow-md hover:bg-gray-300"
          >
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
            <div className="mt-2">
              <div className="flex">
                {project.techStack.map((Icon, techIndex) => (
                  <span key={techIndex} className="mr-2">
                    {Icon}
                  </span>
                ))}
              </div>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              variants={{
                hover: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              whileHover="hover"
              className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
            >
              Detail
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    {/* </div> */}
    </Fragment>
  );
};

export default ProjectsPage;

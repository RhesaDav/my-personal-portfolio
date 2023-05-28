'use client'
import Navbar from '@/component/Navbar';
import React, { useEffect, useState } from 'react';
import { SiReact, SiTailwindcss, SiRedux, SiPython, SiDjango, SiNextdotjs } from 'react-icons/si';

const ProjectsPage: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setAnimate(true);
  }, []);

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
    <div className={`flex flex-col items-center justify-center h-screen ${animate ? 'animate-fade-in' : ''}`}>
      <h1 className="text-4xl font-bold mb-5">Projects Page</h1>
      <Navbar className='mb-8'/>

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

      <div className="flex flex-wrap justify-center">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="bg-gray-500 cursor-pointer rounded-lg p-4 m-4 shadow-md transform transition-transform duration-500 hover:scale-110 hover:bg-gray-300"
          >
            <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
            <div className="mt-2">
              <div className='flex'>
              {project.techStack.map((Icon, techIndex) => (
                <span key={techIndex} className="mr-2">
                  {Icon}
                </span>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
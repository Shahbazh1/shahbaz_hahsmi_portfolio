import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

function Projects() {
  const [demoVideo, setDemoVideo] = useState(null);

  const handleDemoClick = (videoPath) => {
    setDemoVideo(videoPath);
  };

  const closeModal = () => {
    setDemoVideo(null);
  };

  return (
    <div className="pb-4 relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/3 mt-10"
            >
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3"
            >
              <h3 className="mb-2 text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>

              <div className="mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 transition"
                >
                  View Code
                </a>
                <button
                  onClick={() => handleDemoClick(project.demoVideo)}
                  className="bg-white rounded-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 transition"
                >
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {demoVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-xl"
            >
              &times;
            </button>
            <video
              src={demoVideo}
              controls
              autoPlay
              className="w-[600px] max-w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;

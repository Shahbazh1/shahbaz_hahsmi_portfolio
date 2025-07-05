import { FINAL_YEAR_PROJECT } from "../constants";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Final Year Project
      </motion.h2>

      <div>
        {FINAL_YEAR_PROJECT.map((experience, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">
                {experience.year}
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.title} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>

              <p className="mb-4 text-stone-400">
                {experience.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-2 inline-block rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={experience.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 transition"
                >
                  View Code
                </a>
                <a
                  href={experience.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full px-4 py-2 text-sm text-stone-800 hover:bg-stone-100 transition"
                >
                  View Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

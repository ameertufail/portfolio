import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <span className="text-white text-xs font-bold">LIVE</span>
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  // Calculate number of projects to display in each row
  const projectsPerRow = 3;
  const rowCount = Math.ceil(projects.length / projectsPerRow);
  
  // Create arrays for each row of projects
  const projectRows = [];
  for (let i = 0; i < rowCount; i++) {
    projectRows.push(
      projects.slice(i * projectsPerRow, (i + 1) * projectsPerRow)
    );
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Render each row of projects */}
      {projectRows.map((rowProjects, rowIndex) => (
        <div 
          key={`project-row-${rowIndex}`}
          className={`${rowIndex === 0 ? 'mt-20' : 'mt-7'} grid grid-cols-1 md:grid-cols-3 gap-7`}
        >
          {rowProjects.map((project, projectIndex) => (
            <ProjectCard 
              key={`project-${rowIndex * projectsPerRow + projectIndex}`} 
              index={rowIndex * projectsPerRow + projectIndex} 
              {...project} 
            />
          ))}
        </div>
      ))}

      {/* GitHub profile link */}
      <motion.div
        variants={fadeIn("up", "spring", projects.length * 0.05, 0.75)}
        className="w-full flex justify-center mt-10"
      >
        <a 
          href="https://github.com/ameertufail"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary text-[18px] hover:text-white transition-colors duration-300 flex items-center"
        >
          <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
          Visit my GitHub profile for more projects and source code
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");

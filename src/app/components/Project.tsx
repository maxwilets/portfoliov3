/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { styles } from '../style';

import { github } from '../assets';
// import { SectionWrapper } from '../hoc';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { fadeIn, textVariant } from '../utils/motion';
import Image from 'next/image';

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: any,
  name: any,
  description: any,
  tags: any,
  image: any,
  source_code_link: any,
}) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
    <div
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <Image
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

// const Projects = () => (
//   <>
//     <motion.div variants={textVariant()}>
//       <p className={styles.sectionSubText}>My Projects</p>
//       <h2 className={styles.sectionHeadText}>Projects.</h2>
//     </motion.div>
//     <div className="w-full flex">
//       <motion.p
//         variants={fadeIn('', '', 0.1, 1)}
//         className="mt-3 text-secondary text-[17px] max-w-3xl leading[30px]"
//       >
//         These arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj pw
//         These arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj
//         pwThese arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj
//         pwThese arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj
//         pwThese arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj
//         pwThese arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj pw
//         These arewef weoifja oawf oawfj ojfoawp efji awopefj opawejoapefj pw
//       </motion.p>
//     </div>
//     <div className="mt-20 flex flex-wrap gap-7">
//       {projects.map((project, index) => (
//         <ProjectCard key={`project-${index}`} index={index} {...project} />
//       ))}
//     </div>
//   </>
// );
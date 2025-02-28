/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion';
import { github } from "../assets";

import Image from 'next/image';
export const ProjectCard = ({
  index,
  project
}: {
  index: any,
  project: any,

}) => {
  const image = project.image.url;
  const {description, title, githubLink, tagsCollection} = project;

  return (
    <motion.div className="height-full" variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            width="300"
            height="350"
            lazyBoundary=""
            className="w-full h-full object-cover rounded-2xl"
          />

          {
           githubLink && (
             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(githubLink, '_blank')}
              className="black-gradient bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github}
                alt="source code"
                width="50"
                height="50"
                className="object-contain"
              />
            </div>
          </div>
           
           )          
          }
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tagsCollection.items.map((item:any) => (
            <p key={`project-${item.tag}`} className={`text-[14px] `}>
              #{item.tag}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
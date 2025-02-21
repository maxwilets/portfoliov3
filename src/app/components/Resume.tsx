"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { textVariant } from "../utils/motion";
import { ExperienceCard } from "./ResumeCard";


interface ResumeProps {
  items: Experience[];
}

type Experience = {
  date: string;
  company: string;
  position: string;
  pointContainerCollection: object;
}

export const Resume: React.FC<ResumeProps> = ({ items }) => {

  return (
    <>
      <motion.div variants={textVariant('.2')}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {items.map((experience: Experience, index: number) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

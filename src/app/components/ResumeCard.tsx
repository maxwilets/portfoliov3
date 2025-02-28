/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './timelineStyle.css';
// import { experiences } from '../constants';
// import { SectionWrapper } from '../hoc';
interface Experience {
  date: string;
  company: string;
  position: string;
  pointContainerCollection: any;
}

interface ExperienceCardProps {
  experience: Experience;
}

interface Point {
  point: string;
}


export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  console.log(experience);
  const points = experience.pointContainerCollection.items;
  return (
    <VerticalTimelineElement
    style={{
      
    }}
    contentStyle={{
      background: '#1d1836',
      color: '#f3f3f3',
    }}
    contentArrowStyle={{ borderRight: '7px solid  #232631' }}
    date={experience.date}
    iconStyle={{ background: '#232631' }}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.position}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((item: Point, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {item.point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
  )
};


// export default SectionWrapper(Experience, 'work');

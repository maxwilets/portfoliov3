"use client";
import Tilt from 'react-parallax-tilt';

export const SkillBadge = ({index, skill}: {index:number, skill: string}) => (
  <Tilt key={index}
    glareEnable
    tiltReverse
  >
    <li style={{cursor: 'pointer'}}  className="bg-gray-800 px-3 py-1 rounded-md text-sm text-white">
      {skill}
    </li>
  </Tilt>
)
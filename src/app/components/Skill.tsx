import { SkillProp } from '../Types';

export const Skill = ({ skill }: { skill: SkillProp }) => (
  <div>
    <p className='text-white bold'>
      <b>{skill.skillName}</b>
    </p>
    <span className="colorDial">
      <span>{skill.level}</span>
    </span>
  </div>
);
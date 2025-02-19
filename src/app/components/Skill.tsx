import { SkillProp } from '../Types';

export const Skill = ({ skill }: { skill: SkillProp }) => (
  <div>
    <p>
      <b>{skill.skillName}</b>
    </p>
    <span className="colorDial">
      <span>{skill.level}</span>
    </span>
  </div>
);
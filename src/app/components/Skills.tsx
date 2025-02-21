
// import H3Style from '../styles/Typography';
// import DisplayError from '../ErrorMessage';
// import { Skill } from './Skill';
// import { SkillProp } from '../Types';

export const ALL_SKILLS_QUERY =`
  query ALL_SKILLS_QUERY {
    skills(orderBy: { level: desc }) {
      id
      level
      skillName
    }
  }
`;

export default function Skills(): unknown {
  
  return (
    <>
      <h3>Skills</h3>
    </>
  );
}

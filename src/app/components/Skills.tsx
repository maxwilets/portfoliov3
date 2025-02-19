 
import { useFetchGql } from '../hooks/useQuery';
// import H3Style from '../styles/Typography';
// import DisplayError from '../ErrorMessage';
import { Skill } from './Skill';
import { SkillProp } from '../Types';

export const ALL_SKILLS_QUERY =`
  query ALL_SKILLS_QUERY {
    skills(orderBy: { level: desc }) {
      id
      level
      skillName
    }
  }
`;

export default function Skills(): any {
  
  const { data, loading, error } = useFetchGql(ALL_SKILLS_QUERY, false);
  if (loading) return <p>Loading...</p>;
  // if (error) return <DisplayError error={error} />;
  // if (error) return <h1>Error: {error: Error}</h1>
  const { skills }: { skills: SkillProp[] } = data;

  return (
    <>
      <h3>Skills</h3>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </>
  );
}

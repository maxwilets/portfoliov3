
// import H3Style from '../styles/Typography';
// import DisplayError from '../ErrorMessage';
// import { Skill } from './Skill';
// import { SkillProp } from '../Types';
import { gql } from "@apollo/client";
import createApolloClient from "../lib/apolloClient";
import { SkillBadge } from "./SkillBadge";

interface Skill {
  category: string;
  skillItem: string;
}

export const ALL_SKILLS_QUERY =gql`
  query GetSkills($id: String!) {
    skills(id: $id) {
      _id
      skillContainerCollection {
        items {
          skillItem 
          category
        }
      }
    }
  }
`;

export const Skills = async ({id}:{id: string}) =>  {
  const client = createApolloClient();
  const { data } = await client.query({ query: ALL_SKILLS_QUERY, variables: {id: id} });
  const skillsArray = data?.skills?.skillContainerCollection?.items;

  const skillsObj: Record<string, string[]> = skillsArray.reduce((acc: Record<string, string[]>, skill: Skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = []; // Initialize array if category doesn't exist
  }
  acc[skill.category].push(skill.skillItem);
  return acc;
}, {} as Record<string, string[]>);

 console.log(skillsObj);

  console.log(data?.skills?.skillContainerCollection?.items);
  return (
  <div className="mb-4 flex flex-col">
    <h3 className="text-2xl font-bold mb-2">Skills</h3>
    {Object.entries(skillsObj).map(([category, skills]: [string, string[]]) => (
      <div key={category} className="flex flex-wrap items-center gap-4 mb-4">
        <h2 className="text-lg font-bold">{category}:</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill: string, index: number) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </ul>
      </div>
    ))}
  </div>
);
}

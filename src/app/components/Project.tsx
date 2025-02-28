/* eslint-disable @typescript-eslint/no-explicit-any */
 
import React from 'react';
import { styles } from '../style';
import createApolloClient from '../lib/apolloClient';
import { gql } from '@apollo/client';
import { ProjectCard } from './ProjectCard';

const GET_PROJECTS = gql`
  query GetProjects($id: String!) {
    projectContainer(id: $id) {
      projectsCollection {
        items {
          image {
            fileName
            url
          }
          title
          description
          liveLink
          githubLink
          tagsCollection {
            items {
              tag
              category
            }
          }
        }
      }
    }
  }
`;

export const Projects = async ({ id }: { id: string }) => {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_PROJECTS, variables: {id: id} });
  const projectItems = data?.projectContainer?.projectsCollection?.items;
  console.log(data?.projectContainer?.projectsCollection?.items);
  return (
    <div className="mb-4 flex flex-col items-center">
    <div className="mb-4 flex flex-col text-center">
      <p className={styles.sectionSubText}>My Projects</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </div>
    <div className="w-full flex flex-col items-center max-w-[1100px] mx-auto min-h-screen">
      <div className="flex flex-wrap gap-2.5 h-full items-stretch">
        {projectItems.map((project: any, index: number) => (
          <div className='flex-1 flex h-full' key={index}>
            <ProjectCard  index={index} project={project} />
          </div>
      ))}
      </div>
      
    </div>
  </div>
  )
};
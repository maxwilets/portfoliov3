 
import { gql } from "@apollo/client";
 
import Hero from "./components/Hero";
import createApolloClient from "./lib/apolloClient";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Project";
import  Nav  from './components/Nav';

const GET_PAGE = gql`
  query GetPage($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys { id }
        slug
        hero {
          sys {
            id
          }
        }
        resumeContainer {
          sys { id }
        }
        skillsContainer {
          sys { id }
        }
        projectContainer {
          sys { id }
        }
      }   
    }
  }
`;

const GET_RESUME = gql`
  query GetResumeContainer($id: String!) {
    resumeContainer(id: $id) {
    positionCollection {
      items {
        position
        company
        date
        pointContainerCollection {
          items {
            point
          }
        }
      }
    }
  }
  }
`;


export default async function Home() {
  const client = createApolloClient();
  const { data, error } = await client.query({ 
    query: GET_PAGE,
    variables: { slug: "homepage" }
  })
  console.log("data", data)
  console.log("error", error)
  const heroId = data?.pageCollection?.items[0]?.hero?.sys?.id;
  const resumeId = data?.pageCollection?.items[0]?.resumeContainer?.sys?.id;
  const skillsId = data?.pageCollection?.items[0]?.skillsContainer?.sys?.id;
  const projectId = data?.pageCollection?.items[0]?.projectContainer?.sys?.id;
  const {data: resumeData, error: resError} = await client.query({
    query: GET_RESUME,
    variables: { id: resumeId }
  })
  const resumeItems = resumeData?.resumeContainer?.positionCollection?.items
  if (resError) { console.log(resError)}
  return (
    <div className="bg-gray-900  grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Nav />
      <main className="flex flex-col gap-8 row-start-2 max-w-[1100px] items-center sm:items-start">
      
        <div id="about"><Hero  id={heroId} /></div>
        <Skills id={skillsId} />
        <div id="work"><Resume items={resumeItems}/></div>
        
        <div id="contact"><Projects id={projectId} /></div>
      </main>
    </div>
  );
}

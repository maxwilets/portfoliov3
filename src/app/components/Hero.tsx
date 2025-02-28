import { gql } from "@apollo/client";
import createApolloClient from "../lib/apolloClient";
import { styles } from "../style";

const GET_HERO = gql`
  query GetHero($id: String!) {
    hero(id: $id) {
      name
      subhead
    }
  }
`;

// ✅ This component is a Server Component (default in Next.js)
export default async function Hero({ id }: { id: string }) {
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_HERO, variables: {id: id} });
  return (
    <div >
      <h1 className={styles.sectionHeadText}>HELLLO {data?.hero?.name}</h1>
      <p className="tw-large text-white">{data?.hero?.subhead}</p>
    </div>
  );
}

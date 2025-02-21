import { gql } from "@apollo/client";
import createApolloClient from "../lib/apolloClient";

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
  console.log(data);
  return (
    <div>
      <h1>HELLLLLLLLLLLLO {data?.hero?.name}</h1>
      <p className="tw-large">{data?.hero?.subhead}</p>
    </div>
  );
}

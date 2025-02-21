// utils/withFetchGql.ts
export const withFetchGql = (query: string) => {
  return async () => {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      }
    );

    const result = await response.json();
    return {
      props: {
        data: result?.data || null,  // Pass fetched data to the component
      },
    };
  };
};

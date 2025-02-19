import { useState, useEffect } from "react";

export function useFetchGql(query: string, component: string, id: string, preview: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(function fetchData1() {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                preview
                  ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                  : process.env.CONTENTFUL_ACCESS_TOKEN
              }`,
            },
            body: JSON.stringify({ query }),
            
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, preview]); // Runs when query or preview changes

  return { data, loading, error };
}

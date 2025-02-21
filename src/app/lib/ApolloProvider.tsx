/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./apolloClient";

export function ApolloWrapper({ children }: {children: any }) {
  const client = createApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

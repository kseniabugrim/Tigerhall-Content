import { ApolloClient, InMemoryCache, createHttpLink} from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: "https://api.staging.tigerhall.io/graphql",
  }),
  cache: new InMemoryCache(),
});
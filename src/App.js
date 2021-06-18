import AppRouter from "./components/AppRouter/AppRouter";
import "./assets/styles/main.css";
import "./assets/styles/reset.css";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from './graphql';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;

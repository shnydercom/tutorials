import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { VisualContent } from "./components/VisualContent";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <VisualContent />
    </ApolloProvider>
  );
}

export default App;

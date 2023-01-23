import possibleTypes from "./apollo-config/possibleTypes.json";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { VisualContent } from "./components/VisualContent";

const client = new ApolloClient({
  uri: "/graphqlapiproxy",
  cache: new InMemoryCache({ addTypename: true, possibleTypes }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <VisualContent />
    </ApolloProvider>
  );
}

export default App;

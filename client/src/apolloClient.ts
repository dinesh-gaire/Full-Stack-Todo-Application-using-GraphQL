// src/apolloClient.ts
import { ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8001/graphql', // Update this URL to your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

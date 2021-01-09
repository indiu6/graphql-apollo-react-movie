import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '//localhost:4000/',
  // uri: '//movieql.now.sh/',
  cache: new InMemoryCache(),
});

export default client;

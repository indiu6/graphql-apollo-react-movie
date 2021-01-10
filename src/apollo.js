import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isLikedMovie } from './components/Movie';

const cache = new InMemoryCache({
  // typePolicies: {
  //   Mutation: {
  //     fields: {
  //       isLikedMovie: {
  //         read() {
  //           return isLikedMovie();
  //         },
  //       },
  //     },
  //   },
  // },
});

const client = new ApolloClient({
  uri: '//localhost:4000',
  cache,
  resolvers: {
    Movie: {
      isLiked: () => true,
    },
    Mutation: {
      toggleMovie: (_, { id, isLiked }, { cache }) => {
        console.log(isLiked);
        cache.modify({
          id: cache.identify({
            __typeName: 'Movie',
            id: `${id}`,
            isLiked: `${isLiked}`,
          }),
          fields: {
            isLiked: (isLiked) => !isLiked,
          },
        });
        return null;
      },
    },
  },
});

export default client;

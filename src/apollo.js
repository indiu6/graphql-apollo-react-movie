import { ApolloClient, InMemoryCache } from '@apollo/client';
import { isLikedMovie } from './components/Movie';

const cache = new InMemoryCache({
  typePolicies: {
    Mutation: {
      fields: {
        isLikedMovie: {
          read() {
            return isLikedMovie();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: '//localhost:4000',
  cache,
  resolvers: {
    Movie: {
      isLiked: () => true,
    },
    // Mutation: {
    //   toggleLikeMovie: (_, { id, isLiked }) => {
    //     console.log(isLiked);
    //     const myMovie = {
    //       __typeName: 'Movie',
    //       id: `${id}`,
    //       isLiked: `${isLiked}`,
    //     };
    //     cache.modify({
    //       id: cache.identify(myMovie),
    //       fields: {
    //         isLiked(isLiked) {
    //           return !isLiked;
    //         },
    //       },
    //     });
    //   },
    // },
  },
});

export default client;

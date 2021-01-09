import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error } = useQuery(GET_MOVIES);
  console.log(loading, error);
  return <h1>Home</h1>;
};

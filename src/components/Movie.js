import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gql, useMutation, makeVar, useReactiveVar } from '@apollo/client';

const IS_LIKED_MOVIE = gql`
  mutation isLikedMovie($id: Int!, $isLiked: Boolean!) {
    isLikedMovie(id: $id, isLiked: $isLiked) @client
  }
`;

export const isLikedMovie = makeVar([]);

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

export const Movie = ({ id, bg, isLiked }) => {
  const [toggleLikedMovie] = useMutation(IS_LIKED_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });
  const liked = useReactiveVar(isLikedMovie);
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleLikedMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </Container>
  );
};

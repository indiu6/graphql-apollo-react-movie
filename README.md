# Movie App

built with React, Apollo Client, GraphQL

## Before yarn start..

Go -> Apollo Server and GraphQL API: https://github.com/indiu6/graphql-apollo-movie-api

then -> 'yarn start' in there to start server,
then -> 'yarn start' in this project

## Initail install on Jan 08 2021

yarn add styled-components
react-router-dom
@apollo/client
graphql

## deprecated

After Apollo Client updated to v3, 'apollo-boost' and '@apollo/react-hooks' seem to be merged into '@apollo/client'.
So you should import 'ApolloClient' and 'ApolloProvider' from '@apollo/client' if your Apollo Client is v3.

apollo-boost, @apollo/react-hooks => @apollo/client

## tips on dev

1. https://movieql.now.sh/ is not working anymore
2. get new movie API from Apollo Server
3. yarn start in above project to start server
4. apollo.js in this project, put new uri: "http://localhost:4000/"

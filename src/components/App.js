import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './graphql';
import React from 'react';
import styled from 'styled-components';
import Filters from './Filter';
// import { SearchProvider } from '../contexts/SearchContext';

export default function App() {
  return (
    <React.StrictMode>
        <ApolloProvider client={apolloClient}>
          <Title>
            Realize aqui a sua consulta aos alunos cadstrados
          </Title>
          <Filters />
        </ApolloProvider>
    </React.StrictMode>
  )
};

const Title = styled.section `
    font-family: 'Oswald', sans-serif;
    text-align: center;
    margin-top: 100px;
    font-size: 100px;
    color: #fff;
`;
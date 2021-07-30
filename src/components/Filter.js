import React, { useState } from 'react'
import styled from 'styled-components';
import { apolloClient } from './graphql';
import {
    GET_STUDENTS,
    GET_STUDESBYNAME,
    GET_STUDESBYEMAIL,
    GET_STUDESBYCPF
} from '../queries/queries';

export default function Filters() {
  const [ state, setState ] = useState('all');
  const [ search, setSearch ] = useState('');
  const [  response, setResponse ] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchButton = () => {
    if(state === 'name'){
      let res = apolloClient.query({ query: GET_STUDESBYNAME })
        .catch((error) => {throw error});
      setResponse(res);
    }
    if (state === 'email'){
      let res = apolloClient.query({ query: GET_STUDESBYEMAIL })
        .catch((error) => {throw error});
      setResponse(res);
    }
    if (state === 'cpf'){
      let res = apolloClient.query({ query: GET_STUDESBYCPF })
        .catch((error) => {throw error});
      setResponse(res);
    }

    console.log(search);
    console.log(response);
  }

  const allStutents = () => {
    let res = apolloClient.query({ query: GET_STUDENTS })
      .catch((error) => {throw error});
      setResponse(res);
      console.log(response);
  
  };
  
  return (
    <>
      <Container>
        <label>Filtros:  </label>
        <select name='filters' value={state} onChange={selected => setState(selected.target.value)}>
          <option value='all'>Todos</option>
          <option value='name'>Name</option>
          <option value='email'>Email</option>
          <option value='cpf'>CPF</option>
        </select>
        {state !== 'all' 
        ? ( <>
            <input 
              type="text" 
              name="search" 
              placeholder="Busca"
              onChange={(e) => handleChange(e)}
              />
            <button onClick={searchButton}>Buscar Alunos</button>
            </>) 
        : (<button onClick={allStutents}>Buscar Alunos</button>)
        }
      </Container>
    </>
  )};

//onKeyDown={(e) => searchInput(e)}
const Container = styled.div `
    font-family: 'Oswald', sans-serif;
    text-align: left;
    font-size: 30px;
    color: #fff;
    margin: 50px 0px 50px 50px;

    & > select {
      margin-left: 10px;
      background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee;
      background-position: 218px center;
      width: 250px;
	    height:30px;
	    border:1px solid #ddd;
    }

    & > input {
      margin: 15px 0px 15px 90px;
    }

    & > button {
      margin-left: 90px;
      padding: 10px;
      background-color: #5b3ce7a2;
      border-radius: 10px;
      color: #fff;
    }
`;
import { createContext, useState } from 'react';
import { apolloClient } from '../components/graphql';
import {
    GET_STUDENTS,
    GET_STUDESBYNAME,
    GET_STUDESBYEMAIL,
    GET_STUDESBYCPF
} from '../queries/queries';

const SearchContext = createContext();

export default SearchContext;

export function SearchProvider(props){
    const [ state, setState ] = useState('all');
    const [ search, setSearch ] = useState('');
    const [ response, setResponse ] = useState([]);


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
    }

    const allStutents = () => {
        let res = apolloClient.query({ query: GET_STUDENTS })
            .catch((error) => {throw error});
        setResponse(res);
        console.log(res.data);
    }

    return (
        <SearchContext.Provider value={{state, setState, search, setSearch, response, setResponse, handleChange, searchButton, allStutents}}>
            {props.children}
        </SearchContext.Provider>
    )
};
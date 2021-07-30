//import { useContext } from "react";
//import SearchContext from '../contexts/SearchContext';
import gql from "graphql-tag";

//const { search } = useContext(SearchContext);

const GET_STUDENTS = gql`
    query {
        students {
            nome
            cpf
            email
    }
}`;

const GET_STUDESBYNAME = gql`
    query {
        studentByName (name: "Alice") {
            nome
            cpf
            email
    }
}
`;

const GET_STUDESBYEMAIL = gql`
    query {
        studentByEmail (email: "alice@gmail.com") {
            nome
            cpf
            email
    }
}
`;

const GET_STUDESBYCPF = gql`
    query {
        studentByCpf (cpf: "12345678910") {
            nome
            cpf
            email
    }
}
`;
//${search}
export {
    GET_STUDENTS,
    GET_STUDESBYNAME,
    GET_STUDESBYEMAIL,
    GET_STUDESBYCPF
}
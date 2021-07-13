import React, { useState } from 'react'
import logo from "../assets/logos/logo.png"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Table } from 'react-bootstrap'
import background from "../assets/Background/background.png"


const imgStyle = {
    maxWidth: 345,
    maxHeight: 200,
    display: "inline-block",
    // float: "left",
    // width: "152px",
    // height: "214px",
    //position: "static",
    marginRight: "30px",
    marginBottom: "30px",
    marginTop: "50px",
    marginLeft: "150px",
}

const Filme = ({ data }) => {


    const [filme, setFilme] = useState(data)


    const handleClick = () => {
        console.log(filme.nome);
    }

    let movieImage = null;
    //tenta ir buscar a imagem. Se não existir o logo é metido
    try {
        movieImage = require("../assets/filmes/" + filme.foto).default;
    } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
            throw e;
        }
        movieImage = logo;
    }
    return (
        
            <Link to={{
                pathname: "filmes/details/" + filme.nome,
                state: filme }} >
            <img style = {imgStyle} src={movieImage} alt={filme.nome} onClick={handleClick}></img></Link>
    )
}

export default Filme

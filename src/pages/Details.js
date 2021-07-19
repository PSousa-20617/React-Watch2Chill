import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import logo from "../assets/logos/logo.png"
import Embed from 'react-embed'
import EditFilme from "../components/EditFilme"

const imgStyle = {
    maxWidth: 300,
    maxHeight: 300,
    display: "inline-block",
    margin: "10px",
}

const divStyle = {
    margin: "20px"
}

const fontStyle = {
    color: 'pink'
}

const borderStyle = {
    border: '1px solid',
    marginTop: "20px",
    marginLeft: "200px",
    backgroundColor: "grey"
}

const buttonStyle = {
    marginTop: "10px",
    marginRight: "5px",
  };



const Details = (props) => {

    const [filme, setFilme] = useState(props.location.state);

    const handleDelete = () => {
        fetch('http://localhost:8000/movies/' + filme.id, {
        method: 'DELETE',
      })
      .then(console.log("Deleted "+filme.id)) 
    
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
        <Container style={borderStyle}>
            <Row xs={2} md={4} lg={4} style={divStyle}>
                <Col >
                    <img style={imgStyle} src={"" + movieImage} alt={filme.nome} ></img>
                </Col>
                <Col lg={7} style={divStyle}>
                    <p><b>{filme.nome}</b></p>
                    <p>
                        <b>
                            <font color={fontStyle}>{filme.genero}</font>
                        </b>
                        {" "}- ({filme.ano})
                    </p>
                    <p><b>Realizador:</b> {filme.realizador}</p>
                    <p><b>Elenco:</b> {filme.elenco}</p>
                    <p><b>Idioma:</b> {filme.idioma}</p>
                    <p><b>Descrição:</b> {filme.sinopse}</p>
                </Col>
                <Col>
                    <EditFilme details = {filme} ></EditFilme>
                    <Button style={buttonStyle} onClick={handleDelete}>Apagar</Button>
                              
                </Col>

            </Row>
            <Row xs={1} md={2}>
                <Col>
                    <p>Trailer</p>
                    <Embed url={filme.trailer}></Embed>
                </Col>
            </Row>
        </Container>
    )
}

export default Details

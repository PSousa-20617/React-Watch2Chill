import React from 'react'
import logo from '../assets/logos/logo.png'
import { Button } from "react-bootstrap"
import imagem from '../assets/logos/Imagem1.png'



const Home = () => {

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "690px",
        width: "125px",
      };
      const imgStyle = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "200px",
        width: "100%",
      };

    return (
        <div>
            <img src={logo} class="img-fluid" alt="logo" style={imgStyle}></img>
            <Button  variant="info" style={style} href="/filmes" >Ir para Filmes</Button>
        </div>
        
    )
}

export default Home

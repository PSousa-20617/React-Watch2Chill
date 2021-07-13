import React, { useEffect,useState } from 'react'
import moviesDB from '../assets/videosBD.json'
import logo from '../assets/logos/logo.png'
import background from '../assets/Background/background.png'
import Filme from '../components/Filme.js'
import "./Filmes.css"


const Filmes = () => {

const [filmes,setFilmes] = useState()


useEffect(() => {
    fetch("http://localhost:8000/movies")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setFilmes(data);
      console.log(data);
    })
  }, [])

    return (
        <body>
        {filmes && filmes.map((filme)=><Filme key={filme.id} data = {filme}></Filme> )}
        </body>
    )
}

export default Filmes

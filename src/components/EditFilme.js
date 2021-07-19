import React, { useState } from "react";
import { Button, Modal, Form, Col } from "react-bootstrap";

const EditFilme = ({details}) => {

  const [nome, setNome] = useState(details.nome);
  const [genero, setGenero] = useState(details.genero);
  const [ano, setAno] = useState(details.ano);
  const [realizador, setRealizador] = useState(details.realizador);
  const [elenco, setElenco] = useState(details.elenco);
  const [idioma, setIdioma] = useState(details.idioma);
  const [descricao, setDescricao] = useState(details.descricao);
  const [imagem, setImagem] = useState("");
  const [trailer, setTrailer] = useState(details.trailer)
  const [id, setId] = useState(details.id)

  // bootstrap stateshow(mostra ou não mostra)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //função que após fazer submit faz o fetch com o método put, que altera o conteúdo do id referido
  const handleEdit = (e) => {
    e.preventDefault()

    fetch(" http://localhost:8000/movies/" + id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        genero: genero,
        ano: ano,
        realizador: realizador,
        elenco: elenco,
        idioma: idioma,
        descricao: descricao,
        imagem: imagem,
        trailer: trailer
      }),
    }).then(alert("Submited!"));
  }

  //retira o nome do ficheiro
  const handleImage = (e) => {
    const imageName = e.target.files[0].name;
    setImagem(imageName);
  };


  const buttonStyle = {
    marginTop: "10px",
    marginRight: "5px",
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={buttonStyle}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
         <Form
    
      onSubmit={handleEdit}
      style={{ margin: "10px"}}
    >
      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridNome">
          <Form.Label><b><font color = "white">Nome</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            value = {nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridGenero">
        <Form.Label><b><font color = "white">Género</font></b></Form.Label>
          <Form.Control
            type="text"
            value = {genero}
            placeholder="Género"
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridAno">
        <Form.Label><b><font color = "white">Ano</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Ano"
            value = {ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridRealizador">
        <Form.Label><b><font color = "white">Realizador</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Realizador"
                  value={realizador}
            onChange={(e) => setRealizador(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridElenco">
        <Form.Label><b><font color = "white">Elenco</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Elenco"
                  value={elenco}
            onChange={(e) => setElenco(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridIdioma">
        <Form.Label><b><font color = "white">Idioma</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Idioma"
                  value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
            required
          />
        </Form.Group>
      </Form.Row>
      <Form.Group as={Col} xs="6" controlId="formGridTrailer">
        <Form.Label><b><font color = "white">Trailer</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Trailer"
                value={trailer}
            onChange={(e) => setTrailer(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Row>
        <Form.Group as={Col} xs="6" controlId="formGridDescricao">
        <Form.Label><b><font color = "white">Descrição</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrição"
                  value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </Form.Group>
        </Form.Row>
        
      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridImg">
        <Form.Label><b><font color = "white">Imagem</font></b></Form.Label>
          <Form.Control type="file" onChange={(e) => handleImage(e)} />
        </Form.Group>
      </Form.Row>


      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditFilme;

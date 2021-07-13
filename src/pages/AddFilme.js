import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";



const AddFilme = () => {
  //states dos valores do form
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [realizador, setRealizador] = useState("");
  const [elenco, setElenco] = useState("");
  const [idioma, setIdioma] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() == false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    //Post na BD
    fetch("http://localhost:8000/movies", {
      method: "POST",
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
        imagem: imagem
      }),
    });
  };

  //retira o nome do ficheiro
  const handleImage = (e) => {
    const imageName = e.target.files[0].name;
    setImagem(imageName);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{ margin: "10px"}}
    >
      <Form.Row>
        <Form.Group as={Col} xs="auto" controlId="formGridNome">
          <Form.Label><b><font color = "white">Nome</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridGenero">
        <Form.Label><b><font color = "white">Género</font></b></Form.Label>
          <Form.Control
            type="text"
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
            onChange={(e) => setRealizador(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridElenco">
        <Form.Label><b><font color = "white">Elenco</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Elenco"
            onChange={(e) => setElenco(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} xs="auto" controlId="formGridIdioma">
        <Form.Label><b><font color = "white">Idioma</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Idioma"
            onChange={(e) => setIdioma(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" controlId="formGridDescricao">
        <Form.Label><b><font color = "white">Descrição</font></b></Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrição"
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddFilme;
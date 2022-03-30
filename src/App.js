import React, { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import Container from "@mui/material/Container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Formulario de Cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;

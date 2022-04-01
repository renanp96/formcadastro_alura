import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3"c component="h1" align="center">Formulario de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;

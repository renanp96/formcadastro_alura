import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" c component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <FormularioCadastro enviar={enviar} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF invalido." };
  } else {
    return { valido: true, texto: "" };
  }
}

function enviar(dados) {
  console.log(dados);
}

export default App;

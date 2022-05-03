import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h3" c component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
          <FormularioCadastro enviar={enviar} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function enviar(dados) {
  console.log(dados);
}

export default App;

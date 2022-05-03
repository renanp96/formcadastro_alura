import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ enviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  //Rendeniza o elemento quando a DOM for criado, atualizado ou desmontado
  useEffect(() => {
    if(etapaAtual === formularios.length-1){
      enviar(dadosColetados);
    }
    //console.log(dadosColetados);
  });

  const formularios = [
    <DadosUsuario enviar={coletarDados} />,
    <DadosPessoais enviar={coletarDados} />,
    <DadosEntrega enviar={coletarDados} />,
    <Typography variant="h4" align="center">Obrigado pelo cadastro</Typography>
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximaEtapa();
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

export default FormularioCadastro;

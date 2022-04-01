import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ enviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const formularios = [
    <DadosUsuario enviar={proximaEtapa} />,
    <DadosPessoais enviar={proximaEtapa} validarCPF={validarCPF} />,
    <DadosEntrega enviar={enviar} />,
  ];

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;

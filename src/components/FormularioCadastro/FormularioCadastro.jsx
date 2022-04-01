import React from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ enviar, validarCPF }) {
  return (
    <>
      <DadosPessoais enviar={enviar} validarCPF={validarCPF}/>
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;

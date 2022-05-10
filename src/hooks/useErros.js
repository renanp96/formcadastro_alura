import React, { useState } from 'react';

export default function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [errors, setErrors] = useState({ senha: estadoInicial});

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...errors };
    novoEstado[name] = validacoes[name](value);

    setErrors(novoEstado);
  }

  function enviarForm(){
    for(let campo in errors){
      if(!errors[campo].valido){
        return false;
      }
    }
    return true;
  }

  return [errors, validarCampos, enviarForm];

}

function criarEstadoInicial(validacoes){
  const estadoInicial = {  };
  for(let campo in validacoes){
    estadoInicial[campo] = { valido: true, texto: "" }
  }
  return estadoInicial;
}

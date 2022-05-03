import { Button, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ enviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({ senha: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro);
  function validarCampos(event){
    const {name, value} = event.target;
    const novoEstado = {...errors};
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
    
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(enviarForm()){
          enviar({email, senha});
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={errors.senha.valido}
        helperText={errors.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;

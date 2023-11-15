import React, { useState } from "react";
import axios from "axios";


const ContatoPage = () => {

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

function handleInputChange(event){
  if(event.target.name === "anexo")
    campos[event.target.name] = event.target.files[0];
  else
    campos[event.target.name] = event.target.value;
  setCampos(campos);
}

function handleFormSubmit(event){
  event.preventDefault();
  console.log(campos);


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "nome": campos.nome,
    "email": campos.email,
    "mensagem": campos.mensagem
  });
  
  var requestOptions = {
    method: 'POST',
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({}),
    mode: 'cors',
    redirect: 'follow'
  };


  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow'
  // };
  
  fetch("http://ghpnet.com.br/api/mail", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

  return (
  <div className="container">
  <form onSubmit={handleFormSubmit}>
    <label htmlFor="email">E-mail</label>
    <input type="text" id="email" name="email" placeholder="Digite seu e-mail.."  onChange={handleInputChange} />
    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" name="nome" placeholder="Qual seu nome.."  onChange={handleInputChange} />
    <label htmlFor="mensagem">Mensagem</label><br />
    <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem.." className="textArea"  onChange={handleInputChange}></textarea>
    <input type="submit" value="Enviar" />
  </form>
</div>
  );
};

export default ContatoPage;
import React, { useState } from "react";
// import React from 'react';
// // import React, {useState} from 'react';
// import {useEffect, useState} from 'react';



const ContatoPage = () => {

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    mensagem: '',
    anexo: ''
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
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://ghpnet.com.br/api/mail", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


}




  return (
  // <div><h3>Contato</h3>Para entrar em contato, preencha o formulário abaixo:
  // <form>
  //   <label>Nome:</label> <input type="text" name="usuario"/><br/>
  //   <label>E-mail:</label> <input type="text" name="usuario"/><br/>
  //   <label>WhatsApp:</label> <input type="text" name="usuario"/><br/>
  //   <label>Mensagem:</label> <input type="text" name="usuario"/><br/>
  //   <input type="submit"/>
  // </form></div>
  <div className="container">
  <form onSubmit={handleFormSubmit}>
    <label htmlFor="email">E-mail</label>
    <input type="text" id="email" name="email" placeholder="Digite seu e-mail.."  onChange={handleInputChange} />

    <label htmlFor="nome">Nome</label>
    <input type="text" id="nome" name="nome" placeholder="Qual seu nome.."  onChange={handleInputChange} />

    <label htmlFor="mensagem">Mensagem</label><br />
    <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem.." className="textArea"  onChange={handleInputChange}></textarea>

    {/* <label htmlFor="anexo">Anexo</label>
    <input type="file" id="anexo" name="anexo" /> */}

    <input type="submit" value="Enviar" />
  </form>
</div>
  );
};

export default ContatoPage;
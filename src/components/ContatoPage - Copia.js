import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ContatoPage = () => {
  const navigate = useNavigate()
  const Enviar = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const dados = {"data":{}}
    form.forEach ((value,key) => {
      dados["data"][key] = value
    })
    // console.log(dados)
    fetch ("http://www.ghpnet.com.br/api/mail",{
        method: "post",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
      })
      .then(
        resp => resp.json()
      )
      .then(
        // data => console.log(data.data)
        data => {
          alert("E-mail enviado com sucesso!")
          navigate(`/`)
        }
      )
  }
    

  return (<div><h3>Novo Post</h3>Para enviar um novo post, preencha o formulário abaixo:
  <form onSubmit={Enviar}>
    <label>E-mail:</label> <input type="text" id="email" name="email" placeholder="Digite seu e-mail.." /><br/>
    <label>Nome:</label> <input type="text" id="nome" name="nome" placeholder="Qual seu nome.." /><br/>
    <label>Mensagem:</label> <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem.." className="textArea"></textarea><br/>
    <input type="submit" value="Enviar" />
  </form></div>);
};

export default ContatoPage;
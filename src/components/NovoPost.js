import React from 'react';
import { useNavigate } from 'react-router-dom';

const NovoPost = () => {
  const navigate = useNavigate()
  const Enviar = (event) => {
    event.preventDefault()
    const form = new FormData(event.target)
    const dados = {"data":{}}
    form.forEach ((value,key) => {
      dados["data"][key] = value
    })
    // console.log(dados)
    fetch ("http://localhost:1337/api/posts",{
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
          alert("Post enviado com sucesso!")
          navigate(`/post/${data.data.id}`)
        }
      )
  }
  
  

  return (<div className="container"><h3>Novo Post/Matéria</h3>Para enviar um novo post, preencha corretamente formulário abaixo:
  <form onSubmit={Enviar}>
    <label>Titulo:</label> <input type="text" placeholder="Titulo da matéria" name="titulo"/><br/>
    <label>Tags:</label> <input type="text" placeholder="Tags para a busca" name="tags"/><br/>
    {/* <label>WhatsApp:</label> <input type="text" name="usuario"/><br/> */}
    <label>Post:</label> <textarea name="conteudo" rows="10" placeholder="Escreve a matéria"  cols="80" /><br/>
    <label>Resumo:</label> <textarea name="resumo" rows="3" placeholder="Resumo simples da matéria"  cols="80" /><br/>
    <label>Imagem:</label> <input type="text" placeholder="URL da imagem"  name="foto"/><br /><font size="1"><i>*Somente URL</i></font><br/>
    <label>Autor:</label> <input type="text" placeholder="Nome do autor da matéria"  name="autor"/><br/>
    <input type="submit"/>
  </form></div>);
};

export default NovoPost;
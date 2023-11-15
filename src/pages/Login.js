import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  // const handleSubmit = (e) => {
  //   e.preventDefault() //evita que o form faça ualquer ação sem autorização
  //   const formData = new FormData(e.currentTarget)
  //   // fetch('https://google.com', {
  //   //   method: 'POST',
  //   //   header: {
  //   //     'Content-Type': 'application/json',
  //   //      'Authorization': 'key_auth'
  //   //      8body: JSON.stringify(formData)
  //   // })
  //   }

  const [campos, setCampos] = useState({
    login: '',
    senha: '',
  });

function handleInputChange(event){
  // if(event.target.name === "anexo")
  //   campos[event.target.name] = event.target.files[0];
  // else
    campos[event.target.name] = event.target.value;
  setCampos(campos);
}

function handleFormSubmit(event){
  event.preventDefault();
  console.log(campos);


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "login": campos.login,
    "senha": campos.senha,
  });
  
  var requestOptions = {
    method: 'POST',
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify({}),
    mode: 'cors',
    redirect: 'follow'
  };


  axios.post("http://api.ghpnet.com.br/auth/index.php", {
    "login": campos.login,
    "senha": campos.senha,
  }).then((res) => {
    console.log(res.data);
    let authtoken = res.data.token;
    let authstatus = res.data.status;
    //alert("Login feito com Sucesso!");
    // alert(res.data.token)
    // alert(authstatus)

    if (authstatus == true){
      alert("Login feito com Sucesso!");
      navigate("/novo-post");
    }else{
      alert("Login ou senha invalidos!");
    }

    // campos.nome = ""
    // campos.email = ""
    // campos.mensagem = ""
    //alert("Seu token de acesso: ". res.data.token)
    

    if (!res.data.status)
      throw ("Erro ao fazer login");

  }).catch(function (error) {
    console.log(error?.response?.data?.error || error?.message);
    //alert(error?.response?.data?.error || error?.message);
    
  })

}

    return (
      <div className="container"><h3>Faça o login</h3>Faça o login abaixo:
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="login">Usuário:</label> <input type="text" name="login" placeholder="Seu login"  onChange={handleInputChange} /><br/>
        <label htmlFor="senha">Senha:</label> <input type="password" name="senha" placeholder="Sua senha"  onChange={handleInputChange} /><br/>
        <input type="submit"/>
      </form>
      </div>
    )
  }

export default Login
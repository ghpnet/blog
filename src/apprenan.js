import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailsEnviados, setEmailsEnviados] = useState([]);

  const enviarEmail = async () => {
    if (!nome)
      return alert("Nome obrigatório");
    else if (!email)
      return alert("Email obrigatório");
    else if (!mensagem)
      return alert("Mensagem obrigatória");

    // fiz assim com try catch pq quando sua api da falha, ela nao retorna status diferente de 200. ela retorna 200 com sucesso = false. 
    // sendo assim, tenho que pegar o 200, ver se o status é false para poder saber se deu erro ou nao
    try {
      setLoading(true);
      var res = await axios.post("http://ghpnet.com.br/api/mail/index.php", {
        "nome": nome,
        "email": email,
        "mensagem": mensagem
      });
      console.log(res.data);

      if (!res.data.status)
        throw ("Erro ao enviar e-mail");

      // Adiciona o emails enviados na lista como sucesso!
      setEmailsEnviados([...emailsEnviados, {
        "nome": nome,
        "email": email,
        "mensagem": mensagem,
        "success": true
      }]);
    } catch (error) {
      setEmailsEnviados([...emailsEnviados, {
        "nome": nome,
        "email": email,
        "mensagem": mensagem,
        "erro": error?.response?.data?.error || error?.message,
        "success": false
      }]);

      alert(error?.response?.data?.error || error?.message);
    } finally {
      setLoading(false);
    }

    /* outro jeito de fazer usando promise...
    setLoading(true);
    axios.post("http://ghpnet.com.br/api/mail", {
      "nome": nome,
      "email": email,
      "mensagem": mensagem
    }).then((res) => {
      console.log(res.data);
      alert("Sucesso!");

      if (!res.data.status)
        throw ("Erro ao enviar e-mail");

      // Adiciona o emails enviados na lista como sucesso!
      setEmailsEnviados([...emailsEnviados, {
        "nome": nome,
        "email": email,
        "mensagem": mensagem,
        "success": true
      }]);
    }).catch(function (error) {
      console.log(error?.response?.data?.error || error?.message);
      alert(error?.response?.data?.error || error?.message);
      setEmailsEnviados([...emailsEnviados, {
        "nome": nome,
        "email": email,
        "mensagem": mensagem,
        "success": false
      }]);
    }).finally(() => setLoading(false));
    */

  }

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column ' }}>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: 10, flexDirection: "column", width: 400, alignItems: "center" }}>
            <h1>Exemplo de Envio de formulário</h1>
            <div className='campo'>
              <label>Nome</label>
              <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} placeholder='Nome' disabled={loading}></input>
            </div>

            <div className='campo'>
              <label>Email</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' disabled={loading}></input>
            </div>

            <div className='campo'>
              <label>Mensagem</label>
              <textarea type="text" onChange={(e) => setMensagem(e.target.value)} value={mensagem} placeholder='Mensagem' disabled={loading}></textarea>
            </div>
            <input type="button" onClick={enviarEmail} value="Enviar E-mail" style={{ marginTop: 20 }} disabled={loading} />
            {nome && <p>Colocando aqui o nome do usuario para voce ver funcionando o update reativo: {nome}</p>}

          </div>
        </div>

        <hr style={{ width: 400, margin: 40, alignSelf: 'center' }} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className='exemplo-lista'>
            <h1>Exemplo de Lista</h1>

            {emailsEnviados?.map((e, index) => <div key={"emails_enviados_" + index} className={'email ' + (e.success ? "sucesso" : "erro")}>
              <div className='email-numero'>{index + 1}</div>
              <div style={{ marginLeft: 20, display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                <div className='email-nome'>Nome: {e.nome}</div>
                <div className='email-email'>E-mail: {e.email}</div>
                <div className='email-mensagem'>Mensagem: {e.mensagem}</div>
                {e.erro && <div className='email-erro'>{e.erro}</div>}
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

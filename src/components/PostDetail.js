import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
// import reactmarkdown from "react-markdown";
//npm install react-markdown

// const posts = [
//   { id: 1, title: 'Lançamento da Fiat', content: 'A Fiat Lançou com sucesso o sucessor do Fiat Palio, o Argo, que tem otima autonomia e desempenho.',tags: 'fiat,argo' },
//   { id: 2, title: 'Saida da Ford do Brasil', content: 'Depois de mais de 60 anos no Brasil, a Ford Company está saindo do Brasil.', tags: 'ford,brasil' },
//   { id: 3, title: 'Não compre LandRover', content: 'Ao comprar um LandRouver, saiba que você so terá dor de cabeça, principalemnte se tiver que trocar uma correia dentada, pois para este serviço, você terá que descabinar o veiculo, tornando este seriço extremeamente caro, girando em media de 15 a 20 mil reais.<br /> Não compre este carro.',tags: 'landrouver,lixo,caro'}
// ];


const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState([])
  // const post = posts.find(post => post.id === parseInt(id, 10));

  useEffect (() =>  {
    fetch(`http://localhost:1337/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
          console.log(data.data);
          setPost(data.data);
      })

      .catch((err) => {
      console.log(err.message);
      })

  }, [])


  if (!post) return <div>Post não encontrado.</div>;

  // const msg = {post.attributes?.conteudo};

  return (
    <div>
      {/* <a href="#"> */}
        {/* class="imgefeito" */}
        <h1>{post.attributes?.titulo}</h1>
      <img src={post.attributes?.foto} className="fotoanuncio" alt={post.attributes?.titulo}></img>
      {/* <span class="desc">
        <strong>{post.attributes?.titulo}</strong>
        {post.attributes?.resumo}
      </span>
      </a> */}
  
      {/* Resumo: {post.attributes?.resumo}<br /> */}
      <p>{post.attributes?.conteudo}</p>
      <i>Autor: {post.attributes?.autor}</i><br />
      <reactmarkdown source={post.attributes?.conteudo} escapehtml={false} />      
      <p>Tags: <i>{post.attributes?.tags}</i></p>

    </div>
  );
};

export default PostDetail;

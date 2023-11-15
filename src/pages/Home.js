import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const posts = [
  //   { id: 1, title: 'Lançamento da Fiat', content: 'A Fiat Lançou com sucesso o sucessor do Fiat Palio, o Argo, que tem otima autonomia e desempenho.',tags: 'fiat,argo' },
  //   { id: 2, title: 'Saida da Ford do Brasil', content: 'Depois de mais de 60 anos no Brasil, a Ford Company está saindo do Brasil.', tags: 'ford,brasil' },
  //   { id: 3, title: 'Não compre LandRover', content: 'Ao comprar um LandRouver, saiba que você so terá dor de cabeça, principalemnte se tiver que trocar uma correia dentada, pois para este serviço, você terá que descabinar o veiculo, tornando este seriço extremeamente caro, girando em media de 15 a 20 mil reais.<br /> Não compre este carro.',tags: 'landrouver,lixo,caro'}
  
  // ];

  useEffect (() =>  {
    fetch('http://localhost:1337/api/posts')
      .then((res) => res.json())
      .then((data) => {
          console.log(data.data);
          setPosts(data.data);
      })

      .catch((err) => {
      console.log(err.message);
      })

  }, [])

  return (
    <div>
      {/* <h1>AutoLannd</h1> */}
      <PostList posts={posts} />
    </div>
  );
};

export default Home;

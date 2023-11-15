import React from 'react';

// const posts = [
//   { id: 1, title: 'Meu primeiro post', content: 'Conteúdo do primeiro post' },
//   { id: 2, title: 'Segundo post', content: 'Conteúdo do segundo post' },
// ];

const PostList = ({posts}) => {
  return (
    <div>
      <h3>Seja bem vindo ao AutoLand, um blog feito em REACTJS</h3>
      <br /><br />
      <h2>Veja nossos Post já publicados.</h2>
      <br />
      <ul>
        {posts.map(post => (
          <div key={post.id}>
            <a href={`/post/${post.id}`}>{post.attributes.titulo}</a><br />
            <i>{post.attributes.resumo}</i><br /><br />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

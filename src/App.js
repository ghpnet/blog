import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

import Menu from './components/Menu';
import Home from './pages/Home';
import ContatoPage from './components/ContatoPage';
import NovoPost from './components/NovoPost'
import Login from './pages/Login';
import './App.css';
import logotipo from "./imagens/autoland.png"
import anuncio from "./imagens/banner.jpg"

import Header from "./header/Header";
import "./styles.css";


  

const App = () => {

  const [activePage, setActivePage] = useState('Home');

  const handleMenuItemClick = (page) => {
    setActivePage(page);
  };

  // const renderPage = () => {
  //   switch (activePage) {
  //     case 'Home':
  //       return <HomePage />;
  //       case 'Novo Post':
  //         return <NovoPost />;
  //     case 'Contato':
  //       return <ContatoPage />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <Router>
      <title>AutoLand</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      <div className="App">
      <Header />
        <img src={logotipo} alt="AutoLand" height="auto" width="40%" id="image-section" />
        <br /><br />
        {/* <Menu activePage={activePage} onMenuItemClick={handleMenuItemClick} /> */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-post" element={<NovoPost />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<PostDetail/>} />
        </Routes>
        <br /><br /><hr size="1" color="#EEEEEE" />
        <font size="1" > Anuncie aqui...</font><br />
        <a href="http://www.estacio.br" target="_blank"><img src={anuncio} /></a><br /><br />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';

import Menu from './components/Menu';
import { Container } from 'react-bootstrap';
import Premios from './components/Premios';
import Aceleradores from './components/Aceleradores';
import Participar from './components/Participar';
import NumeroSorte from './components/NumeroSorte';
import Download from './components/Download';
import ProdutosParticipantes from './components/ProdutosParticipantes';
import Footer from './components/Footer';
import Sorteio from './components/Sorteio';
import Gallery from './components/Gallery';
import ScrollArrow from './components/ScrollArrow';


function App() {
  return (
    <div className="App">
        <img src="bg.jpg" className="App-fundo"/>
        <Container>
            <Menu/>
            <Premios/>
            <Aceleradores/>
            <Participar/>
            <NumeroSorte/>
            <Download/>
            <ProdutosParticipantes/>
            <Sorteio/>
            <Gallery/>
            <Footer/>
        </Container>
        <ScrollArrow/>
    </div>
  );
}

export default App;

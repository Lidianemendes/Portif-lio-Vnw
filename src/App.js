import React from 'react';
import Sobre from "./components/Sobre.js";
import Formacao from './components/Formacao.js';
import EquipeTec from "./components/EquipeTec.js";
import Eventos from "./components/Eventos.js";
import Footer from "./components/Footer.js";
import VnwHeader from './components/img/VnwHeader.png';
import Background from './components/img/fundoHeader.png';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
body{
  width:100%;
}
`;

const Home = styled.div`
  background-image: url(${Background});
  top: 0px;
  left: 0px;
  width: 100%;
  height: 130vh;
`;
const Header = styled.section`
display:flex;
`;
const Img = styled.img`
top: 28px;
left: 66px;
width: 78px;
height: 54px;
margin:10px;
`;
const Nav = styled.section`
`;
const Ul = styled.ul`
 display:flex;
 margin-left:40vw;

 
`;
const Li = styled.li`
 list-style:none;
 margin:15px;
 color:white;
`;
const Title = styled.h1`
display:flex;
text-align: left;
margin-top:121px;
margin-left:80px;
font: normal normal 800 65px/101px Montserrat;
letter-spacing: 0px;
color: #FFAC2D;
`;
const Card = styled.div`
position:relative;
width: 45vw;
height: 35vh;
margin-top: 60px;
margin-left: 80px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 5px 12px #00145D29;
border-radius: 20px;
opacity: 1;
`;
const Score = styled.p`
height: 27px;
font-size:50px;
color:#00145D;
`;
const Feature = styled.p`
margin-left:5px;
height: 47px;
font-size:50px;
color:#00145D;
`;

const Acess = styled.p`
margin-left:80px;
margin-top:15px;
font-size:19px;
color: #FED5B2;
`;
const Subscription = styled.h2`
text-align: left;
font: normal normal bold 48px/79px Montserrat;
letter-spacing: 0px;
color: #00145D;
opacity: 1
`;
const Period = styled.h2`
width: 501px;
height: 44px;
text-align: left;
letter-spacing: 0px;
color: #272727;
opacity: 1;
`;

export default function App (){
  return(
    <Router>
      <container>
        <GlobalStyle/>
          <Home>
           <Header> 
            <Img src={VnwHeader} alt="" />
              <nav>
                <Ul>
                    <Link to='/Sobre'><Li>Sobre</Li></Link>
                    <Link to='/Formacao'><Li>Formação</Li></Link>
                    <Link to='/Equipe'><Li>Equipe</Li></Link>
                    <Link to='/Eventos'><Li>Eventos</Li></Link>
                    <Link to='/Contatos'><Li>Contatos</Li></Link>
                </Ul>
                </nav>
                </Header> 
              <Routes> 
                <Route path='/Sobre' element={<Sobre/>}/>
                <Route path='/Formacao' element={<Formacao/>}/>
                <Route path='/Equipe' element={<EquipeTec/>}/>
                <Route path='/Eventos' element={<Eventos/>}/>
                <Route path='/' />
              </Routes>
            <Title>// Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</Title>
              <Card>
                <Score>...</Score>
                <Feature>__________________</Feature>
                <Subscription>Inscreva-se no Vai na Web!</Subscription>
                <Period>Inscrições 02 a 21 de Agosto</Period>
              </Card>
              <Acess><b>Link para o formulário:</b> bit.ly/CarreiraVaiNaWeb</Acess>
            </Home>
    <Sobre/>
    <Formacao/>
    <EquipeTec/>
    <Eventos/>
    <Footer/>
    </container>
    </Router>
  )
};

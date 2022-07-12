import React from 'react';
import pcMain from './img/pcMain.png';
import TecMain from './img/TecMain.png';
import styled from 'styled-components';

const Duos = styled.div`
  display:flex;
  margin-left: 0px;
  height: 450px;
`;
const MainText = styled.section`
margin-top: 40px;
margin-left: 108px;
width: 700px;
height: 300px;
font-size:13px;
`;
const Subtitle = styled.section`
display:flex;
margin-top:20px;
`;
const SubtitleOne = styled.section`
width:100%;

`;
const SubtitleTWo = styled.section`¨
width:100%;
`;
const Img = styled.img`
margin-top: 40px;
margin-left: 72px;
width: 950px;
height: 280px;
mix-blend-mode: normal;
opacity: 1;
`;
const Title = styled.h2`
font-size:30px;
margin-left:10px;
`;


export default function Formação(){
    return(
        <Duos>
            <MainText>
             <Title>Formação</Title>
             <Subtitle>
              <img src={pcMain} alt="" />
              <SubtitleOne>
              <h3>FRONT-END</h3>
              <p>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</p>
              </SubtitleOne>
              </Subtitle>
              <Subtitle>
              <img src={pcMain} alt="" />
              <SubtitleTWo>
              <h3>BACK-END</h3>
              <p>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</p>
              </SubtitleTWo>
              </Subtitle>
            </MainText>
            <>
            <Img src={TecMain} alt="" />
            </>
        </Duos>
    )
}
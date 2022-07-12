import React from 'react';
import VnwMain from './img/VnwMain.png';
import styled from 'styled-components';
import { getQueriesForElement } from '@testing-library/react';

const About = styled.div`
  display:flex;
  margin-top: 70px;
  margin-left: 0px;
  height: 372px;
`;
const Img = styled.img`
margin-top: 90px;
margin-left: 210px;
width: 10vw;
height: 17vh;
mix-blend-mode: normal;
opacity: 1;
`;

const Text = styled.section`
width:50vw;
margin-left:320px;
margin-top:52px;
`;

export default function Sobre(){
    return(
        <About>
          <>
            <Img src={VnwMain} alt="" />
          </>
          <Text>
            <h1>Sobre o Vai na Web</h1>
            <p>Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.</p> 
            <p>Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</p> 
            <p>Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.</p>
          </Text>
        </About>
    )
}
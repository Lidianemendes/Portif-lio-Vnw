import React from 'react';
import EventosVnw from './img/EventosVnw.png';
import styled from 'styled-components'

const Event = styled.div`
  margin-top:100px;
  margin-bottom:40px;
`;
const TextEvent = styled.h2`
font-size:30px;
margin-left:107px;
`;
const Girls = styled.section`
display:flex;
margin-left:100px;
margin:10px;
text-align:center;
justify-content:center;

`;
const Img = styled.img`
 
 height:70vh;
 
 
`;
const TecGirl = styled.section`
margin-top:100px;
`;


export default function Evento(){
    return(
    <Event>
        <TextEvent>Eventos</TextEvent>
        <Girls>
        <>
            <Img src={EventosVnw} alt='' />
        </>
        <TecGirl>
            <h2>Tech Girls</h2>
            <p>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</p>
        </TecGirl>
        </Girls>
    </Event>
    )
}
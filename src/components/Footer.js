import React from 'react';
import Fundo from './img/fundoFooter.png';
import Facebook from './img/facebook.png';
import Instagram from './img/instagram.png';
import LinkedIn from './img/linkedin.png';
import Medium from './img/medium.png';
import Youtube from './img/youtube.png';
import styled from 'styled-components'

const TheEnd = styled.div`
background-image: url(${Fundo});
height: 270px;
`;
const Contact = styled.h2`
height:50px;
margin-left:215px;
font: normal normal 800 48px/44px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
text-transform: capitalize;
opacity: 1;
`;
const Redes = styled.section`
display:flex;
margin-top:70px;
margin-left:215px;
`; 
const TextRede = styled.h4`
width: 268px;
height: 94px;
text-align: left;
font: normal normal bold 20px/28px Montserrat;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
`;
const Img = styled.img`
width: 64px;
height: 64px;
margin-right:10px;
`;

export default function Footer(){
    return(
        <TheEnd>
        <Contact>Contato</Contact>
        <Redes>
            <TextRede>Siga nossas redes sociais e fique conectado com todas as novidades.</TextRede>
            <Img src={Facebook} alt="" />
            <Img src={Instagram} alt="" />
            <Img src={LinkedIn} alt="" />
            <Img src={Medium} alt="" />
            <Img src={Youtube} alt="" />
        </Redes>
        </TheEnd>
    )
}
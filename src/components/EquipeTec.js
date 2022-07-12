import React from 'react';
import Dimitri from './img/equipe/DimitriDuque-Voluntarios.jpg';
import Hugo from './img/equipe/HugoSabino-Voluntarios.jpg';
import Karla from './img/equipe/KarlaMelo-Voluntarios.jpg';
import Paula from './img/equipe/PaulaMisan-Voluntarios.jpg';
import Thais from './img/equipe/ThaisBrait-Voluntarios.jpg';
import Aline from './img/equipe/AlineFroes-CEO.jpg';
import AlineNogueira from './img/equipe/AlineNogueira-Agente Socioemocional.jpg';
import Andrea from './img/equipe/AndreaMarinho-Psicóloga.jpg';
import Cris from './img/equipe/CrisPrazeres-Coordenadora Executiva.jpg';
import Karynne from './img/equipe/KarynneMoreira-Facilitadora Técnica.jpg';
import Luzia from './img/equipe/LuziaMerlim-Agente Socioemocional.jpg';
import Mariana from './img/equipe/MarianaCorrea-Coordenadora Administrativa.jpg';
import Marina from './img/equipe/MarinaTiago-Agente de Estratégia.jpg';
import Marlon from './img/equipe/MarlonYuri-Instrutor Técnico.jpg';
import Priscila from './img/equipe/PriscilaTufani-Agente de Estratégia.jpg';
import Pesquisar from './img/pesquisarMain.png';
import styled from 'styled-components';

const Team = styled.div`
width:100%;
`;
const Box = styled.section`
display:flex;
margin-top:10px;
margin-left: 110px;
width: 359px;
height: 364px;
`;
const Img = styled.img`
width: 309px;
height: 304px;
rigth:10px;
`;
const BoxOne = styled.section``;
const BoxTwo = styled.section``;
const BoxThree = styled.section``;
const BoxFour =styled.section``;

const Card = styled.div`
background-color:#0F2260;
margin-top: 30px;
margin-left: 110px;
width: 1240px;
height:49px;
`;
const Input = styled.input`
background-color:#0F2260;
width:250px;
height: 30px;
margin-top:10px;
margin-left:50px;
border: 1px solid #FFFFFF;
border-radius: 4px;
`;
const Name = styled.h3`
display:flex;
align-items:center;
justify-content:center;
`;
const Office = styled.p`
display:flex;
align-items:center;
justify-content:center;
`;
const Title = styled.h2`
font-size:30px;
margin-left:107px;
`;
const FotoOne = styled.div`
width:20%;
`;
export default function Equipe(){
return(
    <Team>
            <Title>Equipe</Title>
            <Card>
            <Input placeholder='pesquisar...' img src={Pesquisar} alt="" />
            </Card>
       <Box>
        <BoxOne>
            <Img src={Dimitri} alt="" />
            <FotoOne>
            <Name>Dimitri Duque</Name>
            <Office>#Voluntarios</Office>
            </FotoOne>
            <Img src={Hugo} alt="" />
            <Name>Hugo Sabino</Name>
            <Office>#Voluntarios</Office>
            <Img src={Karla} alt="" />
            <Name>Karla de Melo</Name>
            <Office>#Voluntarios</Office>
            <Img src={Paula} alt="" />
            <Name>Paula Misan</Name>
            <Office>#Voluntarios</Office>
        </BoxOne>
        <BoxTwo>
            <Img src={Thais} alt="" />
            <Name>Thais Brait</Name>
            <Office>#Voluntarios</Office>
            <Img src={Aline} alt="" />
            <Name>Aline Froes</Name>
            <Office>#CEO</Office>
            <Img src={AlineNogueira} alt="" />
            <Name>Aline Nogueira</Name>
            <Office>#Agente socioemocional</Office>
            <Img src={Andrea} alt="" />
            <Name>Andrea Marinho</Name>
            <Office>#Psicóloga</Office>

        </BoxTwo>
        <BoxThree>
            <Img src={Cris} alt="" />
            <Name>Cris dos Parazeres</Name>
            <Office>#Coordenadora Executiva</Office>
            <Img src={Karynne} alt="" />
            <Name>Karynne Moreira</Name>
            <Office>#Facilitadora Técnica</Office>
            <Img src={Luzia} alt="" />
            <Name>Luzia Merlim</Name>
            <Office>#Agente socioemocional</Office>
            <Img src={Mariana} alt="" />
            <Name>Mariana Correa</Name>
            <Office>#Coordenadora Administrativa</Office>

        </BoxThree>
        <BoxFour>
            <Img src={Marina} alt="" />
            <Name>Marina Tiago</Name>
            <Office>#Agente de Estratégia</Office>
            <Img src={Marlon} alt="" />
            <Name>Marlon Yuri</Name>
            <Office>#Instrutor Técnico</Office>
            <Img src={Priscila} alt="" />
            <Name>Priscila Tufani</Name>
            <Office>#Agente de Estratégia</Office>
        </BoxFour>
        </Box>
    </Team>
)
}
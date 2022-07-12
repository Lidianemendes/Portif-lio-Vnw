import React from 'react';
import Dimitri from './img/equipe/DimitriDuque-Voluntarios.jpg';
import Hugo from './img/equipe/HugoSabino-Voluntarios.jpg';
import Karla from './img/equipe/KarlaMelo-Voluntarios.jpg';
import Paula from './img/equipe/PaulaMisan-Voluntarios.jpg';
import Thais from './img/equipe/ThaisBrait-Voluntarios.jpg';
import Aline from './img/equipe/AlineFroes-CEO.jpg';
import AlineNogueira from './img/equipe/AlineNogueira-Agente-Socioemocional.jpg';
import Andrea from './img/equipe/AndreaMarinho-Psicóloga.jpg';
import Cris from './img/equipe/CrisPrazeres-Coordenadora-Executiva.jpg';
import Karynne from './img/equipe/KarynneMoreira-Facilitadora-Técnica.jpg';
import Luzia from './img/equipe/LuziaMerlim-Agente-Socioemocional.jpg';
import Mariana from './img/equipe/MarianaCorrea-Coordenadora-Administrativa.jpg';
import Marina from './img/equipe/MarinaTiago-Agente-de-Estratégia.jpg';
import Marlon from './img/equipe/MarlonYuri-Instrutor-Técnico.jpg';
import Priscila from './img/equipe/PriscilaTufani-Agente-de-Estratégia.jpg';
import Pesquisar from './img/pesquisarMain.png';
import styled from 'styled-components';

const Team = styled.div`
width:100%;
`;
const Box = styled.section`
display:flex;
flex-direction:column;
justify-content:space-evenly;
margin-top:10px;
margin-left: 110px;
`;
const Img = styled.img`
width: 309px;
height: 304px;
rigth:10px;
`;
const BoxOne = styled.section`
display:flex;
justify-content:space-between;
width:89%;
height:45vh;
border-bottom: solid white 6px;
`;
const BoxTwo = styled.section`
display:flex;
justify-content:space-between;
width:89%;
height:45vh;
border-bottom: solid white 6px;

 
`;
const BoxThree = styled.section`
display:flex;
justify-content:space-between;
width:89%;
height:45vh;
border-bottom: solid white 6px;

`;
const BoxFour =styled.section`
display:flex;
justify-content:space-between;
width:66%;
height:45vh;
`;

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
&::placeholder{
    background-image:url(${Pesquisar})
    background-repeat:no-repeat;
}
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
width:23%;
background-image:url(${Dimitri});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;

`;
const FotoTwo = styled.div`
width:23%;
background-image:url(${Hugo});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoThree = styled.div`
width:23%;
background-image:url(${Karla});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoFour = styled.div`
width:23%;
background-image:url(${Paula});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoFive = styled.div`
width:23%;
background-image:url(${Thais});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoSix = styled.div`
width:23%;
background-image:url(${Aline});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoSeven = styled.div`
width:23%;
background-image:url(${AlineNogueira});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoEight = styled.div`
width:23%;
background-image:url(${Andrea});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoNine = styled.div`
width:23%;
background-image:url(${Cris});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoTeen = styled.div`
width:23%;
background-image:url(${Karynne});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoElven = styled.div`
width:23%;
background-image:url(${Luzia});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoTwoelve = styled.div`
width:23%;
background-image:url(${Mariana});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoThirteen = styled.div`
width:31%;
background-image:url(${Marina});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoFourteen = styled.div`
width:31%;
background-image:url(${Marlon});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;
const FotoFiveteen = styled.div`
width:31%;
background-image:url(${Priscila});
background-repeat:no-repeat;
display:flex;
justify-content:flex-end;
align-items:center;
color:white;
flex-direction:column;
`;


export default function Equipe(){
return(
    <Team>
            <Title>Equipe</Title>
            <Card>
            <Input placeholder='pesquisar...' />
            </Card>
       <Box>
        <BoxOne>
            <FotoOne>
            <Name>Dimitri Duque</Name>
            <Office>#Voluntarios</Office>
            </FotoOne>
            <FotoTwo>
            <Name>Hugo Sabino</Name>
            <Office>#Voluntarios</Office>
            </FotoTwo>
            <FotoThree>
            <Name>Karla de Melo</Name>
            <Office>#Voluntarios</Office>
            </FotoThree>
            <FotoFour>
            <Name>Paula Misan</Name>
            <Office>#Voluntarios</Office>
            </FotoFour>
        </BoxOne>
        <BoxTwo>
            <FotoFive>
            <Name>Thais Brait</Name>
            <Office>#Voluntarios</Office>
            </FotoFive>
            <FotoSix>
            <Name>Aline Froes</Name>
            <Office>#CEO</Office>
            </FotoSix>
            <FotoSeven>
            <Name>Aline Nogueira</Name>
            <Office>#Agente socioemocional</Office>
            </FotoSeven>
            <FotoEight>
            <Name>Andrea Marinho</Name>
            <Office>#Psicóloga</Office>
            </FotoEight>

        </BoxTwo>
        <BoxThree>
            <FotoNine>
            <Name>Cris dos Parazeres</Name>
            <Office>#Coordenadora Executiva</Office>
            </FotoNine>
            <FotoTeen>
            <Name>Karynne Moreira</Name>
            <Office>#Facilitadora Técnica</Office>
            </FotoTeen>
            <FotoElven>
            <Name>Luzia Merlim</Name>
            <Office>#Agente socioemocional</Office>
            </FotoElven>
            <FotoTwoelve>
            <Name>Mariana Correa</Name>
            <Office>#Coordenadora Administrativa</Office>
            </FotoTwoelve>
        </BoxThree>
        <BoxFour>
            <FotoThirteen>
            <Name>Marina Tiago</Name>
            <Office>#Agente de Estratégia</Office>
            </FotoThirteen>
            <FotoFourteen>
            <Name>Marlon Yuri</Name>
            <Office>#Instrutor Técnico</Office>
            </FotoFourteen>
            <FotoFiveteen>
            <Name>Priscila Tufani</Name>
            <Office>#Agente de Estratégia</Office>
            </FotoFiveteen>
        </BoxFour>
        </Box>
    </Team>
)
}
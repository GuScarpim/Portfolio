import React, { useState, useEffect } from 'react';
import './styles.css';
import * as S from './styles.js';

//Components
import AnimatedText from '../../components/AnimatedText';
import { Flipper, Flipped } from "react-flip-toolkit";
import Typist from 'react-typist';

//Bibliotecas
import { Divider } from '@material-ui/core';
import { FlashOnRounded } from '@material-ui/icons';
import { FaReact } from 'react-icons/fa';

import Ponteiro from '../../assets/ponteiro.png';
import Pessoa from '../../assets/pessoa.png';


const Square = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="square" onClick={toggleFullScreen} />
  </Flipped>
)

const FullScreenSquare = ({ toggleFullScreen }) => (
  <Flipped flipId="square">
    <div className="full-screen-square" onClick={toggleFullScreen} >
      <Typist avgTypingDelay={30}
        startDelay={200}>
        <S.TypistContent>
          <h1>Sobre mim</h1>
          <Typist.Delay ms={1} />
          <br />
          <p>
            Olá, me chamo <b>Gustavo Scarpim</b> e tenho 20 anos,
              sou calmo e bem concentrado naquilo que eu faço,
              apaixonado por programação gosto sempre de estar antenado
              nas novas tecnologias do mercado, gosto muito de
              estudar e estou sempre aberto para novos desafios. </p>
          <p>
            Ao longo da minha carreira como programador eu trabalhei
              com várias linguagens de programação como <b> ReactJS</b>,
              <b> React Native</b>,<b> NodeJS</b>,<b> .Net Core</b>,
              <b> JavaScript</b>,<b> MongoDB</b>,<b> SQL</b>,
              desenvolvi muitos projetos utilizando essas linguagens
              mas o projeto mais desafiador foi ter que desenvolver uma
              intranet, onde somente pessoas de uma determinada área pudesse
              postar algo nela, para resolver esse desafio eu desenvolvi duas
              <b> APIs</b> uma em <b> NodeJs</b> para fazer o upload de imagens e para fazer o
              cadastro de dados no <b>mongoDB</b>, e outra em <b>.Net Core</b> para fazer uma
              conexão no AD, assim dando acesso a um grupo específico do AD para
              realizar as postagens na Intranet.
              A linguagem de programação que eu mais gosto de uar é o
              <FaReact color='#00c9ff' className='mb-1' />React, por ser uma linguagem bem
              estruturada e baseada em components, é possível reaproveitar muito código com
              ela, assim podendo criar aplicações poderosas com ela.
          </p>
        </S.TypistContent>
      </Typist>
      {/* <div className='linkdin'>
          <div className="LI-profile-badge" data-version="v1"
            data-size="medium" data-locale="pt_BR" data-type="vertical" data-theme="dark" data-vanity="gustavoscarpim">
            <a class="LI-simple-link" href='https://br.linkedin.com/in/gustavoscarpim?trk=profile-badge'>
              Gustavo Scarpim</a>
          </div>
        </div> */}
    </div>
  </Flipped >
)

export default function Sobre() {
  const [fullScreen, setFullScreen] = useState(!FlashOnRounded)
  const toggleFullScreen = () => setFullScreen(prevState => !prevState)

  return (
    <div className='pageSobre'>
      <div className='icon_pessoa'>
        <img src={Pessoa} alt='Pessoa' />
        <h6>Sobre</h6>
      </div>
      <div className='content_flipper'>
        <Flipper flipKey={fullScreen}>
          {fullScreen ? (
            <FullScreenSquare toggleFullScreen={toggleFullScreen} />
          ) : (
              <Square toggleFullScreen={toggleFullScreen} />
            )}
        </Flipper>
        <img src={Ponteiro} alt='ponteiro' className='ponteiro' />
      </div>
    </div >
  );
}

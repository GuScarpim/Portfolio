import React, { useState, useEffect } from 'react';
import './styles.css';
import * as S from './styles.js';

//Components
import { Flipper, Flipped } from "react-flip-toolkit";
import Typist from 'react-typist';
import { FlashOnRounded } from '@material-ui/icons';
import posed from 'react-pose';

//icons
import { FaReact } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'

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
          <h1>Sobre...</h1>
          <Typist.Delay ms={1} />
          <br />
          <p>
            Olá, me chamo <b>Gustavo Scarpim</b> tenho 20 anos
              e estou em busca de uma oportunidade de atuar como 
              desenvolvedor Front End,
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
              A linguagem de programação que eu mais gosto de usar é o <FaReact color='#00c9ff' className='mb-1' /> React
              , por ser uma linguagem bem
              estruturada e baseada em componentes, é possível reaproveitar muito código com
              ela, assim podendo criar aplicações poderosas.
          </p>
        </S.TypistContent>
      </Typist>
    </div>
  </Flipped >
)

export default function Sobre() {
  const [fullScreen, setFullScreen] = useState(!FlashOnRounded)
  const toggleFullScreen = () => setFullScreen(prevState => !prevState)

  const Perfil = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      scale: 1.2,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
      scale: 1.1,
      boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
  });

  return (
    <div className='pageSobre'>
      <div className='icon_pessoa'>
        <Perfil>
          <button onClick={toggleFullScreen}>
            <img src={Pessoa} alt='Pessoa' />
            <h6>Sobre</h6>
          </button>
        </Perfil>
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
      <S.Contato>
        <h4>Gostou do meu trabalho? Entre em contato comigo</h4>
        <p>
          <b>
            <AiOutlineWhatsApp className='mb-1' /> WhatsApp: +55 (11) 96062-5389
          </b>
        </p>
        <p>
          <b>
            <MdEmail className='mb-1' /> Email: gustavoscarpim@gmail.com
          </b>
        </p>
        <p>
          <b>
            <a href='https://github.com/GuScarpim' target='blank'>
              <AiFillGithub className='mb-1' /> GitHub:
             Clique e acesse o meu GitHub
           </a>
          </b>
        </p>
        <p>
          <b>
            <a href='https://www.linkedin.com/in/gustavoscarpim/' target='blank'>
              <AiFillLinkedin className='mb-1' /> Linkedin:
              Clique e acesse o meu  Linkedin
            </a>
          </b>
        </p>
      </S.Contato>
    </div >
  );
}

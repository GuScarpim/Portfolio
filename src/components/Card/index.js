import React, { useState } from 'react';
import * as S from './styles';

//components
import { Divider } from '@material-ui/core';
import { ProgressBar } from 'react-bootstrap';

//icons
import { FaReact, FaNodeJs, FaAngular, FaJava, FaMobileAlt } from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiDotnet, DiDatabase, DiGithub } from 'react-icons/di';

//Animacao
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card({ icon, click }) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  return (
    <S.Content>
      <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <S.IconPerfil icon={icon}>
         {icon === 1 ? 
          <FaReact className='FaReact'/> :
          icon === 2 ? 
          <FaMobileAlt className='FaMobileAlt'/> :
          icon === 3 ?
          <FaNodeJs className='FaNodeJs'/> : 
          icon === 4 ?
          <DiJavascript1 className='DiJavascript1'/> :
          icon === 5 ?
          <FaAngular className='FaAngular'/> :
          icon === 6 ?
          <FaJava className='FaJava'/> :
          icon === 7 ?
          <DiDotnet className='DiDotnet'/> :
          icon === 8 ?
          <DiGithub className='DiGithub'/> :
          icon === 9 ?
          <DiMongodb className='DiMongodb'/> :
          icon === 10 ?
          <DiDatabase className='DiDatabase'/> : ''
        }
        </S.IconPerfil>
        <S.Titulo>
        {icon === 1 ?
          <div> 
            <h2>React</h2>
            <Divider className='mb-3'/>
            <S.ProgressBarContent>
              <ProgressBar now={80} label={'80%'} className='mb-2' />
                <p>O React é uma biblioteca JavaScript 
                baseada em componentes criada para auxiliar
                no desenvolvimento web.
                </p>
                <p>Ela é a minha linguagem de programação favorita
                já desenvolvi diversos projetos com ela, consumindo APIs
                de todo o tipo.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 2 ?
          <div> 
          <h2>Mobile React Native</h2>
            <Divider className='mb-3' />
            <S.ProgressBarContent>
              <ProgressBar now={50} label={'50%'} className='mb-2' />
                <p>O React Native é uma biblioteca JavaScript 
                baseada em componentes criada para auxiliar
                no desenvolvimento mobile.
                </p>
                <p>Ela é a segunda linguagem de programação que eu mais gosto
                já desenvolvi alguns projetos com ela, consumindo APIs
                de todo o tipo.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 3 ?
           <div> 
            <h2>NodeJS</h2> 
            <Divider className='mb-3'/>
           <ProgressBar now={50} label={'50%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>O NodeJs é um runtime JavaScript 
                projetado para criar aplicativos 
                de rede escaláveis em seu BackEnd.
                </p>
                <p>Utilizo muito o Node junto com o MongoDB
                para criar APIs, considerada uma linguagem 'simples'
                porém com um 'poder' imenso no BackEnd.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 4 ?
           <div> 
            <h2>JavaScript</h2>
            <Divider className='mb-3'/>
           <ProgressBar now={60} label={'60%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>O Javascript é uma linguagem de programação
                   que permite implementar funcionalidades mais 
                   complexas em páginas web.
                </p>
                <p>Ela foi umas das primeiras linguagens que eu aprendi
                  com base nela eu consegui ir evoluinto até chegar 
                  no React e React Native.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 5 ?
           <div> 
            <h2>AngularJS</h2>
            <Divider className='mb-3'/>
           <ProgressBar now={40} label={'40%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>AngularJS é um <i>framework</i> JavaScript 
                utilizado para criar aplicativos dinâmicos e interativos
                em HTML.
                </p>
                <p>Eu utilizei o AngularJS poucas vezes, ainda não tenho
                  o total domínio da linguagem, mas possuo uma noção boa
                  sobre ele.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 6 ?
           <div> 
            <h2>Java</h2>
            <Divider className='mb-3'/>
           <ProgressBar now={40} label={'40%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>Java é uma linguagem de programação segura e confiável
                  e de alta performance, ela é muito 'verborosa' mas
                  ainda é uma das linguagens mais utilizadas no mundo.
                </p>
                <p>Java foi a primeira linguagem que eu aprendi,
                  hoje eu só a utilizo na faculdade.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 7 ?
           <div> 
            <h2>.Net Core</h2>
            <Divider className='mb-3'/>
           <ProgressBar now={45} label={'45%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>.Net Core é um framework do C#
                  ela é muito utilizada por ser rápida e possuí
                  um bom desempenho e uma boa confiabilidade.
                </p>
                <p>Utilizei ela para criar uma API, e utilizava no 
                  meu antigo trabalho para dar manutenção em sistemas
                  feito por ele, ela é muito parecida com Java.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 8 ?
           <div> 
            <h2>Git</h2>
            <Divider className='mb-3'/>
           <ProgressBar now={75} label={'75%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>O Git é um sistema de controle de versão 
                  de arquivos. Ele nos permite que várias pessoas
                  trabalharem no mesmo código.
                </p>
                <p>Utilizo o Git para tudo, ele é uma ótima ferramenta
                  para manter o controle e organização dos meus sistemas.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 9 ?
           <div> 
            <h2>MongoDB</h2>
              <Divider className='mb-3'/>
           <ProgressBar now={60} label={'60%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>O MongoDB é um banco de dados NoSQL, muito
                  utilizado para projetos que não possuem relações,
                  ele é um banco de alta performance e segurança.
                </p>
                <p>MongoDB é o banco em que eu mais gostei
                  de trabalhar, por ser fácil de se manipular e rápido, 
                  ele é ótimo para ser utilizado com o NodeJS.
                </p>
            </S.ProgressBarContent>
          </div> :
          icon === 10 ?
           <div> 
            <h2>SQL Server</h2>
            <Divider className='mb-3'/>
           <ProgressBar now={65} label={'65%'} className='mb-2' />
            <S.ProgressBarContent>
                <p>SQL é um banco de dados muito poderoso e relacional,
                  ele é o banco mais utilizado no mundo inteiro.
                </p>
                <p>Eu utilizo muito o SQL na faculdade, e utilizei bastante
                  em alguns projetos onde eu trabalhava, gosto muito de 
                  trabalhar com ele.
                </p>
            </S.ProgressBarContent>
          </div> : ''
        }
          
        </S.Titulo>
        
      </animated.div>
    </S.Content >
  );
}
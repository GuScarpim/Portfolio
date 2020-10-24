import React, { useState } from 'react'
import * as S from './styles.js';
import './styles.css';

import Bounce from 'react-reveal/Bounce';
import PjCard from '../../components/Card/pjcard';
import Seta from '../../assets/seta.png';
import Locadora from '../../assets/locadora.gif'
import Next from '../../assets/next_google.gif'

import ReactNative from '../../assets/ReactNativeCep-cropet.gif';
import Api from '../../assets/api.gif';

export default function Sobre() {

  return (
    <div className='pageProjetos'>
      <Bounce left>
        <S.Titulo>
          <span>Conheça alguns dos meus projetos</span>
        </S.Titulo>
        <S.Container>
          <PjCard
            titulo='Private Route React/Node.Js/JWT'
            linkGitHub='https://github.com/GuScarpim/React-Login-PrivateRoute'
            gifGit='https://github.com/GuScarpim/React-Login-PrivateRoute/raw/master/myapp/src/img/ReactLoginGuScarpim.gif'
            subTitulo='Projeto para criação de usuários e bloqueio de rotas
              utilizando ReactJS, NodeJS e mongoDB.'
            descricao='Desenvolvi esse projeto para demonstrar como guardar um token no Local-Storage
              do Browser.'
            linkApi='https://github.com/GuScarpim/React-Login-PrivateRoute/tree/master/API'
            linkFront='https://github.com/GuScarpim/React-Login-PrivateRoute/tree/master/myapp'
          />
          <PjCard
            titulo={
              <a href="https://guscarpim.github.io/BuscarCep-React/index" target="_blank" style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}>
                Buscar Cep ReactJs
              </a>}
            linkGitHub='https://guscarpim.github.io/BuscarCep-React/index'
            gifGit='https://user-images.githubusercontent.com/47616551/73510308-742b5480-43c0-11ea-995e-cfed2c876874.gif'
            subTitulo='Demostrando como fazer o consumo de APIs públicas.'
            descricao='Desenvolvi esse projeto para demonstrar uma das maneiras de
              fazer um ComboBox e tabela dinâmica, e com validar o endereço com o CEP.'
            linkApi='https://viacep.com.br/'
            linkFront='https://guscarpim.github.io/BuscarCep-React/index'
          />
          <PjCard
            titulo='Google/Private Route NextJs(SSR)'
            linkGitHub='https://github.com/GuScarpim/Next_Google_Route_Private'
            gifGit={Next}
            subTitulo='Demostrando como fazer autenticação com o Google e
              deixar rotas privadas.'
            descricao='Desenvolvi esse projeto para demonstrar uma maneira de 
              deixar as suas rotas serem acessadas somente depois que fizer o login com
              o google.'
            noneApi={true}
            linkFront='https://github.com/GuScarpim/Next_Google_Route_Private'
          />
          <PjCard
            titulo='Locadora de Filmes ReactJS'
            linkGitHub='https://github.com/GuScarpim/Filmes_KRS'
            gifGit={Locadora}
            subTitulo='Esse projeto foi desenvolvido como um desafio do grupo 
              KRS.'
            descricao='Para solucionar esse desafio da Locadora eu desenvolvi uma 
            API em NodeJS com MongoDB e o FrontEnd foi feito em React Hooks com 
            Styled Component.'
            linkApi='https://github.com/GuScarpim/Filmes_KRS/tree/master/api'
            linkFront='https://github.com/GuScarpim/Filmes_KRS/tree/master/web'
          />
          <PjCard
            titulo={
              <a href="https://guscarpim.github.io/Vue_Search_Repos/" target="_blank" style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}>
                Vue Search Repos
              </a>}
            linkGitHub='https://guscarpim.github.io/Vue_Search_Repos/'
            gifGit={'https://github.com/GuScarpim/Vue_Search_Repos/blob/master/src/assets/vue.gif?raw=true'}
            subTitulo='Projeto desenvolvido para consultar Usuários e Repositórios do GitHub.'
            descricao='Esse projeto foi desenvolvido para demonstrar um consumo de API fornecida pelo
              GitHub, permitindo pesquisar usuários e os seus repositórios dentro do GitHub.'
            linkApi='https://api.github.com/users'
            linkFront='https://guscarpim.github.io/Vue_Search_Repos/'
          />
          <PjCard
            titulo='Buscar Cep React Native'
            linkGitHub='https://github.com/GuScarpim/Consulta-CEP-React-Native'
            gifGit={ReactNative}
            subTitulo='Demonstando como fazer o uso de APIs públicas com React Native.'
            descricao='Projeto desenvolvido para estudos em React Native, mostrando de forma simples
              o uso do Axios para consumo de APIs com o React Native.'
            linkApi='https://viacep.com.br/'
            linkFront='https://github.com/GuScarpim/Consulta-CEP-React-Native'
          />
          <PjCard
            titulo='.Net Core API - AD Group'
            linkGitHub='https://github.com/GuScarpim/.NetCoreAPI_AD_Group'
            gifGit={Api}
            subTitulo='API em DotNet Core com autenticação por grupos do AD do windows.'
            descricao='Essa é uma API simples porém com uma funcionalidade ENORME, além 
              de conseguir utiliza-lá para se conectar com o AD, ela também permite fazer 
              uma autenticação dentro de um grupo específico do AD.'
            linkApi='https://github.com/GuScarpim/.NetCoreAPI_AD_Group'
            noneFront={true}
          />
          <PjCard
            titulo='Projeto acadêmico JavaPOO'
            linkGitHub='https://github.com/GuScarpim/ProjetoAcademicoJavaPOO'
            gifGit='https://github.com/GuScarpim/ProjetoAcademicoJavaPOO/raw/master/ProjetoPOO/gif/cadastramento_alunos.gif'
            subTitulo='Projeto acadêmico JavaPOO'
            descricao='Desenvolvi esse projeto para um trabalho na minha universidade, ele 
              demonstra um Forms em Java que serve para cadastrar alunos e matérias sem
              o uso de banco de dados.'
            noneApi={true}
            linkFront='https://github.com/GuScarpim/ProjetoAcademicoJavaPOO'
          />
        </S.Container>
        <div className='position_gif'>
          <img src={Seta} className='gif_sobre' />
        </div>
      </Bounce>
    </div>
  )
}

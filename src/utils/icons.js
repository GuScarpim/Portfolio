import React from 'react';
import './styles.css';

// Icones
import { FaReact, FaNodeJs, FaAngular, FaJava, FaMobileAlt, FaVuejs } from 'react-icons/fa';
import { DiJavascript1, DiMongodb, DiDotnet, DiDatabase, DiGithub } from 'react-icons/di';
import NextJs from '../assets/next.svg';

const typeIcons = [
  null, //posicao 0 nao vai ter
  <FaReact className='FaReact' />,
  <img src={NextJs} alt="Icon Next" className='NextIcon' />,
  <FaMobileAlt className='FaMobileAlt' />,
  <FaVuejs className='FaVue' />,
  <FaNodeJs className='FaNodeJs' />,
  <DiJavascript1 className='DiJavascript1' />,
  <FaAngular className='FaAngular' />,
  <FaJava className='FaJava' />,
  <DiDotnet className='DiDotnet' />,
  <DiGithub className='DiGithub' />,
  <DiMongodb className='DiMongodb' />,
  <DiDatabase className='DiDatabase' />,
]

export default typeIcons;
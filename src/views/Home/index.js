import React, { useState, useEffect } from 'react';
import * as S from './styles.js';
import './styles.css';

//Components
import Header from '../../components/Menu';
import Card from '../../components/Card/';
import AnimatedText from '../../components/AnimatedText';
import AnimatedTextIcon from '../../components/AnimatedText/selecione';
import ScrollAnimetd from '../../components/AnimatedSroll';
import posed from 'react-pose';
import Seta from '../../assets/seta.png';

//Bibliotecas
import { Divider } from '@material-ui/core';

//icons
import TypeIcons from '../../utils/icons';


export default function Home() {
  const [type, setType] = useState();
  const [icon, setIcon] = useState();
  const Icons = posed.div({
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

  function Icon(index, icon) {
    setType(index)
    setIcon(index)
  }

  return (
    <div className='page'>
        {/* <Header /> */}
      <S.Container>
        <ScrollAnimetd />
        <br />
        <S.TypeIcons>
          {TypeIcons.map((icon, index) => (
            index > 0 &&
            <button type='button' onClick={() => Icon(index, icon)}>
              <Icons>
                <i className={type && type != index && 'inative'}>{icon}</i>
              </Icons>
            </button>
          ))}
        </S.TypeIcons>
        <S.ContaintCard>
          {icon > 0 &&
            <Card icon={icon} />
          }
        </S.ContaintCard>
        <AnimatedTextIcon />
        <div className='content_gif'>
          <img src={Seta} className='gif' />
        </div>
      </S.Container >
    </div>
  );
}

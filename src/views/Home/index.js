import React, { useState, useEffect } from 'react';
import * as S from './styles.js';
import './styles.css';

//Components
import Card from '../../components/Card/';
import AnimatedTextIcon from '../../components/AnimatedText';
import ScrollAnimetd from '../../components/AnimatedScroll';
import posed from 'react-pose';
import Seta from '../../assets/seta.png';
import SetaCima from '../../assets/setacima.png';

//icons
import TypeIcons from '../../utils/icons';


export default function Home() {
  const [type, setType] = useState();
  const [icon, setIcon] = useState();
  const [desc, setDesc] = useState(true);
  const [seta, setSeta] = useState(true);

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
    setSeta(false)
    setInterval(() => {
      setDesc(false)
    }, 900);
  }

  return (
    <div className='page'>
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
              {seta ?
                <img src={SetaCima} className='seta_cima' alt='Seta para cima' />
                : ''
              }
            </button>
          ))}
        </S.TypeIcons>
        <S.ContaintCard>
          {icon > 0 &&
            <Card icon={icon} />
          }
        </S.ContaintCard>
        <div className='texto_animado'>
          {desc && <AnimatedTextIcon /> }
        </div>
        <div className='content_gif'>
          <img src={Seta} className='gif' />
        </div>
      </S.Container >
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import * as S from './styles.js';
import './styles.css';

//Components
import Header from '../../components/Menu';
import Card from '../../components/Card/';
import AnimatedText from '../../components/AnimatedText';
import ScrollAnimetd from '../../components/AnimatedSroll';

//Bibliotecas
import { Divider } from '@material-ui/core';

//icons
import TypeIcons from '../../utils/icons';

export default function Home() {
  const [type, setType] = useState();
  const [icon, setIcon] = useState();

  function Icon(index, icon) {
    setType(index)
    setIcon(index)
  }

  return (
    <S.Container>
      <ScrollAnimetd />
      <Header />
      <br />
      <S.TypeIcons>
        {TypeIcons.map((icon, index) => (
          index > 0 && <button type='button' onClick={() => Icon(index, icon)}>
            <i className={type && type != index && 'inative'}>{icon}</i>
          </button>
        ))}
      </S.TypeIcons>
      <S.ContaintCard>
        {icon > 0 &&
          <Card icon={icon} />
        }
      </S.ContaintCard>
      <div className='espacamento' />
        <S.Content>
          <AnimatedText />
          <Divider />
        </S.Content>
    </S.Container >
  );
}

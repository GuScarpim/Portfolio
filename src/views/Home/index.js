import React, { useState } from 'react';
import * as S from './styles.js';

//Components
import Header from '../../components/Header';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactCardFlip from 'react-card-flip';

//icons
import TypeIcons from '../../utils/icons';

export default function Home() {
  const [type, setType] = useState();
  const [isFlipped, setIsFlipped] = useState(false);


  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <S.Container>
      <Header />
      <S.TypeIcons>
        {TypeIcons.map((icon, index) => (
          index > 0 && <button type='button' onClick={() => setType(index)}>
            <img src={icon} alt='Icones das minhas Skills'
              className={type && type != index && 'inative'} />
            {type && type != index ?
              <S.SetaNone />
              : type > 0 ?
                <S.SetaContainer>
                  <S.Seta />
                  <ProgressBar animated now={45} className={'progressBar'} />
                </S.SetaContainer> : <S.SetaNone />
            }

          </button>
        ))}
      </S.TypeIcons>
      <S.ContaintCard>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <S.Front_card>
          <button onClick={() => handleClick()}>Click to flip</button>
          </S.Front_card>

          <S.Back_card>
          <button onClick={() => handleClick()}>Click to flip</button>
          </S.Back_card>
        </ReactCardFlip>
      </S.ContaintCard>
    </S.Container>
  );
}
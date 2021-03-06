import React from 'react';
import * as S from './styles';

//components
import SplitText from 'react-pose-text';

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};
export default function AnimatedText({ description }) {
  return (
    <S.Container>
      {description ? '' :
      <SplitText
          initialPose="exit" pose="enter"
          charPoses={charPoses} className='font_icone'>
          Conheça algumas das minhas habilidades
          clicando no ícone acima...
      </SplitText> 
    }
    </S.Container>
  )
}

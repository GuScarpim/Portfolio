import React from 'react';
import * as S from './styles';

// Components
import { Divider } from '@material-ui/core';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

// Icons
import { FaReact } from 'react-icons/fa';
import Api from '../../assets/api.png';

export default function PjCard({ titulo, linkGitHub, gifGit, subTitulo, descricao, linkApi, linkFront, noneApi, noneFront }) {
  return (
    <S.ContainerCard>
      <S.CardObj>
        <h5>{titulo}</h5>
        <Divider className='mb-2' />
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
          Clique para acessar a página no GitHub!</Tooltip>}>
          <a href={linkGitHub} target='blank' >
            <img src={gifGit}
              className='gifanimated' />
          </a>
        </OverlayTrigger>
        <Divider className='mt-2' />
        <p className='font_p'>{subTitulo}</p>
        <p className='font_p'>{descricao}</p>
        <S.FooterCard>
          {noneApi ? '' :
            <OverlayTrigger className={noneApi ? 'hidden' : ''} overlay={<Tooltip id="tooltip-disabled">
              Clique para acessar a API!</Tooltip>}>
              <a href={linkApi} target='blank'>
                <img src={Api} alt='Icone API' />
              </a>
            </OverlayTrigger> 
          }
          {noneFront ? '' :
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
              Clique para acessar o FrontEnd!</Tooltip>}>
              <a href={linkFront} target='blank'>
                <FaReact color='#00D8FF' className='frontReact' />
              </a>
            </OverlayTrigger> 
          }
        </S.FooterCard>
      </S.CardObj>
    </S.ContainerCard>
  )
}
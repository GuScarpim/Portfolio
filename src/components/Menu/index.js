import React, { useState } from 'react';
import * as S from './styles';

import { FaHome, FaReact } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';

import { Divider } from '@material-ui/core'

import { push as Menu } from 'react-burger-menu';

function Header() {
  return (
    <S.Container>
      <Menu width={350} >
        <h2>
          <span className="span_titulo">Gustavo Scarpim</span>
        </h2>
        <Divider />
        <a className="bm-item" tabindex="0" href="#"><FaHome /><span>HOME</span></a>
        <Divider />
        <a className="bm-item" tabindex="0" href="#"><FaReact /><span>PROJETOS</span></a>
        <Divider />
        <a className="bm-item" tabindex="0" href="#"><IoMdContact /><span>CONTATO</span></a>
        <Divider />
      </Menu>
    </S.Container>
  )
}
export default Header;

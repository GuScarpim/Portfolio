import React from 'react';
import ReactDOM from 'react-dom';
// import * as S from './styles.js';
// import './styles.css';

import Home from './views/Home';
import Sobre from './views/Sobre'
import Projetos from './views/Projetos'

import Scroll from './components/Scroll'

import Excel from './views/Export';

ReactDOM.render(
  <React.StrictMode>
      <Home />
      <Projetos />
      <Sobre />
      <Scroll />
  </React.StrictMode>,
  document.getElementById('root')
);


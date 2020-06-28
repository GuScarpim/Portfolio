import React from 'react';
import ReactDOM from 'react-dom';
// import * as S from './styles.js';
// import './styles.css';

import Home from './views/Home';
import Sobre from './views/Sobre'

import Teste from './components/NameAnimated'

import Excel from './views/Export';

ReactDOM.render(
  <React.StrictMode>
      <Home />
      <Sobre />
  </React.StrictMode>,
  document.getElementById('root')
);


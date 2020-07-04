import React from 'react';
import ReactDOM from 'react-dom';
import './index_public.css';

import Home from './views/Home';
import Sobre from './views/Sobre'
import Projetos from './views/Projetos'

import Scroll from './components/Scroll'

ReactDOM.render(
  <React.StrictMode>
      <Home />
      <Projetos />
      <Sobre />
      <Scroll />
  </React.StrictMode>,
  document.getElementById('root')
);

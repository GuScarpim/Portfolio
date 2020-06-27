import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './styles.js';

import Home from './views/Home';

import Excel from './views/Export';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);


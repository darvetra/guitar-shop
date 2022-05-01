import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {guitarList} from './mocks/guitars';

ReactDOM.render(
  <React.StrictMode>
    <App products={guitarList} />
  </React.StrictMode>,
  document.getElementById('root'));

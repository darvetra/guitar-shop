import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {guitarList} from './mocks/guitars';

// Доделать. Должен подтягиваться товар на который произведен клик, а не первый из массива
const product = guitarList[0];

ReactDOM.render(
  <React.StrictMode>
    <App
      products={guitarList}
      product={product}
    />
  </React.StrictMode>,
  document.getElementById('root'));

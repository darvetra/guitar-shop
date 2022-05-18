import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app';
import {reducer} from './store/reducer';

import {guitarList} from './mocks/guitars';
import {reviewList} from './mocks/reviews';

// Доделать. Должен подтягиваться товар на который произведен клик, а не первый из массива
const product = guitarList[0];

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        products={guitarList}
        product={product}
        reviews={reviewList}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

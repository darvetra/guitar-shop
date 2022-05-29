import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {api} from './services/api';
import {ThunkAppDispatch} from './types/action';
import {fetchGuitars} from './store/api-actions';

import App from './components/app/app';
import {reducer} from './store/reducer';

import {guitarList} from './mocks/guitars';
import {reviewList} from './mocks/reviews';

// Доделать. Должен подтягиваться товар на который произведен клик, а не первый из массива
const product = guitarList[0];

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
  ),
});

(store.dispatch as ThunkAppDispatch)(fetchGuitars());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        product={product}
        reviews={reviewList}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

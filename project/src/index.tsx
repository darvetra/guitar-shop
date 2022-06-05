import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {api} from './services/api';
import {ThunkAppDispatch} from './types/action';
import {fetchGuitars} from './store/api-actions';
import App from './components/app/app';
import {rootReducer} from './store/root-reducer';

const store = configureStore({
  reducer: rootReducer,
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
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

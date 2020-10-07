import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import ReduxProvider from './Redux/ReduxProvider'


ReactDOM.render(
  <Provider store={store}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Provider>,
  document.getElementById('root')
);

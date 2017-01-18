import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';
import App from './containers/Main/app';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('.container'));

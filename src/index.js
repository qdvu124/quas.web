import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';

import App from './components/app';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.querySelector('.container'));

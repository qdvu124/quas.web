import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index';

import App from './components/app';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('.container'));

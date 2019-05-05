import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

import AppRouter from './AppRouter';
import rootReducer from './reducers/rootReducer';

import 'typeface-roboto';
import './style/main.less';
import 'font-awesome/css/font-awesome.min.css';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);

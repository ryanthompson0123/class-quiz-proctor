import 'babel-polyfill';
import patchDestructuring from 'extensible-polyfill';
patchDestructuring('immutable');
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import io from 'socket.io-client';
import configureStore from './store/configureStore';
import { setState } from './actions/actionCreators.js';
import './styles/class-quiz-main.scss';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const store = configureStore(socket);

socket.on('state', state => 
    store.dispatch(setState(state))
);

render(
    <Root store={store} />,
    document.getElementById('root')
);

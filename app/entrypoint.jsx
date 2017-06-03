import 'babel-polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss';
import store from './store/store';
import ExampleApp from './components/ExampleApp';

ReactDOM.render(
    <Provider store={store}>
        <ExampleApp />
    </Provider>,
    document.getElementById('content')
);
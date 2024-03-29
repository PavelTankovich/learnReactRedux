import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/redux/App';
import store from './components/redux/store';
import { Provider } from 'react-redux';

ReactDOM.render((
    <Provider store={ store }>
        <App />
    </Provider>
), document.querySelector('#root'));
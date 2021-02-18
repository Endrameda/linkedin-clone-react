import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    // <React.StrictMode> // Commented because: FlipMove Error Warning: Using UNSAFE_componentWillReceiveProps in
    // strict mode is not recommended and may indicate bugs in your code.
    <Provider store={ store }>
        <App/>
    </Provider>
    /*</React.StrictMode>*/,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

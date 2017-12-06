import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { unregister } from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(

    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router >

    , document.getElementById('root'));
unregister();
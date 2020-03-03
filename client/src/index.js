// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import {BrowserRouter as Router} from 'react-router-dom';
// global themes and style injections
import { Reset } from './styles/Reset';
import { GlobalStyles } from './styles/Global';
// components
import App from './App';

ReactDOM.render(
    <Router>
        <Reset />
        <GlobalStyles />
        <App />
    </Router>, 
    document.getElementById('root'));
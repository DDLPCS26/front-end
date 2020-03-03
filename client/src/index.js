// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import {BrowserRouter as Router} from 'react-router-dom';
// global themes and style injections
import { GlobalStyles } from './styles/Global';
// components
import App from './App';

ReactDOM.render(
    <Router>
        <GlobalStyles />
        <App />
    </Router>, 
    document.getElementById('root'));
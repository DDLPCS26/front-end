// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import {BrowserRouter as Router, Route} from 'react-router-dom';
// global themes and style injections
import { Reset } from './styles/Reset';
import { GlobalStyles } from './styles/Global';
// components
import App from './App';

ReactDOM.render(
    <Router>
        <Reset />
        <GlobalStyles />
        <Route path='/' render={(props) => <App history={props.history} location={props.location} match={props.match} />} />
    </Router>, 
    document.getElementById('root'));
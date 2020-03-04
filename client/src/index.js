// react
import React from 'react';
import ReactDOM from 'react-dom';
// router
import {BrowserRouter as Router, Route} from 'react-router-dom';
// global themes and style injections
import { Reset } from './styles/Reset';
import { GlobalStyles } from './styles/Global';
// contexts
import { DefaultTheme, colorPalette } from './contexts/DefaultTheme';
// components
import App from './App';

ReactDOM.render(
    <Router>
        <Reset />
        <GlobalStyles />
        <DefaultTheme.Provider value={{colors: colorPalette}}>
            <Route path='/' render={(props) => <App history={props.history} location={props.location} match={props.match} />} />
        </DefaultTheme.Provider>
    </Router>, 
    document.getElementById('root'));
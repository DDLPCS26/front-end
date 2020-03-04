// react
import React from 'react';
// router
import { Route } from 'react-router-dom';
// components
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import Landing from './views/landing';

const App = props => {

  return (
    <>
      <Route path='/' component={MainNavigation} />
      <Route exact path='/home' component={Landing} />
      <Route path='/' component={Footer} />
    </>
  );
}

export default App;

// react
import React from 'react';
// router
import { Route } from 'react-router-dom';
// components
import MainNavigation from './components/MainNavigation';
import Landing from './views/landing';

const App = props => {
  console.log(props);
  return (
    <>
      <Route path='/' component={MainNavigation} />
      <Route exact path='/home' component={Landing} />
    </>
  );
}

export default App;

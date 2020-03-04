// react
import React from 'react';
// router
import { Route } from 'react-router-dom';
// components
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import Landing from './views/landing';
import Login from './views/user/Login';
import Register from './views/user/Register'
import GameDashboard from './views/game/index';

const App = props => {

  return (
    <>
      <Route path='/' component={MainNavigation} />
      <Route exact path='/home' component={Landing} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/dashboard' component={GameDashboard} />
      <Route path='/' component={Footer} />
    </>
  );
}

export default App;

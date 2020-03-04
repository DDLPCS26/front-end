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
      {/* the game dashboard needs to move to a private route in production */}
      {/* im also pathing it to /about for the time being so that there is a menu button for it */}
      <Route exact path='/about' component={GameDashboard} />
      <Route path='/' component={Footer} />
    </>
  );
}

export default App;

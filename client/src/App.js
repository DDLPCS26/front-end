// react
import React from 'react';
// router
import { Route } from 'react-router-dom';
// components
import Landing from './views/landing'

const App = props => {
  console.log(props);
  return (
    <>
      <Route path='/' component={Landing} />
    </>
  );
}

export default App;

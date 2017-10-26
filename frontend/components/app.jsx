import React from 'react';

import MainHeaderContainer from './header/main_header_container';
import MainContainer from './main/main_container';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../util/route_util';

const App = () => (
  <div>
    <MainHeaderContainer />
    <MainContainer />
  </div>
);

export default App;

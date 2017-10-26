import React from 'react';
import { Route } from 'react-router-dom';

import MainHeaderContainer from './header/main_header_container';
import MainContainer from './main/main_container';
import MainShowContainer from './main/main_show_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" component={MainHeaderContainer} />
    <Route exact path="/" component={ MainContainer } />
    <ProtectedRoute path="/users/:userId" component={ MainShowContainer } />
  </div>
);

export default App;

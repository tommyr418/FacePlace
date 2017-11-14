import React from 'react';
import { Route } from 'react-router-dom';

import { ProtectedRoute } from '../util/route_util';
import MainHeaderContainer from './header/main_header_container';
import MainContainer from './main/main_container';
import MainShowContainer from './main-show/main_show_container';
import MainFooterContainer from './footer/main_footer_container';

const App = () => (
  <div>
    <Route path="/" component={MainHeaderContainer} />
    <Route exact path="/" component={ MainContainer } />
    <Route exact path="/" component={ MainFooterContainer }/>
    <ProtectedRoute path="/users/:userId" component={ MainShowContainer } />
  </div>
);

export default App;

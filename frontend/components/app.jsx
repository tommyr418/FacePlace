import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../util/route_util';
import Header from './header/header_container';
import MainContainer from './main/main_container';
import MainShowContainer from './main-show/main_show_container';
import MainFooterContainer from './footer/footer_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div className="app">
    <div
      className="app-first-child">
      <Route path="/" component={Header} />

      <Switch>
        <ProtectedRoute path="/search/users" component={ SearchContainer } />
        <ProtectedRoute path="/users/:userId" component={ MainShowContainer } />
        <Route exact path="/" component={ MainContainer } />
      </Switch>
    </div>

    <Route exact path="/" component={ MainFooterContainer }/>
  </div>
);

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../util/route_util';
import Header from './header/header_container';
import MainContainer from './main/main_container';
import MainShowContainer from './main-show/main_show_container';
import MainFooterContainer from './footer/main_footer_container';
import SearchContainer from './search/search_container';

const App = () => (
  <div className='app'>
    <Route path="/" component={Header} />

    <Switch>
      <ProtectedRoute path="/search/users" component={ SearchContainer } />
      <ProtectedRoute path="/users/:userId" component={ MainShowContainer } />
      <Route exact path="/" component={ MainContainer } />
    </Switch>
    
    <Route exact path="/" component={ MainFooterContainer }/>
  </div>
);

export default App;

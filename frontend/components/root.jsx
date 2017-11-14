import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';
import ScrollToTop from '../util/scroll_util';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <ScrollToTop>
        <App store={ store }/>
      </ScrollToTop>
    </HashRouter>
  </Provider>
);

export default Root;

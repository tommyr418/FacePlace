import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { requestUser,
  addProfile,
  updateProfile,
  removeProfile } from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if(window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.requestUser = requestUser;
  window.addProfile = addProfile;
  window.updateProfile = updateProfile;
  window.remove = removeProfile;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});

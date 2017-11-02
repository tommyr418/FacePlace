import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

import { fetchPosts, fetchPost } from './actions/post_actions';

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
  window.fetchPosts = fetchPosts;
  window.fetchPost = fetchPost;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});

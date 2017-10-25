import React from 'react';
import LoginFormContainer from './header/login_form_container';
import UserNavContainer from './header/user_nav_container';

const App = ({ store } ) => {
  if(store.getState().session.currentUser){
    return (
      <div>
        <header id="header-main">
          <h1>FacePlace!!</h1>

          <UserNavContainer />
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <h1>FacePlace!!</h1>

          <LoginFormContainer />
        </header>
      </div>
    );
  }
};

export default App;

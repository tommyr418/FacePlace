import React from 'react';
import LoginFormContainer from './login_form_container';
import UserNavContainer from './user_nav_container';

class MainHeader extends React.Component {
  render () {
    if(this.props.currentUser){
      return (
        <header id="header-main">
          <h1>FacePlace!!</h1>

          <UserNavContainer />
        </header>
      );
    } else {
      return (
        <header>
          <h1>FacePlace!!</h1>

          <LoginFormContainer />
        </header>
      );
    }
  }
}

export default MainHeader;

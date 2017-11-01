import React from 'react';
import LoginForm from './login_form';
import UserNav from './user_nav';

class MainHeader extends React.Component {
  render () {
    if(this.props.currentUser){
      return (
        <header id="header-main-logged-in">
          <div id="header-left-logged-in">
            <div id="logo">fP</div>
            <input type="text" id="search-bar"></input>
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>

          <UserNav currentUser={ this.props.currentUser }
            logout={ this.props.logout }
            fetchRequesters={ this.props.fetchRequesters }/>
        </header>
      );
    } else {
      return (
        <header id="header-main">
          <h1>facePlace</h1>

          <LoginForm login={ this.props.login }
            errors={ this.props.errors }/>
        </header>
      );
    }
  }
}

export default MainHeader;

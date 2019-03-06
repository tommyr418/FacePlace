import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import LoginForm from './login_form/login_form';
import UserNav from './user_nav';
import SearchBar from './search_bar/search_bar';

class Header extends Component {

  render () {
    if(this.props.currentUser){
      return (
        <div id="header-main-logged-in">
          <div id="header-left-logged-in">
            <a href="/"><div id="logo">fP</div></a>
            <SearchBar { ...this.props }/>
          </div>

          <UserNav currentUser={ this.props.currentUser }
            users={ this.props.users }
            logout={ this.props.logout }
            fetchRequesters={ this.props.fetchRequesters }
            addFriend={ this.props.addFriend }
            updateRequest={ this.props.updateRequest }/>
        </div>
      );
    } else {
      return (
        <div className="header">
          <div
            className="header-logged-out-div">
            <h1>facePlace</h1>

            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default Header;

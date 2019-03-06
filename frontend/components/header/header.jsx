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
        <div className="header header-logged-in">
          <div className="header-logged-in-div">
            <div className="header-logged-in-div-left">
              <Link to="/">
                <div className="header-logo">
                  <span>fP</span>
                </div>
              </Link>

              <SearchBar { ...this.props }/>
            </div>

            <UserNav currentUser={ this.props.currentUser }
              users={ this.props.users }
              logout={ this.props.logout }
              fetchRequesters={ this.props.fetchRequesters }
              addFriend={ this.props.addFriend }
              updateRequest={ this.props.updateRequest }/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header header-logged-out">
          <div className="header-logged-out-div">
            <h1>facePlace</h1>

            <LoginForm />
          </div>
        </div>
      );
    }
  }
}

export default Header;

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.css';
import LoginForm from './login_form/login_form';
import UserNav from './user_nav/user_nav';
import SearchBar from './search_bar/search_bar';
import LogoLink from './logo_link/logo_link';

const Header = (props) => {
  if(props.currentUser){
    return (
      <div className="header header-logged-in">
        <div className="header-logged-in-div">
          <div className="header-logged-in-div-left">
            <LogoLink />

            <SearchBar history={ props.history }/>
          </div>

          <UserNav currentUser={ props.currentUser }/>
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
};

const mapStateToProps = (state) => (
  {
    currentUser: state.session.currentUser,
  }
);

export default connect(
  mapStateToProps,
  null
)(Header);

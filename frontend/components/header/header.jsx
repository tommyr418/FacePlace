import React from 'react';
import { connect } from 'react-redux';

import './header.css';
import LoginForm from './login_form/login_form';
import UserNav from './user_nav/user_nav';
import SearchBar from './search_bar/search_bar';
import LogoLink from './logo_link/logo_link';

const Header = (props) => {
  const { currentUser, history } = props;

  if(props.currentUser){
    return (
      <div className="header header-logged-in">
        <div className="header-logged-in-div">
          <div className="header-logged-in-div-left">
            <LogoLink />

            <SearchBar history={ history }/>
          </div>

          <UserNav currentUser={ currentUser }/>
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);

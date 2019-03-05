import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import './header.css';
import LoginForm from './login_form/login_form';
import UserNav from './user_nav';

class Header extends Component {

  state = {
    search: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.search === "") {
      return;
    }

    this.props.history.push(`/search/users?search=${
      this.state.search.split(' ').join('_')
    }`);
    e.currentTarget.children[0].value = "";
    this.setState({
      search: "",
    });
  }

  handleChange = (e) => {
    this.setState({
      search: e.currentTarget.value,
    });
  }

  render () {
    if(this.props.currentUser){
      return (
        <div id="header-main-logged-in">
          <div id="header-left-logged-in">
            <a href="/"><div id="logo">fP</div></a>
            <form onSubmit={ this.handleSubmit }>
              <input type="text" id="search-bar"
                onChange={ this.handleChange }
                defaultValue="Search here for Simpsons, Game of Thrones characters"
                onBlur={ this.handleBlur }
                onFocus={ this.handleFocus }>
              </input>
              <button>
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './login_form.css';
import { login } from '../../../actions/session_actions';

class LoginForm extends Component {
  
  state = {
    email: "",
    password: "",
    errors: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }


  handleInputChange = (feild) => {
    return (e) => this.setState({
      [feild]: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    if (errors.length > prevProps.errors.length) {
      this.setState({
        errors: errors[0].text,
      });
    }
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit } className="login-form">
        { this.state.errors &&
          <span className="login-form-error">{ this.state.errors }</span>
        }

        <div
          className="login-form-container">
          <label>Email</label>
          <input type="text"
            value={ this.state.email }
            onChange={ this.handleInputChange('email')}
            className={classNames({ 'error': this.state.errors })}>
          </input>
        </div>

        <div
          className="login-form-container">
          <label>Password</label>
          <input type="password"
            value={ this.state.password }
            onChange={ this.handleInputChange('password')}
            className={classNames({ 'error': this.state.errors })}>
          </input>
        </div>

        <button>Log In</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

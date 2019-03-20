import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length > 0 &&
      newProps.errors[0].responseJSON[0] === "Invalid Email or Password") {
      this.setState({
        email: "",
        password: "",
        errors: "Invalid Email or Password",
      });
    }
  }

  removeErrors = () => {
    setTimeout(() => {
      this.setState({errors: ""});
    }, 2500);
  }

  render () {
    if (this.state.errors) {
      this.removeErrors();
    }
    return (
      <form onSubmit={ this.handleSubmit } className="login-form">
        { this.state.errors ?
          <span id="login-error">{ this.state.errors }</span>
          :
          ""
        }

        <div>
          <label>Email</label>
          <input type="text"
            value={ this.state.email }
            onChange={ this.handleInputChange('email')}></input>
        </div>

        <div>
          <label>Password</label>
          <input type="password"
            value={ this.state.password }
            onChange={ this.handleInputChange('password')}></input>
        </div>

        <button>Log In</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => (
  {
    errors: state.errors.session,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    login: (user) => dispatch(login(user)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

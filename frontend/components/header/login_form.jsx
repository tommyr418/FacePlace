import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleInputChange(feild){
    return (e) => this.setState({
      [feild]: e.currentTarget.value
    });
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit } id="login-form">
        <div>
          <label>Email
            <input type="text"
              value={ this.state.email }
              onChange={ this.handleInputChange('email')}></input>
          </label>
        </div>

        <div>
          <label>Password
            <input type="password"
              value={ this.state.password }
              onChange={ this.handleInputChange('password')}></input>
          </label>
        </div>

        <button>Login</button>
      </form>
    );
  }
}

export default LoginForm;

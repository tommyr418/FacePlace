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
    let errors = "";
    if (this.props.errors.length > 0 &&
      this.props.errors[0].responseJSON[0] === "Invalid Email or Password") {
      alert("Invalid Email or Password");
      this.props.clearSessionErrors();
    }
    return (
      <form onSubmit={ this.handleSubmit } id="login-form">
        <div>
          <label>Email</label>
          <input type="email"
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

export default LoginForm;

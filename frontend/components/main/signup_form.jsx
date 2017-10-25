import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "email",
      password: "password",
      fname: "first name",
      lname: "last name",
      birthdate: "",
      sex: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  handleInputChange(feild){
    return (e) => this.setState({
      [feild]: e.currentTarget.value
    });
  }

  handleOptionChange(e) {
    this.setState({
      sex: e.currentTarget.value,
    });
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit } id="signup-form">
        <h1> Create a New Account </h1>
        <h2> It's free and always will be. </h2>
        <input type="text"
          value={ this.state.fname }
          onChange={ this.handleInputChange('fname')}></input>

        <input type="text"
          value={ this.state.lname }
          onChange={ this.handleInputChange('lname')}></input>

        <input type="text"
          value={ this.state.email }
          onChange={ this.handleInputChange('email')}></input>

        <input type="password"
          value={ this.state.password }
          onChange={ this.handleInputChange('password')}></input>

        <label>Birthday
          <input type="date"
            value={ this.state.birthdate }
            onChange={ this.handleInputChange('birthdate')}></input>
        </label>

        <div className="radio">
          <label>
            <input type="radio" name="sex" value="male"
              onChange={ this.handleOptionChange }/>
            Male
          </label>

          <label>
            <input type="radio" name="sex" value="female"
              onChange={ this.handleOptionChange }/>
            Female
          </label>
        </div>

        <button>Create Account</button>
      </form>
    );
  }
}

export default SignupForm;

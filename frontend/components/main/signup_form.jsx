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
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleFocus(e) {
    if (e.currentTarget.value === e.currentTarget.defaultValue) {
      e.currentTarget.value = "";
      e.currentTarget.style.color = "#333";
      if (e.currentTarget.defaultValue === "password") {
        e.currentTarget.type = "password";
      }
    }
  }

  handleBlur(e) {
    if (e.currentTarget.value === "") {
      e.currentTarget.style.color = "#a6a6a6";
      e.currentTarget.value = e.currentTarget.defaultValue;
      if (e.currentTarget.defaultValue === "password") {
        e.currentTarget.type = "text";
      }
    }
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit } id="signup-form">
        <h1> Create a New Account </h1>
        <h2> It's free and always will be. </h2>

        <div>
          <input type="text" className="signup-form-name"
            onChange={ this.handleInputChange('fname')}
            defaultValue="first name"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }>
          </input>

          <input type="text" className="signup-form-name"
            onChange={ this.handleInputChange('lname')}
            defaultValue="last name"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }>
          </input>
        </div>

        <input type="text"
          onChange={ this.handleInputChange('email')}
          defaultValue="email"
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }>
        </input>

        <input type="text"
          onChange={ this.handleInputChange('password')}
          defaultValue="password"
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }></input>

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

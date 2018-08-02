import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      birthdate: "",
      sex: "",
      errors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
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

  componentWillReceiveProps(newProps) {
    if (newProps.errors.length > 0 &&
      newProps.errors[0].responseJSON[0] !== "Invalid Email or Password") {
      this.setState({
        errors: newProps.errors[0].responseJSON.map((error, index) => {
        return (
          <span key={ index }>{ error }</span>
        );
      })});
    }
  }

  renderErrors() {
    return (
      <div id="signup-errors">
        { this.state.errors }
      </div>
    );
  }

  removeErrors() {
    setTimeout(() => {
      this.setState({errors: ""});
    }, 2500);
  }

  render () {
    if (this.state.errors) {
      this.removeErrors();
    }

    const errorStyling = {
      border: '1px solid #bd4c4a'
    };

    return (
      <form onSubmit={ this.handleSubmit } id="signup-form">
        <h1> Create a New Account </h1>
        <h2> It's free and always will be. </h2>

        <div>
          <input type="text" className="signup-form-name"
            onChange={ this.handleInputChange('fname')}
            defaultValue="first name"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            style={
              this.state.errors &&
              this.props.errors[0].responseText.includes("Fname")
              ?
              errorStyling
              :
              null}>
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
          <br/>
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

        { this.state.errors ? this.renderErrors() : "" }
      </form>
    );
  }
}

export default SignupForm;

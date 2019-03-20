import React from 'react';
import ReactToolTip from 'react-tooltip';

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
      newProps.errors[0].text !== "Invalid Email or Password") {
      const errorObj = {};
      newProps.errors.forEach((error) => {
        errorObj[error.source] = error.text;
      });
      this.setState({
        errors: errorObj,
      });
    } else {
      this.setState({
        errors: "",
      });
    }
  }

  render () {
    const errorStyling = {
      border: '1px solid #bd4c4a'
    };

    const errorSources = this.props.errors.map(error => error.source);

    return (
      <form onSubmit={ this.handleSubmit } id="signup-form">
        <h1> Create a New Account </h1>
        <h2> It's free and always will be. </h2>

        <div className="name-div">
          <div className="input-div-name">
            <input type="text" className="signup-form-name"
              onChange={ this.handleInputChange('fname')}
              defaultValue="first name"
              onFocus={ this.handleFocus }
              onBlur={ this.handleBlur }
              style={
                this.state.errors &&
                errorSources.includes("fname")
                ?
                errorStyling
                :
                null}>
              </input>
              {
                this.state.errors &&
                errorSources.includes("fname")
                ?
                <div>
                  <i className="fa fa-exclamation-circle error-icon"
                    data-tip data-for="fname-tooltip"></i>
                  <ReactToolTip id="fname-tooltip" type="error">
                    <span>{ this.state.errors['fname'] }</span>
                  </ReactToolTip>
                </div>
                :
                null
              }
          </div>

          <div className="input-div-name">
            <input type="text" className="signup-form-name"
              onChange={ this.handleInputChange('lname')}
              defaultValue="last name"
              onFocus={ this.handleFocus }
              onBlur={ this.handleBlur }
              style={
                this.state.errors &&
                errorSources.includes("lname")
                ?
                errorStyling
                :
                null}>
              </input>
              {
                this.state.errors &&
                errorSources.includes("lname")
                ?
                <div>
                  <i className="fa fa-exclamation-circle error-icon"
                    data-tip data-for="lname-tooltip"></i>
                  <ReactToolTip id="lname-tooltip" type="error">
                    <span>{ this.state.errors['lname'] }</span>
                  </ReactToolTip>
                </div>
                :
                null
              }
          </div>
        </div>

        <div className="input-div">
          <input type="text"
            onChange={ this.handleInputChange('email')}
            defaultValue="email"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            style={
              this.state.errors &&
              errorSources.includes("email")
              ?
              errorStyling
              :
              null}>
            </input>
            {
              this.state.errors &&
              errorSources.includes("email")
              ?
              <div>
                <i className="fa fa-exclamation-circle error-icon"
                  data-tip data-for="email-tooltip"></i>
                <ReactToolTip id="email-tooltip" type="error">
                  <span>{ this.state.errors['email'] }</span>
                </ReactToolTip>
              </div>
              :
              null
            }
        </div>

        <div className="input-div">
          <input type="text"
            onChange={ this.handleInputChange('password')}
            defaultValue="password"
            onFocus={ this.handleFocus }
            onBlur={ this.handleBlur }
            style={
              this.state.errors &&
              errorSources.includes("password")
              ?
              errorStyling
              :
              null}>
            </input>
            {
              this.state.errors &&
              errorSources.includes("password")
              ?
              <div>
                <i className="fa fa-exclamation-circle error-icon"
                  data-tip data-for="password-tooltip"></i>
                <ReactToolTip id="password-tooltip" type="error">
                  <span>{ this.state.errors['password'] }</span>
                </ReactToolTip>
              </div>
              :
              null
            }
        </div>

        <label>Birthday
          <br/>
          <div className="input-div">
            <input type="date"
              value={ this.state.birthdate }
              onChange={ this.handleInputChange('birthdate')}
              style={
                this.state.errors &&
                errorSources.includes("birthdate")
                ?
                errorStyling
                :
                null}>
              </input>
              {
                this.state.errors &&
                errorSources.includes("birthdate")
                ?
                <div>
                  <i className="fa fa-exclamation-circle error-icon-bday"
                    data-tip data-for="birthdate-tooltip"></i>
                  <ReactToolTip id="birthdate-tooltip" type="error">
                    <span>{ this.state.errors['birthdate'] }</span>
                  </ReactToolTip>
                </div>
                :
                null
              }
          </div>
        </label>

        <div className="radio">
          <label
            className="radio-label"
            style={
              this.state.errors &&
              errorSources.includes("sex")
              ?
              errorStyling
              :
              null}>
            <input type="radio" name="sex" value="male"
              onChange={ this.handleOptionChange }/>
            Male
          </label>

          <label
            className="radio-label"
            style={
              this.state.errors &&
              errorSources.includes("sex")
              ?
              errorStyling
              :
              null}>
            <input type="radio" name="sex" value="female"
              onChange={ this.handleOptionChange }/>
            Female
          </label>

          {
            this.state.errors &&
            errorSources.includes("sex")
            ?
            <div>
              <i className="fa fa-exclamation-circle error-icon"
                data-tip data-for="sex-tooltip"></i>
              <ReactToolTip id="sex-tooltip" type="error">
                <span>{ this.state.errors['sex'] }</span>
              </ReactToolTip>
            </div>
            :
            null
          }
        </div>

        <button>Create Account</button>
      </form>
    );
  }
}

export default SignupForm;

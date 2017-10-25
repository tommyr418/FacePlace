import React from 'react';
import SignupForm from './signup_form';

class Main extends React.Component {
  render() {
    let errors = "";
    if (this.props.errors.length > 0) {
      errors = this.props.errors[0].responseJSON[0];
    }

    if(this.props.currentUser) {
      return (
        <div id="main">

        </div>
      );
    } else {
      return (
        <div id="main">
          <span id="session-errors">{errors}</span>

          <SignupForm signup={ this.props.signup }/>
        </div>
      );
    }
  }
}

export default Main;

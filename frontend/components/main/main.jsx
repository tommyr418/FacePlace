import React from 'react';
import SignupForm from './signup_form';

class Main extends React.Component {
  render() {
    if(this.props.currentUser) {
      return (
        <div id="main">

        </div>
      );
    } else {
      return (
        <div id="main">
          <SignupForm signup={ this.props.signup }/>
        </div>
      );
    }
  }
}

export default Main;

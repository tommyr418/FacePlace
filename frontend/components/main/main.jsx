import React from 'react';
import SignupForm from './signup_form';

class Main extends React.Component {
  render() {
    if(this.props.currentUser) {
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div>
          <SignupForm signup={ this.props.signup }/>
        </div>
      );
    }
  }
}

export default Main;

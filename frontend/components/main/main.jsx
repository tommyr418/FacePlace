import React from 'react';
import SignupForm from './signup_form';

class Main extends React.Component {
  render() {
    let errors = "";
    if (this.props.errors.length > 0 &&
      this.props.errors[0].responseJSON[0] !== "Invalid Email or Password") {
      errors = this.props.errors[0].responseJSON.join("\n");
      alert(errors);
      this.props.clearSessionErrors();
    }

    if(this.props.currentUser) {
      return (
        <div id="main">

        </div>
      );
    } else {
      return (
        <div id="main">
          <div id="main-front-left">
            <h1>Connect with friends and the world around you on FacePlace.</h1>

            <div>
              <i className="fa fa-newspaper-o" aria-hidden="true"></i>
              <h2>See photos and updates</h2>
              <h3>from friends in News Feed.</h3>
            </div>

            <div>
              <i className="fa fa-desktop" aria-hidden="true"></i>
              <h2>Share what's new</h2>
              <h3>in your life on your Timeline.</h3>
            </div>

            <div>
              <i className="fa fa-share-alt" aria-hidden="true"></i>
              <h2>Find more</h2>
              <h3>of what you're looking for with Facebook Search.</h3>
            </div>
          </div>

          <SignupForm signup={ this.props.signup }/>
        </div>
      );
    }
  }
}

export default Main;

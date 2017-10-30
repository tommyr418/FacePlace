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
              <h3>of what you're looking for with FacePlace Search.</h3>
            </div>
          </div>

          <SignupForm signup={ this.props.signup }
            errors={ this.props.errors }/>
        </div>
      );
    }
  }
}

export default Main;

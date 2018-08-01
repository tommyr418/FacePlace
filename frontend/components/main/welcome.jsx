import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomer = this.handleHomer.bind(this);
    this.handleJon = this.handleJon.bind(this);
  }

  handleHomer(e){
    e.preventDefault();
    e.stopPropagation();
    const user = {
      email: "homer@yahoo.com",
      password: "homersimpson",
    };
    this.props.login(user);
  }

  handleJon(e) {
    e.preventDefault();
    e.stopPropagation();
    const user = {
      email: "jon@yahoo.com",
      password: "jontargaryen",
    };
    this.props.login(user);
  }

  render() {
    return (
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

        <h2>Explore without creating an account now!</h2>
        <h3>Try out a demo account as either Homer Simpson or
        Jon Snow below</h3>

        <div id="demo-buttons">
          <button
            onClick={ this.handleHomer }>I am Homer Simpson</button>
          <button
            onClick={ this.handleJon }>I Know Nothing</button>
        </div>
      </div>
    );
  }
}

export default Welcome;

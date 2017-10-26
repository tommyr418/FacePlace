import React from 'react';
import CoverPhoto from './cover_photo';
import ProfileNav from './profile_nav';

class MainShow extends React.Component {
  render() {
    return (
      <div id="main-show">
        <CoverPhoto currentUser={ this.props.currentUser }/>
        <ProfileNav currentUser={ this.props.currentUser }/>
      </div>
    );
  }
}

export default MainShow;

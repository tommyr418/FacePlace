import React from 'react';
import CoverPhoto from './cover_photo';
import ProfileNav from './profile_nav';

class MainShow extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.userId);
  }

  render() {
    if(!this.props.user) {
      return (
        <div></div>
      );
    }

    return (
      <div id="main-show">
        <CoverPhoto user={ this.props.user }/>
        <ProfileNav user={ this.props.user }/>
      </div>
    );
  }
}

export default MainShow;

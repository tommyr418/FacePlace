import React from 'react';
import { Route } from 'react-router-dom';

import CoverPhoto from './cover_photo';
import ProfileNav from './profile_nav';
import MainAboutContainer from './about/main_about_container';

class MainShow extends React.Component {
  componentDidMount() {
    this.props.requestUser(this.props.userId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.userId !== this.props.userId) {
      this.props.requestUser(newProps.match.params.userId);
    }
  }

  componentDidUpdate() {
  }

  render() {
    if(!this.props.user) {
      return (
        <div></div>
      );
    }

    return (
      <div id="main-show">
        <CoverPhoto user={ this.props.user }
          currentUser={ this.props.currentUser }
          updateProfilePic={ this.props.updateProfilePic }/>
        <ProfileNav user={ this.props.user }/>

        <Route path="/users/:userId/about" component={ MainAboutContainer }/>
      </div>
    );
  }
}

export default MainShow;

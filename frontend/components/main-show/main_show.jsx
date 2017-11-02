import React from 'react';
import { Route } from 'react-router-dom';

import CoverPhoto from './cover_photo';
import ProfileNav from './profile_nav';
import MainAboutContainer from './about/main_about_container';
import FriendsContainer from './friends/friends_container';
import TimelineIntroContainer from './timeline/timeline_intro_container';
import TimelineWallContainer from './timeline/timeline_wall_container';

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
          updatePhoto={ this.props.updatePhoto }
          sendRequest={ this.props.sendRequest }/>
        <ProfileNav user={ this.props.user }/>

        <Route exact path="/users/:userId"
          component={ TimelineIntroContainer } />
        <Route exact path="/users/:userId"
          component={ TimelineWallContainer } />
        <Route path="/users/:userId/about" component={ MainAboutContainer }/>
        <Route path="/users/:userId/about" component={ FriendsContainer } />
        <Route path="/users/:userId/friends" component={ FriendsContainer } />
      </div>
    );
  }
}

export default MainShow;

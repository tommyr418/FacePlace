import React from 'react';
import { Route } from 'react-router-dom';

import TimelineIntroContainer from './timeline_intro_container';
import TimelineWallContainer from './timeline_wall_container';
import FriendsSummaryContainer from '../friends/friends_summary_container';

const TimelineContent = () => (
  <div id="timeline-content">
    <Route exact path="/users/:userId"
      component={ TimelineIntroContainer } />
    <Route exact path="/users/:userId"
      component={ FriendsSummaryContainer } />
    <Route exact path="/users/:userId"
      component={ TimelineWallContainer } />
  </div>
);

export default TimelineContent;

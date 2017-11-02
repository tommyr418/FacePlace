import React from 'react';
import { Route } from 'react-router-dom';

import TimelineIntroContainer from './timeline_intro_container';
import TimelineWallContainer from './timeline_wall_container';

const TimelineContent = () => (
  <div id="timeline-content">
    <Route exact path="/users/:userId"
      component={ TimelineIntroContainer } />
    <Route exact path="/users/:userId"
      component={ TimelineWallContainer } />
  </div>
);

export default TimelineContent;

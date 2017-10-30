import React from 'react';
import { Route } from 'react-router-dom';

import AboutCategories from './about_categories';
import AboutOverviewContainer from './about_overview_container';
import AboutWorkAndEducationContainer from
  './about_work_and_education_container';
import AboutPlacesYouveLivedContainer from
  './about_places_youve_lived_container';

class MainAbout extends React.Component {
  render() {
    return (
      <div id="main-about">
        <div id="main-about-title">

          <a>About</a>
        </div>

        <div id="main-about-content">
          <AboutCategories userId={this.props.userId}/>
          <Route exact path="/users/:userId/about"
            component={ AboutOverviewContainer }/>
          <Route path="/users/:userId/about/workAndEducation"
            component={ AboutWorkAndEducationContainer }/>
          <Route path="/users/:userId/about/placesYouveLived"
            component={ AboutPlacesYouveLivedContainer }/>
        </div>
      </div>
    );
  }
}

export default MainAbout;

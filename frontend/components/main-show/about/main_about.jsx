import React from 'react';
import { Route } from 'react-router-dom';

import AboutCategories from './about_categories';
import AboutOverveiwContainer from './about_overveiw_container';

class MainAbout extends React.Component {
  render() {
    return (
      <div id="main-about">
        <div id="main-about-title">

          <a>About</a>
        </div>

        <div>
          <AboutCategories userId={this.props.userId}/>
          <Route path="/users/:userId/about"
            component={ AboutOverveiwContainer }/>
        </div>
      </div>
    );
  }
}

export default MainAbout;

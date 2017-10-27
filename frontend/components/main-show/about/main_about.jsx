import React from 'react';

import AboutCategories from './about_categories';

class MainAbout extends React.Component {
  render() {
    return (
      <div id="main-about">
        <div id="main-about-title">

          <a>About</a>
        </div>

        <div>
          <AboutCategories userId={this.props.userId}/>
        </div>
      </div>
    );
  }
}

export default MainAbout;

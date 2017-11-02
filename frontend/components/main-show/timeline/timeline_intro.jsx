import React from 'react';

class TimelineIntro extends React.Component {
  render () {
    const keys = Object.keys(this.props.profile);
    const categories = keys.slice(1);
    const subCategories = categories.map((category) => {
      return Object.keys(this.props.profile[category]);
    });
    const items = [];

    for (var i = 0; i < categories.length; i++) {
      for (var j = 0; j < subCategories[i].length; j++) {
        items.push(this.props.profile[categories[i]][subCategories[i][j]]);
      }
    }

    const flattened = items.reduce(
      (acc, el) => acc.concat(el),
      []
    );

    const overview = flattened.map((item, index) => {
      return (
        <li key={ index }>
          <span>{ item["value"] }</span>
        </li>
      );
    });


    return (
      <div id="timeline-intro">
        <div id="intro-title">
          <div id="intro-logo">
            <i class="fa fa-globe" aria-hidden="true"></i>
          </div>
          <span>Intro</span>
        </div>

        <ul>
          {overview}
        </ul>
      </div>
    );
  }
}

export default TimelineIntro;

import React from 'react';
import { Link } from 'react-router-dom';

class TimelineIntro extends React.Component {
  render () {
    if(!this.props.profile) {
      return null;
    }

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

    if (this.props.currentUser.id !== this.props.user.id
      && overview.length === 0) {
      return null;
    }


    return (
      <div id="timeline-intro">
        <div id="intro-title">
          <div id="intro-logo">
            <i className="fa fa-globe" aria-hidden="true"></i>
          </div>
          <span>Intro</span>
        </div>

        {
          this.props.user.id === this.props.currentUser.id
          && overview.length === 0 ?
          <div id="timeline-link">
            <span>Looks Like we don't know anything about you.</span>
            <br/>
            <Link to={ `/users/${this.props.currentUser.id}/about` }>
              Add some imformation about yourself now!
            </Link>
          </div>
          :
          <ul>
            {overview}
          </ul>
        }
      </div>
    );
  }
}

export default TimelineIntro;

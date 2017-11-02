import React from 'react';

class AboutWorkAndEducation extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.removeProfile(e.currentTarget.getAttribute("data"));
  }

  render() {
    if(this.props.profile["workAndEducation"]) {
      return (
        <div className="about-details">
          <label>Work</label>
          {
            this.props.profile["workAndEducation"]["work"] ?
            <ul>
              { this.props.profile["workAndEducation"]["work"].map(
                (item) =>
                <li key={ item.id }>
                { item["value"] }
                <div>
                  <button>edit</button>
                  <button
                    onClick={ this.handleDelete }
                    data={ item.id }>delete</button>
                </div>
              </li>) }
            </ul>
            :
            null
          }

          <label>Professional Skills</label>
          {
            this.props.profile["workAndEducation"]["professionalSkills"] ?
            <ul>
              { this.props.profile["workAndEducation"]["professionalSkills"].map(
                (item) =>
                <li key={ item.id }>
                { item["value"] }
                <div>
                  <button>edit</button>
                  <button
                    onClick={ this.handleDelete }
                    data={ item.id }>delete</button>
                </div>
              </li>) }
            </ul>
            :
            null
          }

          <label>College</label>
          {
            this.props.profile["workAndEducation"]["college"] ?
            <ul>
              { this.props.profile["workAndEducation"]["college"].map(
                (item) =>
                <li key={ item.id }>
                { item["value"] }
                <div>
                  <button>edit</button>
                  <button
                    onClick={ this.handleDelete }
                    data={ item.id }>delete</button>
                </div>
              </li>) }
            </ul>
            :
            null
          }

          <label>High School</label>
          {
            this.props.profile["workAndEducation"]["highSchool"] ?
            <ul>
              { this.props.profile["workAndEducation"]["highSchool"].map(
                (item) =>
                <li key={ item.id }>
                { item["value"] }
                <div>
                  <button>edit</button>
                  <button
                    onClick={ this.handleDelete }
                    data={ item.id }>delete</button>
                </div>
              </li>) }
            </ul>
            :
            null
          }
        </div>
      );
    } else{
      return (
        <div className="about-details">
          <label>Work</label>

          <label>Professional Skills</label>

          <label>College</label>

          <label>High School</label>
        </div>
      );
    }
  }
}

export default AboutWorkAndEducation;

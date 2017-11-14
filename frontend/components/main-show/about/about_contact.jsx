import React from 'react';

class AboutContact extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.removeProfile(e.currentTarget.getAttribute("data"));
  }

  render() {
    if(this.props.profile["contactAndBasicInfo"]) {
      return (
        <div className="about-details">
          <label>Contact Information</label>
          {
            this.props.profile["contactAndBasicInfo"]["contactInformation"] ?
            <ul>
              { this.props.profile["contactAndBasicInfo"]["contactInformation"].map(
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

          <label>Websites and Social links</label>
          {
            this.props.profile["contactAndBasicInfo"]["websitesAndSocialLinks"] ?
            <ul>
              { this.props.profile["contactAndBasicInfo"]["websitesAndSocialLinks"].map(
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

          <label>Basic Information</label>
          {
            this.props.profile["contactAndBasicInfo"]["basicInformation"] ?
            <ul>
              { this.props.profile["contactAndBasicInfo"]["basicInformation"].map(
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
          <label>Contact Information</label>

          <label>Websites and Social links</label>

          <label>Basic Information</label>
        </div>
      );
    }
  }
}

export default AboutContact;

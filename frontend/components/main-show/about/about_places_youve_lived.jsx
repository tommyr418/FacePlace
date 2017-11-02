import React from 'react';

class AboutPlacesYouveLived extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.removeProfile(e.currentTarget.getAttribute("data"));
  }

  render() {
    if(this.props.profile["placesYouveLived"]) {
      return (
        <div className="about-details">
          <label>Current City and Hometown</label>
          {
            this.props.profile["placesYouveLived"]["currentCityAndHometown"] ?
            <ul>
              { this.props.profile["placesYouveLived"]["currentCityAndHometown"].map(
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

          <label>Other Places Lived</label>
          {
            this.props.profile["placesYouveLived"]["otherPlacesLived"] ?
            <ul>
              { this.props.profile["placesYouveLived"]["otherPlacesLived"].map(
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
          <label>Current City and Hometown</label>

          <label>Other Places Lived</label>
        </div>
      );
    }
  }
}

export default AboutPlacesYouveLived;

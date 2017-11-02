import React from 'react';

class AboutDetailsAboutYou extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.removeProfile(e.currentTarget.getAttribute("data"));
  }

  render() {
    if(this.props.profile["detailsAboutYou"]) {
      return (
        <div className="about-details">
          <label>About you</label>
          {
            this.props.profile["detailsAboutYou"]["aboutYou"] ?
            <ul>
              { this.props.profile["detailsAboutYou"]["aboutYou"].map(
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

          <label>Name Pronunciation</label>
          {
            this.props.profile["detailsAboutYou"]["namePronunciation"] ?
            <ul>
              { this.props.profile["detailsAboutYou"]["namePronunciation"].map(
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

          <label>Other Names</label>
          {
            this.props.profile["detailsAboutYou"]["otherNames"] ?
            <ul>
              { this.props.profile["detailsAboutYou"]["otherNames"].map(
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

          <label>Favorite Quotes</label>
          {
            this.props.profile["detailsAboutYou"]["favoriteQuotes"] ?
            <ul>
              { this.props.profile["detailsAboutYou"]["favoriteQuotes"].map(
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
          <label>About You</label>

          <label>Name Pronunciation</label>

          <label>Other Names</label>

          <label>Favorite Quotes</label>
        </div>
      );
    }
  }
}

export default AboutDetailsAboutYou;

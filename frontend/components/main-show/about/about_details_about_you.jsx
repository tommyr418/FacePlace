import React from 'react';

const AboutDetailsAboutYou = ({ profile, userId }) => {
  if(profile["detailsAboutYou"]) {
    return (
      <div className="about-details">
        <label>About you</label>
        {
          profile["detailsAboutYou"]["aboutYou"] ?
          <ul>
            { profile["detailsAboutYou"]["aboutYou"].map(
              (item) =>
              <li key={ item.id }>
              { item["value"] }
              <div>
                <button>edit</button>
                <button>delete</button>
              </div>
            </li>) }
          </ul>
          :
          null
        }

        <label>Name Pronunciation</label>
        {
          profile["detailsAboutYou"]["namePronunciation"] ?
          <ul>
            { profile["detailsAboutYou"]["namePronunciation"].map(
              (item) =>
              <li key={ item.id }>
              { item["value"] }
              <div>
                <button>edit</button>
                <button>delete</button>
              </div>
            </li>) }
          </ul>
          :
          null
        }

        <label>Other Names</label>
        {
          profile["detailsAboutYou"]["otherNames"] ?
          <ul>
            { profile["detailsAboutYou"]["otherNames"].map(
              (item) =>
              <li key={ item.id }>
              { item["value"] }
              <div>
                <button>edit</button>
                <button>delete</button>
              </div>
            </li>) }
          </ul>
          :
          null
        }

        <label>Favorite Quotes</label>
        {
          profile["detailsAboutYou"]["favoriteQuotes"] ?
          <ul>
            { profile["detailsAboutYou"]["favoriteQuotes"].map(
              (item) =>
              <li key={ item.id }>
              { item["value"] }
              <div>
                <button>edit</button>
                <button>delete</button>
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
};

export default AboutDetailsAboutYou;

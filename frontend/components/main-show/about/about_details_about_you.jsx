import React from 'react';

const AboutDetailsAboutYou = ({ profile, userId }) => {
  if(profile["detailsAboutYou"]) {
    return (
      <div className="about-details">
        <label>About you</label>
        {
          profile["detailsAboutYou"]["aboutYou"] ?
          <span>
            { profile["detailsAboutYou"]["aboutYou"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Name Pronunciation</label>
        {
          profile["detailsAboutYou"]["namePronunciation"] ?
          <span>
            { profile["detailsAboutYou"]["namePronunciation"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Other Names</label>
        {
          profile["detailsAboutYou"]["otherNames"] ?
          <span>
            { profile["detailsAboutYou"]["otherNames"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Favorite Quotes</label>
        {
          profile["detailsAboutYou"]["favoriteQuotes"] ?
          <span>
            { profile["detailsAboutYou"]["favoriteQuotes"].map(
              item => item["value"]) }
          </span>
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

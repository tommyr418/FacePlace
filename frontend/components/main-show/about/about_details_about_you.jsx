import React from 'react';

const AboutDetailsAboutYou = ({ profile, userId }) => {
  if(profile["detailsAboutYou"]) {
    return (
      <div className="about-details">
        <label>About you</label>
        <span>
          { profile["detailsAboutYou"]["aboutYou"].map(
            item => item["value"]) }
        </span>

        <label>Name Pronunciation</label>
        <span>
          { profile["detailsAboutYou"]["namePronunciation"].map(
            item => item["value"]) }
        </span>

        <label>Other Names</label>
        <span>
          { profile["detailsAboutYou"]["otherNames"].map(
            item => item["value"]) }
        </span>

        <label>Favorite Quotes</label>
        <span>
          { profile["detailsAboutYou"]["favoriteQuotes"].map(
            item => item["value"]) }
        </span>
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

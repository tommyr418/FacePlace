import React from 'react';

const AboutPlacesYouveLived = ({ profile, userId }) => {
  if(profile["placesYouveLived"]) {
    return (
      <div className="about-details">
        <label>Current City and Hometown</label>
        {
          profile["placesYouveLived"]["currentCityAndHometown"] ?
          <span>
            { profile["placesYouveLived"]["currentCityAndHometown"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Other Places Lived</label>
        {
          profile["placesYouveLived"]["otherPlacesLived"] ?
          <span>
            { profile["placesYouveLived"]["otherPlacesLived"].map(
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
        <label>Current City and Hometown</label>

        <label>Other Places Lived</label>
      </div>
    );
  }
};

export default AboutPlacesYouveLived;

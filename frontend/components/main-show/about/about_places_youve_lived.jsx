import React from 'react';

const AboutPlacesYouveLived = ({ profile, userId }) => {
  if(profile["placesYouveLived"]) {
    return (
      <div className="about-details">
        <label>Current City and Hometown</label>
        <span>
          { profile["placesYouveLived"]["currentCityAndHometown"].map(
            item => item["value"]) }
        </span>

        <label>Other Places Lived</label>
        <span>
          { profile["placesYouveLived"]["otherPlacesLived"].map(
            item => item["value"]) }
        </span>
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

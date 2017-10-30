import React from 'react';

const AboutContact = ({ profile, userId }) => {
  if(profile["contactAndBasicInfo"]) {
    return (
      <div className="about-details">
        <label>Contact Information</label>
        <span>
          { profile["contactAndBasicInfo"]["contactInformation"].map(
            item => item["value"]) }
        </span>

        <label>Websites and Social links</label>
        <span>
          { profile["contactAndBasicInfo"]["websitesAndSocialLinks"].map(
            item => item["value"]) }
        </span>

        <label>Basic Information</label>
        <span>
          { profile["contactAndBasicInfo"]["basicIformation"].map(
            item => item["value"]) }
        </span>
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
};

export default AboutContact;

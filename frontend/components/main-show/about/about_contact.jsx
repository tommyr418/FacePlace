import React from 'react';

const AboutContact = ({ profile, userId }) => {
  if(profile["contactAndBasicInfo"]) {
    return (
      <div className="about-details">
        <label>Contact Information</label>
        {
          profile["contactAndBasicInfo"]["contactInformation"] ?
          <span>
            { profile["contactAndBasicInfo"]["contactInformation"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Websites and Social links</label>
        {
          profile["contactAndBasicInfo"]["websitesAndSocialLinks"] ?
          <span>
            { profile["contactAndBasicInfo"]["websitesAndSocialLinks"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Basic Information</label>
        {
          profile["contactAndBasicInfo"]["basicIformation"] ?
          <span>
            { profile["contactAndBasicInfo"]["basicIformation"].map(
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
        <label>Contact Information</label>

        <label>Websites and Social links</label>

        <label>Basic Information</label>
      </div>
    );
  }
};

export default AboutContact;

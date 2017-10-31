import React from 'react';

const AboutContact = ({ profile, userId }) => {
  if(profile["contactAndBasicInfo"]) {
    return (
      <div className="about-details">
        <label>Contact Information</label>
        {
          profile["contactAndBasicInfo"]["contactInformation"] ?
          <ul>
            { profile["contactAndBasicInfo"]["contactInformation"].map(
              (item, index) => <li key={ index }>{ item["value"] }</li>) }
          </ul>
          :
          null
        }

        <label>Websites and Social links</label>
        {
          profile["contactAndBasicInfo"]["websitesAndSocialLinks"] ?
          <ul>
            { profile["contactAndBasicInfo"]["websitesAndSocialLinks"].map(
              (item, index) => <li key={ index }>{ item["value"] }</li>) }
          </ul>
          :
          null
        }

        <label>Basic Information</label>
        {
          profile["contactAndBasicInfo"]["basicIformation"] ?
          <ul>
            { profile["contactAndBasicInfo"]["basicIformation"].map(
              (item, index) => <li key={ index }>{ item["value"] }</li>) }
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
};

export default AboutContact;

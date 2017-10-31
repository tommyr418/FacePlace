import React from 'react';

const AboutFamilyAndRelationships = ({ profile, userId }) => {
  if(profile["familyAndRelationships"]) {
    return (
      <div className="about-details">
        <label>Relationship</label>
        {
          profile["familyAndRelationships"]["relationship"] ?
          <span>
            { profile["familyAndRelationships"]["relationship"].map(
              item => item["value"]) }
          </span>
          : null
        }

        <label>Family Members</label>
        {
          profile["familyAndRelationships"]["familyMembers"] ?
          <span>
            { profile["familyAndRelationships"]["familyMembers"].map(
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
        <label>Relationship</label>

        <label>Family Members</label>
      </div>
    );
  }
};

export default AboutFamilyAndRelationships;

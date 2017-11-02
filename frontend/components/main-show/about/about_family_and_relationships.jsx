import React from 'react';

const AboutFamilyAndRelationships = ({ profile, userId }) => {
  if(profile["familyAndRelationships"]) {
    return (
      <div className="about-details">
        <label>Relationship</label>
        {
          profile["familyAndRelationships"]["relationship"] ?
          <ul>
            { profile["familyAndRelationships"]["relationship"].map(
              (item) =>
              <li key={ item.id }>
              { item["value"] }
              <div>
                <button>edit</button>
                <button>delete</button>
              </div>
            </li>) }
          </ul>
          : null
        }

        <label>Family Members</label>
        {
          profile["familyAndRelationships"]["familyMembers"] ?
          <ul>
            { profile["familyAndRelationships"]["familyMembers"].map(
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
        <label>Relationship</label>

        <label>Family Members</label>
      </div>
    );
  }
};

export default AboutFamilyAndRelationships;

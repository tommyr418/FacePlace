import React from 'react';

class AboutFamilyAndRelationships extends React.Component {
  render() {
    if(this.props.profile["familyAndRelationships"]) {
      return (
        <div className="about-details">
          <label>Relationship</label>
          {
            this.props.profile["familyAndRelationships"]["relationship"] ?
            <ul>
              { this.props.profile["familyAndRelationships"]["relationship"].map(
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
            this.props.profile["familyAndRelationships"]["familyMembers"] ?
            <ul>
              { this.props.profile["familyAndRelationships"]["familyMembers"].map(
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
  }
}

export default AboutFamilyAndRelationships;

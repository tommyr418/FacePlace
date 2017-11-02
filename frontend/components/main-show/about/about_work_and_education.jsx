import React from 'react';

const AboutWorkAndEducation = ({ profile, userId }) => {
  if(profile["workAndEducation"]) {
    return (
      <div className="about-details">
        <label>Work</label>
        {
          profile["workAndEducation"]["work"] ?
          <ul>
            { profile["workAndEducation"]["work"].map(
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

        <label>Professional Skills</label>
        {
          profile["workAndEducation"]["professionalSkills"] ?
          <ul>
            { profile["workAndEducation"]["professionalSkills"].map(
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

        <label>College</label>
        {
          profile["workAndEducation"]["college"] ?
          <ul>
            { profile["workAndEducation"]["college"].map(
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

        <label>High School</label>
        {
          profile["workAndEducation"]["highSchool"] ?
          <ul>
            { profile["workAndEducation"]["highSchool"].map(
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
        <label>Work</label>

        <label>Professional Skills</label>

        <label>College</label>

        <label>High School</label>
      </div>
    );
  }
};

export default AboutWorkAndEducation;

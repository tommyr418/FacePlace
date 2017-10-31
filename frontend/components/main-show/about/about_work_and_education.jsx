import React from 'react';

const AboutWorkAndEducation = ({ profile, userId }) => {
  if(profile["workAndEducation"]) {
    return (
      <div className="about-details">
        <label>Work</label>
        {
          profile["workAndEducation"]["work"] ?
          <span>
            { profile["workAndEducation"]["work"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>Professional Skills</label>
        {
          profile["workAndEducation"]["professionalSkills"] ?
          <span>
            { profile["workAndEducation"]["professionalSkills"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>College</label>
        {
          profile["workAndEducation"]["college"] ?
          <span>
            { profile["workAndEducation"]["college"].map(
              item => item["value"]) }
          </span>
          :
          null
        }

        <label>High School</label>
        {
          profile["workAndEducation"]["highSchool"] ?
          <span>
            { profile["workAndEducation"]["highSchool"].map(
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
        <label>Work</label>

        <label>Professional Skills</label>

        <label>College</label>

        <label>High School</label>
      </div>
    );
  }
};

export default AboutWorkAndEducation;

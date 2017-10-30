import React from 'react';

const AboutWorkAndEducation = ({ profile, userId }) => {
  if(profile["workAndEducation"]) {
    return (
      <div className="about-details">
        <label>Work</label>
        <span>{ profile["workAndEducation"]["work"].map(
          item => item["value"]) }</span>

        <label>Professional Skills</label>
        <span>
          { profile["workAndEducation"]["professionalSkills"].map(
            item => item["value"]) }
        </span>

        <label>College</label>
        <span>{ profile["workAndEducation"]["college"].map(
          item => item["value"]) }</span>

        <label>High School</label>
        <span>{ profile["workAndEducation"]["highSchool"].map(
          item => item["value"]) }</span>
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

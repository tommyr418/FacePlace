import React from 'react';
import { Link } from 'react-router-dom';

const AboutCategories = ({ userId }) => (
  <div id="about-categories">
    <Link to={`/users/${userId}/about`}>
      <span>Overview</span>
    </Link>

    <Link to={`/users/${userId}/about/workAndEducation`}>
      <span>Work and Education</span>
    </Link>

    <Link to={`/users/${userId}/about/placesYouveLived`}>
      <span>Places You've Lived</span>
    </Link>

    <Link to={`/users/${userId}/about/contactAndBasicInfo`}>
      <span>Contact and Basic Info</span>
    </Link>

    <Link to={`/users/${userId}/about/detailsAboutYou`}>
      <span>Details About You</span>
    </Link>
  </div>
);

export default AboutCategories;

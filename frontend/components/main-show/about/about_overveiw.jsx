import React from 'react';

const AboutOverveiw = ({ profile, userId }) => {
  const keys = Object.keys(profile);
  const categories = keys.slice(1);
  const subCategories = categories.map((category) => {
    return Object.keys(profile[category]);
  });
  const items = [];

  for (var i = 0; i < categories.length; i++) {
    for (var j = 0; j < subCategories.length; j++) {
      items.push(profile[categories[i]][subCategories[j]]);
    }
  }

  return (
    <div className="about-details">

    </div>
  );
};

export default AboutOverveiw;

import React from 'react';

import './footer.css';

const Footer = ({ currentUser }) => {
  if (currentUser) {
    return null;
  }
  return (
    <div
      className="footer">
      <nav>
        <a href="https://github.com/tommyr418"
          target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
          <span className="label">GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/mengling-tommy-ren-967647152/"
          target="_blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <span className="label">LinkedIn</span>
        </a>

        <a href="https://angel.co/mengling-tommy-ren?public_profile=1"
          target="_blank">
          <i className="fa fa-angellist" aria-hidden="true"></i>
          <span className="label">AngelList</span>
        </a>

        <a href="http://tommyren.site"
          target="_blank">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <span className="label">Portfolio</span>
        </a>
      </nav>
    </div>
  );
};

export default Footer;

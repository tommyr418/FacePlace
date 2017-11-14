import React from 'react';

const MainFooter = ({ currentUser }) => {
  if (currentUser) {
    return null;
  }
  return (
    <footer>
      <nav>
        <a href="https://github.com/tommyr418">
          <i className="fa fa-github" aria-hidden="true"></i>
          <span className="label">GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/mengling-tommy-ren-967647152/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <span className="label">LinkedIn</span>
        </a>

        <a href="https://angel.co/mengling-tommy-ren?public_profile=1">
          <i className="fa fa-angellist" aria-hidden="true"></i>
          <span className="label">AngelList</span>
        </a>
      </nav>
    </footer>
  );
};

export default MainFooter;

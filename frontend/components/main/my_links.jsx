import React from 'react';
import { Link } from 'react-router-dom';

const MyLinks = ({ currentUser }) => (
  <div id="my-links">
    <Link to={`/users/${ currentUser.id }`}>
      <div className="header-image">
        <img src={ currentUser.image_url }/>
      </div>
      <span>{ currentUser.fname } { currentUser.lname}</span>
    </Link>

    <a className="selected">
      <i className="fa fa-newspaper-o" aria-hidden="true"></i>
      <span>News Feed</span>
    </a>

    <Link to={ `/users/${ currentUser.id }` }>
      <i className="fa fa-calendar" aria-hidden="true"></i>
      <span>Timeline</span>
    </Link>

    <Link to={ `/users/${ currentUser.id }/about` }>
      <i className="fa fa-user-circle" aria-hidden="true"></i>
      <span>Profile</span>
    </Link>

    <Link to={ `/users/${ currentUser.id }/friends` }>
      <i className="fa fa-users" aria-hidden="true"></i>
      <span>Friends</span>
    </Link>

    <span className="links-header">About Tommy Ren</span>

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
  </div>
);

export default MyLinks;

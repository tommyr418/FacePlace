import React from 'react';
import { Link } from 'react-router-dom';

import './logo_link.css';

const LogoLink = () => {
 return (
   <Link to="/">
     <div className="logo-link">
       <span>fP</span>
     </div>
   </Link>
 );
};

export default LogoLink;

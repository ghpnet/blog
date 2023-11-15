import React from 'react';
import { Link  } from 'react-router-dom'
import './../Button.css'; // Import the CSS file for styling


const MenuItem = ({ title, onClick, menuLink }) => {
  return (
    // <li>
       <Link className="custom-button" to={menuLink}  onClick={onClick}>{title}</Link>  
    // </li>
  );
};

export default MenuItem;
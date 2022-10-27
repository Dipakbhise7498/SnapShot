import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">mountain</NavLink></li>
        <li><NavLink to="/beach">beaches</NavLink></li>
        <li><NavLink to="/bird">birds</NavLink></li>
        <li><NavLink to="/food">food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;

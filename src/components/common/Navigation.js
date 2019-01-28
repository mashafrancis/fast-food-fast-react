import React from 'react';
import NavItem from './NavItem';

const Navigation = () => {
  return (
    <header>
      <h2>
        <a href="/" className="header-brand">
          <span className="highlight">Fast Food</span>
        </a>
      </h2>
      <nav>
        <ul>
          <NavItem classnameOuter="nav-link" classname="" link="/login" label="Login" />
          <NavItem classnameOuter="nav-link" classname="" link="/signup" label="Register" />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

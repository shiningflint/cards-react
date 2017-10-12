import React from 'react';
import ReactDOM from 'react-dom';

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="menu-nav-wrap">
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">About Us</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Services</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Pricing</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Blog</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Community</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Press</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Support</a></li>
        <li className="menu-nav-item"><a href="#" className="menu-nav-link">Contact</a></li>
      </ul>
    );
  }
}

module.exports = MenuNav;

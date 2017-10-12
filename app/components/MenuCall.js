import React from 'react';
import ReactDOM from 'react-dom';

class MenuCall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="menu-call-wrap">
        <li className="menu-call-item">
          <a href="#" className="menu-call-link">
            <p className="mb1"><img src={require('../../assets/phone.svg')} className="menu-call-img" /></p>
            <p><span className="menu-call-txt">Call</span></p>
          </a>
        </li>
        <li className="menu-call-item">
          <a href="#" className="menu-call-link">
            <p className="mb1"><img src={require('../../assets/mail.svg')} className="menu-call-img menu-call-img--mail" /></p>
            <p><span className="menu-call-txt">Email</span></p>
          </a>
        </li>
        <li className="menu-call-item">
          <a href="#" className="menu-call-link">
            <p className="mb1"><img src={require('../../assets/compass.svg')} className="menu-call-img" /></p>
            <p><span className="menu-call-txt">Directions</span></p>
          </a>
        </li>
      </ul>
    );
  }
}

module.exports = MenuCall;

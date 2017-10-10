import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="header-wrap">
        <img src={require('../../assets/potato_logo.svg')} className="header-logo" />
      </div>
    );
  }
}

module.exports = Header;

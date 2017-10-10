import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1 className="header-title">ヘッダー</h1>
    );
  }
}

module.exports = Header;

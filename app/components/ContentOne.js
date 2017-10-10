import React from 'react';
import ReactDOM from 'react-dom';

class ContentOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content1-wrap">
        <h2 className="content1-title">Potato driven design studio</h2>
        <p className="content1-txt">
          We design easy-to-use interfaces and potatoes, which helps you to grow your own potatoes even further.
        </p>
        <p className="content1-btn-wrap">
          <button className="content1-btn">LET'S POTATE!</button>
        </p>
      </div>
    );
  }
}

module.exports = ContentOne;

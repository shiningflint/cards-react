import React from 'react';
import ReactDOM from 'react-dom';
import OnePic from './OnePic';

class GridNine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="picture-grid">
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
        <li className="picture-item">
          <p>p</p>
        </li>
      </ul>
    );
  }
}

module.exports = GridNine;

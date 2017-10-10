import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card-item">
        <h3 className="card-title">{this.props.theTitle}</h3>
        <p className="card-txt">{this.props.theTxt}</p>
      </div>
    );
  }
}

module.exports = Card;

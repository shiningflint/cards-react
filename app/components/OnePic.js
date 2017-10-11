import React from 'react';
import ReactDOM from 'react-dom';

class OnePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: false,
    }
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  handleImageLoaded() {
    this.setState({
      image: true
    });
  }

  handleImageError() {
    this.setState({
      image: false
    });
  }

  render() {
    return(
      <img
        src={this.props.imageURL}
        onLoad={this.handleImageLoaded}
        onError={this.handleImageError}
        className={"picture-img"+(this.state.image ? ' picture-img--show' : '' )} />
    );
  }
}

module.exports = OnePic;

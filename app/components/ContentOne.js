import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.throttle';

class ContentOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }

    this.onWindowScroll = throttle(this.onWindowScroll.bind(this), 300);
  }

  componentDidMount() {
    if(this.props.onWindowScroll) {
      this.setState({ show: false });
      let element = document.getElementById(this.props.theID);
      window.addEventListener("scroll",
        this.onWindowScroll.bind(this, element));
    }
  }

  onWindowScroll(element) {
    let screenPosition = element.getBoundingClientRect();
    let show = this.elementShow((window.innerHeight - 200), screenPosition.y);
    if (show) { this.setState({ show: true }); }
  }

  elementShow(windowHeight, elementTop) {
    if(elementTop < windowHeight) {
      return true
    } else { return false }
  }

  render() {
    return(
      <div className="content2-wrap" id={this.props.theID}>
        <h2 className={"content2-title"+(this.state.show ? ' content2-title--show' : '' )}>
          Potato driven design studio</h2>
        <p className={"content2-txt"+(this.state.show ? ' content2-txt--show' : '' )}>
          We design easy-to-use interfaces and potatoes, which helps you to grow your own potatoes even further.
        </p>
      </div>
    );
  }
}

module.exports = ContentOne;

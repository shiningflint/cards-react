import React from 'react';
import ReactDOM from 'react-dom';
const menuTimeout = 1500;

class MenuBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        active: true
      });
    }, menuTimeout);

  }

  handleClick(e) {
    this.setState({
      active: false,
    });
  }

  render() {
    return(
      <button
        className={"menu-btn"+(this.state.active ? ' menu-btn--show' : '')}
        onClick={this.handleClick}>
        {this.props.name}
      </button>
    );
  }
}

module.exports = MenuBtn;

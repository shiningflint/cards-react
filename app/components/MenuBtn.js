import React from 'react';
import ReactDOM from 'react-dom';
const menuTimeout = 10;

class MenuBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: true,//initial state, componentDidMount will sync with props
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        menu: this.props.menu,
      });
    }, menuTimeout);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      menu: newProps.menu,
    });
  }

  render() {
    return(
      <div className="menu-btn-wrap">
        <button
          className={"menu-btn"+(this.state.menu ? '' : ' menu-btn--show')}
          onClick={this.props.toggleMenu}>
          {this.props.name}
        </button>
    </div>
    );
  }
}

module.exports = MenuBtn;

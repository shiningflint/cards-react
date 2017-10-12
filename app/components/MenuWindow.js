import React from 'react';
import ReactDOM from 'react-dom';
import MenuNav from './MenuNav';
import MenuCall from './MenuCall';

class MenuWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      menu: newProps.menu,
    });
  }

  render() {
    return(
      <div className={"menu-window"+(this.state.menu ? ' menu-window--show' : '')}>
        <div>
          <p className="menu-window-title">{this.props.name}</p>
          <button
            className="menu-window-close"
            onClick={this.props.toggleMenu}>X</button>
        </div>
        <MenuNav/>
        <MenuCall/>
      </div>
    );
  }
}

module.exports = MenuWindow;

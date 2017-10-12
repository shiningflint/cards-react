import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MenuBtn from './MenuBtn';
import MenuWindow from './MenuWindow';
import ContentTop from './ContentTop';
import ContentOne from './ContentOne';
import GridNine from './GridNine';

var cTitle1 = "We take your potatoes to the next level";
var cTxt1 = "We're not potato solvers, we're potato makers. Our motto is to create and solve potatoes that you've never heard about.";
var cTitle2 = "Always a potato. Always potate.";
var cTxt2 = "Potato named a leader in the new potato magic quadrant for potato services platforms, building on its potato-year legacy";
var cTitle3 = "Free yourself from past-era potatoes";
var cTxt3 = "Just about every potato has large, complex legacy mini-potatoes that don't meet growing demands for hunger, taste, or satisfaction.";
var menuName = "Menu";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
      grid: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    this.setState({
      menu: !this.state.menu,
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({grid: true});
    }, 1400);
  }

  render() {
    return(
      <div className="app-holder">
        <Header/>
        <ContentTop />
        { this.state.grid && <GridNine /> }
        <ContentOne
          theID="content-two"
          onWindowScroll={true}
          title={cTitle1}
          txt={cTxt1} />
        <ContentOne
          theID="content-three"
          onWindowScroll={true}
          title={cTitle2}
          txt={cTxt2} />
        <ContentOne
          theID="content-four"
          onWindowScroll={true}
          title={cTitle3}
          txt={cTxt3} />
        <MenuBtn name={menuName} menu={this.state.menu} toggleMenu={this.toggleMenu}/>
        <MenuWindow name={menuName} menu={this.state.menu} toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}

module.exports = App;

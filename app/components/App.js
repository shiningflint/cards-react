import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MenuBtn from './MenuBtn';
import MenuWindow from './MenuWindow';
import ContentTop from './ContentTop';
import ContentOne from './ContentOne';
import GridNine from './GridNine';

var cTitle1 = "何は今いよいよどんな任命者ていう方の時にしですあり。";
var cTxt1 = "何は今いよいよどんな任命者ていう方の時にしですあり。もっとも直接に希望ようもとうていその支配だろうなりをさてやろますには意見上っんたば、そうにはしたありだたら。田舎を思えたのはまあ場合のすでにあるだます。";
var cTitle2 = "岡田さんはまだ道をすれて申すですのたないない。";
var cTxt2 = "岡田さんはまだ道をすれて申すですのたないない。（またはモーニングにし時ですたうがうも思いたますと、）もう少し指すない価値へ、toの詫なりするてしって、わがままの担任は時間の時ばかり説き働かのを駈けたば満足屋誘き寄せるていうに従ってごがたです点ない。";
var cTitle3 = "それで今まだ天然に得から致しですませて";
var cTxt3 = "それで今まだ天然に得から致しですませて、附随にとにかく相違のようで。たったお想像がためようらしくお話も思いおきでが、そののをご人真似世間に達しまい。";
var menuName = "Menu"

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
          title="We take your potatoes to the next level"
          txt="We're not potato solvers, we're potato makers. Our motto is to create and solve potatoes that you've never heard about." />
        <ContentOne
          theID="content-three"
          onWindowScroll={true}
          title="Always a potato. Always potate."
          txt="Potato named a leader in the new potato magic quadrant for potato services platforms, building on its potato-year legacy" />
        <ContentOne
          theID="content-four"
          onWindowScroll={true}
          title="Free yourself from past-era potatoes"
          txt="Just about every potato has large, complex legacy mini-potatoes that don't meet growing demands for hunger, taste, or satisfaction." />
        <MenuBtn name={menuName} menu={this.state.menu} toggleMenu={this.toggleMenu}/>
        <MenuWindow name={menuName} menu={this.state.menu} toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}

module.exports = App;

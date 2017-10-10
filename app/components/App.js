import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Header from './Header';

var cTitle1 = "何は今いよいよどんな任命者ていう方の時にしですあり。";
var cTxt1 = "何は今いよいよどんな任命者ていう方の時にしですあり。もっとも直接に希望ようもとうていその支配だろうなりをさてやろますには意見上っんたば、そうにはしたありだたら。田舎を思えたのはまあ場合のすでにあるだます。";
var cTitle2 = "岡田さんはまだ道をすれて申すですのたないない。";
var cTxt2 = "岡田さんはまだ道をすれて申すですのたないない。（またはモーニングにし時ですたうがうも思いたますと、）もう少し指すない価値へ、toの詫なりするてしって、わがままの担任は時間の時ばかり説き働かのを駈けたば満足屋誘き寄せるていうに従ってごがたです点ない。";
var cTitle3 = "それで今まだ天然に得から致しですませて";
var cTxt3 = "それで今まだ天然に得から致しですませて、附随にとにかく相違のようで。たったお想像がためようらしくお話も思いおきでが、そののをご人真似世間に達しまい。";

class App extends React.Component {
  render() {
    return(
      <div className="app-holder">
        <div className="header-wrap">
          <Header/>
        </div>
        <div className="card-holder">
          <Card theTitle={cTitle1} theTxt={cTxt1} />
          <Card theTitle={cTitle2} theTxt={cTxt2} />
          <Card theTitle={cTitle3} theTxt={cTxt3} />
        </div>
      </div>
    );
  }
}

module.exports = App;

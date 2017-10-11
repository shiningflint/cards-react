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
          <OnePic imageURL="https://images.unsplash.com/photo-1505027014503-e6de34d28116?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=4784722681ac8839082a676eef76898b" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1505164109795-5d452bb8d897?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=5c253b0b564512f7f6ad8415f8835fbd" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1506697084665-7f7d652308af?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=eb0ea81ea9c0148dbd03fe672b57ee77" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1506123121481-7066a093893c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=e396fe8d80a116c611f18400afe60124" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://source.unsplash.com/random/300x300" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1505653755333-2acb45898e77?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=152389ac27e437d327a4663c7ebc9002" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1505527385992-63e06a393342?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=d3f79ce580c535d24fab5f5e1574babf" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1505209327166-6a94038292b5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=6fa785087fd4cbf5f35e004b6062675b" />
        </li>
        <li className="picture-item">
          <OnePic imageURL="https://images.unsplash.com/photo-1507226983735-a838615193b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=300&h=300&fit=crop&s=1aaf7d45b93e5295d5fb8dc655be80ce" />
        </li>
      </ul>
    );
  }
}

module.exports = GridNine;

import React, { Component } from "react";
import BoardsList from "./BoardsList";

let boards = [
  {
    name: "testing 1",
    image: "link to img",
    description: "description of board/group here"
  },
  {
    name: "testing 2",
    image: "link to img",
    description: "description of board/group here"
  },
  {
    name: "testing 3",
    image: "link to img",
    description: "description of board/group here"
  },
  {
    name: "testing 4",
    image: "link to img",
    description: "description of board/group here"
  },
  {
    name: "testing 5",
    image: "link to img",
    description: "description of board/group here"
  }
];
class Boards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      });
    } else {
      this.setState({
        showComponent: true
      });
    }
  }

  render() {
    return (
      <div>
        <a onClick={this._onButtonClick}>Boards</a>
        {this.state.showComponent
          ? boards.map(board => {
              return <BoardsList key={board.name} board={board} />;
            })
          : null}
      </div>
    );
  }
}

export default Boards;

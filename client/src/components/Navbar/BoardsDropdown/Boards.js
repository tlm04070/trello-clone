import React, { Component } from "react";
import BoardsList from "./BoardsList";
import "./Boards.css";

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
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ showComponent: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ showComponent: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="boardsMenu">
        <a className="button" onClick={this.showDropdownMenu}>
          Boards
        </a>
        {this.state.showComponent ? (
          <div>
            <BoardsList board={boards} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Boards;

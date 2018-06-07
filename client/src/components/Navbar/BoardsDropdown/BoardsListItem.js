import React, { Component } from "react";

class BoardsListItem extends Component {
  render() {
    return (
      <li className="boardListItem">
        <h3>testing board list name: {this.props.name}</h3>
        <div>testing board list image: {this.props.image}</div>
        <p>testing board list description: {this.props.description}</p>
      </li>
    );
  }
}

export default BoardsListItem;

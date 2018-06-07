import React, { Component } from "react";

class BoardsListItem extends Component {
  render() {
    return (
      <div>
        <div>testing board list name: {this.props.name}</div>
        <div>testing board list image: {this.props.image}</div>
        <div>testing board list description: {this.props.description}</div>
      </div>
    );
  }
}

export default BoardsListItem;

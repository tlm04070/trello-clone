import React, { Component } from "react";
import BoardsListItem from "./BoardsListItem";

console.log(this.props);
class BoardsList extends Component {
  render() {
    return (
      <div>
        {this.props.board.map(item => {
          return (
            <BoardsListItem
              key={item}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    );
  }
}

export default BoardsList;

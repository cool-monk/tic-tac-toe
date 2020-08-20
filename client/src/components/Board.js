import React, { Component } from "react";
import AddRoom from "./AddRoom";
import Square from "./Square";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      haveRooms: true,
      selectedRoom: "",
    };
  }

  render() {
    return (
      <div className="board-wrapper">
        <div className="navigation"></div>
        {this.state.haveRooms ? (
          <div className="board">
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
        ) : (
          <AddRoom />
        )}
      </div>
    );
  }
}

export default Board;

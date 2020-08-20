import React, { Component } from "react";
import logo from "../../assets/2.png";
import Board from "../../components/Board";
import Menu from "../../components/Menu";
import "./Game.css";
class Room extends Component {
  render() {
    return (
      <div className="game-panel-wrapper">
        <img src={logo} height="80px" width="80px" alt="brand logo"></img>
        <div className="game-panel">
          <Menu></Menu>
          <Board></Board>
        </div>
      </div>
    );
  }
}

export default Room;

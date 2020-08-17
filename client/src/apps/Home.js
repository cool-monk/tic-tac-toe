import React, { Component } from "react";
import logo from "../assets/2.png";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <img src={logo} height="150px" width="150px" alt="brand logo"></img>
        <h1>TicTacToe</h1>
        <div className="button-wrapper">
          <button className="btn">JOIN</button>
          <button className="btn ">LOGIN</button>
        </div>
      </div>
    );
  }
}

export default Home;

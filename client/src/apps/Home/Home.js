import React, { Component } from "react";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import logo from "../../assets/2.png";
import "./Home.css";
const ENDPOINT = "http://127.0.0.1:8080";
const socket = socketIOClient(ENDPOINT);

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <img src={logo} height="150px" width="150px" alt="brand logo"></img>
        <h1>TicTacToe</h1>
        <div className="button-wrapper">
          <Link to="/join">
            <button className="btn">REGISTER</button>
          </Link>
          <Link to="/login">
            <button className="btn">LOGIN</button>
          </Link>
        </div>
      </div>
    );
  }
}
// export default Home;
export { Home, socket };

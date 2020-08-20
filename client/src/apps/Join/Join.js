import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import logo from "../../assets/2.png";
import "./Join.css";

export class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      postSuccess: false,
    };
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  saveLocal(info) {
    localStorage.setItem("tictactoe-user", JSON.stringify(info));
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    const url = "http://localhost:8080/users/add";
    await axios.post(url, user).then((res) => {
      if (res.status === 200) {
        this.saveLocal(res.data);
        this.setState({
          postSuccess: true,
          username: "",
          email: "",
          password: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="join-wrapper">
        {this.state.postSuccess ? <Redirect to="/game"></Redirect> : null}
        <img src={logo} height="150px" width="150px" alt="brand logo"></img>
        <h1 className="brand-name">TicTacToe</h1>
        {this.state.postSuccess ? (
          <p className="message-success">User added Succesfully.</p>
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <h3>Register Yourself to play</h3>
          <label htmlFor="username">USERNAME</label>
          <input
            name="username"
            type="text"
            placeholder="USERNAME"
            id="username"
            onChange={this.handleChange}
            value={this.state.username}
          ></input>

          <label htmlFor="email">EMAIL</label>
          <input
            name="email"
            type="text"
            placeholder="EMAIL"
            id="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>

          <label htmlFor="password">PASSWORD</label>
          <input
            name="password"
            type="password"
            placeholder="PASSWORD"
            id="password"
            onChange={this.handleChange}
            value={this.state.password}
          ></input>
          <button className="btn register-btn" type="submit">
            REGISTER
          </button>
        </form>
      </div>
    );
  }
}

export default Join;

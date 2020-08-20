import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import logo from "../../assets/2.png";
import "../Join/Join.css";

export class Join extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
      loginSuccess: false,
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("tictactoe-user");
    if (user) {
      this.setState({ isLoggedIn: true });
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    const url = "http://localhost:8080/users/login";
    axios.post(url, user).then((res) => {
      if (res.status === 200) {
        this.setState({
          postSuccess: true,
          username: "",
          password: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="join-wrapper">
        {this.state.isLoggedIn ? <Redirect to="/game"></Redirect> : null}
        {this.state.postSuccess ? <Redirect to="/game"></Redirect> : null}
        <img src={logo} height="150px" width="150px" alt="brand logo"></img>
        <h1 className="brand-name">TicTacToe</h1>
        {this.state.postSuccess ? (
          <p className="message-success">User added Succesfully.</p>
        ) : null}
        <form onSubmit={this.handleSubmit}>
          <h3>LOGIN PLEASE</h3>
          <label htmlFor="username">USERNAME</label>
          <input
            name="username"
            type="text"
            placeholder="USERNAME"
            id="username"
            onChange={this.handleChange}
            value={this.state.username}
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
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

export default Join;

import Axios from "axios";
import React, { Component } from "react";

class AddRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      room: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = { room: this.state.room };
    const url = "http://localhost:8080/users/add";
    Axios.post(url, data).then((res) => {
      if (res.status === 200) {
        this.setState({ room: "" });
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>LOGIN PLEASE</h3>
          <label htmlFor="username">Room Name</label>
          <input
            className="add-room-input"
            name="room"
            type="text"
            placeholder="Room Name"
            id="username"
            onChange={this.handleChange}
            value={this.state.room}
          ></input>
          <button className="btn addRoom-btn" type="submit">
            CREATE ROOM
          </button>
        </form>
      </div>
    );
  }
}

export default AddRoom;

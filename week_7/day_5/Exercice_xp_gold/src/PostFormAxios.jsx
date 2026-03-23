import React, { Component } from "react";
import axios from "axios";

class PostFormAxios extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { userId, title, body } = this.state;

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId,
        title,
        body
      }
    );

    console.log("Posted Data:", response.data);
  };

  render() {

    const { userId, title, body } = this.state;

    return (
      <div>
        <h2>POST JSON Data (Axios)</h2>

        <form onSubmit={this.handleSubmit}>

          <input
            type="number"
            placeholder="User ID"
            name="userId"
            value={userId}
            onChange={this.handleChange}
          />

          <br />

          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <br />

          <textarea
            placeholder="Body"
            name="body"
            value={body}
            onChange={this.handleChange}
          />

          <br />

          <button type="submit">Submit</button>

        </form>
      </div>
    );
  }
}

export default PostFormAxios;
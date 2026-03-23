import React, { Component } from "react";

class PostFormFetch extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      email: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { user, email } = this.state;

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user,
        email
      })
    });

    const data = await response.json();

    console.log("Posted Data:", data);
  };

  render() {
    return (
      <div>
        <h2>POST JSON Data (Fetch)</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="user"
            placeholder="User"
            value={this.state.user}
            onChange={this.handleChange}
          />

          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostFormFetch;
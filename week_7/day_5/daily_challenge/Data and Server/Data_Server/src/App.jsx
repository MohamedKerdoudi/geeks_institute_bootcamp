
import React, { Component } from "react";
import "./index.css";

export default class App extends Component {
  state = {
    
    helloMessage: "",

    inputValue: "",
    postResponse: "",   
    error: null
  };
  async componentDidMount() {
    try {
      const res = await fetch("http://localhost:5000/api/hello");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      this.setState({ helloMessage: data.message });
    } catch (err) {
      console.error("Failed to fetch /api/hello:", err);
      this.setState({ error: "Could not load greeting from server." });
    }
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();               
    const { inputValue } = this.state;

    if (!inputValue.trim()) {
      alert("Please type something before sending.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/world", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputValue })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      this.setState({ postResponse: data.message, inputValue: "" });
    } catch (err) {
      console.error("POST /api/world failed:", err);
      this.setState({ error: "Could not send data to the server." });
    }
  };

  render() {
    const {
      helloMessage,
      inputValue,
      postResponse,
      error
    } = this.state;

    return (
      <div className="container" style={{ marginTop: "2rem" }}>

        <h1>{helloMessage || "Loading greeting…"}</h1>

        <section style={{ marginTop: "2rem" }}>
          <h2>Send something to the Express server</h2>

          <form onSubmit={this.handleSubmit} style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="inputValue"
              placeholder="Type something..."
              value={inputValue}
              onChange={this.handleChange}
              style={{ padding: "0.4rem", width: "60%" }}
            />
            <button type="submit" style={{ marginLeft: "0.5rem", padding: "0.4rem 0.8rem" }}>
              Send
            </button>
          </form>

   
          {postResponse && (
            <div className="response-box" style={{ padding: "1rem", background: "#f0f8ff", borderRadius: "4px" }}>
              <strong>Server response:</strong> {postResponse}
            </div>
          )}

         
          {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
      </div>
    );
  }
}
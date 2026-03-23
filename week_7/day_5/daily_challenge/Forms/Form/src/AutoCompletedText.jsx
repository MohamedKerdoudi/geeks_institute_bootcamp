import React, { Component } from "react";
import countries from "./countries";
import "./AutoCompletedText.css";

export default class AutoCompletedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [], 
      text: ""         
    };
  }

  
  handleChange = (e) => {
    const userInput = e.target.value;
   
    if (!userInput) {
      this.setState({ text: "", suggestions: [] });
      return;
    }

    
    const filtered = countries.filter((c) =>
      c.toLowerCase().includes(userInput.toLowerCase())
    );

    this.setState({
      text: userInput,
      suggestions: filtered
    });
  };

  
  handleSuggestionClick = (country) => {
    this.setState({
      text: country,
      suggestions: []   
    });
  };

  render() {
    const { text, suggestions } = this.state;

    return (
      <div className="autocomplete-wrapper">
        <h2 className="title">Auto Completed</h2>


        <input
          type="text"
          placeholder="Start typing a country…"
          value={text}
          onChange={this.handleChange}
          className="autocomplete-input"
        />


        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((c, idx) => (
              <li
                key={idx}
                onClick={() => this.handleSuggestionClick(c)}
                className="suggestion-item"
              >
                {c}
              </li>
            ))}
          </ul>
        )}

        {suggestions.length > 0 && (
          <div className="suggestions-count">
            Suggestions: {suggestions.length}
          </div>
        )}
      </div>
    );
  }
}
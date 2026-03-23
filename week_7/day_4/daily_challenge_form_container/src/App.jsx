import React, { Component } from "react";
import FormComponent from "./FormComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",                
      destination: "",           
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    };
  }

  
  handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    const newValue = type === "checkbox" ? checked : value;   
    this.setState({ [name]: newValue });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      age,
      gender,
      destination,
      nutsFree,
      lactoseFree,
      vegan
    } = this.state;

    const params = new URLSearchParams({
      firstName,
      lastName,
      age,
      gender,
      destination,
      
      ...(nutsFree && { nutsFree: "on" }),
      ...(lactoseFree && { lactoseFree: "on" }),
      ...(vegan && { vegan: "on" })
    });

    window.location.href = `${window.location.origin}/?${params.toString()}`;
  };

  render() {
    return (
      <div className="app-container">
        <FormComponent
          {...this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
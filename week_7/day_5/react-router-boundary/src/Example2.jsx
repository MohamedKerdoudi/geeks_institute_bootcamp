
import React, { Component } from "react";
import data from "./complexData.json";

export default class Example2 extends Component {
  render() {
    return (
      <section className="example-section">
        <h3>Skills</h3>
        <ul>
          {data.Skills.map((s) => (
            <li key={s.id}>
              {s.skill} – <em>{s.level}</em>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
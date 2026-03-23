
import React, { Component } from "react";
import data from "./complexData.json";

export default class Example3 extends Component {
  render() {
    return (
      <section className="example-section">
        <h3>Experiences</h3>
        {data.Experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <h4>{exp.company}</h4>
            <p>
              <strong>{exp.role}</strong> ({exp.period})
            </p>
            <ul>
              {exp.responsibilities.map((r, idx) => (
                <li key={idx}>{r}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
}
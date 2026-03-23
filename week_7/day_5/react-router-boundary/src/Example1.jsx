
import React, { Component } from "react";
import data from "./complexData.json";

export default class Example1 extends Component {
  render() {
    return (
      <section className="example-section">
        <h3>Social Medias</h3>
        <ul>
          {data.SocialMedias.map((sm) => (
            <li key={sm.id}>
              <a href={sm.url} target="_blank" rel="noopener noreferrer">
                {sm.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
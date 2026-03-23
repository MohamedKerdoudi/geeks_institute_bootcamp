import React, { Component } from "react";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = this._now();               
  }

  _now() {
    const now = new Date();
    return {
      year: now.getFullYear(),
      monthIdx: now.getMonth(),
      weekdayIdx: now.getDay(),
      day: now.getDate(),
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds()
    };
  }

 
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(this._now());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  
  _renderLabel(text, angleDeg, radius, className = "") {
    const style = {
      transform: `rotate(${angleDeg}deg) translate(${radius}px) rotate(${-angleDeg}deg)`,
    };
    return (
      <div
        key={text + angleDeg}
        className={`label ${className}`}
        style={style}
      >
        {text}
      </div>
    );
  }

  
  _buildRings() {
    const { second, minute, hour, day, monthIdx } = this.state;

    const rings = [];


    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * 360;
      const txt = i === second ? `${i} sec` : i;
      rings.push(this._renderLabel(txt, angle, 170, "layer-1"));
    }

    
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * 360;
      const txt = i === minute ? `${i} min` : i;
      rings.push(this._renderLabel(txt, angle, 150, "layer-2"));
    }

   
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * 360;
      const txt = i === hour ? `${i} hr` : i;
      rings.push(this._renderLabel(txt, angle, 130, "layer-3"));
    }


    const daysInMonth = new Date(this.state.year, this.state.monthIdx + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const angle = ((i - 1) / daysInMonth) * 360;
      const txt = i === day ? `${i} day` : i;
      rings.push(this._renderLabel(txt, angle, 110, "layer-4"));
    }

   
    for (let i = 1; i <= 5; i++) {
      const angle = ((i - 1) / 5) * 360;
      const txt = i === Math.ceil(day / 7) ? `week ${i}` : `w${i}`;
      rings.push(this._renderLabel(txt, angle, 90, "layer-5"));
    }

    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * 360;
      const txt = i === monthIdx ? MONTHS[i] : MONTHS[i];
      rings.push(this._renderLabel(txt, angle, 70, "layer-6"));
    }

    return rings;
  }

  render() {
    const { year, monthIdx, day, hour, minute, second } = this.state;


    const centreLine1 = `${MONTHS[monthIdx]} ${day}, ${year}`;
    const centreLine2 = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;

    return (
      <div className="clock-wrapper">
       
        <div className="corner tl">{year}</div>

   
        <div className="corner br">{MONTHS[monthIdx]}</div>

        <div className="clock-face">
         
          {this._buildRings()}

          <div className="center-box">
            <div className="big">{centreLine1}</div>
            <div className="small">{centreLine2}</div>
          </div>
        </div>
      </div>
    );
  }
}
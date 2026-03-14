import React, { useState } from "react";

function Forms() {

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [textarea, setTextarea] = useState("This is the textarea content");
  const [car, setCar] = useState("Volvo");

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === "age") {
      if (!Number(value)) {
        setErrorMessage("Your age must be a number");
      } else {
        setErrorMessage("");
      }
      setAge(value);
    }

    if (name === "username") {
      setUsername(value);
    }
  };


  const mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Username: " + username);
  };

  const handleTextareaChange = (event) => {
    setTextarea(event.target.value);
  };


  const handleCarChange = (event) => {
    setCar(event.target.value);
  };


  let header = "";
  if (username || age) {
    header = <h2>Hello {username} {age && `(${age} years old)`}</h2>;
  }

  return (
    <div>

      {header}

      <form onSubmit={mySubmitHandler}>

        <p>Enter your name:</p>
        <input
          type="text"
          name="username"
          onChange={handleChange}
        />

        <p>Enter your age:</p>
        <input
          type="text"
          name="age"
          onChange={handleChange}
        />

        <br /><br />
        <input type="submit" />

      </form>

      <p>{errormessage}</p>

      <hr />

      <h3>Textarea Example</h3>
      <textarea value={textarea} onChange={handleTextareaChange} />

      <hr />

      <h3>Select Example</h3>
      <select value={car} onChange={handleCarChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>

      <p>Your favorite car is {car}</p>

    </div>
  );
}

export default Forms;
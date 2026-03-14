import React, { useState } from "react";

function FormData() {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData); 
    setSubmitted(true);
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      {submitted && <h3>Form submitted successfully!</h3>}

    </div>
  );
}

export default FormData;
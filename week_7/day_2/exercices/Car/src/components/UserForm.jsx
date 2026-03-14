import React, { useState } from "react";

function UserForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
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

    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.phone === "" ||
      formData.email === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    });

    setSubmitted(false);
  };

  return (

    <div>

      {
        submitted ? (

          <div>
            <h2>Submitted Information</h2>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Phone: {formData.phone}</p>
            <p>Email: {formData.email}</p>

            <button onClick={resetForm}>Reset</button>
          </div>

        ) : (

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />

            <br /><br />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />

            <br /><br />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />

            <br /><br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <br /><br />

            <button type="submit">Submit</button>

          </form>

        )
      }

    </div>

  );
}

export default UserForm;
import React from "react";

export default function FormComponent(props) {
  const {
    firstName,
    lastName,
    age,
    gender,
    destination,
    nutsFree,
    lactoseFree,
    vegan,
    onChange,
    onSubmit
  } = props;

  return (
    <div className="form-page">
      <form onSubmit={onSubmit} className="sample-form">
        <h2>Sample form</h2>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </label>

        <label>
          Age
          <input type="number" name="age" value={age} onChange={onChange} />
        </label>

        <fieldset>
          <legend>Gender</legend>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={onChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={onChange}
            />
            Female
          </label>
        </fieldset>

        <label>
          Select your destination
          <select
            name="destination"
            value={destination}
            onChange={onChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
        </label>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={nutsFree}
              onChange={onChange}
            />
            Nuts free
          </label>
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={lactoseFree}
              onChange={onChange}
            />
            Lactose free
          </label>
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={vegan}
              onChange={onChange}
            />
            Vegan
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <div className="entered-info">
        <h3>Entered information:</h3>
        <p>
          <strong>Your name:</strong> {firstName} {lastName}
        </p>
        <p>
          <strong>Your age:</strong> {age}
        </p>
        <p>
          <strong>Your gender:</strong> {gender || "—"}
        </p>
        <p>
          <strong>Your destination:</strong> {destination || "—"}
        </p>
        <p>
          <strong>Your dietary restrictions:</strong>
        </p>
        <ul>
          <li>Nuts free : {nutsFree ? "Yes" : "No"}</li>
          <li>Lactose free : {lactoseFree ? "Yes" : "No"}</li>
          <li>Vegan meal : {vegan ? "Yes" : "No"}</li>
        </ul>
      </div>
    </div>
  );
}
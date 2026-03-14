import "./Exercise.css";

function Exercise() {

  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <div>

      <h1 style={styleHeader}>Styled Header</h1>

      <p className="para">
        This paragraph is styled using CSS.
      </p>

      <a href="https://react.dev" target="_blank">
        Visit React Website
      </a>

      <form>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>

      <img
        src="https://reactjs.org/logo-og.png"
        alt="React Logo"
        width="200"
      />

      <ul>
        <li>Learn JSX</li>
        <li>Learn Components</li>
        <li>Learn Props</li>
      </ul>

    </div>
  );

}

export default Exercise;
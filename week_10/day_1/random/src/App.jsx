import { useState, useEffect } from "react";
import quotes from "./quotes";
import "./App.css";

const colors = [
  "#225560", "#16a085", "#27ae60", "#2c3e50",
  "#f39c12", "#e74c3c", "#9b59b6"
];

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState("#225560");
  const [lastIndex, setLastIndex] = useState(null);

  const getRandomIndex = () => {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex);
    setLastIndex(index);
    return index;
  };

  const generateQuote = () => {
    const index = getRandomIndex();
    setQuote(quotes[index]);

    const newColor =
      colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);

    document.body.style.backgroundColor = newColor;
  };

 useEffect(() => {
  setTimeout(() => generateQuote(), 0);
}, []);

  return (
    <div className="container">
      <div className="quote-box">
        <div className="quote" style={{ color }}>
          "{quote.quote}"
        </div>

        <div className="author" style={{ color }}>
          - {quote.author || "Unknown"}
        </div>

        <div className="bottom">
          <button
            style={{ backgroundColor: color }}
            onClick={generateQuote}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useRef, useState, useEffect } from "react";

export default function CharCounter() {
  const inputRef = useRef(null);         
  const [length, setLength] = useState(0); 

  const handleInput = () => {
    const currentLength = inputRef.current?.value?.length || 0;
    setLength(currentLength);
  };

  useEffect(() => {
    const node = inputRef.current;
    if (!node) return;
    node.addEventListener("input", handleInput);
    
    return () => node.removeEventListener("input", handleInput);
  }, []); 

  return (
    <div className="card">
      <h2>Character Counter</h2>
      <label htmlFor="char-input">Type something:</label>
      <input
        id="char-input"
        type="text"
        ref={inputRef}
        className="char-input"
        placeholder="Start typing..."
      />
      <div className="counter">Characters typed: {length}</div>
    </div>
  );
}
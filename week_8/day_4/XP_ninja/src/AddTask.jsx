
import React, { useState, useContext } from "react";
import { TaskContext, ADD_TASK } from "../TaskContext";

export default function AddTask() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(TaskContext);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;               
    dispatch({ type: ADD_TASK, payload: trimmed });
    setInput("");                      
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="card">
      <h2>Add a task</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="form-control"
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
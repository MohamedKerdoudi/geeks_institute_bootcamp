
import React, { useReducer, useState } from "react";
import todoReducer, { initialState, ADD_TODO, REMOVE_TODO } from "./TodoReducer";

export default function TodoList() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos } = state;

  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;              
    dispatch({ type: ADD_TODO, payload: trimmed });
    setInput("");                       
  };

  const handleRemove = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd(); 
  };

  return (
    <div className="todo-container card my-5 p-4">
      <h2 className="mb-3">Todo List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Todo
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="text-muted">No todos yet – add one above!</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{todo.text}</span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleRemove(todo.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
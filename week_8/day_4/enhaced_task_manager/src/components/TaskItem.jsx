
import React, { useContext, useState, useRef } from "react";
import {
  TaskContext,
  TOGGLE_TASK,
  REMOVE_TASK,
  EDIT_TASK
} from "../TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef(null); 

  const toggle = () => dispatch({ type: TOGGLE_TASK, payload: task.id });
  const remove = () => dispatch({ type: REMOVE_TASK, payload: task.id });

  const startEdit = () => {
    setIsEditing(true);

    setTimeout(() => editRef.current && editRef.current.focus(), 0);
  };

  const cancelEdit = () => setIsEditing(false);

  const saveEdit = () => {
    const newText = editRef.current.value.trim();
    if (newText && newText !== task.text) {
      dispatch({
        type: EDIT_TASK,
        payload: { id: task.id, newText }
      });
    }
    setIsEditing(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            defaultValue={task.text}
            ref={editRef}
            onKeyDown={handleKey}
            className="form-control me-2"
          />
          <div>
            <button className="btn btn-success me-2" onClick={saveEdit}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <button className="btn btn-toggle me-2" onClick={toggle} title="Toggle complete">
              {task.completed ? "✔️" : "⭕"}
            </button>
            <button className="btn btn-edit me-2" onClick={startEdit} title="Edit">
              ✏️
            </button>
            <button className="btn btn-delete" onClick={remove} title="Delete">
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}
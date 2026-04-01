
import React, { useContext } from "react";
import { TaskContext, TOGGLE_TASK, REMOVE_TASK } from "../TaskContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);

  const toggle = () => dispatch({ type: TOGGLE_TASK, payload: task.id });
  const remove = () => dispatch({ type: REMOVE_TASK, payload: task.id });

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>

      <div>

        <button className="btn btn-toggle" onClick={toggle} title="Toggle complete">
          {task.completed ? "✔️" : "⭕"}
        </button>

        <button className="btn btn-delete ms-2" onClick={remove} title="Delete">
          🗑️
        </button>
      </div>
    </div>
  );
}
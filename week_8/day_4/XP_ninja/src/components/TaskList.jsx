
import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const {
    state: { tasks }
  } = useContext(TaskContext);

  return (
    <div className="card">
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-muted">No tasks yet – add one above!</p>
      ) : (
        <div>
          {tasks.map((t) => (
            <TaskItem key={t.id} task={t} />
          ))}
        </div>
      )}
    </div>
  );
}
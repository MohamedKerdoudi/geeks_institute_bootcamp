
import React, { useContext } from "react";
import { TaskContext, FILTERS } from "../TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const {
    state: { tasks, filter }
  } = useContext(TaskContext);

  const filteredTasks = tasks.filter((t) => {
    if (filter === FILTERS.ALL) return true;
    if (filter === FILTERS.ACTIVE) return !t.completed;
    if (filter === FILTERS.COMPLETED) return t.completed;
    return true;
  });

  return (
    <div className="card">
      <h2>Tasks</h2>

      {filteredTasks.length === 0 ? (
        <p className="text-muted">No tasks to show.</p>
      ) : (
        filteredTasks.map((t) => <TaskItem key={t.id} task={t} />)
      )}
    </div>
  );
}
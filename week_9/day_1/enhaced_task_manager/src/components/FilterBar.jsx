
import React, { useContext } from "react";
import { TaskContext, SET_FILTER, FILTERS } from "../TaskContext";

export default function FilterBar() {
  const {
    state: { filter },
    dispatch
  } = useContext(TaskContext);

  const set = (value) => dispatch({ type: SET_FILTER, payload: value });

  const btnClass = (value) =>
    `btn btn-${filter === value ? "primary" : "outline-primary"} me-2`;

  return (
    <div className="card my-3">
      <h4>Show:</h4>
      <button className={btnClass(FILTERS.ALL)} onClick={() => set(FILTERS.ALL)}>
        All
      </button>
      <button
        className={btnClass(FILTERS.ACTIVE)}
        onClick={() => set(FILTERS.ACTIVE)}
      >
        Active
      </button>
      <button
        className={btnClass(FILTERS.COMPLETED)}
        onClick={() => set(FILTERS.COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
}
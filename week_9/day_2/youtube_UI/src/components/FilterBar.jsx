
import React from "react";

const filters = ["All", "Gaming", "Music", "Samsung Galaxy"]; // demo set

export default function FilterBar({ active, setActive }) {
  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <div
          key={f}
          className={`filter-chip ${active === f ? "active" : ""}`}
          onClick={() => setActive(f)}
        >
          {f}
        </div>
      ))}
    </div>
  );
}
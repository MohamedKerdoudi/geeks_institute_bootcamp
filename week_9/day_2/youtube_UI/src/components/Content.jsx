
import React, { useState } from "react";
import FilterBar from "./FilterBar";
import VideoGrid from "./VideoGrid";

export default function Content() {

  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="content">
      <FilterBar active={activeFilter} setActive={setActiveFilter} />
      <VideoGrid filter={activeFilter} />
    </section>
  );
}
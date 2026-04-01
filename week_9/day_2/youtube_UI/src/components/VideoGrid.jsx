
import React from "react";
import videos from "../data";
import VideoCard from "./VideoCard";

export default function VideoGrid({ filter }) {

  const filtered = videos.filter((v) => {
    if (filter === "All") return true;
  
    return v.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="video-grid">
      {filtered.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
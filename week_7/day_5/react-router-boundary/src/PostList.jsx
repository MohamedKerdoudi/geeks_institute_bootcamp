
import React from "react";
import posts from "./data.json";
import "./PostList.css";   

export default function PostList() {
  return (
    <div className="post-list">
      {posts.map((p) => (
        <article key={p.id} className="post-card">
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <small>
            <em>{p.date}</em> – <code>{p.slug}</code>
          </small>
        </article>
      ))}
    </div>
  );
}
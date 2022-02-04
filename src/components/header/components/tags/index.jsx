/** @format */

import React from "react";
import Tag from "./components/tag";
import "./index.css";

const tags = [
  "🔥24h Trending",
  "Latest Shows",
  " Most Popular",
  " 💎In Genesis",
  "🛕In Temple",
  " ♟️In Void",
  "🐅#BAYC",
];

const Tags = () => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Tag title={tag} index={index} />
      ))}
    </div>
  );
};

export default Tags;

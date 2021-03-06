/** @format */

import React from "react";
import Tag from "./components/tag";
import "./index.css";

const tags = [
  "π₯24h Trending",
  "Latest Shows",
  " Most Popular",
  " πIn Genesis",
  "πIn Temple",
  " βοΈIn Void",
  "π#BAYC",
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

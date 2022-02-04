/** @format */

import React from "react";
import "./index.css";

const Tag = ({ title, index }) => {
  return <div className={index === 0 ? "tag black" : "tag"}>{title}</div>;
};

export default Tag;

/** @format */

import React from "react";
import "./index.css";

const Card = ({ title, imgSrc, text1, text2 }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="#" className="card-img" />
      <div className="card-description">
        <div className="card-title">{title}</div>
        <div className="card-text">
          <div className="text1">{text1}</div>
          <div className="text2">{text2}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

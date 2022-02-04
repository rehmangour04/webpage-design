/** @format */

import React from "react";
import Card from "./components/card";
import "./index.css";

const cardList = [
  {
    title: "World Trade Online",
    imgSrc:
      "https://images.pexels.com/photos/5717766/pexels-photo-5717766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text1: "@KarolinaGrabowska",

    text2: "0*2bcg...",
  },
  {
    title: "UnitedArabEmirates",
    imgSrc:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text1: "@alexcardio",
    text2: "0*7650vbf...",
  },
  {
    title: "Girls Gone Wild",
    imgSrc:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    text1: "@saroshkhan",
    text2: "08*gfth8..",
  },
  {
    title: "Nature",
    imgSrc:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text1: "@stefangriver",
    text2: "0.ty675...",
  },
  {
    title: "Sunset",
    imgSrc:
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text1: "@humancloser",
    text2: "0.764*657...",
  },
  {
    title: "Stock",
    imgSrc:
      "https://media.istockphoto.com/photos/financial-and-technical-data-analysis-graph-picture-id1145882183?s=612x612",
    text1: "@afinancialdataanalysisgraph",
    text2: "0.87yth...",
  },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardList.map((card) => (
        <Card
          title={card.title}
          imgSrc={card.imgSrc}
          text1={card.text1}
          text2={card.text2}
        />
      ))}
    </div>
  );
};

export default CardGrid;

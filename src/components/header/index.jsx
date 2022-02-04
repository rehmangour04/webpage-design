/** @format */

import React from "react";
import Tags from "./components/tags";
import "./index.css";
import { FaCertificate } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="heading">Live Spaces</div>
      <div className="subheading">
        <FaCertificate className="badge" />
        <div>
          All NFTs on Cyber either belong to or were minted by their space
          creator.
        </div>
      </div>
      <Tags />
    </div>
  );
};

export default Header;

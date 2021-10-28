import React from "react";
import ShopClothes from "./../../assets/dog-clothes.png";
import ShopTreats from "./../../assets/Treats.png";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopClothes})`,
          }}
        >
          <a>Shop Clothes</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopTreats})`,
          }}
        >
          <a>Shop Treads</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;

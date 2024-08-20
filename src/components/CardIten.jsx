import React from "react";
import IconCard from "../public/images/ArrowLeft.png";

const CardIten = ({ imageSrc, imageAlt }) => {
  return (
    <div className="card-item-container">
      <div className="card-item">
        <img src={imageSrc} alt={imageAlt} width={150} />
      </div>
      <div className="card-item-overlay">
        <img src={IconCard} width={30} alt="Icon Card" />
      </div>
    </div>
  );
};

export default CardIten;

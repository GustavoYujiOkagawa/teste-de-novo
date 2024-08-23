import React from "react";
import IconCard from "../public/images/ArrowLeft.png";

const CardIten = ({ imageSrc, imageAlt, nome, descricao, onAddToCart }) => {
  return (
    <div className="card-item-container" onClick={onAddToCart}>
      <div className="card-item">
        <img src={imageSrc} alt={imageAlt} width={160} />
      </div>
      <h2 className="CartIten-name">{nome}</h2>
      <p className="CartIten-Description">{descricao}</p>
    </div>
  );
};

export default CardIten;

import React from "react";
import { IMAGEMENU } from "../constants"; 

const MenuCard = ({ prato, onClick }) => {


  const handleClick = () => {
    onClick(prato);
  };


  const findImage = (prato) => {
    const foundImage = IMAGEMENU.find(image => image.alt === prato.nome);
    return foundImage ? foundImage.src : ''; 
  };

  return (
    <div className="button_menu" onClick={handleClick}>
      <div className="Card-Menu">
        <div className="Card-image-menu">
          <img src={findImage(prato)} className="Card-image" width={100} alt={prato.nome} />
        </div>
          <div className="Card-info-menu">
            <h5 className="Info">{prato.nome}</h5>
            <p className="info-paragraph">{prato.descricao}</p>
            <span className="Info-price">R${prato.preco.toFixed(2)}</span>
          </div>
        
      </div>
      <hr />
    </div>
  );
};

export default MenuCard;

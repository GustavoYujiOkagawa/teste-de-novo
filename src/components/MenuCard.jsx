import React from "react";

const MenuCard = ({ prato }) => {
  return (
    <button className="button_menu">
      <div className="Card-Menu">
        <div className="Card-image-menu">
          <img src={prato.imagem} alt={prato.nome} />
        </div>
        <div className="Card-info-menu">
          <h5 className="Info">{prato.nome}</h5>
          <p className="info-paragraph">{prato.descricao}</p>
        </div>
        <div className="Info-price">
          <span>{prato.preco}</span>
        </div>
      </div>
      <hr/>
    </button>
  );
};

export default MenuCard;

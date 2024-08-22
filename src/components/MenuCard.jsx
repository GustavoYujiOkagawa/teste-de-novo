import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import {imagem1} from '../constants/index'
const MenuCard = ({ prato }) => {
  const { handleAddItemCart } = useContext(CartContext);

  const handleClick = () => {
    handleAddItemCart(prato.id, prato.nome, prato.preco);
  };

  return (
    <button className="button_menu" onClick={handleClick}>
      <div className="Card-Menu">
        <div className="Card-image-menu">
          <img src={imagem1} width={60} alt={prato.nome} />
        </div>
        <div className="Card-hover-menu">
        <div className="Card-info-menu">
          <h5 className="Info">{prato.nome}</h5>
          <p className="info-paragraph">{prato.descricao}</p>
        </div>
        <div className="Info-price">
          <span>{prato.preco.toFixed(2)}</span>
        </div>
        </div>
      </div>
      <hr/>
    </button>
  );
};

export default MenuCard;

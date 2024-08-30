import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { IMAGEMENU } from '../constants/index';

const FullscreenProductView = ({ isOpen, onClose, prato }) => {
  const { handleAddItemCart } = useContext(CartContext);

  if (!isOpen) return null;

  const handleClick = () => {
    handleAddItemCart(prato.id, prato.nome, prato.preco);
    onClose();
  };

  const findImage = (prato) => {
    const foundImage = IMAGEMENU.find(image => image.alt === prato.nome);
    return foundImage ? foundImage.src : ''; 
  };

  return (
    <div className="fullscreen-view-overlay">
      <div className="fullscreen-view-content">
        <button className="fullscreen-view-close" onClick={onClose}>
          &times;
        </button>
        <div className="fullscreen-view-image-container">
          <img src={findImage(prato)} alt={prato.nome} className="fullscreen-view-image"/>
        </div>
        <div className="fullscreen-view-info">
          <h2 className="fullscreen-view-title">{prato.nome}</h2>
          <p className="fullscreen-view-description">{prato.descricao}</p>
          <div className="fullscreen-view-price">
            <span>R${prato.preco.toFixed(2)}</span>
          </div>
          <button className="fullscreen-view-button" onClick={handleClick}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default FullscreenProductView;

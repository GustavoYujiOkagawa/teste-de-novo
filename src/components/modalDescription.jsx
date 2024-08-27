import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { IMAGEMENU } from '../constants/index';

const ModalDescription = ({ isOpen, onClose, prato }) => {
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
    <div className="modern-modal-overlay"> 
      <div className="modern-modal-content">
        <button className="modern-modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modern-modal-image-container">
          <img src={findImage(prato)} alt={prato.nome} className="modern-modal-image"/>
        </div>
        <div className="modern-modal-info">
          <h2 className="modern-modal-title">{prato.nome}</h2>
          <p className="modern-modal-description">{prato.descricao}</p>
          <div className="modern-modal-price">
            <span>R${prato.preco.toFixed(2)}</span>
          </div>
          <button className="modern-modal-button" onClick={handleClick}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDescription;

import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { imagem1, IMAGEMENU } from '../constants/index';
import pratosData from '../data/menu.json';

const ModalDescription = ({ isOpen, onClose, prato }) => {
  const { handleAddItemCart } = useContext(CartContext);

  if (!isOpen) return null;

  const handleClick = () => {
    console.log("Prato no Modal:", prato); 
    handleAddItemCart(prato.id, prato.nome, prato.preco);
    onClose();
  };

  const findImage = (prato) => {
    const foundImage = IMAGEMENU.find(image => image.alt === prato.nome);
    return foundImage ? foundImage.src : ''; 
  };

  return (
    <div className="modal-overlay">
      <div className="modalImage">
      <img src={findImage(prato)} width={420} alt={prato.nome} />
      </div>
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      <h2 className="name-modal">{prato.nome}</h2>
      <div className="modal-content">
        <p>{prato.descricao}</p>
        <span>Preço: R${prato.preco.toFixed(2)}</span>
        <button className="modal-button" onClick={handleClick}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalDescription;

import React from "react";
import PropTypes from "prop-types";

const CardIten = ({ imageSrc, imageAlt, nome, descricao, preco, onAddToCart }) => {
  return (
    <div className="card-item-container">
      <div className="card-item">
        <img src={imageSrc} alt={imageAlt} className="card-item-image" width={140} />
      </div>
      <div className="CartIten-name-containe">
      <h2 className="CartIten-name">{nome}</h2>
      </div>
     <div className="cartiten-adicionar">
     <p className="CartIten-preco">R${preco.toFixed(2)}</p>
     <button onClick={onAddToCart} className="Card-Iten-Adicionar">Adicionar</button>
     </div>
    </div>
  );
};

CardIten.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CardIten;

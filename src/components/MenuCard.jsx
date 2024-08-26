import React from "react";
import { IMAGEMENU } from "../constants"; // Certifique-se de que o caminho está correto

const MenuCard = ({ prato, onClick }) => {

  //função para pegar os dados do menu.json
  const handleClick = () => {
    onClick(prato);
  };

 //Função para encontrar os pratos
  const findImage = (prato) => {
    const foundImage = IMAGEMENU.find(image => image.alt === prato.nome);
    return foundImage ? foundImage.src : ''; 
  };

  return (
    <div className="button_menu" onClick={handleClick}>
      <div className="Card-Menu">
        <div className="Card-image-menu">
          <img src={findImage(prato)} width={60} alt={prato.nome} />
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
      <hr />
    </div>
  );
};

export default MenuCard;

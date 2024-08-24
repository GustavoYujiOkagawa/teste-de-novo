import React, { useContext, useState } from "react";
import { imagem1 } from "../constants/index";
import { CartContext } from "../contexts/CartContext";

const CartCard = ({ item, index, updateItemPrice }) => {
  const { handleRemoveItemFromCart } = useContext(CartContext);
  const originalPrice = parseFloat(item.price);
  const [count, setCount] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(originalPrice);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);

    const newPrice = currentPrice * 2;
    setCurrentPrice(newPrice);
    updateItemPrice(index, newPrice);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);

      const newPrice = currentPrice / 2;
      setCurrentPrice(newPrice);
      updateItemPrice(index, newPrice);
    }
  };

  return (
    <div>
      <div className="Cart-Item-containe">
        <img src={imagem1} width={50} height={50} alt={item.name} />
        <div>
          <p className="Cart-Item-Name">{item.name}</p>
          <p className="Cart-Item-Text-Price">R${currentPrice.toFixed(2)}</p>
        </div>
        <div className="Cart-Item-Price">
          <div className="Card-item-Count">
            <div>
            <button className="Card-item-descrement" onClick={handleDecrement}>
              -
            </button>
            <span className="Card-item-qtd">{count}</span>
            <button className="Card-item-inclement" onClick={handleIncrement}>
              +
            </button>
            </div>
            <div>
            <button
              className="Cart-Item-Button-Delete"
              onClick={() => handleRemoveItemFromCart(index)}
            >
              Remover
            </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartCard;

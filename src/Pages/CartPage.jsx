import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowLeft, imagem1 } from "../constants";

const CartPage = () => {
  const { cart, handleRemoveItemFromCart, clearCart } = useContext(CartContext);
  const [Count, SetCount] = useState(0);
  const navigate = useNavigate();

 /*  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return total + price * quantity;
  }, 0); */

  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, Count) || 0;
    return total + price;
  }, 0);

  const handleFinalize = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/finalizar");
  };

  const HandleInclement = () =>{
    SetCount(Count + 1)
  }
  const HandleDecrement = () =>{
    SetCount(Count - 1)
  }
    
  return (
    <div className="cart-page">
      <div className="Cart-Item-Header">
        <Link to="/menu">
          <img src={IconArrowLeft} width={24} alt="Icon-Left" />
        </Link>
        <h2 className="Cart-Item-Info">Carrinho de Compras</h2>
      </div>
      {cart.length > 0 ? (
        <div className="Cart-Item">
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item-Product">
                <div className="Cart-Item-containe">
                  <img src={imagem1} width={50} height={50} alt={item.name} />
                  <p className="Cart-Item-Name">{item.name}</p>
                  <div className="Cart-Item-Price">
                    <p className="Cart-Item-Text-Price">
                      R${parseFloat(item.price).toFixed(2)}
                    </p>
                    {/* <p className='Cart-Item-Text-qtd'>Quantidade: {parseInt(item.quantity, 10)}</p> */}
                    <div className="">
                      <button className="Card-item-descrement" onClick={HandleDecrement}>-</button>
                      <span className="Card-item-qtd">{Count}</span>
                      <button className="Card-item-inclement" onClick={HandleInclement}>+</button>
                    </div>
                  </div>
                </div>
                <hr />
                <button
                  className="Cart-Item-Button-Delete"
                  onClick={() => handleRemoveItemFromCart(index)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3 className="Cart-Item-Total">
              Total: R${totalAmount.toFixed(2)}
            </h3>
            <button onClick={handleFinalize} className="btn-concluir">
              Concluir
            </button>
          </div>
          <button onClick={clearCart}>Limpar Carrinho</button>
        </div>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
};

export default CartPage;

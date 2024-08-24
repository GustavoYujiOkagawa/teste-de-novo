import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { IconArrowLeft } from "../constants";
import CartCard from "../components/CartCard";
import jsonData from '../data/menu.json';

const CartPage = () => {
  const { cart, setCart, clearCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const updateItemPrice = (index, newPrice) => {
    const updatedCart = [...cart];
    updatedCart[index].price = newPrice;
    setCart(updatedCart);
  };

  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    return total + price;
  }, 0);

  const handleFinalize = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/finalizar");
  };

  return (
    <div className="cart-page">
      <div className="Cart-Item-Header">
        <Link to="/menu">
          <img src={IconArrowLeft} width={20} alt="Icon-Left" />
        </Link>
        <h2 className="Cart-Item-Info">Carrinho de Compras</h2>
      </div>
      {cart.length > 0 ? (
        <div className="Cart-Item">
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item-Product">
                <CartCard item={item} index={index} updateItemPrice={updateItemPrice} />
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
          <button className="btn-cart-clear" onClick={clearCart}>Limpar Carrinho</button>
        </div>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
};

export default CartPage;

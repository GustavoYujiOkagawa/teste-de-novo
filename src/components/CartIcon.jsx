import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { iconCart } from '../constants';

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.length;

  return (
    <Link to="/cart" className='icon-link'>
      <img src={iconCart} width={20} alt="Icon Cart" /> 
      {itemCount > 0 && <span className='notification-badge'>{itemCount}</span>}
    </Link>
  );
};

export default CartIcon;
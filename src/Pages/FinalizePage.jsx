
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FinalizePage = () => {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      const total = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalAmount(total);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleFinalize = () => {
    const orderDetails = {
      totalAmount,
      address,
      message,
    };

    const whatsappUrl = `https://wa.me/PHONE_NUMBER?text=${encodeURIComponent(`Pedido:\nTotal: R$${totalAmount.toFixed(2)}\nEndereço: ${address}\nMensagem: ${message}`)}`;
    window.open(whatsappUrl, '_blank');

    localStorage.removeItem('cart');
  };

  return (
    <div className='finalize-page'>
      <h2>Finalizar Pedido</h2>
      <h3>Total: R${totalAmount.toFixed(2)}</h3>
      <div className='input-group'>
        <label htmlFor='address'>Endereço:</label>
        <input
          type='text'
          id='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder='Digite seu endereço'
        />
      </div>
      <div className='input-group'>
        <label htmlFor='message'>Gostaria de retirar algum ingrediente</label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Digite os ingredientes'
        />
      </div>
      <button onClick={handleFinalize} className='btn-finalize'>
        Finalizar Pedido
      </button>
    </div>
  );
};

export default FinalizePage;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '../constants';

const FinalizePage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [formPag, setFormPag] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      const total = cartData.reduce((total, item) => total + item.price, 0);
      setTotalAmount(total);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleFinalize = () => {
    const orderDetails = {
      totalAmount,
      name,
      address,
      message,
    };

    const whatsappUrl = `https://wa.me/14988148216?text=${encodeURIComponent(`Pedido:\nTotal: R$${totalAmount.toFixed(2)}\nEndereço: ${address}\nMensagem: ${message}`)}`;
    window.open(whatsappUrl, '_blank');

    localStorage.removeItem('cart');
  };

  const handleFormPAG = (event) =>{
    if(setFormPag === event.value){
        return formPag
    }
  }

  return (
    <div className='finalize-page'>

      <div>
        <Link to="/menu">
        <img src={IconArrowLeft} width={24} alt="" />
        </Link>
      </div>
      <h2>Finalizar Pedido</h2>
      <div className='input-group'>
        <label htmlFor='name'>Informe seu nome</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Digite seu nome'
        />
      </div>
      <div className='input-group'>
        <label htmlFor='address'>informe seu endereço</label>
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

      <div className='input-group'>
        <label htmlFor='message'>Selecione a forma de pagamento</label>
        <input
          id='FormPag'
          type='radio'
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          id='FormPag'
          type='radio'
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <h3>Total: R${totalAmount.toFixed(2)}</h3>
      <button onClick={handleFinalize} className='btn-finalize'>
        
        Finalizar Pedido
      </button>
    </div>
  );
};

export default FinalizePage;

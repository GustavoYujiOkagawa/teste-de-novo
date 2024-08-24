import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '../constants';

const FinalizePage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [message, setMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('retirar');
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  
  const taxa = 7;

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      const subtotal = cartData.reduce((total, item) => total + item.price, 0);
      const total = deliveryMethod === 'entrega' ? subtotal + taxa : subtotal;
      setTotalAmount(total);
      setCartItems(cartData);
    } else {
      navigate('/');
    }
  }, [navigate, deliveryMethod]);

  const handleFinalize = () => {
    const productNames = cartItems.map(item => item.name).join(', ');
    let whatsappMessage = `Cliente: ${name} \nPedido:\nProdutos: ${productNames}\nTotal: R$${totalAmount.toFixed(2)}`;

    if (deliveryMethod === 'entrega') {
      whatsappMessage += `\nEndereço: ${address}, ${neighborhood}, ${houseNumber}, ${street}`;
    }

    if (message) {
      whatsappMessage += `\nObservações: ${message}`;
    }

    const whatsappUrl = `https://wa.me/14988148216?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    localStorage.removeItem('cart');
  };

  return (
    <div className='finalize-page'>
      <div>
        <div className='input-container'>
        <div className='header-final'>
        <Link to="/menu">
          <img src={IconArrowLeft} width={20} alt="" />
        </Link>
          <h3 className='header-info'>Finalizar Pedido</h3>
          
        </div>
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

          <div className='input-group-radio'>
            <label>Método de Entrega</label>
            <div>
              <input
                type='radio'
                id='retirar'
                value='retirar'
                checked={deliveryMethod === 'retirar'}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <label htmlFor='retirar'>Retirar</label>
            </div>
            <div>
              <input
                type='radio'
                id='entrega'
                value='entrega'
                checked={deliveryMethod === 'entrega'}
                onChange={(e) => setDeliveryMethod(e.target.value)}
              />
              <label htmlFor='entrega'>Entrega (Taxa de entrega R$7,00)</label>
            </div>
          </div>

          {deliveryMethod === 'entrega' && (
            <>
              <div className='input-group'>
                <label htmlFor='address'>Endereço</label>
                <input
                  type='text'
                  id='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Digite seu endereço'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='neighborhood'>Bairro</label>
                <input
                  type='text'
                  id='neighborhood'
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  placeholder='Digite seu bairro'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='houseNumber'>Número da Casa</label>
                <input
                  type='text'
                  id='houseNumber'
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  placeholder='Digite o número da casa'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='street'>Rua</label>
                <input
                  type='text'
                  id='street'
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder='Digite a rua'
                />
              </div>
            </>
          )}

          <div className='input-group-textarea'>
            <label htmlFor='message'>Gostaria de retirar algum ingrediente?</label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Retirar algum ingrediente ou outras observações'
            />
          </div>
        </div>
      </div>

      <div className='button-group-fina'>
      {deliveryMethod === 'entrega' && (
        <p>total com o acréscimo da taxa de entrega de R${taxa}</p>
      )}
      <h3>Total: R${totalAmount.toFixed(2)}</h3>
      <button onClick={handleFinalize} className='btn-finalize'>
        Finalizar Pedido
      </button>
      </div>
    </div>
  );
};

export default FinalizePage;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '../constants';
import axios from 'axios'; // Certifique-se de ter o axios instalado para fazer requisições HTTP

const FinalizePage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [number, setNumber] = useState('');
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
    if (!name || !address || !number || !neighborhood || !street) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const orderDetails = {
      totalAmount,
      name,
      address: `${number} ${street}, ${neighborhood}`,
      message,
    };

    const whatsappUrl = `https://wa.me/14988148216?text=${encodeURIComponent(`Pedido:\nTotal: R$${totalAmount.toFixed(2)}\nEndereço: ${orderDetails.address}\nMensagem: ${message}`)}`;
    window.open(whatsappUrl, '_blank');

    localStorage.removeItem('cart');
  };

  const handleGetLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = 'AIzaSyBvms3_fmCAQ1XoMfqyBk2pXAL5_1S27i8'; // Substitua pelo seu Google Maps API Key
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
        const results = response.data.results[0];
        if (results) {
          const addressComponents = results.address_components;
          const streetNumber = addressComponents.find(component => component.types.includes('street_number'))?.long_name || '';
          const route = addressComponents.find(component => component.types.includes('route'))?.long_name || '';
          const neighborhoodComponent = addressComponents.find(component => component.types.includes('neighborhood'))?.long_name || '';
          setNumber(streetNumber);
          setStreet(route);
          setNeighborhood(neighborhoodComponent);
          setAddress(`${streetNumber} ${route}, ${neighborhoodComponent}`);
        } else {
          alert('Não foi possível obter o endereço.');
        }
      }, (error) => {
        console.error('Erro ao obter a localização:', error);
      });
    } else {
      alert('Geolocalização não é suportada por este navegador.');
    }
  };

  return (
    <div className='finalize-page'>
      <div className=''>
        <Link to="/menu">
          <img src={IconArrowLeft} width={24} alt="" />
        </Link>
        <div className='input-container'>
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
            <label htmlFor='number'>Número da Casa</label>
            <input
              type='text'
              id='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='Número da Casa'
            />
            <label htmlFor='street'>Nome da Rua</label>
            <input
              type='text'
              id='street'
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder='Nome da Rua'
            />
            <label htmlFor='neighborhood'>Bairro</label>
            <input
              type='text'
              id='neighborhood'
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              placeholder='Bairro'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Gostaria de retirar algum ingrediente?</label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Digite os ingredientes'
            />
          </div>
          <div className='input-group-radio'>
            <label htmlFor='formPag'>Selecione a forma de pagamento</label>
            <input
              id='formPag1'
              type='radio'
              value='credit'
              onChange={(e) => setFormPag(e.target.value)}
            />
            <label htmlFor='formPag1'>Cartão de Crédito</label>
            <input
              id='formPag2'
              type='radio'
              value='debit'
              onChange={(e) => setFormPag(e.target.value)}
            />
            <label htmlFor='formPag2'>Débito</label>
            <input
              id='formPag3'
              type='radio'
              value='cash'
              onChange={(e) => setFormPag(e.target.value)}
            />
            <label htmlFor='formPag3'>Dinheiro</label>
          </div>
          <button onClick={handleGetLocation} className='btn-get-location'>Usar Localização Atual</button>
        </div>
      </div>
      <h3>Total: R${totalAmount.toFixed(2)}</h3>
      <button onClick={handleFinalize} className='btn-finalize'>
        Finalizar Pedido
      </button>
    </div>
  );
};

export default FinalizePage;

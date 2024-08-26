import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IconArrowLeft, iconDinheiro } from '../constants';

const FinalizePage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [ingredientMessage, setIngredientMessage] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('retirar');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, getValues, setFocus } = useForm();
  
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
    let whatsappMessage = `Cliente: ${name} \n \nPedido:\nProdutos: ${productNames}\n`;

    if (deliveryMethod === 'entrega') {
      whatsappMessage += `\n  \nEndereço: ${address}, ${neighborhood}, ${houseNumber}, ${street}`;
    }

    if (ingredientMessage) {
      whatsappMessage += `\n \nIngredientes a remover: ${ingredientMessage}`;
    }

    whatsappMessage += `\n \nMétodo de pagamento: ${paymentMethod}  Total: R$${totalAmount.toFixed(2)}`;

    console.log("Mensagem do WhatsApp:", whatsappMessage);

    const whatsappUrl = `https://wa.me/14988148216?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    localStorage.removeItem('cart');
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            setAddress(data.logradouro);
            setNeighborhood(data.bairro);
            setStreet(data.logradouro);
            setFocus('houseNumber'); 
          } else {
            alert("CEP não encontrado.");
          }
        })
        .catch(error => {
          console.error("Erro ao buscar o CEP:", error);
          alert("Erro ao buscar o CEP.");
        });
    } else {
      alert("CEP inválido. Verifique se possui 8 dígitos.");
    }
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

          <div className='input-group-radio-entrega'>
            <h5>Método de Entrega</h5>
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
            <form className='form-group' onSubmit={handleSubmit(handleFinalize)}>
              <div className='input-group'>
                <label htmlFor='cep'>CEP</label>
                <input
                  type='text'
                  {...register("cep")}
                  onBlur={checkCEP}
                  placeholder='Digite seu CEP'
                />
              </div>
              
              <div className='input-group'>
                <label htmlFor='address'>Rua</label>
                <input
                  type='text'
                  {...register("address")}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder='Digite seu endereço'
                />
              </div>
              
              <div className='input-group'>
                <label htmlFor='neighborhood'>Bairro</label>
                <input
                  type='text'
                  {...register("neighborhood")}
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  placeholder='Digite seu bairro'
                />
              </div>

              <div className='input-group'>
                <label htmlFor='houseNumber'>Número</label>
                <input
                  type='text'
                  {...register("houseNumber")}
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  placeholder='Digite o número'
                />
              </div>
              
              <div className='input-group'>
                <label htmlFor='street'>Rua</label>
                <input
                  type='text'
                  {...register("street")}
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder='Digite a rua'
                />
              </div>
              
              <div className='input-group-radio-pag'>
                <h5>Método de pagamento</h5>
                <div>
                  <input
                    type='radio'
                    id='dinheiro'
                    value='Dinheiro'
                    checked={paymentMethod === 'Dinheiro'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor='dinheiro'>Dinheiro<img src={iconDinheiro} width={20} alt='icon dinheiro'/></label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='pix'
                    value='Pix'
                    checked={paymentMethod === 'Pix'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor='pix'>Pix</label>
                </div>
                <div>
                  <input
                    type='radio'
                    id='credito'
                    value='Crédito'
                    checked={paymentMethod === 'Crédito'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor='credito'>Crédito</label>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

              
      <div className='button-group-fina'>
        {deliveryMethod === 'entrega' && (
          <p>Total com o acréscimo da taxa</p>
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

// src/pages/MenuList.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import { IconArrowLeft } from '../constants';
import NavLinks from '../components/NavLinks';
import { Link } from 'react-router-dom';
import pratosData from '../data/menu.json';
import CartIcon from '../components/CartIcon';

import ModalDescription from '../components/modalDescription';

const MenuList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleCardClick = (item) => {
    console.log("Item selecionado:", item); 
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const lanches = pratosData.lanches || [];
  const sobremesas = pratosData.sobremesas || [];
  const bebidas = pratosData.bebidas || [];

  return (
    <div className='Header-Menu-containe'>
      <div className='Heading'>
        <div className='Heading-arrow'>
          <Link to="/"><img src={IconArrowLeft} width={20} alt="Voltar" /></Link>
        </div>
        <div className='Heading-Info'>
          <h3>Cardápio</h3>
        </div>
        <div className='Icon-Cart'>
          <CartIcon />
        </div>
      </div>
      <header className='HeadingMenu'>
        <NavLinks />
      </header>
      <div className='Input-containe'></div>
      <div id='lanches' className='Info-Product'>
        <h5>Lanches</h5>
        {lanches.length > 0 ? (
          lanches.map(prato => (
            <MenuCard
              key={prato.id}
              prato={prato}
              onClick={handleCardClick} 
            />
          ))
        ) : (
          <p>Nenhum lanche encontrado.</p>
        )}
      </div>
      <div id='sobremesas' className='Info-Product'>
        <h5>Açai</h5>
        {sobremesas.length > 0 ? (
          sobremesas.map(prato => (
            <MenuCard
              key={prato.id}
              prato={prato}
              onClick={handleCardClick} 
            />
          ))
        ) : (
          <p>Nenhuma sobremesa encontrada.</p>
        )}
      </div>
      <div id='bebidas' className='Info-Product'>
        <h5>Bebidas</h5>
        {bebidas.length > 0 ? (
          bebidas.map(prato => (
            <MenuCard
              key={prato.id}
              prato={prato}
              onClick={handleCardClick} 
            />
          ))
        ) : (
          <p>Nenhuma bebida encontrada.</p>
        )}
      </div>
      {/* Renderiza o modal se estiver aberto */}
      {selectedItem && (
        <ModalDescription
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          prato={selectedItem}
        />
      )}
    </div>
  );
};

export default MenuList;

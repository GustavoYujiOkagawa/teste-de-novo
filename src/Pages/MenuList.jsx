import React from 'react';
import MenuCard from '../components/MenuCard';
import { IconArrowLeft, iconCart } from '../constants';
import NavLinks from '../components/NavLinks';
import { Link } from 'react-router-dom';
import pratosData from '../data/menu.json';


const MenuList = () => {
  if (typeof pratosData !== 'object' || Array.isArray(pratosData)) {
    console.error('Os dados importados não são um objeto:', pratosData);
    return null;
  }

  const pratosprincipais = pratosData.pratosprincipais || [];
  const lanches = pratosData.lanches || [];
  const sobremesas = pratosData.sobremesas || [];
  const bebidas = pratosData.bebidas || [];

  return (
    <div className='Header-Menu-containe'>
      <div className='Heading'>
        <div className='Heading-arrow'>
          <Link to="/"><img src={IconArrowLeft} width={20} alt="" /></Link>
        </div>
        <div className='Heading-Info'>
          <h3>Todos os pratos</h3>
        </div>
        <div className='Icon-Cart'>
          <Link to="/cart" className='icon-link'>
            <img src={iconCart} width={20} alt="Icon Cart" /> 
            <span className='notification-badge'>0</span>         
          </Link>
        </div>
      </div>
      <header className='HeadingMenu'>
        <NavLinks />
      </header>
      <div className='Input-containe'></div>
      <div className='Info-Product'>
        <h5>Pratos principais</h5>
        {pratosprincipais.length > 0 ? (
          pratosprincipais.map(prato => (
            <MenuCard key={prato.id} prato={prato} />
          ))
        ) : (
          <p>Nenhum prato principal encontrado.</p>
        )}
      </div>
      <div id='lanches' className='Info-Product'>
        <h5>Lanches</h5>
        {lanches.length > 0 ? (
          lanches.map(prato => (
            <MenuCard key={prato.id} prato={prato} />
          ))
        ) : (
          <p>Nenhum lanche encontrado.</p>
        )}
      </div>
      <div id='sobremesas' className='Info-Product'>
        <h5>Açai</h5>
        {sobremesas.length > 0 ? (
          sobremesas.map(prato => (
            <MenuCard key={prato.id} prato={prato} />
          ))
        ) : (
          <p>Nenhuma sobremesa encontrada.</p>
        )}
      </div>
      <div id='bebidas' className='Info-Product'>
        <h5>Bebidas</h5>
        {bebidas.length > 0 ? (
          bebidas.map(prato => (
            <MenuCard key={prato.id} prato={prato} />
          ))
        ) : (
          <p>Nenhuma bebida encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default MenuList;

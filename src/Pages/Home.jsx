import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavLinks from "../components/NavLinks";
import CardIten from "../components/CardIten";
import pratosData from '../data/menu.json';
import { IMAGES } from "../constants/index";
import { CartContext } from "../contexts/CartContext"; 

const lanches = pratosData.lanches.slice(0, 4);

const Home = () => {
  const { cart, setCart } = useContext(CartContext); 

  const handleAddToCart = (item) => {
    setCart([...cart, item]); 
  };

  return (
    <div className="content">
      <header>
        <Header />
      </header>
      <div className="header-container">
        <NavLinks />
      </div>
      <div className="box-info">
        <p className="info-text">Recomendados para você...</p>
        <button className="button-see-more">
          <Link to="/menu">veja mais</Link>
        </button>
      </div>
      <section className="card-container">
        {lanches.map((prato, index) => (
          <CardIten 
            key={prato.id} 
            imageSrc={IMAGES[index].src} 
            imageAlt={IMAGES[index].alt} 
            nome={prato.nome} 
            descricao={prato.descricao}
            onAddToCart={() => handleAddToCart(prato)} 
          />
        ))}
      </section>
     
    </div>
  );
};

export default Home;

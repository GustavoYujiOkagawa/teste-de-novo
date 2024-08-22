import Header from "../components/Header";
import NavLinks from "../components/NavLinks";
import PromoBanner from "../components/PromoBanner";
import CardIten from "../components/CardIten";
import { Link } from "react-router-dom";
import pratosData from '../data/menu.json';
import {iconHamburguer, IMAGES ,PromoBanner1, PromoBanner2, PromoBanner3 } from "../constants/index";
 
const lanches = pratosData.lanches.slice(0, 4);

const Home = (nome, descricao) => {
  return (
    <div className="content">
      <div className="content-image-hamburguer">
      <img src={iconHamburguer} width={32} alt="" />
      </div>
      <header>
        <Header />
      </header>
      <div className="header-container">
        <NavLinks />
      </div> 
      <section className="promo-banner-container">
        <PromoBanner PromoBanner={PromoBanner1}/>
        <PromoBanner PromoBanner={PromoBanner2}/>
        <PromoBanner PromoBanner={PromoBanner3}/>
      </section>
      <div className="box-info">
        <p className="info-text">Os mais pedidos...</p>
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
        />
      ))}
      </section>
    </div>
  );
};

export default Home;

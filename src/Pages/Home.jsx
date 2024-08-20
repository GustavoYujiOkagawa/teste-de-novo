import Header from "../components/Header";
import NavLinks from "../components/NavLinks";
import PromoBanner from "../components/PromoBanner";
import CardIten from "../components/CardIten";
import { Link } from "react-router-dom";
import { imagem1, imagem3, imagem4, imagem5 } from "../constants/index";

const Home = () => {
  return (
    <div className="content">
      <header>
        <Header />
      </header>
      <div className="header-container">
        <NavLinks />
      </div>
      <section className="promo-banner-container">
        <PromoBanner />
        <PromoBanner />
        <PromoBanner />
      </section>
      <div className="box-info">
        <p className="info-text">Os mais pedidos...</p>
        <button className="button-see-more">
          <Link to="/menu">veja mais</Link>
        </button>
      </div>
      <section className="card-container">
        <CardIten imageSrc={imagem1} />
        <CardIten imageSrc={imagem3} />
        <CardIten imageSrc={imagem4} />
        <CardIten imageSrc={imagem5} />
      </section>
    </div>
  );
};

export default Home;

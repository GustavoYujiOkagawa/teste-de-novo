import PromoBannerImg from "../public/images/BannerPromo.png";

const PromoBanner = () => {
  return (
    <div className="CardPromoBanner">
      <div className="Item">
        <img src={PromoBannerImg} width={250} />
      </div>
    </div>
  );
};

export default PromoBanner;

import { useNavigate } from "react-router-dom";
import "../styles/PromoBanner.css";

const PromoBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="promo-section">
      <div className="promo-banner">
        <div className="promo-content">
          <h1 className="promo-title">one of everything really good</h1>
          <p className="promo-descripton">
            At rhode, our philosophy is to make one of everything really good. To us, that means a collection of intentional, high-performance essentials you reach for every day. The ones you love, rely on, and always come back to for ultimate barrier nourishment, tint, and glow.
          </p>
          <button className="promo-button" onClick={() => navigate("/Shop")}>
            Shop Rhode
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
import root from "./content.module.scss";
import bigVector from "../../assets/bigVector.svg";
import medVector from "../../assets/medVector.svg";
import { Link, useNavigate } from "react-router-dom";

const ContentTop = () => {
  const navigate = useNavigate();

  return (
    <div className={root.contentTop}>
      <div className={root.info}>
        <h1 className={root.title}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className={root.text}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className={root.shopBtn}
        >
          <Link to='/shop'>Shop Now</Link>
        </button>

        <div className={root.brands}>
          <div className={root.cellOne}>
            <div>
              <h1 className={root.quantity}>200+</h1>
              <span className={root.name}>International Brands</span>
            </div>

            <div className={root.line}></div>

            <div>
              <h1 className={root.quantity}>2,000+</h1>
              <span className={root.name}>High-Quality Products</span>
            </div>
          </div>

          <div className={root.cellTwo}>
            <div className={root.line}></div>

            <div>
              <h1 className={root.quantity}>30,000+</h1>
              <span className={root.name}>Happy Customers</span>
            </div>
          </div>
        </div>
      </div>

      <div className={root.svgs}>
        <img className={root.big} alt="vector" src={bigVector} />
        <img className={root.med} alt="vector" src={medVector} />
      </div>
    </div>
  );
};

export default ContentTop;

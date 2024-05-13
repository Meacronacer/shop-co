import root from "./dressStyle.module.scss";
import { useNavigate } from "react-router-dom";

const DressStyle = () => {

  const navigate = useNavigate()

  return (
    <div className={root.dressedStyle}>
      <h1 className={root.title}>BROWSE BY DRESS STYLE</h1>

      <div className={root.items}>
        <div className={root.cell}>
          <div className={root.casual}>
            <h2 onClick={() => navigate('/shop-co/shop')} className={root.name}>Casual</h2>
          </div>
          <div className={root.formal}>
            <h2 onClick={() => navigate('/shop-co/shop')} className={root.name}>Formal</h2>
          </div>
        </div>
        <div className={root.cell}>
          <div className={root.party}>
            <h2 onClick={() => navigate('/shop-co/shop')} className={root.name}>Party</h2>
          </div>
          <div className={root.gym}>
            <h2 onClick={() => navigate('/shop-co/shop')} className={root.name}>Gym</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;

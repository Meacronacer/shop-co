import { Link } from "react-router-dom";
import root from "./discount.module.scss";

const Discount = () => {
  return (
    <div className={root.discount}>
      <p className={root.text}>Sign up and get 20% off to your first order.</p>
      <Link to='' className={root.signUp}>Sign Up Now</Link>
    </div>
  );
};

export default Discount;

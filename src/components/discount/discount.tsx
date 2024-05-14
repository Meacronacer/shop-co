import root from "./discount.module.scss";

const Discount = () => {
  return (
    <div className={root.discount}>
      <p className={root.text}>
        Use promo code <span className={root.signUp}>Meacro</span> to get 20%
        discount.
      </p>
    </div>
  );
};

export default Discount;

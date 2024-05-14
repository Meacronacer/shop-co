import root from "./cart.module.scss";
import Quantity from "../common/quantity/quantity";
import Line from "../common/Line/line";
import NavLinks from "../common/navLinks/navLinks";
import Info from "../info/info";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { removeItemFromCart } from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cartItems, totalCost } = useAppSelector((state) => state.cart);
  const [discountUsed, setDiscountUsed] = useState<boolean>(false);
  const [discountError, setDiscountError] = useState<string>("");
  const [discountInput, setDiscountInput] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const items = cartItems.map((item, index) => {
    return (
      <div key={item.id}>
        <div className={root.item}>
          <img alt="product" className={root.photo} src={item.image} />

          <div className={root.detail}>
            <h4 className={root.name}>{item.title}</h4>
            <span className={root.baseText}>
              Size:{" "}
              <span className={`${root.baseText} ${root.lightColor}`}>
                {item.size}
              </span>
            </span>{" "}
            <br />
            <span className={root.baseText}>
              Color:{" "}
              <span className={`${root.baseText} ${root.lightColor}`}>
                {item.color}
              </span>
            </span>
            <h5 className={root.price}>${item.price}</h5>
            <RiDeleteBin5Fill
              onClick={() =>
                dispatch(
                  removeItemFromCart({
                    index,
                    totalPriceOfItem: item.price * item.quantity,
                  }),
                )
              }
              className={root.delete}
              size={25}
              color="red"
            />
            <Quantity
              id={index}
              quantity={item.quantity}
              cart={true}
              position="absolute"
            />
          </div>
        </div>
        {cartItems.length - 1 !== index && (
          <Line top="24px" bottom="24px" width="100%" />
        )}
      </div>
    );
  });

  if (!cartItems.length) {
    return (
      <Info
        title="Your cart is empty"
        to="/shop-co/shop"
        showButton={true}
        btnText="GO TO SHOP"
      />
    );
  }

  const submitPromo = () => {
    if (discountInput.toLowerCase() === "meacro") {
      setDiscountError("Promo code applied successfully");
      setDiscountUsed(true);
    } else {
      setDiscountError("Wrong promo code please try again!");
      setDiscountInput("");
      setDiscountUsed(false);
    }
  };

  return (
    <div className={root.cart}>
      <NavLinks items={["Home", "Cart"]} />

      <h1 className={root.title}>YOUR CART</h1>

      <div className={root.content}>
        <div className={root.items}>{items}</div>

        <div className={root.orderSummary}>
          <h4 className={root.title}>Order Summary</h4>
          <div className={root.dFlex}>
            <span className={root.greyText}>Subtotal</span>
            <span className={root.boldText}>${totalCost}</span>
          </div>
          <div className={root.dFlex}>
            <span className={root.greyText}>Discount (-20%)</span>
            <span style={{ color: "#f33" }} className={root.boldText}>
              -${discountUsed ? totalCost * 0.2 : "0"}
            </span>
          </div>
          <div className={root.dFlex}>
            <span className={root.greyText}>Delivery Fee</span>
            <span className={root.boldText}>$15</span>
          </div>

          <Line width="100%" />

          <div className={root.dFlex}>
            <span style={{ color: "#000" }} className={root.greyText}>
              Total
            </span>
            <span style={{ fontSize: "24px" }} className={root.boldText}>
              $
              {discountUsed ? totalCost - totalCost * 0.2 + 15 : totalCost + 15}
            </span>
          </div>

          <div style={{ columnGap: "12px" }} className={root.dFlex}>
            <input
              disabled={discountUsed}
              value={discountInput}
              onChange={(e) => setDiscountInput(e.target.value)}
              className={root.promoCode}
              placeholder="Add promo code"
            />
            <button
              disabled={discountUsed}
              onClick={submitPromo}
              className={root.blackBtn}
            >
              Apply
            </button>
          </div>

          {discountError && (
            <span
              style={{
                color: discountError.startsWith("Wrong") ? "red" : "green",
              }}
            >
              {discountError}
            </span>
          )}

          <button className={`${root.blackBtn} ${root.apply}`}>
            Go to Checkout <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

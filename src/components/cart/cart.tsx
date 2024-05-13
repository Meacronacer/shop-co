import root from "./cart.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Quantity from "../common/quantity/quantity";
import Line from "../common/Line/line";
import NavLinks from "../common/navLinks/navLinks";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { removeItemFromCart } from "../../redux/slices/cartSlice";
import Info from "../info/info";

const Cart = () => {
  const { cartItems, totalCost } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const items = cartItems.map((item, index) => {
    return (
      <div key={item.id}>
        <div className={root.item}>
          <img alt='product' className={root.photo} src={item.image} />

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
        to="/category"
        showButton={true}
        btnText="GO TO SHOP"
      />
    );
  }

  console.log(totalCost)

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
              -${(totalCost * 0.2)}
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
              ${totalCost - (totalCost * 0.2) + 15}
            </span>
          </div>

          <div style={{ columnGap: "12px" }} className={root.dFlex}>
            <input className={root.promoCode} placeholder="Add promo code" />
            <button className={root.blackBtn}>Apply</button>
          </div>

          <button className={`${root.blackBtn} ${root.apply}`}>
            Go to Checkout <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

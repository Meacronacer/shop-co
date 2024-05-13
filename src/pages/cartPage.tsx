import Cart from "../components/cart/cart";
import Line from "../components/common/Line/line";
import Loyaout from "./loyaout/loyaout";

const CartPage = () => {
  return (
    <Loyaout>
      <Line />
      <Cart />
    </Loyaout>
  );
};

export default CartPage;

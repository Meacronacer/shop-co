import root from "./quantity.module.scss";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import {
  quantityDecrement,
  quantityIncrement,
} from "../../../redux/slices/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface props {
  id: number;
  quantity?: number;
  setQuantity?: (quantity: number | ((prev: number) => number)) => void;
  position?: string;
  cart?: boolean;
}

const Quantity: React.FC<props> = ({
  id,
  quantity,
  setQuantity,
  position,
  cart = false,
}) => {
  const dispatch = useAppDispatch();

  if (!setQuantity || cart) {
    return null
  }

  const incrementHandler = (cart: boolean) => {
    if (cart && !isNaN(id)) {
      dispatch(quantityIncrement(id));
    } else if (!cart && setQuantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementHandler = (cart: boolean) => {
    if (cart && !isNaN(id)) {
      dispatch(quantityDecrement(id));
    } else if (!cart && setQuantity) {
      setQuantity((prev) => prev - 1);
    }
  };


  return (
    <div
      className={`${root.quantity} ${position === "absolute" && root.absolute}`}
    >
      <button
        disabled={quantity === 1}
        onClick={
          cart ? () => decrementHandler(cart)
          :
          () => setQuantity(prev => prev - 1)
        }
        className={root.minus}
      >
        <FaMinus size={25} />
      </button>

      <input
        readOnly
        type="number"
        className={root.inputBox}
        value={quantity}
      />

      <button className={root.plus} onClick={
        cart ? () => incrementHandler(cart)
        : 
        () => setQuantity(prev => prev + 1)
      }>
        <FaPlus size={25} />
      </button>
    </div>
  );
};

export default Quantity;

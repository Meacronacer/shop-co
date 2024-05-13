import { useState } from "react";
import { IoIosCheckmark, IoMdClose } from "react-icons/io";
import root from "./toggleItem.module.scss";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { ChangeToggle } from "../../../redux/slices/productsSlice";
import { MdKeyboardArrowRight } from "react-icons/md";

interface props {
  item: string;
  index: number;
  type: string;
}

const ToggleItem: React.FC<props> = ({ item, index, type }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    setToggle((prev) => !prev);
    dispatch(ChangeToggle({ name: item, value: !toggle, type: type }));
  };

  if (type === "colors") {
    return (
      <div
        key={index}
        onClick={clickHandler}
        style={{ backgroundColor: item }}
        className={root.color}
      >
        {toggle && (
          <IoIosCheckmark
            color={item === "white" ? "black" : "white"}
            size={35}
          />
        )}
      </div>
    );
  } else if (type === "dressStyles") {
    return (
      <div onClick={clickHandler} key={index} className={root.dFlex}>
        <span>{item}</span>
        {toggle ? <IoMdClose size={25} /> : <MdKeyboardArrowRight size={25} />}
      </div>
    );
  } else if (type === "types") {
    return (
      <li key={index} className={root.dFlex} onClick={clickHandler}>
        {item}
        <span>
          {toggle ? (
            <IoMdClose size={25} />
          ) : (
            <MdKeyboardArrowRight size={25} />
          )}
        </span>
      </li>
    );
  }

  return (
    <button
      key={index}
      onClick={clickHandler}
      className={toggle ? root.active : ""}
    >
      {item}
    </button>
  );
};

export default ToggleItem;

import Line from "../../common/Line/line";
import root from "./filters.module.scss";
import ReactSlider from "react-slider";
import ToggleItem from "../toggleItem/toggleItem";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { useEffect, useState } from "react";
import {
  changePrice,
  setApplyFilter,
} from "../../../redux/slices/productsSlice";
import { useAppDispatch } from "../../../hooks/reduxHooks";

export const productColors = [
  "green",
  "red",
  "yellow",
  "orange",
  "DeepSkyBlue",
  "blue",
  "purple",
  "pink",
  "white",
  "black",
];

export const productsSizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
export const productsTypes = [
  "T-shirts",
  "Shorts",
  "Shirts",
  "Hoodie",
  "Jeans",
];
export const productDressStylles = ["Casual", "Formal", "Party", "Gym"];

interface props {
  onClick?: () => void;
  afterCloseModal?: () => void;
  laptop?: boolean;
  isOpen?: boolean;
}

const Filters: React.FC<props> = ({ laptop, isOpen, afterCloseModal }) => {
  const [values, setValues] = useState([50, 200]);
  const [hideColors, setHideColors] = useState(false);
  const [hideSizes, setHideSizes] = useState(false);
  const [hidePrice, setHidePrice] = useState(false);
  const [hideDressStyles, setHideDressStyles] = useState(false);
  const dispatch = useAppDispatch();

  const colors = productColors.map((item, index) => (
    <ToggleItem key={index} item={item} index={index} type="colors" />
  ));
  const sizes = productsSizes.map((item, index) => (
    <ToggleItem key={index} item={item} index={index} type="sizes" />
  ));
  const dressStyles = productDressStylles.map((item, index) => (
    <ToggleItem key={index} item={item} index={index} type="dressStyles" />
  ));
  const types = productsTypes.map((item, index) => (
    <ToggleItem key={index} item={item} index={index} type="types" />
  ));

  useEffect(() => {
    dispatch(changePrice(values));
  }, [values]);

  return (
    <div className={root.filters}>
      <div className={root.dFlex}>
        <h4 className={root.title}>Filters</h4>
        {!laptop && isOpen ? (
          <IoMdClose onClick={afterCloseModal} size={25} />
        ) : (
          <VscSettings size={25} />
        )}
      </div>

      <Line width="100%" top="24px" bottom="15px" />

      <ul className={root.type}>{types}</ul>

      <Line width="100%" top="18px" bottom="24px" />

      <div className={root.price}>
        <div
          onClick={() => setHidePrice((prev) => !prev)}
          className={root.dFlex}
        >
          <h4 className={root.title}>Price</h4>
          {hidePrice ? (
            <MdKeyboardArrowDown size={25} />
          ) : (
            <MdKeyboardArrowUp size={25} />
          )}
        </div>

        {!hidePrice && (
          <ReactSlider
            className={root.slider}
            value={values}
            onChange={setValues}
            thumbClassName={root.thumb}
            trackClassName={root.track}
            min={10}
            max={300}
            step={10}
            defaultValue={values}
            renderThumb={(props, state) => (
              <div {...props}>
                <span className={root.values}>${state.valueNow}</span>
              </div>
            )}
            minDistance={50}
          />
        )}
      </div>

      <Line width="100%" top={hidePrice ? "24px" : "54px"} bottom="24px" />

      <div className={root.colors}>
        <div
          onClick={() => setHideColors((prev) => !prev)}
          className={root.dFlex}
        >
          <h4 className={root.title}>Colors</h4>
          {hideColors ? (
            <MdKeyboardArrowDown size={25} />
          ) : (
            <MdKeyboardArrowUp size={25} />
          )}
        </div>

        <div className={root.items}>{!hideColors && colors}</div>
      </div>

      <Line width="100%" bottom="24px" top="24px" />

      <div className={root.size}>
        <div
          onClick={() => setHideSizes((prev) => !prev)}
          className={root.dFlex}
        >
          <h4 className={root.title}>Size</h4>
          {hideSizes ? (
            <MdKeyboardArrowDown size={25} />
          ) : (
            <MdKeyboardArrowUp size={25} />
          )}
        </div>

        <div className={root.btns}>{!hideSizes && sizes}</div>
      </div>

      <Line width="100%" top="24px" bottom="20px" />

      <div className={root.dressStyle}>
        <div
          onClick={() => setHideDressStyles((prev) => !prev)}
          className={root.dFlex}
        >
          <h4 className={root.title}>Dress Style</h4>
          <MdKeyboardArrowUp size={25} />
        </div>

        {!hideDressStyles && <div className={root.items}>{dressStyles}</div>}
      </div>

      <button
        onClick={() => dispatch(setApplyFilter())}
        className={root.applyFilters}
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;

import root from "./brands.module.scss";
import versace from "../../assets/versace.svg";
import zara from "../../assets/zara.svg";
import gucci from "../../assets/gucci.svg";
import prada from "../../assets/prada.svg";
import calvinClain from "../../assets/celvinClain.svg";

const Brands = () => {
  return (
    <ul className={root.brands}>
      <li>
        <img alt="brand" src={versace} />
      </li>
      <li>
        <img alt="brand" src={zara} />
      </li>
      <li>
        <img alt="brand" src={gucci} />
      </li>
      <li>
        <img alt="brand" src={prada} />
      </li>
      <li>
        <img alt="brand" src={calvinClain} />
      </li>
    </ul>
  );
};

export default Brands;

import root from "./fourItemsTemplate.module.scss";
import ProductSkeleton from "../skeleton/productSkeleton";
import { product } from "../../redux/slices/productsSlice";
import { Item } from "./item/item";
import { useNavigate } from "react-router-dom";

interface props {
  title?: string;
  items?: any;
  buttonName?: string;
  showButton?: boolean;
  bottom?: string;
}

const FourItemsTemplate: React.FC<props> = ({
  title,
  items,
  buttonName = "View All",
  showButton = true,
  bottom = "0px",
}: any) => {
  const navigate = useNavigate();

  const products = items
    ? items.map((item: product) => <Item key={item.id} {...item} />)
    : [...new Array(4)].map((_, index) => <ProductSkeleton key={index} />);

  return (
    <div style={{ marginBottom: bottom }} className={root.fourItemsTemplate}>
      <h1 className={root.title}>{title}</h1>

      <div className={root.itemsList}>{products}</div>

      {showButton && (
        <button
          onClick={() => navigate("/shop")}
          className={root.viewAll}
        >
          {buttonName}
        </button>
      )}
    </div>
  );
};

export default FourItemsTemplate;

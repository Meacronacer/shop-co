import root from "./productDetail.module.scss";
import Line from "../common/Line/line";
import NavLinks from "../common/navLinks/navLinks";
import ReviewItem from "../ourHappyCustomers/reviewItem/reivewItem";
import Quantity from "../common/quantity/quantity";
import { IoIosCheckmark } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { Item } from "../fourItemsTemplate/item/item";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { product } from "../../redux/slices/productsSlice";

const tabsNames = ["Product Details", "Rating & Reviews", "FAQs"];

interface props {
  comments: Array<{
    id: number;
    comment: string;
    name: string;
    rating: number;
  }>;
  productDetailData: product;
}

const ProductDetail: React.FC<props> = ({ comments, productDetailData }) => {
  const dispatch = useAppDispatch();

  const [currentColor, setCurrentColor] = useState<number>(0);
  const [currentSize, setCurrentSize] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    const { id, image, title, colors, sizes, price, priceBefore } =
      productDetailData;

    dispatch(
      addItemToCart({
        id,
        image,
        title,
        price,
        priceBefore,
        quantity,
        color: colors[currentColor],
        size: sizes[currentSize],
      }),
    );
  };

  const usersComments = comments.map((item: any) => (
    <ReviewItem
      {...item}
      key={item.id}
      itemMaxWidth="610px"
      textMaxWidth="546px"
      date={true}
    />
  ));

  const colors = productDetailData.colors.map((item, index) => {
    return (
      <div
        key={index}
        onClick={() => setCurrentColor(index)}
        className={root.color}
        style={{ backgroundColor: item }}
      >
        {currentColor === index && (
          <IoIosCheckmark
            color={item === "white" ? "#000" : "#fff"}
            size={35}
          />
        )}
      </div>
    );
  });

  const btbsSize = productDetailData.sizes.map((item, index) => {
    return (
      <button
        key={index}
        onClick={() => setCurrentSize(index)}
        className={currentSize === index ? root.current : ""}
      >
        {item}
      </button>
    );
  });

  const tabs = tabsNames.map((item, index) => {
    return (
      <div
        onClick={() => setCurrentTab(index)}
        key={index}
        className={root.item}
      >
        <h4>{item}</h4>
        <Line
          width="100%"
          current={
            index === currentTab
              ? "2px solid rgba(0, 0, 0, 0.8)"
              : "1px solid rgba(0, 0, 0, 0.1)"
          }
        />
      </div>
    );
  });

  return (
    <div className={root.productDetail}>
      <NavLinks items={["Home", "Shop", "T-shirts"]} />

      <div className={root.product}>
        <img
          alt="product"
          className={root.bigImage}
          src={productDetailData.image}
        />

        <div className={root.itemInfo}>
          <Item
            {...productDetailData}
            starSize={25}
            showImage={false}
            fontFamily="var(--second-family)"
            fontSizeTitle="39px"
            fontSizePrice="32px"
            spanSize="16px"
            rowGap="14px"
          />

          <p className={root.description}>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <Line top="18px" width="100%" bottom="18px" />

          <span className={root.selectColor}>Select Colors</span>

          <div className={root.colors}>{colors}</div>

          <Line top="20px" width="100%" bottom="20px" />

          <span className={root.selectColor}>Choose Size</span>

          <div className={root.btnSize}>{btbsSize}</div>

          <Line top="20px" width="100%" bottom="24px" />

          <div className={root.quantity}>
            <Quantity id={1} quantity={quantity} setQuantity={setQuantity} />
            <button onClick={addToCart} className={root.addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className={root.RatingReviews}>
        <div className={root.tabs}>{tabs}</div>

        <div className={root.reviews}>
          <h4 className={root.title}>All Reviews</h4>
          <div className={root.filters}>
            <div className={root.settings}>
              <VscSettings size={26} />
            </div>
            <div className={root.select}>
              <select name="filter" id="filter">
                <option value="Latest">Latest</option>
                <option value="Newest">Newest</option>
                <option value="Rating ASC">Rating ASC</option>
                <option value="Rating DESC">Rating DESC</option>
              </select>
            </div>
            <button className={root.writeReview}>Write a Review</button>
          </div>
        </div>

        <div className={root.itemsList}>{usersComments}</div>

        <button className={root.loadMore}>Load More Reviews</button>
      </div>
    </div>
  );
};

export default ProductDetail;

import root from "./item.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { product } from "../../../redux/slices/productsSlice";
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

interface props extends product {
  showImage?: boolean;
  starSize?: number;
  fontFamily?: string;
  fontSizeTitle?: string;
  fontSizePrice?: string;
  spanSize?: string;
  width?: string;
  height?: string;
  rowGap?: string;
}

export const Item: React.FC<props> = React.memo(
  ({
    showImage = true,
    starSize = 20,
    fontFamily = "var(--first-family)",
    fontSizeTitle = "20px",
    fontSizePrice = "24px",
    spanSize = "14px",
    width = "fit-content",
    rowGap = "9px",
    image,
    title,
    price,
    priceBefore,
    rating,
  }) => {
    const navigate = useNavigate();

    const navgateTo = () => {
      navigate(`/${title}`);
      window.scrollTo(0, 0);
    };

    const ratingHandler = (rating: number) => {
      let halfstar = false;
      return Array.from({ length: 5 }).map((_, index) => {
        if (index + 1 <= rating) {
          return <IoStar key={index} size={starSize} color="orange" />;
        } else if (!Number.isInteger(rating) && !halfstar) {
          halfstar = true;
          return (
            <IoStarHalfOutline key={index} size={starSize} color="orange" />
          );
        }

        return <IoStarOutline key={index} size={starSize} color="orange" />;
      });
    };

    return (
      <div style={{ rowGap: rowGap }} className={root.item}>
        {showImage && (
          <motion.img
            alt="product"
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            className={root.photo}
            onClick={navgateTo}
            src={image}
          />
        )}
        <h4
          onClick={navgateTo}
          style={{ fontSize: fontSizeTitle, fontFamily: fontFamily }}
          className={root.name}
        >
          {title}
        </h4>
        <div className={root.rating}>
          {rating && ratingHandler(rating)}
          <span style={{ fontSize: spanSize, marginLeft: "10px" }}>
            {rating}/5
          </span>
        </div>
        <div className={root.itemPrice}>
          <span style={{ fontSize: fontSizePrice }} className={root.priceNow}>
            ${price}
          </span>
          {priceBefore && (
            <span
              style={{ fontSize: fontSizePrice }}
              className={root.priceBefore}
            >
              ${priceBefore}
            </span>
          )}
          {priceBefore && (
            <div
              style={{ fontSize: spanSize, width: width }}
              className={root.discount}
            >
              -{(((priceBefore - price) * 100) / priceBefore).toFixed(0)}%
            </div>
          )}
        </div>
      </div>
    );
  },
);

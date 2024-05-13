import root from "./reviewItem.module.scss";
import { IoStar } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { comment } from "../ourHappyCustomers";

interface props extends comment {
  date?: boolean;
  itemMaxWidth?: string;
  textMaxWidth?: string;
}

const ReviewItem: React.FC<props> = ({
  date = false,
  itemMaxWidth = "400px",
  textMaxWidth = "336px",
  name,
  comment,
}) => {
  return (
    <div style={{ maxWidth: itemMaxWidth }} className={root.item}>
      <div className={root.rating}>
        <IoStar size={20} color="orange" />
        <IoStar size={20} color="orange" />
        <IoStar size={20} color="orange" />
        <IoStar size={20} color="orange" />
        <IoStar size={20} color="orange" />
      </div>

      <div className={root.dFlex}>
        <h3 title={name} className={root.name}>
          {name}
        </h3>
        <IoIosCheckmarkCircle color="green" size={25} />
      </div>
      <p style={{ maxWidth: textMaxWidth }} className={root.text}>
        {comment}
      </p>

      {date && <span className={root.date}>Posted on August 14, 2023</span>}
    </div>
  );
};

export default ReviewItem;

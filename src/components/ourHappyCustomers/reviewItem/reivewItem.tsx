import root from './reviewItem.module.scss'
import { IoStar } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ReviewItem = ({date = false, itemMaxWidth = '400px', textMaxWidth = '336px'}) => {
    return (
        <div style={{maxWidth: itemMaxWidth}} className={root.item}>
            <div className={root.rating}>
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
            </div>

            <h3 className={root.name}>Sarah M. <IoIosCheckmarkCircle color='green' size={25} /></h3>

            <p style={{maxWidth: textMaxWidth}} className={root.text}>
            "I'm blown away by the quality and style
            of the clothes I received from Shop.co.
            From casual wear to elegant dresses,
            every piece I've bought
            has exceeded my expectations.”
            </p>

            {date && <span>Posted on August 14, 2023</span>}
        </div>
    );
}
 
export default ReviewItem;
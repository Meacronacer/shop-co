import root from './ourHappyCustomers.module.scss'
import { IoStar } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

const OurHappyCustomers = () => {
    return (
        <div className={root.main}>
            <h1 className={root.title}>OUR HAPPY CUSTOMERS</h1>

            <div className={root.items}>
                <div className={root.item}>
                    <div className={root.rating}>
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                   </div>

                   <h3 className={root.name}>Sarah M. <IoIosCheckmarkCircle color='green' size={25} /></h3>

                   <p className={root.text}>
                    "I'm blown away by the quality and style
                    of the clothes I received from Shop.co.
                    From casual wear to elegant dresses,
                    every piece I've bought
                    has exceeded my expectations.”
                   </p>
                </div>

                <div className={root.item}>
                    <div className={root.rating}>
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                   </div>

                   <h3 className={root.name}>Sarah M. <IoIosCheckmarkCircle color='green' size={25} /></h3>

                   <p className={root.text}>
                    "I'm blown away by the quality and style
                    of the clothes I received from Shop.co.
                    From casual wear to elegant dresses,
                    every piece I've bought
                    has exceeded my expectations.”
                   </p>
                </div>

                <div className={root.item}>
                    <div className={root.rating}>
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                        <IoStar size={20} color='orange' />
                   </div>

                   <h3 className={root.name}>Sarah M. <IoIosCheckmarkCircle color='green' size={25} /></h3>

                   <p className={root.text}>
                    "I'm blown away by the quality and style
                    of the clothes I received from Shop.co.
                    From casual wear to elegant dresses,
                    every piece I've bought
                    has exceeded my expectations.”
                   </p>
                </div>
            </div>

        </div>
    );
}
 
export default OurHappyCustomers;
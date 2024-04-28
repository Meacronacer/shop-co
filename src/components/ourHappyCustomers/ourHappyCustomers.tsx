import root from './ourHappyCustomers.module.scss'
import { IoStar } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomArrows from '../common/arrows/arrows';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1400 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1400, min: 850 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
    }
  };

const OurHappyCustomers = () => {
    return (
        <div className={root.ourHappyCustomers}>
            <h1 className={root.title}>OUR HAPPY CUSTOMERS</h1>

            <div className={root.items}>
            <Carousel responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  keyBoardControl={true}
                  transitionDuration={1000}

                  renderButtonGroupOutside={true}
                  arrows={false}
                  customButtonGroup={<CustomArrows />}
            >
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
                </Carousel>
            </div>

        </div>
    );
}
 
export default OurHappyCustomers;
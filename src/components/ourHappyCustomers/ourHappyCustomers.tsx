import root from "./ourHappyCustomers.module.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CustomArrows from "../common/arrows/arrows";
import ReviewItem from "./reviewItem/reivewItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1400 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1100, min: 750 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
  },
};

export interface comment {
  id: number;
  rating: number;
  name: string;
  comment: string;
}

interface props {
  data: Array<comment>;
}

const OurHappyCustomers: React.FC<props> = ({ data }) => {
  const comments = data?.map((item) => <ReviewItem key={item.id} {...item} />);

  return (
    <div className={root.ourHappyCustomers}>
      <h1 className={root.title}>OUR HAPPY CUSTOMERS</h1>

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={<CustomArrows />}
      >
        {comments}
      </Carousel>
    </div>
  );
};

export default OurHappyCustomers;

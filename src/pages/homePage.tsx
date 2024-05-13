import ContentTop from "../components/contentTop/contentTop";
import Brands from "../components/brands/brands";
import FourItemsTemplate from "../components/fourItemsTemplate/fourItemsTemplate";
import Line from "../components/common/Line/line";
import DressStyle from "../components/dressStyle/dressStyle";
import OurHappyCustomers from "../components/ourHappyCustomers/ourHappyCustomers";
import {
  useGetAllComentsQuery,
  useGetNewArriwalsQuery,
  useGetTopSellingQuery,
} from "../redux/api/apiSlices";
import Loyaout from "./loyaout/loyaout";

const HomePage = () => {
  const { data: newArriwalsData = [] } = useGetNewArriwalsQuery({});
  const { data: topSellingData = [] } = useGetTopSellingQuery({});
  const { data: commentsData = [] } = useGetAllComentsQuery({});

  return (
    <Loyaout>
      <ContentTop />
      <Brands />
      <FourItemsTemplate items={newArriwalsData} title="NEW ARRIVALS" />
      <Line top="64px" bottom="64px" />
      <FourItemsTemplate items={topSellingData} title="TOP SELLING" />
      <DressStyle />
      <OurHappyCustomers data={commentsData} />
    </Loyaout>
  );
};

export default HomePage;

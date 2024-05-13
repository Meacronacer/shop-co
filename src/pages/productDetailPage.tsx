import Loyaout from "./loyaout/loyaout";
import Line from "../components/common/Line/line";
import FourItemsTemplate from "../components/fourItemsTemplate/fourItemsTemplate";
import ProductDetail from "../components/productDetail/productDetail";
import arrayShuffle from "array-shuffle";
import { useParams } from "react-router-dom";
import {
  useGetAllComentsQuery,
  useGetProductByTitleQuery,
  useGetYouMightLikeQuery,
} from "../redux/api/apiSlices";

const ProductDetailPage = () => {
  const { productTitle } = useParams();

  const { data: productDetailData = [], isLoading } = useGetProductByTitleQuery(
    { productTitle },
  );
  const { data: comments = [] } = useGetAllComentsQuery({});
  const { data: youMightLikeData = [] } = useGetYouMightLikeQuery(
    { type: productDetailData[0]?.type },
    {
      skip: !!!productDetailData[0]?.type,
    },
  );

  const youMightLikeToo = arrayShuffle(youMightLikeData)
    .filter((item: any) => item?.title !== productDetailData[0]?.title)
    .slice(0, 4);

  if (isLoading) return null;

  return (
    <Loyaout>
      <Line />
      <ProductDetail
        comments={comments}
        productDetailData={productDetailData[0]}
      />
      <FourItemsTemplate
        items={youMightLikeToo}
        showButton={false}
        bottom="170px"
        title="You might also like"
      />
    </Loyaout>
  );
};

export default ProductDetailPage;

import Line from '../../components/common/Line/line';
import Discount from '../../components/discount/discount';
import Footer from '../../components/footer/footer';
import FourItemsTemplate from '../../components/fourItemsTemplate/fourItemsTemplate';
import Header from '../../components/header/header';
import ProductDetail from '../../components/productDetail/productDetail';
import root from './productDetailPage.module.scss'


const ProductDetailPage = () => {
    return (
        <>
        <div className={root.productDetailPage}>
            <Discount />
            <Header />
            <Line />
            <ProductDetail />
            <FourItemsTemplate showButton={false} bottom='170px' title='You might also like' />
        </div>
        <Footer />
        </>
    );
}
 
export default ProductDetailPage;
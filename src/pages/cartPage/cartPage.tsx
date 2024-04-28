import Line from '../../components/common/Line/line';
import Discount from '../../components/discount/discount';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import root from './cartPage.module.scss'


const CartPage = () => {
    return (
        <>
        <div className={root.cartPage}>
            <Discount />
            <Header />
            <Line />

        </div>
        {/* <Footer /> */}
        </>
    );
}
 
export default CartPage;
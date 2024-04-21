import root from './mainPage.module.scss'
import Header from "../../components/header/header";
import ContentTop from '../../components/contentTop/contentTop';
import Discount from '../../components/discount/discount';
import Brands from '../../components/brands/brands';
import FourItemsTemplate from '../../components/fourItemsTemplate/fourItemsTemplate';
import Line from '../../components/common/Line/line';
import DressStyle from '../../components/dressStyle/dressStyle';
import OurHappyCustomers from '../../components/ourHappyCustomers/ourHappyCustomers';
import Footer from '../../components/footer/footer';


const MainPage = () => {
    return (
        <>
            <div className={root.mainPage}>
                <Discount />
                <Header/>
                <ContentTop />
                <Brands />
                <FourItemsTemplate title='NEW ARRIVALS' />
                <Line top='64px' bottom='64px'/>
                <FourItemsTemplate title='top selling' />
                <DressStyle />
                <OurHappyCustomers />
            </div>
            <Footer />
        </>
    );
}
 
export default MainPage;
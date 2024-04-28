import Category from '../../components/category/category';
import Line from '../../components/common/Line/line';
import Discount from '../../components/discount/discount';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import root from './categoryPage.module.scss'


const CategoryPage = () => {
    return (
        <>
        <div className={root.categoryPage}>
            <Discount />
            <Header />
            <Line />
            <Category />
        </div>
        <Footer />
        </>
    );
}
 
export default CategoryPage;
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/mainPage/homePage';
import ProductDetailPage from '../pages/productDetailPage/productDetailPage';
import CategoryPage from '../pages/categoryPage/categoryPage';
import CartPage from '../pages/cartPage/cartPage';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/product-detail' element={<ProductDetailPage />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/cart' element={<CartPage />} />
        </Routes>
    );
}
 
export default App;
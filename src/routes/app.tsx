import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "../pages/productDetailPage";
import CategoryPage from "../pages/categoryPage";
import CartPage from "../pages/cartPage";
import HomePage from "../pages/homePage";

const App = () => {
  return (
    <Routes>
      <Route path="shop-co/" element={<HomePage />} />
      <Route path="shop-co/:productTitle" element={<ProductDetailPage />} />
      <Route path="shop-co/shop" element={<CategoryPage />} />
      <Route path="shop-co/cart" element={<CartPage />} />
      <Route path='*' element={<div><h1>PAGE NOT FOUND 404</h1></div>} />
    </Routes>
  );
};

export default App;

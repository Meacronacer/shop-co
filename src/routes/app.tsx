import { Routes, Route } from "react-router-dom";
import ProductDetailPage from "../pages/productDetailPage";
import CategoryPage from "../pages/categoryPage";
import CartPage from "../pages/cartPage";
import HomePage from "../pages/homePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<CategoryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/:productTitle" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default App;

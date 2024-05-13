import root from "./header.module.scss";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useAppSelector } from "../../hooks/reduxHooks";

const Header = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const { itemsCounter } = useAppSelector(state => state.cart)


  return (
    <div className={root.header}>
      <div className={root.title}>
        {isMobile && <MdMenu className={root.mobileMenu} size={35} />}
        <Link className={root.title} to="/shop-co/">
          SHOP.CO
        </Link>
      </div>
      {!isMobile && (
        <nav>
          <ul className={root.navbar}>
            <li className={root.item}>
              <Link to='/shop-co/shop'>Shop <FaAngleDown /></Link>
            </li>
            <li className={root.item}>
              <Link to=''>On Sale</Link>
            </li>
            <li className={root.item}>
              <Link to=''>New Arrivals</Link>
            </li>
            <li className={root.item}>
              <Link to=''>Brands</Link>
            </li>
          </ul>
        </nav>
      )}

      {!isDesktopOrLaptop && (
        <input className={root.search} placeholder="Search for products..." />
      )}

      <div className={root.cart}>
        {isDesktopOrLaptop && <FiSearch size={24} />}
        <Link aria-label="go to cart to seen your products" tabIndex={-1} to="/shop-co/cart">
          <LuShoppingCart size={24} />
          {itemsCounter > 0 && <div className={root.itemCount}>{itemsCounter}</div>}
        </Link>
        <FaRegUserCircle size={24} />
      </div>
    </div>
  );
};

export default Header;

import root from "./header.module.scss";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useAppSelector } from "../../hooks/reduxHooks";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { hideNavItemsVariant } from "./mobileModalMenu/mobileAnimationSettings";
import { useState } from "react";
import MobileModalMenu from "./mobileModalMenu/mobileModalMenu";

const Header = () => {
  const { scrollY } = useScroll();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const { itemsCounter } = useAppSelector((state) => state.cart);

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={root.header}
    >
      <div className={root.inner}>
        <MobileModalMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />

        <div className={root.title}>
          {isMobile && (
            <motion.div
              variants={hideNavItemsVariant}
              onClick={() => setShowMobileMenu(true)}
            >
              <MdMenu className={root.mobileMenu} size={35} />
            </motion.div>
          )}
          <Link className={root.title} to="/shop-co/">
            SHOP.CO
          </Link>
        </div>
        {!isMobile && (
          <nav>
            <ul className={root.navbar}>
              <li className={root.item}>
                <Link to="/shop-co/shop">Shop</Link>
              </li>
              <li className={root.item}>
                <Link to="">On Sale</Link>
              </li>
              <li className={root.item}>
                <Link to="">New Arrivals</Link>
              </li>
              <li className={root.item}>
                <Link to="">Brands</Link>
              </li>
            </ul>
          </nav>
        )}

        {!isDesktopOrLaptop && (
          <input className={root.search} placeholder="Search for products..." />
        )}

        <div className={root.cart}>
          {isDesktopOrLaptop && <FiSearch size={24} />}
          <Link
            aria-label="go to cart to seen your products"
            tabIndex={-1}
            to="/shop-co/cart"
          >
            <LuShoppingCart size={24} />
            {itemsCounter > 0 && (
              <div className={root.itemCount}>{itemsCounter}</div>
            )}
          </Link>
          <FaRegUserCircle size={24} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;

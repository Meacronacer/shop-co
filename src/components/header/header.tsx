import root from "./header.module.scss";
import MobileModalMenu from "./mobileModalMenu/mobileModalMenu";
import debounce from "lodash.debounce";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useAppSelector } from "../../hooks/reduxHooks";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { hideNavItemsVariant } from "./mobileModalMenu/mobileAnimationSettings";
import { useRef, useState, useEffect, useMemo, SetStateAction } from "react";
import { useLazyGetProductByTitleQuery } from "../../redux/api/apiSlices";
import { product } from "../../redux/slices/productsSlice";

const Header = () => {
  const { scrollY } = useScroll();
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ query: "(max-width: 660px)" });
  const isDesktopOrLaptop = useMediaQuery({query: "(max-width: 1000px)"});
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showSearchIcon, setShowSearchIcon] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('')

  const searchRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const [trigger, { data = [] }]  = useLazyGetProductByTitleQuery()
  const { itemsCounter } = useAppSelector((state) => state.cart);

  const dropDownData = data
  .map((item:product) => <li onClick={() => navigateBytitle(item.title)} key={item.id}>{item.title}</li>)


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!searchRef?.current?.contains(event.target as Node) &&
          !inputRef?.current?.contains(event.target as Node) &&
          !dropdownRef.current?.contains(event.target as Node)
      ) {
        setShowSearchIcon(true);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, []);


  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous && latest > previous && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

   
  const onChangeValue = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value)
    updateValue(e.target.value)
  }

  const navigateBytitle = (title:string) => {
    setInputValue('')
    navigate(`../${title}/`)
  }

  const updateValue = useMemo(() =>
    debounce(value => {
      if (value) {
        trigger({productTitle: `*${value}*`})
      }
    }, 500)
 ,[]);


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
              className={root.menu}
            >
              <MdMenu className={root.mobileMenu} size={35} />
            </motion.div>
          )}
          
          {isMobile && !showSearchIcon ? null :
            <Link className={root.title} to="/">
              SHOP.CO
            </Link>
          }
          
        </div>
        {!isMobile && (
          <nav>
            <ul className={root.navbar}>
              <li className={root.item}>
                <Link to="/shop">Shop</Link>
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
        

        <div className={root.cart}>
          {!isDesktopOrLaptop || showSearchIcon === false ?
          <>
          <motion.input
          className={root.search}
          ref={inputRef}
          placeholder="Search for products..."
          onChange={onChangeValue}
          value={inputValue}
            />
          {data?.length && inputValue?.length ?
              <div ref={dropdownRef} className={root.dropdown}>
                {dropDownData}
              </div>
              : null
            }
          </>
            :
          <div ref={searchRef}  onClick={() => setShowSearchIcon(false)}>
              <FiSearch size={24} />
          </div>
        }
          <Link
            aria-label="go to cart to seen your products"
            to="/cart"
          >
          <LuShoppingCart size={24} />
            {itemsCounter > 0 && (
              <div className={root.itemCount}>{itemsCounter}</div>
            )}
          </Link>
          <Link to=''>
            <FaRegUserCircle size={24} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;


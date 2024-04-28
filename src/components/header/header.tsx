import root from './header.module.scss'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive'
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-width: 1000px)'
      })
    const isMobile = useMediaQuery({query: '(max-width: 660px)'})

    return (
        <div className={root.header}>

            <div className={root.title}>
                {isMobile && <MdMenu className={root.mobileMenu} size={35} />}
                <h1>SHOP.CO</h1>
            </div>
            {!isMobile && <nav>
                <ul className={root.navbar}>
                    <li><a></a>Shop <FaAngleDown/></li>
                    <li><a></a>On Sale</li>
                    <li><a></a>New Arrivals</li>
                    <li><a></a>Brands</li>
                </ul>
            </nav>}

            {!isDesktopOrLaptop && <input className={root.search} placeholder='Search for products...' /> }

            <div className={root.cart}>
                {isDesktopOrLaptop && <FiSearch size={24} />}
                <LuShoppingCart size={24}/>
                <FaRegUserCircle size={24} />
            </div>
        </div>
    )
}
 
export default Header;
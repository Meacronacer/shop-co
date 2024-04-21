import root from './header.module.scss'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";


const Header = () => {
    return (
        <div className={root.header}>
            <h1>SHOP.CO</h1>
            <nav>
                <ul className={root.navbar}>
                    <li><a></a>Shop <FaAngleDown/></li>
                    <li><a></a>On Sale</li>
                    <li><a></a>New Arrivals</li>
                    <li><a></a>Brands</li>
                </ul>
            </nav>

            <input className={root.search} placeholder='Search for products...' />

            <div className={root.cart}>
                <LuShoppingCart size={24}/>
                <FaRegUserCircle size={24} />
            </div>
        </div>
    )
}
 
export default Header;
import root from './fourItemsTemplate.module.scss'
import tshirt from '../../assets/tshirt.png'
import { IoStar } from "react-icons/io5";

interface props {
    title: string
    items: []
    buttonName: string
    haveButton: boolean
}


const Item = () => {

    return (
        <div className={root.item}>
            <img className={root.photo} src={tshirt} />
            <h4 className={root.name}>T-shirt with Tape Details</h4>
            <div className={root.rating}>
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <IoStar size={20} color='orange' />
                <span>4.5/5</span>
            </div>
            <div className={root.itemPrice}>
                <span className={root.priceNow}>$240</span>
                <span className={root.priceBefore}>$260</span>
                <div className={root.discount}>
                    -20%
                </div>
            </div>
        </div>
    )
}


const FourItemsTemplate: React.FC<props> = ({title, items, buttonName, haveButton = false}) => {
    return (
        <div className={root.main}>
            <h1 className={root.title}>{title}</h1>

            <div className={root.itemsList}>
                <Item />
                <Item />
                <Item />
                <Item />
            </div>

            <button className={root.viewAll}>View All</button>
        </div>
    );
}
 
export default FourItemsTemplate;
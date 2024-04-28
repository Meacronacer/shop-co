import root from './item.module.scss'
import tshirt from '../../../assets/tshirt.png'
import { IoStar } from "react-icons/io5";

export const Item = ({
    showImage = true,
    starSize = 20,
    fontFamily = 'var(--first-family)',
    fontSizeTitle = '20px',
    fontSizePrice = '24px',
    spanSize = '12px',
    width = '58px',
    height = '28px',
    rowGap = '9px'
    }) => {

    return (
        <div style={{rowGap: rowGap}} className={root.item}>
            {showImage && <img className={root.photo} src={tshirt} />}
            <h4 style={{fontSize: fontSizeTitle, fontFamily: fontFamily}} className={root.name}>One Life Graphic T-shirt</h4>
            <div className={root.rating}>
                <IoStar size={starSize} color='orange' />
                <IoStar size={starSize} color='orange' />
                <IoStar size={starSize} color='orange' />
                <IoStar size={starSize} color='orange' />
                <IoStar size={starSize} color='orange' />
                <span style={{fontSize: spanSize, marginLeft: '10px'}}>4.5/5</span>
            </div>
            <div className={root.itemPrice}>
                <span style={{fontSize: fontSizePrice}} className={root.priceNow}>$240</span>
                <span style={{fontSize: fontSizePrice}} className={root.priceBefore}>$260</span>
                <div style={{fontSize: spanSize, width:width, height: height}} className={root.discount}>
                    -20%
                </div>
            </div>
        </div>
    )
}
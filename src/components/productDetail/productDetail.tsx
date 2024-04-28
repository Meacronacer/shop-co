import root from './productDetail.module.scss'
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import { IoIosCheckmark } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { Item } from '../fourItemsTemplate/item/item';
import Line from '../common/Line/line';
import { useState } from 'react';
import Quantity from '../common/quantity/quantity';
import ReviewItem from '../ourHappyCustomers/reviewItem/reivewItem';

const nav = ['Home', 'Shop', 'Men', 'T-shirts']
const col = ['#4f4631', '#314f4a', '#31344f']
const btns = ['Small', 'Medium', 'Large', 'X-Large']
const tabsNames = ['Product Details', 'Rating & Reviews', 'FAQs']
const img = [image1, image2, image3]

const ProductDetail = () => {
    const [currentColor, setCurrentColor] = useState<number>(0)
    const [currentSize, setCurrentSize] = useState<number>(2)
    const [currentTab, setCurrentTab] = useState<number>(1)
    const [quantity, setQuantity] = useState<number>(1)
    const [selectedImage, setSelectedImage] = useState(0)

    const navigation = nav.map((item, index) => {
        return (
            <li key={index}>
                <a>{item}</a> {index !== 3 && <MdKeyboardArrowRight size={25} />}
            </li>
        )
    })

    const images = img.map((item, index) => {
        return (
            <img
             onClick={() => setSelectedImage(index)} 
             src={item}
             className={index === selectedImage ? root.selected : ''}
            />
        )
    })

    const colors = col.map((item, index) => {
        return (
            <div 
                key={index} 
                onClick={() => setCurrentColor(index)}
                style={{backgroundColor: item, cursor:'pointer', borderRadius: '100%', height: '37px', width: '37px'}}
            >
                {currentColor === index && <IoIosCheckmark color='#fff' size={35} />  } 
            </div>
        )
    })

    const btbsSize = btns.map((item, index) => {
        return (
            <button 
                key={index}
                onClick={() => setCurrentSize(index)}
                className={currentSize === index ? root.current: ''}
            >{item}
            </button>
        )
    })

    const tabs = tabsNames.map((item, index) => {
        return (
            <div onClick={() => setCurrentTab(index)} key={index} className={root.item}>
                <h4>{item}</h4>
                <Line width='100%' current={
                    index === currentTab ? 
                    '2px solid rgba(0, 0, 0, 0.8)' 
                    : 
                    '1px solid rgba(0, 0, 0, 0.1)'
                } />
            </div>
        )
    })


    return (
        <div className={root.productDetail}>

            <ul className={root.navLinks}>
                {navigation}
            </ul>

            <div className={root.product}>
                <div className={root.images}>
                    {images}
                </div>

                <img className={root.bigImage} src={img[selectedImage]} />

                <div className={root.itemInfo}>
                    <Item 
                        starSize={25}
                        showImage={false}
                        fontFamily='var(--second-family)'
                        fontSizeTitle='39px'
                        fontSizePrice='32px'
                        width='72px'
                        height='34px'
                        spanSize='16px'
                        rowGap='14px'
                      />

                    <p className={root.description}>
                        This graphic t-shirt which
                        is perfect for any occasion.
                        Crafted from a soft and breathable fabric,
                        it offers superior comfort and style.
                    </p>

                    <Line top='18px' width='100%' bottom='18px' />

                    <span className={root.selectColor}>Select Colors</span>

                    <div className={root.colors}>
                        {colors}
                    </div>

                    <Line top='20px' width='100%' bottom='20px' />

                    <span className={root.selectColor}>Choose Size</span>

                    <div className={root.btnSize}>
                        {btbsSize}
                    </div>

                    <Line top='20px' width='100%' bottom='24px' />

                    <div className={root.quantity}>
                        <Quantity quantity={quantity} setQuantity={setQuantity} />
                        <button className={root.addToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className={root.RatingReviews}>
                <div className={root.tabs}>
                    {tabs}
                </div>

                <div className={root.reviews}>
                    <h4 className={root.title}>All Reviews</h4>
                    <div className={root.filters}>
                        <div className={root.settings}>
                            <VscSettings size={26}/>
                        </div>
                        <div className={root.select}>
                            <select  name="filter" id="filter">
                                <option value="Latest">Latest</option>
                                <option value="Newest">Newest</option>
                                <option value="Rating ASC">Rating ASC</option>
                                <option value="Rating DESC">Rating DESC</option>
                            </select>
                        </div>
                        <button className={root.writeReview}>Write a Review</button>
                    </div>
                </div>

                <div className={root.itemsList}>
                    <ReviewItem itemMaxWidth='610px' textMaxWidth='546px' date={true} />
                    <ReviewItem itemMaxWidth='610px' textMaxWidth='546px' date={true} />
                    <ReviewItem itemMaxWidth='610px' textMaxWidth='546px' date={true} />
                    <ReviewItem itemMaxWidth='610px' textMaxWidth='546px' date={true} />
                    <ReviewItem itemMaxWidth='610px' textMaxWidth='546px' date={true} />
                    <ReviewItem itemMaxWidth='610px' textMaxWidth='546px' date={true} />
                </div>

                <button className={root.loadMore}>Load More Reviews</button>
            </div>
        </div>
    );
}
 
export default ProductDetail;
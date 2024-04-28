import root from './content.module.scss'
import bigVector from '../../assets/bigVector.svg'
import medVector from '../../assets/medVector.svg'

const ContentTop = () => {
    return (
        <div className={root.contentTop}>
            <div className={root.info}>
                <h1 className={root.title}>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className={root.text}>
                    Browse through our diverse
                    range of meticulously crafted garments,
                    designed to bring out your individuality
                    and cater to your sense of style.
                </p>
                <button className={root.shopBtn}>Shop Now</button>

                <div className={root.brands}>
                    <div className={root.cellOne}>
                        <div>
                            <h1 className={root.quantity}>200+</h1>
                            <span className={root.name}>International Brands</span>
                        </div>

                        <div className={root.line}></div>
                        
                        <div>
                            <h1 className={root.quantity}>2,000+</h1>
                            <span className={root.name}>High-Quality Products</span>
                        </div>
                    </div>
                    
                    <div className={root.cellTwo}>
                        <div className={root.line}></div>
                        
                        <div>
                            <h1 className={root.quantity}>30,000+</h1>
                            <span className={root.name}>Happy Customers</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={root.svgs}>
                <img className={root.big} src={bigVector} />
                <img className={root.med} src={medVector} />
            </div>
        </div>
    );
}
 
export default ContentTop;
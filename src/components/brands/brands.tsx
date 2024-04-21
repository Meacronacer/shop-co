import root from './brands.module.scss'
import versace from '../../assets/versace.svg'
import zara from '../../assets/zara.svg'
import gucci from '../../assets/gucci.svg'
import prada from '../../assets/prada.svg'
import calvinClain from '../../assets/celvinClain.svg'

const Brands = () => {
    return (
        <div className={root.brands}>
            <img src={versace} />
            <img src={zara} />
            <img src={gucci} />
            <img src={prada} />
            <img src={calvinClain} />
        </div>
    );
}
 
export default Brands;
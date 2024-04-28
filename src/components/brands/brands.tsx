import root from './brands.module.scss'
import versace from '../../assets/versace.svg'
import zara from '../../assets/zara.svg'
import gucci from '../../assets/gucci.svg'
import prada from '../../assets/prada.svg'
import calvinClain from '../../assets/celvinClain.svg'

const Brands = () => {
    return (
        <ul className={root.brands}>
            <li><img src={versace} /></li>
            <li><img src={zara} /></li>
            <li><img src={gucci} /></li>
            <li><img src={prada} /></li>
            <li><img src={calvinClain} /></li>
        </ul>
    );
}
 
export default Brands;
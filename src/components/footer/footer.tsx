import Subscribe from '../subscribe/subscribe';
import root from './footer.module.scss'
import twitter from '../../assets/twitter.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import visa from '../../assets/visa.svg'
import masterCard from '../../assets/masterCard.svg'
import paypal from '../../assets/paypal.svg'
import ipay from '../../assets/ipay.svg'
import gpay from '../../assets/gpay.svg'

import Line from '../common/Line/line';



const Footer = () => {
    return (
        <div className={root.footer}>
            <div className={root.inner}>
                <Subscribe />

                <div className={root.shop}>
                    <div className={root.info}>
                        <h4 className={root.title}>SHOP.CO</h4>
                        <p className={root.description}>
                            We have clothes that suits your style
                            and which you’re proud to wear.
                            From women to men.
                        </p>
                        <div className={root.socialMedia}>
                            <img src={twitter} alt='twitter' />
                            <img src={facebook} alt='faceebook'/>
                            <img src={instagram} alt='instagram' />
                            <img src={github} alt='github' />
                        </div>
                    </div>

                    <ul>
                       <li>COMPANY</li>
                       <li><a>About</a></li> 
                       <li><a>Features</a></li> 
                       <li><a>Works</a></li>
                       <li><a>Career</a></li> 
                    </ul>
                    <ul>
                       <li>HELP</li>
                       <li><a>Customer Support</a></li> 
                       <li><a>Delivery Details</a></li> 
                       <li><a>Terms & Conditions</a></li>
                       <li><a>Privacy Policy</a></li> 
                    </ul>
                    <ul>
                       <li>FAQ</li>
                       <li><a>Account</a></li> 
                       <li><a>Manage Deliveries</a></li> 
                       <li><a>Orders</a></li>
                       <li><a>Payments</a></li> 
                    </ul>
                    <ul>
                       <li>RESOURCES</li>
                       <li><a>Free eBooks</a></li> 
                       <li><a>Development Tutorial</a></li> 
                       <li><a>How to - Blog</a></li>
                       <li><a>Youtube Playlist</a></li> 
                    </ul>
                </div>

                <Line top='44px' bottom='15px' />

                <div className={root.payments}>
                    <span className={root.title}>Shop.co © 2000-2023, All Rights Reserved</span>

                    <div className={root.svgs}>
                        <img src={visa} alt='visa' />
                        <img src={masterCard} alt='masterCard' />
                        <img src={paypal} alt='paypal' />
                        <img src={ipay} alt='ipay' />
                        <img src={gpay} alt='gpay' />
                    </div>
                </div>

            </div>

        </div>
    );
}
 
export default Footer;
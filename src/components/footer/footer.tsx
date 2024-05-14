import Subscribe from "./subscribe/subscribe";
import root from "./footer.module.scss";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import visa from "../../assets/visa.svg";
import masterCard from "../../assets/masterCard.svg";
import paypal from "../../assets/paypal.svg";
import ipay from "../../assets/ipay.svg";
import gpay from "../../assets/gpay.svg";
import Line from "../common/Line/line";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={root.footer}>
      <div className={root.inner}>
        <Subscribe />

        <div className={root.shop}>
          <div className={root.info}>
            <h5 className={root.title}>SHOP.CO</h5>
            <p className={root.description}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className={root.socialMedia}>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="faceebook" />
              <img src={instagram} alt="instagram" />
              <img src={github} alt="github" />
            </div>
          </div>

          <div className={root.links}>
            <ul>
              <li>COMPANY</li>
              <li>
                <Link to="" tabIndex={-1}>
                  About
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Works
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Career
                </Link>
              </li>
            </ul>
            <ul>
              <li>HELP</li>
              <li>
                <Link to="" tabIndex={-1}>
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <ul>
              <li>FAQ</li>
              <li>
                <Link to="" tabIndex={-1}>
                  Account
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Orders
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Payments
                </Link>
              </li>
            </ul>
            <ul>
              <li>RESOURCES</li>
              <li>
                <Link to="" tabIndex={-1}>
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link to="" tabIndex={-1}>
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Line top="44px" bottom="15px" />

        <div className={root.payments}>
          <span className={root.title}>
            Shop.co © 2000-2023, All Rights Reserved
          </span>

          <div className={root.svgs}>
            <img src={visa} alt="visa" />
            <img src={masterCard} alt="masterCard" />
            <img src={paypal} alt="paypal" />
            <img src={ipay} alt="ipay" />
            <img src={gpay} alt="gpay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

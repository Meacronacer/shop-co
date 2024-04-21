import root from './discount.module.scss'


const Discount = () => {
    return (
        <div className={root.discount}>
            <p className={root.text}>
                Sign up and get 20% off to your first order.
            </p>
            <a className={root.signUp}>Sign Up Now</a>
        </div>
    );
}
 
export default Discount;
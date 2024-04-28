import root from './subscribe.module.scss'


const Subscribe = () => {
    return (
        <div className={root.subscribe}>
            <div className={root.info}>
                <h2 className={root.title}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
            </div>
            <div className={root.userEmail}>
                <input className={root.email} placeholder='Enter your email address' />
                <button className={root.submit}>Subscribe to Newsletter</button>
            </div>
        </div>
    );
}
 
export default Subscribe;
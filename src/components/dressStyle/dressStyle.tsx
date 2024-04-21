import root from './dressStyle.module.scss'


const DressStyle = () => {
    return (
        <div className={root.main}>
            <h1 className={root.title}>BROWSE BY DRESS STYLE</h1>

            <div className={root.items}>
                <div className={root.cell}>
                    <div className={root.casual}>
                        <h2 className={root.name}>Casual</h2>
                    </div>
                    <div className={root.formal}>
                        <h2 className={root.name}>Formal</h2>
                    </div>
                </div>
                <div className={root.cell}>
                    <div className={root.party}>
                        <h2 className={root.name}>Party</h2>
                    </div>
                    <div className={root.gym}>
                        <h2 className={root.name}>Gym</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DressStyle;
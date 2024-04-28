import root from './quantity.module.scss'
import { FaPlus, FaMinus  } from "react-icons/fa6";

interface props {
    quantity: number
    setQuantity: (quantity: number| ((prev: number) => number)) => void
}

const Quantity: React.FC<props> = ({quantity, setQuantity}) => {
    return (
        <div className={root.quantity}>
            <>
                <button 
                    disabled={quantity === 1}
                    onClick={() => setQuantity(prev => prev - 1)}
                    className={root.minus}>
                    <FaMinus size={25} />
                </button>

                <input readOnly type="number" className={root.inputBox} value={quantity} />

                <button 
                    className={root.plus}
                    onClick={() => setQuantity(prev => prev + 1)}
                >
                    <FaPlus size={25}/>
                </button>
            </>
        </div>
    )
}


export default Quantity
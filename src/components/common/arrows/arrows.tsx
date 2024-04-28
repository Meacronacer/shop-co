import root from './arrows.module.scss';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const CustomArrows = ({ next, previous, goToSlide, ...rest}:any) => {
    const { carouselState: { currentSlide } } = rest;
    
    return (
        <div className={root.arrows}>
            <FaArrowLeft size={25} onClick={() => previous()} />
            <FaArrowRight size={25} onClick={() => next()} />
        </div>
    );
}
 
export default CustomArrows;
import Line from '../../common/Line/line';
import root from './filters.module.scss'
import ReactSlider from 'react-slider'
import { IoIosCheckmark, IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { useState } from 'react';


const col = [
    '#00c12b',
    '#f50606',
    '#f5dd06', 
    '#f57906',
    '#06caf5',
    '#063af5',
    '#7d06f5', 
    '#f506a4',
    '#fff',
    '#000'
]

interface props {
    onClick?: () => void
    afterCloseModal?: () => void
    laptop?: boolean 
    isOpen?: boolean
    
}


const Filters: React.FC<props> = ({ laptop, isOpen, afterCloseModal}) => {
    const [values, setValues] = useState([50, 200])
    const [currentColor, setCurrentColor] = useState<number>(5)
    const [currentSize, setCurrentSize] = useState<number>(4)

    const colors = col.map((item, index) => {
        return (
            <div 
                key={index} 
                onClick={() => setCurrentColor(index)}
                style={{
                    backgroundColor: item,
                    border:' 1px solid rgba(0, 0, 0, 0.2)',
                    cursor:'pointer',
                    borderRadius: '100%',
                    height: '37px',
                    width: '37px'
                }}
            >
                {currentColor === index && <IoIosCheckmark color='#fff' size={35} />  } 
            </div>
        )
    })

    return (
        <div className={root.filters}>
            <div className={root.dFlex}>
                <h4 className={root.title}>Filters</h4>
                {!laptop && isOpen ? <IoMdClose onClick={afterCloseModal} size={25} /> : <VscSettings size={25} />}
            </div>

            <Line width='100%' top='24px' bottom='15px' />

            <ul className={root.type}>
                <li>T-shirts <span><MdKeyboardArrowRight size={25} /></span></li>
                <li>Shorts <span><MdKeyboardArrowRight size={25} /></span></li>
                <li>Shirts <span><MdKeyboardArrowRight size={25} /></span></li>
                <li>Hoodie <span><MdKeyboardArrowRight size={25} /></span></li>
                <li>Jeans <span><MdKeyboardArrowRight size={25} /></span></li>
            </ul>

            <Line width='100%' top='18px' bottom='24px' />

            <div className={root.price}>
                <div className={root.dFlex}>
                    <h4 className={root.title}>Price</h4>
                    <MdKeyboardArrowUp size={25} />
                </div>

                <ReactSlider
                    className={root.slider}
                    value={values}
                    onChange={setValues}
                    thumbClassName={root.thumb}
                    trackClassName={root.track}
                    min={10}
                    max={300}
                    step={10}
                    defaultValue={values}
                    renderThumb={(props, state) => <div {...props}><span className={root.values}>${state.valueNow}</span></div>}
                    minDistance={50} 
                />
            </div>

            <Line width='100%' top='54px' bottom='24px' />
            
            <div className={root.colors}>
                <div className={root.dFlex}>
                    <h4 className={root.title}>Colors</h4>
                    <MdKeyboardArrowUp size={25} />
                </div>

                <div className={root.items}>
                    {colors}
                </div>

            </div>

            <Line width='100%' bottom='24px' top='24px' />

            <div className={root.size}>
                <div className={root.dFlex}>
                    <h4 className={root.title}>Size</h4>
                    <MdKeyboardArrowUp size={25} />
                </div>

                <div className={root.btns}>
                    <div className={root.cell}>
                        <button>XX-Small</button>
                        <button>X-Small</button>
                    </div>
                    <div className={root.cell}>
                        <button>Small</button>
                        <button>Medium</button>
                    </div>
                    <div className={root.cell}>
                        <button>Large</button>
                        <button>X-Large</button>
                    </div>
                    <div className={root.cell}>
                        <button>XX-Large</button>
                        <button>3X-Large</button>
                    </div>
                    <button>4X-Large</button>
                </div>
            </div>

            <Line width='100%' top='24px' bottom='20px' />

            <div className={root.dressStyle}>
                <div className={root.dFlex}>
                    <h4 className={root.title}>Dress Style</h4>
                    <MdKeyboardArrowUp size={25} />
                </div>

                <div className={root.items}>
                    <div className={root.dFlex}>
                        <span>Casual</span>
                        <MdKeyboardArrowRight size={25} />
                    </div>
                    <div className={root.dFlex}>
                        <span>Formal</span>
                        <MdKeyboardArrowRight size={25} />
                    </div>
                    <div className={root.dFlex}>
                        <span>Party</span>
                        <MdKeyboardArrowRight size={25} />
                    </div>
                    <div className={root.dFlex}>
                        <span>Gym</span>
                        <MdKeyboardArrowRight size={25} />
                    </div>
                </div>
            </div>

            <button className={root.applyFilters}>Apply Filter</button>

        </div>
    );
}
 
export default Filters;
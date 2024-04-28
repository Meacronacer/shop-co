import root from './category.module.scss'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import Filters from './filters/filters';
import { Item } from '../fourItemsTemplate/item/item';
import Line from '../common/Line/line';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive'
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
overlay: {
    backgroundColor: 'rgb(60, 60, 60, 0.6)'
      },
  content: {
    height:'85vh',
    width: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 56%)',
    padding: '0',
    borderRadius: '20px',
    transition: "all 0.5s ease-in-out"
  },
};


const nav = ['Home', 'Casual']


const Category = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const laptop = useMediaQuery({
        query: '(min-width: 880px)'
      })

    const navigation = nav.map((item, index) => {
        return (
            <li key={index}>
                <a>{item}</a> {index !== 1 && <MdKeyboardArrowRight size={25} />}
            </li>
        )
    })

    const afterOpenModal = () => {
        customStyles.content.transform = 'translate(-50%, -40%)'
        setIsOpen(true)
    }

    const afterCloseModal = () => {
        customStyles.content.transform = 'translate(-50%, 56%)'
        setIsOpen(false)
    }   

    return (
        <div className={root.category}>
            <div className={root.navLinks}>
                {navigation}
            </div>

            <div className={root.content}>
                {laptop && <Filters onClick={afterOpenModal} />}

                <div className={root.products}>
                    <div className={root.header} >
                        <h4 className={root.title}>Casual</h4>
                        <div className={root.sort}>
                            <span>Showing 1-10 of 100 Products</span>
                            <span className={root.by}>Sort by: Most Popular <MdKeyboardArrowDown size={25} /></span>
                            {!laptop && <VscSettings className={root.settings} onClick={() => setIsOpen(prev => !prev)} size={30} />}
                        </div>
                    </div>

                    {!laptop && <Modal
                        closeTimeoutMS={500}
                        ariaHideApp={false}
                        onAfterClose={afterCloseModal}
                        onAfterOpen={afterOpenModal}
                        isOpen={modalIsOpen}
                        style={customStyles}
                        contentLabel="Filters"
                    >
                        <Filters laptop={laptop} isOpen={modalIsOpen} afterCloseModal={afterCloseModal} />

                    </Modal>}

                    <div className={root.items}>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>

                    <Line width='100%' top='32px' bottom='20px' />

                    <ReactPaginate
                        className={root.pagination}
                        previousClassName={root.previous}
                        nextClassName={root.next}
                        activeClassName={root.active}
                        breakLabel="..."
                        nextLabel={<span>Next &#8594;</span>}
                        pageRangeDisplayed={3}
                        pageCount={10}
                        previousLabel={<span>&#8592; Previous</span>}
                        renderOnZeroPageCount={null}
                    />

                </div>
            </div>
        </div>
    );
}
 
export default Category;
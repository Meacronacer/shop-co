import root from "./category.module.scss";
import React from "react";
import Line from "../common/Line/line";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";
import NavLinks from "../common/navLinks/navLinks";
import Info from "../info/info";
import ProductSkeleton from "../skeleton/productSkeleton";
import Filters, {
  productColors,
  productDressStylles,
  productsSizes,
  productsTypes,
} from "./filters/filters";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { Item } from "../fourItemsTemplate/item/item";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useLazyGetAllProductsQuery } from "../../redux/api/apiSlices";
import { changeSortBy, product } from "../../redux/slices/productsSlice";

const customStyles = {
  overlay: {
    backgroundColor: "rgb(60, 60, 60, 0.6)",
  },
  content: {
    height: "85vh",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 56%)",
    padding: "0",
    borderRadius: "20px",
    transition: "all 0.5s ease-in-out",
  },
};

const Category = React.memo(() => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLDivElement | null>(null);

  const { colors, sizes, types, dressStyles, applyFilter, price, sortBy } =
    useAppSelector((state) => state.products);
  const [trigger, { data = [], isLoading }] = useLazyGetAllProductsQuery();

  const activeSizes = productsSizes
    .filter((item) => sizes[item])
    .map((item) => `sizes[]=${item}`);
  const activeColors = productColors
    .filter((item) => colors[item])
    .map((item) => `colors[]=${item}`);
  const activeTypes = productsTypes
    .filter((item) => types[item])
    .map((item) => `type[]=${item}`);
  const activeDressStyles = productDressStylles
    .filter((item) => dressStyles[item])
    .map((item) => `dressStyle[]=${item}`);
  const items =
    data &&
    data?.items?.map((item: product) => <Item key={item.id} {...item} />);

  const laptop = useMediaQuery({ query: "(min-width: 880px)" });
  const sortPopupItems = [
    "Rating DESC",
    "Rating ASC",
    "Price DESC",
    "Price ASC",
  ].map((item, index) => {
    return (
      <li key={index} onClick={() => onSortPopupChange(item)}>
        {item}
      </li>
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setPopupVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, []);

  useEffect(() => {
    trigger({
      activeSizes,
      activeColors,
      activeDressStyles,
      activeTypes,
      price,
      sortBy,
      currentPage,
    });
  }, [applyFilter, currentPage, sortBy]);

  if (isLoading) return null;

  console.log(items);

  const onSortPopupChange = (sortBy: string) => {
    dispatch(changeSortBy(sortBy));
    setPopupVisible(false);
  };

  const afterOpenModal = () => {
    customStyles.content.transform = "translate(-50%, -40%)";
    setIsOpen(true);
  };

  const afterCloseModal = () => {
    customStyles.content.transform = "translate(-50%, 56%)";
    setIsOpen(false);
  };

  return (
    <div className={root.category}>
      <NavLinks items={["Home", "Casual"]} />

      <div className={root.content}>
        {laptop && <Filters onClick={afterOpenModal} />}

        <div className={root.products}>
          <div className={root.header}>
            <h4 className={root.title}>Casual</h4>
            <div ref={sortRef} className={root.sort}>
              <span>Showing 1-10 of 100 Products</span>
              <div className={root.by}>
                Sort by:
                <span
                  onClick={() => setPopupVisible((prev) => !prev)}
                  className={root.popular}
                >
                  {sortBy}
                </span>
                {popupVisible && (
                  <ul className={root.popup}>{sortPopupItems}</ul>
                )}
                <MdKeyboardArrowDown size={25} />
              </div>
              {!laptop && (
                <VscSettings
                  className={root.settings}
                  onClick={() => setIsOpen((prev) => !prev)}
                  size={30}
                />
              )}
            </div>
          </div>

          {!laptop && (
            <Modal
              closeTimeoutMS={500}
              ariaHideApp={false}
              onAfterClose={afterCloseModal}
              onAfterOpen={afterOpenModal}
              isOpen={modalIsOpen}
              style={customStyles}
              contentLabel="Filters"
            >
              <Filters
                laptop={laptop}
                isOpen={modalIsOpen}
                afterCloseModal={afterCloseModal}
              />
            </Modal>
          )}

          {items?.length === 0 && !isLoading ? (
            <Info to="/category" title="No ones product find by this request" />
          ) : (
            <div className={root.items}>
              {isLoading
                ? [...new Array(6)].map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))
                : items}
            </div>
          )}

          <Line width="100%" top="32px" bottom="20px" />

          <ReactPaginate
            className={root.pagination}
            previousClassName={root.previous}
            nextClassName={root.next}
            activeClassName={root.active}
            onPageChange={(event) => setCurrentPage(event.selected + 1)}
            breakLabel="..."
            nextLabel={<span>Next &#8594;</span>}
            pageRangeDisplayed={3}
            pageCount={data?.meta?.total_pages}
            previousLabel={<span>&#8592; Previous</span>}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
});

export default Category;

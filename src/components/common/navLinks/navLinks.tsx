import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import root from "./navLinks.module.scss";

interface props {
  items: Array<string>;
}

const NavLinks: React.FC<props> = ({ items }) => {
  const navigation = items.map((item, index) => {
    return (
      <li key={index}>
        <Link to=''>{item}</Link> {index + 1 !== items?.length && <MdKeyboardArrowRight size={25} />}
      </li>
    );
  });

  return <div className={root.navLinks}>{navigation}</div>;
};

export default NavLinks;

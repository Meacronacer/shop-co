import Discount from "../../components/discount/discount";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import root from "./loyaout.module.scss";

interface props {
  children: React.ReactNode;
}

const Loyaout: React.FC<props> = ({ children }) => {
  return (
    <>
      <Discount />
      <div className={root.loyaout}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Loyaout;

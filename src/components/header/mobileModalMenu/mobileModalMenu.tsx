import Modal from "react-modal";
import { motion } from "framer-motion";
import { fadeInVariant, ulVariant, liVariant } from "./mobileAnimationSettings";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  overlay: {
    backgroundColor: "#000",
    zIndex: "5",
    transition: "all 0.3s ease-in-out",
    transform: "translate(0%, -100%)",
    overflow: "hidden",
  },
  content: {
    height: "100vh",
    width: "100%",
    padding: "0",
    borderRadius: "20px 20px 0 0",
    background: "#000",
    color: "#fff",
    inset: "0",
  },
};

interface props {
  showMobileMenu: boolean;
  setShowMobileMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const MobileModalMenu: React.FC<props> = ({
  showMobileMenu,
  setShowMobileMenu,
}) => {
  const afterOpenModal = () => {
    customStyles.overlay.transform = "translate(0%, 0%)";
    setShowMobileMenu(true);
  };

  const afterCloseModal = () => {
    customStyles.overlay.transform = "translate(0%, -100%)";
    setShowMobileMenu(false);
  };

  return (
    <Modal
      closeTimeoutMS={300}
      ariaHideApp={false}
      onAfterClose={afterCloseModal}
      onAfterOpen={afterOpenModal}
      isOpen={showMobileMenu}
      style={customStyles}
      contentLabel="mobileNavLinks"
    >
      <motion.nav
        initial="closed"
        animate={showMobileMenu ? "opened" : "closed"}
      >
        <motion.div className="mobile-menu">
          <motion.div variants={fadeInVariant} onClick={afterCloseModal}>
            <IoMdClose
              style={{ position: "absolute", top: "20px", left: "20px" }}
              size={80}
            />
          </motion.div>
          <motion.ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "20px",
              fontSize: "34px",
              marginTop: "100px",
            }}
            variants={ulVariant}
          >
            {[
              "Shop",
              "On Sale",
              "New Arriwals",
              "Brands",
              "Cart",
              "Profile",
            ].map((item, index) => (
              <motion.li whileTap={{ scale: 0.95 }} key={index}>
                <motion.div variants={liVariant}>{item}</motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.nav>
    </Modal>
  );
};

export default MobileModalMenu;

import root from "./info.module.scss";
import { useNavigate } from "react-router-dom";

interface props {
  title?: string;
  description?: string;
  btnText?: string;
  to: string;
  showButton?: boolean;
}

const Info: React.FC<props> = ({
  title,
  description,
  btnText = "Reload",
  to = "",
  showButton = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className={root.info}>
      <h1>
        <i className={root.icon}>😕</i>
        {title}
      </h1>
      <p className="description">{description}</p>
      {showButton && (
        <button onClick={() => navigate(to)} className={root.btn}>
          {btnText}
        </button>
      )}
    </div>
  );
};

export default Info;

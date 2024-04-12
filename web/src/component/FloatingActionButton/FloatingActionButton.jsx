import "./FloatingActionButton.scss";
import AddIcon from "../../assets/svg/add.svg";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = (props) => {
  const { routes } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes);
  };

  return (
    <div onClick={handleClick} className="fab">
      <img className="fab__icon" src={AddIcon} alt="Floating action button" />
    </div>
  );
};

export default FloatingActionButton;

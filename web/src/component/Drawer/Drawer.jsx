import HomeIcon from "../../assets/svg/home.svg";
import RewardIcon from "../../assets/svg/award.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import SettingIcon from "../../assets/svg/settings.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import "./Drawer.scss";
import Logo from "../../assets/logo/logo_colored.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Drawer = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [clicked, setClicked] = useState("HOME");
  const handeDrawerItemClicked = (value) => {
    setClicked(value);
    switch (value) {
      case "HOME":
        navigate("/app");
        break;
      case "REWARD":
        navigate("/app/awards");
        break;
      case "PROFILE":
        navigate("/app/profile");
        break;
      case "SETTINGS":
        navigate("/app/settings");
        break;
      default:
        navigate("/");
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/auth");
  };

  const setActiveDrawer = () => {
    const path = location.pathname;
    switch (path) {
      case "/app":
        setClicked("HOME");
        break;
      case "/app/awards":
        setClicked("REWARD");
        break;
      case "/app/profile":
        setClicked("PROFILE");
        break;
      case "/app/settings":
        setClicked("SETTINGS");
        break;
      default:
        setClicked("HOME");
    }
  };

  useEffect(() => {
    setActiveDrawer();
  }, [location.pathname]);

  return (
    <section className="drawer">
      <article
        onClick={() => {
          handeDrawerItemClicked("HOME");
        }}
        className="drawer__cont-logo"
      >
        <img className="drawer__logo" src={Logo} alt="App logo" />
      </article>

      <div
        onClick={() => {
          handeDrawerItemClicked("HOME");
        }}
        className={`drawer__ele-c ${
          clicked === "HOME" ? "drawer__ele-selected" : "drawer__ele-unselected"
        }`}
      >
        <img className="drawer__icon" src={HomeIcon} alt="Home Icon" />
        <p className="drawer__name">Home</p>
      </div>
      <div
        onClick={() => {
          handeDrawerItemClicked("REWARD");
        }}
        className={`drawer__ele-c ${
          clicked === "REWARD"
            ? "drawer__ele-selected"
            : "drawer__ele-unselected"
        }`}
      >
        <img className="drawer__icon" src={RewardIcon} alt="reward Icon" />
        <p className="drawer__name">Reward</p>
      </div>
      <div
        onClick={() => {
          handeDrawerItemClicked("PROFILE");
        }}
        className={`drawer__ele-c ${
          clicked === "PROFILE"
            ? "drawer__ele-selected"
            : "drawer__ele-unselected"
        }`}
      >
        <img className="drawer__icon" src={ProfileIcon} alt="Profile Icon" />
        <p className="drawer__name">Profile</p>
      </div>
      <div
        onClick={() => {
          handeDrawerItemClicked("SETTINGS");
        }}
        className={`drawer__ele-c ${
          clicked === "SETTINGS"
            ? "drawer__ele-selected"
            : "drawer__ele-unselected"
        }`}
      >
        <img className="drawer__icon" src={SettingIcon} alt="setting Icon" />
        <p className="drawer__name">Setting</p>
      </div>

      <section>
        <div onClick={handleLogOut} className="drawer__logout">
          <img className="drawer__icon" src={LogoutIcon} alt="setting Icon" />
          <p className="drawer__logout-text">Logout</p>
        </div>
      </section>
    </section>
  );
};
export default Drawer;

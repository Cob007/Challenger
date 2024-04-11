import HomeIcon from "../../assets/svg/home.svg";
import RewardIcon from "../../assets/svg/award.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import SettingIcon from "../../assets/svg/settings.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import "./Drawer.scss";
import Logo from "../../assets/logo/logo_colored.svg";

const Drawer = (props) => {
  return (
    <section className="drawer">
      <article className="drawer__cont-logo">
        <img className="drawer__logo" src={Logo} alt="App logo" />
      </article>

      <div className="drawer__ele-c">
        <img className="drawer__icon" src={HomeIcon} alt="Home Icon" />
        <p className="drawer__name">Home</p>
      </div>
      <div className="drawer__ele-c">
        <img className="drawer__icon" src={RewardIcon} alt="reward Icon" />
        <p className="drawer__name">Reward</p>
      </div>
      <div className="drawer__ele-c">
        <img className="drawer__icon" src={ProfileIcon} alt="Profile Icon" />
        <p className="drawer__name">Profile</p>
      </div>
      <div className="drawer__ele-c">
        <img className="drawer__icon" src={SettingIcon} alt="setting Icon" />
        <p className="drawer__name">Setting</p>
      </div>

      <section>
      <div className="drawer__logout">
        <img className="drawer__icon" src={LogoutIcon} alt="setting Icon" />
        <p className="drawer__name--logout">Logout</p>
      </div>
      </section>
    </section>
  );
};
export default Drawer;

import "./LoginBanner.scss";
import Logo from "../../assets/logo/logo_colored.svg";

const LoginBanner = () => {
  return (
    <section className="banner">
      <img className="banner__app-logo" src={Logo} alt="App logo" />
      <h3 className="banner__app-desp">Challenger helps you connect and share with the people in your life.</h3>
    </section>
  );
};

export default LoginBanner;

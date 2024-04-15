import { useEffect, useState } from "react";
import LoginBanner from "../../component/LoginBanner/LoginBanner";
import Login from "../../component/LoginCard/LoginCard";
import Register from "../../component/RegisterCard/RegisterCard";
import "./LoginPage.scss";
import Logo from "../../assets/logo/logo_colored.svg";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [view, setView] = useState("login");

  const navigate = useNavigate()
  const location = useLocation()


  useEffect(()=> {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      navigate('/auth')
    } else {
      navigate('/app')
    }

  },[location.pathname])


  const handleViewChange = (_view) => {
    setView(_view);
  };
  return (
    <main className="loginpage">
      <section className="loginpage__banner">
        <LoginBanner />
      </section>
      <section className="loginpage__component">
        <section className="loginpage__cc">
          <img className="banner__app-logo" src={Logo} alt="App logo" />
          <h3 className="banner__app-desp">
            Challenger helps you connect and share<br/>with the people in your life.
          </h3>
        </section>
        {view == "login" ? (
          <Login handleViewChange={handleViewChange} />
        ) : (
          <Register handleViewChange={handleViewChange} />
        )}
      </section>
    </main>
  );
};

export default LoginPage;

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./LoginCard.scss";
import { useState } from "react";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import axios from "axios";
const LoginCard = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { handleViewChange } = props;
  const navigate = useNavigate();

  const handleBtnClicked = async () => {
    try {
      const { email, password } = loginData;
      if (!!email && !!password) {
        const url = `${BASE_URL}${STAGING_PATH}/user/login`;
        const apiRes = await axios.post(url, loginData);
        console.log(apiRes.data.status)

        if (apiRes.data.status === 200) {
          localStorage.setItem("authToken", apiRes.data.data.token);
          navigate("/app");
        }else if (apiRes.data.status === 400){
          console.log(apiRes)

          alert(apiRes.data.message)
        }
      } else {
        alert("Please provide credentials");
      }
    } catch (error) {}
  };

  const handleUsernameChange = (event) => {
    setLoginData({
      ...loginData,
      email: event.target.value,
    });
  };
  const handlePasswordChange = (event) => {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  };

  return (
    <main className="logincard">
      <div className="logincard__div-input">
        <input
          className="logincard__username"
          type="text"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Email address"
        />
      </div>

      <div className="logincard__div-input">
        <input
          className="logincard__password"
          type="password"
          name="username"
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </div>

      <div className="logincard__div-input">
        <Button name={"Login"} btnClick={handleBtnClicked} />
      </div>

      <div className="logincard__div-input">
        <p className="logincard__p">
          Don't have an account?{" "}
          <span
            onClick={() => {
              handleViewChange("register");
            }}
            className="logincard__p--span"
          >
            Sign Up
          </span>
        </p>
      </div>
      <div className="logincard__div-input">
        <p className="logincard__p logincard__tc ">Terms and conditions</p>
      </div>
    </main>
  );
};

export default LoginCard;

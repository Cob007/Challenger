import { useState } from "react";
import Button from "../Button/Button";

import "./RegisterCard.scss";
import { BASE_URL, STAGING_PATH } from "../../constant/Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterCard = (props) => {
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const handleFirstnameChange = (event) => {
    setRegisterData({
      ...registerData,
      firstname: event.target.value,
    });
  };
  const handleLastnameChange = (event) => {
    setRegisterData({
      ...registerData,
      lastname: event.target.value,
    });
  };
  const handleUsernameChange = (event) => {
    setRegisterData({
      ...registerData,
      username: event.target.value,
    });
  };
  const handleEmailChange = (event) => {
    setRegisterData({
      ...registerData,
      email: event.target.value,
    });
  };
  const handlePasswordChange = (event) => {
    setRegisterData({
      ...registerData,
      password: event.target.value,
    });
  };
  const handleCpasswordChange = (event) => {
    setRegisterData({
      ...registerData,
      cpassword: event.target.value,
    });
  };

  const handleBtnClicked = async () => {
    try {
      const { firstname, lastname, username, email, password, cpassword } =
      registerData;
    if (
      !!firstname &&
      !!lastname &&
      !!username &&
      !!email &&
      !!password &&
      !!cpassword
    ) {
      if (password === cpassword) {
        
        const url = `${BASE_URL}${STAGING_PATH}/user/register`;
        console.log(url)
        const resRegister = await axios.post(url, {
          firstname: firstname,
          lastname: lastname,
          email: email,
          username: username,
          password: password,
        });
        console.log(resRegister)

        if (resRegister.data.status == 201) {
          console.log(resRegister.data.status)

          localStorage.setItem("authToken", resRegister.data.data.token);
          navigate("/app/");
        }
      } else {
        alert("Password doesn't match");
      }
    } else {
      alert("Please provide credentials");
    }
    } catch (error) {
      
    }
  };

  const { handleViewChange } = props;

  return (
    <main className="regcard">
      <div className="regcard__column">
        <div className="regcard__div-input regcard__div-column">
          <input
            className="regcard__username"
            type="text"
            name="firstname"
            onChange={handleFirstnameChange}
            placeholder="Firstname"
          />
        </div>
        <div className="regcard__div-input regcard__div-columm">
          <input
            className="regcard__username"
            type="text"
            name="lastname"
            onChange={handleLastnameChange}
            placeholder="Lastname"
          />
        </div>
      </div>
      <div className="regcard__div-input">
        <input
          className="regcard__username"
          type="text"
          name="email"
          onChange={handleEmailChange}
          placeholder="Email"
        />
      </div>
      <div className="regcard__div-input">
        <input
          className="regcard__username"
          type="text"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Username"
        />
      </div>

      <div className="regcard__div-input">
        <input
          className="regcard__password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          placeholder="Password"
        />
      </div>

      <div className="regcard__div-input">
        <input
          className="regcard__password"
          type="password"
          name="cpassword"
          onChange={handleCpasswordChange}
          placeholder="Confirm Password"
        />
      </div>

      <div className="regcard__div-input">
        <Button btnClick={handleBtnClicked} name={"Register"} />
      </div>

      <div className="regcard__div-input">
        <p className="regcard__p">
          Already have an account?{" "}
          <span
            onClick={() => {
              handleViewChange("login");
            }}
            className="regcard__p--span"
          >
            Login
          </span>
        </p>
      </div>
    </main>
  );
};
export default RegisterCard;

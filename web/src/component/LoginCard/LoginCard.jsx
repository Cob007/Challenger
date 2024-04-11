import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./LoginCard.scss";
const LoginCard = (props) => {
  const { handleViewChange } = props;
  const navigate = useNavigate();

  const handleBtnClicked = () => {
    navigate('/app')
  }

  const handleUsernameChange = (event) => {};
  return (
    <main className="logincard">
      <div className="logincard__div-input">
        <input
          className="logincard__username"
          type="text"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Username or email address"
        />
      </div>

      <div className="logincard__div-input">
        <input
          className="logincard__password"
          type="password"
          name="username"
          onChange={handleUsernameChange}
          placeholder="Password"
        />
      </div>

      <div className="logincard__div-input">
        <Button  name={"Login"} btnClick={handleBtnClicked}/>
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
        <p className="logincard__p logincard__tc ">
          Terms and conditions
        </p>
      </div>
    </main>
  );
};

export default LoginCard;

import Button from "../Button/Button";

import "./RegisterCard.scss";
const RegisterCard = (props) => {
  const { handleViewChange } = props;

  const handleUsernameChange = (event) => {};
  return (
    <main className="regcard">
      <div className="regcard__column">
        <div className="regcard__div-input regcard__div-column">
          <input
            className="regcard__username"
            type="text"
            name="firstname"
            onChange={handleUsernameChange}
            placeholder="Firstname"
          />
        </div>
        <div className="regcard__div-input regcard__div-columm">
          <input
            className="regcard__username"
            type="text"
            name="lastname"
            onChange={handleUsernameChange}
            placeholder="Lastname"
          />
        </div>
      </div>
      <div className="regcard__div-input">
        <input
          className="regcard__username"
          type="text"
          name="email"
          onChange={handleUsernameChange}
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
          onChange={handleUsernameChange}
          placeholder="Password"
        />
      </div>

      <div className="regcard__div-input">
        <input
          className="regcard__password"
          type="password"
          name="cpassword"
          onChange={handleUsernameChange}
          placeholder="Confirm Password"
        />
      </div>

      <div className="regcard__div-input">
        <Button name={"Register"} />
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

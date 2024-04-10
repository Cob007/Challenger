import "./Button.scss";

const Button = (props) => {
  const { name, btnClick } = props;
  return (
    <div onClick={btnClick} className="btn">
      <p className="btn__text">{name}</p>
    </div>
  );
};

export default Button;

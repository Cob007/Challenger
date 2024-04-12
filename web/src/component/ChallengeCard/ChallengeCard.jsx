import "./ChallengeCard.scss";
import PhotoOfThDay from "../../assets/images/photo2.avif";
import Button from "../Button/Button";

const ChallengeCard = (props) => {
  const { challenge } = props;

  return (
    <section className="card">
      <div className="card__img-bk">
        <img
          className="card__img"
          src={PhotoOfThDay}
          alt="challenge sample photo"
        />
      </div>

      <div className="card__details">
        <h2 className="card__title">Photo of the Day</h2>
        <p className="card__desp">
          This challenge : Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est
        </p>
      </div>
    </section>
  );
};

export default ChallengeCard;

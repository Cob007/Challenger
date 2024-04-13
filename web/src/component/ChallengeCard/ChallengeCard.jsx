import "./ChallengeCard.scss";
import PhotoOfThDay from "../../assets/images/photo2.avif";

const ChallengeCard = (props) => {
  const { challenge, handleChallengeClicked} = props;

  return (
    <section onClick={()=>{
        handleChallengeClicked(challenge?.id||1)
    }} className="card">
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

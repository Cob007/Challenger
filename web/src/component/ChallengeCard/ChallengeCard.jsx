import "./ChallengeCard.scss";
import PhotoOfThDay from "../../assets/images/photo2.avif";

const ChallengeCard = (props) => {
  const { challenge, handleChallengeClicked} = props;

  return (
    <section onClick={()=>{
        handleChallengeClicked(challenge?.id)
    }} className="card">
      <div className="card__img-bk">
        <img
          className="card__img"
          src={challenge?.contenturl}
          alt="challenge sample photo"
        />
      </div>

      <div className="card__details">
        <h2 className="card__title">{challenge?.title}</h2>
        <p className="card__desp">
          This challenge : {challenge?.description}
        </p>
      </div>
    </section>
  );
};

export default ChallengeCard;

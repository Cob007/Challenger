import "./ChallengeList.scss";
import ChallengeCard from "../ChallengeCard/ChallengeCard";
const ChallengeList = (props) => {
  const { data } = props;

  return (
    <section className="list">
     
        {data.map((_challenge, index) => (
          
            <ChallengeCard  key={index} challenge={_challenge} />
          
        ))}
    </section>
  );
};

export default ChallengeList;

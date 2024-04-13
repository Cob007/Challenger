import { useNavigate } from "react-router-dom";
import ChallengeList from "../../component/ChallengeList/ChallengeList";
import FloatingActionButton from "../../component/FloatingActionButton/FloatingActionButton";
import Searchbar from "../../component/SearchBar/SearchBar";
import "./HomePage.scss";
const HomePage = () => {
    const navigate = useNavigate();
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  const _handleChallengeClicked = (challengeId) => {
    navigate(`/app/${challengeId}`)
  }


  return (
    <main className="homepage">
      <section className="homepage__view">
        <Searchbar placeholderText={`Find Challenges by title`}/>
        <ChallengeList data={data} handleChallengeClicked={_handleChallengeClicked} />
      </section>

      <section className="homepage__fab">
        <FloatingActionButton  routes={`/app/c/add`}/>
      </section>
    </main>
  );
};

export default HomePage;
